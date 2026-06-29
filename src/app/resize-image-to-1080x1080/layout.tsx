import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-1080x1080')

export const metadata: Metadata = {
  title: 'Resize Image to 1080×1080 (Square) Free',
  description:
    'Resize any image to 1080×1080 square instantly. Perfect for Instagram posts, product photos, and profile pictures. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 1080×1080 (Square) Free | CompressImg',
    description:
      'Resize any image to 1080×1080 square. Perfect for Instagram posts and product photos. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 1080×1080 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 1080×1080 (Square) Free',
    description: 'Perfect 1080×1080 square images in seconds. No upload, no account needed.',
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
    name: 'Resize Image to 1080×1080 (Square) Free',
    description:
      'Resize any image to 1080×1080 square instantly. Perfect for Instagram posts, product photos, and profile pictures. No upload — 100% browser-based.',
    faq: [
      {
        question: 'Why is 1080×1080 the standard Instagram square size?',
        answer:
          "Instagram displays square posts at 1080×1080px on high-DPI screens. Uploading at this exact size ensures the sharpest display without Instagram's server upscaling or downscaling.",
      },
      {
        question: 'Will my image be cropped to fit 1080×1080?',
        answer:
          'The tool fits your image within 1080×1080 while preserving the original aspect ratio. If your image is not square, white bars are added on the sides or top/bottom — the image is not cropped or distorted.',
      },
      {
        question: 'What is 1080×1080 used for?',
        answer:
          '1080×1080px (1:1 ratio) is used for Instagram square posts, e-commerce product images, app store screenshots, print-on-demand product photos, and profile avatars on platforms that require square images.',
      },
      {
        question: 'What is the difference between 1080×1080 and 1080×1350?',
        answer:
          '1080×1080 is a square (1:1 ratio). 1080×1350 is a portrait format (4:5 ratio) that takes up more vertical space in Instagram feed — slightly more visible on mobile. Both are valid for Instagram. Use 1080×1080 for cross-platform use.',
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
