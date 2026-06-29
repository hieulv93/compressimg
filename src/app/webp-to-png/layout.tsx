import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/webp-to-png')

export const metadata: Metadata = {
  title: 'WebP to PNG Converter Online Free — Convert WebP to PNG',
  description:
    'Free online WebP to PNG converter. Convert WebP to lossless PNG instantly — preserves transparency, no upload, 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WebP to PNG Converter Online Free',
    description:
      'Convert WebP files to lossless PNG — preserves transparency, works in all software. No uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebP to PNG Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to PNG Converter Online Free',
    description:
      'Convert WebP to PNG instantly. Preserves transparency. No uploads — 100% browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'WebP to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'WebP to PNG Converter Online Free — Convert WebP to PNG',
    description:
      'Free online WebP to PNG converter. Convert WebP to lossless PNG instantly — preserves transparency, no upload, 100% browser-based and private.',
    faq: [
      {
        question: 'Does converting WebP to PNG lose quality?',
        answer:
          'Converting WebP to PNG does not introduce new quality loss — PNG stores pixels losslessly. However, if the original WebP used lossy compression (most WebP files do), those artifacts are already present and will appear in the PNG. The PNG is a faithful copy of what the WebP displays.',
      },
      {
        question: 'Why is the PNG file larger than the WebP?',
        answer:
          'PNG uses lossless compression and stores every pixel without discarding data. WebP uses lossy compression (like JPG) to achieve small file sizes. Converting lossy WebP to lossless PNG naturally produces a larger file. A 200KB WebP may become a 1–3MB PNG. If file size matters, convert to JPG instead.',
      },
      {
        question: 'Does WebP to PNG preserve transparency?',
        answer:
          'Yes. If the original WebP has a transparent background (alpha channel), the PNG conversion preserves that transparency exactly. PNG fully supports alpha channels. This is one of the key reasons to choose PNG over JPG when converting a transparent WebP.',
      },
      {
        question: 'Can I open WebP files in Photoshop?',
        answer:
          'Photoshop added native WebP support in version 23.2 (released 2022). Older versions including Photoshop CS6 and CC versions before 2022 cannot open WebP natively. Converting to PNG first allows you to open the file in any Photoshop version.',
      },
      {
        question: 'Can I insert WebP images in Microsoft Word or PowerPoint?',
        answer:
          'Microsoft Office 2019 and earlier do not support WebP. Microsoft 365 (subscription) added WebP support in 2023, but compatibility varies. Converting WebP to PNG guarantees the image displays correctly in all Office versions, including older ones.',
      },
      {
        question: 'Should I convert WebP to PNG or JPG?',
        answer:
          'Convert to PNG if: you need to preserve transparency, you will edit the image further, or you need lossless quality. Convert to JPG if: file size is important, the image is a photograph without transparency, or you need the smallest file. JPG will be significantly smaller than PNG for photos.',
      },
      {
        question: 'Can I convert WebP to PNG on my phone?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers. Tap to select a WebP file from your device, and the PNG downloads directly to your device. No app installation required.',
      },
      {
        question: 'Are my WebP files uploaded to a server during conversion?',
        answer:
          'No. All conversion happens entirely in your browser using the Canvas API. Your WebP files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone.',
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
