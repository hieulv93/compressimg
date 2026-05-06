'use client'

import Image from 'next/image'
import { formatBytes, generateFilename } from '@/lib/utils'
import { formatLabel } from '@/lib/convert'
import DownloadButton from './DownloadButton'

interface ConvertResultCardProps {
  blob: Blob
  previewUrl: string
  inputFormat: string
  outputExt: string
  originalSize: number
  outputSize: number
  originalName: string
  onReset: () => void
  onDownload?: () => void
}

export default function ConvertResultCard({
  blob,
  previewUrl,
  inputFormat,
  outputExt,
  originalSize,
  outputSize,
  originalName,
  onReset,
  onDownload,
}: ConvertResultCardProps) {
  const filename = generateFilename(originalName, outputExt, 'converted')
  const isBigger = outputSize > originalSize
  const diff = Math.abs(outputSize - originalSize)
  const diffPct = Math.round((diff / originalSize) * 100)

  return (
    <div
      className="w-full rounded-2xl border border-border bg-white shadow-sm overflow-hidden"
      role="region"
      aria-label="Conversion result"
      aria-live="polite"
    >
      {/* Preview */}
      <div
        className="relative w-full bg-surface flex items-center justify-center"
        style={{ minHeight: '200px' }}
      >
        <Image
          src={previewUrl}
          alt={`Converted preview of ${originalName}`}
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
            <p className="text-sm font-semibold text-text-main">{formatLabel(inputFormat)}</p>
            <p className="text-xs text-text-muted">{formatBytes(originalSize)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">Converted</p>
            <p className="text-sm font-semibold text-primary">{formatLabel(outputExt)}</p>
            <p className="text-xs text-text-muted">{formatBytes(outputSize)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
              Size change
            </p>
            {isBigger && outputExt === 'png' ? (
              <>
                <p className="text-sm font-semibold text-primary">Lossless</p>
                <p className="text-xs text-text-muted">expected</p>
              </>
            ) : (
              <>
                <p
                  className={`text-sm font-semibold ${isBigger ? 'text-amber-600' : 'text-success'}`}
                >
                  {isBigger ? '+' : '-'}
                  {diffPct}%
                </p>
                <p className="text-xs text-text-muted">{isBigger ? 'larger' : 'smaller'}</p>
              </>
            )}
          </div>
        </div>

        {isBigger && (
          <p
            className={`text-xs rounded-lg px-3 py-2 text-center ${outputExt === 'png' ? 'text-primary bg-primary/5 border border-primary/20' : 'text-amber-600 bg-amber-50 border border-amber-200'}`}
          >
            {outputExt === 'png'
              ? 'PNG uses lossless compression and stores more pixel data than JPG — a larger file is expected.'
              : `Output is larger than the original. Try converting to WebP for a smaller file size.`}
          </p>
        )}

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
          Convert another image
        </button>
      </div>
    </div>
  )
}
