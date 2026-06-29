import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-jpeg')

export const metadata: Metadata = {
  title: 'Compress JPEG Online Free — JPEG Compressor',
  description:
    'Free online JPEG compressor. Compress JPG and JPEG files by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress JPEG Online Free — JPEG Compressor',
    description:
      'Free JPEG compressor. Compress JPG and JPEG file size by up to 90% — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress JPEG Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress JPEG Online Free',
    description: 'Free JPEG compressor. Compress file size by up to 90% — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress JPEG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress JPEG Online Free — JPEG Compressor',
    description:
      'Free online JPEG compressor. Compress JPG and JPEG files by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'What is the difference between JPG and JPEG?',
        answer:
          'JPG and JPEG are the same format. JPEG stands for Joint Photographic Experts Group. Early Windows only supported 3-character file extensions, so .jpeg was shortened to .jpg. Both open identically in every application and browser.',
      },
      {
        question: 'How do I compress a JPEG file online for free?',
        answer:
          'Upload your .jpg or .jpeg file, set quality to 80, and download the compressed result. This tool compresses JPEG files in your browser with no upload to server, no sign-up, no watermark, and no daily limit.',
      },
      {
        question: 'What quality should I use to compress a JPEG?',
        answer:
          'Quality 75–85 is the sweet spot for most uses — 50–70% size reduction with no visible quality loss. For thumbnails and form uploads, quality 60–70 works well. For print-ready images, use quality 85–95.',
      },
      {
        question: 'Does compressing a JPEG reduce image quality permanently?',
        answer:
          'Yes. JPEG uses lossy compression — each re-save discards some data permanently. Always compress from the original file. At quality 80, the loss is invisible on screen; at quality 60, minor artifacts appear only at full zoom.',
      },
      {
        question: 'How do I compress a JPEG to under 100KB?',
        answer:
          'Start at quality 70 and check the output size. If over 100KB, lower to 60. For large photos (4000px+), resize to 1280px wide first using the Resize Image tool, then compress at quality 65.',
      },
      {
        question: 'Are my JPEG files safe when I compress them online?',
        answer:
          'Yes. All compression runs in your browser — no files are uploaded to any server. Your JPEG images never leave your device and are permanently deleted from browser memory when you close the tab.',
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
