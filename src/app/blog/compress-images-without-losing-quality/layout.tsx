import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/compress-images-without-losing-quality/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Compress Images Without Losing Quality',
  description:
    'Compress JPG, PNG, and WebP images without visible quality loss. Learn which settings, methods, and formats minimize file size while keeping images sharp.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images Without Losing Quality',
    description:
      'Compress JPG, PNG, and WebP images without visible quality loss. Learn which settings, methods, and formats minimize file size while keeping images sharp.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images Without Losing Quality' },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images Without Losing Quality',
    description: 'Settings, methods, and formats that minimize size while keeping images sharp.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Compress Images Without Losing Quality',
      description:
        'Compress JPG, PNG, and WebP images without visible quality loss — the right settings, methods, and formats.',
      url: PAGE_URL,
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
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
          name: 'Compress Images Without Losing Quality',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I compress an image without losing any quality at all?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — using lossless compression. For PNG, lossless optimization reorganizes internal data without changing any pixels, reducing file size by 10–30%. WebP lossless achieves similar results with smaller files. For photographs, however, lossless compression produces small savings (10–20%); lossy compression at quality 80 produces 60–75% savings with imperceptible quality loss.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best quality setting for compressing images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For JPEG, quality 80 is the industry-standard recommendation for web and social media use. It reduces file size by 60–75% while maintaining visual quality that is indistinguishable from the original on normal screens. For print or archiving, use 90–95%. For thumbnails and previews where small file size matters more, 70–75% is acceptable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing a JPEG multiple times reduce quality further?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — each time a JPEG is re-compressed, quality loss compounds. The first compression (e.g., from raw to 80% JPEG) removes the most data; subsequent compressions of the resulting JPEG remove more. Always compress from the original file rather than from an already-compressed copy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is WebP really better than JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For web use, yes. WebP produces files 25–35% smaller than JPEG at equivalent visual quality, supports both lossy and lossless modes, and includes transparency support that JPEG lacks. All major browsers support WebP. The only reason to prefer JPEG is compatibility with older software.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress an image to a specific file size without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use a target-size compressor that automatically finds the highest quality setting that produces output under your target size. CompressImg offers target-size tools for 50KB, 100KB, 200KB, 300KB, 500KB, and 1MB. Resize the image to its actual display dimensions first.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between lossless and lossy image compression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lossless compression reduces file size by reorganizing data more efficiently — no pixel values change, and the original can be perfectly reconstructed. Lossy compression discards image data the human eye is unlikely to notice — the original cannot be perfectly reconstructed, but the difference is imperceptible at high quality settings. Lossless saves 10–30%; lossy saves 60–80%.',
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
