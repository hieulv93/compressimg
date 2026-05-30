import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/how-to-add-watermark-to-photos/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Add a Watermark to Photos Online — Free Guide',
  description:
    'Learn how to watermark photos for free in your browser — no Photoshop needed. Covers position, opacity, font size, color, and when to use each setting.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Add a Watermark to Photos Online — Free Guide',
    description:
      'Watermark photos in 3 steps — position, opacity, color guide included. Free, no Photoshop.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How to Add a Watermark to Photos' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Add a Watermark to Photos — Free Guide',
    description: 'Position, opacity, color guide for photo watermarks. Free browser tool.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Add a Watermark to Photos Online — Free Guide',
      description:
        'Learn how to watermark photos for free in your browser — position, opacity, font size, and color guide.',
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
          name: 'How to Add a Watermark to Photos',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does adding a watermark reduce photo quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, if you use the correct tool. Our watermark tool saves the output at JPEG quality 92 — visually lossless. The watermark text is rendered on top of your image using the Canvas API in your browser, so no server processing reduces the quality. The downloaded file is essentially as sharp as the original.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can someone remove my watermark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A determined editor can remove any watermark using Photoshop content-aware fill or AI tools. However, a visible watermark stops casual theft — most unauthorized reuse is opportunistic. For maximum protection, use a center watermark at 80% opacity, which makes the image difficult to use without obvious removal effort.',
          },
        },
        {
          '@type': 'Question',
          name: 'What opacity should I use for a watermark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '50–70% opacity is the sweet spot for most photographers and content creators — clearly readable without significantly distracting from the image. Use 20–40% for subtle branding on portfolio work, and 80–100% for client proofs where you want maximum deterrence.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where should I place my watermark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bottom right is the most common position for photography watermarks — visible, minimal, and professional. Center placement offers the most protection (hard to crop out) and is best for client proof images. Avoid corners that are easily cropped off if theft prevention is your main goal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should my watermark text say?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your name, studio name, website URL, or copyright notice are the most effective options. Examples: "© Jane Smith Photography", "yourwebsite.com", or "@yourhandle". Keep it short — a watermark that is too long must be reduced to an unreadably small size. A website URL is especially useful as it drives traffic when the image is shared.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does watermarking work on iPhone photos (HEIC)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our watermark tool accepts HEIC files uploaded in Safari on iPhone and iPad. The HEIC is decoded in your browser and the watermark is applied before saving the output as JPEG. No conversion step is needed — just upload your HEIC photo directly.',
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
