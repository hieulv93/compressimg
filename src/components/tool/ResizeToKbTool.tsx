'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import DownloadButton from '@/components/tool/DownloadButton'
import { resizeImageToKb, revokeKbPreview } from '@/lib/resizeToKb'
import type { ResizeToKbResult } from '@/lib/resizeToKb'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

const PRESETS = [20, 50, 100, 150, 200, 300, 500, 1024]

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB'
  return Math.round(bytes / 1024) + ' KB'
}

function presetLabel(kb: number) {
  return kb >= 1024 ? `${kb / 1024}MB` : `${kb}KB`
}

type PageState = 'idle' | 'processing' | 'done' | 'error'

export default function ResizeToKbTool({ defaultTargetKb }: { defaultTargetKb: number }) {
  const [targetKb, setTargetKb] = useState(defaultTargetKb)
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<ResizeToKbResult | null>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)

  const previewUrlRef = useRef<string | null>(null)
  const originalFileRef = useRef<File | null>(null)
  const pageStateRef = useRef<PageState>('idle')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    pageStateRef.current = pageState
  }, [pageState])

  const doProcess = useCallback(async (file: File, kb: number) => {
    if (previewUrlRef.current) {
      revokeKbPreview(previewUrlRef.current)
      previewUrlRef.current = null
    }
    setResult(null)
    setPageState('processing')
    setErrorMsg('')
    try {
      const r = await resizeImageToKb(file, kb)
      previewUrlRef.current = r.previewUrl
      setResult(r)
      setPageState('done')
      analytics.imageCompressed(
        Math.round(r.originalSize / 1024),
        Math.round(r.outputSize / 1024),
        r.format,
        kb
      )
    } catch {
      setErrorMsg('Processing failed. Please try again.')
      setPageState('error')
      analytics.compressionError('resize_to_kb_failed')
    }
  }, [])

  // Auto-reprocess on target change (debounced, only when result is shown)
  useEffect(() => {
    if (pageStateRef.current !== 'done' || !originalFileRef.current) return
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      if (originalFileRef.current) doProcess(originalFileRef.current, targetKb)
    }, 800)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetKb])

  const handleFileSelect = useCallback(
    async (file: File) => {
      const flagged = file as File & { _invalid?: string }
      if (flagged._invalid === 'format') {
        setErrorMsg('Unsupported format. Use JPG, PNG, or WebP.')
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
      await doProcess(file, targetKb)
    },
    [targetKb, doProcess]
  )

  const handleReset = useCallback(() => {
    if (previewUrlRef.current) {
      revokeKbPreview(previewUrlRef.current)
      previewUrlRef.current = null
    }
    originalFileRef.current = null
    setResult(null)
    setOriginalFile(null)
    setErrorMsg('')
    setPageState('idle')
  }, [])

  const uploadBoxState: 'idle' | 'processing' | 'done' | 'error' =
    pageState === 'done'
      ? 'done'
      : pageState === 'processing'
        ? 'processing'
        : pageState === 'error'
          ? 'error'
          : 'idle'

  return (
    <div className="space-y-4">
      {/* Target size controls */}
      <div className="bg-surface border border-border rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-text-main whitespace-nowrap">
            Target size:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={10240}
              value={targetKb}
              onChange={(e) => setTargetKb(Math.max(1, Number(e.target.value)))}
              className="w-20 border border-border rounded-lg px-2 py-1.5 text-sm bg-surface text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="text-sm font-medium text-text-muted">KB</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {PRESETS.map((kb) => (
            <button
              key={kb}
              onClick={() => setTargetKb(kb)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-150 ${
                targetKb === kb
                  ? 'bg-primary text-white border-primary'
                  : 'border-border text-text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {presetLabel(kb)}
            </button>
          ))}
        </div>
      </div>

      <UploadBox state={uploadBoxState} onFileSelect={handleFileSelect} errorMessage={errorMsg} />

      {pageState === 'idle' && (
        <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
          <span>⚡ Resized in seconds</span>
          <span>·</span>
          <span>🔒 Files never leave your device</span>
          <span>·</span>
          <span>✓ Free, no sign-up</span>
        </div>
      )}

      <ProgressBar visible={pageState === 'processing'} label="Resizing to target size" />

      {pageState === 'done' && result && originalFile && (
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-text-muted mb-0.5">Original</p>
                <p className="text-xl font-bold text-text-main">
                  {formatSize(result.originalSize)}
                </p>
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
                <p
                  className={`text-xl font-bold ${result.achieved ? 'text-green-600' : 'text-amber-600'}`}
                >
                  {formatSize(result.outputSize)}
                </p>
              </div>
            </div>

            {result.achieved ? (
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
                Under {presetLabel(targetKb)} target — ready to upload ✓
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Could not reach {presetLabel(targetKb)} — image reduced as much as possible
              </div>
            )}

            <div className="flex gap-3">
              <DownloadButton
                blob={result.blob}
                filename={originalFile.name.replace(/\.[^.]+$/, '') + `-${targetKb}kb.jpg`}
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
