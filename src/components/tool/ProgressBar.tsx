interface ProgressBarProps {
  visible: boolean
  quality?: number
  color?: string
  label?: string
}

function getBarColor(quality?: number, color?: string): string {
  if (color) return color
  if (quality === undefined) return 'bg-primary'
  if (quality >= 80) return 'bg-green-500'
  if (quality >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

export default function ProgressBar({
  visible,
  quality,
  color,
  label = 'Compressing image',
}: ProgressBarProps) {
  if (!visible) return null

  return (
    <div role="status" aria-label={label} className="w-full">
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full animate-pulse-slow origin-left w-full ${getBarColor(quality, color)}`}
        />
      </div>
      <p className="sr-only">{label}, please wait...</p>
    </div>
  )
}
