'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import ResizeResultCard from '@/components/tool/ResizeResultCard'
import AdSlot from '@/components/ads/AdSlot'
import { resizeImage, revokeResizePreview, MAX_RESIZE_DIMENSION } from '@/lib/resize'
import type { ResizeResult } from '@/lib/resize'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'ready' | 'processing' | 'done' | 'error'

const DPI_PRESETS = [72, 96, 150, 300] as const
const DPI_LABELS: Record<number, string> = {
  72: 'Web / screen display',
  96: 'Windows screen — standard web',
  150: 'Good print quality — documents',
  300: 'Professional print — high quality',
}

function toPx(value: number, unit: 'cm' | 'inch', dpi: number): number {
  const inches = unit === 'cm' ? value / 2.54 : value
  return Math.max(1, Math.min(MAX_RESIZE_DIMENSION, Math.round(inches * dpi)))
}

function toUnit(px: number, unit: 'cm' | 'inch', dpi: number): number {
  const inches = px / dpi
  const val = unit === 'cm' ? inches * 2.54 : inches
  return parseFloat(val.toFixed(2))
}

interface FixedPreset {
  width: number
  height: number
  label: string
}

interface Props {
  unit: 'cm' | 'inch'
  h1: string
  tagline: string
  contentSection: React.ReactNode
  defaultWidth?: number
  defaultHeight?: number
  fixedPreset?: FixedPreset
}

