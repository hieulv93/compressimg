import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/image-to-base64')

export const metadata: Metadata = {
  title: 'Image to Base64 Converter — Encode Photos Free Online',
  description:
    'Convert JPG, PNG, WebP, or HEIC to a Base64 data URL string instantly. Copy to clipboard or download as .txt. 100% browser-based — image never leaves your device. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image to Base64 Converter — Encode Photos Free Online',
    description:
      'Convert any image to a Base64 data URL string instantly. Copy to clipboard or download as .txt. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image to Base64 Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to Base64 Converter — Free Online',
    description: 'Convert JPG, PNG, WebP to Base64 string instantly. Copy or download.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Image to Base64', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Image to Base64 Converter — Encode Photos Free Online',
    description:
      'Convert JPG, PNG, WebP, or HEIC to a Base64 data URL string instantly. Copy to clipboard or download as .txt. 100% browser-based — image never leaves your device. Free.',
    faq: [
      {
        question: 'What is Base64 encoding for images?',
        answer:
          'Base64 encoding converts binary image data into a text string using 64 printable ASCII characters. The result is a data URL like data:image/jpeg;base64,/9j/4AAQ... that can be embedded directly in HTML, CSS, or JSON without needing a separate image file or HTTP request.',
      },
      {
        question: 'How much larger is a Base64-encoded image?',
        answer:
          'Base64 encoding increases the data size by approximately 33%. A 100 KB image becomes roughly 133 KB as a Base64 string. This overhead is the tradeoff for being able to embed image data directly in text-based formats.',
      },
      {
        question: 'When should I use Base64 for images?',
        answer:
          'Use Base64 for small images that are critical to rendering (icons, logos under 10 KB) to eliminate an extra HTTP request. Avoid Base64 for large images — the 33% size increase outweighs the benefit, and base64 images cannot be cached by the browser separately from the HTML/CSS file.',
      },
      {
        question: 'Is Base64 encoding the same as compression?',
        answer:
          'No. Base64 encoding makes images larger, not smaller. It is a way to represent binary data as text — not a compression algorithm. For reducing image file size, use our Compress Image tool instead.',
      },
      {
        question: 'Is my image private when using this tool?',
        answer:
          'Yes. All encoding runs in your browser using the FileReader API. Your image is never uploaded to any server. The Base64 string is generated entirely on your device.',
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
