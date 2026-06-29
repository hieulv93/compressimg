import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-heic')

export const metadata: Metadata = {
  title: 'Resize HEIC Image Online Free — Convert & Resize iPhone Photos',
  description:
    'Resize HEIC photos from iPhone to any size and convert to JPEG in your browser. Free, no upload, no software needed. Supports all iPhone HEIC files instantly.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize HEIC Image Online Free — Convert & Resize iPhone Photos',
    description:
      'Resize HEIC photos from your iPhone and convert to JPEG in one step. Free, no upload, works in any browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize HEIC Image — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize HEIC Image Online Free — Convert & Resize iPhone Photos',
    description:
      'Upload HEIC from iPhone → resize → download as JPEG. Free, browser-based, no software needed.',
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
    name: 'Resize HEIC Image Online Free — Convert & Resize iPhone Photos',
    description:
      'Resize HEIC photos from iPhone to any size and convert to JPEG in your browser. Free, no upload, no software needed. Supports all iPhone HEIC files instantly.',
    faq: [
      {
        question: 'How do I resize a HEIC photo from my iPhone?',
        answer:
          'Upload the .heic file directly — the tool automatically converts HEIC to JPEG and resizes to your chosen dimensions in one step. No app or software needed.',
      },
      {
        question: 'Can I open HEIC files on Windows?',
        answer:
          'Not without the HEIC Image Extensions codec from the Microsoft Store. The easiest workaround is converting HEIC to JPEG using this tool — the result opens on any Windows version without extra software.',
      },
      {
        question: 'Does converting HEIC to JPEG lose quality?',
        answer:
          'At high JPEG quality settings (92+), the difference is imperceptible in normal use. For photos shared online or printed, the output is visually identical to the HEIC original.',
      },
      {
        question: 'Why does Instagram reject my iPhone photos?',
        answer:
          "Instagram's web uploader rejects HEIC files. Upload your HEIC here, resize to Instagram dimensions (1080×1080 or 1080×1350), then upload the resulting JPEG to Instagram.",
      },
      {
        question: 'Is this HEIC resize tool free?',
        answer:
          'Yes, completely free. No account, no watermark, no usage limits. All HEIC conversion and resizing happens in your browser.',
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
