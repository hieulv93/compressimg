'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import FourBySixContentSection from '@/components/tool/FourBySixContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Portrait 4×6', w: 1200, h: 1800, ratio: '1200×1800px' },
  { label: 'Landscape 4×6', w: 1800, h: 1200, ratio: '1800×1200px' },
]

export default function ResizeImageTo4x6Page() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 4×6 Inch
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Resize any photo to 4×6 inch print size — 1200×1800px portrait or 1800×1200px landscape
            at 300 DPI
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <FourBySixContentSection />
      </div>
    </main>
  )
}
