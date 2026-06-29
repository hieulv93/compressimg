import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-webp')

export const metadata: Metadata = {
  title: 'Resize WebP Online Free — Change WebP Image Dimensions',
  description:
    'Resize WebP images online for free. Change WebP dimensions for web, CMS, and social media. Preserves WebP format. No upload, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize WebP Online Free — Change WebP Image Dimensions | CompressImg',
    description:
      'Resize WebP images to any pixel dimensions free. WebP format preserved on output. No upload, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize WebP Online — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize WebP Online Free — Change WebP Dimensions',
    description: 'Change WebP width and height by pixel — free, no upload, WebP output preserved.',
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
    name: 'Resize WebP Online Free — Change WebP Image Dimensions',
    description:
      'Resize WebP images online for free. Change WebP dimensions for web, CMS, and social media. Preserves WebP format. No upload, 100% browser-based.',
    faq: [
      {
        question: 'Does the output stay in WebP format after resizing?',
        answer:
          'Yes. When you upload a WebP file, the tool outputs a resized WebP file. The format is preserved, so you keep the WebP compression advantage.',
      },
      {
        question: 'Is WebP better than JPG for web images?',
        answer:
          'WebP is typically 25–35% smaller than JPEG at the same visual quality. It also supports transparency (unlike JPG). All major browsers support WebP since 2020. For new web projects, WebP is the recommended format.',
      },
      {
        question: 'How do I resize a WebP for a WordPress or CMS upload?',
        answer:
          'Upload your WebP file here, enter your target dimensions (commonly 1200×630 for featured images, 300×300 for thumbnails), and download the resized file. Most modern CMS platforms accept WebP natively.',
      },
      {
        question: 'Is my WebP file uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser using the Canvas API. Your file is never sent to any server.',
      },
      {
        question: 'Can I convert WebP to JPG or PNG while resizing?',
        answer:
          'This tool preserves the WebP format. To convert WebP to JPG or PNG, use our WebP to JPG or WebP to PNG converter first, then resize the output.',
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
