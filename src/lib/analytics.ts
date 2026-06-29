declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

type EventParams = Record<string, string | number | boolean>

function track(event: string, params?: EventParams) {
  if (typeof window === 'undefined') return
  if (!window.dataLayer) window.dataLayer = []
  if (!window.gtag) {
    // Mirror ga4-init: create wrapper so events queue before gtag.js loads
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      ;(window.dataLayer as unknown[]).push(arguments)
    } as Window['gtag']
  }
  window.gtag!('event', event, params)
}

export const analytics = {
  imageUploaded: (fileType: string, fileSizeKb: number, compressionMode?: 'quality' | 'target') =>
    track('image_uploaded', {
      file_type: fileType,
      file_size_kb: Math.round(fileSizeKb),
      ...(compressionMode ? { compression_mode: compressionMode } : {}),
    }),

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

  imageConverted: (
    inputFormat: string,
    outputFormat: string,
    originalKb: number,
    outputKb: number
  ) =>
    track('image_converted', {
      input_format: inputFormat,
      output_format: outputFormat,
      original_kb: Math.round(originalKb),
      output_kb: Math.round(outputKb),
    }),

  convertError: (errorType: string) => track('convert_error', { error_type: errorType }),

  imageCropped: (
    originalW: number,
    originalH: number,
    croppedW: number,
    croppedH: number,
    format: string
  ) =>
    track('image_cropped', {
      original_width: originalW,
      original_height: originalH,
      cropped_width: croppedW,
      cropped_height: croppedH,
      output_format: format,
    }),

  cropError: (errorType: string) => track('crop_error', { error_type: errorType }),

  imageRotated: (degrees: number, width: number, height: number) =>
    track('image_rotated', { degrees, output_width: width, output_height: height }),

  imageFlipped: (flipH: boolean, flipV: boolean, width: number, height: number) =>
    track('image_flipped', {
      flip_horizontal: flipH,
      flip_vertical: flipV,
      width,
      height,
    }),

  transformError: (errorType: string) => track('transform_error', { error_type: errorType }),

  exifStripped: (originalKb: number, strippedKb: number) =>
    track('exif_stripped', {
      original_kb: Math.round(originalKb),
      stripped_kb: Math.round(strippedKb),
    }),

  imageToBase64: (originalKb: number, base64Chars: number) =>
    track('image_to_base64', {
      original_kb: Math.round(originalKb),
      base64_chars: base64Chars,
    }),

  base64ToImage: (outputKb: number) =>
    track('base64_to_image', { output_kb: Math.round(outputKb) }),

  watermarkAdded: (position: string, opacity: number, originalKb: number, fontSize: number) =>
    track('watermark_added', {
      position,
      opacity,
      original_kb: Math.round(originalKb),
      font_size: fontSize,
    }),

  colorPicked: (hex: string) => track('color_picked', { hex }),

  imageToPdf: (originalKb: number, pageSize: string) =>
    track('image_to_pdf', { original_kb: Math.round(originalKb), page_size: pageSize }),

  passportPhotoMade: (preset: string, widthPx: number, heightPx: number) =>
    track('passport_photo_made', { preset, width_px: widthPx, height_px: heightPx }),

  targetModeUsed: (page: string, targetKb: number) =>
    track('target_mode_used', { page, target_kb: targetKb }),

  targetCompressionCompleted: (
    originalKb: number,
    compressedKb: number,
    targetKb: number,
    iterations: number,
    downscaled: boolean,
    status: 'success' | 'unreachable',
    durationMs: number
  ) =>
    track('target_compression_completed', {
      original_kb: Math.round(originalKb),
      compressed_kb: Math.round(compressedKb),
      target_kb: targetKb,
      iterations,
      downscaled,
      status,
      duration_ms: Math.round(durationMs),
    }),

  targetUnreachable: (targetKb: number, achievedKb: number, downscaled: boolean) =>
    track('target_unreachable', {
      target_kb: targetKb,
      achieved_kb: Math.round(achievedKb),
      downscaled,
    }),

  targetCompressionFailed: (reason: string, fileSizeKb: number) =>
    track('target_compression_failed', { reason, file_size_kb: Math.round(fileSizeKb) }),
}
