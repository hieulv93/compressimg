import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/add-watermark')

export const metadata: Metadata = {
  title: 'Add Watermark to Image Online Free — Text Overlay',
  description:
    'Add a custom text watermark to any photo instantly. Choose position, opacity, font size, and color. 100% browser-based — your image never leaves your device. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Add Watermark to Image Online Free — Text Overlay',
    description:
      'Add a custom text watermark to photos instantly. Choose position, opacity, font size, and color. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Add Watermark to Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Watermark to Image — Free Online',
    description:
      'Add custom text watermark to photos. Position, opacity, color. Free & browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Add Watermark', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Add Watermark to Image Online Free — Text Overlay',
    description:
      'Add a custom text watermark to any photo instantly. Choose position, opacity, font size, and color. 100% browser-based — your image never leaves your device. Free.',
    faq: [
      {
        question: 'What is a watermark and why add one to photos?',
        answer:
          'A watermark is text or a logo overlaid on an image to identify the creator or owner. Photographers, artists, and content creators add watermarks to protect their work from unauthorized use, to brand their content, and to ensure attribution when images are shared online.',
      },
      {
        question: 'Where should I position my watermark?',
        answer:
          'Bottom-right is the most common position for photography watermarks — it is visible but minimally intrusive. For stock photos or content protection, center placement with medium opacity is harder to crop out. For branding, top-right or bottom-left creates a consistent look across a series of images.',
      },
      {
        question: 'What opacity should I use for a watermark?',
        answer:
          'For subtle branding: 30–50% opacity. For visible protection: 60–80%. For proof-of-concept or client preview images where you want the watermark prominent: 80–100%. Lower opacity looks more professional; higher opacity is harder to remove.',
      },
      {
        question: 'Does the watermark reduce image quality?',
        answer:
          'The watermark is drawn on the image using the Canvas API and exported at JPEG quality 92, which is visually lossless. Only the pixels covered by the watermark text are changed. The rest of the image is pixel-perfect.',
      },
      {
        question: 'Is my photo private when using this tool?',
        answer:
          'Yes. All watermark processing runs entirely in your browser. Your photo is never uploaded to any server. The Canvas API draws the watermark locally on your device.',
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
