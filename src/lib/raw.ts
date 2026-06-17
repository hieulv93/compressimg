// Zero-WASM RAW → JPG extractor.
// Extracts the largest embedded JPEG preview from RAW camera files.
// Supports: CR2, CR3, NEF, ARW, DNG (TIFF-IFD + CR3 BMFF paths).

export interface RawExtractResult {
  blob: Blob
  previewWidth: number
  previewHeight: number
  sensorWidth: number
  sensorHeight: number
  // true when the largest found preview is < 50% of sensor size (thumbnail-only file)
  isThumbnailOnly: boolean
  formatLabel: string
}

const RAW_EXTENSIONS = ['cr2', 'cr3', 'nef', 'arw', 'dng', 'raf', 'rw2', 'orf']

export function isRawFile(file: File): boolean {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  return RAW_EXTENSIONS.includes(ext)
}

// ─── JPEG helpers ────────────────────────────────────────────────────────────

function readJpegDimensions(data: Uint8Array): { w: number; h: number } | null {
  if (data[0] !== 0xff || data[1] !== 0xd8) return null
  let i = 2
  while (i + 4 < data.length) {
    if (data[i] !== 0xff) break
    const marker = data[i + 1]
    const segLen = (data[i + 2] << 8) | data[i + 3]
    if ((marker === 0xc0 || marker === 0xc2) && i + 8 < data.length) {
      return { h: (data[i + 5] << 8) | data[i + 6], w: (data[i + 7] << 8) | data[i + 8] }
    }
    i += 2 + segLen
  }
  return null
}

// Trim trailing bytes after JPEG EOI marker (0xFFD9)
function trimJpeg(data: Uint8Array): Uint8Array {
  for (let i = data.length - 2; i > 0; i--) {
    if (data[i] === 0xff && data[i + 1] === 0xd9) return data.slice(0, i + 2)
  }
  return data
}

// ─── TIFF-IFD path (CR2, NEF, ARW, DNG, RAF, RW2, ORF) ──────────────────────

interface JpegCandidate {
  offset: number
  length: number
}

function readTagValue(view: DataView, base: number, type: number, le: boolean): number {
  // Returns inline value for count=1 entries that fit in 4 bytes.
  // For LONG/RATIONAL/larger: returns the 4-byte offset field as-is (it IS an offset).
  switch (type) {
    case 1:
      return view.getUint8(base + 8) // BYTE
    case 3:
      return view.getUint16(base + 8, le) // SHORT
    case 4:
      return view.getUint32(base + 8, le) // LONG
    default:
      return view.getUint32(base + 8, le) // treat unknown as offset
  }
}

