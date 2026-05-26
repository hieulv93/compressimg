import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-150kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 150KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 150KB Online Free',
    description: 'Resize to under 150KB automatically. Free, browser-based.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resize Image in KB',
          item: `${SITE_URL}/resize-image-in-kb/`,
        },
        { '@type': 'ListItem', position: 3, name: 'Resize to 150KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image to 150KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to under 150KB. Ideal for NEET, JEE, college admissions, and government recruitment portals. JPEG output, no server upload.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the NEET photo size requirement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NEET UG accepts photos from 10KB to 200KB. Uploading a photo under 150KB is within the NEET limit and accepted by all NTA portal validators.',
          },
        },
        {
          '@type': 'Question',
          name: 'What photo size do college admission portals accept?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Indian college admission portals (DU, Mumbai University, state-level CETs) accept photos from 20KB to 200KB. A 150KB JPEG at 300×400px or similar is accepted by all major portals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing happens 100% in your browser. Your files never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo150KbLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
