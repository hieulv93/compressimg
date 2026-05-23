import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-200kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 200KB Online Free — Aadhaar, Visa | CompressImg',
  description:
    'Resize any image to under 200KB free. Perfect for Aadhaar/PAN document uploads, visa applications, and online form submissions. JPEG output, 100% private.',
  keywords: [
    'resize image to 200kb',
    'reduce image to 200kb',
    'compress photo to 200kb',
    'image to 200kb',
    'resize jpg to 200kb',
    'aadhaar image size',
    'pan card image size',
    'visa photo size',
    '200kb image resizer',
    'compress image under 200kb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 200KB Online Free — Aadhaar, Visa',
    description: 'Resize to under 200KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 200KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 200KB Online Free',
    description: 'Resize to under 200KB automatically. Free, browser-based, no upload.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 200KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image to 200KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to under 200KB. Ideal for Aadhaar/PAN document scans, visa applications, and bank KYC uploads. JPEG output, no server upload.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Aadhaar document upload size limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aadhaar update portal (UIDAI) typically requires documents under 200KB in JPEG format. This tool resizes to under 200KB automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I resize a scanned document to under 200KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Scan at 150–200 DPI (not 600 DPI), save as JPEG, then upload here. Most A4 scans at 1024px wide land at 100–180KB — within the 200KB limit. If still over, the tool reduces it automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the photo size limit for Schengen visa applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Schengen visa photo requirements vary by country but typically allow up to 500KB. Uploading under 200KB ensures compatibility with all Schengen consulate portals.',
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
          name: 'Can I resize a HEIC photo from iPhone to 200KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 200KB.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo200KbLayout({ children }: { children: React.ReactNode }) {
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
