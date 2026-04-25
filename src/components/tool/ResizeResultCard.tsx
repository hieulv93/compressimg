'use client'

import Image from 'next/image'
import { formatBytes, generateFilename } from '@/lib/utils'
import DownloadButton from './DownloadButton'

interface ResizeResultCardProps {
  blob: Blob
  previewUrl: string
  originalWidth: number
  originalHeight: number
  newWidth: number
  newHeight: number
  originalSize: number
  outputSize: number
  format: string
  originalName: string
  onReset: () => void
  onTryDifferentSize?: () => void
  onDownload?: () => void
}

export default function ResizeResultCard({
  blob,
  previewUrl,
  originalWidth,
  originalHeight,
  newWidth,
  newHeight,
  originalSize,
  outputSize,
  format,
  originalName,
  onReset,
  onTryDifferentSize,
  onDownload,
}: ResizeResultCardProps) {
  const filename = generateFilename(originalName, format, 'resized')
  const isBiggerFile = outputSize > originalSize

  return (
    <div
      className="w-full rounded-2xl border border-border bg-white shadow-sm overflow-hidden"
      role="region"
      aria-label="Resize result"
      aria-live="polite"
    >
      {/* Preview */}
      <div
        className="relative w-full bg-surface flex items-center justify-center"
        style={{ minHeight: '200px' }}
      >
        <Image
          src={previewUrl}
          alt={`Resized preview of ${originalName}`}
          width={600}
          height={400}
          className="max-h-64 w-auto object-contain"
          unoptimized
        />
      </div>

      {/* Stats */}
      <div className="p-4 sm:p-6 space-y-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">Original</p>
            <p className="text-sm font-semibold text-text-main">
              {originalWidth}×{originalHeight}
            </p>
            <p className="text-xs text-text-muted">{formatBytes(originalSize)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">New Size</p>
            <p className="text-sm font-semibold text-primary">
              {newWidth}×{newHeight}
            </p>
            <p className="text-xs text-text-muted">{formatBytes(outputSize)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">Format</p>
            <p className="text-sm font-semibold text-text-main uppercase">{format}</p>
            <p className="text-xs text-text-muted">
              {newWidth === originalWidth && newHeight === originalHeight
                ? 'Same size'
                : newWidth < originalWidth
                  ? 'Smaller'
                  : 'Larger'}
            </p>
          </div>
        </div>

        {/* Warning if output is bigger than input */}
        {isBiggerFile && (
          <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-center">
            Output file is larger than the original because dimensions were increased.
          </p>
        )}

        <DownloadButton
          blob={blob}
          filename={filename}
          compressedSize={outputSize}
          onDownload={onDownload}
        />

        <div className="flex gap-3">
          {onTryDifferentSize && (
            <button
              onClick={onTryDifferentSize}
              className="flex-1 touch-target text-sm font-medium text-primary border border-primary rounded-lg py-2 hover:bg-drag-active transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Try different size
            </button>
          )}
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
