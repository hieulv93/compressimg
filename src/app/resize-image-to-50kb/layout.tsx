import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-50kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 50KB Online Free — Passport, NEET, JEE | CompressImg',
  description:
    'Resize any image to under 50KB free. Ideal for US passport portal (DS-160), NEET, JEE, and government exam photo uploads. JPEG output, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 50KB Online Free — Passport, NEET, JEE',
    description: 'Resize to under 50KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 50KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 50KB Online Free',
    description: 'Resize to under 50KB automatically. Free, browser-based, no upload.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 50KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image to 50KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to under 50KB. Ideal for passport portals (DS-160), NEET, JEE, SSC, and IBPS exam applications. JPEG output, no server upload.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I resize a passport photo to under 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your passport photo — the target is pre-set to 50KB. The tool automatically reduces quality and dimensions to fit under 50KB. A standard 413×531px passport photo typically reaches 25–45KB — well within the limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the photo size limit for NEET and JEE applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NEET UG allows photos from 10KB to 200KB; 50KB is a safe middle ground. JEE Main requires photos from 10KB to 100KB. This tool resizes to under 50KB automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'What photo size does the US passport DS-160 form require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The DS-160 form requires a JPEG photo under 240KB. Uploading a photo under 50KB is well within the limit and is accepted by all passport portal validators.',
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
        {
          '@type': 'Question',
          name: 'Can I resize a HEIC photo from iPhone to 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 50KB.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo50KbLayout({ children }: { children: React.ReactNode }) {
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
