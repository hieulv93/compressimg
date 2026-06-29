import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-to-4mb')

export const metadata: Metadata = {
  title: 'Compress Image to 4MB Online Free — Reduce to Under 4MB',
  description:
    'Free online tool to compress images to under 4MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 4MB Online Free — Reduce to Under 4MB',
    description:
      'Free online tool to compress images to under 4MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image to 4MB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 4MB Online Free — Reduce to Under 4MB',
    description: 'Reduce any image to under 4MB for free. 100% browser-based — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolTarget,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image to 4MB Online Free', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Image to 4MB Online Free',
    description:
      'Free online tool to compress images to under 4MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
    targetKb: 4096,
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
