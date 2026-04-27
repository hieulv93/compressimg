'use client'

import { useState, useCallback, useRef } from 'react'
import DownloadButton from '@/components/tool/DownloadButton'
import ProgressBar from '@/components/tool/ProgressBar'
import ErrorMessage from '@/components/tool/ErrorMessage'
import AdSlot from '@/components/ads/AdSlot'
import Link from 'next/link'
import { compressGif } from '@/lib/gif-compress'
import type { GifCompressResult } from '@/lib/gif-compress'

const MAX_GIF_MB = 20
type PageState = 'idle' | 'processing' | 'done' | 'error'

export default function CompressGifPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [quality, setQuality] = useState(10)
  const [frameSkip, setFrameSkip] = useState(1)
  const [result, setResult] = useState<GifCompressResult | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const processFile = useCallback(
    async (file: File) => {
      if (!file.type.includes('gif')) {
        setErrorMessage('Please upload a GIF file.')
        setPageState('error')
        return
      }
      if (file.size > MAX_GIF_MB * 1024 * 1024) {
        setErrorMessage(`File too large. Max ${MAX_GIF_MB}MB.`)
        setPageState('error')
        return
      }

      setPageState('processing')
      setErrorMessage('')
      if (result?.previewUrl) URL.revokeObjectURL(result.previewUrl)

      try {
        const compressed = await compressGif(file, { quality, frameSkip })
        setResult(compressed)
        setPageState('done')
      } catch {
        setErrorMessage('Compression failed. The GIF may be corrupted or too complex.')
        setPageState('error')
      }
    },
    [quality, frameSkip, result]
  )

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) processFile(file)
      e.target.value = ''
    },
    [processFile]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) processFile(file)
    },
    [processFile]
  )

  const handleReset = useCallback(() => {
    if (result?.previewUrl) URL.revokeObjectURL(result.previewUrl)
    setResult(null)
    setErrorMessage('')
    setPageState('idle')
  }, [result])

  const savings = result ? Math.round((1 - result.compressedSize / result.originalSize) * 100) : 0

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text-main mb-2">Compress GIF Online Free</h1>
        <p className="text-text-muted">
          Reduce GIF file size by up to 70%. Animation preserved. No uploads.
        </p>
      </div>

      {/* Settings */}
      {pageState !== 'done' && (
        <div className="flex flex-col sm:flex-row gap-4 bg-surface border border-border rounded-xl p-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-text-main mb-1">
              Quality: {quality}{' '}
              <span className="text-text-muted font-normal">(lower = smaller file)</span>
            </label>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-text-muted mt-1">
              <span>Smallest</span>
              <span>Best quality</span>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-text-main mb-1">
              Frame skip: {frameSkip === 1 ? 'None' : `Every ${frameSkip}nd frame`}
            </label>
            <input
              type="range"
              min={1}
              max={3}
              step={1}
              value={frameSkip}
              onChange={(e) => setFrameSkip(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-text-muted mt-1">
              <span>Keep all frames</span>
              <span>Skip frames</span>
            </div>
          </div>
        </div>
      )}

      {/* Upload zone */}
      {pageState === 'idle' || pageState === 'error' ? (
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
          <p className="text-text-main font-medium mb-1">Drop GIF here or click to upload</p>
          <p className="text-text-muted text-sm">Max {MAX_GIF_MB}MB · Animated GIFs only</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/gif"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      ) : null}

      {pageState === 'error' && <ErrorMessage message={errorMessage} />}

      {/* Processing */}
      {pageState === 'processing' && (
        <div className="border border-border rounded-xl p-8 flex flex-col items-center gap-4">
          <ProgressBar visible={true} label="Compressing GIF…" />
          <p className="text-text-muted text-sm">Compressing GIF… this may take 5–20 seconds</p>
        </div>
      )}

      {/* Result */}
      {pageState === 'done' && result && (
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="p-5 flex flex-col items-center gap-4">
            <img
              src={result.previewUrl}
              alt="Compressed GIF preview"
              className="max-w-full max-h-64 rounded object-contain"
            />
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <p className="text-text-muted">Original</p>
                <p className="font-semibold text-text-main">
                  {(result.originalSize / 1024).toFixed(0)} KB
                </p>
              </div>
              <div className="text-center">
                <p className="text-text-muted">Compressed</p>
                <p className="font-semibold text-text-main">
                  {(result.compressedSize / 1024).toFixed(0)} KB
                </p>
              </div>
              <div className="text-center">
                <p className="text-text-muted">Saved</p>
                <p
                  className={`font-bold text-lg ${savings > 0 ? 'text-green-600' : 'text-text-muted'}`}
                >
                  {savings > 0 ? `${savings}%` : '—'}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <DownloadButton
                blob={result.blob}
                filename="compressed.gif"
                sizeKb={Math.round(result.compressedSize / 1024)}
              />
              <button
                onClick={handleReset}
                className="px-4 py-2 border border-border rounded-lg text-sm text-text-muted hover:text-text-main hover:border-primary transition-colors duration-150"
              >
                Compress another
              </button>
            </div>
          </div>
        </div>
      )}

      {pageState === 'done' && (
        <AdSlot compressionDone={true} slot="placeholder-slot-id" format="rectangle" />
      )}

      {/* SEO Content */}
      <section className="prose-custom space-y-6 text-sm text-text-muted leading-relaxed border-t border-border pt-8">
        <h2 className="text-xl font-bold text-text-main">How to Compress a GIF Online</h2>
        <p>
          GIF files are often 3–10× larger than equivalent JPEG or WebP images because they store
          multiple frames of animation. A 5-second animation at 480×270px can easily exceed 5MB.
          Compressing a GIF reduces its color palette and optionally reduces the frame rate to
          produce a significantly smaller file without losing the animation.
        </p>
        <p>
          This tool uses two compression techniques:{' '}
          <strong className="text-text-main">color palette reduction</strong> (the Quality setting)
          and <strong className="text-text-main">frame rate reduction</strong> (the Frame Skip
          setting). Quality 10 reduces the color palette from 256 to approximately 64 colors — a
          change that is barely visible in most animations but cuts file size by 40–60%. Frame skip
          2 removes every other frame, halving the total frame count and reducing file size by
          another 30–50%.
        </p>

        <h2 className="text-xl font-bold text-text-main">When to Use GIF vs Video</h2>
        <p>
          For animations longer than 3 seconds or with complex motion, consider converting GIF to
          MP4 video. A 10MB GIF can become a 500KB MP4, playing at higher quality with smoother
          animation. Use GIF only when the format is specifically required — for example, on
          platforms that don&apos;t support video playback in feed, or for simple 1–3 second loop
          animations.
        </p>
        <p>
          For sharing on messaging apps like WhatsApp, Telegram, or iMessage, MP4 is generally
          supported and produces much smaller files. For web use, the{' '}
          <code className="bg-surface px-1 rounded">&lt;video loop autoplay muted&gt;</code> element
          with an MP4 file is recommended over GIF by Google&apos;s web performance guidelines.
        </p>

        <h2 className="text-xl font-bold text-text-main">GIF Compression Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Start with Quality 10 — it works well for most animations</li>
          <li>Use Frame Skip 2 for animations originally at 24fps or higher</li>
          <li>For GIFs with gradients or photographs, use Quality 20–30 to avoid color banding</li>
          <li>
            Cropping the GIF to remove unnecessary white space before compressing significantly
            reduces file size
          </li>
          <li>
            For GIFs with transparent backgrounds, avoid frame skip — it can cause transparency
            artifacts
          </li>
        </ul>

        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress JPG, PNG, WebP online
            </Link>
          </li>
          <li>
            <Link href="/compress-images" className="text-primary hover:underline">
              Batch compress multiple images
            </Link>
          </li>
          <li>
            <Link href="/convert-image" className="text-primary hover:underline">
              Convert image format (JPG → WebP, PNG → JPG)
            </Link>
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize image dimensions
            </Link>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does GIF compression work?',
              a: 'GIF compression works by reducing the number of colors in the color palette (from 256 to fewer) and optionally reducing the frame rate by skipping frames. Fewer colors means smaller file size — reducing from 256 to 64 colors typically cuts file size by 40–60%.',
            },
            {
              q: 'Will compressing a GIF lose the animation?',
              a: 'No. This tool preserves all animation. Frame Skip reduces the number of frames to lower file size, which reduces smoothness, but the animation continues to play.',
            },
            {
              q: 'Why is GIF compression slower than JPEG?',
              a: 'GIF compression is more complex because each frame must be decoded and re-encoded individually. A 5MB GIF with 50 frames typically takes 5–20 seconds in the browser. This is normal — all processing happens locally with no server.',
            },
            {
              q: 'Is my GIF uploaded to a server?',
              a: 'No. All processing runs entirely in your browser. Your GIF never leaves your device.',
            },
          ].map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold text-text-main mb-1">{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
