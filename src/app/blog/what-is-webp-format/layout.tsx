import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/what-is-webp-format')

export const metadata: Metadata = {
  title: 'What Is WebP? The Complete Guide to WebP Images',
  description:
    'WebP is a modern image format that produces 25–35% smaller files than JPEG. Learn what WebP is, how it works, browser support, and how to convert images to and from WebP.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is WebP? The Complete Guide to WebP Images',
    description:
      'WebP is a modern image format that produces 25–35% smaller files than JPEG. Learn what WebP is, browser support, and how to convert to and from WebP.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'What Is WebP Format?',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is WebP? Complete Guide to WebP Images',
    description: 'WebP format explained — smaller files, browser support, and free converters.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'What Is WebP Format?', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'What Is WebP? The Complete Guide to WebP Images',
    blog: {
      headline: 'What Is WebP? The Complete Guide to WebP Images',
      description:
        'WebP is a modern image format from Google — 25–35% smaller than JPEG at the same visual quality.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'Is WebP better than JPEG?',
        answer:
          'For web images, yes. WebP produces files 25–35% smaller than JPEG at equivalent visual quality. It also supports transparency and lossless compression, which JPEG does not. The only reason to choose JPEG over WebP is compatibility — some older desktop software and email clients do not support WebP.',
      },
      {
        question: 'Can you open WebP files on Windows or Mac?',
        answer:
          'Yes. Windows 10 and later can open WebP files natively in Photos. macOS supports WebP in Preview and Safari. For older systems, free software like IrfanView (Windows) or GIMP (cross-platform) opens WebP files. Adobe Photoshop supports WebP since 2021.',
      },
      {
        question: 'Does WebP support transparency?',
        answer:
          'Yes — WebP supports both lossy and lossless compression with full alpha channel (transparency) support. This makes WebP suitable as a replacement for both JPEG (lossy photos) and PNG (lossless graphics with transparency).',
      },
      {
        question: 'Is WebP good for SEO?',
        answer:
          "Yes. Google recommends serving images in modern formats like WebP as part of Core Web Vitals optimization. Smaller images load faster, improving Largest Contentful Paint (LCP) scores — a direct ranking factor in Google's algorithm. Switching from JPEG to WebP is one of the most impactful performance improvements for image-heavy websites.",
      },
      {
        question: "Why don't all websites use WebP?",
        answer:
          'Most modern websites do use WebP — especially those using content delivery networks (CDNs) that automatically convert images. Older sites that pre-date widespread browser support may still serve JPEG by default. CMS platforms like WordPress now support WebP natively.',
      },
      {
        question: 'What is the difference between WebP lossy and WebP lossless?',
        answer:
          'WebP lossy (like JPEG) discards image data to achieve smaller file sizes — typically 25–35% smaller than JPEG at the same visual quality. WebP lossless (like PNG) preserves every pixel exactly — typically 20–30% smaller than PNG. Use lossy for photographs; use lossless for graphics, icons, and screenshots where pixel-perfect accuracy matters.',
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
