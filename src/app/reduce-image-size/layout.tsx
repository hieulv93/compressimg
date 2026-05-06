import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/reduce-image-size/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Reduce Image Size Online Free — Image Size Reducer',
  description:
    'Free online image size reducer. Reduce image file size by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  keywords: [
    'reduce image size',
    'reduce image file size',
    'image size reducer',
    'reduce photo size',
    'make image smaller',
    'image file size reducer',
    'compress image online',
    'reduce image size online',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Reduce Image Size Online Free — Image Size Reducer',
    description:
      'Free image size reducer. Reduce JPG, PNG, WebP file size by up to 90% — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Reduce Image Size Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reduce Image Size Online Free',
    description: 'Free image size reducer. Reduce file size by up to 90% — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Reduce Image Size', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Image Size Reducer',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image size reducer. Reduce JPG, PNG, WebP file size by up to 90%. No upload required.',
      featureList: [
        'Reduce image file size online',
        'Supports JPG, PNG, WebP formats',
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
          name: 'How do I reduce image size online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image, set quality to 80, and download the reduced result. This tool reduces image size by 60–70% at quality 80 with no visible quality loss. No sign-up, no watermark, no limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reduce image file size without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use quality 75–85. At quality 80, most images are reduced by 60–70% with a result that looks identical to the original on screen. Quality loss only becomes visible below quality 60 at full zoom.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reduce image size to under 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with quality 70 and check the result size. If over 100KB, lower to 60. For large phone photos, resize to 1280px wide first using the Resize Image tool, then compress at quality 60–70.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I reduce image size without changing dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool reduces file size through quality compression only — the pixel dimensions stay exactly the same. A 1920×1080px image is still 1920×1080px after compression, just smaller in file size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does reducing image size affect quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 75–85, quality loss is invisible on screen. At quality 60–70, minor artifacts appear only at full zoom. For email, web, and social media use, quality 70–80 is indistinguishable from the original.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reduce image size on iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open this page in Safari on your iPhone, tap the upload area, and select a photo from your camera roll. iPhone photos (HEIC) are converted and compressed automatically. Set quality to 60–70 for most sharing uses.',
          },
        },
      ],
    },
  ],
}

export default function ReduceImageSizeLayout({ children }: { children: React.ReactNode }) {
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
