'use client'

import { useState, useCallback, useRef } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import ResultCard from '@/components/tool/ResultCard'
import AdSlot from '@/components/ads/AdSlot'
import HeicToJpgContentSection from '@/components/tool/HeicToJpgContentSection'
import { compressImage, revokePreview } from '@/lib/compress'
import type { CompressResult } from '@/lib/compress'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

export default function HeicToJpgPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<CompressResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [originalPreviewUrl, setOriginalPreviewUrl] = useState<string | null>(null)
  const origUrlRef = useRef<string | null>(null)

  const handleFileSelect = useCallback(async (file: File) => {
    const fileWithFlag = file as File & { _invalid?: string }
    if (fileWithFlag._invalid === 'format') {
      setErrorMessage('Unsupported format. Use HEIC, JPG, PNG, or WebP.')
      setPageState('error')
      return
    }
    if (fileWithFlag._invalid === 'size') {
      setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
      setPageState('error')
      return
    }

    setOriginalFile(file)
    setPageState('processing')
    setErrorMessage('')

    if (origUrlRef.current) URL.revokeObjectURL(origUrlRef.current)
    const origUrl = URL.createObjectURL(file)
    origUrlRef.current = origUrl
    setOriginalPreviewUrl(origUrl)

    analytics.imageUploaded(file.type, Math.round(file.size / 1024))

    try {
      // quality 90 — standard for HEIC→JPG conversion
      const converted = await compressImage(file, { quality: 90 })
      setResult(converted)
      setPageState('done')
      analytics.imageCompressed(
        Math.round(converted.originalSize / 1024),
        Math.round(converted.compressedSize / 1024),
        converted.format,
        90
      )
    } catch {
      setErrorMessage('Conversion failed. Please try again.')
      setPageState('error')
      analytics.compressionError('conversion_failed')
    }
  }, [])

  const handleReset = useCallback(() => {
    if (result?.previewUrl) revokePreview(result.previewUrl)
    if (origUrlRef.current) {
      URL.revokeObjectURL(origUrlRef.current)
      origUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setOriginalPreviewUrl(null)
    setErrorMessage('')
    setPageState('idle')
  }, [result])

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
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">HEIC to JPG Converter</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Convert iPhone HEIC photos to JPG instantly — open on any device, free, 100% in your
            browser
          </p>
        </div>

        <div className="space-y-4">
          <UploadBox
            state={uploadBoxState}
            onFileSelect={handleFileSelect}
            errorMessage={errorMessage}
            processingLabel="Converting HEIC to JPG..."
          />

          {uploadBoxState === 'idle' && (
            <div className="flex items-center justify-center gap-4 text-xs text-text-muted flex-wrap">
              <span>⚡ Converts in seconds</span>
              <span>·</span>
              <span>🔒 Photos never leave your device</span>
              <span>·</span>
              <span>✓ Free, no sign-up</span>
            </div>
          )}

          <ProgressBar visible={pageState === 'processing'} label="Converting to JPG" />
        </div>

        {pageState === 'done' && result && originalFile && (
          <ResultCard
            blob={result.blob}
            previewUrl={result.previewUrl}
            originalPreviewUrl={originalPreviewUrl ?? undefined}
            originalSize={result.originalSize}
            compressedSize={result.compressedSize}
            format={result.format}
            originalName={originalFile.name.replace(/\.(heic|heif)$/i, '.jpg')}
            onReset={handleReset}
            onRecompress={handleReset}
            onDownload={() => analytics.imageDownloaded(Math.round(result.compressedSize / 1024))}
          />
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <HeicToJpgContentSection />
      </div>
    </main>
  )
}
