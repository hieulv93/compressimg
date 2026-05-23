import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-500kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 500KB Online Free — Web, Blog, Email | CompressImg',
  description:
    'Resize any image to under 500KB free. Ideal for blog images, email attachments, and web uploads where quality matters. JPEG output, 100% browser-based.',
  keywords: [
    'resize image to 500kb',
    'reduce image to 500kb',
    'compress photo to 500kb',
    'image to 500kb',
    'resize jpg to 500kb',
    '500kb image resizer',
    'resize image for blog',
    'resize image for email',
    'compress image under 500kb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 500KB Online Free — Web, Blog, Email',
    description: 'Resize to under 500KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 500KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 500KB Online Free',
    description: 'Resize to under 500KB automatically. Free, browser-based, no upload.',
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
          name: 'Resize Image in KB',
          item: `${SITE_URL}/resize-image-in-kb/`,
        },
        { '@type': 'ListItem', position: 3, name: 'Resize to 500KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image to 500KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to under 500KB. Ideal for blog images, email newsletters, and visa application uploads. JPEG output, no server upload.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I resize a blog image to under 500KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image — the target is pre-set to 500KB. A 1280×720px JPEG at quality 80 typically produces 150–350KB — high enough quality for retina screens and well within 500KB. The tool handles the full resize automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the recommended image size for Shopify products?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shopify recommends product images at 2048×2048px. At that size, under 500KB is achievable with JPEG at quality 75. For smaller product thumbnails (800×800px), images are typically 80–200KB at quality 80.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the image size limit for email newsletters?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mailchimp, Constant Contact, and most email platforms recommend keeping images under 1MB. Under 500KB per image keeps emails loading fast across all email clients, especially on mobile.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing happens 100% in your browser. Your files never leave your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize a HEIC photo from iPhone to 500KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 500KB.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo500KbLayout({ children }: { children: React.ReactNode }) {
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
