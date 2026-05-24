'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import Resize800x600ContentSection from '@/components/tool/Resize800x600ContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'SVGA (800×600)', w: 800, h: 600, ratio: '4:3' },
  { label: 'XGA (1024×768)', w: 1024, h: 768, ratio: '4:3' },
  { label: 'VGA (640×480)', w: 640, h: 480, ratio: '4:3' },
  { label: 'SXGA (1280×960)', w: 1280, h: 960, ratio: '4:3' },
]

export default function ResizeTo800x600Page() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Resize Image to 800×600</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select a resolution, upload your image — resized to standard web dimensions instantly
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <Resize800x600ContentSection />
      </div>
    </main>
  )
}
