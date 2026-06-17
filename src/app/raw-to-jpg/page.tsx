'use client'

import { useState, useCallback, useRef } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import ResultCard from '@/components/tool/ResultCard'
import AdSlot from '@/components/ads/AdSlot'
import RawToJpgContentSection from '@/components/tool/RawToJpgContentSection'
import { isRawFile, extractRawPreview } from '@/lib/raw'
import type { RawExtractResult } from '@/lib/raw'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

const RAW_ACCEPT =
  '.cr2,.cr3,.nef,.arw,.dng,.raf,.rw2,.orf,image/x-canon-cr2,image/x-canon-cr3,image/x-nikon-nef,image/x-sony-arw,image/x-adobe-dng'

const RAW_MAX_MB = 100 // RAW files are large — raise limit vs default 20MB
const RAW_MAX_BYTES = RAW_MAX_MB * 1024 * 1024

export default function RawToJpgPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [result, setResult] = useState<{
    blob: Blob
    previewUrl: string
    meta: RawExtractResult
  } | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [thumbnailWarning, setThumbnailWarning] = useState(false)

  const previewUrlRef = useRef<string | null>(null)

  const handleFileSelect = useCallback(async (file: File) => {
    const f = file as File & { _invalid?: string }
    if (f._invalid === 'format') {
      setErrorMessage('Unsupported format. Use CR2, CR3, NEF, ARW, or DNG.')
      setPageState('error')
      return
    }
    // Override size check — RAW files can be up to 100MB
    if (file.size > RAW_MAX_BYTES) {
      setErrorMessage(`File too large. Max ${RAW_MAX_MB}MB for RAW files.`)
      setPageState('error')
      return
    }

    setOriginalFile(file)
    setPageState('processing')
    setErrorMessage('')
    setThumbnailWarning(false)

    analytics.imageUploaded(file.type || 'raw', Math.round(file.size / 1024))

    try {
      const extracted = await extractRawPreview(file)

      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current)
      const previewUrl = URL.createObjectURL(extracted.blob)
      previewUrlRef.current = previewUrl

      setResult({ blob: extracted.blob, previewUrl, meta: extracted })
      setThumbnailWarning(extracted.isThumbnailOnly)
      setPageState('done')

      analytics.imageCompressed(
        Math.round(file.size / 1024),
        Math.round(extracted.blob.size / 1024),
        'jpeg',
        0
      )
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Extraction failed. Please try again.'
      setErrorMessage(msg)
      setPageState('error')
      analytics.compressionError('raw_extraction_failed')
    }
  }, [])

  const handleReset = useCallback(() => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current)
      previewUrlRef.current = null
    }
    setResult(null)
    setOriginalFile(null)
    setErrorMessage('')
    setThumbnailWarning(false)
    setPageState('idle')
  }, [])

  const uploadBoxState =
    pageState === 'done'
      ? 'done'
      : pageState === 'processing'
        ? 'processing'
        : pageState === 'error'
          ? 'error'
          : 'idle'

  const outputName = originalFile ? originalFile.name.replace(/\.[^.]+$/, '.jpg') : 'converted.jpg'

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            RAW to JPG Converter Online Free
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Convert CR2, CR3, NEF, ARW, DNG camera RAW files to JPG — free, 100% in your browser, no
            upload
          </p>
        </div>

        <div className="space-y-4">
          <UploadBox
            state={uploadBoxState}
            onFileSelect={handleFileSelect}
            errorMessage={errorMessage}
            processingLabel="Extracting JPG from RAW…"
            accept={RAW_ACCEPT}
            customValidate={isRawFile}
            formatHint={`CR2, CR3, NEF, ARW, DNG — max ${RAW_MAX_MB}MB`}
          />

          {uploadBoxState === 'idle' && (
            <div className="flex items-center justify-center gap-4 text-xs text-text-muted flex-wrap">
              <span>⚡ Extracts embedded JPEG instantly</span>
              <span>·</span>
              <span>🔒 RAW files never leave your device</span>
              <span>·</span>
              <span>✓ Free, no sign-up</span>
            </div>
          )}

          <ProgressBar visible={pageState === 'processing'} label="Reading RAW file…" />
        </div>

        {thumbnailWarning && (
          <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 leading-relaxed">
            <strong>Note:</strong> This RAW file only contains a small embedded preview (
            {result?.meta.previewWidth}×{result?.meta.previewHeight}px). Most camera RAW files
            include a full-resolution preview — this file may be from a phone HDR mode, a DNG
            converted from another app, or an older camera model. The extracted JPG is smaller than
            the sensor resolution.
          </div>
        )}

        {pageState === 'done' && result && originalFile && (
          <>
            {result.meta.previewWidth > 0 && (
              <p className="text-center text-xs text-text-muted">
                Extracted preview: {result.meta.previewWidth}×{result.meta.previewHeight}px from{' '}
                {result.meta.formatLabel} file
              </p>
            )}
            <ResultCard
              blob={result.blob}
              previewUrl={result.previewUrl}
              originalSize={originalFile.size}
              compressedSize={result.blob.size}
              format="jpeg"
              originalName={outputName}
              onReset={handleReset}
              onRecompress={handleReset}
              onDownload={() => analytics.imageDownloaded(Math.round(result.blob.size / 1024))}
            />
          </>
        )}

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <RawToJpgContentSection />
      </div>
    </main>
  )
}
