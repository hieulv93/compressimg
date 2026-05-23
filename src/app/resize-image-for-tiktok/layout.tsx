import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-tiktok/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for TikTok — Free, Exact Dimensions | CompressImg',
  description:
    'Resize any image to exact TikTok dimensions free. Video cover (1080×1920), profile picture (200×200), square post (1080×1080). HEIC from iPhone supported. No upload — browser-based.',
  keywords: [
    'resize image for tiktok',
    'tiktok image size',
    'tiktok video cover size',
    'tiktok profile picture size',
    'tiktok post size',
    'tiktok photo dimensions',
    'resize tiktok photo',
    'tiktok thumbnail size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for TikTok — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to TikTok video cover, profile picture, or square post dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image for TikTok — CompressImg' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for TikTok — Free, Exact Dimensions',
    description:
      'Perfect TikTok video cover, profile picture, and post sizes in seconds. No upload, no account.',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resize Image',
          item: `${SITE_URL}/resize-image/`,
        },
        { '@type': 'ListItem', position: 3, name: 'Resize for TikTok', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'TikTok Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to TikTok specifications. Supports Video Cover (1080×1920), Profile Picture (200×200), Square Post (1080×1080), and Landscape (1920×1080). HEIC files are automatically converted.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image for TikTok',
      description:
        'Resize any image to TikTok video cover, profile picture, or post dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select TikTok image type',
          text: 'Choose Video Cover (1080×1920), Profile Picture (200×200), Square Post (1080×1080), or Landscape (1920×1080).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your image',
          text: 'Upload your JPG, PNG, WebP, or HEIC file. iPhone HEIC photos are automatically converted to JPEG.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and use on TikTok',
          text: 'Download the resized image and use it as your TikTok video cover, profile picture, or post thumbnail.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the TikTok video cover size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TikTok video covers are 1080×1920px (9:16 ratio) — the same as the full-screen vertical video format. Your cover image should fill the entire 1080×1920px canvas with the most important content centered.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size is a TikTok profile picture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TikTok profile pictures display at 200×200px and are cropped to a circle. Upload at 200×200px or larger — TikTok will downsample it. Center your subject with space around the edges.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image size does TikTok recommend for posts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photo posts (TikTok Stories / carousel posts), 1080×1920px (9:16) works best for full-screen display. Square 1080×1080px is also accepted and works well for product-style posts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a HEIC photo for TikTok?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TikTok may not accept HEIC files on all devices. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen TikTok dimensions in one step.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this TikTok image resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForTikTokLayout({ children }: { children: React.ReactNode }) {
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
