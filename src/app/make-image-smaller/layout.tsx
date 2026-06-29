import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/make-image-smaller')

export const metadata: Metadata = {
  title: 'Make Image Smaller Online Free — Reduce Photo Size',
  description:
    'Make images smaller online free. Reduce photo file size for email, social media, and web uploads by resizing or compressing. JPG, PNG, WebP, HEIC supported. No upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Make Image Smaller Online Free — Reduce Photo Size',
    description:
      'Reduce image file size for email, web, and social media. Resize or compress — free, no upload.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Make Image Smaller Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make Image Smaller Online Free',
    description: 'Reduce photo file size for email, social media, and web. Free, browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Make Image Smaller', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Make Image Smaller Online Free — Reduce Photo Size',
    description:
      'Make images smaller online free. Reduce photo file size for email, social media, and web uploads by resizing or compressing. JPG, PNG, WebP, HEIC supported. No upload.',
    faq: [
      {
        question: 'What is the best way to make an image smaller?',
        answer:
          'Two methods work: resize (reduce pixel dimensions) or compress (reduce quality). Resizing reduces file size by removing pixels — best when the image is larger than it needs to be for its use. Compression reduces file size while keeping dimensions — best when you need a specific display size but a smaller file.',
      },
      {
        question: 'How do I make an image smaller for email?',
        answer:
          'Resize to 1200px wide maximum, then compress to quality 80. Most email clients display images at 600–800px — larger images are wasted bandwidth. Target under 1MB total for email attachments.',
      },
      {
        question: 'How do I make a photo smaller without losing quality?',
        answer:
          'Downscaling (making smaller) preserves quality well. Reducing from 4000px to 1920px removes pixels you cannot see on most screens. Use PNG output for lossless results, or JPEG at quality 85 for photos.',
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
