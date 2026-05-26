import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-400kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 400KB Online Free — Any Format',
  description:
    'Free online tool to compress images to 400KB or less. Reduce JPG, PNG, WebP for email, web, and platform uploads. Browser-based, no upload required.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 400KB Online Free — Any Format',
    description:
      'Compress images to under 400KB for email, web, and platforms. Free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 400KB' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 400KB Online Free',
    description: 'Reduce image file size to under 400KB. 100% browser-based, no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 400KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 400KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for reducing photos to under 400KB. Compress JPG, PNG for email attachments, web pages, and social media uploads. No upload required.',
      featureList: [
        'Compress images to under 400KB',
        'Supports JPG, PNG, WebP, HEIC formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Good quality output for web and email',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to 400KB Online',
      description:
        'Compress images to under 400KB for email, web, and social platforms — free, browser-based.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'Image file (JPG, PNG, WebP — up to 20 MB)' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg — Compress Image to 400KB', url: PAGE_URL },
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
          name: 'Set quality to 75–80',
          text: 'Quality 78 compresses most 1080p photos to 150–380KB. Check the output size shown in the result before downloading.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download when under 400KB',
          text: 'The result card shows the exact compressed size. Download when under 400KB.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I compress an image to under 400KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set quality to 75–80. For a 1920×1080px photo at quality 78, output is typically 200–380KB. For larger images (2000px+), try quality 70–75. Check the result card for the exact output size before downloading.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is 400KB good for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '400KB is a common limit for email attachments (many email clients limit image embeds to 500KB), university scholarship forms, Twitch panel images (recommended under 2.9MB but panels display small), and some CMS file upload limits. At 400KB and 1080px wide, images look sharp on screen.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality should I use for a 400KB target?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 75–80 for most photos. A 1920×1080px JPEG at quality 78 outputs 200–400KB depending on photo content. Photos with lots of detail (landscapes, textures) will be larger than simple portraits at the same quality. If over 400KB at quality 75, reduce dimensions to 1280px wide first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing to 400KB reduce dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Only file size is reduced — pixel dimensions stay the same. If you also need smaller dimensions, use the Resize Image tool first, then compress here to reach 400KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this tool free and private?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — free with no limits. All compression runs in your browser; images never leave your device. No account or sign-up required.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo400KbLayout({ children }: { children: React.ReactNode }) {
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
