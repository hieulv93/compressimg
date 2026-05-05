import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-4mb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 4MB Online Free — Reduce to Under 4MB',
  description:
    'Free online tool to compress images to under 4MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress image to 4mb',
    'compress photo to 4mb',
    'reduce image size to 4mb',
    'compress image to 4mb online',
    'compress jpg to 4mb',
    'compress png to 4mb',
    'reduce image under 4mb',
    'image compressor 4mb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 4MB Online Free',
    description:
      'Reduce JPG, PNG, or WebP images to under 4MB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 4MB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 4MB Online Free',
    description: 'Reduce any image to under 4MB for free. 100% browser-based — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 4MB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 4MB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor. Reduce JPG, PNG, and WebP files to under 4MB. Adjustable quality slider with real-time output size. No upload required.',
      featureList: [
        'Compress image to under 4MB',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Preview compressed size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to Under 4MB',
      description: 'Reduce image file size to under 4MB while maintaining visual quality.',
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
          name: 'Set quality to 87',
          text: 'Quality 87 compresses most photos to under 4MB while retaining excellent visual quality. Lower to 83 for larger source files from professional cameras.',
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
          name: 'What quality setting should I use to compress to under 4MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start at quality 87 for most images. A typical 12MP smartphone photo compresses to 1.5–3MB at quality 87. For very large files from professional cameras (20MP+), try quality 83. The download button shows the exact output size so you can adjust before saving.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I need to compress an image to 4MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Several platforms and email systems set a 4MB limit for photo attachments and uploads. Some property listing platforms, media submission portals, and content management systems enforce this threshold. Modern cameras from Canon, Nikon, and Sony produce RAW files of 20–50MB and full-quality JPEGs of 8–20MB that exceed this limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a 10MB photo to under 4MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload the photo and set quality to 87. A 10MB JPEG typically compresses to 2.5–4MB at quality 87. If still above 4MB, lower quality to 83, or use the Resize Image tool to reduce dimensions first — halving width and height removes 75% of pixel data before compression.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will compressing to 4MB reduce visible quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Quality 87 is well above the threshold where compression artifacts become visible. Photos compressed at quality 87 look identical to originals at normal viewing distances and screen sizes. Quality differences only become apparent below quality 70 when examining images at 200%+ zoom.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a PNG to under 4MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool converts PNG to compressed JPEG, which typically reduces a 10–20MB PNG to 1–4MB at quality 87. If you need to preserve PNG transparency, use the Resize Image tool to reduce dimensions instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your photos never leave your device during processing.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo4MbLayout({ children }: { children: React.ReactNode }) {
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
