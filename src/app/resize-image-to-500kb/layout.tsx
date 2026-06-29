import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-500kb')

export const metadata: Metadata = {
  title: 'Resize Image to 500KB Online Free — Web, Blog, Email',
  description:
    'Resize any image to under 500KB free. Ideal for blog images, email attachments, and web uploads where quality matters. JPEG output, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 500KB Online Free — Web, Blog, Email',
    description: 'Resize to under 500KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 500KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 500KB Online Free',
    description: 'Resize to under 500KB automatically. Free, browser-based, no upload.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image in KB', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image to 500KB Online Free — Web, Blog, Email',
    description:
      'Resize any image to under 500KB free. Ideal for blog images, email attachments, and web uploads where quality matters. JPEG output, 100% browser-based.',
    faq: [
      {
        question: 'How do I resize a blog image to under 500KB?',
        answer:
          'Upload your image — the target is pre-set to 500KB. A 1280×720px JPEG at quality 80 typically produces 150–350KB — high enough quality for retina screens and well within 500KB. The tool handles the full resize automatically.',
      },
      {
        question: 'What is the recommended image size for Shopify products?',
        answer:
          'Shopify recommends product images at 2048×2048px. At that size, under 500KB is achievable with JPEG at quality 75. For smaller product thumbnails (800×800px), images are typically 80–200KB at quality 80.',
      },
      {
        question: 'What is the image size limit for email newsletters?',
        answer:
          'Mailchimp, Constant Contact, and most email platforms recommend keeping images under 1MB. Under 500KB per image keeps emails loading fast across all email clients, especially on mobile.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All processing happens 100% in your browser. Your files never leave your device.',
      },
      {
        question: 'Can I resize a HEIC photo from iPhone to 500KB?',
        answer:
          'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 500KB.',
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
