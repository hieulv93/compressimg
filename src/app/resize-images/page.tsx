'use client'

import { useState, useCallback, useRef } from 'react'
import DownloadButton from '@/components/tool/DownloadButton'
import ProgressBar from '@/components/tool/ProgressBar'
import AdSlot from '@/components/ads/AdSlot'
import BatchResizeContentSection from '@/components/tool/BatchResizeContentSection'
import { resizeImage, revokeResizePreview } from '@/lib/resize'
import type { ResizeResult } from '@/lib/resize'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

const MAX_FILES = 10

type ResizeMode = 'maxWidth' | 'percentage' | 'exact'

interface FileEntry {
  id: string
  file: File
  state: 'pending' | 'processing' | 'done' | 'error'
  result?: ResizeResult
  error?: string
}

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB'
  return (bytes / 1024).toFixed(0) + ' KB'
}

async function getImageDimensions(file: File): Promise<{ w: number; h: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve({ w: img.naturalWidth, h: img.naturalHeight })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load'))
    }
    img.src = url
  })
}

const MAX_WIDTH_PRESETS = [800, 1080, 1280, 1920, 2048]
const PERCENTAGE_PRESETS = [25, 50, 75]
const EXACT_PRESETS = [
  { label: 'Instagram', w: 1080, h: 1080 },
  { label: 'Full HD', w: 1920, h: 1080 },
  { label: 'HD', w: 1280, h: 720 },
  { label: 'Thumbnail', w: 300, h: 300 },
]

