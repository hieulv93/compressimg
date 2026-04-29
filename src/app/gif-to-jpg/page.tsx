'use client'

import { useState, useCallback } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import ConvertResultCard from '@/components/tool/ConvertResultCard'
import AdSlot from '@/components/ads/AdSlot'
import GifToJpgContentSection from '@/components/tool/GifToJpgContentSection'
import { convertImage, revokeConvertPreview } from '@/lib/convert'
import type { ConvertResult } from '@/lib/convert'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

export default function GifToJpgPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<ConvertResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)

  const handleFileSelect = useCallback(
    async (file: File) => {
      const fileWithFlag = file as File & { _invalid?: string }
      if (fileWithFlag._invalid === 'format') {
        setErrorMessage('Unsupported format. Please upload a GIF file.')
        setPageState('error')
        return
      }
      if (fileWithFlag._invalid === 'size') {
        setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
        setPageState('error')
        return
      }

      if (result?.previewUrl) revokeConvertPreview(result.previewUrl)
      setResult(null)
      setOriginalFile(file)
      setPageState('processing')
      setErrorMessage('')
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))

      try {
        const converted = await convertImage(file, { outputFormat: 'image/jpeg' })
        setResult(converted)
        setPageState('done')
        analytics.imageConverted('gif', 'jpg', file.size / 1024, converted.outputSize / 1024)
      } catch {
        setErrorMessage('Conversion failed. Please try again.')
        setPageState('error')
        analytics.convertError('gif_to_jpg_failed')
      }
    },
    [result]
  )

  const handleReset = useCallback(() => {
    if (result?.previewUrl) revokeConvertPreview(result.previewUrl)
    setResult(null)
    setOriginalFile(null)
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
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">GIF to JPG Converter</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Convert GIF to JPG instantly — extract the first frame as a high-quality JPEG, free,
            100% in your browser
          </p>
        </div>

        <div className="space-y-4">
          <UploadBox
            state={uploadBoxState}
            onFileSelect={handleFileSelect}
            errorMessage={errorMessage}
            processingLabel="Converting GIF to JPG..."
            accept="image/gif,.gif"
            formatHint={`GIF — max ${MAX_FILE_SIZE_MB}MB`}
          />

          {uploadBoxState === 'idle' && (
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
              <span>⚡ Converts in seconds</span>
              <span>·</span>
              <span>🔒 Files never leave your device</span>
              <span>·</span>
              <span>✓ Free, no sign-up</span>
            </div>
          )}

          <ProgressBar
            visible={pageState === 'processing'}
            label="Converting GIF to JPG"
            color="bg-primary"
          />
        </div>

        {pageState === 'done' && result && originalFile && (
          <ConvertResultCard
            blob={result.blob}
            previewUrl={result.previewUrl}
            inputFormat={result.inputFormat}
            outputExt={result.outputExt}
            originalSize={result.originalSize}
            outputSize={result.outputSize}
            originalName={originalFile.name.replace(/\.gif$/i, '.jpg')}
            onReset={handleReset}
            onDownload={() =>
              analytics.imageConverted(
                'gif',
                'jpg',
                result.originalSize / 1024,
                result.outputSize / 1024
              )
            }
          />
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <GifToJpgContentSection />
      </div>
    </main>
  )
}
