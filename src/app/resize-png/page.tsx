'use client'

import ResizeTool from '@/components/tool/ResizeTool'
import ResizePngContentSection from '@/components/tool/ResizePngContentSection'

export default function ResizePngPage() {
  return (
    <ResizeTool
      h1="Resize PNG Online Free"
      tagline="Change PNG width and height by pixel — transparency preserved, no upload"
      contentSection={<ResizePngContentSection />}
    />
  )
}
