import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/compress-images-for-shopify')

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
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Images for Shopify',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Shopify (2026)',
    description: 'Faster store loading with compressed product photos — step-by-step guide.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'Compress Images for Shopify', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Compress Images for Shopify — Speed Up Your Store (2026)',
    blog: {
      headline: 'How to Compress Images for Shopify — Speed Up Your Store (2026)',
      description: 'Step-by-step guide to compressing Shopify product images for faster loading.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'What is the best image size for Shopify product photos?',
        answer:
          "2048 × 2048 pixels at a 1:1 aspect ratio is Shopify's recommended size for product images. This is the maximum resolution Shopify uses for zoom functionality. File size should be under 500 KB — compress at quality 82 before uploading.",
      },
      {
        question: 'Does Shopify convert images to WebP automatically?',
        answer:
          'Yes. When a browser supports WebP (all modern browsers), Shopify serves a WebP version of your uploaded image. However, the WebP is generated from your source — if the source is 5 MB, the WebP will still be large. Compress the source first.',
      },
      {
        question: 'What image format should I upload to Shopify?',
        answer:
          'Upload JPEG for product photos and PNG for images that require transparency (logos, overlays). Shopify converts to WebP for delivery automatically. You do not need to upload WebP files directly, though Shopify accepts them.',
      },
      {
        question: 'How do I fix a slow Shopify store caused by images?',
        answer:
          'Check your PageSpeed score at pagespeed.web.dev. If images are the cause, compress them at compressimg.pro (quality 82, under 500 KB per product image), re-upload to Shopify, then re-run PageSpeed. Typically improves LCP by 1–3 seconds on mobile.',
      },
      {
        question: 'What is the maximum file size for Shopify images?',
        answer:
          'Shopify accepts images up to 20 MB per file. However, you should never upload near this limit — product images should be under 500 KB and collection banners under 300 KB for optimal performance.',
      },
      {
        question: 'Does image compression affect product photo quality?',
        answer:
          'At quality 82 (recommended), compressed product photos are visually identical to uncompressed originals at normal viewing. The compression removes data the eye cannot perceive. At quality below 70, artifacts may appear on high-detail product areas.',
      },
    ],
  },
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />}
      {children}
    </>
  )
}
