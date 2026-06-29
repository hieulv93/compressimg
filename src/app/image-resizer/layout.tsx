import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/image-resizer')

export const metadata: Metadata = {
  title: 'Image Resizer Online Free — Resize Images in Seconds',
  description:
    'Free online image resizer. Resize JPG, PNG, WebP, and HEIC images to any pixel dimensions instantly. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image Resizer Online Free — Resize Images in Seconds',
    description:
      'Free image resizer. Resize JPG, PNG, WebP images to any dimensions — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image Resizer Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Resizer Online Free',
    description: 'Free image resizer. Resize to any dimensions — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Image Resizer', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Image Resizer Online Free — Resize Images in Seconds',
    description:
      'Free online image resizer. Resize JPG, PNG, WebP, and HEIC images to any pixel dimensions instantly. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'How do I resize an image online for free?',
        answer:
          'Upload your image, enter the target width and height in pixels, and click Resize Image. The resized file downloads instantly — free, no sign-up, no upload to server. Works on JPG, PNG, WebP, and HEIC.',
      },
      {
        question: 'How do I resize an image without losing quality?',
        answer:
          'Resize down (make smaller) — quality is fully preserved. Resizing up introduces softness because new pixels must be generated. Keep enlargements under 150% of the original for acceptable results.',
      },
      {
        question: 'How do I resize an image without changing the aspect ratio?',
        answer:
          'Enable the aspect ratio lock — changing width automatically adjusts height and vice versa. This prevents stretching. Unlock only when you need exact dimensions for a platform with a different aspect ratio.',
      },
      {
        question: 'What pixel dimensions should I use for Instagram?',
        answer:
          'Square posts: 1080×1080px. Portrait posts: 1080×1350px (shows largest in feed). Stories and Reels: 1080×1920px.',
      },
      {
        question: 'How do I resize a photo to under 100KB?',
        answer:
          'Resize to 800×600px or smaller, then use the Compress Image tool at quality 60–70. Combining resize and compress is the most effective way to hit small file size targets.',
      },
      {
        question: 'Is my image uploaded to a server when I resize it?',
        answer:
          'No. All resizing runs in your browser using the Canvas API. Your image never leaves your device. No files are uploaded, stored, or shared with any server.',
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
