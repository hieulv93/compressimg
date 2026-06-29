import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/png-to-gif')

export const metadata: Metadata = {
  title: 'PNG to GIF Converter — Convert PNG to GIF Free Online',
  description:
    'Convert PNG to GIF free online. Turn any PNG image into a GIF file instantly. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG to GIF Converter — Free Online',
    description: 'Convert PNG to GIF instantly. Free, no upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PNG to GIF Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to GIF — Free Online Converter',
    description: 'Convert PNG to GIF free. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'PNG to GIF', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'PNG to GIF Converter — Convert PNG to GIF Free Online',
    description:
      'Convert PNG to GIF free online. Turn any PNG image into a GIF file instantly. No upload — 100% browser-based.',
    faq: [
      {
        question: 'Will the GIF be animated?',
        answer:
          'No. Converting a single PNG creates a static (non-animated) single-frame GIF. To create an animated GIF, you need multiple source images or video frames.',
      },
      {
        question: 'Does PNG to GIF preserve transparency?',
        answer:
          'GIF has limited transparency support — only 1-bit (on/off) transparency, not the full alpha channel that PNG supports. Transparent areas in your PNG are filled with white in the GIF output.',
      },
      {
        question: 'Will the GIF quality look the same as the PNG?',
        answer:
          'GIF is limited to 256 colors, so photographic images may show visible color banding or dithering compared to the original PNG. Simple graphics with few colors convert cleanly.',
      },
      {
        question: 'Are my files uploaded to a server?',
        answer:
          'No. All conversion happens entirely in your browser. Your PNG files are never sent to any server.',
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
