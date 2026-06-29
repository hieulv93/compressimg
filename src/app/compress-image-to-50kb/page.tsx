'use client'

import CompressToTargetTool from '@/components/tool/CompressToTargetTool'
import CompressTo50KbContentSection from '@/components/tool/CompressTo50KbContentSection'

export default function CompressTo50KbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Compress Image to 50KB Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Reduce image file size to under 50KB — for government portals, exam registration, and
            official forms
          </p>
        </div>
        <CompressToTargetTool targetKb={50} />
        <CompressTo50KbContentSection />
      </div>
    </main>
  )
}
