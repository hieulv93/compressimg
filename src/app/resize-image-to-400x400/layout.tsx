import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-400x400/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 400×400 Free | CompressImg',
  description:
    'Resize any image to 400×400 instantly. Perfect for profile pictures, avatars, and small product photos. No upload — 100% browser-based.',
  keywords: [
    'resize image to 400x400',
    '400x400 image resize',
    'resize to 400 400',
    '400x400 profile picture',
    'profile photo resize 400',
    'resize image profile',
    '400x400 photo resize',
    'avatar resize 400x400',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 400×400 Free | CompressImg',
    description:
      'Resize any image to 400×400. Perfect for profile pictures and avatars. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image to 400×400 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 400×400 Free',
    description: 'Perfect 400×400 profile pictures in seconds. No upload, no account needed.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 400×400', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Resize Image to 400×400 — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize any image to 400×400 and other profile picture sizes. Supports JPG, PNG, WebP, HEIC. No file upload required.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to 400×400',
      description: 'Resize any image to 400×400 in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select size',
          text: 'Choose 400×400 or another profile picture size from the preset buttons.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your image',
          text: 'Upload your JPG, PNG, WebP, or HEIC file. iPhone HEIC photos are automatically converted.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download',
          text: 'Download the resized image instantly. Ready to upload as your profile picture.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is 400×400 used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '400×400px is a common profile picture and avatar size used on Twitter/X, Discord, forums, and many web applications. It is larger than the minimum required by most platforms, ensuring high-quality display even on high-DPI (Retina) screens.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size profile picture does Twitter require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Twitter/X displays profile photos at 400×400px maximum. The platform recommends uploading at 400×400px or larger so it looks sharp on Retina displays. The photo is displayed as a circle on profiles but stored as a square.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between 300×300 and 400×400?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '400×400 contains 78% more pixels than 300×300, making it noticeably sharper on high-DPI screens. For profile pictures, 400×400 is the better choice as it maintains quality when displayed on Retina/HiDPI monitors.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my image be cropped to fit 400×400?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tool fits your image within 400×400 while preserving the original aspect ratio. If your image is not square, white bars are added to fill the frame without cropping or distorting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens entirely in your browser. Your images are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo400x400Layout({ children }: { children: React.ReactNode }) {
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
