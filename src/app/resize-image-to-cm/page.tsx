'use client'

import ResizeByUnitTool from '@/components/tool/ResizeByUnitTool'
import ResizeToCmContentSection from '@/components/tool/ResizeToCmContentSection'

export default function ResizeImageToCmPage() {
  return (
    <ResizeByUnitTool
      unit="cm"
      h1="Resize Image to Centimeters Online Free"
      tagline="Enter width and height in cm, choose DPI — download the exact pixel output for print or screen"
      contentSection={<ResizeToCmContentSection />}
    />
  )
}
