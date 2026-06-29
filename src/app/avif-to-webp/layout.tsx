import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/avif-to-webp')

export const metadata: Metadata = {
  title: 'AVIF to WebP Converter — Convert AVIF to WebP Free Online',
  description:
    'Convert AVIF to WebP free online. Smaller files than PNG, wider browser support than AVIF. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AVIF to WebP Converter — Free Online',
    description:
      'Convert AVIF to WebP instantly. Smaller than PNG, wider support than AVIF. No upload — browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AVIF to WebP Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to WebP — Free Online Converter',
    description: 'Convert AVIF to WebP free. Better compatibility, smaller than PNG. No upload.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'AVIF to WebP', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'AVIF to WebP Converter — Convert AVIF to WebP Free Online',
    description:
      'Convert AVIF to WebP free online. Smaller files than PNG, wider browser support than AVIF. No upload — 100% browser-based.',
    faq: [
      {
        question: 'Why convert AVIF to WebP instead of PNG or JPG?',
        answer:
          'WebP offers a middle ground: smaller file sizes than PNG, better compatibility than AVIF (supported since Chrome 17, Firefox 65, Safari 14), and supports transparency. For web use, WebP is often the best choice when AVIF compatibility is a concern.',
      },
      {
        question: 'Does AVIF to WebP preserve transparency?',
        answer:
          'Yes. Both AVIF and WebP support transparency. This converter preserves the alpha channel — transparent areas in the AVIF remain transparent in the WebP output.',
      },
      {
        question: 'Will the WebP be larger or smaller than the AVIF?',
        answer:
          'WebP is typically larger than AVIF — AVIF has the most efficient compression of any current format. However, WebP is significantly smaller than PNG and slightly smaller than JPEG at equivalent quality, making it a good choice for web delivery.',
      },
      {
        question: 'Which browsers support WebP?',
        answer:
          'WebP is supported in all modern browsers: Chrome 17+, Firefox 65+, Safari 14+, Edge 18+. WebP has much broader compatibility than AVIF, making it a safer choice for web images when you need to support slightly older browsers.',
      },
      {
        question: 'Are my files uploaded to a server?',
        answer:
          'No. All conversion happens entirely in your browser. Your AVIF files are never sent to any server — they stay on your device.',
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
