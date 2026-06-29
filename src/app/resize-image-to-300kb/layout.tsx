import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-300kb')

export const metadata: Metadata = {
  title: 'Resize Image to 300KB Online Free — LinkedIn, Blog, Visa',
  description:
    'Resize any image to under 300KB free. Ideal for LinkedIn profile photo, blog featured images, Schengen visa, and web uploads. JPEG output, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 300KB Online Free — LinkedIn, Blog, Visa',
    description: 'Resize to under 300KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 300KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 300KB Online Free',
    description: 'Resize to under 300KB automatically. Free, browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image in KB', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image to 300KB Online Free — LinkedIn, Blog, Visa',
    description:
      'Resize any image to under 300KB free. Ideal for LinkedIn profile photo, blog featured images, Schengen visa, and web uploads. JPEG output, 100% browser-based.',
    faq: [
      {
        question: 'What is the LinkedIn profile photo size limit?',
        answer:
          'LinkedIn accepts profile photos up to 8MB, but a 300×300px JPEG under 300KB loads fastest and looks sharp on all devices — including the small circular thumbnail in the feed.',
      },
      {
        question: 'What is the Schengen visa photo size requirement?',
        answer:
          'Many Schengen visa application portals accept digital photos under 500KB. Uploading under 300KB is well within all EU embassy and visa portal limits.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All processing happens 100% in your browser. Your files never leave your device.',
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
