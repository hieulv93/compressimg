'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import UploadBox from '@/components/tool/UploadBox'
import AdSlot from '@/components/ads/AdSlot'
import DownloadButton from '@/components/tool/DownloadButton'
import RotateImageContentSection from '@/components/tool/RotateImageContentSection'
import { rotateImageCanvas, revokeTransformPreview } from '@/lib/transform'
import type { TransformResult } from '@/lib/transform'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { generateFilename, formatBytes } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'loading' | 'ready' | 'error'
type Angle = 0 | 90 | 180 | 270

export default function RotateImagePage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [angle, setAngle] = useState<Angle>(0)
  const [result, setResult] = useState<TransformResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const resultUrlRef = useRef<string | null>(null)

  const applyRotation = useCallback(async (file: File, newAngle: Angle) => {
    if (resultUrlRef.current) {
      revokeTransformPreview(resultUrlRef.current)
      resultUrlRef.current = null
    }
    try {
      const r = await rotateImageCanvas(file, newAngle)
      resultUrlRef.current = r.previewUrl
      setResult(r)
    } catch {
      setErrorMessage('Rotation failed. Please try again.')
      setPageState('error')
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

      setPageState('loading')
      setErrorMessage('')
      setAngle(0)

      const prepared = isHeicFile(file) ? await convertHeicToJpeg(file) : file
      setOriginalFile(prepared)
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))

      await applyRotation(prepared, 0)
      setPageState('ready')
    },
    [applyRotation]
  )

  const handleRotate = useCallback(
    async (delta: 90 | -90 | 180) => {
      if (!originalFile) return
      const newAngle = ((((angle + delta) % 360) + 360) % 360) as Angle
      setAngle(newAngle)
      await applyRotation(originalFile, newAngle)
      if (result) {
        analytics.imageRotated(newAngle, result.outputWidth, result.outputHeight)
      }
    },
    [angle, originalFile, result, applyRotation]
  )

  const handleReset = useCallback(() => {
    if (resultUrlRef.current) {
      revokeTransformPreview(resultUrlRef.current)
      resultUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setAngle(0)
    setErrorMessage('')
    setPageState('idle')
  }, [])

  const uploadBoxState =
    pageState === 'loading' ? 'processing' : pageState === 'error' ? 'error' : 'idle'

  const filename =
    result && originalFile ? generateFilename(originalFile.name, 'jpg', 'rotated') : ''

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Rotate Image Online — Free, No Upload
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Rotate JPG, PNG, WebP, or HEIC images 90°, 180°, or 270° instantly — 100% browser-based
            and private.
          </p>
        </div>

        <div className="space-y-4">
          {pageState !== 'ready' && (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Loading image..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ Rotated instantly</span>
                  <span>·</span>
                  <span>🔒 Images never leave your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
            </>
          )}

          {pageState === 'ready' && result && originalFile && (
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              {/* Preview */}
              <div
                className="relative w-full bg-surface flex items-center justify-center"
                style={{ minHeight: '240px' }}
              >
                <Image
                  src={result.previewUrl}
                  alt="Rotated image preview"
                  width={600}
                  height={400}
                  className="max-h-72 w-auto object-contain"
                  unoptimized
                />
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-surface border border-border text-xs text-text-muted">
                    {result.outputWidth}×{result.outputHeight}px
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface border border-border text-xs text-text-muted">
                    {formatBytes(result.outputSize)}
                  </span>
                  {angle > 0 && (
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                      Rotated {angle}°
                    </span>
                  )}
                </div>

                {/* Rotate buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleRotate(-90)}
                    className="touch-target flex flex-col items-center justify-center gap-1 rounded-xl border border-border bg-surface hover:border-primary/40 hover:bg-primary/5 transition-colors py-3 text-xs font-medium text-text-main"
                  >
                    <span className="text-lg">↺</span>
                    <span>Rotate Left</span>
                    <span className="text-text-muted text-xs">90° CCW</span>
                  </button>
                  <button
                    onClick={() => handleRotate(180)}
                    className="touch-target flex flex-col items-center justify-center gap-1 rounded-xl border border-border bg-surface hover:border-primary/40 hover:bg-primary/5 transition-colors py-3 text-xs font-medium text-text-main"
                  >
                    <span className="text-lg">↕</span>
                    <span>Rotate</span>
                    <span className="text-text-muted text-xs">180°</span>
                  </button>
                  <button
                    onClick={() => handleRotate(90)}
                    className="touch-target flex flex-col items-center justify-center gap-1 rounded-xl border border-border bg-surface hover:border-primary/40 hover:bg-primary/5 transition-colors py-3 text-xs font-medium text-text-main"
                  >
                    <span className="text-lg">↻</span>
                    <span>Rotate Right</span>
                    <span className="text-text-muted text-xs">90° CW</span>
                  </button>
                </div>

                <DownloadButton
                  blob={result.blob}
                  filename={filename}
                  compressedSize={result.outputSize}
                  onDownload={() =>
                    analytics.imageRotated(angle, result.outputWidth, result.outputHeight)
                  }
                />

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Rotate another image
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot compressionDone={pageState === 'ready'} slot="placeholder-slot-id" />

        <RotateImageContentSection />
      </div>
    </main>
  )
}