function walkIFD(
  view: DataView,
  bytes: Uint8Array,
  ifdOffset: number,
  le: boolean,
  candidates: JpegCandidate[],
  sensor: { w: number; h: number },
  depth: number
) {
  if (depth > 8 || ifdOffset < 8 || ifdOffset + 2 > view.byteLength) return
  let entryCount: number
  try {
    entryCount = view.getUint16(ifdOffset, le)
  } catch {
    return
  }
  if (entryCount > 500) return

  const tags = new Map<number, { type: number; count: number; val: number }>()
  for (let i = 0; i < entryCount; i++) {
    const base = ifdOffset + 2 + i * 12
    if (base + 12 > view.byteLength) break
    const tag = view.getUint16(base, le)
    const type = view.getUint16(base + 2, le)
    const count = view.getUint32(base + 4, le)
    tags.set(tag, { type, count, val: readTagValue(view, base, type, le) })
  }

  // Sensor dimensions
  const iw = tags.get(0x0100)
  if (iw && iw.val > sensor.w) sensor.w = iw.val
  const ih = tags.get(0x0101)
  if (ih && ih.val > sensor.h) sensor.h = ih.val

  // Strip-based JPEG (Compression = 6 or 7)
  const comp = tags.get(0x0103)
  if (comp && (comp.val === 6 || comp.val === 7)) {
    const so = tags.get(0x0111),
      sb = tags.get(0x0117)
    if (so && sb && so.val > 0 && sb.val > 0) {
      if (so.count === 1) {
        candidates.push({ offset: so.val, length: sb.val })
      } else {
        // Multi-strip path: older Canon DSLRs (Rebel era) store preview across multiple strips.
        // so.val / sb.val are pointers to LONG (or SHORT) arrays when count > 1.
        const soStride = so.type === 3 ? 2 : 4
        const sbStride = sb.type === 3 ? 2 : 4
        for (let j = 0; j < Math.min(so.count, 16); j++) {
          const oo = so.val + j * soStride
          const lo = sb.val + j * sbStride
          if (oo + soStride > view.byteLength || lo + sbStride > view.byteLength) break
          const stripOff = so.type === 3 ? view.getUint16(oo, le) : view.getUint32(oo, le)
          const stripLen = sb.type === 3 ? view.getUint16(lo, le) : view.getUint32(lo, le)
          if (stripOff > 0 && stripLen > 0) candidates.push({ offset: stripOff, length: stripLen })
        }
      }
    }
  }

  // JPEG Interchange Format (thumbnail/preview)
  const jo = tags.get(0x0201),
    jl = tags.get(0x0202)
  if (jo && jl && jo.val > 0 && jl.val > 0) {
    candidates.push({ offset: jo.val, length: jl.val })
  }

  // SubIFD offsets (0x014A)
  const sub = tags.get(0x014a)
  if (sub) {
    if (sub.count === 1) {
      walkIFD(view, bytes, sub.val, le, candidates, sensor, depth + 1)
    } else {
      for (let j = 0; j < Math.min(sub.count, 8); j++) {
        const off = sub.val + j * 4
        if (off + 4 <= view.byteLength) {
          walkIFD(view, bytes, view.getUint32(off, le), le, candidates, sensor, depth + 1)
        }
      }
    }
  }

  // Next IFD in chain
  const chainOff = ifdOffset + 2 + entryCount * 12
  if (chainOff + 4 <= view.byteLength) {
    const next = view.getUint32(chainOff, le)
    if (next !== 0 && next !== ifdOffset && next < view.byteLength) {
      walkIFD(view, bytes, next, le, candidates, sensor, depth + 1)
    }
  }
}

function extractFromTiff(
  buf: ArrayBuffer
): { jpeg: Uint8Array; sensorW: number; sensorH: number } | null {
  const view = new DataView(buf)
  const bytes = new Uint8Array(buf)

  const bom = view.getUint16(0, true)
  if (bom !== 0x4949 && bom !== 0x4d4d) return null
  const le = bom === 0x4949

  const magic = view.getUint16(2, le)
  if (magic !== 42 && magic !== 0x55) return null // 0x55 = Panasonic RW2 quirk

  const ifd0 = view.getUint32(4, le)
  const candidates: JpegCandidate[] = []
  const sensor = { w: 0, h: 0 }

  walkIFD(view, bytes, ifd0, le, candidates, sensor, 0)

  let best: { data: Uint8Array; w: number; h: number } | null = null
  for (const c of candidates) {
    if (c.offset <= 0 || c.length <= 0 || c.offset + c.length > bytes.length) continue
    const slice = bytes.slice(c.offset, c.offset + c.length)
    const dims = readJpegDimensions(slice)
    if (!dims) continue
    if (!best || dims.w * dims.h > best.w * best.h) {
      best = { data: trimJpeg(slice), w: dims.w, h: dims.h }
    }
  }

  return best ? { jpeg: best.data, sensorW: sensor.w, sensorH: sensor.h } : null
}

// ─── CR3 BMFF path ────────────────────────────────────────────────────────────

function u32be(bytes: Uint8Array, o: number): number {
  return ((bytes[o] << 24) | (bytes[o + 1] << 16) | (bytes[o + 2] << 8) | bytes[o + 3]) >>> 0
}

interface Cr3Preview {
  offset: number
  length: number
  priority: number
}

function scanForJpeg(bytes: Uint8Array, start: number, end: number): number {
  for (let i = start; i < end - 1; i++) {
    if (bytes[i] === 0xff && bytes[i + 1] === 0xd8) return i
  }
  return -1
}

