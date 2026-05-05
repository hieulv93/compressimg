import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-2mb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 2MB Online Free — Reduce to Under 2MB',
  description:
    'Free online tool to compress images to under 2MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress image to 2mb',
    'compress photo to 2mb',
    'reduce image size to 2mb',
    'compress image to 2mb online',
    'compress jpg to 2mb',
    'compress png to 2mb',
    'reduce image under 2mb',
    'image compressor 2mb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 2MB Online Free',
    description:
      'Reduce JPG, PNG, or WebP images to under 2MB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 2MB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 2MB Online Free',
    description: 'Reduce any image to under 2MB for free. 100% browser-based — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 2MB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 2MB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor. Reduce JPG, PNG, and WebP files to under 2MB. Adjustable quality slider with real-time output size. No upload required.',
      featureList: [
        'Compress image to under 2MB',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Preview compressed size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to Under 2MB',
      description: 'Reduce image file size to under 2MB while maintaining visual quality.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area, drag and drop your image, or paste from clipboard with Ctrl+V. Supports JPG, PNG, and WebP files up to 20MB.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 85',
          text: 'Quality 85 compresses most photos to under 2MB while retaining excellent visual quality. Lower to 80 for larger source files.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download',
          text: 'Download the compressed file. The download button shows the exact output size so you know before saving.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What quality setting should I use to compress to under 2MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start at quality 85 for most images. A typical 12MP smartphone photo (4–6MB) compresses to 800KB–1.5MB at quality 85. For very large files from professional cameras (20MB+), try quality 80. The download button shows the exact output size so you can adjust before saving.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I need to compress an image to 2MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many online portals, government forms, job application systems, and university admissions platforms set a 2MB limit for photo uploads. Passport and ID photo submissions, online visa applications, and HR onboarding portals frequently enforce this limit. Modern smartphone cameras easily produce 4–8MB photos that exceed this threshold.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a 5MB photo to under 2MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload the photo and set quality to 85. A 5MB JPEG typically compresses to 1–1.5MB at quality 85 — under 2MB with no visible quality difference. If the output is still above 2MB, lower quality to 80 or use the Resize Image tool to reduce dimensions first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will compressing to 2MB affect visible image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 85, compression artifacts are below the threshold of human perception on normal screens. For most photos, the compressed version at quality 85 is visually identical to the original. The difference only becomes apparent at quality settings below 70 or when pixel-peeping at 200%+ zoom.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a PNG to under 2MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool converts PNG to compressed JPEG internally. For screenshots and design exports with flat colors or text, quality 85 typically reduces a 5–10MB PNG to under 1.5MB. If you need to keep the PNG format (for transparency), use the Resize Image tool to reduce dimensions instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your photos never leave your device. This is important when uploading personal ID photos, passport images, or confidential documents.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo2MbLayout({ children }: { children: React.ReactNode }) {
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
