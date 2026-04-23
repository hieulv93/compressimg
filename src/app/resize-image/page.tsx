'use client'

import { useState, useCallback } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import DimensionInput from '@/components/tool/DimensionInput'
import ProgressBar from '@/components/tool/ProgressBar'
import ResizeResultCard from '@/components/tool/ResizeResultCard'
import AdSlot from '@/components/ads/AdSlot'
import ResizeContentSection from '@/components/tool/ResizeContentSection'
import { resizeImage, revokeResizePreview, MAX_RESIZE_DIMENSION } from '@/lib/resize'
import type { ResizeResult } from '@/lib/resize'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

const DEFAULT_WIDTH = 1920
const DEFAULT_HEIGHT = 1080

export default function ResizeImagePage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [width, setWidth] = useState(DEFAULT_WIDTH)
  const [height, setHeight] = useState(DEFAULT_HEIGHT)
  const [lockAspect, setLockAspect] = useState(true)
  const [result, setResult] = useState<ResizeResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)

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

      setOriginalFile(file)
      setPageState('processing')
      setErrorMessage('')
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))

      // Yield to browser so ProgressBar renders before Canvas blocks thread
      await new Promise((r) => setTimeout(r, 0))

      try {
        const resized = await resizeImage(file, { width, height })
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
    },
    [width, height]
  )

  const handleReset = useCallback(() => {
    if (result?.previewUrl) revokeResizePreview(result.previewUrl)
    setResult(null)
    setOriginalFile(null)
    setErrorMessage('')
    setPageState('idle')
  }, [result])

  const handlePreset = useCallback((w: number, h: number) => {
    setWidth(w)
    setHeight(h)
    setLockAspect(false)
  }, [])

  const uploadBoxState =
    pageState === 'done'
      ? 'done'
      : pageState === 'processing'
        ? 'processing'
        : pageState === 'error'
          ? 'error'
          : 'idle'

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
          <UploadBox
            state={uploadBoxState}
            onFileSelect={handleFileSelect}
            errorMessage={errorMessage}
            processingLabel="Resizing..."
          />

          {uploadBoxState === 'idle' && (
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
              <span>⚡ Resized in seconds</span>
              <span>·</span>
              <span>🔒 Images never leave your device</span>
              <span>·</span>
              <span>✓ Free, no sign-up</span>
            </div>
          )}

          {pageState !== 'done' && (
            <DimensionInput
              width={width}
              height={height}
              lockAspect={lockAspect}
              originalWidth={width}
              originalHeight={height}
              disabled={pageState === 'processing'}
              onWidthChange={setWidth}
              onHeightChange={setHeight}
              onLockToggle={() => setLockAspect((v) => !v)}
              onPreset={handlePreset}
            />
          )}

          <ProgressBar
            visible={pageState === 'processing'}
            label="Resizing image"
            color="bg-primary"
          />
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
