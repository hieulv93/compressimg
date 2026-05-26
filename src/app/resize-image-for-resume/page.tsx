'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import ResumeResizeContentSection from '@/components/tool/ResumeResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'LinkedIn Profile', w: 400, h: 400, ratio: '1:1' },
  { label: 'CV / European', w: 300, h: 400, ratio: '3:4' },
  { label: 'Naukri / Portal', w: 200, h: 200, ratio: '1:1' },
  { label: 'Small ID Photo', w: 150, h: 200, ratio: '3:4' },
]

export default function ResizeImageForResumePage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for Resume / CV
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select your platform, upload your photo — resized instantly to the exact dimensions for
            LinkedIn, Naukri, or your CV
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <ResumeResizeContentSection />
      </div>
    </main>
  )
}
