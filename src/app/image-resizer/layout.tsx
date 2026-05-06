import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/image-resizer/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Image Resizer Online Free — Resize Images in Seconds',
  description:
    'Free online image resizer. Resize JPG, PNG, WebP, and HEIC images to any pixel dimensions instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'image resizer',
    'resize image',
    'image resizer online',
    'resize image online',
    'resize image online free',
    'photo resizer',
    'resize photo',
    'image size changer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image Resizer Online Free — Resize Images in Seconds',
    description:
      'Free image resizer. Resize JPG, PNG, WebP images to any dimensions — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Image Resizer Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Resizer Online Free',
    description: 'Free image resizer. Resize to any dimensions — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Image Resizer', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Image Resizer',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image resizer. Resize JPG, PNG, WebP, and HEIC to any pixel dimensions. No upload required.',
      featureList: [
        'Resize images to any pixel dimensions',
        'Aspect ratio lock to prevent distortion',
        'Supports JPG, PNG, WebP, HEIC formats',
        'Common presets for social media dimensions',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I resize an image online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image, enter the target width and height in pixels, and click Resize Image. The resized file downloads instantly — free, no sign-up, no upload to server. Works on JPG, PNG, WebP, and HEIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I resize an image without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Resize down (make smaller) — quality is fully preserved. Resizing up introduces softness because new pixels must be generated. Keep enlargements under 150% of the original for acceptable results.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I resize an image without changing the aspect ratio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Enable the aspect ratio lock — changing width automatically adjusts height and vice versa. This prevents stretching. Unlock only when you need exact dimensions for a platform with a different aspect ratio.',
          },
        },
        {
          '@type': 'Question',
          name: 'What pixel dimensions should I use for Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Square posts: 1080×1080px. Portrait posts: 1080×1350px (shows largest in feed). Stories and Reels: 1080×1920px.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I resize a photo to under 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Resize to 800×600px or smaller, then use the Compress Image tool at quality 60–70. Combining resize and compress is the most effective way to hit small file size targets.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image uploaded to a server when I resize it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing runs in your browser using the Canvas API. Your image never leaves your device. No files are uploaded, stored, or shared with any server.',
          },
        },
      ],
    },
  ],
}

export default function ImageResizerLayout({ children }: { children: React.ReactNode }) {
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
