'use client'

interface QualitySliderProps {
  value: number
  onChange: (value: number) => void
  disabled?: boolean
}



export default function QualitySlider({ value, onChange, disabled = false }: QualitySliderProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="quality-slider" className="text-sm font-medium text-text-main">
          Quality
        </label>
        <span className="text-sm font-semibold tabular-nums text-primary" aria-live="polite">
          {value}%
        </span>
      </div>
      <input
        id="quality-slider"
        type="range"
        min={1}
        max={100}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        style={{
          background: `linear-gradient(to right, #D1D5DD ${value}%, #E5E7EB ${value}%)`,
        }}
        className={[
          'w-full touch-target cursor-pointer',
          'h-2 rounded-full appearance-none',
          disabled && 'opacity-50 cursor-not-allowed',
        ].filter(Boolean).join(' ')}
        aria-label={`Image quality: ${value}%`}
        aria-valuemin={1}
        aria-valuemax={100}
        aria-valuenow={value}
      />
      <div className="flex justify-between text-xs text-text-muted mt-1">
        <span>Smaller file</span>
        <span>Better quality</span>
      </div>
    </div>
  )
}
