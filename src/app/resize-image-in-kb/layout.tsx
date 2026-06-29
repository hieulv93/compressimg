import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-in-kb')

export const metadata: Metadata = {
  title: 'Resize Image in KB Online Free — Resize to Exact File Size',
  description:
    'Resize image to an exact KB size — 20KB, 50KB, 100KB, 200KB or 500KB. Perfect for online forms, exams, and ID uploads. No upload, 100% private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image in KB Online Free — Resize to Exact File Size',
    description:
      'Resize to 20KB, 50KB, 100KB, 200KB or 500KB automatically. Perfect for government portals and exam applications. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image in KB Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image in KB Online Free',
    description: 'Set a target KB, upload your image, download the result. Free, browser-based.',
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
    name: 'Resize Image in KB Online Free — Resize to Exact File Size',
    description:
      'Resize image to an exact KB size — 20KB, 50KB, 100KB, 200KB or 500KB. Perfect for online forms, exams, and ID uploads. No upload, 100% private.',
    faq: [
      {
        question: 'How do I resize an image to exactly 50KB?',
        answer:
          'Set the target to 50KB, upload your image, and the tool automatically finds the right quality and dimensions to get under 50KB. The result shows the exact output size — any file under 50KB will be accepted by portals that require "under 50KB".',
      },
      {
        question: 'What portal requirements does this tool cover?',
        answer:
          'This tool is designed for SSC (signature 20KB, photo 50KB), UPSC (photo 40KB, signature 20KB), IBPS bank exams (photo 50KB), NEET (photo 10–200KB), JEE (photo 10–100KB), US passport DS-160 (under 240KB), Naukri resume photo (under 100KB), and Aadhaar/PAN document uploads (under 200KB).',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All processing runs 100% in your browser. Your images never leave your device.',
      },
      {
        question: 'Can I resize a HEIC photo from iPhone?',
        answer:
          'Yes. Upload HEIC files directly — they are automatically converted to JPEG before the KB resizing process. No manual conversion step needed.',
      },
      {
        question: 'What is the output format?',
        answer:
          'The output is always JPEG — the format accepted by virtually all government portals, exam systems, and job application forms. JPEG provides the best compression for photos at any KB target.',
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
