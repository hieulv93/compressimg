import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/rotate-image/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Rotate Image Online Free — 90°, 180°, 270°',
  description:
    'Rotate JPG, PNG, WebP, or HEIC images 90°, 180°, or 270° instantly. 100% browser-based — no upload, no sign-up. Free.',
  keywords: [
    'rotate image',
    'rotate image online',
    'rotate photo',
    'image rotator',
    'rotate jpg',
    'rotate png',
    'rotate image 90 degrees',
    'rotate photo online free',
    'flip image 180',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Rotate Image Online Free — 90°, 180°, 270°',
    description:
      'Rotate images 90°, 180°, or 270° in one click. Works on JPG, PNG, WebP, HEIC. 100% browser-based — private and free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Rotate Image Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotate Image Online Free — 90°, 180°, 270°',
    description: 'Rotate images 90°, 180°, or 270° instantly. No upload, free.',
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
        { '@type': 'ListItem', position: 2, name: 'Rotate Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Rotate Image Online',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image rotation tool. Rotate JPG, PNG, WebP, or HEIC images 90°, 180°, or 270° — no upload required, 100% private.',
      featureList: [
        'Rotate left 90° (counter-clockwise)',
        'Rotate right 90° (clockwise)',
        'Rotate 180° (upside down)',
        'Supports JPG, PNG, WebP, HEIC up to 20MB',
        'JPEG output — preserves quality at 92%',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Rotate an Image Online',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Click a rotation button',
          text: 'Click Rotate Left (90° counter-clockwise), Rotate Right (90° clockwise), or 180°. The preview updates instantly.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the rotated image',
          text: 'Click Download to save the rotated image. The file is ready to use — no watermark, no sign-up.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I rotate an image online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image to this tool, then click Rotate Left (90° CCW), Rotate Right (90° CW), or 180°. The preview updates instantly. Click Download to save. No account, no watermark — free.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does rotating an image reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool re-encodes the image at JPEG quality 92, which is visually lossless for all practical purposes. The canvas transformation itself is lossless — only the final JPEG encoding step introduces minimal compression. For PNG files with transparency, quality is fully preserved at quality 92.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I rotate a HEIC photo from my iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool accepts HEIC files and automatically converts them to JPEG before rotating. You can upload directly from your iPhone camera roll and download a correctly oriented JPEG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my photo showing sideways or upside down?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Modern smartphones store orientation data in EXIF metadata rather than actually rotating the pixels. Many apps read this metadata and display the photo correctly, but some apps and websites ignore EXIF orientation and show the raw pixel data — which can appear rotated. This tool lets you physically rotate the pixels so the orientation is correct in all apps.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image formats can I rotate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG, PNG, WebP, and HEIC — up to 20MB per file. Output is always JPEG at quality 92.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image uploaded to a server when I rotate it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All rotation runs entirely in your browser using the Canvas API. Your image never leaves your device. Free and private.',
          },
        },
      ],
    },
  ],
}

export default function RotateImageLayout({ children }: { children: React.ReactNode }) {
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
