import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/image-to-pdf')

export const metadata: Metadata = {
  title: 'Image to PDF Converter — Convert JPG, PNG to PDF Free Online',
  description:
    'Convert JPG, PNG, WebP, or HEIC to PDF instantly. Choose A4, Letter, or fit-to-image page size. 100% browser-based — your image never leaves your device. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image to PDF Converter — Convert JPG, PNG to PDF Free Online',
    description:
      'Convert any image to PDF instantly. Choose A4, Letter, or fit-to-image. 100% browser-based — free, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image to PDF Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to PDF Converter — Free Online',
    description:
      'Convert JPG, PNG, WebP to PDF instantly. A4, Letter, or fit. Free & browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Image to PDF', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Image to PDF Converter — Convert JPG, PNG to PDF Free Online',
    description:
      'Convert JPG, PNG, WebP, or HEIC to PDF instantly. Choose A4, Letter, or fit-to-image page size. 100% browser-based — your image never leaves your device. Free.',
    faq: [
      {
        question: 'Does converting an image to PDF reduce quality?',
        answer:
          'No. This tool embeds the image in the PDF at JPEG quality 92 — visually lossless. The image is not scaled down during the PDF creation step. If you choose A4 or Letter and the image is larger than the page, the image is scaled to fit while preserving aspect ratio, but at high quality.',
      },
      {
        question: 'What page size should I choose?',
        answer:
          "Choose A4 (210×297mm) for international documents, resumes, and European printing. Choose US Letter (216×279mm) for US documents and printing. Choose Fit to Image if you want the PDF dimensions to exactly match your image — useful for digital sharing where you don't want white margins.",
      },
      {
        question: 'Can I convert a PNG with transparency to PDF?',
        answer:
          'Yes. PNG transparency is handled — transparent areas are filled white in the PDF output. This matches how most PDF viewers and printers handle transparency.',
      },
      {
        question: 'Is my image private when using this tool?',
        answer:
          'Yes. All conversion runs in your browser using the Canvas API and jsPDF library. Your image is never uploaded to any server.',
      },
      {
        question: 'Can I convert multiple images to one PDF?',
        answer:
          'This tool converts one image per PDF. Each upload produces one PDF file. For multi-page PDFs, convert each image separately and combine using a PDF merge tool.',
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
