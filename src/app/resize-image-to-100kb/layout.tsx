import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-100kb')

export const metadata: Metadata = {
  title: 'Resize Image to 100KB Online Free — Resume, Job Portal',
  description:
    'Resize any image to under 100KB free. Great for resume photos, Naukri, LinkedIn, and IBPS bank job portals. JPEG output, no upload, 100% private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 100KB Online Free — Resume, Job Portal',
    description: 'Resize to under 100KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 100KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 100KB Online Free',
    description: 'Resize to under 100KB automatically. Free, browser-based, no upload.',
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
    name: 'Resize Image to 100KB Online Free — Resume, Job Portal',
    description:
      'Resize any image to under 100KB free. Great for resume photos, Naukri, LinkedIn, and IBPS bank job portals. JPEG output, no upload, 100% private.',
    faq: [
      {
        question: 'How do I resize a resume photo to under 100KB?',
        answer:
          'Upload your photo — the target is pre-set to 100KB. The tool automatically reduces quality and dimensions to fit under 100KB. A 600×600px JPEG at quality 70 typically lands at 30–70KB — well within the limit.',
      },
      {
        question: 'What photo size does Naukri.com require?',
        answer:
          'Naukri.com requires profile photos under 100KB in JPEG or PNG format. This tool resizes to under 100KB automatically and outputs JPEG — the preferred format.',
      },
      {
        question: 'What is the IBPS photo size requirement?',
        answer:
          'IBPS PO, Clerk, and SO exams require photos under 50KB and signatures under 20KB. Use the 50KB target for IBPS photos. For a photo under 100KB (required for some IBPS forms), the default target on this page works.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All processing happens 100% in your browser. Your files never leave your device.',
      },
      {
        question: 'Can I resize a HEIC photo from iPhone to 100KB?',
        answer:
          'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 100KB.',
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
