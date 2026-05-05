import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-3mb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 3MB Online Free — Reduce to Under 3MB',
  description:
    'Free online tool to compress images to under 3MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress image to 3mb',
    'compress photo to 3mb',
    'reduce image size to 3mb',
    'compress image to 3mb online',
    'compress jpg to 3mb',
    'compress png to 3mb',
    'reduce image under 3mb',
    'image compressor 3mb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 3MB Online Free',
    description:
      'Reduce JPG, PNG, or WebP images to under 3MB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 3MB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 3MB Online Free',
    description: 'Reduce any image to under 3MB for free. 100% browser-based — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 3MB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 3MB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor. Reduce JPG, PNG, and WebP files to under 3MB. Adjustable quality slider with real-time output size. No upload required.',
      featureList: [
        'Compress image to under 3MB',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Preview compressed size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to Under 3MB',
      description: 'Reduce image file size to under 3MB while maintaining visual quality.',
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
          name: 'Set quality to 86',
          text: 'Quality 86 compresses most photos to under 3MB while retaining excellent visual quality. Lower to 82 for larger source files.',
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
          name: 'What quality setting should I use to compress to under 3MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start at quality 86 for most images. A typical 12MP smartphone photo compresses to 1–2.5MB at quality 86. For large files from professional cameras (20MB+), try quality 82. The download button shows the exact output size so you can adjust before saving.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I need to compress an image to 3MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 3MB limit is common in real estate listing portals, e-commerce product image uploads, news and media submission systems, and online job application forms. Many CMS platforms set 3MB as the default maximum upload size for media libraries. Modern camera and smartphone photos routinely exceed this threshold.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress an 8MB photo to under 3MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload the photo and set quality to 86. An 8MB JPEG typically compresses to 1.5–2.5MB at quality 86. If the output is still above 3MB, lower quality to 82 or use the Resize Image tool to reduce dimensions before compressing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will compressing to 3MB reduce visible quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 86, compression is minimal and visual quality is excellent. The difference between the original and compressed version is imperceptible when viewed normally on screen. For print use, 3MB is typically sufficient for images up to A4 size at 300 DPI.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a PNG file to under 3MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool converts PNG to compressed JPEG, which typically reduces a 10–20MB PNG to 1–3MB at quality 86. If you need to preserve transparency or keep PNG format, use the Resize Image tool to reduce pixel dimensions instead — smaller dimensions produce smaller PNGs without any quality loss.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser — no image is ever uploaded to a server. Your photos never leave your device during processing.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo3MbLayout({ children }: { children: React.ReactNode }) {
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
