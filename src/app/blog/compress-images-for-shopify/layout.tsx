import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/compress-images-for-shopify/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Compress Images for Shopify — Speed Up Your Store (2026)',
  description:
    'Compress Shopify product images to under 500KB for faster store loading, better PageSpeed scores, and higher Google rankings. Step-by-step guide with recommended settings.',
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
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best image size for Shopify product photos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "2048 × 2048 pixels at a 1:1 aspect ratio is Shopify's recommended size for product images. This is the maximum resolution Shopify uses for zoom functionality. File size should be under 500 KB — compress at quality 82 before uploading.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Shopify convert images to WebP automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When a browser supports WebP (all modern browsers), Shopify serves a WebP version of your uploaded image. However, the WebP is generated from your source — if the source is 5 MB, the WebP will still be large. Compress the source first.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format should I upload to Shopify?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload JPEG for product photos and PNG for images that require transparency (logos, overlays). Shopify converts to WebP for delivery automatically. You do not need to upload WebP files directly, though Shopify accepts them.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I fix a slow Shopify store caused by images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Check your PageSpeed score at pagespeed.web.dev. If images are the cause, compress them at compressimg.pro (quality 82, under 500 KB per product image), re-upload to Shopify, then re-run PageSpeed. Typically improves LCP by 1–3 seconds on mobile.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum file size for Shopify images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shopify accepts images up to 20 MB per file. However, you should never upload near this limit — product images should be under 500 KB and collection banners under 300 KB for optimal performance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does image compression affect product photo quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 82 (recommended), compressed product photos are visually identical to uncompressed originals at normal viewing. The compression removes data the eye cannot perceive. At quality below 70, artifacts may appear on high-detail product areas.',
          },
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
