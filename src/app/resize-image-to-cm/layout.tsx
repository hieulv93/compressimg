import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-cm')

export const metadata: Metadata = {
  title: 'Resize Image to Centimeters Online Free — Set Width & Height in CM',
  description:
    'Resize any image to exact centimeter dimensions at any DPI. Enter width and height in cm, choose 72/96/150/300 DPI, download instantly. Free, browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to Centimeters Online Free',
    description:
      'Set width and height in cm, choose DPI (72/96/150/300), download instantly. Perfect for print documents and A4 layouts. Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to CM — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to CM Online Free',
    description: 'Set width and height in centimeters, choose DPI — download instantly.',
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
    name: 'Resize Image to Centimeters Online Free — Set Width & Height in CM',
    description:
      'Resize any image to exact centimeter dimensions at any DPI. Enter width and height in cm, choose 72/96/150/300 DPI, download instantly. Free, browser-based.',
    faq: [
      {
        question: 'How many pixels is 21 cm at 300 DPI?',
        answer:
          '21 cm at 300 DPI is 2480 pixels. The formula is: pixels = (cm ÷ 2.54) × DPI. So 21 ÷ 2.54 = 8.268 inches × 300 = 2480px. At 150 DPI, 21 cm = 1240px.',
      },
      {
        question: 'What DPI should I use for printing?',
        answer:
          '300 DPI is the standard for professional print (photos, brochures, posters). 150 DPI is adequate for documents and forms that will be printed at home or in an office. 72 or 96 DPI is for screen display only — it will look blurry if printed.',
      },
      {
        question: 'What is A4 size in pixels at 300 DPI?',
        answer:
          'A4 (21×29.7 cm) at 300 DPI is 2480×3508 pixels. At 150 DPI it is 1240×1754 pixels. At 72 DPI it is 595×842 pixels (standard PDF screen size).',
      },
      {
        question: 'Is my image uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser. Your image file never leaves your device.',
      },
      {
        question: 'What formats are supported?',
        answer:
          'JPG, PNG, WebP, and HEIC (iPhone) are all supported. The output format matches the input — a JPG input produces a JPG output, a PNG input produces a PNG output.',
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
