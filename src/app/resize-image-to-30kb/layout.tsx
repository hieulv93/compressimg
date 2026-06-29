import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-30kb')

export const metadata: Metadata = {
  title: 'Resize Image to 30KB Online Free — SSC, IBPS, UPSC Signature',
  description:
    'Resize any image to under 30KB free. Ideal for SSC, IBPS, UPSC, and government exam signature uploads. JPEG output, 100% browser-based — no upload, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 30KB Online Free — SSC, IBPS, UPSC',
    description: 'Resize to under 30KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 30KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 30KB Online Free',
    description: 'Resize to under 30KB automatically. Free, browser-based.',
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
    name: 'Resize Image to 30KB Online Free — SSC, IBPS, UPSC Signature',
    description:
      'Resize any image to under 30KB free. Ideal for SSC, IBPS, UPSC, and government exam signature uploads. JPEG output, 100% browser-based — no upload, no sign-up.',
    faq: [
      {
        question: 'What is the SSC signature size requirement?',
        answer:
          'SSC CGL, CHSL, and MTS require signature images of 10–20KB at 140×60px. Uploading under 30KB is well within all SSC portal limits.',
      },
      {
        question: 'What is the IBPS signature size requirement?',
        answer:
          "IBPS PO, Clerk, and SO portals require signatures of 10–20KB. This tool's 30KB target is accepted by all IBPS portals.",
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All processing happens 100% in your browser. Your files never leave your device.',
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
