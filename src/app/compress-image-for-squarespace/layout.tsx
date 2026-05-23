import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-squarespace/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Images for Squarespace — Faster Site Free',
  description:
    'Compress Squarespace images to under 500KB for faster page loading. Optimize blog photos, product images, and banners. 100% browser-based, free.',
  keywords: [
    'compress image for squarespace',
    'squarespace image optimization',
    'squarespace image size',
    'compress squarespace photos',
    'squarespace image compressor',
    'reduce squarespace image size',
    'optimize images for squarespace',
    'squarespace image file size',
    'squarespace site speed',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Images for Squarespace — Faster Site Free',
    description:
      'Compress Squarespace images to under 500KB. Faster LCP, better PageSpeed — 100% browser-based, private, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images for Squarespace' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Squarespace — Free',
    description: 'Compress Squarespace photos to under 500KB for faster page loading.',
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
          name: 'Compress Images for Squarespace',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Squarespace Image Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for Squarespace websites. Reduce photo file size to under 500KB for faster LCP and better PageSpeed — no upload required, 100% private.',
      featureList: [
        'Compress Squarespace images under 500KB',
        'JPEG output for fast loading and broad compatibility',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'See exact output size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress Images for Squarespace',
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your photo. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 80–85',
          text: 'Quality 82 produces sharp images under 500KB for most 2000px wide photos. Lower to 75 for landscape photos with lots of detail.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload to Squarespace',
          text: "Download the compressed file. Upload via Squarespace's image block, product editor, or blog post editor. Faster LCP, better site score.",
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the recommended image size for Squarespace?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Squarespace recommends images up to 500KB for blog posts and under 1MB for full-width banners. For file dimensions: full-width banners at 2000–2500px wide, blog images at 1500px wide, product images at 1500×1500px. Squarespace's Imgix CDN resizes for display, but smaller source files load faster and improve LCP (Largest Contentful Paint).",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Squarespace resize images automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — Squarespace uses Imgix CDN to serve images at the correct display size. However, Squarespace stores the full original file and still processes it each time a new size is needed. Uploading images already under 500KB reduces storage costs and speeds up the first request for each new size variant.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress images for Squarespace?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Upload your image here and set quality to 82. A 2000px wide JPEG at quality 82 compresses to 300–600KB for most photos. For blog post images at 1500px wide, quality 82 gives 200–450KB. Download and upload to Squarespace's image block or blog editor. Your LCP score will improve immediately.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my Squarespace site slow even with Imgix?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Imgix resizes display dimensions but LCP is still affected by the original file's weight if the server takes time to process a new size variant. Also, JavaScript-heavy Squarespace templates contribute significantly to TBT (Total Blocking Time). Compress images to under 400KB for above-the-fold content and under 600KB for banners to minimize the image contribution to slow LCP.",
          },
        },
        {
          '@type': 'Question',
          name: 'What image format should I use for Squarespace?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPEG for product photos, blog images, and backgrounds — best compression ratio at quality 80–85. PNG for logos and images with transparency. Squarespace also supports WebP, which is 25–35% smaller than JPEG at the same quality — use WebP for maximum performance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this tool free and private?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — completely free with no limits. All compression runs in your browser; images never leave your device. No sign-up required.',
          },
        },
      ],
    },
  ],
}

export default function CompressForSquarespaceLayout({ children }: { children: React.ReactNode }) {
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
