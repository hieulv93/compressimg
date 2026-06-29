import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-600x600')

export const metadata: Metadata = {
  title: 'Resize Image to 600×600 Pixels — Free Online',
  description:
    'Resize any image to 600×600px — US passport photo (2×2 inch at 300 DPI), WooCommerce thumbnail, eBay listing, podcast art. Free, browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 600×600 Pixels — Free Online | CompressImg',
    description:
      'Resize any image to exactly 600×600px. US passport, WooCommerce thumbnail, eBay. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 600x600',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 600×600px — Free',
    description:
      'US passport (2×2 in at 300 DPI), WooCommerce thumbnail, eBay listing — resize to 600×600 instantly.',
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
    name: 'Resize Image to 600×600 Pixels — Free Online',
    description:
      'Resize any image to 600×600px — US passport photo (2×2 inch at 300 DPI), WooCommerce thumbnail, eBay listing, podcast art. Free, browser-based, no upload.',
    faq: [
      {
        question: 'What is 600×600px used for?',
        answer:
          'US passport and visa photos (2×2 inch at 300 DPI), WooCommerce default product thumbnail, eBay listing minimum, podcast and album art minimum (Apple Podcasts), and government portal uploads (TSA PreCheck, Global Entry).',
      },
      {
        question: 'Is 600×600px the same as a 2×2 inch photo?',
        answer:
          'Yes, at 300 DPI. 2 inches × 300 DPI = 600 pixels. A 600×600px JPEG printed at 300 DPI measures exactly 2×2 inches — the US passport photo standard.',
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
