'use client'

import CropTool from '@/components/tool/CropTool'
import CropCircleContentSection from '@/components/tool/CropCircleContentSection'

export default function CropImageCirclePage() {
  return (
    <CropTool
      h1="Crop Image to Circle Online"
      tagline="Crop any photo to a perfect circle with transparent background — ideal for profile pictures and logos. Free, private, 100% in your browser"
      contentSection={<CropCircleContentSection />}
      initialPreset="1:1"
      hidePresets
      circleOutput
    />
  )
}
