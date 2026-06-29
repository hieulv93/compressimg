import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-4x6')

export const metadata: Metadata = {
  title: 'Resize Image to 4×6 Inch — 1200×1800px Free',
  description:
    'Resize any photo to 4×6 inch (1200×1800px at 300 DPI) for printing at home, pharmacy, or photo lab. Portrait and landscape. Free, browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 4×6 Inch — 1200×1800px Free | CompressImg',
    description:
      'Resize any photo to 4×6 inch (1200×1800px) for printing. Portrait and landscape. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 4x6 Inch',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 4×6 Inch — Free',
    description:
      '1200×1800px portrait or 1800×1200px landscape — exact 4×6 print size at 300 DPI. Instant, free.',
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
    name: 'Resize Image to 4×6 Inch — 1200×1800px Free',
    description:
      'Resize any photo to 4×6 inch (1200×1800px at 300 DPI) for printing at home, pharmacy, or photo lab. Portrait and landscape. Free, browser-based, no upload.',
    faq: [
      {
        question: 'How many pixels is a 4×6 inch photo?',
        answer:
          'At 300 DPI (standard photo print quality): 1200×1800px portrait or 1800×1200px landscape. At 72 DPI (screen only): 288×432px. Always use 300 DPI when preparing photos for printing.',
      },
      {
        question: 'What aspect ratio is a 4×6 photo?',
        answer:
          'A 4×6 photo has a 2:3 aspect ratio. Most phone cameras shoot at 4:3, so slight cropping is required to fit a 4×6 print frame.',
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
