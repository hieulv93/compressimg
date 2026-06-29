import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-1920x1080')

export const metadata: Metadata = {
  title: 'Resize Image to 1920×1080 (Full HD) Free',
  description:
    'Resize any image to 1920×1080 Full HD instantly. Perfect for wallpapers, presentations, and video frames. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 1920×1080 (Full HD) Free | CompressImg',
    description:
      'Resize any image to 1920×1080 Full HD. Perfect for wallpapers, presentations, and video. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 1920×1080 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 1920×1080 (Full HD) Free',
    description: 'Perfect 1920×1080 Full HD images in seconds. No upload, no account needed.',
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
    name: 'Resize Image to 1920×1080 (Full HD) Free',
    description:
      'Resize any image to 1920×1080 Full HD instantly. Perfect for wallpapers, presentations, and video frames. No upload — 100% browser-based.',
    faq: [
      {
        question: 'What is 1920×1080 resolution?',
        answer:
          '1920×1080 is Full HD (FHD), also called 1080p. It has 1920 pixels wide and 1080 pixels tall in a 16:9 aspect ratio. It is the most common resolution for monitors, TVs, laptops, and video content.',
      },
      {
        question: 'What is 1920×1080 used for?',
        answer:
          '1920×1080 is used for desktop wallpapers, PowerPoint and Google Slides presentations, YouTube video frames, web hero images, and backgrounds for video calls (Zoom, Teams, Google Meet).',
      },
      {
        question: 'Will resizing to 1920×1080 distort my image?',
        answer:
          'The tool fits your image within 1920×1080 while maintaining the original aspect ratio by default. If your image is not 16:9, it will be letterboxed (white bars added) to fill the frame without distortion.',
      },
      {
        question: 'What format does the resized image download as?',
        answer:
          'The resized image downloads as JPEG. This keeps the file size small while maintaining quality appropriate for 1920×1080 wallpapers and presentations.',
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
