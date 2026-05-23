'use client'

import ResizeToKbTool from '@/components/tool/ResizeToKbTool'
import ResizeToKbSubPageSection from '@/components/tool/ResizeToKbSubPageSection'

export default function ResizeTo20KbPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Resize Image to 20KB Online Free
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Automatically reduce any image to under 20KB — SSC signature, UPSC photo, and government
            form uploads. JPEG output, 100% browser-based and private.
          </p>
        </div>

        <ResizeToKbTool defaultTargetKb={20} />

        <ResizeToKbSubPageSection targetKb={20} />
      </div>
    </main>
  )
}
