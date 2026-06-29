import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/webp-converter')

export const metadata: Metadata = {
  title: 'WebP Converter Online Free — Convert to & from WebP',
  description:
    'Free online WebP converter. Convert JPG, PNG to WebP or convert WebP back to JPG, PNG. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WebP Converter Online Free — Convert to & from WebP',
    description:
      'Free WebP converter. Convert JPG/PNG to WebP or WebP to JPG/PNG — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebP Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP Converter Online Free',
    description: 'Free WebP converter. Convert to/from WebP — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'WebP Converter', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'WebP Converter Online Free — Convert to & from WebP',
    description:
      'Free online WebP converter. Convert JPG, PNG to WebP or convert WebP back to JPG, PNG. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'How do I convert an image to WebP online for free?',
        answer:
          'Upload your JPG or PNG image, select WebP as the output format, and download the converted file. The conversion runs entirely in your browser — no upload to server, no sign-up, free with no limit.',
      },
      {
        question: 'Why should I convert images to WebP?',
        answer:
          'WebP is 25–35% smaller than JPEG at the same visual quality. Smaller images load faster, use less bandwidth, and improve Google PageSpeed scores. All modern browsers support WebP including Chrome, Firefox, Safari 14+, and Edge.',
      },
      {
        question: 'Can I convert WebP back to JPG?',
        answer:
          'Yes. Upload your .webp file and select JPG as the output format. Use this for email attachments, print workflows, and platforms that do not support WebP such as older Outlook clients.',
      },
      {
        question: 'Does Safari support WebP?',
        answer:
          'Yes. Safari has supported WebP since version 14 (September 2020) on macOS Big Sur and iOS 14. All current iOS and macOS devices display WebP correctly.',
      },
      {
        question: 'Can I use WebP for email?',
        answer:
          'No. Email clients including Gmail, Outlook, and Apple Mail do not reliably render WebP. Always use JPEG for email attachments and inline images.',
      },
      {
        question: 'Is my image uploaded to a server when converting to WebP?',
        answer:
          'No. All conversion runs in your browser using the Canvas API. Your image never leaves your device. Safe for sensitive images including ID documents and personal photos.',
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
