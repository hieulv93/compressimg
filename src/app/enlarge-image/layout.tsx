import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/enlarge-image/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Enlarge Image Online Free — Upscale Without Blur',
  description:
    'Enlarge images online free. Upscale JPG, PNG, WebP to larger dimensions for print, presentations, and display. No upload, 100% browser-based. Free with no limits.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Enlarge Image Online Free — Upscale JPG, PNG, WebP',
    description:
      'Upscale images to larger dimensions for print and display. Free, no upload required.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Enlarge Image Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enlarge Image Online Free',
    description: 'Upscale JPG, PNG, WebP to larger dimensions. Free, browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Enlarge Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Enlarge Image Online — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free online tool to enlarge and upscale images. Supports JPG, PNG, WebP, HEIC. Browser-based — no upload.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Enlarge an Image Online',
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
          name: 'Enter larger dimensions',
          text: 'Set your target width and height larger than the original. Lock aspect ratio to avoid distortion.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the enlarged image',
          text: 'Click Resize Image and download your enlarged photo.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I enlarge an image without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Basic enlargement using Canvas interpolation (what this tool does) works well up to 1.5–2× the original size. Beyond 2×, AI-based upscalers produce sharper results by predicting new pixel detail. For print use, always start from the highest-resolution original available.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum size I can enlarge to?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The maximum output dimension is 8000×8000 pixels. If you need an even larger output, reduce quality expectations or use a dedicated AI upscaler.',
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
