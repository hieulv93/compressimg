import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/webp-to-gif')

export const metadata: Metadata = {
  title: 'WebP to GIF Converter — Convert WebP to GIF Free Online',
  description:
    'Convert WebP to GIF free online. Turn any WebP image into a GIF file instantly. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WebP to GIF Converter — Free Online',
    description: 'Convert WebP to GIF instantly. Free, no upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebP to GIF Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to GIF — Free Online Converter',
    description: 'Convert WebP to GIF free. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'WebP to GIF', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'WebP to GIF Converter — Convert WebP to GIF Free Online',
    description:
      'Convert WebP to GIF free online. Turn any WebP image into a GIF file instantly. No upload — 100% browser-based.',
    faq: [
      {
        question: 'Can it convert animated WebP to animated GIF?',
        answer:
          'This tool converts static WebP images to static GIF. Animated WebP to animated GIF conversion is complex and requires extracting individual frames — this tool does not currently support animated WebP input.',
      },
      {
        question: 'Does WebP to GIF preserve transparency?',
        answer:
          'GIF has limited transparency support (1-bit, on/off only). Transparent areas in your WebP are filled with white in the GIF output. If transparency preservation is important, convert to PNG instead.',
      },
      {
        question: 'Will the GIF be larger than the WebP?',
        answer:
          'Yes. GIF is significantly less efficient than WebP. The GIF output will typically be 2–5× larger than the original WebP file. GIF is best used for compatibility with older platforms that do not support WebP.',
      },
      {
        question: 'Are my files uploaded to a server?',
        answer:
          'No. All conversion happens entirely in your browser. Your WebP files are never sent to any server.',
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
