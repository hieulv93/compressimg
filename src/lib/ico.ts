const ICO_SIZES = [16, 32, 48, 64, 128, 256]

async function resizeToPngBuffer(img: HTMLImageElement, size: number): Promise<ArrayBuffer> {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas context unavailable')
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(img, 0, 0, size, size)
  return new Promise<ArrayBuffer>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Failed to generate PNG for ICO'))
        return
      }
      blob.arrayBuffer().then(resolve).catch(reject)
    }, 'image/png')
  })
}

export interface IcoResult {
  blob: Blob
  previewUrl: string
  originalSize: number
  outputSize: number
  sizes: number[]
}

export async function createIcoFromImage(file: File): Promise<IcoResult> {
  const url = URL.createObjectURL(file)
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const i = new Image()
    i.onload = () => {
      URL.revokeObjectURL(url)
      resolve(i)
    }
    i.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load image'))
    }
    i.src = url
  })

  const pngBuffers = await Promise.all(ICO_SIZES.map((size) => resizeToPngBuffer(img, size)))

  const numImages = pngBuffers.length
  const dirSize = 6 + numImages * 16
  const totalSize = dirSize + pngBuffers.reduce((sum, buf) => sum + buf.byteLength, 0)
  const bytes = new Uint8Array(totalSize)
  const view = new DataView(bytes.buffer)

  // ICONDIR header
  view.setUint16(0, 0, true) // reserved
  view.setUint16(2, 1, true) // type = ICO
  view.setUint16(4, numImages, true) // count

  let dataOffset = dirSize
  for (let i = 0; i < numImages; i++) {
    const size = ICO_SIZES[i]
    const buf = pngBuffers[i]
    const entry = 6 + i * 16

    bytes[entry] = size >= 256 ? 0 : size
    bytes[entry + 1] = size >= 256 ? 0 : size
    bytes[entry + 2] = 0 // color count (0 for truecolor)
    bytes[entry + 3] = 0 // reserved
    view.setUint16(entry + 4, 1, true) // planes
    view.setUint16(entry + 6, 32, true) // bit count
    view.setUint32(entry + 8, buf.byteLength, true) // size in bytes
    view.setUint32(entry + 12, dataOffset, true) // offset

    bytes.set(new Uint8Array(buf), dataOffset)
    dataOffset += buf.byteLength
  }

  const icoBlob = new Blob([bytes], { type: 'image/x-icon' })

  // Use the 32×32 PNG (index 1) as preview
  const previewBlob = new Blob([pngBuffers[1]], { type: 'image/png' })
  const previewUrl = URL.createObjectURL(previewBlob)

  return {
    blob: icoBlob,
    previewUrl,
    originalSize: file.size,
    outputSize: icoBlob.size,
    sizes: ICO_SIZES,
  }
}

export function revokeIcoPreview(url: string) {
  URL.revokeObjectURL(url)
}
