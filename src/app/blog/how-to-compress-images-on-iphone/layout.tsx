import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/how-to-compress-images-on-iphone')

export const metadata: Metadata = {
  title: 'How to Compress Images on iPhone — Without Losing Quality (2026)',
  description:
    'Compress iPhone photos without losing quality — 5 free methods including browser-based tools, HEIC settings, AirDrop tricks, and the Files app. Works on iOS 16, 17, 18.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images on iPhone — Without Losing Quality',
    description: '5 free methods to compress iPhone photos. Works on iOS 16, 17, 18.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How to Compress Images on iPhone',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images on iPhone (2026)',
    description: '5 free methods to reduce iPhone photo file size without losing quality.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'Compress Images on iPhone', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Compress Images on iPhone — Without Losing Quality (2026)',
    blog: {
      headline: 'How to Compress Images on iPhone — Without Losing Quality (2026)',
      description: '5 free methods to compress iPhone photos without losing quality.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'How do I compress photos on my iPhone without an app?',
        answer:
          'Open Safari and go to compressimg.pro. Tap the upload area, select your photo, adjust quality if needed, and tap Download. The entire process happens in your browser — no app install required.',
      },
      {
        question: 'Does compressing photos on iPhone reduce quality?',
        answer:
          'At quality 80 (the default), compressed photos are visually indistinguishable from the original on a phone screen or monitor. The compression removes data the human eye cannot easily perceive. For professional print use, keep quality at 85–90.',
      },
      {
        question: 'Why are iPhone photos so large?',
        answer:
          'iPhone cameras capture at 12–48 megapixels to preserve maximum detail for editing. This results in raw files of 8–25 MB. For sharing and web use, you only need 1–3 MP, so compression reduces file size by 80–95% without any visible difference.',
      },
      {
        question: 'Can I compress a HEIC photo on iPhone?',
        answer:
          'Yes. Upload the HEIC file to compressimg.pro in Safari. The tool automatically converts it to JPEG (the universal format) and compresses it at your chosen quality level.',
      },
      {
        question: 'How do I send a smaller photo from my iPhone via email?',
        answer:
          'In the Photos app, share the photo via Mail. The share sheet offers size options (Small, Medium, Large, Actual). Select Medium or Small. Alternatively, compress first at compressimg.pro then attach the compressed file.',
      },
      {
        question: 'Does iPhone compress photos automatically when sharing?',
        answer:
          'iMessage and WhatsApp do compress photos when sent as messages (not as files). Instagram also re-compresses uploads. If you share via AirDrop, email as a file, or save to Files app, the original uncompressed file is used.',
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
