import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-10mb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 10MB — Reduce Photo Size Online Free',
  description:
    'Free online tool to compress images to under 10MB. Reduce large JPG, PNG, or WebP files to fit 10MB upload limits — 100% browser-based, no upload to server.',
  keywords: [
    'compress image to 10mb',
    'reduce image size to 10mb',
    'compress photo to 10mb',
    'image compressor 10mb',
    'reduce jpg to 10mb',
    'compress image under 10mb',
    'resize image to 10mb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 10MB — Free Online Tool',
    description:
      'Compress large JPG, PNG, or WebP images to under 10MB. Free, no upload to server, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 10MB' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 10MB — Free Online Tool',
    description: 'Reduce large photos to under 10MB online. Free, private, 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 10MB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 10MB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor to reduce photos to under 10MB. Supports JPG, PNG, WebP. No upload required — all processing in your browser.',
      featureList: [
        'Compress images to under 10MB',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Preview compressed size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image to Under 10MB',
      description: 'Reduce image file size to under 10MB while maintaining visual quality.',
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
          text: 'Quality 85 compresses most large photos to well under 10MB while retaining near-original visual quality. Adjust down if the output is still too large.',
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
          name: 'What quality setting should I use to compress an image to 10MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most images, quality 85–90 is sufficient to reduce a typical camera JPEG or PNG to under 10MB. Very large files (50MB+ raw exports) may need quality 75–80. Start at 85, check the output size shown on the download button, and adjust down if needed. At quality 80–85, visual quality is indistinguishable from the original on normal screens.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I need to compress an image to 10MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 10MB limit appears in many common situations: Discord free tier file uploads (10MB max), some email services (10MB attachment limit), cloud storage upload restrictions, real estate and property listing platforms, event ticketing and booking systems, and various web forms that specify a maximum upload size. Modern smartphone cameras and mirrorless cameras often produce RAW exports or high-resolution JPEGs well above 10MB.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reduce a large JPEG to under 10MB without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most large JPEGs can be reduced to under 10MB at quality 85–90 with no perceptible quality loss. At quality 85, a 30MB RAW-derived JPEG typically compresses to 5–8MB. If the file is still over 10MB at quality 85, resize the image to its actual display dimensions first — removing excess pixels is the most effective way to reduce file size without affecting visual quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between 10MB and other size targets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '10MB is a relatively large target — most photos can reach it at high quality (85–90) with minimal visible compression. Targets like 100KB or 200KB require much more aggressive compression or image resizing. For 10MB, the focus is on very large source files: high-resolution camera photos, RAW exports, uncompressed screenshots from 4K displays, or batch conversions of large archives.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a PNG to under 10MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. PNG files can be compressed by reducing quality, which converts to lossy JPEG internally. Alternatively, for a true lossless PNG under 10MB, resize the image dimensions — a 6000×4000px PNG screenshot can be 40MB, but resizing to 2000×1333px reduces it to under 3MB without any visible quality change at normal viewing sizes. This tool compresses by quality setting; for lossless PNG size reduction, use the Resize Image tool first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe when using this compression tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser — no image is ever uploaded to a server. Your photos never leave your device during the process. This is important when compressing personal photos, client files, or sensitive work documents.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo10MbLayout({ children }: { children: React.ReactNode }) {
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
