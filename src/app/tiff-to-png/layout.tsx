import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/tiff-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'TIFF to PNG Converter Online Free — Convert TIF to PNG',
  description:
    'Free online TIFF to PNG converter. Convert TIF and TIFF files to lossless PNG instantly — no upload, 100% browser-based and private. Supports TIFF files up to 20MB.',
  keywords: [
    'tiff to png',
    'tif to png',
    'tiff to png converter',
    'convert tiff to png',
    'convert tif to png online',
    'tiff to png online free',
    'tiff to png free',
    'change tiff to png',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'TIFF to PNG Converter Online Free',
    description:
      'Convert TIFF and TIF files to lossless PNG instantly. No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'TIFF to PNG Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TIFF to PNG Converter Online Free',
    description: 'Convert TIFF to PNG instantly. No uploads — 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'TIFF to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — TIFF to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based TIFF to PNG converter. Converts TIFF and TIF files to lossless PNG instantly. No file upload required.',
      featureList: [
        'Convert TIFF to PNG online',
        'Convert TIF to PNG online',
        'Lossless PNG output with transparency support',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert TIFF to PNG Online',
      description: 'Convert TIFF images to lossless PNG — free, browser-based, no upload required.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'TIFF or TIF image file up to 20 MB' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg TIFF to PNG Converter', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your TIFF file',
          text: 'Click the upload area or drag and drop your TIFF or TIF file. Supports files up to 20 MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Conversion to PNG runs automatically',
          text: 'Your TIFF is decoded and converted to lossless PNG entirely in your browser. Transparency is preserved if present in the source.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the PNG file',
          text: 'Click Download to save the converted PNG file to your device.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does converting TIFF to PNG lose quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Both TIFF and PNG are lossless formats. Converting between them introduces zero quality loss — every pixel is reproduced exactly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will transparency be preserved when converting TIFF to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. PNG fully supports alpha transparency. If your TIFF contains transparent regions, they are preserved in the PNG output.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why convert TIFF to PNG instead of JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG is lossless like TIFF, so it preserves every pixel exactly. JPEG is lossy and introduces compression artifacts. Convert to PNG when you need lossless output or transparency support. Convert to JPEG when you need a smaller file size for photography.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my TIFF files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser. Your files never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function TiffToPngLayout({ children }: { children: React.ReactNode }) {
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
