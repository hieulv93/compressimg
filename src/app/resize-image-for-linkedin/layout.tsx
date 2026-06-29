import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-linkedin')

export const metadata: Metadata = {
  title: 'Resize Image for LinkedIn — Free, Exact Dimensions',
  description:
    'Resize any image to exact LinkedIn dimensions free. Banner (1584×396), post image (1200×627), profile picture (400×400). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for LinkedIn — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to LinkedIn banner, post, or profile picture dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for LinkedIn — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for LinkedIn — Free, Exact Dimensions',
    description:
      'Perfect LinkedIn banner, post, and profile picture sizes in seconds. No upload, no account.',
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
    name: 'Resize Image for LinkedIn — Free, Exact Dimensions',
    description:
      'Resize any image to exact LinkedIn dimensions free. Banner (1584×396), post image (1200×627), profile picture (400×400). HEIC from iPhone supported. No upload — browser-based.',
    faq: [
      {
        question: 'What is the LinkedIn banner size?',
        answer:
          'The LinkedIn profile banner (background photo) size is 1584×396px. Company page banners are 1128×191px. Upload at the recommended dimensions to avoid cropping.',
      },
      {
        question: 'What size should a LinkedIn post image be?',
        answer:
          'LinkedIn recommends 1200×627px for post images (1.91:1 ratio). This displays correctly in the feed without cropping. Square images (1200×1200) also work well.',
      },
      {
        question: 'What is the LinkedIn profile picture size?',
        answer:
          'LinkedIn profile pictures should be at least 400×400px. LinkedIn displays them as a circle, so use a centered subject with space around the edges.',
      },
      {
        question: 'Can I use a HEIC photo for LinkedIn?',
        answer:
          'LinkedIn may not accept HEIC files in all browsers. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen LinkedIn dimensions in one step.',
      },
      {
        question: 'Is this LinkedIn image resizer free?',
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
