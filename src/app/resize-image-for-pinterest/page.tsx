'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import PinterestResizeContentSection from '@/components/tool/PinterestResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Standard Pin', w: 1000, h: 1500, ratio: '2:3' },
  { label: 'Square Pin', w: 1000, h: 1000, ratio: '1:1' },
  { label: 'Long Pin', w: 1000, h: 2100, ratio: '1:2.1' },
  { label: 'Infographic', w: 1000, h: 3000, ratio: '1:3' },
]

export default function ResizeImageForPinterestPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for Pinterest
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select your pin format, upload your image — resized instantly to exact Pinterest
            dimensions
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <PinterestResizeContentSection />
      </div>
    </main>
  )
}
