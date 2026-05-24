import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/jpg-vs-jpeg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: "JPG vs JPEG: What's the Difference? (2026 Guide)",
  description:
    'JPG and JPEG are identical formats — same compression, same quality, same files. Learn why two extensions exist, which to use, and what actually matters when saving images.',
  keywords: [
    'jpg vs jpeg',
    'jpg vs jpeg difference',
    'jpeg vs jpg which is better',
    'jpg and jpeg same',
    'jpg file extension',
    'jpeg file format',
    'difference between jpg and jpeg',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "JPG vs JPEG: What's the Difference?",
    description:
      'JPG and JPEG are the same format. Learn why two extensions exist and what actually matters.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'JPG vs JPEG' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JPG vs JPEG: What's the Difference?",
    description: "JPG and JPEG are the same format. Here's why two extensions exist.",
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: "JPG vs JPEG: What's the Difference? (2026 Guide)",
      description:
        'JPG and JPEG are identical formats. Learn why two extensions exist and what actually matters when saving images.',
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
        { '@type': 'ListItem', position: 3, name: 'JPG vs JPEG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is JPG the same as JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — JPG and JPEG are exactly the same image format. They use the same compression algorithm, produce identical file quality, and differ only in the file extension name. JPG became common because early Windows versions limited file extensions to 3 characters.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is better: JPG or JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Neither is better — they are the same format. A file saved as .jpg and the same file saved as .jpeg are byte-for-byte identical. The extension does not affect quality, file size, or compatibility.',
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
