import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/heic-to-webp')

export const metadata: Metadata = {
  title: 'HEIC to WebP Converter Online Free — Convert iPhone Photos to WebP',
  description:
    'Free online HEIC to WebP converter. Convert iPhone HEIC photos to WebP instantly — smaller files for web, no upload, 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'HEIC to WebP Converter Online Free',
    description:
      'Convert iPhone HEIC photos to WebP for smaller web-ready files. No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HEIC to WebP Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to WebP Converter Online Free',
    description: 'Convert iPhone HEIC to WebP instantly. No uploads — 100% browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'HEIC to WebP', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'HEIC to WebP Converter Online Free — Convert iPhone Photos to WebP',
    description:
      'Free online HEIC to WebP converter. Convert iPhone HEIC photos to WebP instantly — smaller files for web, no upload, 100% browser-based and private.',
    faq: [
      {
        question: 'Why convert HEIC to WebP instead of JPEG?',
        answer:
          'WebP is 25–35% smaller than JPEG at the same visual quality. For websites, WebP means faster page loads and better Core Web Vitals scores. All modern browsers support WebP, making it the best format for web images.',
      },
      {
        question: 'Does WebP support transparency?',
        answer:
          'Yes. WebP supports full alpha transparency. HEIC photos from iPhone cameras do not contain transparency, so the converted WebP will have a solid (opaque) background.',
      },
      {
        question: 'Will my HEIC photos look different as WebP?',
        answer:
          'At quality 90+ WebP, the output is visually identical to the original HEIC. For web use at quality 80–85, the difference is imperceptible at normal viewing sizes while the file size is significantly smaller.',
      },
      {
        question: 'Are my HEIC files uploaded to a server during conversion?',
        answer:
          'No. All conversion happens entirely in your browser. Your files never leave your device and are never sent to any server.',
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
