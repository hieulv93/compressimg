import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-resume')

export const metadata: Metadata = {
  title: 'Resize Image for Resume / CV — Free, Exact Dimensions',
  description:
    'Resize your photo for resume, CV, or LinkedIn — LinkedIn 400×400px, Naukri 200×200px, European CV 300×400px. Free, browser-based, no upload required.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Resume / CV — Free, Exact Dimensions | CompressImg',
    description:
      'Resize your photo for LinkedIn, Naukri, European CV, or any job portal. Exact dimensions, 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for Resume',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Resume / CV — Free',
    description:
      'LinkedIn 400×400px, Naukri 200×200px, European CV 300×400px — resize your resume photo instantly.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image for Resume / CV — Free, Exact Dimensions',
    description:
      'Resize your photo for resume, CV, or LinkedIn — LinkedIn 400×400px, Naukri 200×200px, European CV 300×400px. Free, browser-based, no upload required.',
    faq: [
      {
        question: 'What size should a resume photo be?',
        answer:
          'For LinkedIn: 400×400px (square). For Naukri (India): 200×200px under 50KB. For most European CVs: 300×400px (3:4 ratio). For a printed CV: 150×200px at 300 DPI when embedded in a Word or PDF document.',
      },
      {
        question: 'How do I make my Naukri profile photo under 50KB?',
        answer:
          'Resize to 200×200px using this tool, then compress using our Compress to 50KB tool. A 200×200px JPEG at quality 72 is typically 8–20KB — well under the 50KB Naukri limit.',
      },
      {
        question: 'Should I put a photo on my resume?',
        answer:
          'In India, Germany, France, South Korea, Japan, and the Middle East, a photo is expected. In the US, UK, Canada, and Australia, photos are discouraged due to anti-discrimination laws. Always check the job posting.',
      },
      {
        question: 'Is this tool free?',
        answer:
          'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens in your browser.',
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
