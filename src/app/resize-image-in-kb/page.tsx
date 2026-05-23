'use client'

import ResizeToKbTool from '@/components/tool/ResizeToKbTool'
import ResizeInKbContentSection from '@/components/tool/ResizeInKbContentSection'

export default function ResizeImageInKbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image in KB — Free Online
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Set a target size — 20KB, 50KB, 100KB, 200KB, 500KB — and resize automatically. JPEG
            output, 100% browser-based and private.
          </p>
        </div>

        <ResizeToKbTool defaultTargetKb={100} />

        <ResizeInKbContentSection />
      </div>
    </main>
  )
}
