import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-100kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 100KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 100KB Online Free',
    description: 'Resize to under 100KB automatically. Free, browser-based, no upload.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 100KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image to 100KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to under 100KB. Ideal for resume photos, Naukri, IBPS bank exams, and job portal uploads. JPEG output, no server upload.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I resize a resume photo to under 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your photo — the target is pre-set to 100KB. The tool automatically reduces quality and dimensions to fit under 100KB. A 600×600px JPEG at quality 70 typically lands at 30–70KB — well within the limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What photo size does Naukri.com require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Naukri.com requires profile photos under 100KB in JPEG or PNG format. This tool resizes to under 100KB automatically and outputs JPEG — the preferred format.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the IBPS photo size requirement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IBPS PO, Clerk, and SO exams require photos under 50KB and signatures under 20KB. Use the 50KB target for IBPS photos. For a photo under 100KB (required for some IBPS forms), the default target on this page works.',
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
          name: 'Can I resize a HEIC photo from iPhone to 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 100KB.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo100KbLayout({ children }: { children: React.ReactNode }) {
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
