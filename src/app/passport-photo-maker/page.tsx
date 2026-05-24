'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import UploadBox from '@/components/tool/UploadBox'
import ProgressBar from '@/components/tool/ProgressBar'
import AdSlot from '@/components/ads/AdSlot'
import PassportPhotoContentSection from '@/components/tool/PassportPhotoContentSection'
import { MAX_FILE_SIZE_MB, generateFilename } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'processing' | 'done' | 'error'

interface Preset {
  id: string
  label: string
  country: string
  widthPx: number
  heightPx: number
  desc: string
}

// All dimensions at 300 DPI. mm → px = mm × (300/25.4)
const PRESETS: Preset[] = [
  {
    id: 'us',
    label: 'US Passport',
    country: '🇺🇸 United States',
    widthPx: 600,
    heightPx: 600,
    desc: '2×2 inch (51×51mm)',
  },
  {
    id: 'uk',
    label: 'UK Passport',
    country: '🇬🇧 United Kingdom',
    widthPx: 413,
    heightPx: 531,
    desc: '35×45mm',
  },
  {
    id: 'schengen',
    label: 'Schengen Visa',
    country: '🇪🇺 EU / Europe',
    widthPx: 413,
    heightPx: 531,
    desc: '35×45mm',
  },
  {
    id: 'india',
    label: 'India Passport',
    country: '🇮🇳 India',
    widthPx: 413,
    heightPx: 531,
    desc: '35×45mm',
  },
  {
    id: 'india-pan',
    label: 'India PAN / Aadhaar',
    country: '🇮🇳 India (ID)',
    widthPx: 295,
    heightPx: 413,
    desc: '25×35mm',
  },
  {
    id: 'canada',
    label: 'Canada Passport',
    country: '🇨🇦 Canada',
    widthPx: 591,
    heightPx: 827,
    desc: '50×70mm',
  },
  {
    id: 'australia',
    label: 'Australia Passport',
    country: '🇦🇺 Australia',
    widthPx: 413,
    heightPx: 531,
    desc: '35×45mm',
  },
  {
    id: 'china',
    label: 'China Visa',
    country: '🇨🇳 China',
    widthPx: 390,
    heightPx: 567,
    desc: '33×48mm',
  },
  {
    id: 'japan',
    label: 'Japan Passport',
    country: '🇯🇵 Japan',
    widthPx: 413,
    heightPx: 531,
    desc: '35×45mm',
  },
  {
    id: 'vietnam',
    label: 'Vietnam Passport',
    country: '🇻🇳 Vietnam',
    widthPx: 472,
    heightPx: 708,
    desc: '40×60mm',
  },
]

const BG_OPTIONS = [
  { id: 'white', label: 'White', color: '#ffffff' },
  { id: 'offwhite', label: 'Off-white', color: '#f5f0eb' },
  { id: 'lightblue', label: 'Light blue', color: '#c8d8e8' },
]

