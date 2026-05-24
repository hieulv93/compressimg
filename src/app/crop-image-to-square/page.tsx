'use client'

import CropTool from '@/components/tool/CropTool'
import CropToSquareContentSection from '@/components/tool/CropToSquareContentSection'

export default function CropImageToSquarePage() {
  return (
    <CropTool
      h1="Crop Image to Square Online"
      tagline="Crop any photo to a perfect 1:1 square — ideal for Instagram, profiles, and thumbnails. Free, private, 100% in your browser"
      contentSection={<CropToSquareContentSection />}
      initialPreset="1:1"
    />
  )
}
