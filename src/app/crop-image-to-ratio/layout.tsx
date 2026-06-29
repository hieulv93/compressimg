import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/crop-image-to-ratio')

export const metadata: Metadata = {
  title: 'Crop Image to Aspect Ratio Online Free — 16:9, 4:3, 3:2',
  description:
    'Crop any image to an exact aspect ratio online free — 16:9, 4:3, 3:2, 9:16, or custom. Perfect for YouTube thumbnails, presentations, and social media. No upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Image to Aspect Ratio Online Free',
    description:
      'Crop any image to 16:9, 4:3, 3:2, 9:16, or free ratio instantly. Perfect for YouTube, presentations, and social media. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Crop Image to Aspect Ratio Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Image to Aspect Ratio Online Free',
    description: 'Crop to 16:9, 4:3, 3:2, 9:16 or any ratio — free, browser-based.',
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
    name: 'Crop Image to Aspect Ratio Online Free — 16:9, 4:3, 3:2',
    description:
      'Crop any image to an exact aspect ratio online free — 16:9, 4:3, 3:2, 9:16, or custom. Perfect for YouTube thumbnails, presentations, and social media. No upload.',
    faq: [
      {
        question: 'What aspect ratio should I use for YouTube thumbnails?',
        answer:
          'YouTube thumbnails use a 16:9 aspect ratio at 1280×720 pixels (minimum) or 1920×1080 pixels (recommended). This tool presets to 16:9 to make thumbnail cropping easy.',
      },
      {
        question: 'What aspect ratio is Instagram?',
        answer:
          'Instagram posts support three ratios: 1:1 (square), 4:5 (portrait), and 16:9 (landscape). The most common is 1:1 square at 1080×1080px. Use the 1:1 ratio button for square Instagram posts.',
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
