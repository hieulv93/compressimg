'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import Resize1280x720ContentSection from '@/components/tool/Resize1280x720ContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'HD (720p)', w: 1280, h: 720, ratio: '16:9' },
  { label: 'Full HD (1080p)', w: 1920, h: 1080, ratio: '16:9' },
  { label: 'HD Ready', w: 1366, h: 768, ratio: '16:9' },
  { label: 'SD Widescreen', w: 854, h: 480, ratio: '16:9' },
]

export default function ResizeTo1280x720Page() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 1280×720
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select a resolution, upload your image — resized to exact HD dimensions instantly
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <Resize1280x720ContentSection />
      </div>
    </main>
  )
}
