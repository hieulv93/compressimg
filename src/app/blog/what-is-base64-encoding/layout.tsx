import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/what-is-base64-encoding/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'What Is Base64 Encoding? A Plain-English Explanation',
  description:
    'Base64 encoding converts binary data — like images — into text strings. Learn how it works, when to use it, the 33% size overhead, and practical HTML/CSS examples.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Base64 Encoding? A Plain-English Explanation',
    description: 'How Base64 encoding works, when to use it for images, and the key trade-offs.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'What Is Base64 Encoding?' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Base64 Encoding? Plain-English Explanation',
    description: 'How Base64 works, when to use it for images, and the 33% size trade-off.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What Is Base64 Encoding? A Plain-English Explanation',
      description: 'How Base64 encoding works, when to use it for images, and the key trade-offs.',
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
        { '@type': 'ListItem', position: 3, name: 'What Is Base64 Encoding?', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does Base64 make image files 33% larger?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Base64 encodes every 3 bytes of binary data into 4 printable characters. Because 3 bytes become 4 characters, the output is always 33% larger than the input. This size overhead is the fundamental trade-off — you gain the ability to embed binary data in text formats, but at a cost to file size.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I use Base64 for images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Base64 makes sense for: small icons under 5–10 KB where eliminating one HTTP request matters, images embedded in HTML emails (external images are often blocked by email clients), JSON API responses that must include image data inline, and offline-first web apps that need images available without network access.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a Base64 image in an img tag?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A browser treats a Base64 data URL exactly like a regular image URL. Use it as the src attribute: <img src="data:image/jpeg;base64,/9j/4AAQ..." alt="Description" />. No separate HTTP request is needed, as the image data is embedded directly in the HTML.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Base64 compress images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Base64 is an encoding scheme, not a compression algorithm. It converts binary bytes into text characters, which actually increases data size by 33%. If you want to reduce image file size, compress the image first (using JPEG quality reduction or PNG optimization), then encode the compressed result to Base64 if needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are Base64 images cached by the browser?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Base64 images embedded in HTML or CSS cannot be cached independently by the browser — they are part of the document and cached only as long as that document is cached. External image URLs with their own cache headers can be cached indefinitely. This is a major reason to avoid Base64 for images larger than a few KB on public websites.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Base64 and a regular image URL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A regular image URL (e.g., /images/photo.jpg) requires the browser to make an HTTP request to fetch the image file — a separate network round-trip. A Base64 data URL embeds the full image data inside the HTML or CSS, so no network request is needed. The trade-off: Base64 images are 33% larger, cannot be cached separately, and increase the size of the embedding document.',
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
