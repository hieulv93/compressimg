import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-facebook/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for Facebook — Free, Exact Dimensions | CompressImg',
  description:
    'Resize any image to exact Facebook dimensions free. Cover photo (820×312), post image (1200×630), story (1080×1920). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Facebook — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to Facebook cover, post, story, or profile dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image for Facebook — CompressImg' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Facebook — Free, Exact Dimensions',
    description:
      'Perfect Facebook cover, post, story, and profile picture sizes in seconds. No upload, no account.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for Facebook', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Facebook Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to Facebook specifications. Supports Cover Photo (820×312), Post Image (1200×630), Story (1080×1920), and Profile Picture (170×170). HEIC files are automatically converted.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image for Facebook',
      description:
        'Resize any image to Facebook cover photo, post, story, or profile picture dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select Facebook image type',
          text: 'Choose Cover Photo (820×312), Post Image (1200×630), Story (1080×1920), or Profile Picture (170×170).',
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
          name: 'Download and upload to Facebook',
          text: 'Download the resized image and upload it directly to your Facebook profile, page, or post.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Facebook cover photo size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Facebook cover photo size is 820×312px on desktop and 640×360px on mobile. Facebook recommends uploading at 820×312px — it displays correctly across all devices.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size should a Facebook post image be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Facebook recommends 1200×630px for shared link images and post photos. This displays at the correct ratio in both the feed and when shared as a link preview.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Facebook profile picture size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Facebook profile pictures display at 170×170px on desktop and 128×128px on mobile. Upload at least 170×170px — Facebook crops it to a circle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a HEIC photo for Facebook?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Facebook does not always accept HEIC files in all browsers. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen Facebook dimensions in one step.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this Facebook image resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForFacebookLayout({ children }: { children: React.ReactNode }) {
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
