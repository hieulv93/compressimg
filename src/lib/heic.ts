export function isHeicFile(file: File): boolean {
  const lower = file.name.toLowerCase()
  return (
    file.type === 'image/heic' ||
    file.type === 'image/heif' ||
    lower.endsWith('.heic') ||
    lower.endsWith('.heif')
  )
}

export async function convertHeicToJpeg(file: File): Promise<File> {
  const heic2any = (await import('heic2any')).default as (opts: {
    blob: Blob
    toType: string
    quality: number
  }) => Promise<Blob | Blob[]>

  const result = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.92 })
  const blob = Array.isArray(result) ? result[0] : result
  const baseName = file.name.replace(/\.(heic|heif)$/i, '')
  return new File([blob], `${baseName}.jpg`, { type: 'image/jpeg' })
}

export async function convertHeicToPng(file: File): Promise<Blob> {
  const heic2any = (await import('heic2any')).default as (opts: {
    blob: Blob
    toType: string
  }) => Promise<Blob | Blob[]>

  const result = await heic2any({ blob: file, toType: 'image/png' })
  return Array.isArray(result) ? result[0] : result
}
