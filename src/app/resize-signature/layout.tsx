import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-signature')

export const metadata: Metadata = {
  title: 'Resize Signature Online Free — SSC, UPSC, IBPS, Railway',
  description:
    'Resize your signature image to exact pixel dimensions for SSC, UPSC, IBPS, Railway, and other government exam forms. Free, browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Signature Online Free — SSC, UPSC, IBPS, Railway',
    description:
      'Resize signature image to exact pixels for government exam forms. SSC (140×60px), UPSC (300×100px), IBPS (800×300px). Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Signature Online — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Signature Online Free — SSC, UPSC, IBPS',
    description: 'Resize signature to exact pixels for government exam forms — free, no upload.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Signature Online Free — SSC, UPSC, IBPS, Railway',
    description:
      'Resize your signature image to exact pixel dimensions for SSC, UPSC, IBPS, Railway, and other government exam forms. Free, browser-based, no upload.',
    faq: [
      {
        question: 'What size should my signature be for SSC CGL?',
        answer:
          'SSC CGL requires the signature image to be 140×60 pixels (some older portals accept 280×90px) in JPEG format with a file size under 20KB. Use this tool to resize your signature to 140×60px, then use the Resize Image in KB tool if the file exceeds 20KB.',
      },
      {
        question: 'What are the UPSC signature dimensions?',
        answer:
          'UPSC Civil Services requires the signature image to be 300×100 pixels in JPEG format, with a file size under 20KB. Some UPSC portals accept slightly different dimensions — always check the official notification for the exact requirement.',
      },
      {
        question: 'What signature size does IBPS require?',
        answer:
          'IBPS PO and Clerk forms require the signature to be 800×300 pixels in JPEG format with a file size between 10KB and 50KB. This is a wider dimension than most exam portals — ensure the aspect ratio is set correctly.',
      },
      {
        question: 'Is my signature file uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser using the Canvas API. Your signature image is never sent to any server.',
      },
      {
        question: 'My resized signature is over the KB limit — what should I do?',
        answer:
          'After resizing to the correct pixel dimensions here, use the Resize Image in KB tool to reduce the file size to the required limit (typically 10KB or 20KB). Enter the target size in KB, upload the resized signature, and download the compressed version.',
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
