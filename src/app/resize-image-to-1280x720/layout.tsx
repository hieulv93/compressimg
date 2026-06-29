import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-1280x720')

export const metadata: Metadata = {
  title: 'Resize Image to 1280×720 (HD) Free',
  description:
    'Resize any image to 1280×720 HD instantly. Perfect for YouTube thumbnails, video frames, and web banners. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 1280×720 (HD) Free | CompressImg',
    description:
      'Resize any image to 1280×720 HD. Perfect for YouTube thumbnails and video content. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 1280×720 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 1280×720 (HD) Free',
    description: 'Perfect 1280×720 HD images in seconds. No upload, no account needed.',
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
    name: 'Resize Image to 1280×720 (HD) Free',
    description:
      'Resize any image to 1280×720 HD instantly. Perfect for YouTube thumbnails, video frames, and web banners. No upload — 100% browser-based.',
    faq: [
      {
        question: 'What is 1280×720 resolution?',
        answer:
          '1280×720 is HD (High Definition), also called 720p. It has 1280 pixels wide and 720 pixels tall in a 16:9 aspect ratio. It is the minimum HD standard and is used for YouTube thumbnails, web video, and many display sizes.',
      },
      {
        question: 'Is 1280×720 the correct YouTube thumbnail size?',
        answer:
          "Yes. YouTube's official recommended thumbnail size is 1280×720px (16:9 ratio) at under 2MB. This size displays correctly on all devices from mobile to desktop.",
      },
      {
        question: 'What is the difference between 720p and 1080p?',
        answer:
          '720p (1280×720) is HD and contains 921,600 pixels. 1080p (1920×1080) is Full HD and contains 2,073,600 pixels — about 2.25× more. 1080p is sharper but produces larger files. For YouTube thumbnails, 720p is the standard.',
      },
      {
        question: 'Will resizing to 1280×720 distort my image?',
        answer:
          'The tool maintains the original aspect ratio. If your image is not 16:9, it will be letterboxed with white bars to fit exactly 1280×720 without distortion.',
      },
      {
        question: 'Are my files uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser. Your images are never sent to any server.',
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
