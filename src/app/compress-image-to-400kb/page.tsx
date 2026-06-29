'use client'

import CompressToTargetTool from '@/components/tool/CompressToTargetTool'
import CompressTo400KbContentSection from '@/components/tool/CompressTo400KbContentSection'

export default function CompressTo400KbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Compress Image to 400KB Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Reduce image file size to under 400KB — for email attachments, web uploads, and platform
            limits
          </p>
        </div>
        <CompressToTargetTool targetKb={400} />
        <CompressTo400KbContentSection />
      </div>
    </main>
  )
}
