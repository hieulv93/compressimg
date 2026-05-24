'use client'

import { useState, useCallback, useRef } from 'react'
import UploadBox from '@/components/tool/UploadBox'
import AdSlot from '@/components/ads/AdSlot'
import ImageColorPickerContentSection from '@/components/tool/ImageColorPickerContentSection'
import { MAX_FILE_SIZE_MB } from '@/lib/utils'
import { isHeicFile, convertHeicToJpeg } from '@/lib/heic'
import { analytics } from '@/lib/analytics'

type PageState = 'idle' | 'ready' | 'error'

interface PickedColor {
  hex: string
  rgb: string
  hsl: string
  r: number
  g: number
  b: number
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rn:
        h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6
        break
      case gn:
        h = ((bn - rn) / d + 2) / 6
        break
      case bn:
        h = ((rn - gn) / d + 4) / 6
        break
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

function toHex(n: number) {
  return n.toString(16).padStart(2, '0')
}

export default function ImageColorPickerPage() {
  const [pageState, setPageState] = useState<PageState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [pickedColor, setPickedColor] = useState<PickedColor | null>(null)
  const [history, setHistory] = useState<PickedColor[]>([])
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
    const url = URL.createObjectURL(prepared)
    const img = new window.Image()
    img.onload = () => {
      const canvas = canvasRef.current
      if (!canvas) {
        URL.revokeObjectURL(url)
        return
      }
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)
      setPageState('ready')
      setPickedColor(null)
      setHistory([])
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      setErrorMessage('Failed to load image. Please try again.')
      setPageState('error')
    }
    img.src = url
  }, [])

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const x = Math.floor((e.clientX - rect.left) * scaleX)
    const y = Math.floor((e.clientY - rect.top) * scaleY)
    const px = ctx.getImageData(x, y, 1, 1).data
    const [r, g, b] = [px[0], px[1], px[2]]
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`
    const rgb = `rgb(${r}, ${g}, ${b})`
    const [h, s, l] = rgbToHsl(r, g, b)
    const hsl = `hsl(${h}, ${s}%, ${l}%)`
    const color: PickedColor = { hex, rgb, hsl, r, g, b }
    setPickedColor(color)
    setHistory((prev) => [color, ...prev].slice(0, 10))
    analytics.colorPicked(hex)
  }, [])

  const handleCopy = useCallback(async (value: string, field: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 1500)
    } catch {
      // ignore
    }
  }, [])

  const handleReset = useCallback(() => {
    setPageState('idle')
    setErrorMessage('')
    setPickedColor(null)
    setHistory([])
    setCopiedField(null)
  }, [])

  const uploadBoxState = pageState === 'error' ? 'error' : 'idle'

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Image Color Picker — Pick Colors from Any Photo
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Upload any image and click any pixel to get the exact HEX, RGB, and HSL color values.
            Copy in one click — 100% browser-based.
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
                  <span>⚡ Click any pixel to pick</span>
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
              {/* Canvas */}
              <div
                className="relative w-full bg-surface flex items-center justify-center"
                style={{ minHeight: '240px' }}
              >
                <canvas
                  ref={canvasRef}
                  onClick={handleCanvasClick}
                  className="max-h-96 w-auto max-w-full object-contain cursor-crosshair"
                  title="Click anywhere to pick a color"
                />
              </div>
              <p className="text-center text-xs text-text-muted py-2 border-b border-border">
                Click anywhere on the image to pick a color
              </p>

              <div className="p-4 sm:p-6 space-y-4">
                {/* Current picked color */}
                {pickedColor ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-xl border border-border shrink-0 shadow-sm"
                        style={{ backgroundColor: pickedColor.hex }}
                      />
                      <div className="flex-1 space-y-2">
                        {[
                          { label: 'HEX', value: pickedColor.hex },
                          { label: 'RGB', value: pickedColor.rgb },
                          { label: 'HSL', value: pickedColor.hsl },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-text-muted w-7 shrink-0">
                              {label}
                            </span>
                            <code className="flex-1 text-xs bg-surface border border-border rounded-lg px-2 py-1 font-mono text-text-main">
                              {value}
                            </code>
                            <button
                              onClick={() => handleCopy(value, label)}
                              className="text-xs px-2 py-1 rounded-lg border border-border bg-surface hover:border-primary/40 transition-colors text-text-muted shrink-0"
                            >
                              {copiedField === label ? '✓' : 'Copy'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4 text-sm text-text-muted">
                    Click any point on the image above to pick its color
                  </div>
                )}

                {/* Color history */}
                {history.length > 1 && (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-text-main">Color history</p>
                    <div className="flex flex-wrap gap-2">
                      {history.map((c, i) => (
                        <button
                          key={i}
                          onClick={() => setPickedColor(c)}
                          title={c.hex}
                          className={`w-8 h-8 rounded-lg border-2 transition-all ${
                            pickedColor?.hex === c.hex && i === 0
                              ? 'border-primary scale-110'
                              : 'border-border hover:border-primary/40'
                          }`}
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleReset}
                  className="w-full touch-target text-sm text-text-muted hover:text-text-main border border-border rounded-lg py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Pick from another image
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot compressionDone={pageState === 'ready'} slot="placeholder-slot-id" />

        <ImageColorPickerContentSection />
      </div>
    </main>
  )
}
