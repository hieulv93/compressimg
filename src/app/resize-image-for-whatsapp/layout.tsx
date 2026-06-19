import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-whatsapp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for WhatsApp — Free, Exact Dimensions',
  description:
    'Resize any image to exact WhatsApp dimensions free. Status (1080×1920), profile picture (500×500), link preview (1200×630). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for WhatsApp — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to WhatsApp status, profile picture, or link preview dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image for WhatsApp — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for WhatsApp — Free, Exact Dimensions',
    description:
      'Perfect WhatsApp status, profile picture, and link preview sizes in seconds. No upload, no account.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for WhatsApp', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'WhatsApp Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to WhatsApp specifications. Supports Status (1080×1920), Profile Picture (500×500), Link Preview (1200×630), and Sticker (512×512). HEIC files are automatically converted.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image for WhatsApp',
      description:
        'Resize any image to WhatsApp status, profile picture, or link preview dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select WhatsApp image type',
          text: 'Choose Status (1080×1920), Profile Picture (500×500), Link Preview (1200×630), or Sticker (512×512).',
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
          name: 'Download and share on WhatsApp',
          text: 'Download the resized image and share it directly on WhatsApp — as a status update, profile photo, or in a chat.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best size for a WhatsApp status?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WhatsApp Status images display at 1080×1920px (9:16 ratio, full vertical screen). Uploading at this size ensures the image fills the screen without cropping or black bars.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the WhatsApp profile picture size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WhatsApp profile pictures display as a circle at roughly 200×200px. Upload at 500×500px for a sharp result — WhatsApp compresses larger images but 500×500 gives good quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WhatsApp compress images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WhatsApp compresses images sent in chat to reduce bandwidth. To send without compression, share as a Document instead of a Photo — this preserves original quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize a HEIC photo for WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WhatsApp on some platforms does not accept HEIC files. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen WhatsApp dimensions in one step.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this WhatsApp image resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForWhatsAppLayout({ children }: { children: React.ReactNode }) {
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