export default function ResizeByUnitTool({
  unit,
  h1,
  tagline,
  contentSection,
  defaultWidth,
  defaultHeight,
  fixedPreset,
}: Props) {
  const unitLabel = unit === 'cm' ? 'cm' : 'in'
  const initW = defaultWidth ?? (unit === 'cm' ? 21 : 8.5)
  const initH = defaultHeight ?? (unit === 'cm' ? 29.7 : 11)

  const [pageState, setPageState] = useState<PageState>('idle')
  const [dpi, setDpi] = useState(150)
  const [widthUnit, setWidthUnit] = useState(initW)
  const [heightUnit, setHeightUnit] = useState(initH)
  const [portrait, setPortrait] = useState(true)
  const [lockAspect, setLockAspect] = useState(true)
  const [pixelAspect, setPixelAspect] = useState<number | null>(null)
  const [result, setResult] = useState<ResizeResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [naturalDims, setNaturalDims] = useState<{ w: number; h: number } | null>(null)
  const imgUrlRef = useRef<string | null>(null)

  const activeWidthUnit = fixedPreset
    ? portrait
      ? fixedPreset.width
      : fixedPreset.height
    : widthUnit
  const activeHeightUnit = fixedPreset
    ? portrait
      ? fixedPreset.height
      : fixedPreset.width
    : heightUnit

  const widthPx = toPx(activeWidthUnit, unit, dpi)
  const heightPx = toPx(activeHeightUnit, unit, dpi)

  const handleFileSelect = useCallback(
    async (file: File) => {
      const f = file as File & { _invalid?: string }
      if (f._invalid === 'format') {
        setErrorMessage('Unsupported format. Use JPG, PNG, WebP, or HEIC.')
        setPageState('error')
        return
      }
      if (f._invalid === 'size') {
        setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
        setPageState('error')
        return
      }
      if (result?.previewUrl) revokeResizePreview(result.previewUrl)
      if (imgUrlRef.current) URL.revokeObjectURL(imgUrlRef.current)
      setResult(null)
      setErrorMessage('')

      const fileToLoad = isHeicFile(file) ? await convertHeicToJpeg(file) : file
      const objUrl = URL.createObjectURL(fileToLoad)
      imgUrlRef.current = objUrl

      const img = new window.Image()
      img.onload = () => {
        setNaturalDims({ w: img.naturalWidth, h: img.naturalHeight })
        setPixelAspect(img.naturalWidth / img.naturalHeight)
        setPreviewUrl(objUrl)
        setOriginalFile(fileToLoad)
        setPageState('ready')
        analytics.imageUploaded(file.type, Math.round(file.size / 1024))
      }
      img.onerror = () => {
        URL.revokeObjectURL(objUrl)
        imgUrlRef.current = null
        setErrorMessage('Failed to load image. Please try another file.')
        setPageState('error')
      }
      img.src = objUrl
    },
    [result]
  )

  const handleWidthChange = useCallback(
    (val: number) => {
      if (isNaN(val) || val <= 0) return
      setWidthUnit(val)
      if (lockAspect && pixelAspect !== null) {
        const wPx = toPx(val, unit, dpi)
        setHeightUnit(toUnit(Math.round(wPx / pixelAspect), unit, dpi))
      }
    },
    [lockAspect, pixelAspect, unit, dpi]
  )

  const handleHeightChange = useCallback(
    (val: number) => {
      if (isNaN(val) || val <= 0) return
      setHeightUnit(val)
      if (lockAspect && pixelAspect !== null) {
        const hPx = toPx(val, unit, dpi)
        setWidthUnit(toUnit(Math.round(hPx * pixelAspect), unit, dpi))
      }
    },
    [lockAspect, pixelAspect, unit, dpi]
  )

  const handleResize = useCallback(async () => {
    if (!originalFile) return
    if (widthPx < 1 || heightPx < 1) {
      setErrorMessage('Width and height must be at least 1px.')
      setPageState('error')
      return
    }
    setPageState('processing')
    await new Promise((r) => setTimeout(r, 0))
    try {
      const resized = await resizeImage(originalFile, { width: widthPx, height: heightPx })
      setResult(resized)
      setPageState('done')
      analytics.imageResized(
        resized.originalWidth,
        resized.originalHeight,
        resized.newWidth,
        resized.newHeight,
        resized.format
      )
    } catch {
      setErrorMessage('Resize failed. Please try again.')
      setPageState('error')
      analytics.resizeError('resize_failed')
    }
  }, [originalFile, widthPx, heightPx])

  const handleTryDifferentSize = useCallback(() => {
    if (result?.previewUrl) revokeResizePreview(result.previewUrl)
    setResult(null)
    setPageState('ready')
  }, [result])

  const handleReset = useCallback(() => {
    if (result?.previewUrl) revokeResizePreview(result.previewUrl)
    if (imgUrlRef.current) {
      URL.revokeObjectURL(imgUrlRef.current)
      imgUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setPreviewUrl(null)
    setNaturalDims(null)
    setPixelAspect(null)
    setWidthUnit(initW)
    setHeightUnit(initH)
    setPortrait(true)
    setLockAspect(true)
    setDpi(150)
    setErrorMessage('')
    setPageState('idle')
  }, [result, initW, initH])

  const uploadBoxState =
    pageState === 'processing' ? 'processing' : pageState === 'error' ? 'error' : 'idle'

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">{h1}</h1>
          <p className="text-text-muted text-sm sm:text-base">{tagline}</p>
        </div>

        <div className="space-y-4">
          {(pageState === 'idle' || pageState === 'error') && (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Loading image..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ Resized in seconds</span>
                  <span>·</span>
                  <span>🔒 Images never leave your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
            </>
          )}

          {pageState === 'ready' && previewUrl && (
            <div className="space-y-4">
              <div className="w-full rounded-2xl border border-border bg-surface overflow-hidden">
                <div
                  className="relative w-full bg-surface flex items-center justify-center"
                  style={{ minHeight: '160px' }}
                >
                  <Image
                    src={previewUrl}
                    alt="Original image preview"
                    width={600}
                    height={400}
                    className="max-h-48 w-auto object-contain"
                    unoptimized
                  />
                </div>
                {naturalDims && (
                  <p className="text-center text-xs text-text-muted py-2">
                    Original: {naturalDims.w}×{naturalDims.h}px
                  </p>
                )}
              </div>

              {/* DPI selector */}
              <div className="rounded-2xl border border-border bg-surface p-4 space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-sm font-medium text-text-main">Resolution (DPI)</span>
                  <div className="flex gap-2">
                    {DPI_PRESETS.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDpi(d)}
                        className={[
                          'px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors duration-150',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
                          dpi === d
                            ? 'bg-primary text-white border-primary'
                            : 'border-border text-text-muted hover:border-primary hover:text-primary',
                        ].join(' ')}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-text-muted">{DPI_LABELS[dpi] ?? `${dpi} DPI`}</p>
              </div>

              {/* Dimension controls */}
              <div className="rounded-2xl border border-border bg-surface p-4 space-y-3">
                {fixedPreset ? (
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-text-main">{fixedPreset.label}</span>
                    <div className="flex gap-2">
                      {[
                        { label: 'Portrait', value: true },
                        { label: 'Landscape', value: false },
                      ].map(({ label, value }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setPortrait(value)}
                          className={[
                            'px-3 py-1.5 rounded-lg text-sm border transition-colors duration-150',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
                            portrait === value
                              ? 'bg-primary text-white border-primary'
                              : 'border-border text-text-muted hover:border-primary hover:text-primary',
                          ].join(' ')}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex-1 space-y-1">
                      <label
                        htmlFor="unit-width"
                        className="text-xs font-medium text-text-muted uppercase tracking-wide"
                      >
                        Width ({unitLabel})
                      </label>
                      <div className="flex items-center gap-1.5 border border-border rounded-lg px-3 bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                        <input
                          id="unit-width"
                          type="number"
                          inputMode="decimal"
                          min={0.1}
                          step={0.1}
                          value={widthUnit}
                          onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
                          className="flex-1 py-2.5 text-sm font-medium text-text-main bg-transparent outline-none min-w-0"
                        />
                        <span className="text-xs text-text-muted flex-shrink-0">{unitLabel}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setLockAspect((v) => !v)}
                      aria-label={lockAspect ? 'Unlock aspect ratio' : 'Lock aspect ratio'}
                      aria-pressed={lockAspect}
                      className={[
                        'flex-shrink-0 mt-5 w-9 h-9 rounded-lg border flex items-center justify-center transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
                        lockAspect
                          ? 'border-primary bg-primary text-white'
                          : 'border-border bg-white text-text-muted hover:border-primary hover:text-primary',
                      ].join(' ')}
                    >
                      <LockIcon locked={lockAspect} />
                    </button>

                    <div className="flex-1 space-y-1">
                      <label
                        htmlFor="unit-height"
                        className="text-xs font-medium text-text-muted uppercase tracking-wide"
                      >
                        Height ({unitLabel})
                      </label>
                      <div className="flex items-center gap-1.5 border border-border rounded-lg px-3 bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                        <input
                          id="unit-height"
                          type="number"
                          inputMode="decimal"
                          min={0.1}
                          step={0.1}
                          value={heightUnit}
                          onChange={(e) => handleHeightChange(parseFloat(e.target.value))}
                          className="flex-1 py-2.5 text-sm font-medium text-text-main bg-transparent outline-none min-w-0"
                        />
                        <span className="text-xs text-text-muted flex-shrink-0">{unitLabel}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Computed pixel output */}
                <div className="flex items-center justify-center gap-2 text-sm text-text-muted bg-background rounded-xl py-2 px-3">
                  <span>Output:</span>
                  <span className="font-semibold text-text-main">
                    {widthPx.toLocaleString()} × {heightPx.toLocaleString()} px
                  </span>
                  <span>at {dpi} DPI</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleResize}
                  className="flex-1 touch-target text-sm font-semibold text-white bg-primary rounded-xl py-3 hover:bg-primary/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Resize Image
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-xl py-3 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {pageState === 'processing' && (
            <ProgressBar visible label="Resizing image" color="bg-primary" />
          )}
        </div>

        {pageState === 'done' && result && originalFile && (
          <ResizeResultCard
            blob={result.blob}
            previewUrl={result.previewUrl}
            originalWidth={result.originalWidth}
            originalHeight={result.originalHeight}
            newWidth={result.newWidth}
            newHeight={result.newHeight}
            originalSize={result.originalSize}
            outputSize={result.outputSize}
            format={result.format}
            originalName={originalFile.name}
            onReset={handleReset}
            onTryDifferentSize={handleTryDifferentSize}
            onDownload={() =>
              analytics.imageResized(
                result.originalWidth,
                result.originalHeight,
                result.newWidth,
                result.newHeight,
                result.format
              )
            }
          />
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        {contentSection}
      </div>
    </main>
  )
}

function LockIcon({ locked }: { locked: boolean }) {
  return locked ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  )
}
