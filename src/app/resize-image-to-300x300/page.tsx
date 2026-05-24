'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import Resize300x300ContentSection from '@/components/tool/Resize300x300ContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Thumbnail 300', w: 300, h: 300, ratio: '1:1' },
  { label: 'Thumbnail 150', w: 150, h: 150, ratio: '1:1' },
  { label: 'Thumbnail 600', w: 600, h: 600, ratio: '1:1' },
  { label: 'Thumbnail 200', w: 200, h: 200, ratio: '1:1' },
]

export default function ResizeTo300x300Page() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Resize Image to 300×300</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select a thumbnail size, upload your image — resized instantly for e-commerce and web
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <Resize300x300ContentSection />
      </div>
    </main>
  )
}
