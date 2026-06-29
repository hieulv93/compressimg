import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-50kb')

export const metadata: Metadata = {
  title: 'Resize Image to 50KB Online Free — Passport, NEET, JEE',
  description:
    'Resize any image to under 50KB free. Ideal for US passport portal (DS-160), NEET, JEE, and government exam photo uploads. JPEG output, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 50KB Online Free — Passport, NEET, JEE',
    description: 'Resize to under 50KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 50KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 50KB Online Free',
    description: 'Resize to under 50KB automatically. Free, browser-based, no upload.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image in KB', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image to 50KB Online Free — Passport, NEET, JEE',
    description:
      'Resize any image to under 50KB free. Ideal for US passport portal (DS-160), NEET, JEE, and government exam photo uploads. JPEG output, 100% browser-based.',
    faq: [
      {
        question: 'How do I resize a passport photo to under 50KB?',
        answer:
          'Upload your passport photo — the target is pre-set to 50KB. The tool automatically reduces quality and dimensions to fit under 50KB. A standard 413×531px passport photo typically reaches 25–45KB — well within the limit.',
      },
      {
        question: 'What is the photo size limit for NEET and JEE applications?',
        answer:
          'NEET UG allows photos from 10KB to 200KB; 50KB is a safe middle ground. JEE Main requires photos from 10KB to 100KB. This tool resizes to under 50KB automatically.',
      },
      {
        question: 'What photo size does the US passport DS-160 form require?',
        answer:
          'The DS-160 form requires a JPEG photo under 240KB. Uploading a photo under 50KB is well within the limit and is accepted by all passport portal validators.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All processing happens 100% in your browser. Your files never leave your device.',
      },
      {
        question: 'Can I resize a HEIC photo from iPhone to 50KB?',
        answer:
          'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 50KB.',
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
