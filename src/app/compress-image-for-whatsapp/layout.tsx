import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-whatsapp')

export const metadata: Metadata = {
  title: 'WhatsApp Cuts Photo Quality 80% — Pre-Compress at Q80 to Keep Detail (Free)',
  description:
    'Yes, WhatsApp compresses every photo you send — often reducing a 12MP photo to 1–2MP quality. Pre-compress at quality 80 before sending to reduce blur — free, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WhatsApp Cuts Photo Quality 80% — Pre-Compress at Q80 to Keep Detail (Free)',
    description:
      'Yes, WhatsApp compresses every photo sent — often to 1–2MP quality. Pre-compress at quality 80 to reduce blur — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for WhatsApp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Cuts Photo Quality 80% — Pre-Compress at Q80 to Keep Detail (Free)',
    description:
      'Yes, WhatsApp compresses photos to ~1–2MP. Pre-compress to keep quality — 100% browser-based, no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for WhatsApp', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'WhatsApp Cuts Photo Quality 80% — Pre-Compress at Q80 to Keep Detail (Free)',
    description:
      'Yes, WhatsApp compresses every photo you send — often reducing a 12MP photo to 1–2MP quality. Pre-compress at quality 80 before sending to reduce blur — free, 100% browser-based.',
    faq: [
      {
        question: 'Does WhatsApp compress images?',
        answer:
          'Yes, WhatsApp automatically compresses every photo you send via the photo gallery. A 12MP smartphone photo (5–10MB) is typically reduced to the equivalent of 1–2MP quality (100–300KB). This aggressive compression is why photos shared on WhatsApp often look blurry compared to the original. To avoid this: either send the image as a Document (no compression) or pre-compress at quality 80 before sending as a photo to reduce double-compression blur.',
      },
      {
        question: 'What happens when WhatsApp compresses my photo?',
        answer:
          'WhatsApp automatically compresses photos sent via the photo gallery to reduce data usage. A 12MP smartphone photo (5–10MB) is reduced to roughly 1–2MP (100–300KB). This aggressive compression introduces visible blur and reduces sharpness. By pre-compressing at quality 80 before sending, you give WhatsApp a smaller, already-optimized file — resulting in significantly less double-compression on the final image.',
      },
      {
        question: 'How do I send photos on WhatsApp without losing quality?',
        answer:
          'Send your photo as a Document instead of through the photo gallery. On WhatsApp mobile: tap the paperclip / attachment icon → Document → select your image file. WhatsApp does not compress documents, so the recipient receives the exact file you send. For large originals, pre-compress to 500KB–1MB first for faster transfer.',
      },
      {
        question: 'What is the maximum photo size WhatsApp accepts?',
        answer:
          'When sending as a photo, WhatsApp accepts files up to approximately 16MB but applies heavy automatic compression regardless of file size. When sending as a document, the limit is 2GB with no compression. For WhatsApp Status (Stories), the image limit is around 16MB.',
      },
      {
        question: 'What image size is best for WhatsApp sharing?',
        answer:
          'For sending as a photo: compress to 300–600KB at quality 80, 1280px wide. This gives WhatsApp less to compress, resulting in a sharper final image. For sending as a document (no WhatsApp compression): 500KB–1MB at quality 85 is a good balance between file transfer speed and visible quality.',
      },
      {
        question: 'Does WhatsApp support WebP images?',
        answer:
          'Yes, WhatsApp supports WebP natively. However, when recipients save a WebP image to their camera roll, older iOS and Android versions may not handle WebP correctly. For maximum compatibility — especially if recipients need to save or print photos — use JPG format instead of WebP.',
      },
      {
        question: 'What is the ideal WhatsApp profile photo size?',
        answer:
          'WhatsApp profile photos are displayed as a square, cropped from the center of your image. Upload a square JPG at 640×640px compressed to under 200KB at quality 80. Make sure the main subject (your face or logo) is centered. WhatsApp applies a circular crop when displaying, so avoid placing important content near the edges.',
      },
      {
        question: 'Can I compress PNG images for WhatsApp?',
        answer:
          'Yes — this tool compresses PNG images. However, PNG is a lossless format and compresses less efficiently than JPG for photographs. If your PNG is a photo, consider converting it to JPG before compressing for WhatsApp — you can save 60–80% more file size. Use the PNG to JPG converter, then compress the resulting JPG.',
      },
      {
        question: 'Are my WhatsApp images safe to compress with this tool?',
        answer:
          'Yes. All compression happens entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This tool is suitable for compressing personal, private, and confidential images before sharing on WhatsApp.',
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
