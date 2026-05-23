'use client'

import { useState, useCallback, useRef } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import DownloadButton from '@/components/tool/DownloadButton'
import { resizeImage, revokeResizePreview } from '@/lib/resize'
import type { ResizeResult } from '@/lib/resize'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

export interface ResizePreset {
  label: string
  w: number
  h: number
  ratio?: string
  desc?: string
}

type PageState = 'idle' | 'processing' | 'done' | 'error'

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB'
  return Math.round(bytes / 1024) + ' KB'
}

export default function PlatformResizeTool({
  presets,
  defaultPreset,
}: {
  presets: ResizePreset[]
  defaultPreset: ResizePreset
}) {
  const [selectedPreset, setSelectedPreset] = useState<ResizePreset>(defaultPreset)
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<ResizeResult | null>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)

  const previewUrlRef = useRef<string | null>(null)
  const originalFileRef = useRef<File | null>(null)

  const doProcess = useCallback(async (file: File, preset: ResizePreset) => {
    if (previewUrlRef.current) {
      revokeResizePreview(previewUrlRef.current)
      previewUrlRef.current = null
    }
    setResult(null)
    setPageState('processing')
    setErrorMsg('')
    try {
      const fileToProcess = isHeicFile(file) ? await convertHeicToJpeg(file) : file
      const r = await resizeImage(fileToProcess, { width: preset.w, height: preset.h })
      previewUrlRef.current = r.previewUrl
      setResult(r)
      setPageState('done')
      analytics.imageResized(r.originalWidth, r.originalHeight, r.newWidth, r.newHeight, r.format)
    } catch {
      setErrorMsg('Resize failed. Please try again.')
      setPageState('error')
      analytics.resizeError('platform_resize_failed')
    }
  }, [])

  const handleFileSelect = useCallback(
    async (file: File) => {
      const flagged = file as File & { _invalid?: string }
      if (flagged._invalid === 'format') {
        setErrorMsg('Unsupported format. Use JPG, PNG, WebP, or HEIC.')
        setPageState('error')
        return
      }
      if (flagged._invalid === 'size') {
        setErrorMsg(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
        setPageState('error')
        return
      }
      originalFileRef.current = file
      setOriginalFile(file)
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))
      await doProcess(file, selectedPreset)
    },
    [selectedPreset, doProcess]
  )

  const handlePresetChange = useCallback(
    (preset: ResizePreset) => {
      setSelectedPreset(preset)
      if (originalFileRef.current) {
        doProcess(originalFileRef.current, preset)
      }
    },
    [doProcess]
  )

  const handleReset = useCallback(() => {
    if (previewUrlRef.current) {
      revokeResizePreview(previewUrlRef.current)
      previewUrlRef.current = null
    }
    originalFileRef.current = null
    setResult(null)
    setOriginalFile(null)
    setErrorMsg('')
    setPageState('idle')
  }, [])

  const uploadBoxState =
    pageState === 'done'
      ? 'done'
      : pageState === 'processing'
        ? 'processing'
        : pageState === 'error'
          ? 'error'
          : 'idle'

  return (
    <div className="space-y-4">
      {/* Preset selection */}
      <div className="bg-surface border border-border rounded-xl p-4 space-y-3">
        <label className="text-sm font-medium text-text-main">Select format:</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => handlePresetChange(p)}
              className={`text-xs px-3 py-2.5 rounded-xl border transition-colors duration-150 text-left ${
                selectedPreset.label === p.label
                  ? 'bg-primary text-white border-primary'
                  : 'border-border text-text-muted hover:border-primary hover:text-primary'
              }`}
            >
              <span className="font-semibold block">{p.label}</span>
              <span className="opacity-80 block">
                {p.w}×{p.h}
              </span>
              {p.ratio && <span className="opacity-60 block">{p.ratio}</span>}
            </button>
          ))}
        </div>
      </div>

      <UploadBox state={uploadBoxState} onFileSelect={handleFileSelect} errorMessage={errorMsg} />

      {pageState === 'idle' && (
        <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
          <span>⚡ Resized instantly</span>
          <span>·</span>
          <span>🔒 Files never leave your device</span>
          <span>·</span>
          <span>✓ Free, no sign-up</span>
        </div>
      )}

      <ProgressBar visible={pageState === 'processing'} label="Resizing image" />

      {pageState === 'done' && result && originalFile && (
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-text-muted mb-0.5">Original</p>
                <p className="text-lg font-bold text-text-main">
                  {result.originalWidth}×{result.originalHeight}px
                </p>
                <p className="text-xs text-text-muted">{formatSize(result.originalSize)}</p>
              </div>
              <svg
                className="w-5 h-5 text-text-muted flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="text-right">
                <p className="text-xs text-text-muted mb-0.5">Output</p>
                <p className="text-lg font-bold text-green-600">
                  {result.newWidth}×{result.newHeight}px
                </p>
                <p className="text-xs text-text-muted">{formatSize(result.outputSize)}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Resized to {selectedPreset.label} — {result.newWidth}×{result.newHeight}px ✓
            </div>

            <div className="flex gap-3">
              <DownloadButton
                blob={result.blob}
                filename={
                  originalFile.name.replace(/\.[^.]+$/, '') +
                  `-${result.newWidth}x${result.newHeight}.${result.format}`
                }
                sizeKb={Math.round(result.outputSize / 1024)}
                onDownload={() => analytics.imageDownloaded(Math.round(result.outputSize / 1024))}
              />
              <button
                onClick={handleReset}
                className="px-4 py-3 border border-border rounded-xl text-sm text-text-muted hover:text-text-main hover:border-primary transition-colors duration-150"
              >
                New image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
