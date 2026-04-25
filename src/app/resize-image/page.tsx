'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import UploadBox from '@/components/tool/UploadBox'
import DimensionInput from '@/components/tool/DimensionInput'
import ProgressBar from '@/components/tool/ProgressBar'
import ResizeResultCard from '@/components/tool/ResizeResultCard'
import AdSlot from '@/components/ads/AdSlot'
import ResizeContentSection from '@/components/tool/ResizeContentSection'
import { resizeImage, revokeResizePreview, MAX_RESIZE_DIMENSION } from '@/lib/resize'
import type { ResizeResult } from '@/lib/resize'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

// idle: upload box shown
// ready: image loaded, dims populated from actual image, user can adjust + click Resize
// processing: canvas resize running
// done: result shown
// error: error shown
type PageState = 'idle' | 'ready' | 'processing' | 'done' | 'error'

export default function ResizeImagePage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const [lockAspect, setLockAspect] = useState(true)
  const [result, setResult] = useState<ResizeResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [naturalDims, setNaturalDims] = useState<{ w: number; h: number } | null>(null)
  const imgUrlRef = useRef<string | null>(null)

  const handleFileSelect = useCallback(
    async (file: File) => {
      const fileWithFlag = file as File & { _invalid?: string }
      if (fileWithFlag._invalid === 'format') {
        setErrorMessage('Unsupported format. Use JPG, PNG, WebP, or HEIC.')
        setPageState('error')
        return
      }
      if (fileWithFlag._invalid === 'size') {
        setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
        setPageState('error')
        return
      }

      // Clean up previous state
      if (result?.previewUrl) revokeResizePreview(result.previewUrl)
      if (imgUrlRef.current) URL.revokeObjectURL(imgUrlRef.current)
      setResult(null)
      setErrorMessage('')

      // Convert HEIC before loading into canvas
      const fileToLoad = isHeicFile(file) ? await convertHeicToJpeg(file) : file

      // Load image to get actual dimensions before showing resize controls
      const objUrl = URL.createObjectURL(fileToLoad)
      imgUrlRef.current = objUrl

      const img = new window.Image()
      img.onload = () => {
        const naturalW = Math.min(img.naturalWidth, MAX_RESIZE_DIMENSION)
        const naturalH = Math.min(img.naturalHeight, MAX_RESIZE_DIMENSION)
        setNaturalDims({ w: naturalW, h: naturalH })
        setWidth(naturalW)
        setHeight(naturalH)
        setPreviewUrl(objUrl)
        setOriginalFile(fileToLoad)
        setPageState('ready')
        analytics.imageUploaded(file.type, Math.round(file.size / 1024))
      }
      img.onerror = () => {
        URL.revokeObjectURL(objUrl)
        imgUrlRef.current = null
        setErrorMessage('Failed to load image. Please try another file.')
        setPageState('error')
      }
      img.src = objUrl
    },
    [result]
  )

  const handleResize = useCallback(async () => {
    if (!originalFile) return

    if (width > MAX_RESIZE_DIMENSION || height > MAX_RESIZE_DIMENSION) {
      setErrorMessage(`Max dimension is ${MAX_RESIZE_DIMENSION}px.`)
      setPageState('error')
      return
    }
    if (width < 1 || height < 1) {
      setErrorMessage('Width and height must be at least 1px.')
      setPageState('error')
      return
    }

    setPageState('processing')
    await new Promise((r) => setTimeout(r, 0))

    try {
      const resized = await resizeImage(originalFile, { width, height })
      setResult(resized)
      setPageState('done')
      analytics.imageResized(
        resized.originalWidth,
        resized.originalHeight,
        resized.newWidth,
        resized.newHeight,
        resized.format
      )
    } catch {
      setErrorMessage('Resize failed. Please try again.')
      setPageState('error')
      analytics.resizeError('resize_failed')
    }
  }, [originalFile, width, height])

  const handleTryDifferentSize = useCallback(() => {
    if (result?.previewUrl) revokeResizePreview(result.previewUrl)
    setResult(null)
    setPageState('ready')
  }, [result])

  const handleReset = useCallback(() => {
    if (result?.previewUrl) revokeResizePreview(result.previewUrl)
    if (imgUrlRef.current) {
      URL.revokeObjectURL(imgUrlRef.current)
      imgUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setPreviewUrl(null)
    setNaturalDims(null)
    setWidth(1920)
    setHeight(1080)
    setLockAspect(true)
    setErrorMessage('')
    setPageState('idle')
  }, [result])

  const handlePreset = useCallback((w: number, h: number) => {
    setWidth(w)
    setHeight(h)
    setLockAspect(false)
  }, [])

  const uploadBoxState =
    pageState === 'processing' ? 'processing' : pageState === 'error' ? 'error' : 'idle'

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Resize Image Online</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Change image dimensions instantly — free, private, 100% in your browser
          </p>
        </div>

        <div className="space-y-4">
          {/* Upload box — shown when idle or error */}
          {(pageState === 'idle' || pageState === 'error') && (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Loading image..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ Resized in seconds</span>
                  <span>·</span>
                  <span>🔒 Images never leave your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
            </>
          )}

          {/* Ready state: thumbnail + dimension controls */}
          {pageState === 'ready' && previewUrl && (
            <div className="space-y-4">
              {/* Original image thumbnail */}
              <div className="w-full rounded-2xl border border-border bg-surface overflow-hidden">
                <div
                  className="relative w-full bg-surface flex items-center justify-center"
                  style={{ minHeight: '160px' }}
                >
                  <Image
                    src={previewUrl}
                    alt="Original image preview"
                    width={600}
                    height={400}
                    className="max-h-48 w-auto object-contain"
                    unoptimized
                  />
                </div>
                {naturalDims && (
                  <p className="text-center text-xs text-text-muted py-2">
                    Original: {naturalDims.w}×{naturalDims.h}px
                  </p>
                )}
              </div>

              <DimensionInput
                width={width}
                height={height}
                lockAspect={lockAspect}
                originalWidth={width}
                originalHeight={height}
                disabled={false}
                onWidthChange={setWidth}
                onHeightChange={setHeight}
                onLockToggle={() => setLockAspect((v) => !v)}
                onPreset={handlePreset}
              />

              <div className="flex gap-3">
                <button
                  onClick={handleResize}
                  className="flex-1 touch-target text-sm font-semibold text-white bg-primary rounded-xl py-3 hover:bg-primary/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Resize Image
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-xl py-3 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Processing */}
          {pageState === 'processing' && (
            <ProgressBar visible label="Resizing image" color="bg-primary" />
          )}
        </div>

        {pageState === 'done' && result && originalFile && (
          <ResizeResultCard
            blob={result.blob}
            previewUrl={result.previewUrl}
            originalWidth={result.originalWidth}
            originalHeight={result.originalHeight}
            newWidth={result.newWidth}
            newHeight={result.newHeight}
            originalSize={result.originalSize}
            outputSize={result.outputSize}
            format={result.format}
            originalName={originalFile.name}
            onReset={handleReset}
            onTryDifferentSize={handleTryDifferentSize}
            onDownload={() =>
              analytics.imageResized(
                result.originalWidth,
                result.originalHeight,
                result.newWidth,
                result.newHeight,
                result.format
              )
            }
          />
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <ResizeContentSection />
      </div>
    </main>
  )
}
