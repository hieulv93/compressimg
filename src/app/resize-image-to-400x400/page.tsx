'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import Resize400x400ContentSection from '@/components/tool/Resize400x400ContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Profile 400', w: 400, h: 400, ratio: '1:1' },
  { label: 'Profile 200', w: 200, h: 200, ratio: '1:1' },
  { label: 'Profile 512', w: 512, h: 512, ratio: '1:1' },
  { label: 'Profile 256', w: 256, h: 256, ratio: '1:1' },
]

export default function ResizeTo400x400Page() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Resize Image to 400×400</h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select a size, upload your image — resized instantly for profile pictures and avatars
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <Resize400x400ContentSection />
      </div>
    </main>
  )
}
