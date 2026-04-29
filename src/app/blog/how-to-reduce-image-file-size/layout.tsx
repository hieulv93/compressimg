import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/how-to-reduce-image-file-size/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Reduce Image File Size: 5 Methods That Actually Work',
  description:
    'Reduce image file size for web, email, and upload forms. 5 proven methods: compress, resize, convert format, batch process, and target-size compression.',
  keywords: [
    'how to reduce image file size',
    'reduce image file size',
    'reduce image size',
    'how to reduce image size',
    'image file size reduction',
    'make image file smaller',
    'compress image size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Reduce Image File Size: 5 Methods That Actually Work',
    description:
      'Compress, resize, convert format, batch process — 5 proven techniques to reduce image file size for any use case.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How to Reduce Image File Size' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reduce Image File Size: 5 Proven Methods',
    description:
      'Compress, resize, convert to WebP — practical techniques to shrink image files for web, email, and upload forms.',
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
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Reduce Image File Size',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to Reduce Image File Size: 5 Methods That Actually Work',
      description:
        'Compress, resize, convert format, batch process — 5 proven techniques to reduce image file size for any use case.',
      url: PAGE_URL,
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: OG_IMAGE },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best way to reduce image file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most effective method depends on your use case. For photographs, use lossy JPEG compression — a quality setting of 75–85% reduces file size by 60–80% with no visible quality loss. For images with text or transparency, use lossless PNG compression. For web use, convert to WebP for 25–35% additional reduction over JPEG.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reduce image file size without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photographs, JPEG compression at 80–85% quality is visually lossless for most images. For a truly lossless approach, use PNG with lossless compression or convert JPEG/PNG to WebP lossless. Resizing the image to its actual display dimensions is another lossless-quality approach — you are removing pixels the viewer never sees.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reduce an image file size to under 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use a target-size compressor that reduces the image to exactly under 100KB. The tool adjusts JPEG quality automatically until the output meets your size limit. For images that are very large, first resize to a smaller resolution, then compress. CompressImg offers a free Compress to 100KB tool at compressimg.pro/compress-image-to-100kb.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does reducing image file size reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the method. Lossy compression (JPEG, WebP lossy) removes some image data, which can reduce quality at aggressive settings. At 75–85% JPEG quality, quality loss is imperceptible to most viewers. Lossless methods — PNG compression, resizing, format conversion — reduce file size without touching pixel data.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format has the smallest file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP produces the smallest file size for most web images — 25–35% smaller than JPEG at equivalent quality. AVIF is even smaller (20–30% smaller than WebP) but has less browser support. For photographs specifically, JPEG is still widely used due to universal compatibility. PNG is the smallest for images with flat colors and sharp edges.',
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
