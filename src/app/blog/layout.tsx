import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Image Optimization Blog — Compression, Format & Performance Tips',
  description:
    'Free guides on image compression, format conversion, and web performance. Learn how to compress JPG, PNG, WebP for web, email, Instagram, WhatsApp and more.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image Optimization Blog — Compression, Format & Performance Tips',
    description:
      'Free guides on image compression, format conversion, and web performance. JPG, PNG, WebP, HEIC — everything you need to know.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'CompressImg Blog' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Optimization Blog — CompressImg',
    description: 'Free guides on image compression, format conversion, and web performance.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Blog',
      name: 'Image Optimization Blog — CompressImg',
      url: PAGE_URL,
      description:
        'Free guides on image compression, format conversion, and web performance. Learn how to compress JPG, PNG, WebP and HEIC images for web, email, and social media.',
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
      },
      inLanguage: 'en',
    },
    {
      '@type': 'ItemList',
      name: 'Image Optimization Guides',
      url: PAGE_URL,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'How to Compress Images for WordPress — Speed Up Your Site',
          url: `${SITE_URL}/blog/how-to-compress-images-for-wordpress/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'How to Compress Images Without Losing Quality',
          url: `${SITE_URL}/blog/compress-images-without-losing-quality/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'What Is WebP? The Complete Guide to WebP Images',
          url: `${SITE_URL}/blog/what-is-webp-format/`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'What Is HEIC? How to Open and Convert HEIC Images',
          url: `${SITE_URL}/blog/what-is-heic-format/`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Why Do Photos Look Blurry on Social Media? (And How to Fix It)',
          url: `${SITE_URL}/blog/why-photos-look-blurry-social-media/`,
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'How to Reduce Image File Size: 5 Methods That Actually Work',
          url: `${SITE_URL}/blog/how-to-reduce-image-file-size/`,
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Best Image Format for Web: JPEG vs PNG vs WebP in 2026',
          url: `${SITE_URL}/blog/best-image-format-for-web/`,
        },
        {
          '@type': 'ListItem',
          position: 8,
          name: 'How to Compress Images for Web: The Complete Guide',
          url: `${SITE_URL}/blog/how-to-compress-images-for-web/`,
        },
      ],
    },
  ],
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
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
