'use client'

import CompressToTargetTool from '@/components/tool/CompressToTargetTool'
import CompressTo800KbContentSection from '@/components/tool/CompressTo800KbContentSection'

export default function CompressTo800KbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Compress Image to 800KB Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Reduce image file size to under 800KB — for email, social media, and web platform limits
          </p>
        </div>
        <CompressToTargetTool targetKb={800} />
        <CompressTo800KbContentSection />
      </div>
    </main>
  )
}
