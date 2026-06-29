import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/how-to-compress-images-for-wordpress')

export const metadata: Metadata = {
  title: 'How to Compress Images for WordPress — Speed Up Your Site',
  description:
    'Compress images before uploading to WordPress to reduce page load time and improve Core Web Vitals. Recommended sizes, WebP support, and the right quality settings for WordPress.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images for WordPress — Speed Up Your Site',
    description:
      'Reduce image file size before uploading to WordPress. Recommended dimensions, quality settings, WebP support, and how to avoid the most common WordPress image mistakes.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How to Compress Images for WordPress',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for WordPress',
    description:
      'Speed up your WordPress site with properly compressed images. Sizes, quality settings, and WebP tips.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'How to Compress Images for WordPress', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Compress Images for WordPress — Speed Up Your Site',
    blog: {
      headline: 'How to Compress Images for WordPress — Speed Up Your Site Without Losing Quality',
      description:
        'How to compress and optimize images before uploading to WordPress. Covers recommended dimensions, quality settings, WebP support, and common mistakes.',
      datePublished: '2026-05-11',
      dateModified: '2026-05-11',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'What is the best image size for WordPress?',
        answer:
          "For most WordPress themes, a featured image width of 1200px is sufficient. Full-width hero images can go to 1920px, but compress at quality 80 to keep file size under 150KB. Content body images should be 800–1000px wide. Never upload images wider than your theme's content area — the extra pixels are wasted and add unnecessary file size.",
      },
      {
        question: 'What quality should I use to compress images for WordPress?',
        answer:
          'Quality 80 is the standard recommendation for WordPress images. WordPress itself saves resized images at quality 82 by default. At quality 80, a 1200px wide photo is typically 80–200KB — well within a good target range. For hero and featured images, quality 75–80 is acceptable. For thumbnails shown at small sizes, quality 70 is sufficient.',
      },
      {
        question: 'Does WordPress compress uploaded images automatically?',
        answer:
          'Yes, WordPress automatically resizes uploaded images into multiple sizes (thumbnail, medium, large, full) and saves them at JPEG quality 82. However, WordPress does not reduce the original file — the full-size original is saved as-is. This is why pre-compressing before upload is important: you control the quality and file size of the original, which WordPress uses as the source for all generated sizes.',
      },
      {
        question: 'Should I use WebP for WordPress images?',
        answer:
          'Yes. WordPress has supported WebP uploads since version 5.8 (released July 2021). WebP files are 25–35% smaller than JPEG at the same visual quality. If you upload a WebP image, WordPress generates all the intermediate sizes in WebP. The main consideration is whether your theme and plugins display WebP correctly — most modern setups do.',
      },
      {
        question: 'What is the maximum file size for WordPress image uploads?',
        answer:
          'The WordPress upload limit is set by your hosting provider, typically 2MB–64MB. However, the practical limit for performance is much lower. Images over 300KB slow page loads noticeably, especially on mobile. Aim for featured images under 150KB and body content images under 100KB.',
      },
      {
        question: 'How do I compress a PNG for WordPress?',
        answer:
          'If the PNG is a photograph, convert it to JPG first — photographs save as PNG are typically 5–10× larger than the same image as JPG. Use the Convert Image tool to change format, then compress the JPG at quality 80. If the PNG has transparency (logo, icon, overlay), keep it as PNG but resize the dimensions to the maximum display size before uploading.',
      },
      {
        question: 'Does image file size affect WordPress SEO?',
        answer:
          'Yes. Google uses page speed as a ranking factor, and images are often the largest contributors to page weight. Large uncompressed images directly hurt LCP (Largest Contentful Paint), which is a Core Web Vital. Pages with LCP under 2.5 seconds rank better than slower pages. Compressing images to under 150KB per image is one of the highest-impact SEO improvements for most WordPress sites.',
      },
      {
        question: 'Should I compress images before or after uploading to WordPress?',
        answer:
          'Before. Pre-compressing gives you full control over the output quality and file size. If you upload a large uncompressed image, WordPress saves the original as-is — all the intermediate sizes it generates inherit the bloat of the original. Pre-compress to your target quality (80 for most images), then upload the result. WordPress will generate all its sizes from the already-optimized original.',
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
