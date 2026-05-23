import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-20kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 20KB Online Free — Reduce Photo Size',
  description:
    'Free online tool to compress images to 20KB or less. Reduce JPG, PNG for government exams, ID uploads, and online forms. No upload — 100% browser-based.',
  keywords: [
    'compress image to 20kb',
    'reduce image size to 20kb',
    'compress photo to 20kb',
    'image compressor 20kb',
    'jpg to 20kb',
    'compress image under 20kb',
    'photo less than 20kb',
    'compress image to 20kb online',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 20KB Online Free — Reduce Photo Size',
    description:
      'Compress images to under 20KB for government exams, ID uploads, and official forms. Free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 20KB' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 20KB Online Free',
    description:
      'Reduce image file size to under 20KB for government portals and official forms. 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 20KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 20KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for reducing photos to under 20KB. Compress JPG, PNG for SSC, IBPS, UPSC exam signatures and photo uploads. No upload required.',
      featureList: [
        'Compress images to under 20KB',
        'Supports JPG, PNG, WebP, HEIC formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Suitable for SSC, IBPS, UPSC, NEET portals',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to 20KB Online',
      description:
        'Compress images to under 20KB for government exam portals and ID uploads — free, browser-based.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'Image file (JPG, PNG, WebP — up to 20 MB)' }],
      tool: [
        {
          '@type': 'HowToTool',
          name: 'CompressImg — Compress Image to 20KB',
          url: PAGE_URL,
        },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your image. For signature scans, crop to show only the signature first.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 55–65',
          text: 'For a 200×230px photo, quality 60 typically outputs 5–15KB. For larger images (600px+), resize to 200–300px wide first, then compress at quality 60.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download when under 20KB',
          text: 'The result shows the exact compressed size. Once under 20KB, download and upload to your exam portal or government form.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I compress an image to under 20KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set quality to 55–60 and upload your image. For a 200×230px photo, quality 60 outputs 5–15KB. For larger images (800px+), use the Resize Image tool to reduce to 200–300px wide first, then compress at quality 60. Check the output size before downloading.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which portals require photos under 20KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Government exam portals in India commonly require 20KB limits: SSC (signature: 10–20KB, 140×60px), IBPS (signature: 10–20KB), UPSC (photo: 40KB, signature: 15KB). Check the specific portal requirement before uploading. For signature scans, 20KB is achievable even with high quality at small dimensions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a signature to 20KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Signature scans compress very efficiently due to their simple black-on-white design. Upload your signature, set quality to 55–60, and the output will typically be 3–12KB — well under 20KB. If the scan dimensions are large, crop to 140×60px or 200×80px before compressing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing to 20KB change image dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This tool reduces file size only through quality compression — dimensions stay the same. If your portal also requires specific pixel dimensions (e.g., 200×230px for SSC photos), use the Resize Image tool to set dimensions first, then compress to reach 20KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe to compress with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs in your browser — no image is uploaded to any server. Your files never leave your device. This tool is safe for compressing exam registration photos, signature scans, and official ID images.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo20KbLayout({ children }: { children: React.ReactNode }) {
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
