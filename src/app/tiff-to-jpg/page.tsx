'use client'

import { useState, useCallback } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import ConvertResultCard from '@/components/tool/ConvertResultCard'
import AdSlot from '@/components/ads/AdSlot'
import TiffToJpgContentSection from '@/components/tool/TiffToJpgContentSection'
import { convertTiffToJpg, revokeConvertPreview } from '@/lib/convert'
import type { ConvertResult } from '@/lib/convert'
import { MAX_FILE_SIZE_MB, MAX_FILE_SIZE_BYTES } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

function isTiffFile(file: File): boolean {
  if (file.type === 'image/tiff' || file.type === 'image/x-tiff') return true
  const name = file.name.toLowerCase()
  return name.endsWith('.tif') || name.endsWith('.tiff')
}

export default function TiffToJpgPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<ConvertResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)

  const handleFileSelect = useCallback(
    async (file: File) => {
      const fileWithFlag = file as File & { _invalid?: string }
      if (fileWithFlag._invalid === 'format') {
        setErrorMessage('Unsupported format. Please upload a TIFF or TIF file.')
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
      analytics.imageUploaded(file.type || 'image/tiff', Math.round(file.size / 1024))

      try {
        const converted = await convertTiffToJpg(file)
        setResult(converted)
        setPageState('done')
        analytics.imageConverted('tiff', 'jpg', file.size / 1024, converted.outputSize / 1024)
      } catch {
        setErrorMessage('Conversion failed. Please try again with a different TIFF file.')
        setPageState('error')
        analytics.convertError('tiff_to_jpg_failed')
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
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">TIFF to JPG Converter</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Convert TIFF to JPG instantly — shrink huge TIFF files to compact JPEG, free, 100% in
            your browser
          </p>
        </div>

        <div className="space-y-4">
          <UploadBox
            state={uploadBoxState}
            onFileSelect={handleFileSelect}
            errorMessage={errorMessage}
            processingLabel="Converting TIFF to JPG..."
            accept="image/tiff,image/x-tiff,.tif,.tiff"
            customValidate={(file) => {
              if (file.size > MAX_FILE_SIZE_BYTES) return false
              return isTiffFile(file)
            }}
            formatHint={`TIFF, TIF — max ${MAX_FILE_SIZE_MB}MB`}
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
            label="Converting TIFF to JPG"
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
            originalName={originalFile.name.replace(/\.tiff?$/i, '.jpg')}
            onReset={handleReset}
            onDownload={() =>
              analytics.imageConverted(
                'tiff',
                'jpg',
                result.originalSize / 1024,
                result.outputSize / 1024
              )
            }
          />
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <TiffToJpgContentSection />
      </div>
    </main>
  )
}
