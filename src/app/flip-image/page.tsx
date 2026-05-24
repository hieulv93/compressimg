'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import UploadBox from '@/components/tool/UploadBox'
import AdSlot from '@/components/ads/AdSlot'
import DownloadButton from '@/components/tool/DownloadButton'
import FlipImageContentSection from '@/components/tool/FlipImageContentSection'
import { flipImageCanvas, revokeTransformPreview } from '@/lib/transform'
import type { TransformResult } from '@/lib/transform'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { generateFilename, formatBytes } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'loading' | 'ready' | 'error'

export default function FlipImagePage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [flipH, setFlipH] = useState(false)
  const [flipV, setFlipV] = useState(false)
  const [result, setResult] = useState<TransformResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const resultUrlRef = useRef<string | null>(null)

  const applyFlip = useCallback(async (file: File, h: boolean, v: boolean) => {
    if (resultUrlRef.current) {
      revokeTransformPreview(resultUrlRef.current)
      resultUrlRef.current = null
    }
    try {
      const r = await flipImageCanvas(file, h, v)
      resultUrlRef.current = r.previewUrl
      setResult(r)
    } catch {
      setErrorMessage('Flip failed. Please try again.')
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
      setFlipH(false)
      setFlipV(false)

      const prepared = isHeicFile(file) ? await convertHeicToJpeg(file) : file
      setOriginalFile(prepared)
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))

      await applyFlip(prepared, false, false)
      setPageState('ready')
    },
    [applyFlip]
  )

  const handleFlipH = useCallback(async () => {
    if (!originalFile) return
    const newH = !flipH
    setFlipH(newH)
    await applyFlip(originalFile, newH, flipV)
    analytics.imageFlipped(newH, flipV, result?.outputWidth ?? 0, result?.outputHeight ?? 0)
  }, [originalFile, flipH, flipV, result, applyFlip])

  const handleFlipV = useCallback(async () => {
    if (!originalFile) return
    const newV = !flipV
    setFlipV(newV)
    await applyFlip(originalFile, flipH, newV)
    analytics.imageFlipped(flipH, newV, result?.outputWidth ?? 0, result?.outputHeight ?? 0)
  }, [originalFile, flipH, flipV, result, applyFlip])

  const handleReset = useCallback(() => {
    if (resultUrlRef.current) {
      revokeTransformPreview(resultUrlRef.current)
      resultUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setFlipH(false)
    setFlipV(false)
    setErrorMessage('')
    setPageState('idle')
  }, [])

  const uploadBoxState =
    pageState === 'loading' ? 'processing' : pageState === 'error' ? 'error' : 'idle'

  const filename =
    result && originalFile ? generateFilename(originalFile.name, 'jpg', 'flipped') : ''

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Flip Image Online — Free, No Upload
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Mirror JPG, PNG, WebP, or HEIC images horizontally or vertically in one click — 100%
            browser-based and private.
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
                  <span>⚡ Flipped instantly</span>
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
                  alt="Flipped image preview"
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
                  {flipH && (
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                      Mirrored Horizontal
                    </span>
                  )}
                  {flipV && (
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                      Mirrored Vertical
                    </span>
                  )}
                </div>

                {/* Flip buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleFlipH}
                    className={`touch-target flex flex-col items-center justify-center gap-1 rounded-xl border transition-colors py-4 text-xs font-medium ${
                      flipH
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-surface hover:border-primary/40 hover:bg-primary/5 text-text-main'
                    }`}
                  >
                    <span className="text-xl">⇄</span>
                    <span>Flip Horizontal</span>
                    <span className={`text-xs ${flipH ? 'text-primary/70' : 'text-text-muted'}`}>
                      Mirror left ↔ right
                    </span>
                  </button>
                  <button
                    onClick={handleFlipV}
                    className={`touch-target flex flex-col items-center justify-center gap-1 rounded-xl border transition-colors py-4 text-xs font-medium ${
                      flipV
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-surface hover:border-primary/40 hover:bg-primary/5 text-text-main'
                    }`}
                  >
                    <span className="text-xl">⇅</span>
                    <span>Flip Vertical</span>
                    <span className={`text-xs ${flipV ? 'text-primary/70' : 'text-text-muted'}`}>
                      Mirror top ↕ bottom
                    </span>
                  </button>
                </div>

                <DownloadButton
                  blob={result.blob}
                  filename={filename}
                  compressedSize={result.outputSize}
                  onDownload={() =>
                    analytics.imageFlipped(flipH, flipV, result.outputWidth, result.outputHeight)
                  }
                />

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Flip another image
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot compressionDone={pageState === 'ready'} slot="placeholder-slot-id" />

        <FlipImageContentSection />
      </div>
    </main>
  )
}
