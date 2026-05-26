'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import TwoByTwoInchContentSection from '@/components/tool/TwoByTwoInchContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: '2×2 inch (US Passport)', w: 600, h: 600, ratio: '600×600px' },
]

export default function ResizeImageTo2x2InchPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 2×2 Inch
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Resize any photo to 600×600px (2×2 inch at 300 DPI) — the US passport and visa standard
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <TwoByTwoInchContentSection />
      </div>
    </main>
  )
}
