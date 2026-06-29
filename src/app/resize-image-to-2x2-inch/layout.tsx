import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-2x2-inch')

export const metadata: Metadata = {
  title: 'Resize Image to 2×2 Inch — US Passport Photo Free',
  description:
    'Resize any photo to 2×2 inch (600×600px) for US passport, visa, and immigration forms. Free, browser-based, no upload required. HEIC from iPhone supported.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 2×2 Inch — US Passport Photo Free | CompressImg',
    description:
      'Resize any photo to 2×2 inch (600×600px) for US passport and visa. HEIC supported. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 2x2 Inch',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 2×2 Inch — US Passport Photo Free',
    description: 'Get exact 600×600px (2×2 inch) for US passport and DS-160 visa. Instant, free.',
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
    name: 'Resize Image to 2×2 Inch — US Passport Photo Free',
    description:
      'Resize any photo to 2×2 inch (600×600px) for US passport, visa, and immigration forms. Free, browser-based, no upload required. HEIC from iPhone supported.',
    faq: [
      {
        question: 'How many pixels is a 2×2 inch passport photo?',
        answer:
          '600×600 pixels at 300 DPI. The formula is: inches × DPI = pixels. 2 × 300 = 600. A 600×600px JPEG printed at 300 DPI measures exactly 2×2 inches on paper.',
      },
      {
        question: 'Does the US passport photo have to be exactly 600×600px?',
        answer:
          'The State Department requires 2×2 inches (600×600px at 300 DPI). For digital DS-160 submissions, the minimum accepted is 600px wide and the file must be under 240KB.',
      },
      {
        question: 'Can I use this for a US visa (DS-160)?',
        answer:
          'Yes. US visa applications use the same 2×2 inch (600×600px) requirement as US passport photos. The DS-160 accepts files under 240KB — a 600×600px JPEG at quality 85 is typically 60–130KB.',
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
