import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/how-to-compress-images-on-iphone/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Compress Images on iPhone — Without Losing Quality (2026)',
  description:
    'Compress iPhone photos without losing quality — 5 free methods including browser-based tools, HEIC settings, AirDrop tricks, and the Files app. Works on iOS 16, 17, 18.',
  keywords: [
    'compress images on iphone',
    'reduce photo size iphone',
    'compress photos iphone',
    'iphone image compressor',
    'reduce image size ios',
    'compress jpeg iphone',
    'make photos smaller iphone',
    'iphone photo file size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images on iPhone — Without Losing Quality',
    description: '5 free methods to compress iPhone photos. Works on iOS 16, 17, 18.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How to Compress Images on iPhone' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images on iPhone (2026)',
    description: '5 free methods to reduce iPhone photo file size without losing quality.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Compress Images on iPhone — Without Losing Quality (2026)',
      description: '5 free methods to compress iPhone photos without losing quality.',
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
        { '@type': 'ListItem', position: 3, name: 'Compress Images on iPhone', item: PAGE_URL },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress Images on iPhone',
      totalTime: 'PT2M',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Open Safari on your iPhone',
          text: 'Go to compressimg.pro in Safari.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your photo',
          text: 'Tap the upload area and select your photo from the Photos app.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the compressed image',
          text: 'Tap Download to save the compressed photo — typically 60–90% smaller.',
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
