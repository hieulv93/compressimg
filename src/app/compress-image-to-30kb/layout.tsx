import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-30kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 30KB Online Free — Any Format',
  description:
    'Free online tool to compress images to 30KB or less. Reduce JPG, PNG, WebP for online exam forms and government portals. Browser-based, no upload required.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 30KB Online Free — Any Format',
    description:
      'Compress images to under 30KB for online exam forms and government portals. Free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 30KB' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 30KB Online Free',
    description: 'Reduce image file size to under 30KB for exam portals. 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 30KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 30KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for reducing photos to under 30KB. Compress JPG, PNG for UPSC, NEET, online exam portals. No upload required.',
      featureList: [
        'Compress images to under 30KB',
        'Supports JPG, PNG, WebP, HEIC formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Ideal for UPSC, NEET, and exam portals',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to 30KB Online',
      description:
        'Compress images to under 30KB for online exam portals — free, browser-based, no upload.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'Image file (JPG, PNG, WebP — up to 20 MB)' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg — Compress Image to 30KB', url: PAGE_URL },
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
          name: 'Set quality to 60–65',
          text: 'For a 300×400px photo, quality 62 typically outputs 12–25KB. If still over 30KB with larger dimensions, resize to 300px wide first.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download when under 30KB',
          text: 'Check the result card for the exact compressed size. Download when under 30KB and upload to your portal.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I compress an image to under 30KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set quality to 60–65 and upload your image. For a 300×400px photo at quality 62, output is typically 12–28KB. If still over 30KB, reduce dimensions to 250–300px wide using the Resize Image tool, then compress again. Check the output size in the result card before downloading.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which portals require a 30KB photo limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UPSC photo uploads require 40KB maximum, NEET exam portals often require 30–50KB, and many state government portals across India use 20–50KB limits. Check the specific portal requirement. For 30KB, a 350×450px JPEG at quality 63 is typically 15–28KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for 30KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start at quality 62–65. For a standard passport-sized photo (350×450px), quality 63 gives 15–28KB. For a larger portrait (600×800px), quality 55 gives 20–35KB. If you need to be under 30KB with a 600×800px photo, reduce dimensions to 350×450px first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing to 30KB affect photo quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At 350×450px and quality 62, compression artifacts are visible at very close inspection but acceptable for government photo submissions. The face remains recognizable and the image passes typical portal validation. For higher quality at 30KB, reduce dimensions further rather than lowering quality below 55.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image uploaded to a server when I use this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression runs entirely in your browser using JavaScript. Your image never leaves your device and is never uploaded, stored, or shared. Safe for exam registration photos and official ID images.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo30KbLayout({ children }: { children: React.ReactNode }) {
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
