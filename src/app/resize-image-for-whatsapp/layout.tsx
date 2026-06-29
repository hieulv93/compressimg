import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-whatsapp')

export const metadata: Metadata = {
  title: 'Resize Image for WhatsApp — Free, Exact Dimensions',
  description:
    'Resize any image to exact WhatsApp dimensions free. Status (1080×1920), profile picture (500×500), link preview (1200×630). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for WhatsApp — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to WhatsApp status, profile picture, or link preview dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for WhatsApp — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for WhatsApp — Free, Exact Dimensions',
    description:
      'Perfect WhatsApp status, profile picture, and link preview sizes in seconds. No upload, no account.',
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
    name: 'Resize Image for WhatsApp — Free, Exact Dimensions',
    description:
      'Resize any image to exact WhatsApp dimensions free. Status (1080×1920), profile picture (500×500), link preview (1200×630). HEIC from iPhone supported. No upload — browser-based.',
    faq: [
      {
        question: 'What is the best size for a WhatsApp status?',
        answer:
          'WhatsApp Status images display at 1080×1920px (9:16 ratio, full vertical screen). Uploading at this size ensures the image fills the screen without cropping or black bars.',
      },
      {
        question: 'What is the WhatsApp profile picture size?',
        answer:
          'WhatsApp profile pictures display as a circle at roughly 200×200px. Upload at 500×500px for a sharp result — WhatsApp compresses larger images but 500×500 gives good quality.',
      },
      {
        question: 'Does WhatsApp compress images?',
        answer:
          'Yes. WhatsApp compresses images sent in chat to reduce bandwidth. To send without compression, share as a Document instead of a Photo — this preserves original quality.',
      },
      {
        question: 'Can I resize a HEIC photo for WhatsApp?',
        answer:
          'WhatsApp on some platforms does not accept HEIC files. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen WhatsApp dimensions in one step.',
      },
      {
        question: 'Is this WhatsApp image resizer free?',
        answer:
          'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
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
