'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import FacebookResizeContentSection from '@/components/tool/FacebookResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Post Image', w: 1200, h: 630, ratio: '1.91:1' },
  { label: 'Cover Photo', w: 820, h: 312, ratio: '~2.63:1' },
  { label: 'Story', w: 1080, h: 1920, ratio: '9:16' },
  { label: 'Profile Picture', w: 170, h: 170, ratio: '1:1' },
]

export default function ResizeImageForFacebookPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for Facebook
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select your format, upload your photo — resized instantly to exact Facebook dimensions
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <FacebookResizeContentSection />
      </div>
    </main>
  )
}