export default function PassportPhotoMakerPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  const [resultUrl, setResultUrl] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [selectedPreset, setSelectedPreset] = useState<Preset>(PRESETS[0])
  const [bgColor, setBgColor] = useState(BG_OPTIONS[0])
  const imgRef = useRef<HTMLImageElement | null>(null)
  const previewUrlRef = useRef('')
  const resultUrlRef = useRef('')

  const processPhoto = useCallback((img: HTMLImageElement, preset: Preset, bg: string): string => {
    const canvas = document.createElement('canvas')
    canvas.width = preset.widthPx
    canvas.height = preset.heightPx
    const ctx = canvas.getContext('2d')!

    // Fill background
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, preset.widthPx, preset.heightPx)

    // Center-crop to preset aspect ratio then scale to fit
    const targetAspect = preset.widthPx / preset.heightPx
    const srcAspect = img.naturalWidth / img.naturalHeight

    let sx: number, sy: number, sw: number, sh: number
    if (srcAspect > targetAspect) {
      // Source is wider — crop sides
      sh = img.naturalHeight
      sw = Math.round(sh * targetAspect)
      sx = Math.round((img.naturalWidth - sw) / 2)
      sy = 0
    } else {
      // Source is taller — crop top/bottom (keep upper portion for face)
      sw = img.naturalWidth
      sh = Math.round(sw / targetAspect)
      sx = 0
      // Bias toward top 60% to keep face in frame
      sy = Math.round((img.naturalHeight - sh) * 0.2)
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, preset.widthPx, preset.heightPx)
    return canvas.toDataURL('image/jpeg', 0.95)
  }, [])

  const handleFileSelect = useCallback(
    async (file: File) => {
      const fileWithFlag = file as File & { _invalid?: string }
      if (fileWithFlag._invalid === 'format') {
        setErrorMessage('Unsupported format. Use JPG, PNG, WebP, or HEIC.')
        setPageState('error')
        return
      }
      if (fileWithFlag._invalid === 'size') {
        setErrorMessage(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
        setPageState('error')
        return
      }

      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current)
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current)

      setErrorMessage('')
      setPageState('processing')
      analytics.imageUploaded(file.type, Math.round(file.size / 1024))

      const prepared = isHeicFile(file) ? await convertHeicToJpeg(file) : file
      setOriginalFile(prepared)

      const url = URL.createObjectURL(prepared)
      previewUrlRef.current = url
      setPreviewUrl(url)

      const img = new window.Image()
      img.onload = () => {
        imgRef.current = img
        const dataUrl = processPhoto(img, selectedPreset, bgColor.color)
        setResultUrl(dataUrl)
        setPageState('done')
      }
      img.onerror = () => {
        URL.revokeObjectURL(url)
        setErrorMessage('Failed to load image. Please try again.')
        setPageState('error')
      }
      img.src = url
    },
    [selectedPreset, bgColor, processPhoto]
  )

  const handlePresetChange = useCallback(
    (preset: Preset) => {
      setSelectedPreset(preset)
      if (imgRef.current && pageState === 'done') {
        const dataUrl = processPhoto(imgRef.current, preset, bgColor.color)
        setResultUrl(dataUrl)
      }
    },
    [pageState, bgColor, processPhoto]
  )

  const handleBgChange = useCallback(
    (bg: (typeof BG_OPTIONS)[0]) => {
      setBgColor(bg)
      if (imgRef.current && pageState === 'done') {
        const dataUrl = processPhoto(imgRef.current, selectedPreset, bg.color)
        setResultUrl(dataUrl)
      }
    },
    [pageState, selectedPreset, processPhoto]
  )

  const handleDownload = useCallback(() => {
    if (!resultUrl || !originalFile) return
    const a = document.createElement('a')
    a.href = resultUrl
    a.download = generateFilename(originalFile.name, 'jpg', 'passport')
    a.click()
    analytics.passportPhotoMade(selectedPreset.id, selectedPreset.widthPx, selectedPreset.heightPx)
  }, [resultUrl, originalFile, selectedPreset])

  const handleReset = useCallback(() => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current)
      previewUrlRef.current = ''
    }
    setPreviewUrl('')
    setResultUrl('')
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
            Passport Size Photo Maker — Free Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Upload any photo and get a print-ready passport or visa photo at 300 DPI. US, UK, India,
            Schengen, and 10+ country sizes — no upload, 100% private.
          </p>
        </div>

        <div className="space-y-4">
          {(pageState === 'idle' || pageState === 'error') && (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Processing photo..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>📷 300 DPI print-ready</span>
                  <span>·</span>
                  <span>🔒 Never leaves your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
            </>
          )}

          {pageState === 'processing' && (
            <div className="rounded-2xl border border-border bg-white shadow-sm p-8 text-center space-y-3">
              <ProgressBar visible quality={95} />
              <p className="text-sm text-text-muted">Processing your photo…</p>
            </div>
          )}

          {pageState === 'done' && originalFile && (
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              {/* Preview grid: original → result */}
              <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
                <div className="p-3 flex flex-col items-center gap-1">
                  <p className="text-[10px] text-text-muted font-medium uppercase tracking-wide">
                    Original
                  </p>
                  {previewUrl && (
                    <Image
                      src={previewUrl}
                      alt="Original photo"
                      width={180}
                      height={180}
                      className="max-h-44 w-auto object-contain"
                      unoptimized
                    />
                  )}
                </div>
                <div className="p-3 flex flex-col items-center gap-1">
                  <p className="text-[10px] text-text-muted font-medium uppercase tracking-wide">
                    {selectedPreset.label}
                  </p>
                  {resultUrl && (
                    <Image
                      src={resultUrl}
                      alt="Passport photo result"
                      width={180}
                      height={180}
                      className="max-h-44 w-auto object-contain border border-border/50"
                      unoptimized
                    />
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-5">
                {/* Preset selector */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-text-main">Country / Document</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => handlePresetChange(preset)}
                        className={`p-2.5 rounded-xl border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          selectedPreset.id === preset.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-surface hover:border-primary/40'
                        }`}
                      >
                        <p
                          className={`text-xs font-semibold leading-tight ${selectedPreset.id === preset.id ? 'text-primary' : 'text-text-main'}`}
                        >
                          {preset.country}
                        </p>
                        <p className="text-[10px] text-text-muted mt-0.5">{preset.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background color */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-text-main">Background</p>
                  <div className="flex gap-2">
                    {BG_OPTIONS.map((bg) => (
                      <button
                        key={bg.id}
                        onClick={() => handleBgChange(bg)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          bgColor.id === bg.id
                            ? 'border-primary bg-primary/5 font-semibold text-primary'
                            : 'border-border bg-surface hover:border-primary/40 text-text-main'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-border/60 shrink-0"
                          style={{ backgroundColor: bg.color }}
                        />
                        {bg.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size info */}
                <div className="rounded-xl bg-surface border border-border p-3 text-xs text-text-muted">
                  <span className="font-semibold text-text-main">{selectedPreset.label}</span>
                  {' — '}
                  {selectedPreset.desc} · {selectedPreset.widthPx}×{selectedPreset.heightPx}px at
                  300 DPI
                </div>

                {/* Download */}
                <button
                  onClick={handleDownload}
                  className="w-full touch-target py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Download Passport Photo (JPG)
                </button>

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Use a different photo
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot compressionDone={pageState === 'done'} slot="placeholder-slot-id" />

        <PassportPhotoContentSection />
      </div>
    </main>
  )
}
