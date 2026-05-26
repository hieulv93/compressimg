import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/avif-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'AVIF to PNG Converter — Convert AVIF to PNG Free Online',
  description:
    'Convert AVIF to PNG free online. Preserve transparency and full quality — no upload, 100% browser-based. Works on Chrome, Firefox, and Safari.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AVIF to PNG Converter — Free Online',
    description:
      'Convert AVIF to PNG instantly. Preserve transparency. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AVIF to PNG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to PNG — Free Online Converter',
    description: 'Convert AVIF to PNG free. Preserve transparency. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'AVIF to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — AVIF to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires Chrome 85+, Firefox 93+, or Safari 16+',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based AVIF to PNG converter. Convert modern AVIF images to lossless PNG with full transparency support. No upload required.',
      featureList: [
        'Convert AVIF to PNG online',
        'Preserves full image quality (lossless PNG)',
        'Supports AVIF transparency → PNG alpha channel',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on Chrome 85+, Firefox 93+, Safari 16+',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert AVIF to PNG Online',
      description: 'Convert AVIF to lossless PNG in your browser — free, no upload required.',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your AVIF file',
          text: 'Click the upload area or drag and drop your AVIF image. Files up to 20 MB are supported. Use Chrome 85+ or Firefox 93+ for AVIF support.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Automatic PNG conversion',
          text: 'Your AVIF is decoded and converted to lossless PNG in your browser. Transparency is preserved in the PNG output.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the PNG file',
          text: 'Click Download to save the PNG. The file opens in any image editor, browser, or design tool without needing AVIF support.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why convert AVIF to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF is not supported in all software, older image editors, or some platforms. PNG is universally supported everywhere. Use PNG when you need lossless quality, transparency support, or maximum compatibility with design tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AVIF to PNG preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Both AVIF and PNG support transparency (alpha channel). This converter preserves the alpha channel during conversion — transparent areas in the AVIF will remain transparent in the PNG output.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the PNG file be larger than the AVIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — PNG is a lossless format, so PNG files are typically larger than AVIF. A 500KB AVIF may convert to a 2–5MB PNG. If file size matters, consider converting to WebP or JPG instead, or compress the PNG afterwards.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which browsers support AVIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF is supported in Chrome 85+, Firefox 93+, and Safari 16+ (iOS 16 / macOS Ventura). This tool requires one of these browsers to decode AVIF files. If you are on an unsupported browser, upgrade to convert AVIF.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my AVIF files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens in your browser using the HTML5 Canvas API. Your files are never sent to any server — they stay on your device throughout the process.',
          },
        },
      ],
    },
  ],
}

export default function AvifToPngLayout({ children }: { children: React.ReactNode }) {
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
