'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import ResultCard from '@/components/tool/ResultCard'
import AdSlot from '@/components/ads/AdSlot'
import { revokePreview } from '@/lib/compress'
import {
  compressToTarget,
  compressToTargetWithDownscale,
  QualityExhaustedError,
  DOWNSCALE_DIM,
} from '@/lib/compress-target'
import type { TargetCompressResult } from '@/lib/compress-target'
import { MAX_FILE_SIZE_MB, formatBytes } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'compressing' | 'awaiting_consent' | 'done' | 'error'

// CR-03: Watchdog — abandon and surface error after 30 s
const TIMEOUT_MS = 30_000

interface CompressToTargetToolProps {
  targetKb: number
}

export default function CompressToTargetTool({ targetKb }: CompressToTargetToolProps) {
  const targetBytes = targetKb * 1024

  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<TargetCompressResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [isTimeoutError, setIsTimeoutError] = useState(false)
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [originalPreviewUrl, setOriginalPreviewUrl] = useState<string | null>(null)
  const [iteration, setIteration] = useState(0)
  const [consentData, setConsentData] = useState<{
    iterations: number
    fallback: { blob: Blob; size: number; format: string }
  } | null>(null)

  const origUrlRef = useRef<string | null>(null)
  const runIdRef = useRef(0)
  // CR-03
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // CR-04
  const startMsRef = useRef(0)
  // CR-06
  const consentRef = useRef<HTMLDivElement>(null)
  const uploadAreaRef = useRef<HTMLDivElement>(null)

  // CR-06: Focus the consent dialog the moment it becomes visible
  useEffect(() => {
    if (pageState === 'awaiting_consent') {
      consentRef.current?.focus()
    }
  }, [pageState])

  const clearWatchdog = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  // CR-03: Arm a 30 s watchdog for one compression operation.
  // Uses a captured runId so a stale watchdog that fires after reset is a no-op.
  const armWatchdog = useCallback(
    (file: File) => {
      clearWatchdog()
      const watchRunId = runIdRef.current
      timeoutRef.current = setTimeout(() => {
        if (runIdRef.current !== watchRunId) return
        ++runIdRef.current
        setIsTimeoutError(true)
        setErrorMessage('Compression timed out. Please try again.')
        setPageState('error')
        analytics.targetCompressionFailed('timeout', file.size / 1024)
      }, TIMEOUT_MS)
    },
    [clearWatchdog]
  )

  const cleanupPrev = useCallback(() => {
    if (result?.previewUrl) revokePreview(result.previewUrl)
    if (origUrlRef.current) {
      URL.revokeObjectURL(origUrlRef.current)
      origUrlRef.current = null
    }
  }, [result])

  const handleConsentNo = useCallback(() => {
    if (!originalFile || !consentData) return
    const { fallback, iterations } = consentData
    const previewUrl = URL.createObjectURL(fallback.blob)
    const unreachableResult: TargetCompressResult = {
      blob: fallback.blob,
      originalSize: originalFile.size,
      compressedSize: fallback.size,
      format: fallback.format,
      previewUrl,
      iterations,
      downscaled: false,
      finalWidth: null,
      status: 'unreachable',
    }
    setResult(unreachableResult)
    setConsentData(null)
    setPageState('done')
    // CR-06: return focus to upload area after dialog is dismissed
    uploadAreaRef.current?.focus()
    analytics.targetUnreachable(targetKb, fallback.size / 1024, false)
  }, [originalFile, consentData, targetKb])

  // CR-06: Esc key dismisses the consent dialog
  useEffect(() => {
    if (pageState !== 'awaiting_consent') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleConsentNo()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pageState, handleConsentNo])

  const handleFileSelect = useCallback(
    async (file: File) => {
      const fileWithFlag = file as File & { _invalid?: string }
      if (fileWithFlag._invalid === 'format') {
        setErrorMessage('Unsupported format. Use JPG, PNG, or WebP.')
        setIsTimeoutError(false)
        setPageState('error')
        return
      }
      if (fileWithFlag._invalid === 'size') {
        setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
        setIsTimeoutError(false)
        setPageState('error')
        return
      }

      cleanupPrev()
      const myRunId = ++runIdRef.current
      const isAborted = () => runIdRef.current !== myRunId

      setOriginalFile(file)
      setResult(null)
      setConsentData(null)
      setIteration(0)
      setIsTimeoutError(false)
      setPageState('compressing')
      setErrorMessage('')

      const origUrl = URL.createObjectURL(file)
      origUrlRef.current = origUrl
      setOriginalPreviewUrl(origUrl)

      // CR-04: record wall-clock start
      startMsRef.current = Date.now()
      // CR-03: arm watchdog for initial quality search
      armWatchdog(file)

      analytics.imageUploaded(file.type, Math.round(file.size / 1024), 'target')
      analytics.targetModeUsed(
        `compress-image-to-${targetKb < 1024 ? targetKb + 'kb' : targetKb / 1024 + 'mb'}`,
        targetKb
      )

      try {
        const compressed = await compressToTarget(file, targetBytes, isAborted, (iter, size) => {
          if (isAborted()) return
          setIteration(iter)
          void size
        })

        clearWatchdog()
        if (isAborted()) return

        // CR-04: compute total elapsed duration
        const durationMs = Date.now() - startMsRef.current
        setResult(compressed)
        setPageState('done')
        analytics.targetCompressionCompleted(
          file.size / 1024,
          compressed.compressedSize / 1024,
          targetKb,
          compressed.iterations,
          false,
          compressed.status,
          durationMs
        )
        if (compressed.status === 'unreachable') {
          analytics.targetUnreachable(targetKb, compressed.compressedSize / 1024, false)
        }
      } catch (e) {
        clearWatchdog()
        if (isAborted()) return

        if (e instanceof QualityExhaustedError) {
          setConsentData({ iterations: e.iterations, fallback: e.bestFallback })
          setPageState('awaiting_consent')
          return
        }

        if (e instanceof DOMException && e.name === 'AbortError') return

        setIsTimeoutError(false)
        setErrorMessage('Compression failed. Please try again.')
        setPageState('error')
        analytics.targetCompressionFailed(
          e instanceof Error ? e.message : 'unknown',
          file.size / 1024
        )
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [targetBytes, targetKb, cleanupPrev, clearWatchdog, armWatchdog]
  )

  const handleConsentYes = useCallback(async () => {
    if (!originalFile || !consentData) return

    const myRunId = ++runIdRef.current
    const isAborted = () => runIdRef.current !== myRunId
    const base = consentData.iterations

    setPageState('compressing')
    setIteration(base)
    // CR-03: re-arm watchdog for downscale pass
    armWatchdog(originalFile)

    try {
      const compressed = await compressToTargetWithDownscale(
        originalFile,
        targetBytes,
        DOWNSCALE_DIM,
        isAborted,
        (iter) => {
          if (!isAborted()) setIteration(iter)
        },
        base
      )

      clearWatchdog()
      if (isAborted()) return

      // CR-04: total duration includes initial search + consent wait + downscale
      const durationMs = Date.now() - startMsRef.current
      setResult(compressed)
      setConsentData(null)
      setPageState('done')
      // CR-06: return focus after consent resolved
      uploadAreaRef.current?.focus()
      analytics.targetCompressionCompleted(
        originalFile.size / 1024,
        compressed.compressedSize / 1024,
        targetKb,
        compressed.iterations,
        true,
        compressed.status,
        durationMs
      )
      if (compressed.status === 'unreachable') {
        analytics.targetUnreachable(targetKb, compressed.compressedSize / 1024, true)
      }
    } catch (e) {
      clearWatchdog()
      if (isAborted()) return
      setIsTimeoutError(false)
      setErrorMessage('Compression failed. Please try again.')
      setPageState('error')
      analytics.targetCompressionFailed(
        e instanceof Error ? e.message : 'unknown',
        originalFile.size / 1024
      )
    }
  }, [originalFile, consentData, targetBytes, targetKb, clearWatchdog, armWatchdog])

  const handleReset = useCallback(() => {
    clearWatchdog()
    ++runIdRef.current
    if (result?.previewUrl) revokePreview(result.previewUrl)
    if (origUrlRef.current) {
      URL.revokeObjectURL(origUrlRef.current)
      origUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setOriginalPreviewUrl(null)
    setErrorMessage('')
    setIsTimeoutError(false)
    setConsentData(null)
    setIteration(0)
    setPageState('idle')
    setTimeout(() => uploadAreaRef.current?.focus(), 0)
  }, [result, clearWatchdog])

  const uploadBoxState =
    pageState === 'done'
      ? 'done'
      : pageState === 'compressing' || pageState === 'awaiting_consent'
        ? 'processing'
        : pageState === 'error'
          ? 'error'
          : 'idle'

  const isCompressing = pageState === 'compressing'

  return (
    // CR-06: aria-busy signals screen readers that content is updating
    <div
      role="region"
      aria-label="Image compression tool"
      aria-busy={isCompressing}
      className="space-y-4"
    >
      {/* CR-06: tabIndex={-1} allows programmatic focus return after consent resolution */}
      <div ref={uploadAreaRef} tabIndex={-1} className="outline-none">
        <UploadBox
          state={uploadBoxState}
          onFileSelect={handleFileSelect}
          errorMessage={errorMessage}
        />
      </div>

      {pageState === 'idle' && (
        <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
          <span>⚡ One-click targeting</span>
          <span>·</span>
          <span>🔒 Images never leave your device</span>
          <span>·</span>
          <span>✓ Free, no sign-up</span>
        </div>
      )}

      {isCompressing && (
        <div className="space-y-1.5">
          <ProgressBar visible label="Finding optimal compression…" />
          {iteration > 0 && (
            <p className="text-xs text-text-muted text-center" aria-live="polite">
              Optimizing quality — iteration {Math.min(iteration, 7)} of 7
            </p>
          )}
        </div>
      )}

      {/* CR-03: Timeout-specific notice with Resize Tool link */}
      {isTimeoutError && pageState === 'error' && (
        <p className="text-xs text-center text-text-muted">
          Taking too long?{' '}
          <Link href="/image-resizer" className="text-primary underline">
            Resize your image first
          </Link>{' '}
          to reduce its file size before compressing to target.
        </p>
      )}

      {/* CR-06: role="alertdialog" with labelledby/describedby; tabIndex={-1} for programmatic focus */}
      {pageState === 'awaiting_consent' && (
        <div
          ref={consentRef}
          role="alertdialog"
          aria-labelledby="consent-title"
          aria-describedby="consent-desc"
          tabIndex={-1}
          className="rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-700 p-4 space-y-3 outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <p id="consent-title" className="text-sm font-semibold text-text-main">
            Couldn&apos;t reach {formatBytes(targetBytes)} with quality reduction alone
          </p>
          <p id="consent-desc" className="text-xs text-text-muted leading-relaxed">
            Reducing quality to the minimum ({formatBytes(consentData?.fallback.size ?? 0)}) is
            still over target. Auto-downscale to {DOWNSCALE_DIM}px width to reach {targetKb}
            {targetKb >= 1024 ? 'MB' : 'KB'}? Press Esc to decline.
          </p>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleConsentYes}
              className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
            >
              Yes, downscale
            </button>
            <button
              onClick={handleConsentNo}
              className="px-4 py-2 rounded-lg border border-border text-xs font-medium text-text-main hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
            >
              No, use best result ({formatBytes(consentData?.fallback.size ?? 0)})
            </button>
          </div>
        </div>
      )}

      {pageState === 'done' && result && originalFile && (
        <>
          {result.status === 'unreachable' && (
            <div
              role="status"
              className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 px-3 py-2 text-xs text-text-muted"
            >
              Target of {formatBytes(targetBytes)} couldn&apos;t be reached. Best achievable:{' '}
              {formatBytes(result.compressedSize)}
              {result.downscaled
                ? ` (image resized to ${result.finalWidth}px)`
                : ' (quality floor reached)'}
              .
            </div>
          )}
          <ResultCard
            blob={result.blob}
            previewUrl={result.previewUrl}
            originalPreviewUrl={originalPreviewUrl ?? undefined}
            originalSize={result.originalSize}
            compressedSize={result.compressedSize}
            format={result.format}
            originalName={originalFile.name}
            onReset={handleReset}
            onDownload={() => analytics.imageDownloaded(Math.round(result.compressedSize / 1024))}
          />
        </>
      )}

      <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />
    </div>
  )
}
