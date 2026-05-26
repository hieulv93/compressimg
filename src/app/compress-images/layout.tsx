import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-images/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Batch Compress Images Online Free — Multiple Files at Once',
  description:
    'Compress multiple images at once for free. Upload up to 5 JPG, PNG, or WebP files and download all compressed images as a ZIP. 100% browser-based, no uploads.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Batch Compress Images Online Free — Multiple Files at Once',
    description: 'Compress up to 5 images at once. Download all as ZIP. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Batch Compress Images Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batch Compress Images Online Free',
    description: 'Compress multiple images at once. Download all as ZIP. Free, browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Batch Compress Images', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Batch Image Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based batch image compressor. Upload up to 5 JPG, PNG, or WebP images and download all compressed files as a single ZIP. No server upload required.',
      featureList: [
        'Compress up to 5 images simultaneously',
        'Supports JPG, PNG, WebP formats',
        'Download all as ZIP in one click',
        'Adjustable quality slider',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Batch Compress Images Online',
      description:
        'Compress multiple JPG, PNG, or WebP images at once in your browser — free, private, no upload required.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT20S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Multiple image files (JPG, PNG or WebP — up to 20 MB each)',
        },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg — Free Batch Image Compressor', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload multiple images',
          text: 'Click the upload area and select multiple files at once, or drag and drop a batch of images. Supports JPG, PNG and WebP — up to 20 MB per file.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality for the batch',
          text: 'Choose a single quality level (default 80) applied to all images. This reduces file sizes 60–80% with no visible quality loss across the batch.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download all compressed images',
          text: 'All images are compressed simultaneously in your browser. Download each file individually or grab them all at once. No account, no watermark, no server upload.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many images can I compress at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can compress up to 5 images at once with this batch tool. Each image is processed independently in your browser. For more than 5 images, compress the first batch, download the ZIP, then upload the next batch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I download all compressed images at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Once all images are compressed, a "Download All as ZIP" button appears. This bundles all compressed images into a single ZIP file for one-click download. You can also download each image individually by clicking the download button next to each result.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression runs entirely in your browser using JavaScript. No image is ever sent to any server. Your files never leave your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image formats are supported for batch compression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The batch compressor supports JPG, PNG, WebP, and HEIC (iPhone) formats. HEIC files are automatically converted to JPEG before compression.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the quality setting apply to all images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The quality slider applies the same quality level to all images in the batch. Set quality before uploading your files. The default quality of 80 is a good starting point for most use cases.',
          },
        },
      ],
    },
  ],
}

export default function BatchCompressLayout({ children }: { children: React.ReactNode }) {
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
