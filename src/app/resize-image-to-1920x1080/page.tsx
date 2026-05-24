'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import Resize1920x1080ContentSection from '@/components/tool/Resize1920x1080ContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Full HD (1080p)', w: 1920, h: 1080, ratio: '16:9' },
  { label: '4K UHD (2160p)', w: 3840, h: 2160, ratio: '16:9' },
  { label: 'HD (720p)', w: 1280, h: 720, ratio: '16:9' },
  { label: 'Presentation', w: 1366, h: 768, ratio: '16:9' },
]

export default function ResizeTo1920x1080Page() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 1920×1080
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select a resolution, upload your image — resized to exact Full HD dimensions instantly
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <Resize1920x1080ContentSection />
      </div>
    </main>
  )
}
