'use client'

import { useState, useCallback, useRef } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import CropBox from '@/components/tool/CropBox'
import CropPresets from '@/components/tool/CropPresets'
import ProgressBar from '@/components/tool/ProgressBar'
import CropResultCard from '@/components/tool/CropResultCard'
import AdSlot from '@/components/ads/AdSlot'
import CropContentSection from '@/components/tool/CropContentSection'
import { cropImage, revokeCropPreview } from '@/lib/crop'
import type { CropResult } from '@/lib/crop'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { useCropState } from '@/hooks/useCropState'
import { analytics } from '@/lib/analytics'

// idle: upload box shown
// ready: image loaded, crop UI shown, waiting for user to confirm crop
// processing: canvas crop running
// done: result shown
// error: error shown in upload box
type PageState = 'idle' | 'ready' | 'processing' | 'done' | 'error'

export default function CropImagePage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<CropResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 })
  const imgLoadUrlRef = useRef<string | null>(null)

  const { crop, preset, containerRef, applyPreset, onMouseDown, onTouchStart, toPixelCrop } =
    useCropState(naturalSize.w, naturalSize.h)

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

      // Clean up previous state
      if (result?.previewUrl) revokeCropPreview(result.previewUrl)
      if (imgLoadUrlRef.current) URL.revokeObjectURL(imgLoadUrlRef.current)

      setResult(null)
      setErrorMessage('')

      // Load image to get natural dimensions before showing CropBox
      const objectUrl = URL.createObjectURL(file)
      imgLoadUrlRef.current = objectUrl

      const img = new Image()
      img.onload = () => {
        setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight })
        setPreviewUrl(objectUrl)
        setOriginalFile(file)
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

    // Yield to browser so ProgressBar renders before Canvas blocks thread
    await new Promise((r) => setTimeout(r, 0))

    try {
      const pixelCrop = toPixelCrop()
      const cropped = await cropImage(originalFile, pixelCrop)
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
  }, [originalFile, toPixelCrop])

  const handleReset = useCallback(() => {
    if (result?.previewUrl) revokeCropPreview(result.previewUrl)
    if (imgLoadUrlRef.current) {
      URL.revokeObjectURL(imgLoadUrlRef.current)
      imgLoadUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setPreviewUrl(null)
    setNaturalSize({ w: 0, h: 0 })
    setErrorMessage('')
    setPageState('idle')
  }, [result])

  const uploadBoxState =
    pageState === 'processing' ? 'processing' : pageState === 'error' ? 'error' : 'idle'

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Crop Image Online</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select any area, choose your ratio, and download instantly — free, private, 100% in your
            browser
          </p>
        </div>

        <div className="space-y-4">
          {/* Show UploadBox only when idle/error/processing */}
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

          {/* Crop UI — shown in ready state */}
          {pageState === 'ready' && previewUrl && (
            <>
              <CropPresets value={preset} onChange={applyPreset} />
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

          {/* Processing state — UploadBox hidden, show progress */}
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
            originalName={originalFile.name}
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

        <CropContentSection />
      </div>
    </main>
  )
}
