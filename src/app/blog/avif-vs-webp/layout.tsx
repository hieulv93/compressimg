import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/avif-vs-webp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
  description:
    'AVIF vs WebP compared on file size, quality, browser support, and encoding speed. Which format should you use for your website in 2026? Full data-driven comparison.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
    description: 'Full comparison of AVIF and WebP on size, quality, browser support, and speed.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AVIF vs WebP' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF vs WebP: Which Format Wins in 2026?',
    description: 'File size, quality, browser support, encoding speed — full comparison.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
      description:
        'AVIF vs WebP compared on file size, quality, browser support, and encoding speed.',
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
        { '@type': 'ListItem', position: 3, name: 'AVIF vs WebP', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is AVIF better than WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF produces 20–30% smaller files than WebP at equivalent visual quality, which makes it technically superior in compression. However, WebP has broader browser support (97% vs ~90%) and faster encoding. For most websites in 2026, WebP is the practical choice — use AVIF with a WebP fallback if file size is critical.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Safari support AVIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Safari 16+ (iOS 16 / macOS Ventura and later) added basic AVIF support. Older Safari versions do not support AVIF. This is why the <picture> element fallback to WebP is important — it ensures Safari users always see the image.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is AVIF supported in Chrome?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Chrome has supported AVIF since version 85 (released August 2020). This covers the majority of desktop and Android browser usage.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much smaller is AVIF compared to JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At equivalent visual quality, AVIF is typically 40–60% smaller than JPEG. The actual reduction varies by image type — photographs with smooth gradients show the largest improvement, while flat-color images show less difference.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert images to AVIF or WebP for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Use the free tools at compressimg.pro — JPG to WebP and PNG to WebP convert in your browser without any upload. For AVIF conversion, specialized tools or image CDNs handle this at the server level.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WebP or AVIF support transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both formats support alpha channel transparency. WebP can replace PNG for transparent images with much smaller file sizes. AVIF also supports transparency with even better compression.',
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
