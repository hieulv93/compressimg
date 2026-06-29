'use client'

import CompressToTargetTool from '@/components/tool/CompressToTargetTool'
import CompressTo200KbContentSection from '@/components/tool/CompressTo200KbContentSection'

export default function CompressTo200KbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Compress Image to 200KB Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Reduce JPG, PNG, or WebP to under 200KB — free, private, 100% in your browser
          </p>
        </div>
        <CompressToTargetTool targetKb={200} />
        <CompressTo200KbContentSection />
      </div>
    </main>
  )
}
