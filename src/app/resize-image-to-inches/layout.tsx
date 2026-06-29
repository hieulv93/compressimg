import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-inches')

export const metadata: Metadata = {
  title: 'Resize Image to Inches Online Free — Set Width & Height in Inches',
  description:
    'Resize any image to exact inch dimensions at any DPI. Enter width and height in inches, choose 72/96/150/300 DPI, download instantly. Free, browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to Inches Online Free',
    description:
      'Set width and height in inches, choose DPI (72/96/150/300), download instantly. Perfect for US print sizes — Letter, 4×6, 5×7, 8×10. Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to Inches — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to Inches Online Free',
    description: 'Set width and height in inches, choose DPI — download instantly.',
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
    name: 'Resize Image to Inches Online Free — Set Width & Height in Inches',
    description:
      'Resize any image to exact inch dimensions at any DPI. Enter width and height in inches, choose 72/96/150/300 DPI, download instantly. Free, browser-based.',
    faq: [
      {
        question: 'How many pixels is 4×6 inches at 300 DPI?',
        answer:
          '4×6 inches at 300 DPI is 1200×1800 pixels. The formula is: pixels = inches × DPI. At 150 DPI, 4×6 inches = 600×900 pixels.',
      },
      {
        question: 'What is US Letter size in pixels?',
        answer:
          'US Letter (8.5×11 inches) at 300 DPI is 2550×3300 pixels. At 150 DPI it is 1275×1650 pixels. At 96 DPI it is 816×1056 pixels.',
      },
      {
        question: 'What DPI should I use for photo prints?',
        answer:
          '300 DPI is the standard for photo lab prints. Most home printers produce good results at 150–300 DPI. If you are printing on a professional press (magazines, brochures), 300 DPI is required.',
      },
      {
        question: 'Is my image uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser. Your image file never leaves your device.',
      },
      {
        question: 'What formats are supported?',
        answer:
          'JPG, PNG, WebP, and HEIC (iPhone) are all supported. The output format matches the input format.',
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
