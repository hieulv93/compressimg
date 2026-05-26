'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import PassportResizeContentSection from '@/components/tool/PassportResizeContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [
  { label: 'US Passport', w: 600, h: 600, ratio: '2×2 inch' },
  { label: 'UK / Schengen / India', w: 413, h: 531, ratio: '35×45mm' },
  { label: 'Canada Passport', w: 591, h: 827, ratio: '50×70mm' },
  { label: 'India PAN / Aadhaar', w: 295, h: 413, ratio: '25×35mm' },
]

export default function ResizeImageForPassportPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for Passport
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Select your country, upload your photo — resized instantly to the exact passport
            dimensions
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <PassportResizeContentSection />
      </div>
    </main>
  )
}
