import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/crop-image-circle/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Crop Image to Circle Online Free — Round Photo Cropper',
  description:
    'Crop any image to a circle with transparent background online free. Perfect for profile pictures, logos, and avatars. No upload — 100% browser-based and private.',
  keywords: [
    'crop image to circle',
    'circle crop image',
    'round image cropper',
    'crop photo to circle',
    'circular crop online',
    'profile picture circle crop',
    'round photo cropper',
    'crop image circle online free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Image to Circle Online Free',
    description:
      'Crop any photo to a circle with transparent background instantly. Perfect for profile pictures and logos. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Crop Image to Circle Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Image to Circle Online Free',
    description: 'Crop photo to a circle with transparent PNG background — free, browser-based.',
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
        { '@type': 'ListItem', position: 3, name: 'Circle Crop', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Circle Image Cropper',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based circle image cropper. Crop any photo to a perfect circle with a transparent PNG background for profile pictures, logos, and avatars. No file upload required.',
      featureList: [
        'Crop image to perfect circle',
        'Transparent PNG background output',
        'Drag to reposition the crop area',
        'HEIC support for iPhone photos',
        'No file upload — 100% browser-based',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Crop an Image to a Circle Online',
      description:
        'Crop any photo to a circle with transparent background for profile pictures and logos — free, browser-based.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT30S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'JPG, PNG, WebP, or HEIC image file up to 20 MB' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg Circle Image Cropper', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your photo. The crop area is pre-set to a square (1:1) for circular output.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Position the crop area',
          text: 'Drag the crop handles to resize or move the square selection to center on the area you want to keep as a circle.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the circular PNG',
          text: 'Click Crop and then Download. The output is a PNG file with a transparent background outside the circle.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What format is the circle crop output?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The circle crop always outputs a PNG file. PNG supports transparency (alpha channel), which is required for the transparent background outside the circle. JPEG does not support transparency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use the circle crop for a LinkedIn or Facebook profile picture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most social platforms display profile pictures in a circle. Upload your photo, crop it using this tool, and upload the resulting PNG. The platform will display it cropped to its circular profile frame.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All cropping happens entirely in your browser using the Canvas API. Your files never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function CropCircleLayout({ children }: { children: React.ReactNode }) {
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
