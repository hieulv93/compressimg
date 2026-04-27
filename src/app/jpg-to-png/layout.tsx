import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/jpg-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'JPG to PNG Converter Online Free — Convert JPEG to PNG',
  description:
    'Free online JPG to PNG converter. Convert JPEG to PNG instantly — lossless, no upload, 100% browser-based and private. Supports JPG and JPEG files up to 20MB.',
  keywords: [
    'jpg to png',
    'jpeg to png',
    'jpg to png converter',
    'convert jpg to png',
    'convert jpeg to png online',
    'jpg to png online free',
    'change jpg to png',
    'jpg to png free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'JPG to PNG Converter Online Free',
    description:
      'Convert JPG and JPEG files to PNG instantly. Lossless output, no uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'JPG to PNG Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to PNG Converter Online Free',
    description: 'Convert JPG to PNG instantly. No uploads — 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'JPG to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — JPG to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based JPG to PNG converter. Converts JPEG files to lossless PNG instantly. No file upload required.',
      featureList: [
        'Convert JPG to PNG online',
        'Convert JPEG to PNG online',
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
          name: 'Does converting JPG to PNG improve image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No — converting JPG to PNG does not improve quality. Any compression artifacts already present in the JPG are preserved exactly in the PNG output. The benefit is that PNG is lossless, so no additional quality is lost in future edits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the PNG have a transparent background after conversion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. JPG files do not contain transparency data. The resulting PNG will have a solid (opaque) background matching the original JPG. To remove the background and make it transparent, you need a background removal tool after conversion.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is the converted PNG file larger than the original JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG stores every pixel losslessly, while JPG discards data to achieve small file sizes. A photograph that is 500KB as JPG may become 3–8MB as PNG. This is normal — PNG is not designed for photographic compression.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert JPEG to PNG? Is JPEG the same as JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — JPEG and JPG are the same format. This tool accepts both .jpg and .jpeg files and converts them to PNG identically.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the JPG to PNG conversion lossless?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The conversion process itself is lossless — PNG stores the pixel data from the JPG exactly as-is with no additional quality loss. However, the original JPG already contains compression artifacts from its own encoding.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best use case for converting JPG to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common reasons: you need to edit the image multiple times without accumulating quality loss, you need transparency support, you are working with logos or graphics that need sharp edges, or you are compositing the image in a design tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert JPG to PNG on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers. Tap to select a photo from your camera roll, and download the converted PNG — no app installation required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my JPG files uploaded to a server during conversion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser using the Canvas API. Your files never leave your device and are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function JpgToPngLayout({ children }: { children: React.ReactNode }) {
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
