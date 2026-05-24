import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/how-to-add-watermark-to-photos/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Add a Watermark to Photos Online — Free Guide',
  description:
    'Learn how to watermark photos for free in your browser — no Photoshop needed. Covers position, opacity, font size, color, and when to use each setting.',
  keywords: [
    'how to add watermark to photo',
    'watermark photos free',
    'add watermark online',
    'photo watermark guide',
    'watermark position opacity guide',
    'protect photos watermark',
    'free watermark tool',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Add a Watermark to Photos Online — Free Guide',
    description:
      'Watermark photos in 3 steps — position, opacity, color guide included. Free, no Photoshop.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How to Add a Watermark to Photos' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Add a Watermark to Photos — Free Guide',
    description: 'Position, opacity, color guide for photo watermarks. Free browser tool.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Add a Watermark to Photos Online — Free Guide',
      description:
        'Learn how to watermark photos for free in your browser — position, opacity, font size, and color guide.',
      url: PAGE_URL,
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: OG_IMAGE },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Add a Watermark to Photos',
          item: PAGE_URL,
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
