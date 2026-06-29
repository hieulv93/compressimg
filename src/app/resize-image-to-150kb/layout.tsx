import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-150kb')

export const metadata: Metadata = {
  title: 'Resize Image to 150KB Online Free — College Admissions, NEET',
  description:
    'Resize any image to under 150KB free. Ideal for college admission portals, NEET, JEE Main, and government recruitment photo uploads. JPEG output, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 150KB Online Free — College Admissions, NEET',
    description: 'Resize to under 150KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 150KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 150KB Online Free',
    description: 'Resize to under 150KB automatically. Free, browser-based.',
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
    name: 'Resize Image to 150KB Online Free — College Admissions, NEET',
    description:
      'Resize any image to under 150KB free. Ideal for college admission portals, NEET, JEE Main, and government recruitment photo uploads. JPEG output, 100% browser-based.',
    faq: [
      {
        question: 'What is the NEET photo size requirement?',
        answer:
          'NEET UG accepts photos from 10KB to 200KB. Uploading a photo under 150KB is within the NEET limit and accepted by all NTA portal validators.',
      },
      {
        question: 'What photo size do college admission portals accept?',
        answer:
          'Most Indian college admission portals (DU, Mumbai University, state-level CETs) accept photos from 20KB to 200KB. A 150KB JPEG at 300×400px or similar is accepted by all major portals.',
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
