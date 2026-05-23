'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import TwitterResizeContentSection from '@/components/tool/TwitterResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Post Image', w: 1200, h: 675, ratio: '16:9' },
  { label: 'Header', w: 1500, h: 500, ratio: '3:1' },
  { label: 'Profile Picture', w: 400, h: 400, ratio: '1:1' },
  { label: 'Twitter Card', w: 1200, h: 628, ratio: '1.91:1' },
]

export default function ResizeImageForTwitterPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for Twitter / X
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select your format, upload your photo — resized instantly to exact Twitter dimensions
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <TwitterResizeContentSection />
      </div>
    </main>
  )
}
