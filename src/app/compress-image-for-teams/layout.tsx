import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-teams/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for Microsoft Teams — Reduce Photo Size for Teams',
  description:
    'Compress images for Microsoft Teams free online. Reduce JPG, PNG, WebP size before sharing in Teams channels. No upload to server — 100% browser-based.',
  keywords: [
    'compress image for teams',
    'compress image for microsoft teams',
    'compress photo for teams',
    'teams image size limit',
    'microsoft teams file size limit',
    'compress image teams',
    'resize image for teams',
    'teams photo compressor',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Microsoft Teams — Free Online Tool',
    description:
      'Reduce image size before sharing in Microsoft Teams. Compress JPG, PNG, WebP free — no uploads, 100% browser-based.',
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
    title: 'Compress Image for Teams — Free Online',
    description: 'Reduce image size for Microsoft Teams. 100% browser-based — no uploads.',
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
          name: 'Compress Image for Teams',
          item: PAGE_URL,
        },
      ],
    },
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
          name: 'What is the Microsoft Teams file upload size limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Microsoft Teams allows file uploads up to 250GB per file when connected to SharePoint. However, images pasted directly into chat have a practical display limit — very large images load slowly in the Teams interface. For smooth inline display, compress images to under 2MB before sharing in channels.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for Teams images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80 is ideal for Microsoft Teams. It produces files of 200KB–1MB for most photos, which load instantly in Teams channels on any corporate network or VPN. For screenshots and diagrams where text legibility matters, use quality 85.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why compress images before sharing in Teams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Large images slow down Teams channels and meetings. When sharing screenshots, product photos, or design assets in Teams, oversized images delay message loading for the whole team. Compressing to under 1MB ensures instant inline display and keeps channels fast even with many image posts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Teams compress images automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Teams may resize images for inline display but stores originals in SharePoint. The full-size original is what gets downloaded when team members click to view the full image. Pre-compressing gives everyone the optimal file size from the start.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image dimensions work best for Teams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For screenshots shared in Teams, 1920×1080px or smaller at quality 80 is ideal — this produces files of 150KB–400KB that display crisply at any Teams window size. For photos and detailed images, 2000–3000px wide at quality 80 is a good balance of quality and speed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your files never leave your device during processing. This is important when sharing internal screenshots, confidential documents, or client materials.',
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
