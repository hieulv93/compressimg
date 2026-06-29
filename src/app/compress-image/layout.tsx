import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image')

export const metadata: Metadata = {
  title: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size',
  description:
    'Free online image compressor. Reduce image file size up to 90% without losing quality. No upload to server — 100% browser-based and private. Supports JPG, PNG, WebP.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size',
    description:
      'Free online image compressor. Reduce file size up to 90% without losing quality. 100% browser-based — your images never leave your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompressImg — Free Online Image Compressor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size',
    description:
      'Reduce image file size up to 90% for free. No uploads — works 100% in your browser.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Image Online Free',
    description:
      'Free browser-based image compressor. Supports JPG, PNG, and WebP. Reduces file size up to 90% without quality loss. No upload required.',
    faq: [
      {
        question: 'Is this image compressor free to use?',
        answer:
          'Yes, completely free with no limits. There are no sign-ups, subscriptions, or watermarks. You can compress as many images as you want at no cost.',
      },
      {
        question: 'Does compressing an image reduce its quality?',
        answer:
          'Lossy compression (JPG, WebP) does remove some image data, but at quality settings of 75–85%, the difference is invisible to the human eye in most photos. Lossless compression (PNG) reduces file size without removing any data. You can use the quality slider to find the right balance for your needs.',
      },
      {
        question: 'What is the maximum file size I can compress?',
        answer:
          'The maximum file size is 20MB per image. This covers the vast majority of images from cameras, phones, and design tools.',
      },
      {
        question: 'Which image format gives the best compression?',
        answer:
          'WebP generally delivers the best compression — 25–35% smaller than JPG at the same visual quality. For photographs, JPG with quality 75–85 is a great balance. PNG is best when you need transparency.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All compression happens 100% in your browser using JavaScript and Web Workers. Your images never leave your device and are never stored on any server.',
      },
      {
        question: 'Can I compress PNG images without losing transparency?',
        answer:
          'Yes. When you compress a PNG file, the output retains full alpha channel (transparency) support. You can compress PNG images without worrying about transparency being lost.',
      },
      {
        question: 'How much can I reduce image file size?',
        answer:
          'Typical reductions are 60–90% depending on the image and quality setting. A 5MB JPG photograph can often be compressed to under 500KB while remaining visually identical on screen.',
      },
      {
        question: 'Does this work on mobile phones?',
        answer:
          'Yes. The tool is fully optimized for mobile browsers on iOS and Android. You can tap to open your camera roll or photo library, select an image, and download the compressed result — all within your mobile browser, no app required.',
      },
    ],
  },
})

export default function CompressImageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />}
      {children}
    </>
  )
}
