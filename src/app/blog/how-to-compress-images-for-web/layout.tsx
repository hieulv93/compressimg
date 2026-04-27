import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/how-to-compress-images-for-web/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Compress Images for Web: The Complete Guide',
  description:
    'Learn how to compress images for web without losing quality. Covers JPEG vs PNG vs WebP, the right quality settings, and free tools to reduce file size by up to 90%.',
  keywords: [
    'how to compress images for web',
    'image compression guide',
    'compress images without losing quality',
    'image file size reduction',
    'jpeg png webp compression',
    'web image optimization',
    'reduce image size web',
    'image compression tutorial',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images for Web: The Complete Guide',
    description:
      'Learn how to compress images for web without losing quality. JPEG vs PNG vs WebP, quality settings, and free tools.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How to Compress Images for Web' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Web: The Complete Guide',
    description:
      'Compress images without losing quality. JPEG, PNG, WebP guide with free browser-based tools.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Compress Images for Web: The Complete Guide',
      description:
        'Learn how to compress images for web without losing quality. Covers JPEG vs PNG vs WebP, quality settings, and free tools.',
      url: PAGE_URL,
      datePublished: '2026-04-28',
      dateModified: '2026-04-28',
      author: { '@type': 'Organization', name: 'CompressImg', url: 'https://compressimg.pro' },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: 'https://compressimg.pro',
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
          name: 'How to Compress Images for Web',
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
