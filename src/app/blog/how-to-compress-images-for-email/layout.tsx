import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/how-to-compress-images-for-email/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images for Email' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Email Attachments (2026)',
    description: 'Gmail limit 25MB, Outlook 20MB. Compress images for email free.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Compress Images for Email Attachments (2026)',
      description:
        'Email attachment limits, ideal image dimensions for email, best format (JPG vs PNG), and how to compress images in the browser free.',
      url: PAGE_URL,
      datePublished: '2026-06-08',
      dateModified: '2026-06-08',
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
          name: 'How to Compress Images for Email',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the maximum email attachment size for Gmail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gmail has a 25MB attachment limit per email. However, if an attachment exceeds 25MB, Gmail automatically converts it to a Google Drive link. For reliable delivery as a direct attachment, keep total attachments under 20MB to account for email encoding overhead (Base64 encoding adds approximately 33% to file size).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the recommended image size for email attachments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For email attachments, keep each image under 1MB if possible — ideally 200–500KB for photographs. This ensures fast delivery, quick downloads on mobile, and compatibility with all email clients. For multiple images, keep the total attachment size under 10MB to avoid delivery issues with stricter servers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format is best for email attachments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG at quality 80–85 is the best format for photographic email attachments — it provides the best file size reduction while maintaining good visual quality. PNG is better for screenshots, diagrams, and images with text where JPG compression artifacts would be visible. Avoid WebP for email — many email clients do not display it correctly.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reduce image file size for email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The fastest way: use CompressImg.pro — upload your image, adjust the quality slider to 80, and download the compressed version. This process takes under 10 seconds and is completely free. For batch compression, resize images to a maximum of 1920px wide before compressing — most email recipients do not need larger dimensions.',
          },
        },
        {
          '@type': 'Question",',
          name: 'What dimensions should images be for email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For email attachments viewed on desktop: 1200–1920px wide is sufficient. For images embedded in email newsletters: 600px wide is the standard (most email templates are 600px wide). For mobile-first emails: 800px wide at 2× for retina displays. Larger dimensions add file size without adding visible quality benefit at email display sizes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do email providers have attachment size limits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Email servers have size limits to prevent abuse, reduce storage costs, and ensure reliable message delivery. Large attachments slow down mail server processing, fill recipient mailboxes faster, and can trigger spam filters. Some corporate mail servers enforce stricter limits (10MB or less) than the public provider limits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress images for email on iPhone or Android?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — CompressImg.pro works in mobile browsers on both iPhone and Android. Open the site, upload your image from your camera roll or files app, compress it, and download the compressed version. The entire process happens in your browser with no app install required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my email attachment is too large?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Different email providers handle oversized attachments differently. Gmail automatically converts attachments over 25MB to a Google Drive link. Outlook blocks sending and shows an error. Yahoo Mail also blocks sending. Some corporate servers silently drop emails with oversized attachments — the sender gets no error notification and the recipient never receives the email. This is why compressing attachments before sending is important.',
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
