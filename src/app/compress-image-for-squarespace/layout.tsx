import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-squarespace')

export const metadata: Metadata = {
  title: 'Compress Images for Squarespace — Faster Site Free',
  description:
    'Compress Squarespace images to under 500KB for faster page loading. Optimize blog photos, product images, and banners. 100% browser-based, free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Images for Squarespace — Faster Site Free',
    description:
      'Compress Squarespace images to under 500KB. Faster LCP, better PageSpeed — 100% browser-based, private, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Images for Squarespace',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Squarespace — Free',
    description: 'Compress Squarespace photos to under 500KB for faster page loading.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Images for Squarespace', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Images for Squarespace — Faster Site Free',
    description:
      'Compress Squarespace images to under 500KB for faster page loading. Optimize blog photos, product images, and banners. 100% browser-based, free.',
    faq: [
      {
        question: 'What is the recommended image size for Squarespace?',
        answer:
          "Squarespace recommends images up to 500KB for blog posts and under 1MB for full-width banners. For file dimensions: full-width banners at 2000–2500px wide, blog images at 1500px wide, product images at 1500×1500px. Squarespace's Imgix CDN resizes for display, but smaller source files load faster and improve LCP (Largest Contentful Paint).",
      },
      {
        question: 'Does Squarespace resize images automatically?',
        answer:
          'Yes — Squarespace uses Imgix CDN to serve images at the correct display size. However, Squarespace stores the full original file and still processes it each time a new size is needed. Uploading images already under 500KB reduces storage costs and speeds up the first request for each new size variant.',
      },
      {
        question: 'How do I compress images for Squarespace?',
        answer:
          "Upload your image here and set quality to 82. A 2000px wide JPEG at quality 82 compresses to 300–600KB for most photos. For blog post images at 1500px wide, quality 82 gives 200–450KB. Download and upload to Squarespace's image block or blog editor. Your LCP score will improve immediately.",
      },
      {
        question: 'Why is my Squarespace site slow even with Imgix?',
        answer:
          "Imgix resizes display dimensions but LCP is still affected by the original file's weight if the server takes time to process a new size variant. Also, JavaScript-heavy Squarespace templates contribute significantly to TBT (Total Blocking Time). Compress images to under 400KB for above-the-fold content and under 600KB for banners to minimize the image contribution to slow LCP.",
      },
      {
        question: 'What image format should I use for Squarespace?',
        answer:
          'JPEG for product photos, blog images, and backgrounds — best compression ratio at quality 80–85. PNG for logos and images with transparency. Squarespace also supports WebP, which is 25–35% smaller than JPEG at the same quality — use WebP for maximum performance.',
      },
      {
        question: 'Is this tool free and private?',
        answer:
          'Yes — completely free with no limits. All compression runs in your browser; images never leave your device. No sign-up required.',
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
