'use client'

import ResizeToKbTool from '@/components/tool/ResizeToKbTool'
import ResizeImageForOnlineFormContentSection from '@/components/tool/ResizeImageForOnlineFormContentSection'

export default function ResizeImageForOnlineFormPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image for Online Form
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Set a target file size in KB — upload your photo or signature — download instantly.
            Meets government portal and exam application limits.
          </p>
        </div>

        <ResizeToKbTool defaultTargetKb={50} />

        <ResizeImageForOnlineFormContentSection />
      </div>
    </main>
  )
}
