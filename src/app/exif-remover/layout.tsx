import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/exif-remover')

export const metadata: Metadata = {
  title: 'EXIF Remover — Strip Photo Metadata Free Online',
  description:
    'Remove EXIF data from JPG, PNG, WebP photos instantly. Strips GPS location, camera info, and date. 100% browser-based — no upload, no sign-up. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'EXIF Remover — Strip Photo Metadata Free Online',
    description:
      'Remove GPS location, camera info, and all EXIF metadata from photos instantly. 100% browser-based — your photo never leaves your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EXIF Remover — Strip Photo Metadata',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EXIF Remover — Strip Photo Metadata Free',
    description: 'Remove GPS, camera info, and all EXIF data from photos instantly.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'EXIF Remover', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'EXIF Remover — Strip Photo Metadata Free Online',
    description:
      'Remove EXIF data from JPG, PNG, WebP photos instantly. Strips GPS location, camera info, and date. 100% browser-based — no upload, no sign-up. Free.',
    faq: [
      {
        question: 'What is EXIF data and why should I remove it?',
        answer:
          'EXIF (Exchangeable Image File Format) data is metadata embedded in your photo file by your camera or smartphone. It includes GPS coordinates (exact location where the photo was taken), camera make and model, date and time, lens settings, and sometimes even your device serial number. Removing EXIF before sharing photos publicly protects your location privacy and personal device information.',
      },
      {
        question: 'Does removing EXIF data affect image quality?',
        answer:
          'This tool outputs JPEG at quality 92, which is visually lossless. The pixel data of your photo is fully preserved — only the metadata attached to the file is removed. At quality 92, differences from the original are invisible to the human eye at normal viewing distances.',
      },
      {
        question: 'What metadata does this tool remove?',
        answer:
          'The Canvas API redraw removes all embedded metadata: EXIF (GPS coordinates, camera make/model, lens info, date/time, exposure settings, ISO, flash, orientation), IPTC (copyright, caption, creator info), and XMP (Adobe editing history, rating, keywords). The output JPEG contains no metadata — only pixel data.',
      },
      {
        question: 'Can someone see where my photo was taken from the file?',
        answer:
          'If you share an unprocessed photo from a smartphone with location services enabled, yes — the GPS coordinates are in the EXIF data and can be read by anyone with basic tools. After running your photo through this EXIF remover, the GPS coordinates are completely gone from the file. The photo can be shared safely without revealing your location.',
      },
      {
        question: 'Does Facebook, Instagram, or Twitter remove EXIF automatically?',
        answer:
          'Most major social platforms strip EXIF data from uploaded photos before storing them. However, some platforms or configurations may not, and email attachments and direct file sharing (WhatsApp, Telegram, iMessage) typically preserve EXIF. Remove EXIF before sharing to any platform where you are not 100% certain about their metadata handling.',
      },
      {
        question: 'Is my photo safe when using this tool?',
        answer:
          'Yes. All processing runs entirely in your browser using the Canvas API. Your photo never leaves your device — not even for the EXIF removal step. This is particularly important for sensitive photos: no server receives your image data.',
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
