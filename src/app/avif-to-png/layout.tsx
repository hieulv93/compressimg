import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/avif-to-png')

export const metadata: Metadata = {
  title: 'AVIF to PNG Converter — Convert AVIF to PNG Free Online',
  description:
    'Convert AVIF to PNG free online. Preserve transparency and full quality — no upload, 100% browser-based. Works on Chrome, Firefox, and Safari.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AVIF to PNG Converter — Free Online',
    description:
      'Convert AVIF to PNG instantly. Preserve transparency. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AVIF to PNG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to PNG — Free Online Converter',
    description: 'Convert AVIF to PNG free. Preserve transparency. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'AVIF to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'AVIF to PNG Converter — Convert AVIF to PNG Free Online',
    description:
      'Convert AVIF to PNG free online. Preserve transparency and full quality — no upload, 100% browser-based. Works on Chrome, Firefox, and Safari.',
    faq: [
      {
        question: 'Why convert AVIF to PNG?',
        answer:
          'AVIF is not supported in all software, older image editors, or some platforms. PNG is universally supported everywhere. Use PNG when you need lossless quality, transparency support, or maximum compatibility with design tools.',
      },
      {
        question: 'Does AVIF to PNG preserve transparency?',
        answer:
          'Yes. Both AVIF and PNG support transparency (alpha channel). This converter preserves the alpha channel during conversion — transparent areas in the AVIF will remain transparent in the PNG output.',
      },
      {
        question: 'Will the PNG file be larger than the AVIF?',
        answer:
          'Yes — PNG is a lossless format, so PNG files are typically larger than AVIF. A 500KB AVIF may convert to a 2–5MB PNG. If file size matters, consider converting to WebP or JPG instead, or compress the PNG afterwards.',
      },
      {
        question: 'Which browsers support AVIF?',
        answer:
          'AVIF is supported in Chrome 85+, Firefox 93+, and Safari 16+ (iOS 16 / macOS Ventura). This tool requires one of these browsers to decode AVIF files. If you are on an unsupported browser, upgrade to convert AVIF.',
      },
      {
        question: 'Are my AVIF files uploaded to a server?',
        answer:
          'No. All conversion happens in your browser using the HTML5 Canvas API. Your files are never sent to any server — they stay on your device throughout the process.',
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
