'use client'

import ResizeTool from '@/components/tool/ResizeTool'
import ResizeQualityContentSection from '@/components/tool/ResizeQualityContentSection'

export default function ResizeImageWithoutLosingQualityPage() {
  return (
    <ResizeTool
      h1="Resize Image Without Losing Quality"
      tagline="Downscale with maximum sharpness — free, private, 100% in your browser"
      contentSection={<ResizeQualityContentSection />}
    />
  )
}
