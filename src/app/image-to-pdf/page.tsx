'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import AdSlot from '@/components/ads/AdSlot'
import ImageToPdfContentSection from '@/components/tool/ImageToPdfContentSection'
import { MAX_FILE_SIZE_MB, formatBytes, generateFilename } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'ready' | 'converting' | 'error'
type PageSize = 'a4' | 'letter' | 'fit'

const PAGE_SIZES: { id: PageSize; label: string; desc: string }[] = [
  { id: 'a4', label: 'A4', desc: '210 × 297 mm' },
  { id: 'letter', label: 'Letter', desc: '216 × 279 mm' },
  { id: 'fit', label: 'Fit to image', desc: 'No white margins' },
]

export default function ImageToPdfPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [pageSize, setPageSize] = useState<PageSize>('a4')
  const imgRef = useRef<HTMLImageElement | null>(null)
  const previewUrlRef = useRef('')

  const handleFileSelect = useCallback(async (file: File) => {
    const fileWithFlag = file as File & { _invalid?: string }
    if (fileWithFlag._invalid === 'format') {
      setErrorMessage('Unsupported format. Use JPG, PNG, or WebP.')
      setPageState('error')
      return
    }
    if (fileWithFlag._invalid === 'size') {
      setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
      setPageState('error')
      return
    }

    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current)
    }

    setErrorMessage('')
    analytics.imageUploaded(file.type, Math.round(file.size / 1024))

    const prepared = isHeicFile(file) ? await convertHeicToJpeg(file) : file
    setOriginalFile(prepared)

    const url = URL.createObjectURL(prepared)
    previewUrlRef.current = url

    const img = new window.Image()
    img.onload = () => {
      imgRef.current = img
      setPreviewUrl(url)
      setPageState('ready')
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      setErrorMessage('Failed to load image. Please try again.')
      setPageState('error')
    }
    img.src = url
  }, [])

  const handleDownload = useCallback(async () => {
    const img = imgRef.current
    if (!img || !originalFile) return

    setPageState('converting')

    try {
      const { jsPDF } = await import('jspdf')

      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0)
      const imgData = canvas.toDataURL('image/jpeg', 0.92)

      const iW = img.naturalWidth
      const iH = img.naturalHeight

      let pdf
      if (pageSize === 'fit') {
        const mmW = (iW * 25.4) / 96
        const mmH = (iH * 25.4) / 96
        pdf = new jsPDF({
          orientation: mmH >= mmW ? 'portrait' : 'landscape',
          unit: 'mm',
          format: [mmW, mmH],
        })
        pdf.addImage(imgData, 'JPEG', 0, 0, mmW, mmH)
      } else {
        const isA4 = pageSize === 'a4'
        const pgW = isA4 ? 210 : 216
        const pgH = isA4 ? 297 : 279
        const imgAspect = iW / iH
        const pgAspect = pgW / pgH
        let drawW: number
        let drawH: number
        if (imgAspect > pgAspect) {
          drawW = pgW
          drawH = pgW / imgAspect
        } else {
          drawH = pgH
          drawW = pgH * imgAspect
        }
        const xOff = (pgW - drawW) / 2
        const yOff = (pgH - drawH) / 2
        pdf = new jsPDF({
          orientation: iH >= iW ? 'portrait' : 'landscape',
          unit: 'mm',
          format: pageSize,
        })
        pdf.addImage(imgData, 'JPEG', xOff, yOff, drawW, drawH)
      }

      pdf.save(generateFilename(originalFile.name, 'pdf', ''))
      analytics.imageToPdf(originalFile.size / 1024, pageSize)
      setPageState('ready')
    } catch {
      setErrorMessage('Failed to generate PDF. Please try again.')
      setPageState('error')
    }
  }, [originalFile, pageSize])

  const handleReset = useCallback(() => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current)
      previewUrlRef.current = ''
    }
    setPreviewUrl('')
    setOriginalFile(null)
    imgRef.current = null
    setErrorMessage('')
    setPageState('idle')
  }, [])

  const uploadBoxState = pageState === 'error' ? 'error' : 'idle'

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Image to PDF Converter — Free Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Convert any image to PDF instantly. Choose A4, US Letter, or fit-to-image page size —
            100% browser-based, your image never leaves your device.
          </p>
        </div>

        <div className="space-y-4">
          {pageState === 'idle' || pageState === 'error' ? (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Loading image..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ PDF generated instantly</span>
                  <span>·</span>
                  <span>🔒 Never leaves your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
            </>
          ) : null}

          {(pageState === 'ready' || pageState === 'converting') && originalFile && (
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              {/* Image preview */}
              <div
                className="relative w-full bg-surface flex items-center justify-center"
                style={{ minHeight: '240px' }}
              >
                {previewUrl && (
                  <Image
                    src={previewUrl}
                    alt="Image to convert to PDF"
                    width={600}
                    height={400}
                    className="max-h-72 w-auto object-contain"
                    unoptimized
                  />
                )}
              </div>

              <div className="p-4 sm:p-6 space-y-5">
                {/* File info */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-surface border border-border">
                  <svg
                    className="w-4 h-4 text-text-muted shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3 3h18"
                    />
                  </svg>
                  <p className="text-xs text-text-muted truncate flex-1">{originalFile.name}</p>
                  <p className="text-xs font-semibold text-text-main shrink-0">
                    {formatBytes(originalFile.size)}
                  </p>
                </div>

                {/* Page size selector */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-text-main">Page size</p>
                  <div className="grid grid-cols-3 gap-2">
                    {PAGE_SIZES.map((ps) => (
                      <button
                        key={ps.id}
                        onClick={() => setPageSize(ps.id)}
                        className={`p-3 rounded-xl border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          pageSize === ps.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-surface hover:border-primary/40'
                        }`}
                      >
                        <p
                          className={`text-xs font-semibold ${pageSize === ps.id ? 'text-primary' : 'text-text-main'}`}
                        >
                          {ps.label}
                        </p>
                        <p className="text-[10px] text-text-muted mt-0.5">{ps.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Download */}
                <button
                  onClick={handleDownload}
                  disabled={pageState === 'converting'}
                  className="w-full touch-target py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {pageState === 'converting' ? 'Generating PDF…' : 'Download PDF'}
                </button>

                <ProgressBar visible={pageState === 'converting'} quality={92} />

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Convert another image
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot
          compressionDone={pageState === 'ready' || pageState === 'converting'}
          slot="placeholder-slot-id"
        />

        <ImageToPdfContentSection />
      </div>
    </main>
  )
}
