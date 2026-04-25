import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-email`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for Email — Reduce Photo Size for Attachments',
  description:
    'Free online tool to compress images for email attachments. Reduce JPG, PNG file size to under 500KB instantly. No upload — 100% browser-based and private.',
  keywords: [
    'compress image for email',
    'compress photo for email',
    'reduce image size for email',
    'compress image email attachment',
    'shrink image for email',
    'compress jpg for email',
    'reduce photo size email',
    'email image compressor',
    'compress image before sending email',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Email — Reduce Photo Size for Attachments',
    description:
      'Reduce JPG, PNG, and WebP images for email attachments. Compress photos to under 500KB for free — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for Email Attachments' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for Email — Free Attachment Size Reducer',
    description:
      'Reduce photo size for email attachments in seconds. 100% browser-based, no uploads.',
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
          name: 'Compress Image for Email',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for Email',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for email attachments. Reduce JPG, PNG, WebP file size by up to 90% for fast, deliverable email photos. No upload required.',
      featureList: [
        'Compress images for email attachments',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Reduce photos to under 500KB for email',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the maximum image size I can send by email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most email providers allow 20–25MB of total attachments per email. Gmail and Yahoo allow 25MB, Outlook and Apple Mail allow 20MB. Many corporate email servers cap incoming attachments at 10MB or less. Keep total attachments under 10MB — at 500KB per compressed photo, you can send 20 photos in a single email.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format is best for email attachments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG is the best format for email photo attachments. It compresses photographs efficiently while keeping them visually sharp, and is supported by every email client. Avoid WebP for email — some email clients including older Outlook versions do not display WebP correctly.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image size should I use for email newsletters?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For email newsletters, images should be no wider than 600px and under 100KB each. This ensures fast rendering on mobile email clients. Use quality 70–80 at 600px width. Total newsletter image weight should ideally be under 500KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will compressing images for email reduce quality significantly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 75–85, compression is virtually invisible when images are viewed on screen. You can reduce a 5MB smartphone photo to 200–400KB with no perceptible quality loss. Only at quality settings below 50 do visible artifacts appear.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for email images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80 is recommended for email photo attachments — it reduces file size by 60–70% with no visible quality loss at screen-view sizes. For newsletter inline images, quality 70–75 is sufficient. For images that will be printed after being received, use quality 85–90.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress multiple images for email at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool processes one image at a time. For each photo: upload, set quality to 80, download. For large batches, consider resizing all photos to 1280px wide first using the Resize tool, which dramatically reduces file size before quality compression is applied.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I send WebP images by email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Technically yes, but it is not recommended. Older Outlook versions do not display WebP images — recipients may see a broken image placeholder. For maximum email client compatibility, use JPG for photo attachments.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server when compressing for email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression happens entirely in your browser using JavaScript. Your images never leave your device and are never sent to any server. Suitable for compressing confidential business photos and personal images before sending by email.',
          },
        },
      ],
    },
  ],
}

export default function CompressForEmailLayout({ children }: { children: React.ReactNode }) {
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
