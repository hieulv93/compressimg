'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import ResizeHeicContentSection from '@/components/tool/ResizeHeicContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Full HD', w: 1920, h: 1080, ratio: '16:9' },
  { label: 'Web', w: 1280, h: 720, ratio: '16:9' },
  { label: 'Instagram', w: 1080, h: 1080, ratio: '1:1' },
  { label: 'Email', w: 800, h: 600, ratio: '4:3' },
]

export default function ResizeHeicPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize HEIC Image Online Free
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Upload iPhone .heic photo → resize → download as JPEG. No software, no upload.
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <ResizeHeicContentSection />
      </div>
    </main>
  )
}
