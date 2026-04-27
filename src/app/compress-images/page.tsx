'use client'

import { useState, useCallback, useRef } from 'react'
import DownloadButton from '@/components/tool/DownloadButton'
import ProgressBar from '@/components/tool/ProgressBar'
import AdSlot from '@/components/ads/AdSlot'
import Link from 'next/link'
import { compressImage, revokePreview } from '@/lib/compress'
import type { CompressResult } from '@/lib/compress'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'

const MAX_FILES = 5

interface FileEntry {
  id: string
  file: File
  state: 'pending' | 'processing' | 'done' | 'error'
  result?: CompressResult
  error?: string
}

function formatKb(bytes: number) {
  return (bytes / 1024).toFixed(0) + ' KB'
}

export default function BatchCompressPage() {
  const [quality, setQuality] = useState(80)
  const [entries, setEntries] = useState<FileEntry[]>([])
  const [allDone, setAllDone] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const processFiles = useCallback(
    async (files: File[]) => {
      const valid = files.slice(0, MAX_FILES).filter((f) => {
        const ok = f.size <= MAX_FILE_SIZE_MB * 1024 * 1024
        return ok
      })
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
          const result = await compressImage(updated[i].file, { quality })
          updated[i] = { ...updated[i], state: 'done', result }
        } catch {
          updated[i] = { ...updated[i], state: 'error', error: 'Compression failed' }
        }
        setEntries([...updated])
      }
      setAllDone(true)
    },
    [quality]
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
      if (e.result?.previewUrl) revokePreview(e.result.previewUrl)
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
      const name = entry.file.name.replace(/\.[^.]+$/, '') + '-compressed.' + ext
      zip.file(name, entry.result!.blob)
    })

    const blob = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'compressed-images.zip'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }, [entries])

  const isProcessing = entries.some((e) => e.state === 'processing' || e.state === 'pending')
  const doneCount = entries.filter((e) => e.state === 'done').length
  const totalSavedBytes = entries.reduce(
    (sum, e) => sum + (e.result ? e.result.originalSize - e.result.compressedSize : 0),
    0
  )

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text-main mb-2">Batch Compress Images</h1>
        <p className="text-text-muted">
          Upload up to {MAX_FILES} images and compress them all at once. Download as ZIP.
        </p>
      </div>

      {/* Quality slider */}
      {!entries.length && (
        <div className="bg-surface border border-border rounded-xl p-4">
          <label className="block text-sm font-medium text-text-main mb-2">
            Quality: {quality}%
          </label>
          <input
            type="range"
            min={1}
            max={100}
            step={1}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>Smallest file</span>
            <span>Best quality</span>
          </div>
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
            const savings = entry.result
              ? Math.round((1 - entry.result.compressedSize / entry.result.originalSize) * 100)
              : 0
            return (
              <div
                key={entry.id}
                className="border border-border rounded-xl p-4 flex items-center gap-4"
              >
                {/* Thumbnail */}
                <div className="w-14 h-14 rounded-lg bg-surface border border-border overflow-hidden flex-shrink-0">
                  {entry.result?.previewUrl ? (
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

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-main truncate">{entry.file.name}</p>
                  {entry.state === 'pending' && <p className="text-xs text-text-muted">Waiting…</p>}
                  {entry.state === 'processing' && <ProgressBar visible={true} />}
                  {entry.state === 'error' && <p className="text-xs text-red-500">{entry.error}</p>}
                  {entry.state === 'done' && entry.result && (
                    <p className="text-xs text-text-muted">
                      {formatKb(entry.result.originalSize)} →{' '}
                      {formatKb(entry.result.compressedSize)}
                      {savings > 0 && (
                        <span className="text-green-600 font-medium ml-1">−{savings}%</span>
                      )}
                    </p>
                  )}
                </div>

                {/* Download individual */}
                {entry.state === 'done' && entry.result && (
                  <DownloadButton
                    blob={entry.result.blob}
                    filename={
                      entry.file.name.replace(/\.[^.]+$/, '') +
                      '-compressed.' +
                      (entry.result.format || 'jpg')
                    }
                    sizeKb={Math.round(entry.result.compressedSize / 1024)}
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
          <div>
            <p className="font-semibold text-text-main">
              {doneCount} image{doneCount > 1 ? 's' : ''} compressed
            </p>
            {totalSavedBytes > 0 && (
              <p className="text-sm text-text-muted">Total saved: {formatKb(totalSavedBytes)}</p>
            )}
          </div>
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
              Compress more
            </button>
          </div>
        </div>
      )}

      {allDone && <AdSlot compressionDone={true} slot="placeholder-slot-id" format="rectangle" />}

      {/* SEO Content */}
      <section className="space-y-5 text-sm text-text-muted leading-relaxed border-t border-border pt-8">
        <h2 className="text-xl font-bold text-text-main">Compress Multiple Images at Once</h2>
        <p>
          Uploading and compressing images one at a time is slow when you have a batch of photos
          from a shoot, a set of product images for an e-commerce listing, or a collection of
          screenshots for documentation. This batch image compressor lets you compress up to{' '}
          {MAX_FILES} images simultaneously and download all results as a single ZIP file.
        </p>
        <p>
          Each image is compressed independently using the same quality setting. The quality slider
          (default: 80) applies to all files in the batch. JPG, PNG, WebP, and HEIC formats are all
          supported — HEIC files from iPhones are automatically converted to JPEG before
          compression.
        </p>

        <h2 className="text-xl font-bold text-text-main">Who Uses Batch Image Compression?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-text-main">E-commerce sellers</strong> — compress 5 product
            photos at once before uploading to Shopify, WooCommerce, or Amazon
          </li>
          <li>
            <strong className="text-text-main">Real estate agents</strong> — compress property
            photos before adding to listings
          </li>
          <li>
            <strong className="text-text-main">Bloggers and writers</strong> — compress all article
            images in one pass before publishing
          </li>
          <li>
            <strong className="text-text-main">Social media managers</strong> — compress a set of
            Instagram or LinkedIn images to meet platform limits
          </li>
          <li>
            <strong className="text-text-main">Developers</strong> — compress UI screenshots and
            design assets before committing to a repository
          </li>
        </ul>

        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress single image (with before/after comparison)
            </Link>
          </li>
          <li>
            <Link href="/compress-gif-online" className="text-primary hover:underline">
              Compress GIF online
            </Link>
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize image dimensions
            </Link>
          </li>
          <li>
            <Link href="/convert-image" className="text-primary hover:underline">
              Convert image format
            </Link>
          </li>
          <li>
            <Link href="/compress-image-for-instagram" className="text-primary hover:underline">
              Compress for Instagram
            </Link>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How many images can I compress at once?',
              a: `Up to ${MAX_FILES} images per batch. After downloading, click "Compress more" to process the next batch.`,
            },
            {
              q: 'Can I download all images as a ZIP?',
              a: 'Yes. Once all images are compressed, "Download All as ZIP" bundles every result into a single download.',
            },
            {
              q: 'Are my images uploaded to a server?',
              a: 'No. All compression happens in your browser — your files never leave your device.',
            },
            {
              q: 'Does the quality setting apply to all images?',
              a: 'Yes. Set quality before uploading. Quality 80 is the recommended starting point for most images.',
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
