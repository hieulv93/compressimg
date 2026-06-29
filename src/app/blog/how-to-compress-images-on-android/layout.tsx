import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/how-to-compress-images-on-android')

export const metadata: Metadata = {
  title: 'How to Compress Images on Android — Free Methods That Work',
  description:
    'Compress photos on Android without an app — use your browser. Also covers Google Photos storage saver, Samsung Gallery tricks, and file manager methods. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images on Android — Free Methods That Work',
    description: 'Compress Android photos without an app. Browser, Google Photos, Samsung Gallery.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How to Compress Images on Android',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images on Android (Free)',
    description: 'Reduce Android photo size without installing an app.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'Compress Images on Android', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Compress Images on Android — Free Methods That Work',
    blog: {
      headline: 'How to Compress Images on Android — Free Methods That Work',
      description: 'Free methods to compress photos on Android without installing an app.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'How do I compress a photo on Android without an app?',
        answer:
          'Open Chrome and go to compressimg.pro. Tap the upload area, select your photo from Gallery, adjust quality if needed, and tap Download. Everything runs in your browser — no app install needed.',
      },
      {
        question: 'How do I reduce photo size on Android for email?',
        answer:
          'Compress the photo first using compressimg.pro at quality 80 (targets under 1 MB for typical photos). Then attach the compressed file to your email. Alternatively, in Gmail you can share the photo directly and it may offer a size reduction option.',
      },
      {
        question: 'Does Google Photos compress photos on Android?',
        answer:
          'Yes, if you set backup quality to "Storage saver." This compresses your backed-up photos to 16 MP. Your device originals are not affected unless you explicitly choose to "Compress existing photos" in settings.',
      },
      {
        question: 'How do I make a photo under 1 MB on Android?',
        answer:
          'Upload it to compressimg.pro in Chrome. At quality 80, most phone photos compress to 200–600 KB — well under 1 MB. If the result is still over 1 MB, reduce quality to 70 or use the resize tool to reduce dimensions first.',
      },
      {
        question: 'Does compressing photos reduce quality on Android?',
        answer:
          'At quality 80 (the default), compression removes data that the human eye cannot detect at normal viewing. The result looks identical on a phone screen or standard monitor. Quality below 70 may show artifacts on close inspection.',
      },
      {
        question: 'How do I compress an image on Samsung?',
        answer:
          'Samsung Galaxy phones have a built-in resize option in the Gallery app: open a photo, tap the three-dot menu, and look for Resize or Edit options. For more control, use compressimg.pro in Chrome — it works on all Samsung models.',
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
