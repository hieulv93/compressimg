import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/dpi-vs-resolution-print-vs-web/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'DPI vs Resolution: Image Settings for Print vs Web (2026 Guide)',
  description:
    "DPI and resolution explained — what they mean for print (300 DPI) vs web (72 PPI), why they're different, and how to set the right values for your use case.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'DPI vs Resolution: Image Settings for Print vs Web',
    description:
      '300 DPI for print, 72 PPI for web — what it means and how to set the right values.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'DPI vs Resolution Guide' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DPI vs Resolution: Print vs Web Explained',
    description: '300 DPI for print, 72 PPI for web — the complete explanation.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'DPI vs Resolution: Image Settings for Print vs Web (2026 Guide)',
      description: 'DPI and resolution explained for print and web use cases.',
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
        { '@type': 'ListItem', position: 3, name: 'DPI vs Resolution', item: PAGE_URL },
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
