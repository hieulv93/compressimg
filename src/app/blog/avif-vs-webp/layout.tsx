import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/avif-vs-webp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
  description:
    'AVIF vs WebP compared on file size, quality, browser support, and encoding speed. Which format should you use for your website in 2026? Full data-driven comparison.',
  keywords: [
    'avif vs webp',
    'avif vs webp quality',
    'avif or webp',
    'best modern image format',
    'avif webp comparison',
    'avif vs webp file size',
    'webp vs avif 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
    description: 'Full comparison of AVIF and WebP on size, quality, browser support, and speed.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AVIF vs WebP' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF vs WebP: Which Format Wins in 2026?',
    description: 'File size, quality, browser support, encoding speed — full comparison.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
      description:
        'AVIF vs WebP compared on file size, quality, browser support, and encoding speed.',
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
        { '@type': 'ListItem', position: 3, name: 'AVIF vs WebP', item: PAGE_URL },
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
