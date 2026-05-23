'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import LinkedInResizeContentSection from '@/components/tool/LinkedInResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'Post Image', w: 1200, h: 627, ratio: '1.91:1' },
  { label: 'Profile Banner', w: 1584, h: 396, ratio: '4:1' },
  { label: 'Profile Picture', w: 400, h: 400, ratio: '1:1' },
  { label: 'Company Logo', w: 300, h: 300, ratio: '1:1' },
]

export default function ResizeImageForLinkedInPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for LinkedIn
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select your format, upload your photo — resized instantly to exact LinkedIn dimensions
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <LinkedInResizeContentSection />
      </div>
    </main>
  )
}
