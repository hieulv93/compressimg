import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-30kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 30KB Online Free — SSC, IBPS, UPSC Signature',
  description:
    'Resize any image to under 30KB free. Ideal for SSC, IBPS, UPSC, and government exam signature uploads. JPEG output, 100% browser-based — no upload, no sign-up.',
  keywords: [
    'resize image to 30kb',
    'compress image to 30kb',
    'reduce image to 30kb',
    'ssc signature size 30kb',
    'ibps signature size',
    'upsc signature 30kb',
    'government exam photo size',
    'image under 30kb',
    '30kb image resizer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 30KB Online Free — SSC, IBPS, UPSC',
    description: 'Resize to under 30KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 30KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 30KB Online Free',
    description: 'Resize to under 30KB automatically. Free, browser-based.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 30KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image to 30KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to under 30KB. Ideal for SSC, IBPS, UPSC, and government exam signature uploads. JPEG output, no server upload.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the SSC signature size requirement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SSC CGL, CHSL, and MTS require signature images of 10–20KB at 140×60px. Uploading under 30KB is well within all SSC portal limits.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the IBPS signature size requirement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "IBPS PO, Clerk, and SO portals require signatures of 10–20KB. This tool's 30KB target is accepted by all IBPS portals.",
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

export default function ResizeTo30KbLayout({ children }: { children: React.ReactNode }) {
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
