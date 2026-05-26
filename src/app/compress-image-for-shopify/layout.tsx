import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-shopify/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Images for Shopify — Faster Product Photos',
  description:
    'Optimize Shopify product images for faster store loading — compress to under 500KB without losing quality. 100% browser-based, free, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Images for Shopify — Faster Product Photos',
    description:
      'Compress Shopify product images to under 500KB. Faster store loading, better PageSpeed score — 100% browser-based, private, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images for Shopify' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Shopify — Free',
    description: 'Compress product images to under 500KB for faster Shopify store loading.',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Compress Images for Shopify',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Shopify Image Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for Shopify stores. Reduce product photo file size to under 500KB for faster loading — no upload required, 100% private.',
      featureList: [
        'Compress Shopify product images under 500KB',
        'JPEG and WebP output for fast CDN delivery',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'See exact output size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress Images for Shopify',
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your product image',
          text: 'Click the upload area or drag and drop your product photo. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 80–85',
          text: 'Quality 82 produces excellent product photos under 500KB for most 2048×2048px images. Adjust lower if still over your target.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload to Shopify',
          text: 'Download the compressed file. Upload to your Shopify product, collection, or blog post. Faster loading, better PageSpeed score.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the recommended image size for Shopify product photos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Shopify recommends square product images at 2048×2048px for high-resolution zoom. For file size, keep product images under 500KB — ideally 200–400KB. Shopify's CDN serves images at the correct display size, but a smaller source file still loads faster and reduces CDN transfer time.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress images for Shopify to load faster?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your product image here and set quality to 82. A 2048×2048px JPEG at quality 82 compresses to 250–500KB for most product photos. This is the sweet spot — visually lossless at zoom level, under 500KB for fast CDN delivery. Download and upload directly to Shopify admin.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Shopify compress images automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — Shopify uses a CDN to resize and serve images at the correct display size. But Shopify does not aggressively compress the original file you upload. If you upload a 5MB product photo, Shopify still stores and processes a 5MB source, which slows down admin uploads and initial CDN processing. Upload images already compressed to under 500KB for best results.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format should Shopify product images be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "JPEG for product photos — smallest file size, best compression at quality 80–85, supported everywhere. PNG for images that require transparency (logos, icons on white backgrounds can use JPEG). WebP is supported by Shopify's CDN and produces files 25–35% smaller than JPEG at the same visual quality, but JPEG is safer for maximum compatibility.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why does my Shopify store score low on PageSpeed even with small images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PageSpeed Insights measures Largest Contentful Paint (LCP) — the time until the biggest visible element loads. For Shopify, this is usually the hero image or first product image. Even at 500KB, if the image is 4000px wide and served un-resized, it hurts LCP. Compress to under 300KB and resize to 1920px wide for hero images. For product thumbnails, 800×800px at 100–200KB is ideal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my Shopify product image safe when compressing with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — all compression runs entirely in your browser using JavaScript. Your product photos never leave your device. Nothing is uploaded to any server. This is important for unreleased products — your images stay private until you upload them to Shopify yourself.',
          },
        },
      ],
    },
  ],
}

export default function CompressForShopifyLayout({ children }: { children: React.ReactNode }) {
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
