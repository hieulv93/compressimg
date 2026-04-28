import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/best-image-format-for-web/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Best Image Format for Web: JPEG vs PNG vs WebP in 2026',
  description:
    'JPEG, PNG, WebP, AVIF — which image format is best for your website? Full comparison of file size, quality, browser support, and when to use each format.',
  keywords: [
    'best image format for web',
    'image format for web',
    'jpeg vs png vs webp',
    'webp vs jpeg',
    'image format comparison',
    'best format for website images',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Best Image Format for Web: JPEG vs PNG vs WebP in 2026',
    description:
      'Full comparison of JPEG, PNG, WebP, and AVIF — file size, quality, browser support, and when to use each.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Best Image Format for Web' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Image Format for Web 2026',
    description: 'JPEG vs PNG vs WebP vs AVIF — when to use each format for web images.',
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
          name: 'Best Image Format for Web',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Best Image Format for Web: JPEG vs PNG vs WebP in 2026',
      description:
        'JPEG, PNG, WebP, AVIF — full comparison of file size, quality, browser support, and when to use each format for web images.',
      url: PAGE_URL,
      datePublished: '2026-04-28',
      dateModified: '2026-04-28',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best image format for websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is the best image format for most websites in 2026. It produces 25–35% smaller files than JPEG at equivalent visual quality, supports transparency like PNG, and is supported by all modern browsers. Use JPEG as a fallback for older browsers or platforms that do not accept WebP.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I use PNG instead of JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use PNG for images that require transparency (logos, icons, overlays), images with flat colors and sharp edges (screenshots, diagrams, text-heavy graphics), and images where lossless quality is required. JPEG is better for photographs and complex images without transparency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is WebP better than JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, for web use. WebP produces 25–35% smaller files than JPEG at the same visual quality using lossy compression, and also supports lossless compression and transparency. All modern browsers (Chrome, Firefox, Safari 14+, Edge) support WebP. The only case to prefer JPEG is when targeting platforms or tools that do not accept WebP.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use AVIF or WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF produces 20–30% smaller files than WebP at equivalent quality, but browser support is still incomplete (not supported in Safari on older iOS). For maximum compatibility in 2026, use WebP. If your audience is primarily on modern Chrome or Firefox, AVIF is worth testing. Use the picture element with AVIF as first source and WebP/JPEG as fallback.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does image format affect SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, indirectly. Image format affects file size, which affects page load speed. Faster pages rank higher in Google. Using WebP instead of JPEG can reduce image weight by 25–35%, improving LCP (Largest Contentful Paint) — a Core Web Vital that directly affects search rankings.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format does Google recommend for web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Google's PageSpeed Insights and web performance guidelines recommend WebP for web images. Google explicitly suggests serving images in next-gen formats (WebP or AVIF) to reduce payload and improve LCP. Converting JPEG and PNG images to WebP is one of the highest-impact optimizations for Core Web Vitals.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert JPEG to WebP online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Use CompressImg's free JPG to WebP converter at compressimg.pro/jpg-to-webp. The conversion happens entirely in your browser — no upload to server. You can also convert PNG to WebP at compressimg.pro/png-to-webp.",
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
