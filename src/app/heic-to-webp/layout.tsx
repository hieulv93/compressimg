import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/heic-to-webp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'HEIC to WebP Converter Online Free — Convert iPhone Photos to WebP',
  description:
    'Free online HEIC to WebP converter. Convert iPhone HEIC photos to WebP instantly — smaller files for web, no upload, 100% browser-based and private.',
  keywords: [
    'heic to webp',
    'heic to webp converter',
    'convert heic to webp',
    'iphone heic to webp',
    'heic to webp online free',
    'heif to webp',
    'convert heif to webp',
    'heic to webp free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'HEIC to WebP Converter Online Free',
    description:
      'Convert iPhone HEIC photos to WebP for smaller web-ready files. No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'HEIC to WebP Converter Online Free' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to WebP Converter Online Free',
    description: 'Convert iPhone HEIC to WebP instantly. No uploads — 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'HEIC to WebP', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — HEIC to WebP Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based HEIC to WebP converter. Converts iPhone HEIC photos to compact WebP format for web use. No file upload required.',
      featureList: [
        'Convert HEIC to WebP online',
        'Convert HEIF to WebP online',
        '25–35% smaller than JPEG at same quality',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on desktop and Android browsers',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert HEIC to WebP Online',
      description:
        'Convert iPhone HEIC photos to WebP format for smaller, web-ready files — free, browser-based, no upload required.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'HEIC or HEIF photo file up to 20 MB' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg HEIC to WebP Converter', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your HEIC file',
          text: 'Click the upload area or drag and drop your HEIC or HEIF photo. AirDrop or email the photo from your iPhone first if needed.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Conversion to WebP runs automatically',
          text: 'Your HEIC photo is decoded and re-encoded as WebP entirely in your browser. WebP output is typically 25–35% smaller than JPEG at the same visual quality.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the WebP file',
          text: 'Click Download to save the WebP file. Upload it to your website, Shopify store, or any platform that accepts WebP.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why convert HEIC to WebP instead of JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is 25–35% smaller than JPEG at the same visual quality. For websites, WebP means faster page loads and better Core Web Vitals scores. All modern browsers support WebP, making it the best format for web images.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WebP support transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WebP supports full alpha transparency. HEIC photos from iPhone cameras do not contain transparency, so the converted WebP will have a solid (opaque) background.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my HEIC photos look different as WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 90+ WebP, the output is visually identical to the original HEIC. For web use at quality 80–85, the difference is imperceptible at normal viewing sizes while the file size is significantly smaller.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my HEIC files uploaded to a server during conversion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser. Your files never leave your device and are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function HeicToWebpLayout({ children }: { children: React.ReactNode }) {
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
