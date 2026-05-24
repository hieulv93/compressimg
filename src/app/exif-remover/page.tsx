'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import AdSlot from '@/components/ads/AdSlot'
import DownloadButton from '@/components/tool/DownloadButton'
import ExifRemoverContentSection from '@/components/tool/ExifRemoverContentSection'
import { stripExifCanvas, revokeTransformPreview } from '@/lib/transform'
import type { TransformResult } from '@/lib/transform'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { generateFilename, formatBytes } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

const STRIPPED_FIELDS = [
  'GPS coordinates (exact location)',
  'Camera make & model',
  'Date & time taken',
  'Lens & exposure settings',
  'Device serial number',
  'Software & editing history',
]

export default function ExifRemoverPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<TransformResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const resultUrlRef = useRef<string | null>(null)

  const handleFileSelect = useCallback(async (file: File) => {
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

    if (resultUrlRef.current) {
      revokeTransformPreview(resultUrlRef.current)
      resultUrlRef.current = null
    }

    setPageState('processing')
    setErrorMessage('')
    analytics.imageUploaded(file.type, Math.round(file.size / 1024))

    const prepared = isHeicFile(file) ? await convertHeicToJpeg(file) : file
    setOriginalFile(prepared)

    try {
      const r = await stripExifCanvas(prepared)
      resultUrlRef.current = r.previewUrl
      setResult(r)
      setPageState('done')
      analytics.exifStripped(r.originalSize / 1024, r.outputSize / 1024)
    } catch {
      setErrorMessage('Failed to process image. Please try again.')
      setPageState('error')
    }
  }, [])

  const handleReset = useCallback(() => {
    if (resultUrlRef.current) {
      revokeTransformPreview(resultUrlRef.current)
      resultUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setErrorMessage('')
    setPageState('idle')
  }, [])

  const uploadBoxState =
    pageState === 'processing' ? 'processing' : pageState === 'error' ? 'error' : 'idle'

  const filename = result && originalFile ? generateFilename(originalFile.name, 'jpg', 'clean') : ''

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            EXIF Remover — Strip Photo Metadata Free
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Remove GPS location, camera info, and all metadata from your photos instantly — 100%
            browser-based, your image never leaves your device.
          </p>
        </div>

        <div className="space-y-4">
          {pageState !== 'done' && (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Stripping metadata..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ Metadata removed instantly</span>
                  <span>·</span>
                  <span>🔒 Photo never leaves your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
              <ProgressBar visible={pageState === 'processing'} quality={92} />
            </>
          )}

          {pageState === 'done' && result && originalFile && (
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              {/* Preview */}
              <div
                className="relative w-full bg-surface flex items-center justify-center"
                style={{ minHeight: '240px' }}
              >
                <Image
                  src={result.previewUrl}
                  alt="Clean photo with EXIF removed"
                  width={600}
                  height={400}
                  className="max-h-72 w-auto object-contain"
                  unoptimized
                />
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                {/* Success badge */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 border border-green-200">
                  <svg
                    className="w-4 h-4 text-green-600 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs font-semibold text-green-700">
                    EXIF metadata removed — safe to share
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="space-y-1">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      Original
                    </p>
                    <p className="text-sm font-semibold text-text-main">
                      {formatBytes(result.originalSize)}
                    </p>
                    <p className="text-xs text-text-muted">with EXIF</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      Clean
                    </p>
                    <p className="text-sm font-semibold text-green-600">
                      {formatBytes(result.outputSize)}
                    </p>
                    <p className="text-xs text-text-muted">no metadata</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      Dimensions
                    </p>
                    <p className="text-sm font-semibold text-text-main">
                      {result.outputWidth}×{result.outputHeight}
                    </p>
                    <p className="text-xs text-text-muted">preserved</p>
                  </div>
                </div>

                {/* What was stripped */}
                <div className="rounded-xl bg-surface border border-border p-3">
                  <p className="text-xs font-semibold text-text-main mb-2">Metadata stripped:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {STRIPPED_FIELDS.map((field) => (
                      <div
                        key={field}
                        className="flex items-center gap-1.5 text-xs text-text-muted"
                      >
                        <span className="text-green-500 shrink-0">✓</span>
                        {field}
                      </div>
                    ))}
                  </div>
                </div>

                <DownloadButton
                  blob={result.blob}
                  filename={filename}
                  compressedSize={result.outputSize}
                  onDownload={() =>
                    analytics.exifStripped(result.originalSize / 1024, result.outputSize / 1024)
                  }
                />

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Remove EXIF from another photo
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <ExifRemoverContentSection />
      </div>
    </main>
  )
}
