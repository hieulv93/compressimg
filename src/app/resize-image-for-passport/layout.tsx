import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-passport')

export const metadata: Metadata = {
  title: 'Resize Image for Passport — All Countries Free',
  description:
    'Resize photos to passport size for any country — US 2×2 inch (600×600px), UK/Schengen/India 35×45mm (413×531px), Canada 50×70mm. Free, browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Passport — All Countries Free | CompressImg',
    description:
      'Resize photos to exact passport size for US, UK, Schengen, India, Canada and more. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for Passport',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Passport — Free, All Countries',
    description:
      'US 2×2 inch, UK/Schengen/India 35×45mm, Canada 50×70mm — exact passport dimensions instantly.',
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
    name: 'Resize Image for Passport — All Countries Free',
    description:
      'Resize photos to passport size for any country — US 2×2 inch (600×600px), UK/Schengen/India 35×45mm (413×531px), Canada 50×70mm. Free, browser-based, no upload.',
    faq: [
      {
        question: 'What pixel size should a passport photo be?',
        answer:
          'US passport photos must be 600×600px (2×2 inch at 300 DPI). UK, Schengen, India, Australia, and Japan use 413×531px (35×45mm at 300 DPI). Canada uses 591×827px (50×70mm at 300 DPI). Select the correct country preset to get the exact size automatically.',
      },
      {
        question: 'Is 35×45mm the same as 2×2 inch?',
        answer:
          'No. 35×45mm (1.38×1.77 inch) is used by the UK, Schengen zone, India, Japan, and most of the world. 2×2 inch (51×51mm) is the US standard — a larger, square format. Never use the US size for a UK or Schengen application.',
      },
      {
        question: 'Can I use a HEIC photo from my iPhone for a passport?',
        answer:
          'Government portals accept JPEG only. This tool automatically converts HEIC files from iPhone to JPEG during the resize. You will receive a JPEG file at the correct dimensions ready for upload or print.',
      },
      {
        question: 'Is this passport photo resizer free?',
        answer:
          'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens entirely in your browser — your photos never leave your device.',
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
