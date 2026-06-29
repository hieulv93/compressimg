import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/flip-image')

export const metadata: Metadata = {
  title: 'Flip Image Online Free — Mirror Horizontal & Vertical',
  description:
    'Flip or mirror JPG, PNG, WebP, HEIC images horizontally or vertically in one click. 100% browser-based — no upload, no sign-up. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Flip Image Online Free — Mirror Horizontal & Vertical',
    description:
      'Flip images horizontally (mirror) or vertically in one click. Works on JPG, PNG, WebP, HEIC. 100% browser-based — private and free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flip Image Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flip Image Online Free — Mirror Horizontal & Vertical',
    description: 'Flip images horizontally or vertically instantly. No upload, free.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Flip Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Flip Image Online Free — Mirror Horizontal & Vertical',
    description:
      'Flip or mirror JPG, PNG, WebP, HEIC images horizontally or vertically in one click. 100% browser-based — no upload, no sign-up. Free.',
    faq: [
      {
        question: 'How do I flip an image horizontally online for free?',
        answer:
          'Upload your image to this tool, then click Flip Horizontal. The preview mirrors left-to-right instantly. Click Download to save. No account required — free.',
      },
      {
        question: 'What is the difference between flip horizontal and flip vertical?',
        answer:
          'Flip horizontal (mirror) reflects the image left-to-right — like looking in a mirror. Flip vertical reflects the image top-to-bottom — as if the image is on a piece of paper you flipped upside down. You can apply both at once for a 180° mirror effect.',
      },
      {
        question: 'Does flipping an image reduce quality?',
        answer:
          'This tool outputs JPEG at quality 92, which is visually lossless. The flip transformation itself is mathematically exact — no pixel data is lost. Only the JPEG encoding step applies minimal compression.',
      },
      {
        question: 'Can I flip a selfie to look like a mirror image?',
        answer:
          'Yes. Upload your selfie and click Flip Horizontal. This creates a mirror image — how others see you rather than how your camera captures you. Useful for profile photos and thumbnails.',
      },
      {
        question: 'What formats can I flip?',
        answer:
          'JPG, PNG, WebP, and HEIC — up to 20MB per file. Output is always JPEG at quality 92.',
      },
      {
        question: 'Is my image uploaded to a server when I flip it?',
        answer:
          'No. All processing runs entirely in your browser using the Canvas API. Your image never leaves your device.',
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
