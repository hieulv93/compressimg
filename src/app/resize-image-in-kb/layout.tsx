import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-in-kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image in KB Online Free — Resize to Exact File Size | CompressImg',
  description:
    'Resize image to an exact KB size — 20KB, 50KB, 100KB, 200KB or 500KB. Perfect for online forms, exams, and ID uploads. No upload, 100% private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image in KB Online Free — Resize to Exact File Size',
    description:
      'Resize to 20KB, 50KB, 100KB, 200KB or 500KB automatically. Perfect for government portals and exam applications. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image in KB Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image in KB Online Free',
    description: 'Set a target KB, upload your image, download the result. Free, browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Resize Image in KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image in KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to a specific KB size. Set a target (20KB, 50KB, 100KB, 200KB, 500KB or any value) and the tool automatically reduces quality and dimensions to fit. No upload required.',
      featureList: [
        'Resize to any KB target — 20KB, 50KB, 100KB, 200KB, 500KB',
        'Supports JPG, PNG, WebP, HEIC (iPhone)',
        'Auto quality + dimension reduction',
        'Instant result with achieved size shown',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize Image to a Specific KB Size',
      description:
        'Automatically resize any image to a target file size in KB using the free tool at CompressImg.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Set your target KB',
          text: 'Enter the maximum file size allowed by your portal (e.g., 50KB, 100KB) or use a preset button. You can also type any custom value.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. Processing starts immediately.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the resized image',
          text: 'The result shows the exact achieved size and a checkmark when under the target. Download the JPEG and upload it to your portal.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I resize an image to exactly 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set the target to 50KB, upload your image, and the tool automatically finds the right quality and dimensions to get under 50KB. The result shows the exact output size — any file under 50KB will be accepted by portals that require "under 50KB".',
          },
        },
        {
          '@type': 'Question',
          name: 'What portal requirements does this tool cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool is designed for SSC (signature 20KB, photo 50KB), UPSC (photo 40KB, signature 20KB), IBPS bank exams (photo 50KB), NEET (photo 10–200KB), JEE (photo 10–100KB), US passport DS-160 (under 240KB), Naukri resume photo (under 100KB), and Aadhaar/PAN document uploads (under 200KB).',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing runs 100% in your browser. Your images never leave your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize a HEIC photo from iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload HEIC files directly — they are automatically converted to JPEG before the KB resizing process. No manual conversion step needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the output format?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The output is always JPEG — the format accepted by virtually all government portals, exam systems, and job application forms. JPEG provides the best compression for photos at any KB target.',
          },
        },
      ],
    },
  ],
}

export default function ResizeInKbLayout({ children }: { children: React.ReactNode }) {
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
