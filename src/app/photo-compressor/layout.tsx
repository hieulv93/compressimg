import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/photo-compressor/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Photo Compressor Online Free — Compress Photos Instantly',
  description:
    'Free online photo compressor. Compress JPG, PNG, WebP, and HEIC photos by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  keywords: [
    'photo compressor',
    'compress photo',
    'photo compressor online',
    'compress photo online',
    'photo size reducer',
    'compress photo free',
    'compress photo without losing quality',
    'online photo compressor',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Photo Compressor Online Free — Compress Photos Instantly',
    description:
      'Free photo compressor. Compress JPG, PNG, WebP, HEIC photos by up to 90% — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Photo Compressor Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Compressor Online Free',
    description: 'Free photo compressor. Compress photos by up to 90% — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Photo Compressor', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Photo Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based photo compressor. Compress JPG, PNG, WebP, and HEIC photos by up to 90%. No upload required.',
      featureList: [
        'Compress photos online',
        'Supports JPG, PNG, WebP, HEIC formats',
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
          name: 'How do I compress a photo online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your photo, set quality to 80, and download the compressed result — free, no sign-up required. Quality 80 reduces most photos by 60–70% with no visible quality loss.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a photo without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set quality to 75–85. At quality 80, photo compression is virtually invisible on screen. Quality loss only becomes noticeable at full zoom below quality 60 on detailed textures.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a photo to under 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start at quality 70 and check the output size. If still over 100KB, lower to 60. For large phone photos (3000px+), resize to 1280px wide first using the Resize Image tool, then compress at quality 65.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress iPhone photos (HEIC) online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool accepts HEIC files directly. Upload your iPhone photo and it is automatically converted to JPG during compression. iPhone 12MP photos need resizing to 1280px and quality 60–65 to reach under 100KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing a photo reduce its dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This photo compressor reduces file size through quality compression — the pixel dimensions stay the same. A 4032×3024px photo is still 4032×3024px after compression, just smaller in file size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my photos uploaded to a server when I use this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All photo compression happens in your browser using JavaScript. Your photos never leave your device and are never uploaded, stored, or shared with any server.',
          },
        },
      ],
    },
  ],
}

export default function PhotoCompressorLayout({ children }: { children: React.ReactNode }) {
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
