import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/make-image-smaller/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Make Image Smaller Online Free — Reduce Photo Size | CompressImg',
  description:
    'Make images smaller online free. Reduce photo file size for email, social media, and web uploads by resizing or compressing. JPG, PNG, WebP, HEIC supported. No upload.',
  keywords: [
    'make image smaller',
    'make photo smaller',
    'reduce image size',
    'shrink image',
    'make picture smaller',
    'decrease image size',
    'make image smaller online free',
    'reduce photo size',
    'smaller image file size',
    'compress and resize image',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Make Image Smaller Online Free — Reduce Photo Size',
    description:
      'Reduce image file size for email, web, and social media. Resize or compress — free, no upload.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Make Image Smaller Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make Image Smaller Online Free',
    description: 'Reduce photo file size for email, social media, and web. Free, browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Make Image Smaller', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Make Image Smaller — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free online tool to make images smaller. Reduce file size by resizing dimensions or compressing quality. Supports JPG, PNG, WebP, HEIC. No upload.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Make an Image Smaller Online',
      totalTime: 'PT1M',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your image file.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set smaller dimensions',
          text: 'Enter a smaller width and height. The tool recalculates the height automatically when aspect ratio is locked.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the smaller image',
          text: 'Click Resize Image and download. The result is smaller in both dimensions and file size.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best way to make an image smaller?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Two methods work: resize (reduce pixel dimensions) or compress (reduce quality). Resizing reduces file size by removing pixels — best when the image is larger than it needs to be for its use. Compression reduces file size while keeping dimensions — best when you need a specific display size but a smaller file.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make an image smaller for email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Resize to 1200px wide maximum, then compress to quality 80. Most email clients display images at 600–800px — larger images are wasted bandwidth. Target under 1MB total for email attachments.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a photo smaller without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Downscaling (making smaller) preserves quality well. Reducing from 4000px to 1920px removes pixels you cannot see on most screens. Use PNG output for lossless results, or JPEG at quality 85 for photos.',
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
