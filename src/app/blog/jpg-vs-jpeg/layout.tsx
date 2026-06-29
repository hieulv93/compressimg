import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/jpg-vs-jpeg')

export const metadata: Metadata = {
  title: "JPG vs JPEG: What's the Difference? (2026 Guide)",
  description:
    'JPG and JPEG are identical formats — same compression, same quality, same files. Learn why two extensions exist, which to use, and what actually matters when saving images.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "JPG vs JPEG: What's the Difference?",
    description:
      'JPG and JPEG are the same format. Learn why two extensions exist and what actually matters.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: 'https://compressimg.pro/og-image.png', width: 1200, height: 630, alt: 'JPG vs JPEG' },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JPG vs JPEG: What's the Difference?",
    description: "JPG and JPEG are the same format. Here's why two extensions exist.",
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'JPG vs JPEG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: "JPG vs JPEG: What's the Difference? (2026 Guide)",
    blog: {
      headline: "JPG vs JPEG: What's the Difference? (2026 Guide)",
      description:
        'JPG and JPEG are identical formats. Learn why two extensions exist and what actually matters when saving images.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'Is JPG the same as JPEG?',
        answer:
          'Yes — JPG and JPEG are exactly the same image format. They use the same compression algorithm, produce identical file quality, and differ only in the file extension name. JPG became common because early Windows versions limited file extensions to 3 characters.',
      },
      {
        question: 'Which is better: JPG or JPEG?',
        answer:
          'Neither is better — they are the same format. A file saved as .jpg and the same file saved as .jpeg are byte-for-byte identical. The extension does not affect quality, file size, or compatibility.',
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
