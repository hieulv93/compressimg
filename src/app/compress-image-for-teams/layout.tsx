import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-teams')

export const metadata: Metadata = {
  title: 'Does Teams Compress Images? Yes — Fix It Free',
  description:
    'Microsoft Teams compresses images in chat and channels. Pre-compress your photos to quality 80 before sharing to keep them sharp for all teammates — free, no install.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does Teams Compress Images? Yes — Fix It Free',
    description:
      'Microsoft Teams compresses images in chat and channels. Pre-compress to quality 80 before sharing to keep them sharp for all teammates — free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Microsoft Teams Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Teams Compress Images? Yes — Fix It Free',
    description:
      'Microsoft Teams compresses images in chat and channels. Pre-compress to quality 80 before sharing to keep them sharp for all teammates — 100% browser-based, no install.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Teams', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does Teams Compress Images? Yes — Fix It Free',
    description:
      'Microsoft Teams compresses images in chat and channels. Pre-compress your photos to quality 80 before sharing to keep them sharp for all teammates — free, no install.',
    faq: [
      {
        question: 'Does Microsoft Teams compress images?',
        answer:
          'Yes. Teams automatically compresses images in two situations: (1) when you paste directly from clipboard — Teams re-encodes the bitmap at a low quality setting, which causes visible blur; (2) when displaying inline previews in channels — Teams generates a compressed thumbnail regardless of the original file size. The original file is stored in SharePoint and remains downloadable at full quality, but the version everyone sees in chat is compressed.',
      },
      {
        question: 'Does Teams reduce image quality?',
        answer:
          'Yes, noticeably for clipboard pastes. When you copy a screenshot and paste it into Teams with Ctrl+V, Teams applies aggressive lossy compression before sending — fine text becomes hard to read and flat-color areas show JPEG artifacts. For uploaded files, Teams generates a compressed inline preview but keeps the original in SharePoint. The practical impact is that pasted screenshots often look significantly worse than the source.',
      },
      {
        question: 'How can users avoid Teams image compression?',
        answer:
          'The most effective method is to pre-compress the image before sharing: compress at quality 80 using this tool, then upload via the attachment button (not paste). This gives Teams an already-optimized file that requires minimal further compression. For clipboard pastes specifically, save the screenshot as a file first and upload it — this bypasses the aggressive clipboard re-encoding Teams applies.',
      },
      {
        question: 'How can users send full-quality images in Teams?',
        answer:
          'To send images at the highest possible quality in Teams: (1) compress to quality 80 using this tool before uploading — this keeps files small enough to load fast while preserving visible sharpness; (2) use the attachment button to upload the file rather than pasting from clipboard; (3) for images that must be pixel-perfect, share a link to the file in SharePoint instead — recipients can download the uncompressed original directly.',
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
