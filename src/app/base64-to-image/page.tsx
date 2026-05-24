'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import AdSlot from '@/components/ads/AdSlot'
import Base64ToImageContentSection from '@/components/tool/Base64ToImageContentSection'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'done' | 'error'

function normalizeBase64(input: string): string {
  const trimmed = input.trim()
  if (trimmed.startsWith('data:image/')) return trimmed
  // Raw base64 — assume JPEG
  return `data:image/jpeg;base64,${trimmed}`
}

export default function Base64ToImagePage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [inputValue, setInputValue] = useState('')
  const [previewSrc, setPreviewSrc] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [imgDimensions, setImgDimensions] = useState({ w: 0, h: 0 })
  const imgRef = useRef<HTMLImageElement | null>(null)

  const handleDecode = useCallback(() => {
    if (!inputValue.trim()) {
      setErrorMessage('Paste a Base64 string first.')
      setPageState('error')
      return
    }

    const src = normalizeBase64(inputValue)
    const img = document.createElement('img')
    img.onload = () => {
      setImgDimensions({ w: img.naturalWidth, h: img.naturalHeight })
      setPreviewSrc(src)
      setPageState('done')
      analytics.base64ToImage(Math.round((src.length * 0.75) / 1024))
      imgRef.current = img
    }
    img.onerror = () => {
      setErrorMessage('Invalid Base64 string. Check that it is a complete, valid image data URL.')
      setPageState('error')
    }
    img.src = src
  }, [inputValue])

  const handleDownload = useCallback(() => {
    const canvas = document.createElement('canvas')
    const img = imgRef.current
    if (!img) return
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(img, 0, 0)
    canvas.toBlob(
      (blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'decoded-image.jpg'
        a.click()
        URL.revokeObjectURL(url)
      },
      'image/jpeg',
      0.92
    )
  }, [])

  const handleReset = useCallback(() => {
    setInputValue('')
    setPreviewSrc('')
    setErrorMessage('')
    setPageState('idle')
    setImgDimensions({ w: 0, h: 0 })
    imgRef.current = null
  }, [])

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Base64 to Image Converter — Free Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Paste a Base64 data URL or raw Base64 string and decode it back to an image instantly.
            Preview and download — 100% browser-based.
          </p>
        </div>

        <div className="space-y-4">
          {pageState !== 'done' && (
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              <div className="p-4 sm:p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-text-main" htmlFor="base64-input">
                    Paste Base64 string
                  </label>
                  <textarea
                    id="base64-input"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value)
                      if (pageState === 'error') {
                        setErrorMessage('')
                        setPageState('idle')
                      }
                    }}
                    rows={6}
                    placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgAB... or raw Base64 string"
                    className="w-full text-xs font-mono bg-surface border border-border rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary text-text-muted placeholder:text-text-muted/50"
                  />
                  {pageState === 'error' && errorMessage && (
                    <p className="text-xs text-red-500">{errorMessage}</p>
                  )}
                </div>

                <button
                  onClick={handleDecode}
                  disabled={!inputValue.trim()}
                  className="w-full touch-target py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Decode Image
                </button>

                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ Decoded instantly</span>
                  <span>·</span>
                  <span>🔒 Never leaves your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              </div>
            </div>
          )}

          {pageState === 'done' && previewSrc && (
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              {/* Preview */}
              <div
                className="relative w-full bg-surface flex items-center justify-center"
                style={{ minHeight: '240px' }}
              >
                <Image
                  src={previewSrc}
                  alt="Decoded image"
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
                  <p className="text-xs font-semibold text-green-700">Image decoded successfully</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="space-y-1">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      Dimensions
                    </p>
                    <p className="text-sm font-semibold text-text-main">
                      {imgDimensions.w}×{imgDimensions.h}
                    </p>
                    <p className="text-xs text-text-muted">pixels</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      Base64 length
                    </p>
                    <p className="text-sm font-semibold text-text-main">
                      {inputValue.trim().length.toLocaleString()}
                    </p>
                    <p className="text-xs text-text-muted">characters</p>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full touch-target py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Download Image
                </button>

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Decode another string
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <Base64ToImageContentSection />
      </div>
    </main>
  )
}
