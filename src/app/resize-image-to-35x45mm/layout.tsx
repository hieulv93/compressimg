import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-35x45mm')

export const metadata: Metadata = {
  title: 'Resize Image to 35×45mm — Passport Photo Free',
  description:
    'Resize any photo to 35×45mm (413×531px) for UK, Schengen, India, Australia, and Japan passport. Free, browser-based, no upload. HEIC from iPhone supported.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 35×45mm — Passport Photo Free | CompressImg',
    description:
      'Resize any photo to 35×45mm (413×531px) for UK, Schengen, India, and Australia passport. HEIC supported. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 35x45mm',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 35×45mm — Passport Photo Free',
    description:
      'Get exact 413×531px (35×45mm) for UK, Schengen, India, and Japan passport. Instant, free.',
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
    name: 'Resize Image to 35×45mm — Passport Photo Free',
    description:
      'Resize any photo to 35×45mm (413×531px) for UK, Schengen, India, Australia, and Japan passport. Free, browser-based, no upload. HEIC from iPhone supported.',
    faq: [
      {
        question: 'How many pixels is 35×45mm at 300 DPI?',
        answer:
          '413×531 pixels. The calculation: 35 ÷ 25.4 × 300 = 413px wide; 45 ÷ 25.4 × 300 = 531px tall. This is the standard for UK, Schengen, India, Australia, and Japan passport photos at print quality.',
      },
      {
        question: 'Is 35×45mm the same as 2×2 inch?',
        answer:
          'No. 35×45mm (413×531px) is a rectangular format used by most of the world. 2×2 inch (600×600px) is the US standard — a larger, square format. Never use the US 2×2 inch format for a UK or Schengen passport.',
      },
      {
        question: 'Can I use a HEIC photo from my iPhone?',
        answer:
          'Yes. This tool automatically converts HEIC from iPhone to JPEG during the resize. Passport offices and visa portals only accept JPEG — HEIC is not accepted.',
      },
      {
        question: 'Is this tool free?',
        answer:
          'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens in your browser.',
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
