export const MIN_CROP_PX = 10

export interface CropRect {
  x: number
  y: number
  w: number
  h: number
}

export interface CropResult {
  blob: Blob
  previewUrl: string
  originalWidth: number
  originalHeight: number
  croppedWidth: number
  croppedHeight: number
  originalSize: number
  outputSize: number
  format: string
}

export async function cropImage(file: File, cropRect: CropRect): Promise<CropResult> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file)
    const img = new Image()

    img.onload = () => {
      URL.revokeObjectURL(objectUrl)

      const { x, y, w, h } = cropRect

      if (w < MIN_CROP_PX || h < MIN_CROP_PX) {
        reject(new Error('Crop area too small'))
        return
      }

      const canvas = document.createElement('canvas')
      canvas.width = Math.round(w)
      canvas.height = Math.round(h)

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Canvas context unavailable'))
        return
      }

      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'

      // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
      ctx.drawImage(
        img,
        Math.round(x),
        Math.round(y),
        Math.round(w),
        Math.round(h),
        0,
        0,
        Math.round(w),
        Math.round(h)
      )

      const mimeType = file.type as 'image/jpeg' | 'image/png' | 'image/webp'
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
            previewUrl,
            originalWidth: img.naturalWidth,
            originalHeight: img.naturalHeight,
            croppedWidth: Math.round(w),
            croppedHeight: Math.round(h),
            originalSize: file.size,
            outputSize: blob.size,
            format: file.type.split('/')[1] ?? 'jpeg',
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

export function revokeCropPreview(url: string) {
  URL.revokeObjectURL(url)
}

export { triggerDownload } from './compress'
