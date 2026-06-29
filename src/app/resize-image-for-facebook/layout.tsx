import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-facebook')

export const metadata: Metadata = {
  title: 'Resize Image for Facebook — Free, Exact Dimensions',
  description:
    'Resize any image to exact Facebook dimensions free. Cover photo (820×312), post image (1200×630), story (1080×1920). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Facebook — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to Facebook cover, post, story, or profile dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for Facebook — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Facebook — Free, Exact Dimensions',
    description:
      'Perfect Facebook cover, post, story, and profile picture sizes in seconds. No upload, no account.',
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
    name: 'Resize Image for Facebook — Free, Exact Dimensions',
    description:
      'Resize any image to exact Facebook dimensions free. Cover photo (820×312), post image (1200×630), story (1080×1920). HEIC from iPhone supported. No upload — browser-based.',
    faq: [
      {
        question: 'What is the Facebook cover photo size?',
        answer:
          'The Facebook cover photo size is 820×312px on desktop and 640×360px on mobile. Facebook recommends uploading at 820×312px — it displays correctly across all devices.',
      },
      {
        question: 'What size should a Facebook post image be?',
        answer:
          'Facebook recommends 1200×630px for shared link images and post photos. This displays at the correct ratio in both the feed and when shared as a link preview.',
      },
      {
        question: 'What is the Facebook profile picture size?',
        answer:
          'Facebook profile pictures display at 170×170px on desktop and 128×128px on mobile. Upload at least 170×170px — Facebook crops it to a circle.',
      },
      {
        question: 'Can I use a HEIC photo for Facebook?',
        answer:
          'Facebook does not always accept HEIC files in all browsers. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen Facebook dimensions in one step.',
      },
      {
        question: 'Is this Facebook image resizer free?',
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
