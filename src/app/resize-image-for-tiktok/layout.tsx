import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-tiktok')

export const metadata: Metadata = {
  title: 'Resize Image for TikTok — Free, Exact Dimensions',
  description:
    'Resize any image to exact TikTok dimensions free. Video cover (1080×1920), profile picture (200×200), square post (1080×1080). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for TikTok — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to TikTok video cover, profile picture, or square post dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for TikTok — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for TikTok — Free, Exact Dimensions',
    description:
      'Perfect TikTok video cover, profile picture, and post sizes in seconds. No upload, no account.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image for TikTok — Free, Exact Dimensions',
    description:
      'Resize any image to exact TikTok dimensions free. Video cover (1080×1920), profile picture (200×200), square post (1080×1080). HEIC from iPhone supported. No upload — browser-based.',
    faq: [
      {
        question: 'What is the TikTok video cover size?',
        answer:
          'TikTok video covers are 1080×1920px (9:16 ratio) — the same as the full-screen vertical video format. Your cover image should fill the entire 1080×1920px canvas with the most important content centered.',
      },
      {
        question: 'What size is a TikTok profile picture?',
        answer:
          'TikTok profile pictures display at 200×200px and are cropped to a circle. Upload at 200×200px or larger — TikTok will downsample it. Center your subject with space around the edges.',
      },
      {
        question: 'What image size does TikTok recommend for posts?',
        answer:
          'For photo posts (TikTok Stories / carousel posts), 1080×1920px (9:16) works best for full-screen display. Square 1080×1080px is also accepted and works well for product-style posts.',
      },
      {
        question: 'Can I use a HEIC photo for TikTok?',
        answer:
          'TikTok may not accept HEIC files on all devices. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen TikTok dimensions in one step.',
      },
      {
        question: 'Is this TikTok image resizer free?',
        answer:
          'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
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
