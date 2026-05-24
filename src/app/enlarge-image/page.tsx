'use client'

import ResizeTool from '@/components/tool/ResizeTool'
import EnlargeImageContentSection from '@/components/tool/EnlargeImageContentSection'

export default function EnlargeImagePage() {
  return (
    <ResizeTool
      h1="Enlarge Image Online Free"
      tagline="Upscale JPG, PNG, WebP to larger dimensions — free, no upload, instant results"
      contentSection={<EnlargeImageContentSection />}
    />
  )
}
