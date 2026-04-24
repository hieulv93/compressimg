'use client'

import type { AspectPreset } from '@/hooks/useCropState'

interface CropPresetsProps {
  value: AspectPreset
  onChange: (preset: AspectPreset) => void
  disabled?: boolean
}

const PRESETS: { value: AspectPreset; label: string }[] = [
  { value: 'free', label: 'Free' },
  { value: '1:1', label: '1:1' },
  { value: '16:9', label: '16:9' },
  { value: '4:3', label: '4:3' },
  { value: '3:2', label: '3:2' },
  { value: '9:16', label: '9:16' },
]

export default function CropPresets({ value, onChange, disabled }: CropPresetsProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-text-muted shrink-0">Ratio:</span>
      <div className="flex gap-1.5 flex-wrap">
        {PRESETS.map((preset) => (
          <button
            key={preset.value}
            onClick={() => onChange(preset.value)}
            disabled={disabled}
            className={[
              'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors min-h-[36px]',
              'border disabled:opacity-50 disabled:cursor-not-allowed',
              value === preset.value
                ? 'bg-primary text-white border-primary'
                : 'bg-surface text-text-muted border-border hover:border-primary hover:text-primary',
            ].join(' ')}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  )
}
