export type TransformResult = {
  blob: Blob
  previewUrl: string
  originalWidth: number
  originalHeight: number
  outputWidth: number
  outputHeight: number
  originalSize: number
  outputSize: number
}

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export async function rotateImageCanvas(
  file: File,
  deg: 0 | 90 | 180 | 270
): Promise<TransformResult> {
  const url = URL.createObjectURL(file)
  try {
    const img = await loadImg(url)
    const sw = img.naturalWidth
    const sh = img.naturalHeight

    const is90or270 = deg === 90 || deg === 270
    const outW = is90or270 ? sh : sw
    const outH = is90or270 ? sw : sh

    const canvas = document.createElement('canvas')
    canvas.width = outW
    canvas.height = outH
    const ctx = canvas.getContext('2d')!

    ctx.translate(outW / 2, outH / 2)
    ctx.rotate((deg * Math.PI) / 180)
    ctx.drawImage(img, -sw / 2, -sh / 2)

    const blob = await new Promise<Blob>((res, rej) =>
      canvas.toBlob((b) => (b ? res(b) : rej(new Error('toBlob failed'))), 'image/jpeg', 0.92)
    )
    return {
      blob,
      previewUrl: URL.createObjectURL(blob),
      originalWidth: sw,
      originalHeight: sh,
      outputWidth: outW,
      outputHeight: outH,
      originalSize: file.size,
      outputSize: blob.size,
    }
  } finally {
    URL.revokeObjectURL(url)
  }
}

export async function flipImageCanvas(
  file: File,
  flipH: boolean,
  flipV: boolean
): Promise<TransformResult> {
  const url = URL.createObjectURL(file)
  try {
    const img = await loadImg(url)
    const w = img.naturalWidth
    const h = img.naturalHeight

    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')!

    ctx.save()
    ctx.translate(flipH ? w : 0, flipV ? h : 0)
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1)
    ctx.drawImage(img, 0, 0)
    ctx.restore()

    const blob = await new Promise<Blob>((res, rej) =>
      canvas.toBlob((b) => (b ? res(b) : rej(new Error('toBlob failed'))), 'image/jpeg', 0.92)
    )
    return {
      blob,
      previewUrl: URL.createObjectURL(blob),
      originalWidth: w,
      originalHeight: h,
      outputWidth: w,
      outputHeight: h,
      originalSize: file.size,
      outputSize: blob.size,
    }
  } finally {
    URL.revokeObjectURL(url)
  }
}

export function revokeTransformPreview(url: string) {
  URL.revokeObjectURL(url)
}
