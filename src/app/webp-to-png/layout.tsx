import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/webp-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'WebP to PNG Converter Online Free — Convert WebP to PNG',
  description:
    'Free online WebP to PNG converter. Convert WebP to lossless PNG instantly — preserves transparency, no upload, 100% browser-based and private.',
  keywords: [
    'webp to png',
    'webp to png converter',
    'convert webp to png',
    'webp to png online free',
    'change webp to png',
    'webp converter to png',
    'convert webp image to png',
    'webp to png free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WebP to PNG Converter Online Free',
    description:
      'Convert WebP files to lossless PNG — preserves transparency, works in all software. No uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'WebP to PNG Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to PNG Converter Online Free',
    description:
      'Convert WebP to PNG instantly. Preserves transparency. No uploads — 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'WebP to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — WebP to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based WebP to PNG converter. Converts WebP files to lossless PNG, preserving transparency. No file upload required.',
      featureList: [
        'Convert WebP to PNG online',
        'Preserves transparency (alpha channel)',
        'Lossless PNG output',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does converting WebP to PNG lose quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Converting WebP to PNG does not introduce new quality loss — PNG stores pixels losslessly. However, if the original WebP used lossy compression (most WebP files do), those artifacts are already present and will appear in the PNG. The PNG is a faithful copy of what the WebP displays.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is the PNG file larger than the WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG uses lossless compression and stores every pixel without discarding data. WebP uses lossy compression (like JPG) to achieve small file sizes. Converting lossy WebP to lossless PNG naturally produces a larger file. A 200KB WebP may become a 1–3MB PNG. If file size matters, convert to JPG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WebP to PNG preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. If the original WebP has a transparent background (alpha channel), the PNG conversion preserves that transparency exactly. PNG fully supports alpha channels. This is one of the key reasons to choose PNG over JPG when converting a transparent WebP.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I open WebP files in Photoshop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Photoshop added native WebP support in version 23.2 (released 2022). Older versions including Photoshop CS6 and CC versions before 2022 cannot open WebP natively. Converting to PNG first allows you to open the file in any Photoshop version.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I insert WebP images in Microsoft Word or PowerPoint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Microsoft Office 2019 and earlier do not support WebP. Microsoft 365 (subscription) added WebP support in 2023, but compatibility varies. Converting WebP to PNG guarantees the image displays correctly in all Office versions, including older ones.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I convert WebP to PNG or JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Convert to PNG if: you need to preserve transparency, you will edit the image further, or you need lossless quality. Convert to JPG if: file size is important, the image is a photograph without transparency, or you need the smallest file. JPG will be significantly smaller than PNG for photos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert WebP to PNG on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers. Tap to select a WebP file from your device, and the PNG downloads directly to your device. No app installation required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my WebP files uploaded to a server during conversion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser using the Canvas API. Your WebP files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone.',
          },
        },
      ],
    },
  ],
}

export default function WebpToPngLayout({ children }: { children: React.ReactNode }) {
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
