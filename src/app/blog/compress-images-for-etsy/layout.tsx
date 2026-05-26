import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/compress-images-for-etsy/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Compress Images for Etsy — Listing Photo Best Practices',
  description:
    'Compress Etsy listing photos to under 1MB for fast loading without losing detail. Covers the 10-image limit, recommended sizes, thumbnail tips, and Etsy image requirements.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images for Etsy — Listing Photo Best Practices',
    description:
      'Etsy listing photos under 1MB — compress without losing detail. Recommended sizes and settings.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images for Etsy' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Etsy',
    description: 'Listing photos under 1MB, recommended dimensions, thumbnail tips.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Compress Images for Etsy — Listing Photo Best Practices',
      description: 'How to compress Etsy listing photos for fast loading without losing detail.',
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
        { '@type': 'ListItem', position: 3, name: 'Compress Images for Etsy', item: PAGE_URL },
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
