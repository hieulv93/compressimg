interface ProgressBarProps {
  visible: boolean
  quality?: number
}

function getBarColor(quality: number): string {
  if (quality >= 80) return 'bg-green-500'
  if (quality >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

export default function ProgressBar({ visible, quality = 80 }: ProgressBarProps) {
  if (!visible) return null

  return (
    <div role="status" aria-label="Compressing image" className="w-full">
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <div className={`h-full rounded-full animate-pulse-slow origin-left w-full ${getBarColor(quality)}`} />
      </div>
      <p className="sr-only">Compressing image, please wait...</p>
    </div>
  )
}
