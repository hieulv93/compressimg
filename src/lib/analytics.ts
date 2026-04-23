declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean>

function track(event: string, params?: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, params)
  }
}

export const analytics = {
  imageUploaded: (fileType: string, fileSizeKb: number) =>
    track('image_uploaded', { file_type: fileType, file_size_kb: Math.round(fileSizeKb) }),

  imageCompressed: (originalKb: number, compressedKb: number, format: string, quality: number) =>
    track('image_compressed', {
      original_kb: Math.round(originalKb),
      compressed_kb: Math.round(compressedKb),
      reduction_percent: Math.round(((originalKb - compressedKb) / originalKb) * 100),
      output_format: format,
      quality_setting: quality,
    }),

  imageDownloaded: (compressedKb: number) =>
    track('image_downloaded', { compressed_kb: Math.round(compressedKb) }),

  compressionError: (errorType: string) => track('compression_error', { error_type: errorType }),

  imageResized: (
    originalW: number,
    originalH: number,
    newW: number,
    newH: number,
    format: string
  ) =>
    track('image_resized', {
      original_width: originalW,
      original_height: originalH,
      new_width: newW,
      new_height: newH,
      output_format: format,
    }),

  resizeError: (errorType: string) => track('resize_error', { error_type: errorType }),
}
