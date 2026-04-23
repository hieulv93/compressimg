import type { OutputFormat } from '@/lib/convert'

interface FormatSelectorProps {
  value: OutputFormat
  onChange: (format: OutputFormat) => void
  inputMime?: string
  disabled?: boolean
}

const formats: { mime: OutputFormat; label: string; badge?: string }[] = [
  { mime: 'image/jpeg', label: 'JPG' },
  { mime: 'image/png', label: 'PNG' },
  { mime: 'image/webp', label: 'WebP', badge: 'smaller' },
]

export default function FormatSelector({
  value,
  onChange,
  inputMime,
  disabled,
}: FormatSelectorProps) {
  const isAlphaToJpg =
    (inputMime === 'image/png' || inputMime === 'image/webp') && value === 'image/jpeg'

  return (
    <div className="space-y-2">
      <p className="text-xs text-text-muted font-medium">Convert to</p>
      <div className="flex gap-2 flex-wrap">
        {formats.map(({ mime, label, badge }) => {
          const active = value === mime
          return (
            <button
              key={mime}
              onClick={() => onChange(mime)}
              disabled={disabled}
              aria-pressed={active}
              className={`touch-target relative flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed ${
                active
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-text-muted border-border hover:border-primary hover:text-primary'
              }`}
            >
              {label}
              {badge && (
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                    active ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                  }`}
                >
                  {badge}
                </span>
              )}
            </button>
          )
        })}
      </div>
      {isAlphaToJpg && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
          If your image has transparent areas, they will be filled with a white background — JPG
          does not support transparency.
        </p>
      )}
    </div>
  )
}
