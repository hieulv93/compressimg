import type { ConvertResult } from './convert'

export async function convertToGif(file: File): Promise<ConvertResult> {
  const objectUrl = URL.createObjectURL(file)
  const img = new Image()

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve()
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = objectUrl
  })
  URL.revokeObjectURL(objectUrl)

  const { naturalWidth: width, naturalHeight: height } = img

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas context unavailable')

  // GIF has no alpha — fill white before drawing
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)
  ctx.drawImage(img, 0, 0)

  const GIF = (await import('gif.js')).default

  return new Promise((resolve, reject) => {
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width,
      height,
      workerScript: '/gif.worker.js',
    })

    gif.addFrame(canvas, { delay: 100, copy: true })

    gif.on('finished', (blob: Blob) => {
      const previewUrl = URL.createObjectURL(blob)
      const inputFormat = file.type.split('/')[1] ?? 'image'
      resolve({
        blob,
        previewUrl,
        inputFormat,
        outputExt: 'gif',
        originalSize: file.size,
        outputSize: blob.size,
      })
    })

    gif.on('error', (err: unknown) => reject(err))
    gif.render()
  })
}
