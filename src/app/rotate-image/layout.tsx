import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/rotate-image')

export const metadata: Metadata = {
  title: 'Rotate Image Online Free — 90°, 180°, 270°',
  description:
    'Rotate JPG, PNG, WebP, or HEIC images 90°, 180°, or 270° instantly. 100% browser-based — no upload, no sign-up. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Rotate Image Online Free — 90°, 180°, 270°',
    description:
      'Rotate images 90°, 180°, or 270° in one click. Works on JPG, PNG, WebP, HEIC. 100% browser-based — private and free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rotate Image Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotate Image Online Free — 90°, 180°, 270°',
    description: 'Rotate images 90°, 180°, or 270° instantly. No upload, free.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Rotate Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Rotate Image Online Free — 90°, 180°, 270°',
    description:
      'Rotate JPG, PNG, WebP, or HEIC images 90°, 180°, or 270° instantly. 100% browser-based — no upload, no sign-up. Free.',
    faq: [
      {
        question: 'How do I rotate an image online for free?',
        answer:
          'Upload your image to this tool, then click Rotate Left (90° CCW), Rotate Right (90° CW), or 180°. The preview updates instantly. Click Download to save. No account, no watermark — free.',
      },
      {
        question: 'Does rotating an image reduce quality?',
        answer:
          'This tool re-encodes the image at JPEG quality 92, which is visually lossless for all practical purposes. The canvas transformation itself is lossless — only the final JPEG encoding step introduces minimal compression. For PNG files with transparency, quality is fully preserved at quality 92.',
      },
      {
        question: 'Can I rotate a HEIC photo from my iPhone?',
        answer:
          'Yes. This tool accepts HEIC files and automatically converts them to JPEG before rotating. You can upload directly from your iPhone camera roll and download a correctly oriented JPEG.',
      },
      {
        question: 'Why is my photo showing sideways or upside down?',
        answer:
          'Modern smartphones store orientation data in EXIF metadata rather than actually rotating the pixels. Many apps read this metadata and display the photo correctly, but some apps and websites ignore EXIF orientation and show the raw pixel data — which can appear rotated. This tool lets you physically rotate the pixels so the orientation is correct in all apps.',
      },
      {
        question: 'What image formats can I rotate?',
        answer:
          'JPG, PNG, WebP, and HEIC — up to 20MB per file. Output is always JPEG at quality 92.',
      },
      {
        question: 'Is my image uploaded to a server when I rotate it?',
        answer:
          'No. All rotation runs entirely in your browser using the Canvas API. Your image never leaves your device. Free and private.',
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
