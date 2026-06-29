'use client'

import CompressToTargetTool from '@/components/tool/CompressToTargetTool'
import CompressTo4MbContentSection from '@/components/tool/CompressTo4MbContentSection'

export default function CompressTo4MbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Compress Image to 4MB Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Reduce JPG, PNG, or WebP to under 4MB — free, private, 100% in your browser
          </p>
        </div>
        <CompressToTargetTool targetKb={4096} />
        <CompressTo4MbContentSection />
      </div>
    </main>
  )
}
