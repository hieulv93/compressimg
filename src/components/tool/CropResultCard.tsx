'use client'

import Image from 'next/image'
import { formatBytes, generateFilename } from '@/lib/utils'
import DownloadButton from './DownloadButton'

interface CropResultCardProps {
  blob: Blob
  previewUrl: string
  originalWidth: number
  originalHeight: number
  croppedWidth: number
  croppedHeight: number
  originalSize: number
  outputSize: number
  format: string
  originalName: string
  onReset: () => void
  onDownload?: () => void
}

export default function CropResultCard({
  blob,
  previewUrl,
  originalWidth,
  originalHeight,
  croppedWidth,
  croppedHeight,
  originalSize,
  outputSize,
  format,
  originalName,
  onReset,
  onDownload,
}: CropResultCardProps) {
  const filename = generateFilename(originalName, format, 'cropped')

  return (
    <div
      className="w-full rounded-2xl border border-border bg-white shadow-sm overflow-hidden"
      role="region"
      aria-label="Crop result"
      aria-live="polite"
    >
      {/* Preview */}
      <div
        className="relative w-full bg-surface flex items-center justify-center"
        style={{ minHeight: '200px' }}
      >
        <Image
          src={previewUrl}
          alt={`Cropped preview of ${originalName}`}
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
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">Cropped</p>
            <p className="text-sm font-semibold text-primary">
              {croppedWidth}×{croppedHeight}
            </p>
            <p className="text-xs text-text-muted">{formatBytes(outputSize)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">Format</p>
            <p className="text-sm font-semibold text-text-main uppercase">{format}</p>
            <p className="text-xs text-text-muted">Preserved</p>
          </div>
        </div>

        <DownloadButton
          blob={blob}
          filename={filename}
          compressedSize={outputSize}
          onDownload={onDownload}
        />

        <button
          onClick={onReset}
          className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Crop another image
        </button>
      </div>
    </div>
  )
}
