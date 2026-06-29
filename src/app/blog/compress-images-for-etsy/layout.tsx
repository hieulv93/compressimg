import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/compress-images-for-etsy')

export const metadata: Metadata = {
  title: 'How to Compress Images for Etsy — Listing Photo Best Practices',
  description:
    'Compress Etsy listing photos to under 1MB for fast loading without losing detail. Covers the 10-image limit, recommended sizes, thumbnail tips, and Etsy image requirements.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images for Etsy — Listing Photo Best Practices',
    description:
      'Etsy listing photos under 1MB — compress without losing detail. Recommended sizes and settings.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Images for Etsy',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Etsy',
    description: 'Listing photos under 1MB, recommended dimensions, thumbnail tips.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'Compress Images for Etsy', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Compress Images for Etsy — Listing Photo Best Practices',
    blog: {
      headline: 'How to Compress Images for Etsy — Listing Photo Best Practices',
      description: 'How to compress Etsy listing photos for fast loading without losing detail.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'What is the best image size for Etsy listings?',
        answer:
          "2000 × 2000 pixels at a 1:1 square ratio is the recommended size for Etsy listing photos. This is large enough for Etsy's zoom feature and ensures high-quality thumbnails in search results. Compress to under 800 KB before uploading.",
      },
      {
        question: 'What file format should I use for Etsy photos?',
        answer:
          'JPEG (JPG) is the recommended format for product photos on Etsy. It provides good quality with smaller file sizes compared to PNG. Use PNG only for images with transparent backgrounds. Note: Etsy does not currently accept WebP.',
      },
      {
        question: 'How do I make photos smaller for Etsy?',
        answer:
          'Upload your photo to compressimg.pro, set quality to 82–85, and download the compressed version. For a typical 8 MP product photo, this reduces file size from 5–8 MB to 400–700 KB with no visible quality change.',
      },
      {
        question: 'Does Etsy compress photos after upload?',
        answer:
          'Yes. Etsy generates multiple size variants from your uploaded source image. However, compression quality improves when you upload a well-prepared source. Avoid uploading already heavily compressed images — Etsy will re-compress them, adding another generation of quality loss.',
      },
      {
        question: 'Why do my Etsy photos look blurry?',
        answer:
          'Blurry listing photos are usually caused by uploading images that are too small (under 1000 px), too heavily compressed before upload, or images with low original quality. Upload at 2000 × 2000 px from a sharp original at quality 82–85.',
      },
      {
        question: 'How many photos can I upload to an Etsy listing?',
        answer:
          'Etsy allows up to 10 photos per listing. Use all 10 slots — listings with more photos typically have higher click-through rates. Include product shots from multiple angles, a lifestyle photo, detail shots, size references, and packaging.',
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
