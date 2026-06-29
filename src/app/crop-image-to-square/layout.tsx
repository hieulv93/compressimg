import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/crop-image-to-square')

export const metadata: Metadata = {
  title: 'Crop Image to Square Online Free — 1:1 Photo Cropper',
  description:
    'Crop any image to a perfect square (1:1) online free. Ideal for Instagram, profile photos, and thumbnails. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Image to Square Online Free',
    description:
      'Crop any image to a perfect 1:1 square instantly. Perfect for Instagram, profile photos, and thumbnails. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Crop Image to Square Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Image to Square Online Free',
    description: 'Crop any photo to a perfect square — 1:1 ratio, free, browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Crop Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Crop Image to Square Online Free — 1:1 Photo Cropper',
    description:
      'Crop any image to a perfect square (1:1) online free. Ideal for Instagram, profile photos, and thumbnails. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'What size is a square crop for Instagram?',
        answer:
          'Instagram square posts are 1080×1080 pixels (1:1 ratio). This tool crops your photo to a 1:1 square — the resulting pixel dimensions depend on how much of your original image you select. For best Instagram quality, start from a photo that is at least 1080px on its shorter side.',
      },
      {
        question: 'Will cropping to square reduce image quality?',
        answer:
          'No. Cropping only removes pixels outside the selection — it does not resample or compress the remaining area. The output quality is identical to the original within the crop rectangle.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All cropping happens entirely in your browser. Your files never leave your device.',
      },
    ],
  },
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />}
      {children}
    </>
  )
}
