import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/crop-image-circle')

export const metadata: Metadata = {
  title: 'Crop Image to Circle Online Free — Round Photo Cropper',
  description:
    'Crop any image to a circle with transparent background online free. Perfect for profile pictures, logos, and avatars. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Image to Circle Online Free',
    description:
      'Crop any photo to a circle with transparent background instantly. Perfect for profile pictures and logos. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Crop Image to Circle Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Image to Circle Online Free',
    description: 'Crop photo to a circle with transparent PNG background — free, browser-based.',
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
    name: 'Crop Image to Circle Online Free — Round Photo Cropper',
    description:
      'Crop any image to a circle with transparent background online free. Perfect for profile pictures, logos, and avatars. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'What format is the circle crop output?',
        answer:
          'The circle crop always outputs a PNG file. PNG supports transparency (alpha channel), which is required for the transparent background outside the circle. JPEG does not support transparency.',
      },
      {
        question: 'Can I use the circle crop for a LinkedIn or Facebook profile picture?',
        answer:
          'Yes. Most social platforms display profile pictures in a circle. Upload your photo, crop it using this tool, and upload the resulting PNG. The platform will display it cropped to its circular profile frame.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All cropping happens entirely in your browser using the Canvas API. Your files never leave your device.',
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
