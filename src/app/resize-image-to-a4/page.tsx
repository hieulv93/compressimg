'use client'

import ResizeByUnitTool from '@/components/tool/ResizeByUnitTool'
import ResizeToA4ContentSection from '@/components/tool/ResizeToA4ContentSection'

export default function ResizeImageToA4Page() {
  return (
    <ResizeByUnitTool
      unit="cm"
      h1="Resize Image to A4 Size Online Free"
      tagline="Choose DPI and orientation — resize any photo or image to exact A4 pixel dimensions for print or PDF"
      contentSection={<ResizeToA4ContentSection />}
      fixedPreset={{ width: 21, height: 29.7, label: 'A4 (21 × 29.7 cm)' }}
    />
  )
}
