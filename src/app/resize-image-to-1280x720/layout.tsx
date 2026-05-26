import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-1280x720/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 1280×720 (HD) Free | CompressImg',
  description:
    'Resize any image to 1280×720 HD instantly. Perfect for YouTube thumbnails, video frames, and web banners. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 1280×720 (HD) Free | CompressImg',
    description:
      'Resize any image to 1280×720 HD. Perfect for YouTube thumbnails and video content. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image to 1280×720 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 1280×720 (HD) Free',
    description: 'Perfect 1280×720 HD images in seconds. No upload, no account needed.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 1280×720', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Resize Image to 1280×720 — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize any image to 1280×720 HD and other common resolutions. Supports JPG, PNG, WebP, HEIC. No file upload required.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to 1280×720',
      description: 'Resize any image to 1280×720 HD in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select resolution',
          text: 'Choose 1280×720 HD or another resolution from the preset buttons.',
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
          text: 'Download the resized image instantly. No account or upload to any server.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is 1280×720 resolution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1280×720 is HD (High Definition), also called 720p. It has 1280 pixels wide and 720 pixels tall in a 16:9 aspect ratio. It is the minimum HD standard and is used for YouTube thumbnails, web video, and many display sizes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is 1280×720 the correct YouTube thumbnail size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. YouTube's official recommended thumbnail size is 1280×720px (16:9 ratio) at under 2MB. This size displays correctly on all devices from mobile to desktop.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between 720p and 1080p?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '720p (1280×720) is HD and contains 921,600 pixels. 1080p (1920×1080) is Full HD and contains 2,073,600 pixels — about 2.25× more. 1080p is sharper but produces larger files. For YouTube thumbnails, 720p is the standard.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will resizing to 1280×720 distort my image?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tool maintains the original aspect ratio. If your image is not 16:9, it will be letterboxed with white bars to fit exactly 1280×720 without distortion.',
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

export default function ResizeTo1280x720Layout({ children }: { children: React.ReactNode }) {
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
