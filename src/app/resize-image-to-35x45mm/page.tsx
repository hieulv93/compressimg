'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import ThirtyFiveByFortyFiveMmContentSection from '@/components/tool/ThirtyFiveByFortyFiveMmContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [{ label: '35×45mm Passport', w: 413, h: 531, ratio: '413×531px' }]

export default function ResizeImageTo35x45mmPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Resize Image to 35×45mm</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Resize any photo to 413×531px (35×45mm at 300 DPI) — the standard for UK, Schengen,
            India, and Japan passport
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <ThirtyFiveByFortyFiveMmContentSection />
      </div>
    </main>
  )
}
