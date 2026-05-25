'use client'

import ResizeTool from '@/components/tool/ResizeTool'
import ResizeSignatureContentSection from '@/components/tool/ResizeSignatureContentSection'

export default function ResizeSignaturePage() {
  return (
    <ResizeTool
      h1="Resize Signature Online Free"
      tagline="Resize signature to exact pixels for SSC, UPSC, IBPS, Railway forms — no upload, 100% private"
      contentSection={<ResizeSignatureContentSection />}
    />
  )
}
