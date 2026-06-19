import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-images/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Batch Resize Images Online Free — Multiple Files at Once',
  description:
    'Resize multiple images at once for free. Upload up to 10 JPG, PNG, WebP, HEIC files and download all resized as ZIP. 100% browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Batch Resize Images Online Free — Multiple Files at Once',
    description: 'Resize up to 10 images at once. Download all as ZIP. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Batch Resize Images Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batch Resize Images Online Free',
    description: 'Resize multiple images at once. Download all as ZIP. Free, browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Batch Resize Images', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Batch Image Resizer',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based batch image resizer. Upload up to 10 JPG, PNG, WebP, or HEIC images and download all resized files as a single ZIP. Resize by max width, percentage, or exact dimensions. No server upload required.',
      featureList: [
        'Resize up to 10 images simultaneously',
        'Supports JPG, PNG, WebP, HEIC formats',
        'Resize by max width, percentage, or exact dimensions',
        'Download all as ZIP in one click',
        'Aspect ratio preserved in max-width and percentage modes',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Batch Resize Images Online',
      description:
        'Resize multiple images at once using the free batch image resizer at CompressImg.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Choose your resize settings',
          text: 'Select a resize mode: Max Width (scale to fit a maximum width), Percentage (scale all images by a set percentage), or Exact Size (resize all to a specific width × height).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your images',
          text: 'Click the upload area or drag and drop up to 10 JPG, PNG, WebP, or HEIC files. Each file can be up to 20MB.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download all resized images as ZIP',
          text: 'Click "Download All as ZIP". All resized images are bundled into a single ZIP file and downloaded in one click. You can also download each image individually.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many images can I batch resize at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can batch resize up to 10 images at once. After downloading, click "Resize more" to process the next batch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I download all resized images as a ZIP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Once all images are resized, a "Download All as ZIP" button appears. This bundles all resized images into a single ZIP file for one-click download. You can also download each image individually.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing runs entirely in your browser using the HTML5 Canvas API. No image is ever sent to any server. Your files never leave your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'What resize modes are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Three modes are available: Max Width (scales each image to fit within a maximum width while maintaining aspect ratio), Percentage (scales all images by a set percentage, e.g. 50%), and Exact Size (resizes all images to a specific width × height).',
          },
        },
        {
          '@type': 'Question',
          name: 'What image formats are supported for batch resizing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The batch resizer supports JPG, PNG, WebP, and HEIC (iPhone) formats. HEIC files are automatically converted to JPEG before resizing.',
          },
        },
      ],
    },
  ],
}

export default function BatchResizeLayout({ children }: { children: React.ReactNode }) {
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
