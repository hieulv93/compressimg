import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-pinterest')

export const metadata: Metadata = {
  title: 'Resize Image for Pinterest — Free, Exact Dimensions',
  description:
    'Resize any image to exact Pinterest dimensions free. Standard pin (1000×1500), square pin (1000×1000), long pin (1000×2100). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Pinterest — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to Pinterest standard pin, square pin, or long pin dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for Pinterest — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Pinterest — Free, Exact Dimensions',
    description:
      'Perfect Pinterest standard pin, square, and long pin sizes in seconds. No upload, no account.',
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
    name: 'Resize Image for Pinterest — Free, Exact Dimensions',
    description:
      'Resize any image to exact Pinterest dimensions free. Standard pin (1000×1500), square pin (1000×1000), long pin (1000×2100). HEIC from iPhone supported. No upload — browser-based.',
    faq: [
      {
        question: 'What is the best Pinterest pin size?',
        answer:
          '1000×1500px (2:3 ratio) is the recommended Pinterest standard pin size. It takes up 50% more vertical space than a square pin, giving it more feed visibility and higher click-through rates.',
      },
      {
        question: 'What is the maximum Pinterest pin size?',
        answer:
          'Pinterest supports pins up to 1:3 ratio tall — roughly 1000×3000px for a standard 1000px-wide pin. Pinterest truncates pins taller than 1:3 in the feed, showing a "See more" button.',
      },
      {
        question: 'What size should Pinterest infographics be?',
        answer:
          '1000×3000px (1:3 ratio) is the maximum visible height for Pinterest infographics. Pinterest clips anything taller in the feed preview. For very long infographics, consider splitting into multiple pins.',
      },
      {
        question: 'Can I use a HEIC photo for Pinterest?',
        answer:
          'Pinterest does not accept HEIC files. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen Pinterest dimensions in one step.',
      },
      {
        question: 'Is this Pinterest image resizer free?',
        answer:
          'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
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
