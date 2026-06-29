import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/how-to-reduce-image-file-size')

export const metadata: Metadata = {
  title: 'How to Reduce Image File Size: 5 Methods That Actually Work',
  description:
    'Reduce image file size for web, email, WhatsApp, Slack, and upload forms. 5 methods: compress to 80% quality, resize dimensions, convert to WebP, hit exact KB targets, or batch process.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Reduce Image File Size: 5 Methods That Actually Work',
    description:
      'Compress, resize, convert format, batch process — 5 proven techniques to reduce image file size for any use case.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How to Reduce Image File Size',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reduce Image File Size: 5 Proven Methods',
    description:
      'Compress, resize, convert to WebP — practical techniques to shrink image files for web, email, and upload forms.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'How to Reduce Image File Size', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Reduce Image File Size: 5 Methods That Actually Work',
    blog: {
      headline: 'How to Reduce Image File Size: 5 Methods That Actually Work',
      description:
        'Compress, resize, convert format, batch process — 5 proven techniques to reduce image file size for any use case.',
      datePublished: '2026-04-29',
      dateModified: '2026-05-26',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'What is the best way to reduce image file size?',
        answer:
          'The most effective method depends on your use case. For photographs, use lossy JPEG compression — a quality setting of 75–85% reduces file size by 60–80% with no visible quality loss. For images with text or transparency, use lossless PNG compression. For web use, convert to WebP for 25–35% additional reduction over JPEG.',
      },
      {
        question: 'How do I reduce image file size without losing quality?',
        answer:
          'For photographs, JPEG compression at 80–85% quality is visually lossless for most images. For a truly lossless approach, use PNG with lossless compression or convert JPEG/PNG to WebP lossless. Resizing the image to its actual display dimensions is another lossless-quality approach — you are removing pixels the viewer never sees.',
      },
      {
        question: 'How do I reduce an image file size to under 100KB?',
        answer:
          'Use a target-size compressor that reduces the image to exactly under 100KB. The tool adjusts JPEG quality automatically until the output meets your size limit. For images that are very large, first resize to a smaller resolution, then compress. CompressImg offers a free Compress to 100KB tool at compressimg.pro/compress-image-to-100kb.',
      },
      {
        question: 'Does reducing image file size reduce quality?',
        answer:
          'It depends on the method. Lossy compression (JPEG, WebP lossy) removes some image data, which can reduce quality at aggressive settings. At 75–85% JPEG quality, quality loss is imperceptible to most viewers. Lossless methods — PNG compression, resizing, format conversion — reduce file size without touching pixel data.',
      },
      {
        question: 'What image format has the smallest file size?',
        answer:
          'WebP produces the smallest file size for most web images — 25–35% smaller than JPEG at equivalent quality. AVIF is even smaller (20–30% smaller than WebP) but has less browser support. For photographs specifically, JPEG is still widely used due to universal compatibility. PNG is the smallest for images with flat colors and sharp edges.',
      },
      {
        question: 'How do I reduce image file size for email?',
        answer:
          "Compress each image to under 1MB using JPEG quality 80, then verify the total attachment size is under your provider's limit (25MB for Gmail, 20MB for Outlook). For multiple photos, batch compress them first. If recipients need full quality, share via a cloud link instead of attaching directly.",
      },
      {
        question: 'Why does WhatsApp reduce image quality when sending photos?',
        answer:
          'WhatsApp compresses images sent via the Photos tab to save bandwidth. To avoid this, send the file via the Document or Files option — WhatsApp does not compress file attachments. Pre-compressing at quality 80 before sending via Photos gives you control over the output quality.',
      },
      {
        question: 'How do I reduce image file size below 200KB?',
        answer:
          'Use a target-size compressor and set the limit to 200KB. The tool automatically adjusts JPEG quality until the output meets the limit. For very large source images (12MP+), resize to around 1200–1600px wide first, then compress. This avoids aggressive quality reduction on high-resolution originals.',
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
