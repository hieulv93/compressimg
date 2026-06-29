import type { CompressResult } from './compress'

export interface TargetCompressResult extends CompressResult {
  iterations: number
  downscaled: boolean
  finalWidth: number | null
  status: 'success' | 'unreachable'
}

export class QualityExhaustedError extends Error {
  constructor(
    public readonly iterations: number,
    public readonly bestFallback: { blob: Blob; size: number; format: string }
  ) {
    super('quality_exhausted')
    this.name = 'QualityExhaustedError'
  }
}

const MIN_Q = 0.3
const MAX_Q = 0.95
const MAX_ITER = 7
const TOLERANCE = 0.9

export const DOWNSCALE_DIM = 1280

function inBand(size: number, target: number) {
  return size <= target && size >= TOLERANCE * target
}

export async function compressToTarget(
  file: File,
  targetBytes: number,
  isAborted: () => boolean,
  onProgress: (iteration: number, currentSize: number) => void
): Promise<TargetCompressResult> {
  const { isHeicFile, convertHeicToJpeg } = await import('./heic')
  const src = isHeicFile(file) ? await convertHeicToJpeg(file) : file
  const { default: imageCompression } = await import('browser-image-compression')
  const format = src.type.split('/')[1] ?? 'jpeg'
  const fileType = src.type as 'image/jpeg' | 'image/png' | 'image/webp'

  const compress = (opts: {
    maxSizeMB?: number
    initialQuality: number
    alwaysKeepResolution: boolean
    maxWidthOrHeight?: number
  }) =>
    imageCompression(src, {
      ...(opts.maxSizeMB !== undefined ? { maxSizeMB: opts.maxSizeMB } : {}),
      initialQuality: opts.initialQuality,
      alwaysKeepResolution: opts.alwaysKeepResolution,
      maxWidthOrHeight: opts.maxWidthOrHeight ?? 1920,
      useWebWorker: true,
      fileType,
    })

  // Edge case: file already under target
  if (file.size <= targetBytes) {
    return {
      blob: file,
      originalSize: file.size,
      compressedSize: file.size,
      format,
      previewUrl: URL.createObjectURL(file),
      iterations: 0,
      downscaled: false,
      finalWidth: null,
      status: 'success',
    }
  }

  if (isAborted()) throw new DOMException('Aborted', 'AbortError')

  // FR-2a step 1: first pass targeting maxSizeMB
  const first = await compress({
    maxSizeMB: targetBytes / 1_048_576,
    initialQuality: 0.8,
    alwaysKeepResolution: true,
  })
  onProgress(1, first.size)

  if (isAborted()) throw new DOMException('Aborted', 'AbortError')

  if (inBand(first.size, targetBytes)) {
    return {
      blob: first,
      originalSize: file.size,
      compressedSize: first.size,
      format,
      previewUrl: URL.createObjectURL(first),
      iterations: 1,
      downscaled: false,
      finalWidth: null,
      status: 'success',
    }
  }

  // Set binary search bounds based on first pass result.
  //
  // Overshoot (first.size > target): search [MIN_Q, 0.8] for a lower-quality blob that fits.
  // Undershoot (first.size < target): search [0.8, MAX_Q] to find the highest quality that
  //   still fits, maximising output size while staying under target.
  //
  // INVARIANT: `best` is mutated only when blob.size <= targetBytes.
  // The sole return path uses best.size, so compressedSize <= targetBytes is structurally
  // guaranteed regardless of which qHigh is chosen.  If no blob.size <= targetBytes is ever
  // found (best === null) QualityExhaustedError is thrown — no over-target blob is returned.
  let qLow: number, qHigh: number
  if (first.size > targetBytes) {
    qLow = MIN_Q
    qHigh = 0.8
  } else {
    // first.size < targetBytes — already a valid candidate; widen search upward.
    qLow = 0.8
    qHigh = MAX_Q
  }

  let best: { blob: Blob; size: number } | null =
    first.size <= targetBytes ? { blob: first, size: first.size } : null
  // Tracks the smallest over-target result for QualityExhaustedError fallback (used only
  // when best === null, i.e. every attempt overshot — so the undershoot init value here
  // is a safe sentinel that is never actually surfaced to the caller).
  let closestFallback: { blob: Blob; size: number } = { blob: first, size: first.size }

  let iterations = 1

  for (let i = 0; i < MAX_ITER; i++) {
    if (isAborted()) throw new DOMException('Aborted', 'AbortError')

    const qMid = Math.min(MAX_Q, Math.max(MIN_Q, (qLow + qHigh) / 2))
    const blob = await compress({ initialQuality: qMid, alwaysKeepResolution: true })
    iterations++
    onProgress(iterations, blob.size)

    if (blob.size <= targetBytes) {
      // Largest under-target = best quality while staying under
      if (!best || blob.size > best.size) best = { blob, size: blob.size }
      if (inBand(blob.size, targetBytes)) break // close enough, stop early
      qLow = qMid // try higher quality
    } else {
      if (blob.size < closestFallback.size) closestFallback = { blob, size: blob.size }
      qHigh = qMid // try lower quality
    }

    if (qHigh - qLow < 0.005) break // converged
  }

  if (best) {
    return {
      blob: best.blob,
      originalSize: file.size,
      compressedSize: best.size,
      format,
      previewUrl: URL.createObjectURL(best.blob),
      iterations,
      downscaled: false,
      finalWidth: null,
      status: 'success',
    }
  }

  // No under-target result found — caller must prompt for downscale (FR-3)
  throw new QualityExhaustedError(iterations, {
    blob: closestFallback.blob,
    size: closestFallback.size,
    format,
  })
}

export async function compressToTargetWithDownscale(
  file: File,
  targetBytes: number,
  maxDim: number,
  isAborted: () => boolean,
  onProgress: (iteration: number, currentSize: number) => void,
  baseIterations: number
): Promise<TargetCompressResult> {
  if (isAborted()) throw new DOMException('Aborted', 'AbortError')

  const { isHeicFile, convertHeicToJpeg } = await import('./heic')
  const src = isHeicFile(file) ? await convertHeicToJpeg(file) : file
  const { default: imageCompression } = await import('browser-image-compression')

  const blob = await imageCompression(src, {
    maxSizeMB: targetBytes / 1_048_576,
    initialQuality: 0.8,
    maxWidthOrHeight: maxDim,
    alwaysKeepResolution: false,
    useWebWorker: true,
    fileType: src.type as 'image/jpeg' | 'image/png' | 'image/webp',
  })

  onProgress(baseIterations + 1, blob.size)

  const format = src.type.split('/')[1] ?? 'jpeg'

  return {
    blob,
    originalSize: file.size,
    compressedSize: blob.size,
    format,
    previewUrl: URL.createObjectURL(blob),
    iterations: baseIterations + 1,
    downscaled: true,
    finalWidth: maxDim,
    status: blob.size <= targetBytes ? 'success' : 'unreachable',
  }
}
