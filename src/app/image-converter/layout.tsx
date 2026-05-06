import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/image-converter/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Image Converter Online Free — Convert JPG, PNG, WebP',
  description:
    'Free online image converter. Convert images between JPG, PNG, and WebP formats instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'image converter',
    'image converter online',
    'convert image',
    'convert image online',
    'image format converter',
    'free image converter',
    'online image converter',
    'convert jpg png webp',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image Converter Online Free — Convert JPG, PNG, WebP',
    description:
      'Free image converter. Convert between JPG, PNG, WebP formats — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Image Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Converter Online Free',
    description: 'Free image converter. Convert JPG, PNG, WebP — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Image Converter', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Image Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image converter. Convert between JPG, PNG, and WebP formats. Supports HEIC input. No upload required.',
      featureList: [
        'Convert images between JPG, PNG, and WebP',
        'Supports HEIC input (iPhone photos)',
        'Instant format switching',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I convert an image online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image, select the output format (JPG, PNG, or WebP), and download the converted file. The conversion runs entirely in your browser — no upload to server, no sign-up, free with no daily limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image format for websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is the best format for websites — 25–35% smaller than JPEG at the same visual quality. All modern browsers support WebP. Converting photos to WebP improves page load speed and Google PageSpeed scores.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I convert JPG to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your JPG file and select PNG as the output format. The PNG downloads instantly. PNG is lossless and supports transparency — use it for logos and graphics, not photographs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I convert PNG to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your PNG and select JPG as the output format. Transparent backgrounds are replaced with white. JPG is smaller and universally compatible — ideal for email, print, and form uploads.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I convert HEIC (iPhone photos) to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your HEIC file and select JPG as the output format. The tool converts HEIC to JPG automatically in your browser. Use this to make iPhone photos compatible with Windows and platforms that do not support HEIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does converting an image change its dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Format conversion changes the file format only — width and height stay exactly the same. To change dimensions, use the Resize Image tool.',
          },
        },
      ],
    },
  ],
}

export default function ImageConverterLayout({ children }: { children: React.ReactNode }) {
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
