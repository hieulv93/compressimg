'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import AdSlot from '@/components/ads/AdSlot'
import PngToIcoContentSection from '@/components/tool/PngToIcoContentSection'
import { createIcoFromImage, revokeIcoPreview } from '@/lib/ico'
import type { IcoResult } from '@/lib/ico'
import { formatBytes, generateFilename, MAX_FILE_SIZE_MB } from '@/lib/utils'
import { triggerDownload } from '@/lib/convert'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

export default function PngToIcoPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<IcoResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)

  const handleFileSelect = useCallback(
    async (file: File) => {
      const fileWithFlag = file as File & { _invalid?: string }
      if (fileWithFlag._invalid === 'format') {
        setErrorMessage('Unsupported format. Use PNG, JPG, or WebP.')
        setPageState('error')
        return
      }
      if (fileWithFlag._invalid === 'size') {
        setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
        setPageState('error')
        return
      }

      if (result?.previewUrl) revokeIcoPreview(result.previewUrl)
      setResult(null)
      setOriginalFile(file)
      setPageState('processing')
      setErrorMessage('')
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))

      try {
        const ico = await createIcoFromImage(file)
        setResult(ico)
        setPageState('done')
        analytics.imageConverted('png', 'ico', file.size / 1024, ico.outputSize / 1024)
      } catch {
        setErrorMessage('Conversion failed. Please try again.')
        setPageState('error')
        analytics.convertError('png_to_ico_failed')
      }
    },
    [result]
  )

  const handleReset = useCallback(() => {
    if (result?.previewUrl) revokeIcoPreview(result.previewUrl)
    setResult(null)
    setOriginalFile(null)
    setErrorMessage('')
    setPageState('idle')
  }, [result])

  const handleDownload = useCallback(() => {
    if (!result || !originalFile) return
    const filename = generateFilename(originalFile.name, 'ico', 'favicon')
    triggerDownload(result.blob, filename)
    analytics.imageConverted('png', 'ico', result.originalSize / 1024, result.outputSize / 1024)
  }, [result, originalFile])

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
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            PNG to ICO Converter — Favicon Generator
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Create a favicon.ico from any PNG, JPG, or WebP — 6 sizes included, free, 100% in your
            browser
          </p>
        </div>

        <div className="space-y-4">
          <UploadBox
            state={uploadBoxState}
            onFileSelect={handleFileSelect}
            errorMessage={errorMessage}
            processingLabel="Generating ICO..."
          />

          {uploadBoxState === 'idle' && (
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
              <span>⚡ Generated in seconds</span>
              <span>·</span>
              <span>🔒 Images never leave your device</span>
              <span>·</span>
              <span>✓ Free, no sign-up</span>
            </div>
          )}

          <ProgressBar
            visible={pageState === 'processing'}
            label="Generating ICO with 6 sizes"
            color="bg-primary"
          />
        </div>

        {pageState === 'done' && result && originalFile && (
          <div
            className="w-full rounded-2xl border border-border bg-white shadow-sm overflow-hidden"
            role="region"
            aria-label="ICO generation result"
            aria-live="polite"
          >
            <div
              className="relative w-full bg-surface flex items-center justify-center gap-6 py-8"
              style={{ minHeight: '160px' }}
            >
              <div className="flex items-end gap-4">
                {[16, 32, 48].map((size) => (
                  <div key={size} className="flex flex-col items-center gap-1">
                    <Image
                      src={result.previewUrl}
                      alt={`${size}×${size} favicon preview`}
                      width={size}
                      height={size}
                      className="border border-border/50 rounded"
                      unoptimized
                    />
                    <span className="text-xs text-text-muted">{size}px</span>
                  </div>
                ))}
                {[64, 128].map((size) => (
                  <div key={size} className="flex flex-col items-center gap-1 hidden sm:flex">
                    <Image
                      src={result.previewUrl}
                      alt={`${size}×${size} favicon preview`}
                      width={size}
                      height={size}
                      className="border border-border/50 rounded"
                      unoptimized
                    />
                    <span className="text-xs text-text-muted">{size}px</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="space-y-1">
                  <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                    Original
                  </p>
                  <p className="text-sm font-semibold text-text-main">
                    {originalFile.type.split('/')[1]?.toUpperCase() ?? 'IMAGE'}
                  </p>
                  <p className="text-xs text-text-muted">{formatBytes(result.originalSize)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                    Generated
                  </p>
                  <p className="text-sm font-semibold text-primary">ICO</p>
                  <p className="text-xs text-text-muted">{formatBytes(result.outputSize)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                    Sizes
                  </p>
                  <p className="text-sm font-semibold text-primary">6</p>
                  <p className="text-xs text-text-muted">16–256px</p>
                </div>
              </div>

              <p className="text-xs text-primary bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-center">
                ICO contains 6 sizes: 16, 32, 48, 64, 128, 256px — browsers pick the best size
                automatically.
              </p>

              <button
                onClick={handleDownload}
                className="w-full touch-target bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl py-3 px-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Download favicon.ico ({formatBytes(result.outputSize)})
              </button>

              <button
                onClick={handleReset}
                className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Convert another image
              </button>
            </div>
          </div>
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <PngToIcoContentSection />
      </div>
    </main>
  )
}
