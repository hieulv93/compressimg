import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/png-to-webp')

export const metadata: Metadata = {
  title: 'PNG to WebP Converter Online Free — Convert PNG to WebP',
  description:
    'Free online PNG to WebP converter. Convert PNG to WebP instantly — 26–80% smaller, preserves transparency, no upload, 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG to WebP Converter Online Free',
    description:
      'Convert PNG files to WebP — 26–80% smaller, preserves transparency, works in all modern browsers. No uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PNG to WebP Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to WebP Converter Online Free',
    description:
      'Convert PNG to WebP instantly. Preserves transparency. No uploads — 100% browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'PNG to WebP', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'PNG to WebP Converter Online Free — Convert PNG to WebP',
    description:
      'Free online PNG to WebP converter. Convert PNG to WebP instantly — 26–80% smaller, preserves transparency, no upload, 100% browser-based and private.',
    faq: [
      {
        question: 'How much smaller is WebP compared to PNG?',
        answer:
          'WebP is typically 26% smaller than lossless PNG for equivalent image quality in lossless mode, and can be 60–80% smaller when using lossy WebP compression compared to a PNG of the same visual quality. For a typical 500KB PNG logo with transparency, the WebP equivalent is often 100–200KB — a substantial reduction that speeds up web page loading.',
      },
      {
        question: 'Does converting PNG to WebP lose quality?',
        answer:
          'This tool converts PNG to lossy WebP at a quality setting of approximately 92. For most images, this produces a result that is visually indistinguishable from the original PNG at a significantly smaller file size. If you need a true lossless WebP, you would need a server-side conversion tool such as cwebp with the -lossless flag.',
      },
      {
        question: 'Does PNG to WebP conversion preserve transparency?',
        answer:
          'Yes. WebP supports full alpha channel transparency, the same as PNG. When you convert a PNG with a transparent background to WebP, the transparency is preserved in the output file exactly. Logos, icons, and product cutouts with transparent backgrounds all convert correctly from PNG to WebP.',
      },
      {
        question: 'Can I use WebP images on all websites?',
        answer:
          'WebP is supported by all modern browsers, covering over 95% of users globally as of 2025. If your audience includes users on very old browsers (Internet Explorer 11, Safari before 2020), you may need a PNG fallback. For most web projects, serving WebP without a fallback is safe and delivers meaningful performance benefits.',
      },
      {
        question: 'Can I open a WebP file in Photoshop?',
        answer:
          'Photoshop added native WebP support in version 23.2, released in 2022. If you are using Photoshop CC 2022 or later, you can open WebP files directly. Older versions including Photoshop CS6 and CC versions before 2022 cannot open WebP natively — convert WebP back to PNG to open it in older software.',
      },
      {
        question: 'Can I convert PNG to WebP on mobile?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers. Tap the upload area to select a PNG from your device, and the converted WebP file downloads directly to your device. No app installation is required.',
      },
      {
        question: 'What is the difference between PNG and WebP for web images?',
        answer:
          'PNG is a lossless format with universal compatibility — supported everywhere including email clients, print services, and all software. WebP is a modern format optimized for web delivery: smaller file sizes at equivalent quality, with support for both lossless and lossy compression and full alpha transparency. For web delivery, WebP is the better choice; for print, email, or desktop software, PNG is safer.',
      },
      {
        question: 'Are my PNG files uploaded to a server when converting to WebP?',
        answer:
          'No. All conversion happens entirely in your browser using the Canvas API. Your PNG files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone, making the tool completely private with no data transmitted.',
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
