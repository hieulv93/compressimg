import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-slack')

export const metadata: Metadata = {
  title: 'Does Slack Compress Images? Yes — Fix It Free',
  description:
    'Slack compresses image previews in channels and DMs. Upload pre-compressed photos at quality 80 to keep them sharp for your team — free, no install, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does Slack Compress Images? Yes — Fix It Free',
    description:
      'Slack compresses image previews in channels and DMs. Upload pre-compressed photos at quality 80 to keep them sharp for your team — free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Slack Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Slack Compress Images? Yes — Fix It Free',
    description:
      'Slack compresses image previews in channels and DMs. Upload pre-compressed photos at quality 80 to keep them sharp for your team — free, browser-based, no sign-up.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Slack', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does Slack Compress Images? Yes — Fix It Free',
    description:
      'Slack compresses image previews in channels and DMs. Upload pre-compressed photos at quality 80 to keep them sharp for your team — free, no install, no sign-up.',
    faq: [
      {
        question: 'Does Slack compress images?',
        answer:
          'Yes, Slack compresses images when displaying them inline in channels and DMs. Slack re-encodes uploads to generate smaller preview versions for faster loading. The original file is stored and downloadable at full quality, but the inline preview shown in chat is a compressed version. For photos that need to look sharp in the channel — not just on download — pre-compress to under 1MB before uploading.',
      },
      {
        question: 'What is the Slack file upload size limit?',
        answer:
          'Slack allows file uploads up to 1GB per file on paid plans and up to 5MB on the free plan. However, images larger than 2–3MB take noticeably longer to load in channels, especially for team members on slower connections. Compressing images to under 1MB before uploading ensures they display quickly and inline without clicking.',
      },
      {
        question: 'What quality setting should I use for Slack images?',
        answer:
          'Quality 80 is the recommended setting for Slack. It produces files of 200KB–1MB for most photos, which load instantly in Slack channels on any connection. The quality difference between 80 and 100 is imperceptible at typical message view sizes.',
      },
      {
        question: 'Why compress images before uploading to Slack?',
        answer:
          'Large images slow down Slack channels — team members must wait for images to load, which disrupts workflow. Oversized images also consume Slack file storage quota faster, especially on free plans. Compressing photos to under 1MB keeps channels responsive and extends your storage allowance.',
      },
      {
        question: 'Does Slack compress images automatically?',
        answer:
          'Yes, Slack compresses images when displaying them in the message thread, but stores the original file. The stored original still counts toward your file storage limit, and team members downloading the image get the full uncompressed version. Pre-compressing ensures everyone gets a fast, right-sized file.',
      },
      {
        question: 'What image size is ideal for Slack?',
        answer:
          'For screenshots and diagrams shared in channels, 500KB–1MB at 1920×1080px or lower is ideal. For product photos or detailed images where clarity matters, up to 2MB is acceptable. Compress at quality 80 for general Slack use — this produces 200KB–800KB for most photos.',
      },
      {
        question: 'Are my images safe when using this tool?',
        answer:
          'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your files never leave your device during processing, which matters when sharing confidential work screenshots or client assets.',
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
