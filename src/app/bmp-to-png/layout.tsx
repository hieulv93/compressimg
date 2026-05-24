import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/bmp-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'BMP to PNG Converter — Convert BMP to PNG Free Online',
  description:
    'Convert BMP to PNG free online. Smaller file size, transparency support, universal compatibility. No upload — 100% browser-based.',
  keywords: [
    'bmp to png',
    'convert bmp to png',
    'bmp to png online',
    'bmp to png free',
    'bmp png converter',
    'bitmap to png',
    'bmp file to png',
    'bmp converter',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'BMP to PNG Converter — Free Online',
    description:
      'Convert BMP to PNG instantly. Smaller file, transparency support. No upload — browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'BMP to PNG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMP to PNG — Free Online Converter',
    description: 'Convert BMP to PNG free. Smaller file, better compatibility. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'BMP to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — BMP to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based BMP to PNG converter. Convert uncompressed BMP bitmap files to lossless PNG — smaller file size, transparency support, universal web compatibility.',
      featureList: [
        'Convert BMP to PNG online',
        'Dramatically smaller file size than BMP',
        'Lossless PNG — no quality loss',
        'Transparency support in PNG output',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert BMP to PNG Online',
      description: 'Convert BMP bitmap files to PNG in your browser — free, no upload required.',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your BMP file',
          text: 'Click the upload area or drag and drop your BMP image. Bitmap files up to 20 MB are supported.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Automatic PNG conversion',
          text: 'Your BMP is decoded and converted to lossless PNG in your browser. No quality is lost — PNG uses lossless compression.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the PNG file',
          text: 'Click Download to save the PNG. Use it on the web, in design tools, or anywhere BMP is not accepted.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why convert BMP to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BMP (Bitmap) is an uncompressed format — files are huge and not suitable for web use. PNG uses lossless compression that typically reduces BMP file size by 60–80% without losing any image quality. PNG also supports transparency and is universally supported on the web, in design tools, and across all platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does BMP to PNG lose any quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. PNG uses lossless compression — every pixel is preserved exactly. The conversion from BMP to PNG never degrades image quality. The only change is that the file is smaller due to compression.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much smaller will the PNG be compared to BMP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typically 60–80% smaller. A 10MB BMP often converts to a 1–3MB PNG. The exact reduction depends on image content — solid colors and simple graphics compress more than photos with complex detail.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does BMP support transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BMP has limited transparency support (only in 32-bit BMP with alpha channel). PNG fully supports transparency with a proper alpha channel. If your BMP has transparent areas, they will be preserved in the PNG output.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my BMP files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens in your browser using the HTML5 Canvas API. Your BMP files are never sent to any server — they stay on your device throughout the process.',
          },
        },
      ],
    },
  ],
}

export default function BmpToPngLayout({ children }: { children: React.ReactNode }) {
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
