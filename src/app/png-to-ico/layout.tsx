import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/png-to-ico')

export const metadata: Metadata = {
  title: 'PNG to ICO Converter Online Free — Create Favicon from PNG',
  description:
    'Free online PNG to ICO converter. Create a favicon.ico from any PNG, JPG, or WebP image instantly — 6 sizes included (16×16 to 256×256), no upload, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG to ICO Converter Online Free — Create Favicon',
    description:
      'Convert PNG to ICO favicon instantly. 6 sizes included (16×16 to 256×256). No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PNG to ICO Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to ICO Converter Online Free',
    description: 'Create favicon.ico from PNG instantly. 6 sizes. No uploads — 100% browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'PNG to ICO', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'PNG to ICO Converter Online Free — Create Favicon from PNG',
    description:
      'Free online PNG to ICO converter. Create a favicon.ico from any PNG, JPG, or WebP image instantly — 6 sizes included (16×16 to 256×256), no upload, 100% browser-based.',
    faq: [
      {
        question: 'What size should a favicon PNG be?',
        answer:
          'For best results, use a square PNG of at least 256×256 pixels. The converter will resize it to all required favicon sizes (16, 32, 48, 64, 128, 256px). A larger source image produces sharper results at small sizes.',
      },
      {
        question: 'How do I use the downloaded favicon.ico on my website?',
        answer:
          'Upload favicon.ico to your website root directory, then add this tag to your HTML head: <link rel="icon" href="/favicon.ico">. For modern browsers, also add <link rel="icon" href="/favicon.svg" type="image/svg+xml"> or a 32px PNG for better quality.',
      },
      {
        question: 'Does the ICO file contain multiple sizes?',
        answer:
          'Yes. The generated ICO contains 6 sizes: 16×16, 32×32, 48×48, 64×64, 128×128, and 256×256 pixels. Browsers automatically select the most appropriate size based on display context.',
      },
      {
        question: 'Can I use a JPG or WebP image to create a favicon?',
        answer:
          'Yes. The tool accepts PNG, JPG, and WebP images. For logos with transparent backgrounds, use a PNG source — transparency is preserved in the ICO output.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All ICO generation happens entirely in your browser. Your files never leave your device.',
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
