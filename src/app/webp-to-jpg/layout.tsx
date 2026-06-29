import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/webp-to-jpg')

export const metadata: Metadata = {
  title: 'WebP to JPG Converter Online Free — Convert WebP to JPEG',
  description:
    'Free online WebP to JPG converter. Convert WebP images to universally compatible JPG/JPEG instantly. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WebP to JPG Converter Online Free',
    description:
      'Convert WebP to JPG instantly for universal compatibility. No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebP to JPG Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to JPG Converter Online Free',
    description: 'Convert WebP to JPG for universal compatibility. No uploads — browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'WebP to JPG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'WebP to JPG Converter Online Free — Convert WebP to JPEG',
    description:
      'Free online WebP to JPG converter. Convert WebP images to universally compatible JPG/JPEG instantly. No upload — 100% browser-based and private.',
    faq: [
      {
        question: "Why can't I open a WebP file on my computer?",
        answer:
          'WebP is a modern format that older software does not support. Older Photoshop versions (before 2021), older Office versions, and Windows Photo Viewer on older Windows versions cannot open WebP. Converting to JPG gives a file that opens everywhere.',
      },
      {
        question: 'Does converting WebP to JPG reduce quality?',
        answer:
          'A small quality reduction is introduced because JPG uses lossy compression. This tool converts at high quality, which is virtually indistinguishable from the original at normal viewing sizes.',
      },
      {
        question: 'What happens to WebP transparency when converting to JPG?',
        answer:
          'JPG does not support transparency. Transparent areas in your WebP file are filled with a white background in the JPG output. If you need to preserve transparency, convert to PNG instead.',
      },
      {
        question: 'Will the JPG be larger or smaller than the WebP?',
        answer:
          'Generally larger. WebP is 25–35% more efficient than JPG, so converting WebP to JPG typically increases file size. This is the trade-off for gaining universal compatibility.',
      },
      {
        question: 'Why do websites use WebP instead of JPG?',
        answer:
          'WebP produces smaller file sizes than JPG at the same visual quality, improving website loading speed and Core Web Vitals scores. When you save or download these images, you get a WebP file — converting to JPG makes them compatible with all applications.',
      },
      {
        question: 'Can I convert animated WebP to JPG?',
        answer:
          'This tool converts the first frame of an animated WebP file to a static JPG image. The resulting JPG will show only the first frame of the animation.',
      },
      {
        question: 'Can I convert WebP to JPG on my iPhone or Android?',
        answer:
          'Yes. This tool works fully on iOS Safari and Android Chrome. Tap to select a WebP file, wait for conversion, and download the JPG — no app installation required.',
      },
      {
        question: 'Are my WebP files uploaded to a server during conversion?',
        answer:
          'No. All conversion happens entirely in your browser using the Canvas API. Your files never leave your device and are never sent to any server.',
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
