import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/crop-image-to-square/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Crop Image to Square Online Free — 1:1 Photo Cropper',
  description:
    'Crop any image to a perfect square (1:1) online free. Ideal for Instagram, profile photos, and thumbnails. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Image to Square Online Free',
    description:
      'Crop any image to a perfect 1:1 square instantly. Perfect for Instagram, profile photos, and thumbnails. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Crop Image to Square Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Image to Square Online Free',
    description: 'Crop any photo to a perfect square — 1:1 ratio, free, browser-based.',
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
        { '@type': 'ListItem', position: 3, name: 'Crop to Square', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Crop Image to Square',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based square image cropper. Crop any photo to a perfect 1:1 square for Instagram, profile pictures, and thumbnails. No file upload required.',
      featureList: [
        'Crop image to 1:1 square ratio',
        'Drag to reposition the crop area',
        'HEIC support for iPhone photos',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Crop an Image to Square Online',
      description:
        'Crop any photo to a perfect 1:1 square for Instagram, profile pictures, and thumbnails — free, browser-based.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT30S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'JPG, PNG, WebP, or HEIC image file up to 20 MB' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg Square Image Cropper', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your photo. The 1:1 square ratio is pre-selected automatically.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Adjust the square crop area',
          text: 'Drag the crop handles to resize or move the square selection over the part of the image you want to keep.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the cropped square image',
          text: 'Click Crop to apply the crop and then Download to save your square image.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size is a square crop for Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram square posts are 1080×1080 pixels (1:1 ratio). This tool crops your photo to a 1:1 square — the resulting pixel dimensions depend on how much of your original image you select. For best Instagram quality, start from a photo that is at least 1080px on its shorter side.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will cropping to square reduce image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Cropping only removes pixels outside the selection — it does not resample or compress the remaining area. The output quality is identical to the original within the crop rectangle.',
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

export default function CropToSquareLayout({ children }: { children: React.ReactNode }) {
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
