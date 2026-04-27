'use client'

import { useState } from 'react'
import { triggerDownload } from '@/lib/compress'
import { formatBytes } from '@/lib/utils'

interface DownloadButtonProps {
  blob: Blob
  filename: string
  compressedSize: number
  onDownload?: () => void
}

export default function DownloadButton({
  blob,
  filename,
  compressedSize,
  onDownload,
}: DownloadButtonProps) {
  const [downloaded, setDownloaded] = useState(false)

  function handleDownload() {
    triggerDownload(blob, filename)
    onDownload?.()
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 3000)
  }

  return (
    <button
      onClick={handleDownload}
      className={`w-full touch-target flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 text-white ${
        downloaded ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary-hover'
      }`}
      aria-label={`Download compressed image (${formatBytes(compressedSize)})`}
    >
      {downloaded ? (
        <>
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Downloaded!
        </>
      ) : (
        <>
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Download ({formatBytes(compressedSize)})
        </>
      )}
    </button>
  )
}
