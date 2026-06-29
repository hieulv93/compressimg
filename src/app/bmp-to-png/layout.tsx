import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/bmp-to-png')

export const metadata: Metadata = {
  title: 'BMP to PNG Converter — Convert BMP to PNG Free Online',
  description:
    'Convert BMP to PNG free online. Smaller file size, transparency support, universal compatibility. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'BMP to PNG Converter — Free Online',
    description:
      'Convert BMP to PNG instantly. Smaller file, transparency support. No upload — browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BMP to PNG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMP to PNG — Free Online Converter',
    description: 'Convert BMP to PNG free. Smaller file, better compatibility. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'BMP to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'BMP to PNG Converter — Convert BMP to PNG Free Online',
    description:
      'Convert BMP to PNG free online. Smaller file size, transparency support, universal compatibility. No upload — 100% browser-based.',
    faq: [
      {
        question: 'Why convert BMP to PNG?',
        answer:
          'BMP (Bitmap) is an uncompressed format — files are huge and not suitable for web use. PNG uses lossless compression that typically reduces BMP file size by 60–80% without losing any image quality. PNG also supports transparency and is universally supported on the web, in design tools, and across all platforms.',
      },
      {
        question: 'Does BMP to PNG lose any quality?',
        answer:
          'No. PNG uses lossless compression — every pixel is preserved exactly. The conversion from BMP to PNG never degrades image quality. The only change is that the file is smaller due to compression.',
      },
      {
        question: 'How much smaller will the PNG be compared to BMP?',
        answer:
          'Typically 60–80% smaller. A 10MB BMP often converts to a 1–3MB PNG. The exact reduction depends on image content — solid colors and simple graphics compress more than photos with complex detail.',
      },
      {
        question: 'Does BMP support transparency?',
        answer:
          'BMP has limited transparency support (only in 32-bit BMP with alpha channel). PNG fully supports transparency with a proper alpha channel. If your BMP has transparent areas, they will be preserved in the PNG output.',
      },
      {
        question: 'Are my BMP files uploaded to a server?',
        answer:
          'No. All conversion happens in your browser using the HTML5 Canvas API. Your BMP files are never sent to any server — they stay on your device throughout the process.',
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
