import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-email')

export const metadata: Metadata = {
  title: 'Compress Image for Email — Reduce File Size',
  description:
    'Free online tool to compress images for email attachments. Reduce JPG, PNG file size to under 500KB instantly. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Email — Reduce Photo Size for Attachments',
    description:
      'Reduce JPG, PNG, and WebP images for email attachments. Compress photos to under 500KB for free — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Email Attachments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for Email — Free Attachment Size Reducer',
    description:
      'Reduce photo size for email attachments in seconds. 100% browser-based, no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Email', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Image for Email — Reduce File Size',
    description:
      'Free online tool to compress images for email attachments. Reduce JPG, PNG file size to under 500KB instantly. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'What is the maximum image size I can send by email?',
        answer:
          'Most email providers allow 20–25MB of total attachments per email. Gmail and Yahoo allow 25MB, Outlook and Apple Mail allow 20MB. Many corporate email servers cap incoming attachments at 10MB or less. Keep total attachments under 10MB — at 500KB per compressed photo, you can send 20 photos in a single email.',
      },
      {
        question: 'What image format is best for email attachments?',
        answer:
          'JPG is the best format for email photo attachments. It compresses photographs efficiently while keeping them visually sharp, and is supported by every email client. Avoid WebP for email — some email clients including older Outlook versions do not display WebP correctly.',
      },
      {
        question: 'What image size should I use for email newsletters?',
        answer:
          'For email newsletters, images should be no wider than 600px and under 100KB each. This ensures fast rendering on mobile email clients. Use quality 70–80 at 600px width. Total newsletter image weight should ideally be under 500KB.',
      },
      {
        question: 'Will compressing images for email reduce quality significantly?',
        answer:
          'At quality 75–85, compression is virtually invisible when images are viewed on screen. You can reduce a 5MB smartphone photo to 200–400KB with no perceptible quality loss. Only at quality settings below 50 do visible artifacts appear.',
      },
      {
        question: 'What quality setting should I use for email images?',
        answer:
          'Quality 80 is recommended for email photo attachments — it reduces file size by 60–70% with no visible quality loss at screen-view sizes. For newsletter inline images, quality 70–75 is sufficient. For images that will be printed after being received, use quality 85–90.',
      },
      {
        question: 'How do I compress multiple images for email at once?',
        answer:
          'This tool processes one image at a time. For each photo: upload, set quality to 80, download. For large batches, consider resizing all photos to 1280px wide first using the Resize tool, which dramatically reduces file size before quality compression is applied.',
      },
      {
        question: 'Can I send WebP images by email?',
        answer:
          'Technically yes, but it is not recommended. Older Outlook versions do not display WebP images — recipients may see a broken image placeholder. For maximum email client compatibility, use JPG for photo attachments.',
      },
      {
        question: 'Are my images uploaded to a server when compressing for email?',
        answer:
          'No. All compression happens entirely in your browser using JavaScript. Your images never leave your device and are never sent to any server. Suitable for compressing confidential business photos and personal images before sending by email.',
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
