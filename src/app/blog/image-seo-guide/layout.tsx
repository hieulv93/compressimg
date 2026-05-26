import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/image-seo-guide/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
  description:
    'How to optimize images for Google search — file size, alt text, file names, structured data, Core Web Vitals, and next-gen formats. Complete image SEO guide for 2026.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
    description:
      'File size, alt text, file names, structured data, Core Web Vitals — complete image SEO guide.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Image SEO Guide 2026' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image SEO Guide 2026 — Complete Optimization Checklist',
    description:
      'Alt text, file size, Core Web Vitals, structured data — everything that affects image SEO.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
      description: 'How to optimize images for Google search rankings — complete 2026 guide.',
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
        { '@type': 'ListItem', position: 3, name: 'Image SEO Guide', item: PAGE_URL },
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
