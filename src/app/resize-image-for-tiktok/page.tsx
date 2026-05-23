'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import TikTokResizeContentSection from '@/components/tool/TikTokResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Video Cover', w: 1080, h: 1920, ratio: '9:16' },
  { label: 'Profile Picture', w: 200, h: 200, ratio: '1:1' },
  { label: 'Square Post', w: 1080, h: 1080, ratio: '1:1' },
  { label: 'Landscape', w: 1920, h: 1080, ratio: '16:9' },
]

export default function ResizeImageForTikTokPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Resize Image for TikTok</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select your format, upload your photo — resized instantly to exact TikTok dimensions
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <TikTokResizeContentSection />
      </div>
    </main>
  )
}
