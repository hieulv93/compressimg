import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-twitter')

export const metadata: Metadata = {
  title: 'Resize Image for Twitter / X — Free, Exact Dimensions',
  description:
    'Resize any image to exact Twitter / X dimensions free. Post image (1200×675), header (1500×500), profile picture (400×400). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Twitter / X — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to Twitter post, header, or profile picture dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for Twitter — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Twitter / X — Free, Exact Dimensions',
    description:
      'Perfect Twitter post, header, and profile picture sizes in seconds. No upload, no account.',
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
    name: 'Resize Image for Twitter / X — Free, Exact Dimensions',
    description:
      'Resize any image to exact Twitter / X dimensions free. Post image (1200×675), header (1500×500), profile picture (400×400). HEIC from iPhone supported. No upload — browser-based.',
    faq: [
      {
        question: 'What is the best image size for a Twitter post?',
        answer:
          '1200×675px (16:9 ratio). This displays at full width in the Twitter / X feed without cropping. Twitter also accepts 1:1 square (1200×1200) and portrait (1080×1350) images.',
      },
      {
        question: 'What is the Twitter header size?',
        answer:
          '1500×500px. Twitter crops the header differently on desktop and mobile — keep important content in the center 1500×360px area to ensure it remains visible on all devices.',
      },
      {
        question: 'What size is a Twitter profile picture?',
        answer:
          'Twitter profile pictures display at 400×400px in the profile view and as small as 48×48px next to tweets. Upload at 400×400px — Twitter crops it to a circle.',
      },
      {
        question: 'Can I use a HEIC photo on Twitter?',
        answer:
          'Twitter does not accept HEIC files. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen Twitter dimensions in one step.',
      },
      {
        question: 'Is this Twitter image resizer free?',
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
