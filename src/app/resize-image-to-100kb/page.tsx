'use client'

import ResizeToKbTool from '@/components/tool/ResizeToKbTool'
import ResizeToKbSubPageSection from '@/components/tool/ResizeToKbSubPageSection'

export default function ResizeTo100KbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 100KB Online Free
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Automatically reduce any image to under 100KB — resume photos, Naukri, LinkedIn, and
            IBPS bank job portals. JPEG output, 100% browser-based and private.
          </p>
        </div>

        <ResizeToKbTool defaultTargetKb={100} />

        <ResizeToKbSubPageSection targetKb={100} />
      </div>
    </main>
  )
}
