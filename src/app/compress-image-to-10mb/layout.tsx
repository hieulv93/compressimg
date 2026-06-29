import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-to-10mb')

export const metadata: Metadata = {
  title: 'Compress Image to 10MB — Reduce Photo Size Online Free',
  description:
    'Free online tool to compress images to under 10MB. Reduce large JPG, PNG, or WebP files to fit 10MB upload limits — 100% browser-based, no upload to server.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 10MB — Reduce Photo Size Online Free',
    description:
      'Free online tool to compress images to under 10MB. Reduce large JPG, PNG, or WebP files to fit 10MB upload limits — 100% browser-based, no upload to server.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image to 10MB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 10MB — Reduce Photo Size Online Free',
    description: 'Reduce any image to under 10MB for free. 100% browser-based — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolTarget,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image to 10MB Online Free', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Image to 10MB Online Free',
    description:
      'Free online tool to compress images to under 10MB. Reduce large JPG, PNG, or WebP files to fit 10MB upload limits — 100% browser-based, no upload to server.',
    targetKb: 10240,
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
