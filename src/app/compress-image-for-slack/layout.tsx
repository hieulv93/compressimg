import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-slack/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for Slack — Reduce Photo Size for Slack Upload',
  description:
    'Compress images for Slack free online. Reduce JPG, PNG, WebP size before uploading to Slack channels. No upload to server — 100% browser-based.',
  keywords: [
    'compress image for slack',
    'compress photo for slack',
    'reduce image size for slack',
    'slack image size limit',
    'slack file upload limit',
    'compress image slack',
    'resize image for slack',
    'slack photo compressor',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Slack — Free Online Tool',
    description:
      'Reduce image size before uploading to Slack. Compress JPG, PNG, WebP free — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for Slack Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for Slack — Free Online',
    description: 'Reduce image size for Slack uploads. 100% browser-based — no uploads.',
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
          name: 'Compress Image for Slack',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for Slack',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor optimized for Slack uploads. Reduce JPG, PNG, and WebP files for fast sharing in Slack channels and DMs.',
      featureList: [
        'Compress images for Slack uploads',
        'Reduce file size below Slack limits',
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
          name: 'What is the Slack file upload size limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Slack allows file uploads up to 1GB per file on paid plans and up to 5MB on the free plan. However, images larger than 2–3MB take noticeably longer to load in channels, especially for team members on slower connections. Compressing images to under 1MB before uploading ensures they display quickly and inline without clicking.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for Slack images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80 is the recommended setting for Slack. It produces files of 200KB–1MB for most photos, which load instantly in Slack channels on any connection. The quality difference between 80 and 100 is imperceptible at typical message view sizes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why compress images before uploading to Slack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Large images slow down Slack channels — team members must wait for images to load, which disrupts workflow. Oversized images also consume Slack file storage quota faster, especially on free plans. Compressing photos to under 1MB keeps channels responsive and extends your storage allowance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Slack compress images automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Slack compresses images when displaying them in the message thread, but stores the original file. The stored original still counts toward your file storage limit, and team members downloading the image get the full uncompressed version. Pre-compressing ensures everyone gets a fast, right-sized file.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image size is ideal for Slack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For screenshots and diagrams shared in channels, 500KB–1MB at 1920×1080px or lower is ideal. For product photos or detailed images where clarity matters, up to 2MB is acceptable. Compress at quality 80 for general Slack use — this produces 200KB–800KB for most photos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your files never leave your device during processing, which matters when sharing confidential work screenshots or client assets.',
          },
        },
      ],
    },
  ],
}

export default function CompressForSlackLayout({ children }: { children: React.ReactNode }) {
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
