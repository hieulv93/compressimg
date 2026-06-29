import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/tiff-to-png')

export const metadata: Metadata = {
  title: 'TIFF to PNG Converter Online Free — Convert TIF to PNG',
  description:
    'Free online TIFF to PNG converter. Convert TIF and TIFF files to lossless PNG instantly — no upload, 100% browser-based and private. Supports TIFF files up to 20MB.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'TIFF to PNG Converter Online Free',
    description:
      'Convert TIFF and TIF files to lossless PNG instantly. No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TIFF to PNG Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TIFF to PNG Converter Online Free',
    description: 'Convert TIFF to PNG instantly. No uploads — 100% browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'TIFF to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'TIFF to PNG Converter Online Free — Convert TIF to PNG',
    description:
      'Free online TIFF to PNG converter. Convert TIF and TIFF files to lossless PNG instantly — no upload, 100% browser-based and private. Supports TIFF files up to 20MB.',
    faq: [
      {
        question: 'Does converting TIFF to PNG lose quality?',
        answer:
          'No. Both TIFF and PNG are lossless formats. Converting between them introduces zero quality loss — every pixel is reproduced exactly.',
      },
      {
        question: 'Will transparency be preserved when converting TIFF to PNG?',
        answer:
          'Yes. PNG fully supports alpha transparency. If your TIFF contains transparent regions, they are preserved in the PNG output.',
      },
      {
        question: 'Why convert TIFF to PNG instead of JPEG?',
        answer:
          'PNG is lossless like TIFF, so it preserves every pixel exactly. JPEG is lossy and introduces compression artifacts. Convert to PNG when you need lossless output or transparency support. Convert to JPEG when you need a smaller file size for photography.',
      },
      {
        question: 'Are my TIFF files uploaded to a server?',
        answer:
          'No. All conversion happens entirely in your browser. Your files never leave your device.',
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
