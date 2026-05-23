export interface ResizeToKbResult {
  blob: Blob
  originalSize: number
  outputSize: number
  format: string
  previewUrl: string
  achieved: boolean
}

export async function resizeImageToKb(file: File, targetKb: number): Promise<ResizeToKbResult> {
  const { isHeicFile, convertHeicToJpeg } = await import('./heic')
  const fileToProcess = isHeicFile(file) ? await convertHeicToJpeg(file) : file

  const { default: imageCompression } = await import('browser-image-compression')

  const maxSizeMB = targetKb / 1024

  const compressed = await imageCompression(fileToProcess, {
    maxSizeMB,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: 'image/jpeg' as const,
  })

  const previewUrl = URL.createObjectURL(compressed)

  return {
    blob: compressed,
    originalSize: file.size,
    outputSize: compressed.size,
    format: 'jpeg',
    previewUrl,
    achieved: compressed.size <= targetKb * 1024,
  }
}

export function revokeKbPreview(url: string) {
  URL.revokeObjectURL(url)
}
