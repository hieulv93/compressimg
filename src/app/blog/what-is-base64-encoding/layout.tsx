import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/what-is-base64-encoding/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'What Is Base64 Encoding? A Plain-English Explanation',
  description:
    'Base64 encoding converts binary data — like images — into text strings. Learn how it works, when to use it, the 33% size overhead, and practical HTML/CSS examples.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Base64 Encoding? A Plain-English Explanation',
    description: 'How Base64 encoding works, when to use it for images, and the key trade-offs.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'What Is Base64 Encoding?' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Base64 Encoding? Plain-English Explanation',
    description: 'How Base64 works, when to use it for images, and the 33% size trade-off.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What Is Base64 Encoding? A Plain-English Explanation',
      description: 'How Base64 encoding works, when to use it for images, and the key trade-offs.',
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
        { '@type': 'ListItem', position: 3, name: 'What Is Base64 Encoding?', item: PAGE_URL },
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
