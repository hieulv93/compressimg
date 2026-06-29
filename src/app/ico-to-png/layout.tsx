import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/ico-to-png')

export const metadata: Metadata = {
  title: 'ICO to PNG Converter — Convert Favicon ICO to PNG Free Online',
  description:
    'Convert ICO to PNG free online. Extract favicon or icon from ICO file and save as PNG. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'ICO to PNG Converter — Free Online',
    description:
      'Convert ICO favicon to PNG instantly. Extract icon as PNG for use in designs and web projects. No upload — browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ICO to PNG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICO to PNG — Free Online Converter',
    description: 'Convert ICO favicon to PNG free. No upload, instant conversion.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'ICO to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'ICO to PNG Converter — Convert Favicon ICO to PNG Free Online',
    description:
      'Convert ICO to PNG free online. Extract favicon or icon from ICO file and save as PNG. No upload — 100% browser-based.',
    faq: [
      {
        question: 'What is an ICO file?',
        answer:
          'ICO (Icon) is a file format used by Windows for application icons and website favicons. An ICO file can contain multiple image sizes (16×16, 32×32, 48×48, 64×64, 128×128, 256×256) in a single file, allowing the OS to pick the best size for each context.',
      },
      {
        question: 'Why convert ICO to PNG?',
        answer:
          'ICO files are not supported in most design tools, image editors, or web contexts outside of favicons. Converting ICO to PNG lets you use the icon image in Figma, Photoshop, Canva, presentations, and anywhere that accepts standard image formats.',
      },
      {
        question: 'Does the ICO to PNG conversion preserve transparency?',
        answer:
          'Yes. ICO files support transparency and PNG preserves alpha channels. Transparent areas in the ICO icon remain transparent in the PNG output.',
      },
      {
        question: 'Which size does it extract from the ICO file?',
        answer:
          'The browser renders the ICO at the size best matching the display context. For most ICO files, this is the largest embedded size (often 256×256 or 128×128 for modern icons, 32×32 for classic favicons).',
      },
      {
        question: 'Are my ICO files uploaded to a server?',
        answer:
          'No. All conversion happens in your browser. Your ICO files are never sent to any server — they stay on your device.',
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
