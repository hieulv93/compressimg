'use client'

import { useCallback } from 'react'
import { MAX_RESIZE_DIMENSION, calcAspectHeight, calcAspectWidth } from '@/lib/resize'

const PRESETS = [
  { label: 'Instagram Post', w: 1080, h: 1080 },
  { label: 'Instagram Story', w: 1080, h: 1920 },
  { label: 'Twitter/X', w: 1500, h: 500 },
  { label: 'YouTube Thumb', w: 1280, h: 720 },
  { label: 'Facebook Cover', w: 851, h: 315 },
  { label: 'Passport Photo', w: 413, h: 531 },
  { label: 'Full HD', w: 1920, h: 1080 },
  { label: '4K', w: 3840, h: 2160 },
]

interface DimensionInputProps {
  width: number
  height: number
  lockAspect: boolean
  originalWidth: number
  originalHeight: number
  disabled?: boolean
  onWidthChange: (w: number) => void
  onHeightChange: (h: number) => void
  onLockToggle: () => void
  onPreset: (w: number, h: number) => void
}

export default function DimensionInput({
  width,
  height,
  lockAspect,
  originalWidth,
  originalHeight,
  disabled = false,
  onWidthChange,
  onHeightChange,
  onLockToggle,
  onPreset,
}: DimensionInputProps) {
  const handleWidthChange = useCallback(
    (val: number) => {
      if (isNaN(val) || val <= 0) return
      const clamped = Math.min(val, MAX_RESIZE_DIMENSION)
      onWidthChange(clamped)
      if (lockAspect && originalWidth && originalHeight) {
        onHeightChange(calcAspectHeight(originalWidth, originalHeight, clamped))
      }
    },
    [lockAspect, originalWidth, originalHeight, onWidthChange, onHeightChange]
  )

  const handleHeightChange = useCallback(
    (val: number) => {
      if (isNaN(val) || val <= 0) return
      const clamped = Math.min(val, MAX_RESIZE_DIMENSION)
      onHeightChange(clamped)
      if (lockAspect && originalWidth && originalHeight) {
        onWidthChange(calcAspectWidth(originalWidth, originalHeight, clamped))
      }
    },
    [lockAspect, originalWidth, originalHeight, onWidthChange, onHeightChange]
  )

  return (
    <div className="space-y-4">
      {/* Width / Height inputs */}
      <div className="flex items-center gap-3">
        <div className="flex-1 space-y-1">
          <label
            htmlFor="resize-width"
            className="text-xs font-medium text-text-muted uppercase tracking-wide"
          >
            Width
          </label>
          <div className="flex items-center gap-1.5 border border-border rounded-lg px-3 bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
            <input
              id="resize-width"
              type="number"
              inputMode="numeric"
              min={1}
              max={MAX_RESIZE_DIMENSION}
              value={width}
              disabled={disabled}
              onChange={(e) => handleWidthChange(parseInt(e.target.value, 10))}
              className="flex-1 py-2.5 text-sm font-medium text-text-main bg-transparent outline-none min-w-0 disabled:opacity-50"
              aria-label="Width in pixels"
            />
            <span className="text-xs text-text-muted flex-shrink-0">px</span>
          </div>
        </div>

        {/* Lock aspect ratio button */}
        <button
          type="button"
          onClick={onLockToggle}
          disabled={disabled}
          aria-label={lockAspect ? 'Unlock aspect ratio' : 'Lock aspect ratio'}
          aria-pressed={lockAspect}
          className={[
            'flex-shrink-0 mt-5 w-9 h-9 rounded-lg border flex items-center justify-center transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
            lockAspect
              ? 'border-primary bg-primary text-white'
              : 'border-border bg-white text-text-muted hover:border-primary hover:text-primary',
            disabled && 'opacity-50 cursor-not-allowed',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <LockIcon locked={lockAspect} />
        </button>

        <div className="flex-1 space-y-1">
          <label
            htmlFor="resize-height"
            className="text-xs font-medium text-text-muted uppercase tracking-wide"
          >
            Height
          </label>
          <div className="flex items-center gap-1.5 border border-border rounded-lg px-3 bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
            <input
              id="resize-height"
              type="number"
              inputMode="numeric"
              min={1}
              max={MAX_RESIZE_DIMENSION}
              value={height}
              disabled={disabled}
              onChange={(e) => handleHeightChange(parseInt(e.target.value, 10))}
              className="flex-1 py-2.5 text-sm font-medium text-text-main bg-transparent outline-none min-w-0 disabled:opacity-50"
              aria-label="Height in pixels"
            />
            <span className="text-xs text-text-muted flex-shrink-0">px</span>
          </div>
        </div>
      </div>

      {/* Presets */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-text-muted uppercase tracking-wide">Quick presets</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              disabled={disabled}
              onClick={() => onPreset(preset.w, preset.h)}
              className={[
                'touch-target px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
                width === preset.w && height === preset.h
                  ? 'border-primary bg-primary text-white'
                  : 'border-border bg-surface text-text-muted hover:border-primary hover:text-primary hover:bg-drag-active',
                disabled && 'opacity-50 cursor-not-allowed',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {preset.label}
              <span className="ml-1 opacity-60">
                {preset.w}×{preset.h}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function LockIcon({ locked }: { locked: boolean }) {
  return locked ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  )
}
