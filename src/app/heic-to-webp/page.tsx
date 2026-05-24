'use client'

import { useState, useCallback } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import ConvertResultCard from '@/components/tool/ConvertResultCard'
import AdSlot from '@/components/ads/AdSlot'
import HeicToWebpContentSection from '@/components/tool/HeicToWebpContentSection'
import { revokeConvertPreview } from '@/lib/convert'
import type { ConvertResult } from '@/lib/convert'
import { MAX_FILE_SIZE_MB, MAX_FILE_SIZE_BYTES } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

function isHeicFile(file: File): boolean {
  const lower = file.name.toLowerCase()
  return (
    file.type === 'image/heic' ||
    file.type === 'image/heif' ||
    lower.endsWith('.heic') ||
    lower.endsWith('.heif')
  )
}

async function convertHeicToWebp(file: File): Promise<ConvertResult> {
  const { convertHeicToJpeg } = await import('@/lib/heic')
  const jpegFile = await convertHeicToJpeg(file)

  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(jpegFile)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Canvas context unavailable'))
        return
      }
      ctx.drawImage(img, 0, 0)
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to encode WebP'))
            return
          }
          resolve({
            blob,
            previewUrl: URL.createObjectURL(blob),
            inputFormat: 'heic',
            outputExt: 'webp',
            originalSize: file.size,
            outputSize: blob.size,
          })
        },
        'image/webp',
        0.92
      )
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load image'))
    }
    img.src = url
  })
}

export default function HeicToWebpPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<ConvertResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)

  const handleFileSelect = useCallback(
    async (file: File) => {
      const fileWithFlag = file as File & { _invalid?: string }
      if (fileWithFlag._invalid === 'format') {
        setErrorMessage('Unsupported format. Please upload a HEIC or HEIF file.')
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
      analytics.imageUploaded(file.type || 'image/heic', Math.round(file.size / 1024))

      try {
        const converted = await convertHeicToWebp(file)
        setResult(converted)
        setPageState('done')
        analytics.imageConverted('heic', 'webp', file.size / 1024, converted.outputSize / 1024)
      } catch {
        setErrorMessage('Conversion failed. Please try again with a different HEIC file.')
        setPageState('error')
        analytics.convertError('heic_to_webp_failed')
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
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">HEIC to WebP Converter</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Convert iPhone HEIC photos to WebP for smaller, web-ready files — free, no upload, 100%
            in your browser
          </p>
        </div>

        <div className="space-y-4">
          <UploadBox
            state={uploadBoxState}
            onFileSelect={handleFileSelect}
            errorMessage={errorMessage}
            processingLabel="Converting HEIC to WebP..."
            accept="image/heic,image/heif,.heic,.heif"
            customValidate={(file) => {
              if (file.size > MAX_FILE_SIZE_BYTES) return false
              return isHeicFile(file)
            }}
            formatHint={`HEIC, HEIF — max ${MAX_FILE_SIZE_MB}MB`}
          />

          {uploadBoxState === 'idle' && (
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
              <span>⚡ Converts in seconds</span>
              <span>·</span>
              <span>🔒 Photos never leave your device</span>
              <span>·</span>
              <span>✓ Free, no sign-up</span>
            </div>
          )}

          <ProgressBar
            visible={pageState === 'processing'}
            label="Converting HEIC to WebP"
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
            originalName={originalFile.name.replace(/\.(heic|heif)$/i, '.webp')}
            onReset={handleReset}
            onDownload={() =>
              analytics.imageConverted(
                'heic',
                'webp',
                result.originalSize / 1024,
                result.outputSize / 1024
              )
            }
          />
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <HeicToWebpContentSection />
      </div>
    </main>
  )
}
