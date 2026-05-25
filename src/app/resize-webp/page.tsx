'use client'

import ResizeTool from '@/components/tool/ResizeTool'
import ResizeWebpContentSection from '@/components/tool/ResizeWebpContentSection'

export default function ResizeWebpPage() {
  return (
    <ResizeTool
      h1="Resize WebP Online Free"
      tagline="Change WebP width and height by pixel — WebP format preserved, no upload"
      contentSection={<ResizeWebpContentSection />}
    />
  )
}
