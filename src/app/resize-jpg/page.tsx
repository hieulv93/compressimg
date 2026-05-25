'use client'

import ResizeTool from '@/components/tool/ResizeTool'
import ResizeJpgContentSection from '@/components/tool/ResizeJpgContentSection'

export default function ResizeJpgPage() {
  return (
    <ResizeTool
      h1="Resize JPG Online Free"
      tagline="Change JPEG width and height by pixel — output stays JPG, no upload"
      contentSection={<ResizeJpgContentSection />}
    />
  )
}
