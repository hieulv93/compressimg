import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/avif-vs-webp')

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
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AVIF vs WebP',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF vs WebP: Which Format Wins in 2026?',
    description: 'File size, quality, browser support, encoding speed — full comparison.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'AVIF vs WebP', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
    blog: {
      headline: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
      description:
        'AVIF vs WebP compared on file size, quality, browser support, and encoding speed.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'Is AVIF better than WebP?',
        answer:
          'AVIF produces 20–30% smaller files than WebP at equivalent visual quality, which makes it technically superior in compression. However, WebP has broader browser support (97% vs ~90%) and faster encoding. For most websites in 2026, WebP is the practical choice — use AVIF with a WebP fallback if file size is critical.',
      },
      {
        question: 'Does Safari support AVIF?',
        answer:
          'Safari 16+ (iOS 16 / macOS Ventura and later) added basic AVIF support. Older Safari versions do not support AVIF. This is why the <picture> element fallback to WebP is important — it ensures Safari users always see the image.',
      },
      {
        question: 'Is AVIF supported in Chrome?',
        answer:
          'Yes. Chrome has supported AVIF since version 85 (released August 2020). This covers the majority of desktop and Android browser usage.',
      },
      {
        question: 'How much smaller is AVIF compared to JPEG?',
        answer:
          'At equivalent visual quality, AVIF is typically 40–60% smaller than JPEG. The actual reduction varies by image type — photographs with smooth gradients show the largest improvement, while flat-color images show less difference.',
      },
      {
        question: 'Can I convert images to AVIF or WebP for free?',
        answer:
          'Yes. Use the free tools at compressimg.pro — JPG to WebP and PNG to WebP convert in your browser without any upload. For AVIF conversion, specialized tools or image CDNs handle this at the server level.',
      },
      {
        question: 'Does WebP or AVIF support transparency?',
        answer:
          'Both formats support alpha channel transparency. WebP can replace PNG for transparent images with much smaller file sizes. AVIF also supports transparency with even better compression.',
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