export default function BatchResizePage() {
  const [mode, setMode] = useState<ResizeMode>('maxWidth')
  const [maxWidth, setMaxWidth] = useState(1920)
  const [percentage, setPercentage] = useState(50)
  const [exactW, setExactW] = useState(1080)
  const [exactH, setExactH] = useState(1080)
  const [entries, setEntries] = useState<FileEntry[]>([])
  const [allDone, setAllDone] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const processFiles = useCallback(
    async (files: File[]) => {
      const valid = files
        .slice(0, MAX_FILES)
        .filter((f) => f.size <= MAX_FILE_SIZE_MB * 1024 * 1024)
      if (!valid.length) return

      const newEntries: FileEntry[] = valid.map((file) => ({
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        file,
        state: 'pending',
      }))

      setEntries(newEntries)
      setAllDone(false)

      const updated = [...newEntries]
      for (let i = 0; i < updated.length; i++) {
        updated[i] = { ...updated[i], state: 'processing' }
        setEntries([...updated])

        try {
          const fileToProcess = isHeicFile(updated[i].file)
            ? await convertHeicToJpeg(updated[i].file)
            : updated[i].file

          const dims = await getImageDimensions(fileToProcess)

          let targetW: number
          let targetH: number

          if (mode === 'maxWidth') {
            if (dims.w <= maxWidth) {
              targetW = dims.w
              targetH = dims.h
            } else {
              targetW = maxWidth
              targetH = Math.round((maxWidth / dims.w) * dims.h)
            }
          } else if (mode === 'percentage') {
            targetW = Math.max(1, Math.round((dims.w * percentage) / 100))
            targetH = Math.max(1, Math.round((dims.h * percentage) / 100))
          } else {
            targetW = exactW
            targetH = exactH
          }

          analytics.imageUploaded(updated[i].file.type, Math.round(updated[i].file.size / 1024))
          const result = await resizeImage(fileToProcess, { width: targetW, height: targetH })
          updated[i] = { ...updated[i], state: 'done', result }
          analytics.imageResized(
            result.originalWidth,
            result.originalHeight,
            result.newWidth,
            result.newHeight,
            result.format
          )
        } catch {
          updated[i] = { ...updated[i], state: 'error', error: 'Resize failed' }
        }
        setEntries([...updated])
      }
      setAllDone(true)
    },
    [mode, maxWidth, percentage, exactW, exactH]
  )

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files ?? [])
      if (files.length) processFiles(files)
      e.target.value = ''
    },
    [processFiles]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const files = Array.from(e.dataTransfer.files)
      if (files.length) processFiles(files)
    },
    [processFiles]
  )

  const handleReset = useCallback(() => {
    entries.forEach((e) => {
      if (e.result?.previewUrl) revokeResizePreview(e.result.previewUrl)
    })
    setEntries([])
    setAllDone(false)
  }, [entries])

  const handleDownloadAll = useCallback(async () => {
    const doneEntries = entries.filter((e) => e.state === 'done' && e.result)
    if (!doneEntries.length) return

    const { default: JSZip } = await import('jszip')
    const zip = new JSZip()

    doneEntries.forEach((entry) => {
      const ext = entry.result!.format || 'jpg'
      const name = entry.file.name.replace(/\.[^.]+$/, '') + '-resized.' + ext
      zip.file(name, entry.result!.blob)
    })

    const blob = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resized-images.zip'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }, [entries])

  const doneCount = entries.filter((e) => e.state === 'done').length

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text-main mb-2">Batch Resize Images Online Free</h1>
        <p className="text-text-muted">
          Resize up to {MAX_FILES} images at once — download all as ZIP. 100% browser-based,
          private.
        </p>
      </div>

      {/* Settings panel — shown before upload */}
      {!entries.length && (
        <div className="bg-surface border border-border rounded-xl p-4 space-y-4">
          <div>
            <p className="text-sm font-medium text-text-main mb-2">Resize mode</p>
            <div className="flex gap-2">
              {(['maxWidth', 'percentage', 'exact'] as ResizeMode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`flex-1 text-xs sm:text-sm py-2 px-3 rounded-lg border transition-colors duration-150 ${
                    mode === m
                      ? 'bg-primary text-white border-primary'
                      : 'bg-surface text-text-muted border-border hover:border-primary'
                  }`}
                >
                  {m === 'maxWidth'
                    ? 'Max Width'
                    : m === 'percentage'
                      ? 'Percentage'
                      : 'Exact Size'}
                </button>
              ))}
            </div>
          </div>

          {mode === 'maxWidth' && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-main">
                Max width: {maxWidth}px
              </label>
              <input
                type="number"
                min={1}
                max={8000}
                value={maxWidth}
                onChange={(e) => setMaxWidth(Math.max(1, Number(e.target.value)))}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-surface text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex gap-2 flex-wrap">
                {MAX_WIDTH_PRESETS.map((w) => (
                  <button
                    key={w}
                    onClick={() => setMaxWidth(w)}
                    className="text-xs px-3 py-1 rounded-full border border-border text-text-muted hover:border-primary hover:text-primary transition-colors"
                  >
                    {w}px
                  </button>
                ))}
              </div>
              <p className="text-xs text-text-muted">
                Images wider than this will be scaled down. Narrower images are kept as-is.
              </p>
            </div>
          )}

          {mode === 'percentage' && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-main">
                Scale to {percentage}% of original size
              </label>
              <input
                type="range"
                min={5}
                max={100}
                step={5}
                value={percentage}
                onChange={(e) => setPercentage(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-text-muted">
                <span>5% (very small)</span>
                <span>100% (original)</span>
              </div>
              <div className="flex gap-2">
                {PERCENTAGE_PRESETS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPercentage(p)}
                    className="text-xs px-3 py-1 rounded-full border border-border text-text-muted hover:border-primary hover:text-primary transition-colors"
                  >
                    {p}%
                  </button>
                ))}
              </div>
            </div>
          )}

          {mode === 'exact' && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-main">Target dimensions</p>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="block text-xs text-text-muted mb-1">Width (px)</label>
                  <input
                    type="number"
                    min={1}
                    max={8000}
                    value={exactW}
                    onChange={(e) => setExactW(Math.max(1, Number(e.target.value)))}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-surface text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <span className="text-text-muted mt-4">×</span>
                <div className="flex-1">
                  <label className="block text-xs text-text-muted mb-1">Height (px)</label>
                  <input
                    type="number"
                    min={1}
                    max={8000}
                    value={exactH}
                    onChange={(e) => setExactH(Math.max(1, Number(e.target.value)))}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-surface text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {EXACT_PRESETS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => {
                      setExactW(p.w)
                      setExactH(p.h)
                    }}
                    className="text-xs px-3 py-1 rounded-full border border-border text-text-muted hover:border-primary hover:text-primary transition-colors"
                  >
                    {p.label} ({p.w}×{p.h})
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Upload zone */}
      {!entries.length && (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-12 cursor-pointer transition-colors duration-150 ${
            isDragging
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary bg-surface'
          }`}
        >
          <svg
            className="w-12 h-12 text-text-muted mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <p className="text-text-main font-medium mb-1">Drop images here or click to upload</p>
          <p className="text-text-muted text-sm">
            Up to {MAX_FILES} files · JPG, PNG, WebP, HEIC · Max {MAX_FILE_SIZE_MB}MB each
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,.heic,.heif"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}

      {/* Results list */}
      {entries.length > 0 && (
        <div className="space-y-3">
          {entries.map((entry) => {
            const sizeDiff = entry.result ? entry.result.outputSize - entry.result.originalSize : 0
            return (
              <div
                key={entry.id}
                className="border border-border rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-lg bg-surface border border-border overflow-hidden flex-shrink-0">
                  {entry.result?.previewUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={entry.result.previewUrl}
                      alt={entry.file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-text-muted"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-main truncate">{entry.file.name}</p>
                  {entry.state === 'pending' && <p className="text-xs text-text-muted">Waiting…</p>}
                  {entry.state === 'processing' && (
                    <ProgressBar visible={true} label="Resizing image" />
                  )}
                  {entry.state === 'error' && <p className="text-xs text-red-500">{entry.error}</p>}
                  {entry.state === 'done' && entry.result && (
                    <p className="text-xs text-text-muted">
                      {entry.result.originalWidth}×{entry.result.originalHeight} →{' '}
                      {entry.result.newWidth}×{entry.result.newHeight}
                      <span className="ml-2">{formatSize(entry.result.outputSize)}</span>
                      {sizeDiff < 0 && (
                        <span className="text-green-600 font-medium ml-1">
                          −{formatSize(-sizeDiff)}
                        </span>
                      )}
                    </p>
                  )}
                </div>

                {entry.state === 'done' && entry.result && (
                  <DownloadButton
                    blob={entry.result.blob}
                    filename={
                      entry.file.name.replace(/\.[^.]+$/, '') +
                      '-resized.' +
                      (entry.result.format || 'jpg')
                    }
                    sizeKb={Math.round(entry.result.outputSize / 1024)}
                    compact
                  />
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Batch actions */}
      {allDone && doneCount > 0 && (
        <div className="border border-border rounded-xl p-5 bg-surface flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-text-main">
            {doneCount} image{doneCount > 1 ? 's' : ''} resized
          </p>
          <div className="flex gap-3">
            {doneCount > 1 && (
              <button
                onClick={handleDownloadAll}
                className="flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors duration-150 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download All as ZIP
              </button>
            )}
            <button
              onClick={handleReset}
              className="px-4 py-2.5 border border-border rounded-lg text-sm text-text-muted hover:text-text-main hover:border-primary transition-colors duration-150"
            >
              Resize more
            </button>
          </div>
        </div>
      )}

      {allDone && <AdSlot compressionDone={true} slot="placeholder-slot-id" format="rectangle" />}

      <BatchResizeContentSection />
    </main>
  )
}
