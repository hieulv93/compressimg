import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/crop-image-to-ratio/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Crop Image to Aspect Ratio Online Free — 16:9, 4:3, 3:2',
  description:
    'Crop any image to an exact aspect ratio online free — 16:9, 4:3, 3:2, 9:16, or custom. Perfect for YouTube thumbnails, presentations, and social media. No upload.',
  keywords: [
    'crop image to aspect ratio',
    'crop image 16:9',
    'crop image 4:3',
    'crop photo to ratio',
    'aspect ratio cropper',
    'crop image for youtube',
    'crop image for presentation',
    '16 9 image cropper online',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Image to Aspect Ratio Online Free',
    description:
      'Crop any image to 16:9, 4:3, 3:2, 9:16, or free ratio instantly. Perfect for YouTube, presentations, and social media. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Crop Image to Aspect Ratio Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Image to Aspect Ratio Online Free',
    description: 'Crop to 16:9, 4:3, 3:2, 9:16 or any ratio — free, browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Crop Image', item: `${SITE_URL}/crop-image/` },
        { '@type': 'ListItem', position: 3, name: 'Crop to Ratio', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Aspect Ratio Image Cropper',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based aspect ratio image cropper. Crop any photo to 16:9, 4:3, 3:2, 9:16, or 1:1 ratio for YouTube thumbnails, presentations, and social media. No file upload required.',
      featureList: [
        'Crop image to 16:9, 4:3, 3:2, 9:16, and 1:1 ratios',
        'Pre-set to 16:9 for YouTube thumbnails',
        'Lock ratio while dragging crop handles',
        'HEIC support for iPhone photos',
        'No file upload — 100% browser-based',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Crop an Image to an Aspect Ratio Online',
      description:
        'Crop any photo to a specific aspect ratio (16:9, 4:3, 3:2, 9:16, 1:1) — free, browser-based.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT30S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'JPG, PNG, WebP, or HEIC image file up to 20 MB' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg Aspect Ratio Cropper', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your photo.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select your aspect ratio',
          text: 'Choose from the preset ratios (16:9, 4:3, 3:2, 9:16, 1:1) or use Free for a custom crop. Drag the handles to position the crop area.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the cropped image',
          text: 'Click Crop and then Download to save your image at the selected aspect ratio.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What aspect ratio should I use for YouTube thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube thumbnails use a 16:9 aspect ratio at 1280×720 pixels (minimum) or 1920×1080 pixels (recommended). This tool presets to 16:9 to make thumbnail cropping easy.',
          },
        },
        {
          '@type': 'Question',
          name: 'What aspect ratio is Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram posts support three ratios: 1:1 (square), 4:5 (portrait), and 16:9 (landscape). The most common is 1:1 square at 1080×1080px. Use the 1:1 ratio button for square Instagram posts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All cropping happens entirely in your browser. Your files never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function CropToRatioLayout({ children }: { children: React.ReactNode }) {
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
