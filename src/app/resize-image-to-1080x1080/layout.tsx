import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-1080x1080/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 1080×1080 (Square) Free | CompressImg',
  description:
    'Resize any image to 1080×1080 square instantly. Perfect for Instagram posts, product photos, and profile pictures. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 1080×1080 (Square) Free | CompressImg',
    description:
      'Resize any image to 1080×1080 square. Perfect for Instagram posts and product photos. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image to 1080×1080 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 1080×1080 (Square) Free',
    description: 'Perfect 1080×1080 square images in seconds. No upload, no account needed.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 1080×1080', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Resize Image to 1080×1080 — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize any image to 1080×1080 square and other square sizes. Supports JPG, PNG, WebP, HEIC. No file upload required.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to 1080×1080',
      description: 'Resize any image to 1080×1080 square in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select size',
          text: 'Choose 1080×1080 or another square size from the preset buttons.',
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
          text: 'Download the resized square image instantly. Ready for Instagram, product listings, or any 1:1 use.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is 1080×1080 the standard Instagram square size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Instagram displays square posts at 1080×1080px on high-DPI screens. Uploading at this exact size ensures the sharpest display without Instagram's server upscaling or downscaling.",
          },
        },
        {
          '@type': 'Question',
          name: 'Will my image be cropped to fit 1080×1080?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tool fits your image within 1080×1080 while preserving the original aspect ratio. If your image is not square, white bars are added on the sides or top/bottom — the image is not cropped or distorted.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is 1080×1080 used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1080×1080px (1:1 ratio) is used for Instagram square posts, e-commerce product images, app store screenshots, print-on-demand product photos, and profile avatars on platforms that require square images.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between 1080×1080 and 1080×1350?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1080×1080 is a square (1:1 ratio). 1080×1350 is a portrait format (4:5 ratio) that takes up more vertical space in Instagram feed — slightly more visible on mobile. Both are valid for Instagram. Use 1080×1080 for cross-platform use.',
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

export default function ResizeTo1080x1080Layout({ children }: { children: React.ReactNode }) {
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
