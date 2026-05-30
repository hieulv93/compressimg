import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/how-to-compress-images-for-web/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Compress Images for Web: The Complete Guide',
  description:
    'Learn how to compress images for web without losing quality. Covers JPEG vs PNG vs WebP, the right quality settings, and free tools to reduce file size by up to 90%.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images for Web: The Complete Guide',
    description:
      'Learn how to compress images for web without losing quality. JPEG vs PNG vs WebP, quality settings, and free tools.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How to Compress Images for Web' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Web: The Complete Guide',
    description:
      'Compress images without losing quality. JPEG, PNG, WebP guide with free browser-based tools.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Compress Images for Web: The Complete Guide',
      description:
        'Learn how to compress images for web without losing quality. Covers JPEG vs PNG vs WebP, quality settings, and free tools.',
      url: PAGE_URL,
      datePublished: '2026-04-28',
      dateModified: '2026-04-28',
      author: { '@type': 'Organization', name: 'CompressImg', url: 'https://compressimg.pro' },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: 'https://compressimg.pro',
        logo: { '@type': 'ImageObject', url: OG_IMAGE },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Compress Images for Web',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best quality setting for web images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80 is the standard starting point for web images. It produces a file 60–80% smaller than the original with no perceptible quality difference on a normal screen. For thumbnails and preview images, quality 70–75 is appropriate. Never go below 60 for JPEG — artifacts become clearly visible.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use JPEG or WebP for my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Use WebP if your site supports it (all modern browsers in 2026 do). WebP produces 25–35% smaller files than JPEG at the same visual quality. If you need to support very old browsers or specific platforms that don't accept WebP, JPEG is the fallback.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing an image reduce its quality permanently?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For lossy formats like JPEG, yes — each time you save a JPEG at reduced quality, the quality loss is permanent and compounds. Always keep your original high-quality source file and compress a copy for web use. WebP and PNG lossless compression do not permanently reduce quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'How small should images be for a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hero images: under 300KB. Product images: under 200KB. Blog images: under 150KB. Thumbnails: under 80KB. These targets ensure fast loading on mobile connections while maintaining acceptable visual quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do my images look blurry after compression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Blur in compressed images usually means the quality setting was set too low (below 60 for JPEG) or the image was compressed multiple times. Start from the original file and use quality 75–80. If an image still looks blurry at quality 80, the original resolution may be too low.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does image compression affect SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Indirectly, yes. Google uses page speed as a ranking factor, and uncompressed images are the most common cause of slow pages. Compressing images improves LCP (Largest Contentful Paint), which is a Core Web Vital that directly affects search rankings. Google also ranks images in image search based on page speed.',
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
