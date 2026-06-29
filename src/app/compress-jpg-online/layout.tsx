import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-jpg-online')

export const metadata: Metadata = {
  title: 'Compress JPG Online Free — JPEG Compressor',
  description:
    'Free JPG file size reducer. Reduce and shrink JPG/JPEG images by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress JPG Online Free — JPG File Size Reducer & JPEG Compressor',
    description:
      'Free JPG file size reducer. Shrink JPG and JPEG images by up to 90% for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress JPG Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress JPG Online Free — JPG File Size Reducer',
    description: 'Free JPG file size reducer. Shrink JPEG images by up to 90% — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress JPG Online', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress JPG Online Free — JPEG Compressor',
    description:
      'Free JPG file size reducer. Reduce and shrink JPG/JPEG images by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'What is the difference between JPG and JPEG?',
        answer:
          'JPG and JPEG are the same format. JPEG stands for Joint Photographic Experts Group. Early Windows had a 3-character extension limit, so .jpeg became .jpg. Both refer to the exact same image format.',
      },
      {
        question: 'How much can I compress a JPG without losing quality?',
        answer:
          'At quality 75–85%, JPG compression is virtually invisible. You can reduce file size by 60–75% at quality 80 with no perceptible quality loss.',
      },
      {
        question: 'What is the best quality setting for JPG compression?',
        answer:
          'Quality 75–85 is the sweet spot for websites. Quality 80 reduces files by 60–70% with no visible difference. For thumbnails, quality 60–70 works well. For print-ready images, use quality 85–95.',
      },
      {
        question: 'How do I compress a JPG to under 100KB?',
        answer:
          'Start with quality 80. If still over 100KB, try quality 60. For large photos (4000px+), resize to 1280px wide first using our Resize tool, then compress — this alone can take a 5MB photo to under 300KB.',
      },
      {
        question: 'Will compressing a JPG reduce quality permanently?',
        answer:
          'Yes — JPG uses lossy compression, so each re-save loses some quality. Always keep the original and compress a copy. Our tool reads from the original you upload, so one compression pass keeps quality loss minimal.',
      },
      {
        question: 'Should I use JPG or WebP for website images?',
        answer:
          'WebP is 25–35% smaller than JPG at the same quality and supports transparency. All modern browsers support WebP. For universal compatibility (older email clients, some CMS), JPG is the safer choice.',
      },
      {
        question: 'Are my JPG files uploaded to any server?',
        answer:
          'No. All JPG compression happens in your browser using JavaScript. Files never leave your device and are never uploaded to any server.',
      },
      {
        question: 'Does this JPG compressor work on mobile phones?',
        answer:
          'Yes. Fully optimized for iOS and Android mobile browsers. Open your camera roll, select a JPG, compress it, and download — all within your mobile browser, no app required.',
      },
      {
        question: 'How do I reduce JPG file size?',
        answer:
          'Upload your JPG, set quality to 80, and download the compressed result. Quality 80 reduces JPG file size by 60–70% with no visible quality loss. Lower to 60 for 80–90% reduction. The result card shows the exact file size before you download.',
      },
      {
        question: 'How do I shrink a JPG file size?',
        answer:
          'Set quality to 75–80 to shrink a JPG by 60–70% with no visible change. For maximum shrinkage, use quality 50–60 — the result is 80–90% smaller. For thumbnails and social media previews, quality 60–70 is indistinguishable from the original.',
      },
      {
        question: 'What is a free JPG file size reducer online?',
        answer:
          'This tool is a free browser-based JPG file size reducer — no upload to server, no sign-up, no watermark, no daily limit. Compress any number of JPG files for free. Works on desktop and mobile.',
      },
      {
        question: 'How do I decrease JPG file size without losing quality?',
        answer:
          'Use quality 75–85. At quality 80, most JPG files are reduced by 60–70% with a result visually indistinguishable from the original on screen. Quality loss only becomes noticeable below quality 60 at full zoom.',
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
