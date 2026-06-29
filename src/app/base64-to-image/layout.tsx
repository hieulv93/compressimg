import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/base64-to-image')

export const metadata: Metadata = {
  title: 'Base64 to Image Converter — Decode & Download Free Online',
  description:
    'Paste a Base64 string and instantly decode it back to an image. Preview and download as JPG. 100% browser-based — no upload, no sign-up. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Base64 to Image Converter — Decode & Download Free Online',
    description:
      'Paste any Base64 string and decode it to an image instantly. Preview and download. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Base64 to Image Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 to Image Converter — Free Online',
    description: 'Paste Base64 string, decode to image, download. Free & browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Base64 to Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Base64 to Image Converter — Decode & Download Free Online',
    description:
      'Paste a Base64 string and instantly decode it back to an image. Preview and download as JPG. 100% browser-based — no upload, no sign-up. Free.',
    faq: [
      {
        question: 'What formats does Base64 to image decoding support?',
        answer:
          'This tool accepts Base64 data URLs with any image prefix: data:image/jpeg, data:image/png, data:image/webp, and data:image/gif. You can also paste a raw Base64 string without the data URL prefix — the tool will attempt to decode it as JPEG by default.',
      },
      {
        question: 'How do I get a Base64 string to decode?',
        answer:
          'Base64 image strings appear in HTML src attributes (src="data:image/jpeg;base64,..."), in CSS background-image declarations, in JSON API responses, in database records that store images as text, and from our Image to Base64 converter tool.',
      },
      {
        question: 'Is the decoded image the same quality as the original?',
        answer:
          'Yes. Base64 decoding is a lossless operation — it reconstructs the exact original binary data. The image quality is identical to what was encoded. No additional compression is applied.',
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
