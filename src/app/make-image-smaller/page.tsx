'use client'

import ResizeTool from '@/components/tool/ResizeTool'
import MakeImageSmallerContentSection from '@/components/tool/MakeImageSmallerContentSection'

export default function MakeImageSmallerPage() {
  return (
    <ResizeTool
      h1="Make Image Smaller Online"
      tagline="Reduce photo file size for email, social media, and web — free, no upload"
      contentSection={<MakeImageSmallerContentSection />}
    />
  )
}
