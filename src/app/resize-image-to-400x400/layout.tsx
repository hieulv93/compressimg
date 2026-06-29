import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-400x400')

export const metadata: Metadata = {
  title: 'Resize Image to 400×400 Free',
  description:
    'Resize any image to 400×400 instantly. Perfect for profile pictures, avatars, and small product photos. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 400×400 Free | CompressImg',
    description:
      'Resize any image to 400×400. Perfect for profile pictures and avatars. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 400×400 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 400×400 Free',
    description: 'Perfect 400×400 profile pictures in seconds. No upload, no account needed.',
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
    name: 'Resize Image to 400×400 Free',
    description:
      'Resize any image to 400×400 instantly. Perfect for profile pictures, avatars, and small product photos. No upload — 100% browser-based.',
    faq: [
      {
        question: 'What is 400×400 used for?',
        answer:
          '400×400px is a common profile picture and avatar size used on Twitter/X, Discord, forums, and many web applications. It is larger than the minimum required by most platforms, ensuring high-quality display even on high-DPI (Retina) screens.',
      },
      {
        question: 'What size profile picture does Twitter require?',
        answer:
          'Twitter/X displays profile photos at 400×400px maximum. The platform recommends uploading at 400×400px or larger so it looks sharp on Retina displays. The photo is displayed as a circle on profiles but stored as a square.',
      },
      {
        question: 'What is the difference between 300×300 and 400×400?',
        answer:
          '400×400 contains 78% more pixels than 300×300, making it noticeably sharper on high-DPI screens. For profile pictures, 400×400 is the better choice as it maintains quality when displayed on Retina/HiDPI monitors.',
      },
      {
        question: 'Will my image be cropped to fit 400×400?',
        answer:
          'The tool fits your image within 400×400 while preserving the original aspect ratio. If your image is not square, white bars are added to fill the frame without cropping or distorting.',
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
