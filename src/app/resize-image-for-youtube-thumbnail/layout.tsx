import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-youtube-thumbnail')

export const metadata: Metadata = {
  title: 'Resize Image for YouTube Thumbnail — 1280×720 Free',
  description:
    'Resize images to the perfect YouTube thumbnail size (1280×720) and channel art (2560×1440) free. HEIC from iPhone supported. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for YouTube Thumbnail — 1280×720 Free | CompressImg',
    description:
      'Resize any image to 1280×720 YouTube thumbnail or 2560×1440 channel art. HEIC from iPhone supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for YouTube — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for YouTube Thumbnail — 1280×720 Free',
    description:
      'Perfect 1280×720 thumbnails and channel art in seconds. No upload, no account needed.',
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
    name: 'Resize Image for YouTube Thumbnail — 1280×720 Free',
    description:
      'Resize images to the perfect YouTube thumbnail size (1280×720) and channel art (2560×1440) free. HEIC from iPhone supported. No upload — 100% browser-based.',
    faq: [
      {
        question: 'What size should a YouTube thumbnail be?',
        answer:
          "1280×720px (16:9 aspect ratio) at under 2MB. This is YouTube's official recommendation and displays correctly at all sizes from mobile search to desktop watch page.",
      },
      {
        question: 'Why is my YouTube thumbnail blurry?',
        answer:
          'The most common cause is uploading a thumbnail smaller than 1280×720px. YouTube upscales it, creating blur. Resize to exactly 1280×720px using this tool and re-upload.',
      },
      {
        question: 'What is the YouTube channel art size?',
        answer:
          '2560×1440px. YouTube crops this image for different devices — keep important content in the central 1546×423px safe zone to ensure it appears on all devices.',
      },
      {
        question: 'Can I use a HEIC photo as a YouTube thumbnail?',
        answer:
          'YouTube does not accept HEIC directly. Upload your HEIC file here — it is automatically converted to JPEG and resized to 1280×720px in one step.',
      },
      {
        question: 'Is this YouTube thumbnail resizer free?',
        answer:
          'Yes, completely free. No account, no watermark, no usage limits. All processing runs in your browser.',
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
