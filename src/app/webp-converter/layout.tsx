import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/webp-converter/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'WebP Converter Online Free — Convert to & from WebP',
  description:
    'Free online WebP converter. Convert JPG, PNG to WebP or convert WebP back to JPG, PNG. No upload to server — 100% browser-based and private.',
  keywords: [
    'webp converter',
    'convert to webp',
    'webp converter online',
    'jpg to webp converter',
    'png to webp converter',
    'webp to jpg converter',
    'image to webp',
    'convert image to webp',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WebP Converter Online Free — Convert to & from WebP',
    description:
      'Free WebP converter. Convert JPG/PNG to WebP or WebP to JPG/PNG — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'WebP Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP Converter Online Free',
    description: 'Free WebP converter. Convert to/from WebP — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'WebP Converter', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free WebP Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based WebP converter. Convert JPG, PNG to WebP or WebP back to JPG, PNG. No upload required.',
      featureList: [
        'Convert JPG and PNG to WebP',
        'Convert WebP back to JPG or PNG',
        'Supports HEIC input (iPhone photos)',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I convert an image to WebP online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your JPG or PNG image, select WebP as the output format, and download the converted file. The conversion runs entirely in your browser — no upload to server, no sign-up, free with no limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why should I convert images to WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is 25–35% smaller than JPEG at the same visual quality. Smaller images load faster, use less bandwidth, and improve Google PageSpeed scores. All modern browsers support WebP including Chrome, Firefox, Safari 14+, and Edge.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert WebP back to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload your .webp file and select JPG as the output format. Use this for email attachments, print workflows, and platforms that do not support WebP such as older Outlook clients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Safari support WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Safari has supported WebP since version 14 (September 2020) on macOS Big Sur and iOS 14. All current iOS and macOS devices display WebP correctly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use WebP for email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Email clients including Gmail, Outlook, and Apple Mail do not reliably render WebP. Always use JPEG for email attachments and inline images.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image uploaded to a server when converting to WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion runs in your browser using the Canvas API. Your image never leaves your device. Safe for sensitive images including ID documents and personal photos.',
          },
        },
      ],
    },
  ],
}

export default function WebpConverterLayout({ children }: { children: React.ReactNode }) {
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
