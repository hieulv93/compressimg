'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import AdSlot from '@/components/ads/AdSlot'
import AddWatermarkContentSection from '@/components/tool/AddWatermarkContentSection'
import { MAX_FILE_SIZE_MB, generateFilename } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'ready' | 'error'

type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'middle-center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

const POSITIONS: { id: Position; label: string }[] = [
  { id: 'top-left', label: '↖' },
  { id: 'top-center', label: '↑' },
  { id: 'top-right', label: '↗' },
  { id: 'middle-left', label: '←' },
  { id: 'middle-center', label: '●' },
  { id: 'middle-right', label: '→' },
  { id: 'bottom-left', label: '↙' },
  { id: 'bottom-center', label: '↓' },
  { id: 'bottom-right', label: '↘' },
]

const COLOR_PRESETS = ['#ffffff', '#000000', '#ffff00', '#ff4444', '#4444ff']

function drawWatermark(
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  text: string,
  fontSize: number,
  opacity: number,
  color: string,
  position: Position
) {
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(img, 0, 0)

  if (!text.trim()) return

  const r = parseInt(color.slice(1, 3), 16)
  const g = parseInt(color.slice(3, 5), 16)
  const b = parseInt(color.slice(5, 7), 16)
  const alpha = opacity / 100

  ctx.font = `bold ${fontSize}px Arial, sans-serif`
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`

  const padding = Math.max(fontSize * 0.75, 16)
  const w = canvas.width
  const h = canvas.height
  const textMetrics = ctx.measureText(text)
  const textW = textMetrics.width
  const textH = fontSize

  let x = 0
  let y = 0
  ctx.textBaseline = 'top'
  ctx.textAlign = 'left'

  if (position === 'top-left') {
    x = padding
    y = padding
  } else if (position === 'top-center') {
    x = (w - textW) / 2
    y = padding
  } else if (position === 'top-right') {
    x = w - textW - padding
    y = padding
  } else if (position === 'middle-left') {
    x = padding
    y = (h - textH) / 2
  } else if (position === 'middle-center') {
    x = (w - textW) / 2
    y = (h - textH) / 2
  } else if (position === 'middle-right') {
    x = w - textW - padding
    y = (h - textH) / 2
  } else if (position === 'bottom-left') {
    x = padding
    y = h - textH - padding
  } else if (position === 'bottom-center') {
    x = (w - textW) / 2
    y = h - textH - padding
  } else if (position === 'bottom-right') {
    x = w - textW - padding
    y = h - textH - padding
  }

  ctx.fillText(text, x, y)
}

export default function AddWatermarkPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [text, setText] = useState('© Your Name')
  const [fontSize, setFontSize] = useState(40)
  const [opacity, setOpacity] = useState(80)
  const [color, setColor] = useState('#ffffff')
  const [position, setPosition] = useState<Position>('bottom-right')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const redraw = useCallback(() => {
    if (!canvasRef.current || !imgRef.current) return
    const img = imgRef.current
    const scaledFontSize = Math.max(12, Math.round((fontSize / 100) * img.naturalWidth))
    drawWatermark(canvasRef.current, img, text, scaledFontSize, opacity, color, position)
  }, [text, fontSize, opacity, color, position])

  useEffect(() => {
    if (pageState === 'ready') redraw()
  }, [pageState, redraw])

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

    setErrorMessage('')
    analytics.imageUploaded(file.type, Math.round(file.size / 1024))

    const prepared = isHeicFile(file) ? await convertHeicToJpeg(file) : file
    setOriginalFile(prepared)

    const url = URL.createObjectURL(prepared)
    const img = new window.Image()
    img.onload = () => {
      imgRef.current = img
      URL.revokeObjectURL(url)
      setPageState('ready')
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      setErrorMessage('Failed to load image. Please try again.')
      setPageState('error')
    }
    img.src = url
  }, [])

  const handleDownload = useCallback(() => {
    if (!canvasRef.current || !originalFile) return
    const scaledFontSize = Math.max(
      12,
      Math.round((fontSize / 100) * (imgRef.current?.naturalWidth ?? 800))
    )
    analytics.watermarkAdded(position, opacity, originalFile.size / 1024, scaledFontSize)
    canvasRef.current.toBlob(
      (blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = generateFilename(originalFile.name, 'jpg', 'watermarked')
        a.click()
        URL.revokeObjectURL(url)
      },
      'image/jpeg',
      0.92
    )
  }, [originalFile, position, opacity, fontSize])

  const handleReset = useCallback(() => {
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
            Add Watermark to Image — Free Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Add a custom text watermark to any photo. Choose position, opacity, size, and color —
            preview updates live. 100% browser-based.
          </p>
        </div>

        <div className="space-y-4">
          {pageState !== 'ready' && (
            <>
              <UploadBox
                state={uploadBoxState}
                onFileSelect={handleFileSelect}
                errorMessage={errorMessage}
                processingLabel="Loading image..."
              />
              {pageState === 'idle' && (
                <div className="flex items-center justify-center gap-3 text-xs text-text-muted flex-wrap">
                  <span>⚡ Live preview</span>
                  <span>·</span>
                  <span>🔒 Never leaves your device</span>
                  <span>·</span>
                  <span>✓ Free, no sign-up</span>
                </div>
              )}
            </>
          )}

          {pageState === 'ready' && (
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              {/* Canvas preview */}
              <div
                className="relative w-full bg-surface flex items-center justify-center"
                style={{ minHeight: '240px' }}
              >
                <canvas ref={canvasRef} className="max-h-72 w-auto max-w-full object-contain" />
              </div>

              <div className="p-4 sm:p-6 space-y-5">
                {/* Watermark text */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-main">Watermark text</label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="© Your Name"
                    maxLength={100}
                    className="w-full text-sm bg-surface border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-text-main"
                  />
                </div>

                {/* Position grid */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-main">Position</label>
                  <div className="grid grid-cols-3 gap-1.5 w-36">
                    {POSITIONS.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPosition(p.id)}
                        aria-label={p.id.replace('-', ' ')}
                        className={`h-9 w-full rounded-lg text-sm font-bold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          position === p.id
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border bg-surface text-text-muted hover:border-primary/40'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font size */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <label className="text-xs font-semibold text-text-main">Font size</label>
                    <span className="text-xs text-text-muted">{fontSize}% of width</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={15}
                    step={1}
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                {/* Opacity */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <label className="text-xs font-semibold text-text-main">Opacity</label>
                    <span className="text-xs text-text-muted">{opacity}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    step={5}
                    value={opacity}
                    onChange={(e) => setOpacity(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                {/* Color */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-main">Color</label>
                  <div className="flex items-center gap-2 flex-wrap">
                    {COLOR_PRESETS.map((c) => (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        aria-label={c}
                        style={{ backgroundColor: c }}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          color === c ? 'border-primary scale-110' : 'border-border'
                        }`}
                      />
                    ))}
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-7 h-7 rounded-full border border-border cursor-pointer p-0 overflow-hidden"
                      title="Custom color"
                    />
                    <span className="text-xs font-mono text-text-muted">{color}</span>
                  </div>
                </div>

                {/* Download */}
                <button
                  onClick={handleDownload}
                  className="w-full touch-target py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Download Watermarked Image
                </button>

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Watermark another image
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot compressionDone={pageState === 'ready'} slot="placeholder-slot-id" />

        <AddWatermarkContentSection />
      </div>
    </main>
  )
}
