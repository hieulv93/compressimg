import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/photo-compressor')

export const metadata: Metadata = {
  title: 'Photo Compressor Online Free — Compress Photos Instantly',
  description:
    'Free online photo compressor. Compress JPG, PNG, WebP, and HEIC photos by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Photo Compressor Online Free — Compress Photos Instantly',
    description:
      'Free photo compressor. Compress JPG, PNG, WebP, HEIC photos by up to 90% — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Photo Compressor Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Compressor Online Free',
    description: 'Free photo compressor. Compress photos by up to 90% — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Photo Compressor', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Photo Compressor Online Free — Compress Photos Instantly',
    description:
      'Free online photo compressor. Compress JPG, PNG, WebP, and HEIC photos by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'How do I compress a photo online for free?',
        answer:
          'Upload your photo, set quality to 80, and download the compressed result — free, no sign-up required. Quality 80 reduces most photos by 60–70% with no visible quality loss.',
      },
      {
        question: 'How do I compress a photo without losing quality?',
        answer:
          'Set quality to 75–85. At quality 80, photo compression is virtually invisible on screen. Quality loss only becomes noticeable at full zoom below quality 60 on detailed textures.',
      },
      {
        question: 'How do I compress a photo to under 100KB?',
        answer:
          'Start at quality 70 and check the output size. If still over 100KB, lower to 60. For large phone photos (3000px+), resize to 1280px wide first using the Resize Image tool, then compress at quality 65.',
      },
      {
        question: 'Can I compress iPhone photos (HEIC) online?',
        answer:
          'Yes. This tool accepts HEIC files directly. Upload your iPhone photo and it is automatically converted to JPG during compression. iPhone 12MP photos need resizing to 1280px and quality 60–65 to reach under 100KB.',
      },
      {
        question: 'Does compressing a photo reduce its dimensions?',
        answer:
          'No. This photo compressor reduces file size through quality compression — the pixel dimensions stay the same. A 4032×3024px photo is still 4032×3024px after compression, just smaller in file size.',
      },
      {
        question: 'Are my photos uploaded to a server when I use this tool?',
        answer:
          'No. All photo compression happens in your browser using JavaScript. Your photos never leave your device and are never uploaded, stored, or shared with any server.',
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
