import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-jpeg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress JPEG Online Free — JPEG Compressor',
  description:
    'Free online JPEG compressor. Compress JPG and JPEG files by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress jpeg',
    'compress jpeg online',
    'jpeg compressor',
    'compress jpg jpeg',
    'reduce jpeg size',
    'jpeg file size reducer',
    'compress jpeg free',
    'online jpeg compressor',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress JPEG Online Free — JPEG Compressor',
    description:
      'Free JPEG compressor. Compress JPG and JPEG file size by up to 90% — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress JPEG Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress JPEG Online Free',
    description: 'Free JPEG compressor. Compress file size by up to 90% — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress JPEG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free JPEG Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based JPEG compressor. Compress JPG and JPEG file size by up to 90%. No upload required.',
      featureList: [
        'Compress JPEG files online',
        'Supports JPG and JPEG formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'See exact output size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between JPG and JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG and JPEG are the same format. JPEG stands for Joint Photographic Experts Group. Early Windows only supported 3-character file extensions, so .jpeg was shortened to .jpg. Both open identically in every application and browser.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a JPEG file online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your .jpg or .jpeg file, set quality to 80, and download the compressed result. This tool compresses JPEG files in your browser with no upload to server, no sign-up, no watermark, and no daily limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality should I use to compress a JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 75–85 is the sweet spot for most uses — 50–70% size reduction with no visible quality loss. For thumbnails and form uploads, quality 60–70 works well. For print-ready images, use quality 85–95.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing a JPEG reduce image quality permanently?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. JPEG uses lossy compression — each re-save discards some data permanently. Always compress from the original file. At quality 80, the loss is invisible on screen; at quality 60, minor artifacts appear only at full zoom.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a JPEG to under 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start at quality 70 and check the output size. If over 100KB, lower to 60. For large photos (4000px+), resize to 1280px wide first using the Resize Image tool, then compress at quality 65.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my JPEG files safe when I compress them online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs in your browser — no files are uploaded to any server. Your JPEG images never leave your device and are permanently deleted from browser memory when you close the tab.',
          },
        },
      ],
    },
  ],
}

export default function CompressJpegLayout({ children }: { children: React.ReactNode }) {
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
