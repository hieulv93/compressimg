export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp'

export interface ConvertOptions {
  outputFormat: OutputFormat
}

export interface ConvertResult {
  blob: Blob
  previewUrl: string
  inputFormat: string
  outputExt: string
  originalSize: number
  outputSize: number
}

export function formatToExt(mime: OutputFormat): string {
  if (mime === 'image/jpeg') return 'jpg'
  if (mime === 'image/png') return 'png'
  return 'webp'
}

export function formatLabel(mime: string): string {
  if (mime === 'image/jpeg' || mime === 'jpg' || mime === 'jpeg') return 'JPG'
  if (mime === 'image/png' || mime === 'png') return 'PNG'
  if (mime === 'image/webp' || mime === 'webp') return 'WebP'
  return mime.toUpperCase()
}

export async function convertImage(file: File, options: ConvertOptions): Promise<ConvertResult> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file)
    const img = new Image()

    img.onload = () => {
      URL.revokeObjectURL(objectUrl)

      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Canvas context unavailable'))
        return
      }

      // PNG/WebP with alpha → JPEG: canvas default is transparent, JPEG has no alpha → fills black
      // Fill white background before drawing to prevent black artifacts
      if (options.outputFormat === 'image/jpeg') {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(img, 0, 0)

      // PNG: no quality param (lossless). JPEG/WebP: 0.92 for good quality/size balance
      const quality = options.outputFormat === 'image/png' ? undefined : 0.92

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to generate image blob'))
            return
          }
          const previewUrl = URL.createObjectURL(blob)
          resolve({
            blob,
            previewUrl,
            inputFormat: file.type.split('/')[1] ?? 'jpeg',
            outputExt: formatToExt(options.outputFormat),
            originalSize: file.size,
            outputSize: blob.size,
          })
        },
        options.outputFormat,
        quality
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl)
      reject(new Error('Failed to load image'))
    }

    img.src = objectUrl
  })
}

export function revokeConvertPreview(url: string) {
  URL.revokeObjectURL(url)
}

export async function convertTiffToJpg(file: File): Promise<ConvertResult> {
  const buf = await file.arrayBuffer()
  // Dynamic import — utif is only needed for TIFF, keep it out of the main bundle
  const UTIF = (await import('utif')).default
  const ifds = UTIF.decode(buf)
  if (!ifds || ifds.length === 0) throw new Error('Failed to decode TIFF')
  UTIF.decodeImage(buf, ifds[0])
  const rgba = UTIF.toRGBA8(ifds[0])
  const width = ifds[0].width as number
  const height = ifds[0].height as number

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas context unavailable')

  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)
  ctx.putImageData(new ImageData(new Uint8ClampedArray(rgba), width, height), 0, 0)

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Failed to generate JPEG'))
          return
        }
        resolve({
          blob,
          previewUrl: URL.createObjectURL(blob),
          inputFormat: 'tiff',
          outputExt: 'jpg',
          originalSize: file.size,
          outputSize: blob.size,
        })
      },
      'image/jpeg',
      0.92
    )
  })
}

export { triggerDownload } from './compress'

async function getSvgSize(file: File): Promise<{ width: number; height: number }> {
  try {
    const text = await file.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(text, 'image/svg+xml')
    const svg = doc.documentElement
    const w = parseFloat(svg.getAttribute('width') || '0')
    const h = parseFloat(svg.getAttribute('height') || '0')
    if (w > 0 && h > 0) return { width: Math.round(w), height: Math.round(h) }
    const vb = svg.getAttribute('viewBox')
    if (vb) {
      const parts = vb.trim().split(/[\s,]+/)
      const vw = parseFloat(parts[2] || '0')
      const vh = parseFloat(parts[3] || '0')
      if (vw > 0 && vh > 0) return { width: Math.round(vw), height: Math.round(vh) }
    }
  } catch {}
  return { width: 800, height: 600 }
}

export async function convertSvgToPng(file: File): Promise<ConvertResult> {
  const { width, height } = await getSvgSize(file)

  // Cap at 4096px to avoid huge PNG output while keeping aspect ratio
  const MAX_DIM = 4096
  const scale = Math.min(1, MAX_DIM / Math.max(width, height))
  const finalW = Math.max(1, Math.round(width * scale))
  const finalH = Math.max(1, Math.round(height * scale))

  // Re-serialize SVG with explicit dimensions so browser renders at correct size
  const text = await file.text()
  const parser = new DOMParser()
  const doc = parser.parseFromString(text, 'image/svg+xml')
  const svgEl = doc.documentElement
  svgEl.setAttribute('width', String(finalW))
  svgEl.setAttribute('height', String(finalH))
  const svgBlob = new Blob([new XMLSerializer().serializeToString(doc)], { type: 'image/svg+xml' })
  const objectUrl = URL.createObjectURL(svgBlob)

  return new Promise((resolve, reject) => {
    const img = new window.Image()

    img.onload = () => {
      URL.revokeObjectURL(objectUrl)
      const canvas = document.createElement('canvas')
      canvas.width = finalW
      canvas.height = finalH
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Canvas context unavailable'))
        return
      }
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, finalW, finalH)
      ctx.drawImage(img, 0, 0, finalW, finalH)
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Failed to generate PNG'))
          return
        }
        resolve({
          blob,
          previewUrl: URL.createObjectURL(blob),
          inputFormat: 'svg',
          outputExt: 'png',
          originalSize: file.size,
          outputSize: blob.size,
        })
      }, 'image/png')
    }

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl)
      reject(new Error('Failed to load SVG'))
    }

    img.src = objectUrl
  })
}
