import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-wordpress')

export const metadata: Metadata = {
  title: 'Compress Images for WordPress — Faster Page Speed Free',
  description:
    'Compress WordPress images to under 500KB before uploading. Improve PageSpeed and LCP score without a plugin — 100% browser-based, free, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Images for WordPress — Faster Page Speed Free',
    description:
      'Compress WordPress images to under 500KB before uploading. Improve LCP and PageSpeed — 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Images for WordPress',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for WordPress — Free',
    description: 'Compress WordPress images before uploading. Faster page speed, no plugin needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Images for WordPress', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Images for WordPress — Faster Page Speed Free',
    description:
      'Compress WordPress images to under 500KB before uploading. Improve PageSpeed and LCP score without a plugin — 100% browser-based, free, no sign-up.',
    faq: [
      {
        question: 'What is the recommended image size for WordPress?',
        answer:
          'For WordPress post content images: under 200KB at 1200px wide. For featured/hero images: under 300KB at 1920px wide. For thumbnails: under 50KB at 400px wide. For product images (WooCommerce): under 500KB at 1000×1000px. WordPress generates multiple sizes from each upload — always compress the source before uploading.',
      },
      {
        question: 'Does WordPress compress images automatically?',
        answer:
          'WordPress applies JPEG compression at quality 82 by default (changed from 90 in WordPress 4.5). It also generates thumbnail, medium, large, and full-size versions from your upload. However, it does not compress PNG or WebP files, and quality 82 still produces large files from high-resolution originals. Pre-compressing before upload is more effective.',
      },
      {
        question: 'Do I need a plugin to compress images for WordPress?',
        answer:
          'No. Compressing images before uploading is more effective than using a plugin. Plugins like Smush or ShortPixel process images after upload, which means WordPress first generates all thumbnail sizes from the original, then the plugin re-processes them. Pre-compressing gives you smaller source files and faster thumbnail generation.',
      },
      {
        question: 'What quality setting should I use for WordPress images?',
        answer:
          'Quality 80 for post content images and featured images — visually lossless at screen resolution with file sizes typically under 200–300KB. Quality 72–75 for background images, thumbnails, and any image where the viewing distance is large. Avoid quality below 65 — compression artifacts become visible.',
      },
      {
        question: 'How do WordPress image sizes work?',
        answer:
          'WordPress generates up to 4 sizes from every uploaded image: thumbnail (150×150px cropped), medium (300px max), large (1024px max), and full (original). Some themes and plugins register additional sizes. The generated sizes are all derived from the original file — a smaller, compressed original produces smaller, faster-loading derivatives.',
      },
      {
        question: 'Should I use JPEG or WebP for WordPress images?',
        answer:
          'WordPress 5.8+ supports WebP natively. WebP produces files 25–35% smaller than JPEG at the same visual quality and is supported by all modern browsers. Use WebP for new WordPress sites. Use JPEG for maximum compatibility and for sites where visitors may use older browsers. Avoid PNG for photographs — PNG files are 3–10× larger than JPEG for the same photo.',
      },
      {
        question: 'How do I fix a failing PageSpeed score caused by WordPress images?',
        answer:
          'Find the LCP element in PageSpeed Insights — it is usually the hero image or featured image. Compress it to under 200KB and ensure it loads with high priority (no lazy loading on above-the-fold images). Also check "Serve images in next-gen formats" — switch from JPEG to WebP. These two changes typically improve LCP by 1–3 seconds.',
      },
      {
        question: 'Are my WordPress images private when using this tool?',
        answer:
          'Yes. All compression runs entirely in your browser using JavaScript. Your images never leave your device — nothing is uploaded to any server. Safe for unreleased blog content, client work, and WooCommerce products that are not yet published.',
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
