import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-to-800kb')

export const metadata: Metadata = {
  title: 'Compress Image to 800KB Online Free — Reduce to Under 800KB',
  description:
    'Free online tool to compress images to 800KB or less. Reduce JPG, PNG, WebP for email, web uploads, and platform limits. Browser-based, no upload required.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 800KB Online Free — Reduce to Under 800KB',
    description:
      'Free online tool to compress images to 800KB or less. Reduce JPG, PNG, WebP for email, web uploads, and platform limits. Browser-based, no upload required.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image to 800KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 800KB Online Free — Reduce to Under 800KB',
    description: 'Reduce any image to under 800KB for free. 100% browser-based — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolTarget,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image to 800KB Online Free', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Image to 800KB Online Free',
    description:
      'Free online tool to compress images to 800KB or less. Reduce JPG, PNG, WebP for email, web uploads, and platform limits. Browser-based, no upload required.',
    targetKb: 800,
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
