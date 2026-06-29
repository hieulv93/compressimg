import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/image-converter')

export const metadata: Metadata = {
  title: 'Image Converter Online Free — Convert JPG, PNG, WebP',
  description:
    'Free online image converter. Convert images between JPG, PNG, and WebP formats instantly. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image Converter Online Free — Convert JPG, PNG, WebP',
    description:
      'Free image converter. Convert between JPG, PNG, WebP formats — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Converter Online Free',
    description: 'Free image converter. Convert JPG, PNG, WebP — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Image Converter', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Image Converter Online Free — Convert JPG, PNG, WebP',
    description:
      'Free online image converter. Convert images between JPG, PNG, and WebP formats instantly. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'How do I convert an image online for free?',
        answer:
          'Upload your image, select the output format (JPG, PNG, or WebP), and download the converted file. The conversion runs entirely in your browser — no upload to server, no sign-up, free with no daily limit.',
      },
      {
        question: 'What is the best image format for websites?',
        answer:
          'WebP is the best format for websites — 25–35% smaller than JPEG at the same visual quality. All modern browsers support WebP. Converting photos to WebP improves page load speed and Google PageSpeed scores.',
      },
      {
        question: 'How do I convert JPG to PNG?',
        answer:
          'Upload your JPG file and select PNG as the output format. The PNG downloads instantly. PNG is lossless and supports transparency — use it for logos and graphics, not photographs.',
      },
      {
        question: 'How do I convert PNG to JPG?',
        answer:
          'Upload your PNG and select JPG as the output format. Transparent backgrounds are replaced with white. JPG is smaller and universally compatible — ideal for email, print, and form uploads.',
      },
      {
        question: 'How do I convert HEIC (iPhone photos) to JPG?',
        answer:
          'Upload your HEIC file and select JPG as the output format. The tool converts HEIC to JPG automatically in your browser. Use this to make iPhone photos compatible with Windows and platforms that do not support HEIC.',
      },
      {
        question: 'Does converting an image change its dimensions?',
        answer:
          'No. Format conversion changes the file format only — width and height stay exactly the same. To change dimensions, use the Resize Image tool.',
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
