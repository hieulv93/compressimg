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

export { triggerDownload } from './compress'
