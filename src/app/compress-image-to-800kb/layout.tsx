import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-800kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 800KB Online Free — Reduce to Under 800KB',
  description:
    'Free online tool to compress images to 800KB or less. Reduce JPG, PNG, WebP for email, web uploads, and platform limits. Browser-based, no upload required.',
  keywords: [
    'compress image to 800kb',
    'reduce image size to 800kb',
    'compress photo to 800kb',
    'image compressor 800kb',
    'compress image under 800kb',
    'compress image to 800kb online',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 800KB Online Free — Reduce to Under 800KB',
    description:
      'Compress images to under 800KB for email and platform uploads. Free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 800KB' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 800KB Online Free',
    description: 'Reduce image file size to under 800KB. 100% browser-based, no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 800KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 800KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for reducing photos to under 800KB. Ideal for email attachments, social media, and web uploads. Supports JPG, PNG, WebP, HEIC. No upload required.',
      featureList: [
        'Compress images to under 800KB',
        'Supports JPG, PNG, WebP, HEIC formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'High-quality output for web and email',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to 800KB Online',
      description:
        'Compress images to under 800KB for email and web uploads — free, browser-based.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'Image file (JPG, PNG, WebP — up to 20 MB)' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg — Compress Image to 800KB', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 80–85',
          text: 'Quality 82 compresses most 12MP smartphone photos to 400–750KB with excellent visual quality. Check the output size in the result card.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download when under 800KB',
          text: 'The result shows exact compressed size. Download when under 800KB.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I compress an image to under 800KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set quality to 80–85. A typical 12MP smartphone JPEG (4032×3024px) at quality 82 outputs 400–750KB — under 800KB. For very detailed photos (landscapes, RAW exports), try quality 75. Check the result card for exact output size.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is 800KB commonly used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '800KB is a useful target for high-quality email photo attachments, Squarespace and Wix image uploads (recommended under 1MB for performance), Airbnb listing photos, and some CMS platforms. At 800KB and 1920px wide, photos look sharp on large monitors.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting gives 800KB output?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80–85 for a 1920×1080px or 2000px-wide image. At quality 82, a 1920×1080 JPEG is typically 300–600KB. For a 4032×3024px phone photo at quality 82, output is 600–900KB — close to 800KB. Lower to quality 75 if still over 800KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing to 800KB reduce image dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Only file size is reduced through quality compression — dimensions remain the same. To also reduce dimensions, use the Resize Image tool first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this tool free and private?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — completely free, no account needed. All compression runs in your browser; images never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo800KbLayout({ children }: { children: React.ReactNode }) {
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
