'use client'

import CompressTool from '@/components/tool/CompressTool'
import ContentSection from '@/components/tool/ContentSection'

export default function CompressImagePage() {
  return (
    <CompressTool
      h1="Compress Image Online"
      tagline="Reduce image file size instantly — free, private, 100% in your browser"
      contentSection={<ContentSection />}
    />
  )
}
