import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/compress-images-for-shopify/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Compress Images for Shopify — Speed Up Your Store (2026)',
  description:
    'Compress Shopify product images to under 500KB for faster store loading, better PageSpeed scores, and higher Google rankings. Step-by-step guide with recommended settings.',
  keywords: [
    'compress images for shopify',
    'shopify image optimization',
    'shopify image size',
    'shopify product image compression',
    'shopify page speed images',
    'optimize images shopify',
    'shopify image too large',
    'shopify image format',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images for Shopify — Speed Up Your Store',
    description:
      'Compress Shopify product images under 500KB. Faster loading, better PageSpeed scores.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images for Shopify' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Shopify (2026)',
    description: 'Faster store loading with compressed product photos — step-by-step guide.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Compress Images for Shopify — Speed Up Your Store (2026)',
      description: 'Step-by-step guide to compressing Shopify product images for faster loading.',
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
        { '@type': 'ListItem', position: 3, name: 'Compress Images for Shopify', item: PAGE_URL },
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
