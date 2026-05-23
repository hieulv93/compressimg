import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-twitter/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for Twitter / X — Free, Exact Dimensions | CompressImg',
  description:
    'Resize any image to exact Twitter / X dimensions free. Post image (1200×675), header (1500×500), profile picture (400×400). HEIC from iPhone supported. No upload — browser-based.',
  keywords: [
    'resize image for twitter',
    'twitter image size',
    'twitter post image size',
    'twitter header size',
    'twitter profile picture size',
    'x image dimensions',
    'resize twitter photo',
    'twitter card image size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Twitter / X — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to Twitter post, header, or profile picture dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image for Twitter — CompressImg' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Twitter / X — Free, Exact Dimensions',
    description:
      'Perfect Twitter post, header, and profile picture sizes in seconds. No upload, no account.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for Twitter', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Twitter Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to Twitter / X specifications. Supports Post Image (1200×675), Header (1500×500), Profile Picture (400×400), and Twitter Card (1200×628). HEIC files are automatically converted.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image for Twitter / X',
      description:
        'Resize any image to Twitter post, header, or profile picture dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select Twitter image type',
          text: 'Choose Post Image (1200×675), Header (1500×500), Profile Picture (400×400), or Twitter Card (1200×628).',
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
          name: 'Download and post to Twitter / X',
          text: 'Download the resized image and attach it to your tweet or upload it to your Twitter profile or header.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best image size for a Twitter post?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1200×675px (16:9 ratio). This displays at full width in the Twitter / X feed without cropping. Twitter also accepts 1:1 square (1200×1200) and portrait (1080×1350) images.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Twitter header size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1500×500px. Twitter crops the header differently on desktop and mobile — keep important content in the center 1500×360px area to ensure it remains visible on all devices.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size is a Twitter profile picture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Twitter profile pictures display at 400×400px in the profile view and as small as 48×48px next to tweets. Upload at 400×400px — Twitter crops it to a circle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a HEIC photo on Twitter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Twitter does not accept HEIC files. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen Twitter dimensions in one step.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this Twitter image resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForTwitterLayout({ children }: { children: React.ReactNode }) {
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
