import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-images')

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
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Batch Compress Images Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batch Compress Images Online Free',
    description: 'Compress multiple images at once. Download all as ZIP. Free, browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Batch Compress Images', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Batch Compress Images Online Free — Multiple Files at Once',
    description:
      'Compress multiple images at once for free. Upload up to 5 JPG, PNG, or WebP files and download all compressed images as a ZIP. 100% browser-based, no uploads.',
    faq: [
      {
        question: 'How many images can I compress at once?',
        answer:
          'You can compress up to 5 images at once with this batch tool. Each image is processed independently in your browser. For more than 5 images, compress the first batch, download the ZIP, then upload the next batch.',
      },
      {
        question: 'Can I download all compressed images at once?',
        answer:
          'Yes. Once all images are compressed, a "Download All as ZIP" button appears. This bundles all compressed images into a single ZIP file for one-click download. You can also download each image individually by clicking the download button next to each result.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All compression runs entirely in your browser using JavaScript. No image is ever sent to any server. Your files never leave your device.',
      },
      {
        question: 'What image formats are supported for batch compression?',
        answer:
          'The batch compressor supports JPG, PNG, WebP, and HEIC (iPhone) formats. HEIC files are automatically converted to JPEG before compression.',
      },
      {
        question: 'Does the quality setting apply to all images?',
        answer:
          'Yes. The quality slider applies the same quality level to all images in the batch. Set quality before uploading your files. The default quality of 80 is a good starting point for most use cases.',
      },
    ],
  },
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />}
      {children}
    </>
  )
}
