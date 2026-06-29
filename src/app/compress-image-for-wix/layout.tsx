import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-wix')

export const metadata: Metadata = {
  title: 'Compress Images for Wix — Faster Website Photos Free',
  description:
    'Compress Wix images to under 500KB for faster website loading. Optimize product photos, gallery images, and blog banners. 100% browser-based, free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Images for Wix — Faster Website Photos Free',
    description:
      'Compress Wix images to under 500KB. Faster Wix site loading, better Lighthouse score — 100% browser-based, private, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Images for Wix',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Wix — Free',
    description: 'Compress Wix photos to under 500KB for faster site loading.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Images for Wix', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Images for Wix — Faster Website Photos Free',
    description:
      'Compress Wix images to under 500KB for faster website loading. Optimize product photos, gallery images, and blog banners. 100% browser-based, free.',
    faq: [
      {
        question: 'What is the recommended image size for Wix?',
        answer:
          'Wix recommends keeping images under 25MB (their hard limit), but for fast loading you should target under 500KB per image. Full-width backgrounds: 1920×1080px, under 600KB. Blog post images: 940×480px, under 300KB. Product images: 800×800 to 1500×1500px, under 400KB. Gallery images: 1000px wide, under 300KB.',
      },
      {
        question: 'How do I compress images for Wix to load faster?',
        answer:
          'Upload your image here and set quality to 82. A 1920×1080px JPEG at quality 82 compresses to 200–450KB. For blog thumbnails at 940×480px, quality 82 gives 80–200KB. Download and upload to Wix Media Manager. Your Wix site will load faster and score better on Google PageSpeed.',
      },
      {
        question: 'Does Wix optimize images automatically?',
        answer:
          'Wix uses Imagekit (formerly Cloudinary) to serve images at the correct display size. However, Wix does not reduce the file size of the original image you upload. A 5MB photo uploaded to Wix Media Manager stays 5MB in storage. Wix resizes the display dimensions, but pre-compressing to under 500KB reduces upload time, storage, and CDN bandwidth costs.',
      },
      {
        question: 'My Wix site loads slowly — will compressing images help?',
        answer:
          "Images are the leading cause of slow Wix sites. Wix's Google PageSpeed score is affected by LCP (Largest Contentful Paint) — usually your hero banner or first visible image. Compress the banner to under 400KB and any above-the-fold images to under 200KB. Below-the-fold gallery images can be 300–500KB. This often improves PageSpeed score by 10–20 points.",
      },
      {
        question: 'What image format should I use for Wix?',
        answer:
          'JPEG for photos (product images, backgrounds, blog covers) — best compression ratio at quality 80–85. PNG for logos, icons, and images with transparency. WebP is supported by Wix and all modern browsers, producing files 25–35% smaller than JPEG — use WebP when you need the best performance.',
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
