'use client'

import PlatformResizeTool from '@/components/tool/PlatformResizeTool'
import SixHundredSquareContentSection from '@/components/tool/SixHundredSquareContentSection'
import type { ResizePreset } from '@/components/tool/PlatformResizeTool'

const PRESETS: ResizePreset[] = [{ label: '600×600px', w: 600, h: 600, ratio: '1:1' }]

export default function ResizeImageTo600x600Page() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 600×600 Pixels
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Resize any image to exactly 600×600px — US passport photo, WooCommerce thumbnail, eBay
            listing, and more
          </p>
        </div>

        <PlatformResizeTool presets={PRESETS} defaultPreset={PRESETS[0]} />

        <SixHundredSquareContentSection />
      </div>
    </main>
  )
}
