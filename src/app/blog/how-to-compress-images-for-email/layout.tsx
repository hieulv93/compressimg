import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/how-to-compress-images-for-email')

export const metadata: Metadata = {
  title: 'How to Compress Images for Email Attachments (2026)',
  description:
    'Gmail limit is 25MB, Outlook is 20MB. Reduce image file size for email without losing quality — ideal dimensions, best format, and free browser tool.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images for Email Attachments (2026)',
    description:
      'Gmail limit is 25MB. Learn the right image size, format, and how to compress in seconds free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Images for Email',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Email Attachments (2026)',
    description: 'Gmail limit 25MB, Outlook 20MB. Compress images for email free.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'How to Compress Images for Email', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Compress Images for Email Attachments (2026)',
    blog: {
      headline: 'How to Compress Images for Email Attachments (2026)',
      description:
        'Email attachment limits, ideal image dimensions for email, best format (JPG vs PNG), and how to compress images in the browser free.',
      datePublished: '2026-06-08',
      dateModified: '2026-06-08',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'What is the maximum email attachment size for Gmail?',
        answer:
          'Gmail has a 25MB attachment limit per email. However, if an attachment exceeds 25MB, Gmail automatically converts it to a Google Drive link. For reliable delivery as a direct attachment, keep total attachments under 20MB to account for email encoding overhead (Base64 encoding adds approximately 33% to file size).',
      },
      {
        question: 'What is the recommended image size for email attachments?',
        answer:
          'For email attachments, keep each image under 1MB if possible — ideally 200–500KB for photographs. This ensures fast delivery, quick downloads on mobile, and compatibility with all email clients. For multiple images, keep the total attachment size under 10MB to avoid delivery issues with stricter servers.',
      },
      {
        question: 'What image format is best for email attachments?',
        answer:
          'JPG at quality 80–85 is the best format for photographic email attachments — it provides the best file size reduction while maintaining good visual quality. PNG is better for screenshots, diagrams, and images with text where JPG compression artifacts would be visible. Avoid WebP for email — many email clients do not display it correctly.',
      },
      {
        question: 'How do I reduce image file size for email?',
        answer:
          'The fastest way: use CompressImg.pro — upload your image, adjust the quality slider to 80, and download the compressed version. This process takes under 10 seconds and is completely free. For batch compression, resize images to a maximum of 1920px wide before compressing — most email recipients do not need larger dimensions.',
      },
      {
        question: 'Why do email providers have attachment size limits?',
        answer:
          'Email servers have size limits to prevent abuse, reduce storage costs, and ensure reliable message delivery. Large attachments slow down mail server processing, fill recipient mailboxes faster, and can trigger spam filters. Some corporate mail servers enforce stricter limits (10MB or less) than the public provider limits.',
      },
      {
        question: 'Can I compress images for email on iPhone or Android?',
        answer:
          'Yes — CompressImg.pro works in mobile browsers on both iPhone and Android. Open the site, upload your image from your camera roll or files app, compress it, and download the compressed version. The entire process happens in your browser with no app install required.',
      },
      {
        question: 'What happens if my email attachment is too large?',
        answer:
          'Different email providers handle oversized attachments differently. Gmail automatically converts attachments over 25MB to a Google Drive link. Outlook blocks sending and shows an error. Yahoo Mail also blocks sending. Some corporate servers silently drop emails with oversized attachments — the sender gets no error notification and the recipient never receives the email. This is why compressing attachments before sending is important.',
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
