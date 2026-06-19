import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-without-losing-quality/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image Without Losing Quality — Free Online',
  description:
    'Resize JPG, PNG, WebP and HEIC images without losing quality. Lock aspect ratio, choose the right output format, and downscale with maximum sharpness. Free, browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image Without Losing Quality — Free Online',
    description:
      'Resize images with maximum quality. Lock aspect ratio, choose PNG for lossless output. Free, no upload.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image Without Losing Quality' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image Without Losing Quality (Free)',
    description: 'Free online image resizer with quality preservation. No upload required.',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resize Image Without Losing Quality',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Resize Image Without Losing Quality — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free online tool to resize images without losing quality. Supports JPG, PNG, WebP, HEIC. Lock aspect ratio. Browser-based — no upload.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image Without Losing Quality',
      totalTime: 'PT1M',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set dimensions with aspect ratio locked',
          text: 'Enter your target width. The height adjusts automatically to preserve the original aspect ratio.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the high-quality resized image',
          text: 'Click Resize Image and download. PNG files are lossless — no quality degradation.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can you resize an image without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Downscaling (making smaller) preserves quality very well — the output is sharp because existing pixels are averaged. Upscaling (making larger) always introduces some blur because the tool must invent new pixels. For best quality when enlarging, use an AI upscaler.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format preserves quality best when resizing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG is lossless — resizing a PNG produces a PNG with zero quality degradation. JPEG applies lossy compression on export, so each save introduces minor quality loss. For the highest quality output, use PNG source files.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does locking the aspect ratio help quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Locking the aspect ratio prevents distortion (stretching or squashing). It does not affect pixel quality directly, but distorted images appear lower quality to viewers. Always lock aspect ratio unless you specifically need a non-proportional resize.',
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
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
