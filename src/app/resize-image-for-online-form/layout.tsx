import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-online-form')

export const metadata: Metadata = {
  title: 'Resize Image for Online Form — Government & Exam Upload',
  description:
    'Resize your photo or signature to exact KB and pixel requirements for government portals, exam applications, and online forms. Free, browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Online Form — Government & Exam Upload',
    description:
      'Resize photos and signatures to exact KB limits for SSC, UPSC, IBPS, Railway, and other government portals. Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for Online Form — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Online Form — Free',
    description: 'Set target KB, upload photo, download instantly. Meets government portal limits.',
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
    name: 'Resize Image for Online Form — Government & Exam Upload',
    description:
      'Resize your photo or signature to exact KB and pixel requirements for government portals, exam applications, and online forms. Free, browser-based, no upload.',
    faq: [
      {
        question: 'What photo size do most government online forms require?',
        answer:
          'Most Indian government exam portals (SSC, UPSC, IBPS, Railway) require photos between 20KB and 100KB in JPEG format. Pixel dimensions vary: SSC uses 100×120px, UPSC uses 300×400px, and IBPS uses 200×230px. Always check the official notification for the exact requirement.',
      },
      {
        question: 'How do I reduce a photo to under 50KB for an online form?',
        answer:
          'Set the target KB to 50 in the tool above, upload your photo, and download the result. The tool automatically compresses and resizes the image to fit under 50KB. If the form also specifies exact pixel dimensions, use the Resize Signature or Resize Image tool first to set the correct pixels, then use this tool to meet the KB limit.',
      },
      {
        question: 'Can I resize both photo and signature for the same form?',
        answer:
          'Yes. Process each image separately. Upload the photo first, set the target KB, and download. Then upload the signature, adjust the KB target if it is different (signature limits are often smaller — 10KB or 20KB), and download.',
      },
      {
        question: 'Is my photo sent to a server when I use this tool?',
        answer:
          'No. All processing happens entirely in your browser. Your photo or signature never leaves your device — there is no server upload at any point.',
      },
      {
        question: 'What if the form requires a specific pixel size AND a KB limit?',
        answer:
          'Handle them in two steps. First, use the Resize Image or Resize Signature tool to set the exact pixel dimensions (e.g., 140×60px for an SSC signature). Then upload that resized image here and set the target KB to meet the file size limit (e.g., 20KB).',
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
