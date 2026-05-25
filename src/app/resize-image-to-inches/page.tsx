'use client'

import ResizeByUnitTool from '@/components/tool/ResizeByUnitTool'
import ResizeToInchesContentSection from '@/components/tool/ResizeToInchesContentSection'

export default function ResizeImageToInchesPage() {
  return (
    <ResizeByUnitTool
      unit="inch"
      h1="Resize Image to Inches Online Free"
      tagline="Enter width and height in inches, choose DPI — download the exact pixel output for print or screen"
      contentSection={<ResizeToInchesContentSection />}
    />
  )
}
