export interface GifCompressOptions {
  quality: number // 1 (best) – 30 (smallest), gif.js scale
  frameSkip: number // 1 = keep all, 2 = keep every 2nd frame
}

export interface GifCompressResult {
  blob: Blob
  originalSize: number
  compressedSize: number
  previewUrl: string
}

export async function compressGif(
  file: File,
  options: GifCompressOptions
): Promise<GifCompressResult> {
  const { parseGIF, decompressFrames } = await import('gifuct-js')
  const GIF = (await import('gif.js')).default

  const arrayBuffer = await file.arrayBuffer()
  const parsed = parseGIF(arrayBuffer)
  const frames = decompressFrames(parsed, true)

  if (!frames.length) throw new Error('No frames found in GIF')

  const { width, height } = frames[0].dims

  return new Promise((resolve, reject) => {
    const gif = new GIF({
      workers: 2,
      quality: options.quality,
      width,
      height,
      workerScript: '/gif.worker.js',
    })

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')!

    // Accumulate full frame (disposal method handling)
    const frameImageData = ctx.createImageData(width, height)

    frames.forEach((frame, i) => {
      if (i % options.frameSkip !== 0) return

      const { patch, dims, delay } = frame
      // Write patch pixels into accumulator
      const { left, top, width: fw, height: fh } = dims
      for (let y = 0; y < fh; y++) {
        for (let x = 0; x < fw; x++) {
          const srcIdx = (y * fw + x) * 4
          const dstIdx = ((top + y) * width + (left + x)) * 4
          // skip transparent pixels
          if (patch[srcIdx + 3] === 0) continue
          frameImageData.data[dstIdx] = patch[srcIdx]
          frameImageData.data[dstIdx + 1] = patch[srcIdx + 1]
          frameImageData.data[dstIdx + 2] = patch[srcIdx + 2]
          frameImageData.data[dstIdx + 3] = patch[srcIdx + 3]
        }
      }

      ctx.putImageData(frameImageData, 0, 0)
      gif.addFrame(canvas, {
        delay: (delay || 10) * options.frameSkip,
        copy: true,
      })
    })

    gif.on('finished', (blob: Blob) => {
      resolve({
        blob,
        originalSize: file.size,
        compressedSize: blob.size,
        previewUrl: URL.createObjectURL(blob),
      })
    })

    gif.on('error', (err: unknown) => reject(err))

    gif.render()
  })
}
