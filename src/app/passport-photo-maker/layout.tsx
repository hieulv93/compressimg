import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/passport-photo-maker')

export const metadata: Metadata = {
  title: 'Passport Photo Maker Online Free — 2×2 inch & 35×45mm',
  description:
    'Make passport size photos online free. US 2×2 inch, UK/EU/India 35×45mm, white background. Print-ready JPG at 300 DPI — no upload, 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Passport Photo Maker Online Free — 2×2 inch & 35×45mm',
    description:
      'Make passport size photos free. US 2×2 inch, UK/EU/India 35×45mm. Print-ready, no upload.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Passport Photo Maker Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passport Photo Maker Online Free',
    description: 'US 2×2 inch, UK/EU/India 35×45mm. Print-ready JPG. No upload.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Passport Photo Maker', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Passport Photo Maker Online Free — 2×2 inch & 35×45mm',
    description:
      'Make passport size photos online free. US 2×2 inch, UK/EU/India 35×45mm, white background. Print-ready JPG at 300 DPI — no upload, 100% browser-based and private.',
    faq: [
      {
        question: 'Will this passport photo be accepted?',
        answer:
          "This tool produces photos at the correct dimensions and 300 DPI for each country preset. The photo must still meet requirements for expression (neutral), background (plain white), lighting (even), and no glasses. Check your country's official requirements before submitting.",
      },
      {
        question: 'What size is a US passport photo?',
        answer:
          'US passport photos must be 2×2 inches (51×51mm). The face must be between 1 inch and 1 3/8 inches from the bottom of the chin to the top of the head. This tool outputs at exactly 600×600px at 300 DPI — the correct print size.',
      },
      {
        question: 'What is the passport photo size for UK, India, and Schengen?',
        answer:
          'UK, India, and Schengen visa photos are 35×45mm. At 300 DPI, this is 413×531 pixels. This is the most common passport photo size globally and is also used in Australia, Japan, and many other countries.',
      },
      {
        question: 'Is my photo uploaded to a server?',
        answer:
          'No. All processing happens in your browser using the Canvas API. Your photo never leaves your device.',
      },
      {
        question: 'Can I use a selfie for a passport photo?',
        answer:
          'You can upload a selfie, but most passport authorities require a photo taken against a plain white background with even lighting and a neutral expression. A front-facing photo with good lighting gives the best result.',
      },
      {
        question: 'How do I print a passport photo at home?',
        answer:
          'Download the JPG and print it at a photo print shop at 4×6 inch size. For a US 2×2 inch photo on 4×6 paper, you can fit 4 photos. Many print services (Walgreens, CVS, Walmart) accept digital files for same-day printing.',
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
