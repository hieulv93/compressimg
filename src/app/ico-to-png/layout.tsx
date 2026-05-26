import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/ico-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'ICO to PNG Converter — Convert Favicon ICO to PNG Free Online',
  description:
    'Convert ICO to PNG free online. Extract favicon or icon from ICO file and save as PNG. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'ICO to PNG Converter — Free Online',
    description:
      'Convert ICO favicon to PNG instantly. Extract icon as PNG for use in designs and web projects. No upload — browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'ICO to PNG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICO to PNG — Free Online Converter',
    description: 'Convert ICO favicon to PNG free. No upload, instant conversion.',
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
        { '@type': 'ListItem', position: 2, name: 'ICO to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — ICO to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based ICO to PNG converter. Extract favicon or icon images from ICO files and save as PNG. Preserves transparency. No upload required.',
      featureList: [
        'Convert ICO to PNG online',
        'Extracts the largest icon size from ICO',
        'Preserves transparency (alpha channel)',
        'Works with favicon.ico files',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert ICO to PNG Online',
      description: 'Convert ICO favicon files to PNG in your browser — free, no upload required.',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your ICO file',
          text: 'Click the upload area or drag and drop your ICO file. Standard favicon.ico files and icon files are supported.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Automatic PNG extraction',
          text: 'The browser renders the ICO file and converts the icon to PNG, preserving any transparency in the original.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the PNG file',
          text: 'Click Download to save the PNG. Use it in design tools, on websites, or in presentations.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an ICO file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ICO (Icon) is a file format used by Windows for application icons and website favicons. An ICO file can contain multiple image sizes (16×16, 32×32, 48×48, 64×64, 128×128, 256×256) in a single file, allowing the OS to pick the best size for each context.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why convert ICO to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ICO files are not supported in most design tools, image editors, or web contexts outside of favicons. Converting ICO to PNG lets you use the icon image in Figma, Photoshop, Canva, presentations, and anywhere that accepts standard image formats.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the ICO to PNG conversion preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ICO files support transparency and PNG preserves alpha channels. Transparent areas in the ICO icon remain transparent in the PNG output.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which size does it extract from the ICO file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The browser renders the ICO at the size best matching the display context. For most ICO files, this is the largest embedded size (often 256×256 or 128×128 for modern icons, 32×32 for classic favicons).',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my ICO files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens in your browser. Your ICO files are never sent to any server — they stay on your device.',
          },
        },
      ],
    },
  ],
}

export default function IcoToPngLayout({ children }: { children: React.ReactNode }) {
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
