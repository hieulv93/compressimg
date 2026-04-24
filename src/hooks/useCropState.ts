'use client'

import { useState, useCallback, useRef } from 'react'
import { MIN_CROP_PX } from '@/lib/crop'

export type AspectPreset = 'free' | '1:1' | '16:9' | '4:3' | '3:2' | '9:16'

// Normalized crop rect: all values are 0–1 relative to image natural dimensions
export interface NormalizedCrop {
  x: number
  y: number
  w: number
  h: number
}

type Handle = 'move' | 'nw' | 'ne' | 'sw' | 'se' | 'n' | 's' | 'e' | 'w'

const PRESET_RATIOS: Record<AspectPreset, number | null> = {
  free: null,
  '1:1': 1,
  '16:9': 16 / 9,
  '4:3': 4 / 3,
  '3:2': 3 / 2,
  '9:16': 9 / 16,
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function fitRatio(startW: number, ratio: number): { w: number; h: number } {
  let w = startW
  let h = w / ratio
  if (h > 1) {
    h = 1
    w = h * ratio
  }
  if (w > 1) {
    w = 1
    h = w / ratio
  }
  return { w, h }
}

export function useCropState(naturalWidth: number, naturalHeight: number) {
  const [crop, setCrop] = useState<NormalizedCrop>({ x: 0, y: 0, w: 1, h: 1 })
  const [preset, setPreset] = useState<AspectPreset>('free')

  const dragRef = useRef<{
    handle: Handle
    startX: number
    startY: number
    startCrop: NormalizedCrop
  } | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)

  const minW = naturalWidth > 0 ? MIN_CROP_PX / naturalWidth : 0.01
  const minH = naturalHeight > 0 ? MIN_CROP_PX / naturalHeight : 0.01

  const applyPreset = useCallback((newPreset: AspectPreset) => {
    setPreset(newPreset)
    const ratio = PRESET_RATIOS[newPreset]
    if (ratio === null) return

    setCrop((prev) => {
      const cx = prev.x + prev.w / 2
      const cy = prev.y + prev.h / 2

      // Try to fit ratio inside current crop, then inside full image
      const fitted = fitRatio(prev.w, ratio)

      const x = clamp(cx - fitted.w / 2, 0, 1 - fitted.w)
      const y = clamp(cy - fitted.h / 2, 0, 1 - fitted.h)

      return { x, y, w: fitted.w, h: fitted.h }
    })
  }, [])

  const startDrag = useCallback(
    (handle: Handle, clientX: number, clientY: number) => {
      dragRef.current = {
        handle,
        startX: clientX,
        startY: clientY,
        startCrop: { ...crop },
      }
    },
    [crop]
  )

  const onDragMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!dragRef.current || !containerRef.current) return
      const { handle, startX, startY, startCrop } = dragRef.current

      const rect = containerRef.current.getBoundingClientRect()
      const dx = (clientX - startX) / rect.width
      const dy = (clientY - startY) / rect.height
      const currentRatio = PRESET_RATIOS[preset]

      setCrop(() => {
        let { x, y } = startCrop
        const { w, h } = startCrop

        if (handle === 'move') {
          x = clamp(x + dx, 0, 1 - w)
          y = clamp(y + dy, 0, 1 - h)
          return { x, y, w, h }
        }

        // Resize handles
        let newX = x
        let newY = y
        let newW = w
        let newH = h

        if (handle === 'nw' || handle === 'w' || handle === 'sw') {
          const maxDx = w - minW
          const actualDx = clamp(dx, -x, maxDx)
          newX = x + actualDx
          newW = w - actualDx
        }
        if (handle === 'ne' || handle === 'e' || handle === 'se') {
          newW = clamp(w + dx, minW, 1 - x)
        }
        if (handle === 'nw' || handle === 'n' || handle === 'ne') {
          const maxDy = h - minH
          const actualDy = clamp(dy, -y, maxDy)
          newY = y + actualDy
          newH = h - actualDy
        }
        if (handle === 'sw' || handle === 's' || handle === 'se') {
          newH = clamp(h + dy, minH, 1 - y)
        }

        // Apply aspect ratio constraint if preset is active
        if (currentRatio !== null) {
          if (handle === 'n' || handle === 's') {
            newW = clamp(newH * currentRatio, minW, 1 - newX)
          } else if (handle === 'e' || handle === 'w') {
            newH = clamp(newW / currentRatio, minH, 1 - newY)
          } else {
            // Corner: lock by width
            newH = clamp(newW / currentRatio, minH, 1 - newY)
            if (newY + newH > 1) {
              newH = 1 - newY
              newW = clamp(newH * currentRatio, minW, 1 - newX)
            }
          }
        }

        return { x: newX, y: newY, w: newW, h: newH }
      })
    },
    [preset, minW, minH]
  )

  const onDragEnd = useCallback(() => {
    dragRef.current = null
  }, [])

  // Mouse handlers
  const onMouseDown = useCallback(
    (handle: Handle) => (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      startDrag(handle, e.clientX, e.clientY)

      const onMove = (ev: MouseEvent) => onDragMove(ev.clientX, ev.clientY)
      const onUp = () => {
        onDragEnd()
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseup', onUp)
      }
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseup', onUp)
    },
    [startDrag, onDragMove, onDragEnd]
  )

  // Touch handlers
  const onTouchStart = useCallback(
    (handle: Handle) => (e: React.TouchEvent) => {
      e.stopPropagation()
      const touch = e.touches[0]
      startDrag(handle, touch.clientX, touch.clientY)

      const onMove = (ev: TouchEvent) => {
        const t = ev.touches[0]
        onDragMove(t.clientX, t.clientY)
      }
      const onEnd = () => {
        onDragEnd()
        window.removeEventListener('touchmove', onMove)
        window.removeEventListener('touchend', onEnd)
      }
      window.addEventListener('touchmove', onMove, { passive: true })
      window.addEventListener('touchend', onEnd)
    },
    [startDrag, onDragMove, onDragEnd]
  )

  // Convert normalized crop → pixel crop rect on the actual image
  const toPixelCrop = useCallback(() => {
    return {
      x: crop.x * naturalWidth,
      y: crop.y * naturalHeight,
      w: crop.w * naturalWidth,
      h: crop.h * naturalHeight,
    }
  }, [crop, naturalWidth, naturalHeight])

  return {
    crop,
    preset,
    containerRef,
    applyPreset,
    onMouseDown,
    onTouchStart,
    toPixelCrop,
  }
}
