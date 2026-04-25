'use client'

import { useState, useCallback } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import FormatSelector from '@/components/tool/FormatSelector'
import ProgressBar from '@/components/tool/ProgressBar'
import ConvertResultCard from '@/components/tool/ConvertResultCard'
import AdSlot from '@/components/ads/AdSlot'
import JpgToWebpContentSection from '@/components/tool/JpgToWebpContentSection'
import { convertImage, revokeConvertPreview } from '@/lib/convert'
import type { ConvertResult, OutputFormat } from '@/lib/convert'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

const DEFAULT_FORMAT: OutputFormat = 'image/webp'

export default function JpgToWebpPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [outputFormat, setOutputFormat] = useState<OutputFormat>(DEFAULT_FORMAT)
  const [result, setResult] = useState<ConvertResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)

  const handleConvert = useCallback(async (file: File, format: OutputFormat) => {
    setPageState('processing')
    setErrorMessage('')
    await new Promise((r) => setTimeout(r, 0))
    try {
      const converted = await convertImage(file, { outputFormat: format })
      setResult(converted)
      setPageState('done')
      analytics.imageConverted(
        converted.inputFormat,
        converted.outputExt,
        file.size / 1024,
        converted.outputSize / 1024
      )
    } catch {
      setErrorMessage('Conversion failed. Please try again.')
      setPageState('error')
      analytics.convertError('convert_failed')
    }
  }, [])

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
      if (result?.previewUrl) revokeConvertPreview(result.previewUrl)
      setResult(null)
      setOriginalFile(file)
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))
      await handleConvert(file, outputFormat)
    },
    [outputFormat, result, handleConvert]
  )

  const handleFormatChange = useCallback(
    (newFormat: OutputFormat) => {
      setOutputFormat(newFormat)
      if (originalFile && pageState === 'done') {
        if (result?.previewUrl) revokeConvertPreview(result.previewUrl)
        setResult(null)
        void handleConvert(originalFile, newFormat)
      }
    },
    [originalFile, pageState, result, handleConvert]
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
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">JPG to WebP Converter</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Convert JPEG to WebP instantly — reduce file size by 25–35%, free, 100% in your browser
          </p>
        </div>

        <div className="space-y-4">
          <UploadBox
            state={uploadBoxState}
            onFileSelect={handleFileSelect}
            errorMessage={errorMessage}
            processingLabel="Converting..."
          />

          {uploadBoxState === 'idle' && (
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
              <span>⚡ Converted in seconds</span>
              <span>·</span>
              <span>🔒 Images never leave your device</span>
              <span>·</span>
              <span>✓ Free, no sign-up</span>
            </div>
          )}

          <FormatSelector
            value={outputFormat}
            onChange={handleFormatChange}
            inputMime={originalFile?.type}
            disabled={pageState === 'processing'}
          />

          <ProgressBar
            visible={pageState === 'processing'}
            label="Converting image"
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
            originalName={originalFile.name}
            onReset={handleReset}
            onDownload={() =>
              analytics.imageConverted(
                result.inputFormat,
                result.outputExt,
                result.originalSize / 1024,
                result.outputSize / 1024
              )
            }
          />
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <JpgToWebpContentSection />
      </div>
    </main>
  )
}
