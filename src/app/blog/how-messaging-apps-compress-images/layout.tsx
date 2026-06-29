import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/how-messaging-apps-compress-images')

export const metadata: Metadata = {
  title: 'How Messaging Apps Compress Your Images (And How to Stop Quality Loss)',
  description:
    'Slack, Teams, Discord, WhatsApp, iMessage, and Telegram all handle image compression differently. This guide compares all six and shows you how to send full-quality photos on any platform.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Messaging Apps Compress Your Images (And How to Stop Quality Loss)',
    description:
      'Slack, Teams, Discord, WhatsApp, iMessage, and Telegram compared — how each compresses photos and how to keep quality sharp.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How Messaging Apps Compress Images',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Messaging Apps Compress Your Images',
    description: 'Slack, Teams, Discord, WhatsApp, iMessage, Telegram — compression compared.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'How Messaging Apps Compress Images', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How Messaging Apps Compress Your Images (And How to Stop Quality Loss)',
    blog: {
      headline: 'How Messaging Apps Compress Your Images (And How to Stop Quality Loss)',
      description:
        'Slack, Teams, Discord, WhatsApp, iMessage, and Telegram compared — how each handles image compression.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'Which messaging app has the best image quality?',
        answer:
          'Telegram (Files tab) and Discord (uploaded files under 8 MB) offer the best quality — no compression applied to uploaded files. Slack desktop is also lossless for the original file. WhatsApp is the worst for quality — aggressive compression on standard sends reduces 12MP photos to 1–2MP equivalent.',
      },
      {
        question: 'Does Slack compress images on desktop?',
        answer:
          'No. The Slack desktop app does not compress images before uploading. The original file is stored at full quality. Inline previews shown in the channel are lower resolution, but the downloadable file is unchanged. Slack mobile does compress images before uploading.',
      },
      {
        question: 'How do I send full quality photos on WhatsApp?',
        answer:
          'Two options: (1) Use the HD send option available in WhatsApp 2023+, which significantly reduces compression. (2) Send as a Document — tap the paperclip icon → Document → select your image file. Documents are delivered without any compression. The trade-off is the recipient sees a file attachment, not an inline photo.',
      },
      {
        question: 'Why do pasted images look worse in Discord?',
        answer:
          'Discord compresses clipboard pastes (Ctrl+V images) more aggressively than uploaded files. The same image pasted from clipboard will look noticeably worse than the same file uploaded via the attachment button (+). Always upload via the attachment button for best quality.',
      },
      {
        question: 'Does pre-compressing to Q80 actually help?',
        answer:
          'Yes, especially on platforms with aggressive compression like WhatsApp. When you give the app a file that is already close to its target size (200–600 KB), the platform applies much less additional compression. The final quality is noticeably better than uploading a 5 MB original and letting the platform compress it down. Quality 80 is visually indistinguishable from quality 95 at normal viewing sizes.',
      },
      {
        question: 'Does iMessage compress photos?',
        answer:
          'iMessage compresses images when sending over a cellular data connection to reduce data usage. When both sender and recipient are on Wi-Fi, iMessage sends images at much higher quality. For important image sends, switch to Wi-Fi before sharing or pre-compress to 400–600 KB at quality 80.',
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
