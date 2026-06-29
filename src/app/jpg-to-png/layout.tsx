import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/jpg-to-png')

export const metadata: Metadata = {
  title: 'JPG to PNG Converter Online Free — Convert JPEG to PNG',
  description:
    'Free online JPG to PNG converter. Convert JPEG to PNG instantly — lossless, no upload, 100% browser-based and private. Supports JPG and JPEG files up to 20MB.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'JPG to PNG Converter Online Free',
    description:
      'Convert JPG and JPEG files to PNG instantly. Lossless output, no uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JPG to PNG Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to PNG Converter Online Free',
    description: 'Convert JPG to PNG instantly. No uploads — 100% browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'JPG to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'JPG to PNG Converter Online Free — Convert JPEG to PNG',
    description:
      'Free online JPG to PNG converter. Convert JPEG to PNG instantly — lossless, no upload, 100% browser-based and private. Supports JPG and JPEG files up to 20MB.',
    faq: [
      {
        question: 'Does converting JPG to PNG improve image quality?',
        answer:
          'No — converting JPG to PNG does not improve quality. Any compression artifacts already present in the JPG are preserved exactly in the PNG output. The benefit is that PNG is lossless, so no additional quality is lost in future edits.',
      },
      {
        question: 'Will the PNG have a transparent background after conversion?',
        answer:
          'No. JPG files do not contain transparency data. The resulting PNG will have a solid (opaque) background matching the original JPG. To remove the background and make it transparent, you need a background removal tool after conversion.',
      },
      {
        question: 'Why is the converted PNG file larger than the original JPG?',
        answer:
          'PNG stores every pixel losslessly, while JPG discards data to achieve small file sizes. A photograph that is 500KB as JPG may become 3–8MB as PNG. This is normal — PNG is not designed for photographic compression.',
      },
      {
        question: 'Can I convert JPEG to PNG? Is JPEG the same as JPG?',
        answer:
          'Yes — JPEG and JPG are the same format. This tool accepts both .jpg and .jpeg files and converts them to PNG identically.',
      },
      {
        question: 'Is the JPG to PNG conversion lossless?',
        answer:
          'The conversion process itself is lossless — PNG stores the pixel data from the JPG exactly as-is with no additional quality loss. However, the original JPG already contains compression artifacts from its own encoding.',
      },
      {
        question: 'What is the best use case for converting JPG to PNG?',
        answer:
          'The most common reasons: you need to edit the image multiple times without accumulating quality loss, you need transparency support, you are working with logos or graphics that need sharp edges, or you are compositing the image in a design tool.',
      },
      {
        question: 'Can I convert JPG to PNG on my phone?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers. Tap to select a photo from your camera roll, and download the converted PNG — no app installation required.',
      },
      {
        question: 'Are my JPG files uploaded to a server during conversion?',
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
