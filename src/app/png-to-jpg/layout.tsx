import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/png-to-jpg')

export const metadata: Metadata = {
  title: 'PNG to JPG Converter Online Free — Convert PNG to JPEG',
  description:
    'Free online PNG to JPG converter. Reduce file size by 70–85%. No upload — 100% browser-based and private. Transparent areas filled with white background automatically.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG to JPG Converter Online Free',
    description:
      'Convert PNG to JPG instantly. Reduce file size by 70–85%. No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PNG to JPG Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to JPG Converter Online Free',
    description: 'Convert PNG to JPG instantly. Reduce file size by 70–85%. No uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'PNG to JPG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'PNG to JPG Converter Online Free — Convert PNG to JPEG',
    description:
      'Free online PNG to JPG converter. Reduce file size by 70–85%. No upload — 100% browser-based and private. Transparent areas filled with white background automatically.',
    faq: [
      {
        question: 'Will converting PNG to JPG reduce quality?',
        answer:
          'Converting PNG to JPG uses lossy compression, so some image data is discarded. At high quality settings, the difference is virtually invisible on screen. For logos, icons, or text-heavy images, compression artifacts may be more noticeable around sharp edges.',
      },
      {
        question: 'What happens to transparency when converting PNG to JPG?',
        answer:
          'JPG does not support transparency. All transparent pixels in your PNG are replaced with a white background in the JPG output. If you need to preserve transparency, convert to WebP instead.',
      },
      {
        question: 'How much smaller will my file be after converting PNG to JPG?',
        answer:
          'For photographs saved as PNG, the JPG is typically 70–85% smaller. A 4MB PNG photo commonly becomes 400–800KB as JPG at quality 85. For screenshots and graphics, the reduction is 50–75%.',
      },
      {
        question: 'Is it safe to convert PNG logos to JPG?',
        answer:
          'Generally not recommended. JPG introduces artifacts around sharp edges and text common in logos. For logos without transparency needs, WebP is a better choice — smaller files while keeping sharp edges clean.',
      },
      {
        question: 'Can I convert PNG to JPEG? Is JPEG the same as JPG?',
        answer:
          'Yes — JPEG and JPG are identical formats. This tool outputs a standard JPG file that can be opened by any application that reads JPEG images.',
      },
      {
        question: 'How do I convert multiple PNG files to JPG?',
        answer:
          'This tool converts one image at a time. For each file: upload, wait for conversion, download. For large batches, consider desktop software like ImageMagick or GIMP with batch export.',
      },
      {
        question: 'Can I convert PNG to JPG on an iPhone or Android?',
        answer:
          'Yes. This tool works fully on iOS Safari and Android Chrome. Tap to select a PNG from your files, and download the converted JPG directly to your device — no app required.',
      },
      {
        question: 'Are my PNG files uploaded to a server during conversion?',
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
