'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import QualitySlider from '@/components/tool/QualitySlider'
import ProgressBar from '@/components/tool/ProgressBar'
import ResultCard from '@/components/tool/ResultCard'
import { compressImage, revokePreview } from '@/lib/compress'
import type { CompressResult } from '@/lib/compress'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

export default function HomepageCompressTool() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [quality, setQuality] = useState(80)
  const [result, setResult] = useState<CompressResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [originalPreviewUrl, setOriginalPreviewUrl] = useState<string | null>(null)
  const origUrlRef = useRef<string | null>(null)
  const qualityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (pageState !== 'done' || !originalFile) return
    if (qualityTimerRef.current) clearTimeout(qualityTimerRef.current)
    qualityTimerRef.current = setTimeout(handleRecompress, 800)
    return () => {
      if (qualityTimerRef.current) clearTimeout(qualityTimerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quality])

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

      setOriginalFile(file)
      setPageState('processing')
      setErrorMessage('')
      if (origUrlRef.current) URL.revokeObjectURL(origUrlRef.current)
      const origUrl = URL.createObjectURL(file)
      origUrlRef.current = origUrl
      setOriginalPreviewUrl(origUrl)
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))

      try {
        const compressed = await compressImage(file, { quality })
        setResult(compressed)
        setPageState('done')
        analytics.imageCompressed(
          Math.round(compressed.originalSize / 1024),
          Math.round(compressed.compressedSize / 1024),
          compressed.format,
          quality
        )
      } catch {
        setErrorMessage('Compression failed. Please try again.')
        setPageState('error')
        analytics.compressionError('compression_failed')
      }
    },
    [quality]
  )

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

  const handleRecompress = useCallback(async () => {
    if (!originalFile) return
    if (result?.previewUrl) revokePreview(result.previewUrl)
    setResult(null)
    setPageState('processing')
    try {
      const compressed = await compressImage(originalFile, { quality })
      setResult(compressed)
      setPageState('done')
      analytics.imageCompressed(
        Math.round(compressed.originalSize / 1024),
        Math.round(compressed.compressedSize / 1024),
        compressed.format,
        quality
      )
    } catch {
      setErrorMessage('Compression failed. Please try again.')
      setPageState('error')
      analytics.compressionError('compression_failed')
    }
  }, [originalFile, result, quality])

  const uploadBoxState =
    pageState === 'done'
      ? 'done'
      : pageState === 'processing'
        ? 'processing'
        : pageState === 'error'
          ? 'error'
          : 'idle'

  return (
    <div className="space-y-4">
      <UploadBox
        state={uploadBoxState}
        onFileSelect={handleFileSelect}
        errorMessage={errorMessage}
      />

      {uploadBoxState === 'idle' && (
        <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
          <span>⚡ Compressed in seconds</span>
          <span>·</span>
          <span>🔒 Images never leave your device</span>
          <span>·</span>
          <span>✓ Free, no sign-up</span>
        </div>
      )}

      <QualitySlider value={quality} onChange={setQuality} disabled={pageState === 'processing'} />

      <ProgressBar visible={pageState === 'processing'} quality={quality} />

      {pageState === 'done' && result && originalFile && (
        <ResultCard
          blob={result.blob}
          previewUrl={result.previewUrl}
          originalPreviewUrl={originalPreviewUrl ?? undefined}
          originalSize={result.originalSize}
          compressedSize={result.compressedSize}
          format={result.format}
          originalName={originalFile.name}
          onReset={handleReset}
          onRecompress={handleRecompress}
          onDownload={() => analytics.imageDownloaded(Math.round(result.compressedSize / 1024))}
        />
      )}
    </div>
  )
}
