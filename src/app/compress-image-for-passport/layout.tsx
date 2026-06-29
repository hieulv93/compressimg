import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-passport')

export const metadata: Metadata = {
  title: 'Compress Passport Photo Online — Under 240KB Free',
  description:
    'Compress passport photos to under 240KB for US passport applications. JPEG output, 100% browser-based — your photo never leaves your device. Free, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Passport Photo Online — Under 240KB Free',
    description:
      'US passport photo requirement: JPEG, under 240KB, 600×600px minimum. Compress your passport photo free — 100% browser-based, private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Passport Photo Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Passport Photo — Under 240KB Free',
    description: 'Meet US passport photo file size requirements. 100% browser-based — private.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Passport Photo', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Passport Photo Online — Under 240KB Free',
    description:
      'Compress passport photos to under 240KB for US passport applications. JPEG output, 100% browser-based — your photo never leaves your device. Free, no sign-up.',
    faq: [
      {
        question: 'What is the file size requirement for a US passport photo?',
        answer:
          'For the US State Department online passport application, your digital passport photo must be a JPEG file under 240KB. The photo must be at least 600×600 pixels and no larger than 1200×1200 pixels. The head must fill 70–80% of the frame, and the background must be plain white or off-white.',
      },
      {
        question: 'What quality setting should I use to compress a passport photo?',
        answer:
          'For a 600×600px passport photo, quality 75–80 almost always produces a file under 50KB — well under the 240KB limit. For larger photos (1200×1200px), quality 75 typically produces 80–180KB. Start at quality 80 and check the output size. If under 240KB, you are done.',
      },
      {
        question: 'Can I use this tool for US passport renewal applications?',
        answer:
          'Yes. The US State Department online passport renewal portal (DS-82) requires a digital photo uploaded directly to their website. The file must be JPEG, under 240KB, and at least 600×600 pixels. This tool compresses your photo to meet those requirements without uploading to any third-party server.',
      },
      {
        question: 'Does compressing a passport photo affect its quality for government use?',
        answer:
          'No — at quality 75–80, a 600×600px JPEG passport photo is visually indistinguishable from the uncompressed original at typical review sizes. Government portals use compressed images for digital review and storage; they do not require photographic print quality. Quality 75 is the standard used by most professional passport photo services.',
      },
      {
        question: 'Is it safe to compress a passport photo online?',
        answer:
          'With this tool, yes — your photo never leaves your device. All compression runs entirely in your browser using JavaScript. Your image is never uploaded to any server, stored, or transmitted. This is critical for identity documents — no passport photo should be processed on an untrusted server.',
      },
      {
        question: 'What pixel dimensions should my passport photo be?',
        answer:
          'For US passport applications, the photo must be at least 600×600 pixels and no more than 1200×1200 pixels. 600×600px is the most common submission size and produces the smallest file — a JPEG at 600×600px and quality 80 is typically 20–60KB, safely under the 240KB limit.',
      },
      {
        question: 'My passport photo upload was rejected — what went wrong?',
        answer:
          'The most common reasons a passport photo upload is rejected are: (1) file size over 240KB, (2) wrong format — only JPEG is accepted, not PNG or WebP, (3) dimensions below 600×600px or above 1200×1200px, (4) the head is too small (must fill 70–80% of the frame). Compress to JPEG at quality 75–80 and ensure dimensions are 600×600 to 1200×1200px.',
      },
      {
        question: 'Can I compress a passport photo on my iPhone or Android?',
        answer:
          'Yes. Open this page in Safari or Chrome on your phone. Tap the upload area and select your passport photo from your camera roll. The tool accepts iPhone HEIC photos and converts them to JPEG automatically. Set quality to 80 and compress. Download the compressed JPEG directly to your phone.',
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
