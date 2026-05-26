import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-20kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 20KB Online Free — SSC Signature, UPSC | CompressImg',
  description:
    'Resize any image to under 20KB free. Perfect for SSC signature, UPSC signature, and government form uploads. JPEG output, 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 20KB Online Free',
    description: 'Resize any image to under 20KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 20KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 20KB Online Free',
    description: 'Resize to under 20KB automatically. Free, browser-based, no upload.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 20KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image to 20KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to under 20KB. Ideal for SSC/UPSC signature uploads and government form requirements. JPEG output, no server upload.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I resize an image to under 20KB for SSC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your signature image — the target is pre-set to 20KB. The tool automatically reduces quality and dimensions until the file is under 20KB. Download the JPEG and upload it to the SSC portal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size should my SSC signature image be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SSC requires signature images under 20KB, typically at 140×60px. Photograph or scan your signature on white paper, crop tightly, then use this tool to reduce to under 20KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the image quality be acceptable at under 20KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For signature images (dark ink on white background), under 20KB is achievable with minimal visible quality loss. For photographs at very small sizes, some compression artifacts may appear but the image remains recognizable.',
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
          name: 'Can I resize a HEIC photo from iPhone to 20KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 20KB.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo20KbLayout({ children }: { children: React.ReactNode }) {
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
