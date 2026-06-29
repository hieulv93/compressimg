import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/enlarge-image')

export const metadata: Metadata = {
  title: 'Enlarge Image Online Free — Upscale Without Blur',
  description:
    'Enlarge images online free. Upscale JPG, PNG, WebP to larger dimensions for print, presentations, and display. No upload, 100% browser-based. Free with no limits.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Enlarge Image Online Free — Upscale JPG, PNG, WebP',
    description:
      'Upscale images to larger dimensions for print and display. Free, no upload required.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Enlarge Image Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enlarge Image Online Free',
    description: 'Upscale JPG, PNG, WebP to larger dimensions. Free, browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Enlarge Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Enlarge Image Online Free — Upscale Without Blur',
    description:
      'Enlarge images online free. Upscale JPG, PNG, WebP to larger dimensions for print, presentations, and display. No upload, 100% browser-based. Free with no limits.',
    faq: [
      {
        question: 'Can I enlarge an image without losing quality?',
        answer:
          'Basic enlargement using Canvas interpolation (what this tool does) works well up to 1.5–2× the original size. Beyond 2×, AI-based upscalers produce sharper results by predicting new pixel detail. For print use, always start from the highest-resolution original available.',
      },
      {
        question: 'What is the maximum size I can enlarge to?',
        answer:
          'The maximum output dimension is 8000×8000 pixels. If you need an even larger output, reduce quality expectations or use a dedicated AI upscaler.',
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
