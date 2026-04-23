import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image Online Free – Change Photo Dimensions Instantly',
  description:
    'Free online image resizer. Change width and height of JPG, PNG, WebP in seconds. Instagram, YouTube, Twitter presets included. No upload — 100% browser-based.',
  keywords: [
    'resize image',
    'resize image online free',
    'resize image for instagram',
    'resize photo online',
    'change image dimensions',
    'resize jpg online',
    'resize png online',
    'image resizer',
    'resize image to specific size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image Online Free – Change Photo Dimensions Instantly',
    description:
      'Free online image resizer. Change dimensions for Instagram, YouTube, Twitter and more. 100% browser-based — your images never leave your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'CompressImg — Free Online Image Resizer' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image Online Free – Change Photo Dimensions Instantly',
    description:
      'Resize JPG, PNG, WebP to any size instantly. No uploads — works 100% in your browser.',
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
        { '@type': 'ListItem', position: 2, name: 'Resize Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Online Image Resizer',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image resizer. Supports JPG, PNG, WebP. Resize to any pixel dimension or use presets for Instagram, YouTube, Twitter, and more. No upload required.',
      featureList: [
        'Resize JPG images online',
        'Resize PNG images online',
        'Resize WebP images online',
        'Lock aspect ratio automatically',
        'Quick presets: Instagram, YouTube, Twitter, 4K, Full HD',
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
          name: 'Is this image resizer free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free with no limits. No sign-up, no subscription, no watermarks. You can resize as many images as you want at no cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does resizing reduce image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shrinking an image (downscaling) generally preserves quality very well. Enlarging (upscaling) can reduce sharpness. For upscaling beyond 2x the original size, AI-based upscalers produce better results.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize an image without changing the aspect ratio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Enable the lock icon between the width and height fields. When locked, changing one dimension automatically calculates the other to preserve the original aspect ratio.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image formats are supported?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG, PNG, and WebP are supported. The output keeps the same format as the input. PNG files retain full transparency after resizing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens 100% in your browser using the HTML5 Canvas API. Your images never leave your device and are never stored on any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum file size I can upload?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The maximum file size is 20MB. Maximum output dimensions are 8000×8000 pixels.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is the resized file larger than the original?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you increase the image dimensions, the output has more pixels and a larger file size. To reduce file size, use our Compress Image tool after resizing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this work on mobile phones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool is fully optimized for iOS and Android browsers. Tap to select an image from your gallery, set dimensions, and download — no app required.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageLayout({ children }: { children: React.ReactNode }) {
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
