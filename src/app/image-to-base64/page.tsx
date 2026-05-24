'use client'

import { useState, useCallback, useRef } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import AdSlot from '@/components/ads/AdSlot'
import ImageToBase64ContentSection from '@/components/tool/ImageToBase64ContentSection'
import { MAX_FILE_SIZE_MB, formatBytes } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

export default function ImageToBase64Page() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [base64, setBase64] = useState('')
  const [originalSize, setOriginalSize] = useState(0)
  const [filename, setFilename] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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

    setPageState('processing')
    setErrorMessage('')
    analytics.imageUploaded(file.type, Math.round(file.size / 1024))

    const prepared = isHeicFile(file) ? await convertHeicToJpeg(file) : file
    setFilename(prepared.name)
    setOriginalSize(prepared.size)

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setBase64(result)
      setPageState('done')
      analytics.imageToBase64(prepared.size / 1024, result.length)
    }
    reader.onerror = () => {
      setErrorMessage('Failed to read file. Please try again.')
      setPageState('error')
    }
    reader.readAsDataURL(prepared)
  }, [])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(base64)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      textareaRef.current?.select()
    }
  }, [base64])

  const handleDownload = useCallback(() => {
    const blob = new Blob([base64], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `base64-${filename.replace(/\.[^.]+$/, '')}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }, [base64, filename])

  const handleReset = useCallback(() => {
    setBase64('')
    setOriginalSize(0)
    setFilename('')
    setErrorMessage('')
    setPageState('idle')
    setCopied(false)
  }, [])

  const uploadBoxState =
    pageState === 'processing' ? 'processing' : pageState === 'error' ? 'error' : 'idle'

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Image to Base64 Converter — Free Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Convert any image to a Base64 data URL string instantly — ready to embed in HTML, CSS,
            or JSON. 100% browser-based, your image never leaves your device.
          </p>
        </div>

        <div className="space-y-4">
          {pageState !== 'done' && (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Encoding to Base64..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ Encoded instantly</span>
                  <span>·</span>
                  <span>🔒 Never leaves your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
              <ProgressBar visible={pageState === 'processing'} quality={92} />
            </>
          )}

          {pageState === 'done' && base64 && (
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
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
                    Base64 encoded — ready to copy or embed
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="space-y-1">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      Original
                    </p>
                    <p className="text-sm font-semibold text-text-main">
                      {formatBytes(originalSize)}
                    </p>
                    <p className="text-xs text-text-muted">image file</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      Encoded
                    </p>
                    <p className="text-sm font-semibold text-blue-600">
                      {formatBytes(base64.length)}
                    </p>
                    <p className="text-xs text-text-muted">Base64 string</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      Characters
                    </p>
                    <p className="text-sm font-semibold text-text-main">
                      {base64.length.toLocaleString()}
                    </p>
                    <p className="text-xs text-text-muted">total chars</p>
                  </div>
                </div>

                {/* Base64 output */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-text-main">Base64 data URL</p>
                  <textarea
                    ref={textareaRef}
                    readOnly
                    value={base64}
                    rows={5}
                    className="w-full text-xs font-mono bg-surface border border-border rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary text-text-muted cursor-text"
                    onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  />
                  <p className="text-xs text-text-muted">
                    Click the box to select all · use with{' '}
                    <code className="bg-surface px-1 py-0.5 rounded text-[11px]">
                      {'<img src="...">'}
                    </code>{' '}
                    or CSS{' '}
                    <code className="bg-surface px-1 py-0.5 rounded text-[11px]">
                      background-image: url(...)
                    </code>
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex-1 touch-target py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {copied ? '✓ Copied!' : 'Copy to Clipboard'}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex-1 touch-target py-2.5 rounded-xl border border-border bg-surface text-sm font-semibold text-text-main hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Download .txt
                  </button>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Convert another image
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <ImageToBase64ContentSection />
      </div>
    </main>
  )
}
