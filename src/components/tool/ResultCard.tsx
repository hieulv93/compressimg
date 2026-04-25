'use client'

import Image from 'next/image'
import { formatBytes, calcReduction, generateFilename } from '@/lib/utils'
import DownloadButton from './DownloadButton'
import BeforeAfterSlider from './BeforeAfterSlider'

interface ResultCardProps {
  blob: Blob
  previewUrl: string
  originalPreviewUrl?: string
  originalSize: number
  compressedSize: number
  format: string
  originalName: string
  onReset: () => void
  onRecompress: () => void
  onDownload?: () => void
}

export default function ResultCard({
  blob,
  previewUrl,
  originalPreviewUrl,
  originalSize,
  compressedSize,
  format,
  originalName,
  onReset,
  onRecompress,
  onDownload,
}: ResultCardProps) {
  const reduction = calcReduction(originalSize, compressedSize)
  const filename = generateFilename(originalName, format)

  return (
    <div
      className="w-full rounded-2xl border border-border bg-white shadow-sm overflow-hidden"
      role="region"
      aria-label="Compression result"
      aria-live="polite"
    >
      {/* Preview: before/after slider when original URL is available, otherwise single preview */}
      <div className="w-full bg-surface" style={{ minHeight: '200px' }}>
        {originalPreviewUrl ? (
          <BeforeAfterSlider
            beforeUrl={originalPreviewUrl}
            afterUrl={previewUrl}
            beforeLabel="Original"
            afterLabel="Compressed"
          />
        ) : (
          <div
            className="relative w-full flex items-center justify-center"
            style={{ minHeight: '200px' }}
          >
            <Image
              src={previewUrl}
              alt={`Compressed preview of ${originalName}`}
              width={600}
              height={400}
              className="max-h-64 w-auto object-contain"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="p-4 sm:p-6 space-y-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">Original</p>
            <p className="text-sm font-semibold text-text-main">{formatBytes(originalSize)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
              Compressed
            </p>
            <p className="text-sm font-semibold text-primary">{formatBytes(compressedSize)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">Saved</p>
            <p className="text-sm font-semibold text-success">{reduction}%</p>
          </div>
        </div>

        {/* Reduction bar */}
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-success rounded-full transition-all duration-500"
            style={{ width: `${Math.max(reduction, 2)}%` }}
            role="meter"
            aria-label={`${reduction}% size reduction`}
            aria-valuenow={reduction}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>

        <DownloadButton
          blob={blob}
          filename={filename}
          compressedSize={compressedSize}
          onDownload={onDownload}
        />

        <div className="flex gap-3">
          <button
            onClick={onRecompress}
            className="flex-1 touch-target text-sm font-medium text-primary border border-primary rounded-lg py-2 hover:bg-drag-active transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Try different quality
          </button>
          <button
            onClick={onReset}
            className="flex-1 touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            New image
          </button>
        </div>
      </div>
    </div>
  )
}
