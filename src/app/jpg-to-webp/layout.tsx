import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/jpg-to-webp')

export const metadata: Metadata = {
  title: 'JPG to WebP Converter Online Free — Convert JPEG to WebP',
  description:
    'Free online JPG to WebP converter. Convert JPEG to WebP and reduce file size by 25–35% with no quality loss. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'JPG to WebP Converter Online Free',
    description:
      'Convert JPG and JPEG files to WebP — reduce file size by 25–35% with no visible quality loss. No uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JPG to WebP Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to WebP Converter Online Free',
    description: 'Convert JPG to WebP and save 25–35% file size. No uploads — 100% browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'JPG to WebP', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'JPG to WebP Converter Online Free — Convert JPEG to WebP',
    description:
      'Free online JPG to WebP converter. Convert JPEG to WebP and reduce file size by 25–35% with no quality loss. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'How much smaller is WebP compared to JPG?',
        answer:
          'WebP is typically 25–35% smaller than JPG at equivalent visual quality. For a typical 500KB JPG photo, the WebP equivalent is around 325–375KB. The exact savings depend on image content — photos with fine detail or gradients benefit most from WebP compression.',
      },
      {
        question: 'Does converting JPG to WebP lose quality?',
        answer:
          'At default quality settings, the quality difference between a JPG and its WebP conversion is virtually invisible to the human eye, while file size drops significantly. Both formats use lossy compression, so some minimal re-encoding loss occurs. For best results, convert from the original source rather than re-converting multiple times.',
      },
      {
        question: 'Is WebP supported in all browsers?',
        answer:
          'WebP is supported in all modern browsers: Chrome, Firefox, Safari 14+, Edge, and Opera. Global browser support exceeds 95% as of 2025. The main exceptions are very old browsers (IE11, Safari before 2020) and some email clients (Outlook 2019 and earlier).',
      },
      {
        question: 'Can I use WebP images for email?',
        answer:
          'Not recommended. Many email clients — including older Outlook versions and some corporate email systems — do not display WebP images correctly. For email attachments and newsletter images, use JPG for universal compatibility.',
      },
      {
        question: 'Does WebP support transparency like PNG?',
        answer:
          'Yes. WebP supports an alpha channel (transparency), making it a potential replacement for PNG on the web. When you convert a JPG to WebP, the output does not have transparency since JPG has no alpha channel. To get a WebP with transparency, start from a PNG with transparent areas.',
      },
      {
        question: 'Can I convert JPG to WebP on mobile?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers. Tap to select a photo from your camera roll, and the WebP file downloads directly to your device. No app installation required.',
      },
      {
        question: 'What software opens WebP files?',
        answer:
          'All modern browsers open WebP natively. On Windows, Photos app (Windows 10 v1809+) and Paint 3D support WebP. On macOS, Preview supports WebP from macOS Ventura (2022). Photoshop added native WebP support in version 23.2 (2022). For older software, convert WebP back to JPG using our WebP to JPG tool.',
      },
      {
        question: 'Are my JPG files uploaded when converting to WebP?',
        answer:
          'No. All conversion happens entirely in your browser using the Canvas API. Your JPG files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone.',
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
