'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

interface BeforeAfterSliderProps {
  beforeUrl: string
  afterUrl: string
  beforeLabel?: string
  afterLabel?: string
}

export default function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  beforeLabel = 'Original',
  afterLabel = 'Compressed',
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      dragging.current = true
      updatePos(e.clientX)
    },
    [updatePos]
  )

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dragging.current) updatePos(e.clientX)
    }
    const onUp = () => {
      dragging.current = false
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [updatePos])

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      updatePos(e.touches[0].clientX)
    },
    [updatePos]
  )

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePos(e.touches[0].clientX)
    },
    [updatePos]
  )

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl bg-surface select-none cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      aria-label="Drag to compare original and compressed image"
    >
      {/* After (compressed) — base layer, defines container height */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterUrl}
        alt="Compressed"
        className="block w-full max-h-64 object-contain"
        draggable={false}
      />

      {/* Before (original) — overlay, clipped to left `pos`% */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeUrl}
        alt="Original"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-px bg-white shadow-[0_0_4px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-2 left-2 text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-2 right-2 text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded pointer-events-none">
        {afterLabel}
      </span>
    </div>
  )
}
