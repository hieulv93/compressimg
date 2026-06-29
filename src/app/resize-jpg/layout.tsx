import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-jpg')

export const metadata: Metadata = {
  title: 'Resize JPG Online Free — Change JPEG Width & Height',
  description:
    'Resize JPG and JPEG images online for free. Change width and height by pixel. Preserves JPG format and quality. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize JPG Online Free — Change JPEG Width & Height | CompressImg',
    description:
      'Resize JPG images to any pixel dimension free. Enter width and height, download instantly. No upload, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize JPG Online — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize JPG Online Free — Change JPEG Dimensions',
    description: 'Change JPG width and height by pixel — free, instant, no upload.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize JPG Online Free — Change JPEG Width & Height',
    description:
      'Resize JPG and JPEG images online for free. Change width and height by pixel. Preserves JPG format and quality. No upload — 100% browser-based.',
    faq: [
      {
        question: 'Does resizing a JPG reduce quality?',
        answer:
          'Downscaling (making smaller) preserves quality well — the image has the same information in fewer pixels. Upscaling (making larger) always reduces sharpness because pixels are interpolated. For best results, always resize down from a larger original.',
      },
      {
        question: 'What is the output format after resizing?',
        answer:
          'The output is JPEG — the same format as the input. JPEG uses lossy compression, which is ideal for photos. The tool uses 92% quality, which produces sharp output with a small file size.',
      },
      {
        question: 'Can I resize a JPG to an exact pixel size for a form?',
        answer:
          'Yes. Enter exact pixel dimensions in the width and height fields. If the form requires a specific file size (e.g., under 100KB), use the Resize Image in KB tool after resizing to the correct dimensions.',
      },
      {
        question: 'Is my JPG file uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser using the Canvas API. Your file is never sent to any server.',
      },
      {
        question: 'Can I resize multiple JPG files at once?',
        answer:
          'This tool processes one file at a time. For batch resizing multiple JPGs, use the Resize Images (Batch) tool.',
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
