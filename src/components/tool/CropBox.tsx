'use client'

import { useMemo } from 'react'
import type { NormalizedCrop } from '@/hooks/useCropState'
import type { AspectPreset } from '@/hooks/useCropState'

type Handle = 'move' | 'nw' | 'ne' | 'sw' | 'se' | 'n' | 's' | 'e' | 'w'

interface CropBoxProps {
  imageUrl: string
  crop: NormalizedCrop
  containerRef: React.RefObject<HTMLDivElement>
  onMouseDown: (handle: Handle) => (e: React.MouseEvent) => void
  onTouchStart: (handle: Handle) => (e: React.TouchEvent) => void
  preset: AspectPreset
  naturalWidth: number
  naturalHeight: number
  onCrop: () => void
  onReset: () => void
}

const CURSOR_MAP: Record<Handle, string> = {
  move: 'move',
  nw: 'nw-resize',
  ne: 'ne-resize',
  sw: 'sw-resize',
  se: 'se-resize',
  n: 'n-resize',
  s: 's-resize',
  e: 'e-resize',
  w: 'w-resize',
}

// 8 handle positions: [handle, xPercent, yPercent]
const HANDLES: [Handle, string, string][] = [
  ['nw', '0%', '0%'],
  ['n', '50%', '0%'],
  ['ne', '100%', '0%'],
  ['e', '100%', '50%'],
  ['se', '100%', '100%'],
  ['s', '50%', '100%'],
  ['sw', '0%', '100%'],
  ['w', '0%', '50%'],
]

export default function CropBox({
  imageUrl,
  crop,
  containerRef,
  onMouseDown,
  onTouchStart,
  naturalWidth,
  naturalHeight,
  onCrop,
  onReset,
}: CropBoxProps) {
  const cropStyle = useMemo(
    () => ({
      left: `${crop.x * 100}%`,
      top: `${crop.y * 100}%`,
      width: `${crop.w * 100}%`,
      height: `${crop.h * 100}%`,
    }),
    [crop]
  )

  const croppedW = Math.round(crop.w * naturalWidth)
  const croppedH = Math.round(crop.h * naturalHeight)

  return (
    <div className="space-y-3">
      {/* Crop area container */}
      <div
        ref={containerRef}
        className="relative w-full select-none overflow-hidden rounded-xl bg-black"
        style={{ touchAction: 'none' }}
      >
        {/* Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="Image to crop"
          className="block w-full h-auto pointer-events-none"
          draggable={false}
        />

        {/* Dark overlay — box-shadow technique punches through crop area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            left: cropStyle.left,
            top: cropStyle.top,
            width: cropStyle.width,
            height: cropStyle.height,
            boxShadow: '0 0 0 9999px rgba(0,0,0,0.55)',
          }}
        />

        {/* Crop border + move handle */}
        <div
          className="absolute border-2 border-white"
          style={{ ...cropStyle, cursor: CURSOR_MAP['move'] }}
          onMouseDown={onMouseDown('move')}
          onTouchStart={onTouchStart('move')}
        >
          {/* Rule-of-thirds grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-0 right-0 border-t border-white/30" />
            <div className="absolute top-2/3 left-0 right-0 border-t border-white/30" />
            <div className="absolute left-1/3 top-0 bottom-0 border-l border-white/30" />
            <div className="absolute left-2/3 top-0 bottom-0 border-l border-white/30" />
          </div>

          {/* 8 resize handles */}
          {HANDLES.map(([handle, x, y]) => (
            <div
              key={handle}
              className="absolute"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
                width: 44,
                height: 44,
                cursor: CURSOR_MAP[handle],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseDown={onMouseDown(handle)}
              onTouchStart={onTouchStart(handle)}
            >
              <div className="w-3 h-3 bg-white border border-white/80 rounded-sm shadow-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Dimension display + actions */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-sm text-text-muted">
          Crop size:{' '}
          <span className="font-semibold text-text-main">
            {croppedW} × {croppedH} px
          </span>
        </p>

        <div className="flex gap-2">
          <button
            onClick={onReset}
            className="px-4 py-2 rounded-lg border border-border text-text-muted text-sm hover:border-primary hover:text-primary transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onCrop}
            className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Crop Image
          </button>
        </div>
      </div>
    </div>
  )
}
