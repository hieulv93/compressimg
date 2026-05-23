'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import InstagramResizeContentSection from '@/components/tool/InstagramResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Portrait Post', w: 1080, h: 1350, ratio: '4:5' },
  { label: 'Square Post', w: 1080, h: 1080, ratio: '1:1' },
  { label: 'Story / Reel', w: 1080, h: 1920, ratio: '9:16' },
  { label: 'Landscape Post', w: 1080, h: 566, ratio: '1.91:1' },
]

export default function ResizeImageForInstagramPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for Instagram
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select your format, upload your photo — resized instantly to exact Instagram dimensions
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <InstagramResizeContentSection />
      </div>
    </main>
  )
}
