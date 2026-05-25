'use client'

import CompressTool from '@/components/tool/CompressTool'
import CompressForWordPressContentSection from '@/components/tool/CompressForWordPressContentSection'

export default function CompressForWordPressPage() {
  return (
    <CompressTool
      h1="Compress Images for WordPress — Free, No Upload"
      tagline="Reduce image file size before uploading to WordPress — faster page speed, better PageSpeed score, 100% browser-based."
      contentSection={<CompressForWordPressContentSection />}
      defaultQuality={80}
    />
  )
}
