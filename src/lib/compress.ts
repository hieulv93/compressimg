export interface CompressOptions {
  quality: number
  maxDimensionPx?: number
}

export interface CompressResult {
  blob: Blob
  originalSize: number
  compressedSize: number
  format: string
  previewUrl: string
}

export async function compressImage(
  file: File,
  options: CompressOptions
): Promise<CompressResult> {
  const { default: imageCompression } = await import('browser-image-compression')

  const compressionOptions = {
    maxWidthOrHeight: options.maxDimensionPx ?? 1920,
    useWebWorker: true,
    initialQuality: options.quality / 100,
    fileType: file.type as 'image/jpeg' | 'image/png' | 'image/webp',
    alwaysKeepResolution: true,
  }

  const compressed = await imageCompression(file, compressionOptions)
  const previewUrl = URL.createObjectURL(compressed)
  const format = file.type.split('/')[1] ?? 'jpeg'

  return {
    blob: compressed,
    originalSize: file.size,
    compressedSize: compressed.size,
    format,
    previewUrl,
  }
}

export function revokePreview(url: string) {
  URL.revokeObjectURL(url)
}

export function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
