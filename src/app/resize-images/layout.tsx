import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-images')

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
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Batch Resize Images Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batch Resize Images Online Free',
    description: 'Resize multiple images at once. Download all as ZIP. Free, browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Batch Resize Images', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Batch Resize Images Online Free — Multiple Files at Once',
    description:
      'Resize multiple images at once for free. Upload up to 10 JPG, PNG, WebP, HEIC files and download all resized as ZIP. 100% browser-based, no upload.',
    faq: [
      {
        question: 'How many images can I batch resize at once?',
        answer:
          'You can batch resize up to 10 images at once. After downloading, click "Resize more" to process the next batch.',
      },
      {
        question: 'Can I download all resized images as a ZIP?',
        answer:
          'Yes. Once all images are resized, a "Download All as ZIP" button appears. This bundles all resized images into a single ZIP file for one-click download. You can also download each image individually.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All resizing runs entirely in your browser using the HTML5 Canvas API. No image is ever sent to any server. Your files never leave your device.',
      },
      {
        question: 'What resize modes are available?',
        answer:
          'Three modes are available: Max Width (scales each image to fit within a maximum width while maintaining aspect ratio), Percentage (scales all images by a set percentage, e.g. 50%), and Exact Size (resizes all images to a specific width × height).',
      },
      {
        question: 'What image formats are supported for batch resizing?',
        answer:
          'The batch resizer supports JPG, PNG, WebP, and HEIC (iPhone) formats. HEIC files are automatically converted to JPEG before resizing.',
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
