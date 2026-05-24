'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import Resize1080x1080ContentSection from '@/components/tool/Resize1080x1080ContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Square 1080', w: 1080, h: 1080, ratio: '1:1' },
  { label: 'Square 600', w: 600, h: 600, ratio: '1:1' },
  { label: 'Square 400', w: 400, h: 400, ratio: '1:1' },
  { label: 'Square 2000', w: 2000, h: 2000, ratio: '1:1' },
]

export default function ResizeTo1080x1080Page() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 1080×1080
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select a square size, upload your image — resized instantly for Instagram and beyond
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <Resize1080x1080ContentSection />
      </div>
    </main>
  )
}
