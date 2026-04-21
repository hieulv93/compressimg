'use client'

import { triggerDownload } from '@/lib/compress'
import { formatBytes } from '@/lib/utils'

interface DownloadButtonProps {
  blob: Blob
  filename: string
  compressedSize: number
  onDownload?: () => void
}

export default function DownloadButton({ blob, filename, compressedSize, onDownload }: DownloadButtonProps) {
  function handleDownload() {
    triggerDownload(blob, filename)
    onDownload?.()
  }

  return (
    <button
      onClick={handleDownload}
      className="w-full touch-target flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover active:scale-95 text-white font-semibold text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`Download compressed image (${formatBytes(compressedSize)})`}
    >
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
      Download ({formatBytes(compressedSize)})
    </button>
  )
}
