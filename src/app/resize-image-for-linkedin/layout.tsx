import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-linkedin/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for LinkedIn — Free, Exact Dimensions | CompressImg',
  description:
    'Resize any image to exact LinkedIn dimensions free. Banner (1584×396), post image (1200×627), profile picture (400×400). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for LinkedIn — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to LinkedIn banner, post, or profile picture dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image for LinkedIn — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for LinkedIn — Free, Exact Dimensions',
    description:
      'Perfect LinkedIn banner, post, and profile picture sizes in seconds. No upload, no account.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for LinkedIn', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'LinkedIn Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to LinkedIn specifications. Supports Profile Banner (1584×396), Post Image (1200×627), Profile Picture (400×400), and Company Logo (300×300). HEIC files are automatically converted.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image for LinkedIn',
      description:
        'Resize any image to LinkedIn banner, post image, or profile picture dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select LinkedIn image type',
          text: 'Choose Profile Banner (1584×396), Post Image (1200×627), Profile Picture (400×400), or Company Logo (300×300).',
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
          name: 'Download and upload to LinkedIn',
          text: 'Download the resized image and upload it directly to your LinkedIn profile, company page, or post.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the LinkedIn banner size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The LinkedIn profile banner (background photo) size is 1584×396px. Company page banners are 1128×191px. Upload at the recommended dimensions to avoid cropping.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size should a LinkedIn post image be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LinkedIn recommends 1200×627px for post images (1.91:1 ratio). This displays correctly in the feed without cropping. Square images (1200×1200) also work well.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the LinkedIn profile picture size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LinkedIn profile pictures should be at least 400×400px. LinkedIn displays them as a circle, so use a centered subject with space around the edges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a HEIC photo for LinkedIn?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LinkedIn may not accept HEIC files in all browsers. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen LinkedIn dimensions in one step.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this LinkedIn image resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForLinkedInLayout({ children }: { children: React.ReactNode }) {
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
