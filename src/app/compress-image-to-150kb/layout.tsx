import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-150kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 150KB Online Free — Reduce Photo Size',
  description:
    'Free online tool to compress images to 150KB or less. Reduce JPG, PNG, WebP for SSC, college applications, and job portals. Browser-based, no upload required.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 150KB Online Free — Reduce Photo Size',
    description:
      'Compress images to under 150KB for college applications and job portals. Free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 150KB' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 150KB Online Free',
    description: 'Reduce image file size to under 150KB. 100% browser-based, no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 150KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 150KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for reducing photos to under 150KB. Compress JPG, PNG for college admissions, job applications, and government portals. No upload required.',
      featureList: [
        'Compress images to under 150KB',
        'Supports JPG, PNG, WebP, HEIC formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Ideal for college admissions and job portals',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to 150KB Online',
      description:
        'Compress images to under 150KB for portals and applications — free, browser-based.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'Image file (JPG, PNG, WebP — up to 20 MB)' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg — Compress Image to 150KB', url: PAGE_URL },
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
          name: 'Set quality to 70–75',
          text: 'Quality 72 compresses most standard portal photos (600×800px) to 60–140KB. Adjust down if still over 150KB.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download when under 150KB',
          text: 'The result card shows the exact compressed size. Download when under 150KB and upload to your portal.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I compress an image to under 150KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set quality to 70–75 and upload your image. For a 600×800px photo at quality 72, output is typically 60–140KB. If still over 150KB with a larger original, reduce dimensions to 600px wide using the Resize Image tool, then compress. Check the output size before downloading.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which portals use a 150KB file size limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'College admissions portals (DU, JNU, many state universities), some job portals, and Aadhaar card update forms commonly use 100–200KB limits. For 150KB, quality 72–75 at 600×800px produces 60–140KB — safely within the limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best quality setting for 150KB compression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 72–75 is the sweet spot for 150KB targets. At this quality, a 600×800px JPEG shows minimal artifacts, faces look natural, and text in document scans remains readable. Only lower below 70 if the original photo is very large (1200px+).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing to 150KB reduce image dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This tool reduces file size through quality compression only — dimensions stay the same. If your portal also requires specific dimensions (e.g., 600×800px), use the Resize Image tool first to set dimensions, then compress here to reach 150KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this tool free and safe to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — free with no limits, and safe because all compression runs in your browser. Your images are never uploaded to any server. No sign-up required.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo150KbLayout({ children }: { children: React.ReactNode }) {
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
