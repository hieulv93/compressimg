import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-a4')

export const metadata: Metadata = {
  title: 'Resize Image to A4 Size Online Free — 2480×3508 or 1240×1754 px',
  description:
    'Resize any image to A4 size (21×29.7 cm) at 72, 96, 150, or 300 DPI. Portrait and landscape. Download instantly — free, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to A4 Size Online Free',
    description:
      'Resize to A4 at 300 DPI (2480×3508px), 150 DPI (1240×1754px), or 72 DPI (595×842px). Portrait and landscape. Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to A4 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to A4 Size Online Free',
    description:
      'A4 at 300 DPI = 2480×3508px. At 150 DPI = 1240×1754px. Choose DPI and orientation — download instantly.',
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
    name: 'Resize Image to A4 Size Online Free — 2480×3508 or 1240×1754 px',
    description:
      'Resize any image to A4 size (21×29.7 cm) at 72, 96, 150, or 300 DPI. Portrait and landscape. Download instantly — free, 100% browser-based.',
    faq: [
      {
        question: 'What is A4 size in pixels at 300 DPI?',
        answer:
          'A4 (21×29.7 cm) at 300 DPI is 2480×3508 pixels in portrait orientation. In landscape it is 3508×2480 pixels. This is the standard resolution for professional print output.',
      },
      {
        question: 'What is A4 at 150 DPI?',
        answer:
          'A4 at 150 DPI is 1240×1754 pixels in portrait. This is adequate for printing on a home or office printer and for embedding images in Word or Google Docs documents.',
      },
      {
        question: 'What is A4 at 72 DPI?',
        answer:
          'A4 at 72 DPI is 595×842 pixels — the standard PDF page size used by Adobe Acrobat and most PDF viewers. Use this for screen-only PDFs and presentations where file size matters.',
      },
      {
        question: 'Is A4 the same as US Letter?',
        answer:
          'No. A4 is 21×29.7 cm (8.27×11.69 inches). US Letter is 8.5×11 inches (21.59×27.94 cm). A4 is slightly taller and narrower than Letter. Use the Resize Image to Inches tool for US Letter dimensions.',
      },
      {
        question: 'Is my image uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser using the Canvas API. Your image file never leaves your device.',
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
