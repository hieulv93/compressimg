'use client'

import CropTool from '@/components/tool/CropTool'
import CropToRatioContentSection from '@/components/tool/CropToRatioContentSection'

export default function CropImageToRatioPage() {
  return (
    <CropTool
      h1="Crop Image to Aspect Ratio"
      tagline="Crop to 16:9, 4:3, 3:2, 9:16, or 1:1 — perfect for YouTube, presentations, and social media. Free, private, 100% in your browser"
      contentSection={<CropToRatioContentSection />}
      initialPreset="16:9"
    />
  )
}
