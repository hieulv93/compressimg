import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/crop-image`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Crop Image Online Free – Trim & Cut JPG, PNG, WebP',
  description:
    'Free online image cropper. Select any area, choose ratio (1:1, 16:9, 4:3), and download instantly. No upload — 100% browser-based and private.',
  keywords: [
    'crop image online',
    'crop image free',
    'online image cropper',
    'crop jpg online',
    'crop png online',
    'crop photo online',
    'image crop tool',
    'crop image to square',
    'crop image 16:9',
    'free image cropper',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Image Online Free – Trim & Cut JPG, PNG, WebP',
    description:
      'Crop any image to any ratio instantly. Presets: 1:1, 16:9, 4:3, 3:2, 9:16 or free crop. No upload — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'CompressImg — Free Online Image Cropper' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Image Online Free – Trim & Cut JPG, PNG, WebP',
    description:
      'Crop images to any ratio instantly. Presets: 1:1, 16:9, 4:3. No uploads — works 100% in your browser.',
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
        { '@type': 'ListItem', position: 2, name: 'Crop Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Online Image Cropper',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image cropper. Drag handles to select any area, choose aspect ratio presets, and download instantly. No file upload required.',
      featureList: [
        'Free crop — drag handles to any shape',
        'Aspect ratio presets: 1:1, 16:9, 4:3, 3:2, 9:16',
        'Rule-of-thirds grid overlay',
        'Supports JPG, PNG, WebP',
        'Preserves original format and transparency',
        'No file upload — 100% browser-based',
        'Works on mobile with touch support',
        'Free with no limits',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I crop an image online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your JPG, PNG, or WebP image to CompressImg Crop Image tool. Drag the handles to select the area you want to keep, choose an aspect ratio preset if needed, then click "Crop Image". Your cropped image downloads instantly — no account required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does cropping an image reduce file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Cropping removes pixels from outside the selected area, which directly reduces file size. A photo cropped to 50% of its original dimensions can be up to 75% smaller in file size, because file size scales with the number of pixels (width × height).',
          },
        },
        {
          '@type': 'Question',
          name: 'What aspect ratio should I use for social media?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram feed posts use 1:1 or 4:5. YouTube thumbnails use 16:9. Facebook cover photos use approximately 16:9. LinkedIn profile photos use 1:1. Instagram Stories and TikTok use 9:16.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will cropping reduce image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The crop tool extracts the selected area at full resolution using the Canvas API. The remaining pixels are output exactly as they were in the original — no re-encoding or quality loss.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image formats can I crop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can crop JPG, PNG, and WebP images up to 20MB. The output format matches the input format — PNG files keep their transparency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This tool processes your image entirely inside your browser using JavaScript and the Canvas API. Your image never leaves your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I crop to a custom size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Select "Free" mode and drag the crop handles to any shape. The exact pixel dimensions are shown in real time. For a specific pixel size, crop first then use our Resize Image tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is crop different from resize?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cropping removes parts of the image — you keep a selected region and discard the rest. Resizing changes the dimensions of the entire image by scaling. Use crop to remove unwanted areas; use resize to change pixel dimensions.',
          },
        },
      ],
    },
  ],
}

export default function CropImageLayout({ children }: { children: React.ReactNode }) {
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
