export const MAX_RESIZE_DIMENSION = 8000

export interface ResizeOptions {
  width: number
  height: number
}

export interface ResizeResult {
  blob: Blob
  originalWidth: number
  originalHeight: number
  newWidth: number
  newHeight: number
  format: string
  previewUrl: string
  originalSize: number
  outputSize: number
}

export function calcAspectHeight(originalW: number, originalH: number, newW: number): number {
  return Math.round((newW / originalW) * originalH)
}

export function calcAspectWidth(originalW: number, originalH: number, newH: number): number {
  return Math.round((newH / originalH) * originalW)
}

export async function resizeImage(file: File, options: ResizeOptions): Promise<ResizeResult> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file)
    const img = new Image()

    img.onload = () => {
      URL.revokeObjectURL(objectUrl)

      const canvas = document.createElement('canvas')
      canvas.width = options.width
      canvas.height = options.height

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Canvas context unavailable'))
        return
      }

      // Smooth scaling for downscaling
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(img, 0, 0, options.width, options.height)

      const mimeType = file.type as 'image/jpeg' | 'image/png' | 'image/webp'
      // PNG: no quality param. JPEG/WebP: 0.92 keeps good quality at smaller size
      const quality = mimeType === 'image/png' ? undefined : 0.92

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to generate image blob'))
            return
          }
          const previewUrl = URL.createObjectURL(blob)
          resolve({
            blob,
            originalWidth: img.naturalWidth,
            originalHeight: img.naturalHeight,
            newWidth: options.width,
            newHeight: options.height,
            format: file.type.split('/')[1] ?? 'jpeg',
            previewUrl,
            originalSize: file.size,
            outputSize: blob.size,
          })
        },
        mimeType,
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

export function revokeResizePreview(url: string) {
  URL.revokeObjectURL(url)
}

export { triggerDownload } from './compress'
