import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/webp-to-jpg`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'WebP to JPG Converter Online Free — Convert WebP to JPEG',
  description:
    'Free online WebP to JPG converter. Convert WebP images to universally compatible JPG/JPEG instantly. No upload — 100% browser-based and private.',
  keywords: [
    'webp to jpg',
    'webp to jpeg',
    'webp to jpg converter',
    'convert webp to jpg',
    'convert webp to jpeg online',
    'webp to jpg online free',
    'change webp to jpg',
    'webp converter to jpg',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WebP to JPG Converter Online Free',
    description:
      'Convert WebP to JPG instantly for universal compatibility. No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'WebP to JPG Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to JPG Converter Online Free',
    description: 'Convert WebP to JPG for universal compatibility. No uploads — browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'WebP to JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — WebP to JPG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based WebP to JPG converter. Convert WebP images to universally compatible JPG format instantly. No file upload required.',
      featureList: [
        'Convert WebP to JPG online',
        'Convert WebP to JPEG online',
        'Universal JPG compatibility',
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
          name: "Why can't I open a WebP file on my computer?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is a modern format that older software does not support. Older Photoshop versions (before 2021), older Office versions, and Windows Photo Viewer on older Windows versions cannot open WebP. Converting to JPG gives a file that opens everywhere.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does converting WebP to JPG reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A small quality reduction is introduced because JPG uses lossy compression. This tool converts at high quality, which is virtually indistinguishable from the original at normal viewing sizes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to WebP transparency when converting to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG does not support transparency. Transparent areas in your WebP file are filled with a white background in the JPG output. If you need to preserve transparency, convert to PNG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the JPG be larger or smaller than the WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally larger. WebP is 25–35% more efficient than JPG, so converting WebP to JPG typically increases file size. This is the trade-off for gaining universal compatibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do websites use WebP instead of JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP produces smaller file sizes than JPG at the same visual quality, improving website loading speed and Core Web Vitals scores. When you save or download these images, you get a WebP file — converting to JPG makes them compatible with all applications.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert animated WebP to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool converts the first frame of an animated WebP file to a static JPG image. The resulting JPG will show only the first frame of the animation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert WebP to JPG on my iPhone or Android?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS Safari and Android Chrome. Tap to select a WebP file, wait for conversion, and download the JPG — no app installation required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my WebP files uploaded to a server during conversion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser using the Canvas API. Your files never leave your device and are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function WebpToJpgLayout({ children }: { children: React.ReactNode }) {
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
