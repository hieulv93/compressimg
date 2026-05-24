'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import CropBox from '@/components/tool/CropBox'
import CropPresets from '@/components/tool/CropPresets'
import ProgressBar from '@/components/tool/ProgressBar'
import CropResultCard from '@/components/tool/CropResultCard'
import AdSlot from '@/components/ads/AdSlot'
import { cropImage, cropImageCircle, revokeCropPreview } from '@/lib/crop'
import type { CropResult } from '@/lib/crop'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { useCropState } from '@/hooks/useCropState'
import type { AspectPreset } from '@/hooks/useCropState'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'ready' | 'processing' | 'done' | 'error'

export default function CropTool({
  h1,
  tagline,
  contentSection,
  initialPreset = 'free',
  hidePresets = false,
  circleOutput = false,
}: {
  h1: string
  tagline: string
  contentSection: React.ReactNode
  initialPreset?: AspectPreset
  hidePresets?: boolean
  circleOutput?: boolean
}) {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<CropResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 })
  const imgLoadUrlRef = useRef<string | null>(null)
  const appliedPresetRef = useRef(false)

  const { crop, preset, containerRef, applyPreset, onMouseDown, onTouchStart, toPixelCrop } =
    useCropState(naturalSize.w, naturalSize.h)

  // Apply initialPreset once the image is loaded and natural dimensions are known
  useEffect(() => {
    if (naturalSize.w > 0 && !appliedPresetRef.current && initialPreset !== 'free') {
      appliedPresetRef.current = true
      applyPreset(initialPreset)
    }
  }, [naturalSize.w, applyPreset, initialPreset])

  const handleFileSelect = useCallback(
    async (file: File) => {
      const fileWithFlag = file as File & { _invalid?: string }
      if (fileWithFlag._invalid === 'format') {
        setErrorMessage('Unsupported format. Use JPG, PNG, or WebP.')
        setPageState('error')
        return
      }
      if (fileWithFlag._invalid === 'size') {
        setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
        setPageState('error')
        return
      }

      if (result?.previewUrl) revokeCropPreview(result.previewUrl)
      if (imgLoadUrlRef.current) URL.revokeObjectURL(imgLoadUrlRef.current)

      setResult(null)
      setErrorMessage('')
      appliedPresetRef.current = false

      const fileToLoad = isHeicFile(file) ? await convertHeicToJpeg(file) : file

      const objectUrl = URL.createObjectURL(fileToLoad)
      imgLoadUrlRef.current = objectUrl

      const img = new Image()
      img.onload = () => {
        setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight })
        setPreviewUrl(objectUrl)
        setOriginalFile(fileToLoad)
        setPageState('ready')
        analytics.imageUploaded(file.type, Math.round(file.size / 1024))
      }
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl)
        imgLoadUrlRef.current = null
        setErrorMessage('Failed to load image. Please try another file.')
        setPageState('error')
      }
      img.src = objectUrl
    },
    [result]
  )

  const handleCrop = useCallback(async () => {
    if (!originalFile) return

    setPageState('processing')
    await new Promise((r) => setTimeout(r, 0))

    try {
      const pixelCrop = toPixelCrop()
      const cropped = circleOutput
        ? await cropImageCircle(originalFile, pixelCrop)
        : await cropImage(originalFile, pixelCrop)
      setResult(cropped)
      setPageState('done')
      analytics.imageCropped(
        cropped.originalWidth,
        cropped.originalHeight,
        cropped.croppedWidth,
        cropped.croppedHeight,
        cropped.format
      )
    } catch {
      setErrorMessage('Crop failed. Please try again.')
      setPageState('error')
    }
  }, [originalFile, toPixelCrop, circleOutput])

  const handleReset = useCallback(() => {
    if (result?.previewUrl) revokeCropPreview(result.previewUrl)
    if (imgLoadUrlRef.current) {
      URL.revokeObjectURL(imgLoadUrlRef.current)
      imgLoadUrlRef.current = null
    }
    appliedPresetRef.current = false
    setResult(null)
    setOriginalFile(null)
    setPreviewUrl(null)
    setNaturalSize({ w: 0, h: 0 })
    setErrorMessage('')
    setPageState('idle')
  }, [result])

  const uploadBoxState =
    pageState === 'processing' ? 'processing' : pageState === 'error' ? 'error' : 'idle'

  // For circle output, the download file should have .png extension
  const downloadName =
    circleOutput && originalFile
      ? originalFile.name.replace(/\.[^.]+$/, '.png')
      : (originalFile?.name ?? '')

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">{h1}</h1>
          <p className="text-text-muted text-sm sm:text-base">{tagline}</p>
        </div>

        <div className="space-y-4">
          {(pageState === 'idle' || pageState === 'error' || pageState === 'processing') && (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Loading image..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ Cropped in seconds</span>
                  <span>·</span>
                  <span>🔒 Images never leave your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
            </>
          )}

          {pageState === 'ready' && previewUrl && (
            <>
              {!hidePresets && <CropPresets value={preset} onChange={applyPreset} />}
              {circleOutput && (
                <p className="text-xs text-primary bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-center">
                  Output will be a circle — saved as transparent PNG
                </p>
              )}
              <CropBox
                imageUrl={previewUrl}
                crop={crop}
                containerRef={containerRef}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                preset={preset}
                naturalWidth={naturalSize.w}
                naturalHeight={naturalSize.h}
                onCrop={handleCrop}
                onReset={handleReset}
              />
            </>
          )}

          {pageState === 'processing' && (
            <ProgressBar visible label="Cropping image" color="bg-primary" />
          )}
        </div>

        {pageState === 'done' && result && originalFile && (
          <CropResultCard
            blob={result.blob}
            previewUrl={result.previewUrl}
            originalWidth={result.originalWidth}
            originalHeight={result.originalHeight}
            croppedWidth={result.croppedWidth}
            croppedHeight={result.croppedHeight}
            originalSize={result.originalSize}
            outputSize={result.outputSize}
            format={result.format}
            originalName={downloadName}
            onReset={handleReset}
            onDownload={() =>
              analytics.imageCropped(
                result.originalWidth,
                result.originalHeight,
                result.croppedWidth,
                result.croppedHeight,
                result.format
              )
            }
          />
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        {contentSection}
      </div>
    </main>
  )
}
