import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/base64-to-image/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Base64 to Image Converter — Decode & Download Free Online',
  description:
    'Paste a Base64 string and instantly decode it back to an image. Preview and download as JPG. 100% browser-based — no upload, no sign-up. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Base64 to Image Converter — Decode & Download Free Online',
    description:
      'Paste any Base64 string and decode it to an image instantly. Preview and download. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Base64 to Image Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 to Image Converter — Free Online',
    description: 'Paste Base64 string, decode to image, download. Free & browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Base64 to Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Base64 to Image Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based Base64 to image decoder. Paste a Base64 data URL or raw Base64 string and preview the decoded image instantly. Download as JPG. No server, 100% private.',
      featureList: [
        'Decodes Base64 data URL or raw Base64 string to image',
        'Supports data:image/jpeg, data:image/png, data:image/webp prefixes',
        'Instant image preview in browser',
        'Download decoded image as JPG',
        'No file upload — 100% browser-based',
        'Free with no limits or sign-up',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert Base64 to Image',
      totalTime: 'PT5S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Paste your Base64 string',
          text: 'Paste the full Base64 data URL (data:image/jpeg;base64,...) or just the raw Base64 string into the text box.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Click Decode Image',
          text: 'Click the Decode Image button. The tool validates the Base64 string and renders it as an image preview instantly.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the image',
          text: 'Click Download to save the decoded image as a JPG file.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What formats does Base64 to image decoding support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool accepts Base64 data URLs with any image prefix: data:image/jpeg, data:image/png, data:image/webp, and data:image/gif. You can also paste a raw Base64 string without the data URL prefix — the tool will attempt to decode it as JPEG by default.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get a Base64 string to decode?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Base64 image strings appear in HTML src attributes (src="data:image/jpeg;base64,..."), in CSS background-image declarations, in JSON API responses, in database records that store images as text, and from our Image to Base64 converter tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the decoded image the same quality as the original?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Base64 decoding is a lossless operation — it reconstructs the exact original binary data. The image quality is identical to what was encoded. No additional compression is applied.',
          },
        },
      ],
    },
  ],
}

export default function Base64ToImageLayout({ children }: { children: React.ReactNode }) {
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
