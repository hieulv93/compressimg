import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-teams/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Does Teams Compress Images? Yes — Fix It Free',
  description:
    'Microsoft Teams compresses images in chat and channels. Pre-compress your photos to quality 80 before sharing to keep them sharp for all teammates — free, no install.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does Teams Compress Images? Yes — Fix It Free',
    description:
      'Microsoft Teams compresses images in chat and channels. Pre-compress to quality 80 before sharing to keep them sharp for all teammates — free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Compress Image for Microsoft Teams Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Teams Compress Images? Yes — Fix It Free',
    description:
      'Microsoft Teams compresses images in chat and channels. Pre-compress to quality 80 before sharing to keep them sharp for all teammates — 100% browser-based, no install.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for Microsoft Teams',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for Microsoft Teams. Reduce JPG, PNG, and WebP file size for fast sharing in Teams channels and chats.',
      featureList: [
        'Compress images for Teams channels and chats',
        'Reduce file size below Teams limits',
        'Supports JPG, PNG, WebP formats',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Microsoft Teams compress images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Teams automatically compresses images in two situations: (1) when you paste directly from clipboard — Teams re-encodes the bitmap at a low quality setting, which causes visible blur; (2) when displaying inline previews in channels — Teams generates a compressed thumbnail regardless of the original file size. The original file is stored in SharePoint and remains downloadable at full quality, but the version everyone sees in chat is compressed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Teams reduce image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, noticeably for clipboard pastes. When you copy a screenshot and paste it into Teams with Ctrl+V, Teams applies aggressive lossy compression before sending — fine text becomes hard to read and flat-color areas show JPEG artifacts. For uploaded files, Teams generates a compressed inline preview but keeps the original in SharePoint. The practical impact is that pasted screenshots often look significantly worse than the source.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can users avoid Teams image compression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most effective method is to pre-compress the image before sharing: compress at quality 80 using this tool, then upload via the attachment button (not paste). This gives Teams an already-optimized file that requires minimal further compression. For clipboard pastes specifically, save the screenshot as a file first and upload it — this bypasses the aggressive clipboard re-encoding Teams applies.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can users send full-quality images in Teams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To send images at the highest possible quality in Teams: (1) compress to quality 80 using this tool before uploading — this keeps files small enough to load fast while preserving visible sharpness; (2) use the attachment button to upload the file rather than pasting from clipboard; (3) for images that must be pixel-perfect, share a link to the file in SharePoint instead — recipients can download the uncompressed original directly.',
          },
        },
      ],
    },
  ],
}

export default function CompressForTeamsLayout({ children }: { children: React.ReactNode }) {
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
