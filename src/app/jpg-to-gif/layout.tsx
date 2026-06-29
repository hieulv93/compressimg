import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/jpg-to-gif')

export const metadata: Metadata = {
  title: 'JPG to GIF Converter — Convert JPEG to GIF Free Online',
  description:
    'Convert JPG to GIF free online. Turn any JPEG photo into a GIF file instantly. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'JPG to GIF Converter — Free Online',
    description: 'Convert JPG to GIF instantly. Free, no upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JPG to GIF Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to GIF — Free Online Converter',
    description: 'Convert JPG to GIF free. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'JPG to GIF', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'JPG to GIF Converter — Convert JPEG to GIF Free Online',
    description:
      'Convert JPG to GIF free online. Turn any JPEG photo into a GIF file instantly. No upload — 100% browser-based.',
    faq: [
      {
        question: 'Will the GIF be animated?',
        answer:
          'No. Converting a single JPG creates a static (non-animated) single-frame GIF. To create an animated GIF, you need multiple source images or frames.',
      },
      {
        question: 'Will the GIF look the same quality as the JPG?',
        answer:
          'GIF is limited to 256 colors, while JPEG supports millions of colors. Photographic images often show visible color banding or dithering in GIF. For photos, JPG or WebP is a better format — GIF is best for simple graphics.',
      },
      {
        question: 'Why is GIF worse than JPG for photos?',
        answer:
          'GIF was designed in 1987 for simple web graphics, not photographs. Its 256-color limit causes visible color reduction on photographic images. JPEG handles millions of colors and is always the better choice for photos.',
      },
      {
        question: 'Are my files uploaded to a server?',
        answer:
          'No. All conversion happens entirely in your browser. Your JPG files are never sent to any server.',
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