function walkBMFF(bytes: Uint8Array, start: number, end: number, previews: Cr3Preview[]) {
  let o = start
  while (o + 8 <= end) {
    let size = u32be(bytes, o)
    const type = String.fromCharCode(bytes[o + 4], bytes[o + 5], bytes[o + 6], bytes[o + 7])

    // Extended 64-bit size — rare for CR3 preview boxes, treat as rest-of-container
    if (size === 1) {
      size = end - o
    }
    if (size === 0) {
      size = end - o
    } // "rest of file" semantics
    if (size < 8 || o + size > end) break

    const boxEnd = o + size

    if ('moov trak mdia minf stbl'.includes(type)) {
      walkBMFF(bytes, o + 8, boxEnd, previews)
    } else if (type === 'uuid' && o + 24 <= boxEnd) {
      const uuid = Array.from(bytes.slice(o + 8, o + 24))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
      // THMB uuid (thumbnail ~160×120) — priority 1
      if (uuid === '85c0b687820f11e08111f4ce462b6a48') {
        const jpegStart = scanForJpeg(bytes, o + 24, boxEnd)
        if (jpegStart !== -1)
          previews.push({ offset: jpegStart, length: boxEnd - jpegStart, priority: 1 })
      }
      // PRVW uuid (preview ~1620×1080) — priority 2
      if (uuid === 'eaf42b5e1c984b88b9fbb7dc406e4d16') {
        const jpegStart = scanForJpeg(bytes, o + 24, boxEnd)
        if (jpegStart !== -1)
          previews.push({ offset: jpegStart, length: boxEnd - jpegStart, priority: 2 })
      }
    } else if (type === 'mdat') {
      // First mdat track often contains full-size JPEG for CR3
      const jpegStart = o + 8
      if (jpegStart + 2 <= boxEnd && bytes[jpegStart] === 0xff && bytes[jpegStart + 1] === 0xd8) {
        previews.push({ offset: jpegStart, length: boxEnd - jpegStart, priority: 3 })
      }
    }

    o = boxEnd
  }
}

function extractFromCr3(
  buf: ArrayBuffer
): { jpeg: Uint8Array; sensorW: number; sensorH: number } | null {
  const bytes = new Uint8Array(buf)
  if (bytes.length < 12) return null

  // Verify 'crx ' brand in ftyp box
  const brand = String.fromCharCode(bytes[8], bytes[9], bytes[10], bytes[11])
  if (brand !== 'crx ') return null

  const previews: Cr3Preview[] = []
  walkBMFF(bytes, 0, bytes.length, previews)

  // Pick highest-priority valid JPEG
  previews.sort((a, b) => b.priority - a.priority)
  for (const p of previews) {
    const slice = bytes.slice(p.offset, p.offset + p.length)
    const dims = readJpegDimensions(slice)
    if (dims) return { jpeg: trimJpeg(slice), sensorW: 0, sensorH: 0 }
  }
  return null
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function extractRawPreview(file: File): Promise<RawExtractResult> {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  const formatLabel = ext.toUpperCase()
  const buf = await file.arrayBuffer()

  const result = ext === 'cr3' ? extractFromCr3(buf) : extractFromTiff(buf)

  if (!result) {
    throw new Error(
      `No embedded JPEG preview found in this ${formatLabel} file. ` +
        'Some very old cameras or DNG files converted from phone RAW may not include a full preview.'
    )
  }

  const dims = readJpegDimensions(result.jpeg)
  if (!dims) throw new Error('Extracted data is not a valid JPEG.')

  const blob = new Blob([result.jpeg.buffer as ArrayBuffer], { type: 'image/jpeg' })

  const isThumbnailOnly =
    result.sensorW > 0 && result.sensorH > 0
      ? dims.w < result.sensorW * 0.5 || dims.h < result.sensorH * 0.5
      : Math.max(dims.w, dims.h) < 1024

  return {
    blob,
    previewWidth: dims.w,
    previewHeight: dims.h,
    sensorWidth: result.sensorW,
    sensorHeight: result.sensorH,
    isThumbnailOnly,
    formatLabel,
  }
}
