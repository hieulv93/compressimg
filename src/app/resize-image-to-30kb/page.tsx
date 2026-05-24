'use client'

import ResizeToKbTool from '@/components/tool/ResizeToKbTool'
import ResizeToKbSubPageSection from '@/components/tool/ResizeToKbSubPageSection'

export default function ResizeTo30KbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 30KB Online Free
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Automatically reduce any image to under 30KB — SSC, IBPS, UPSC, and government exam
            signature uploads. JPEG output, 100% browser-based and private.
          </p>
        </div>

        <ResizeToKbTool defaultTargetKb={30} />

        <ResizeToKbSubPageSection targetKb={30} />
      </div>
    </main>
  )
}
