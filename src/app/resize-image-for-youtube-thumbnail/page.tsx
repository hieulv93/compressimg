'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import YouTubeThumbnailResizeContentSection from '@/components/tool/YouTubeThumbnailResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Thumbnail', w: 1280, h: 720, ratio: '16:9' },
  { label: 'Channel Art', w: 2560, h: 1440, ratio: '16:9' },
  { label: 'Profile', w: 800, h: 800, ratio: '1:1' },
  { label: 'Community Post', w: 1080, h: 1080, ratio: '1:1' },
]

export default function ResizeImageForYouTubePage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for YouTube
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Perfect 1280×720 thumbnails and channel art — free, instant, no upload
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <YouTubeThumbnailResizeContentSection />
      </div>
    </main>
  )
}
