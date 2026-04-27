declare module 'gif.js' {
  interface GIFOptions {
    workers?: number
    quality?: number
    width?: number
    height?: number
    workerScript?: string
    repeat?: number
    background?: string
    transparent?: number | null
  }

  interface FrameOptions {
    delay?: number
    copy?: boolean
    dispose?: number
  }

  class GIF {
    constructor(options?: GIFOptions)
    addFrame(
      canvas: HTMLCanvasElement | CanvasRenderingContext2D | ImageData,
      options?: FrameOptions
    ): void
    render(): void
    on(event: 'finished', callback: (blob: Blob) => void): void
    on(event: 'progress', callback: (progress: number) => void): void
    on(event: 'error', callback: (err: unknown) => void): void
    abort(): void
  }

  export default GIF
}
