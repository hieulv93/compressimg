import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/convert-image`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Convert Image Online Free – JPG to PNG, PNG to WebP, WebP to JPG',
  description:
    'Free online image converter. Convert JPG, PNG, WebP to any format instantly. No upload — 100% browser-based. Transparency preserved for PNG and WebP output.',
  keywords: [
    'convert image online',
    'convert jpg to png',
    'convert png to webp',
    'convert webp to jpg',
    'image format converter',
    'jpg to png converter',
    'png to jpg converter',
    'convert image format free',
    'online image converter',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Convert Image Online Free – JPG to PNG, PNG to WebP, WebP to JPG',
    description:
      'Convert between JPG, PNG, and WebP instantly. Transparency preserved. No upload — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'CompressImg — Free Online Image Converter' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Image Online Free – JPG to PNG, PNG to WebP, WebP to JPG',
    description:
      'Convert JPG, PNG, WebP to any format instantly. No uploads — works 100% in your browser.',
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
        { '@type': 'ListItem', position: 2, name: 'Convert Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Online Image Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image format converter. Convert between JPG, PNG, and WebP instantly. Transparency preserved. No file upload required.',
      featureList: [
        'Convert JPG to PNG online',
        'Convert PNG to WebP online',
        'Convert WebP to JPG online',
        'Transparency preserved for PNG and WebP output',
        'White background fill for JPG output from transparent images',
        'No file upload — 100% browser-based',
        'Free with no limits',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this image converter free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free with no limits. No sign-up, no subscription, no watermarks. You can convert as many images as you want at no cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which formats can I convert between?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can convert between JPG, PNG, and WebP in any combination — JPG to PNG, PNG to WebP, WebP to JPG, and so on.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to transparency when I convert to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG does not support transparency. Transparent areas are replaced with a white background when converting to JPG. To keep transparency, choose PNG or WebP as the output format.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will converting reduce image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Converting to PNG is lossless — no quality change. Converting to JPG or WebP uses high-quality compression (92/100) that is visually indistinguishable from the original for most images.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is the converted file larger than the original?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This commonly happens when converting JPG to PNG. PNG stores every pixel losslessly, making it inherently larger than a compressed JPG. Convert to WebP for the smallest file size, or use the Compress Image tool after converting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens 100% in your browser using the HTML5 Canvas API. Your images never leave your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert multiple images at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tool converts one image at a time. After downloading, click Convert another image to start a new conversion immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this work on mobile phones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool is fully optimized for iOS and Android browsers. Tap to select a photo, choose the output format, and download — no app required.',
          },
        },
      ],
    },
  ],
}

export default function ConvertImageLayout({ children }: { children: React.ReactNode }) {
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
