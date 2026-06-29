import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-to-300kb')

export const metadata: Metadata = {
  title: 'Compress Image to 300KB Online Free — Any Format',
  description:
    'Free online tool to compress images to 300KB or less. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 300KB Online Free — Any Format',
    description:
      'Free online tool to compress images to 300KB or less. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image to 300KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 300KB Online Free — Any Format',
    description: 'Reduce any image to under 300KB for free. 100% browser-based — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolTarget,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image to 300KB Online Free', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Image to 300KB Online Free',
    description:
      'Free online tool to compress images to 300KB or less. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
    targetKb: 300,
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
