import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-whatsapp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for WhatsApp — Reduce Photo Size for Sharing',
  description:
    'Free online tool to compress images for WhatsApp. Reduce JPG, PNG file size before sending — keep quality, avoid double-compression. 100% browser-based, no upload.',
  keywords: [
    'compress image for whatsapp',
    'compress photo for whatsapp',
    'reduce image size whatsapp',
    'whatsapp image compressor',
    'compress image before sending whatsapp',
    'shrink photo whatsapp',
    'whatsapp photo size reducer',
    'compress jpg for whatsapp',
    'reduce photo size for whatsapp sharing',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for WhatsApp — Reduce Photo Size for Sharing',
    description:
      'Reduce JPG and PNG file size before sending on WhatsApp. Avoid double-compression and keep photos sharp — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for WhatsApp' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for WhatsApp — Free Photo Size Reducer',
    description:
      'Compress photos before sending on WhatsApp to avoid quality loss. 100% browser-based, no uploads.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Compress Image for WhatsApp',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for WhatsApp',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for WhatsApp sharing. Reduce JPG, PNG, WebP file size before sending to minimize double-compression and keep photos sharp. No upload required.',
      featureList: [
        'Compress images before WhatsApp sharing',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Avoid WhatsApp double-compression',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image for WhatsApp',
      description:
        'Reduce image file size before sharing on WhatsApp to avoid quality loss and speed up sending.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your photo',
          text: 'Click the upload area, drag and drop your image, or paste from clipboard with Ctrl+V. Supports JPG, PNG, and WebP files up to 20MB.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 70–80',
          text: 'Quality 70–80 reduces a typical photo from 5–10MB to under 300KB — fast to send over mobile data while remaining sharp on phone screens.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and share on WhatsApp',
          text: 'Download the compressed file, then send it on WhatsApp as a document (not a photo) to prevent WhatsApp from applying its own compression on top.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens when WhatsApp compresses my photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WhatsApp automatically compresses photos sent via the photo gallery to reduce data usage. A 12MP smartphone photo (5–10MB) is reduced to roughly 1–2MP (100–300KB). This aggressive compression introduces visible blur and reduces sharpness. By pre-compressing at quality 80 before sending, you give WhatsApp a smaller, already-optimized file — resulting in significantly less double-compression on the final image.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I send photos on WhatsApp without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Send your photo as a Document instead of through the photo gallery. On WhatsApp mobile: tap the paperclip / attachment icon → Document → select your image file. WhatsApp does not compress documents, so the recipient receives the exact file you send. For large originals, pre-compress to 500KB–1MB first for faster transfer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum photo size WhatsApp accepts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When sending as a photo, WhatsApp accepts files up to approximately 16MB but applies heavy automatic compression regardless of file size. When sending as a document, the limit is 2GB with no compression. For WhatsApp Status (Stories), the image limit is around 16MB.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image size is best for WhatsApp sharing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For sending as a photo: compress to 300–600KB at quality 80, 1280px wide. This gives WhatsApp less to compress, resulting in a sharper final image. For sending as a document (no WhatsApp compression): 500KB–1MB at quality 85 is a good balance between file transfer speed and visible quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WhatsApp support WebP images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, WhatsApp supports WebP natively. However, when recipients save a WebP image to their camera roll, older iOS and Android versions may not handle WebP correctly. For maximum compatibility — especially if recipients need to save or print photos — use JPG format instead of WebP.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the ideal WhatsApp profile photo size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WhatsApp profile photos are displayed as a square, cropped from the center of your image. Upload a square JPG at 640×640px compressed to under 200KB at quality 80. Make sure the main subject (your face or logo) is centered. WhatsApp applies a circular crop when displaying, so avoid placing important content near the edges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress PNG images for WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — this tool compresses PNG images. However, PNG is a lossless format and compresses less efficiently than JPG for photographs. If your PNG is a photo, consider converting it to JPG before compressing for WhatsApp — you can save 60–80% more file size. Use the PNG to JPG converter, then compress the resulting JPG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my WhatsApp images safe to compress with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression happens entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This tool is suitable for compressing personal, private, and confidential images before sharing on WhatsApp.',
          },
        },
      ],
    },
  ],
}

export default function CompressForWhatsAppLayout({ children }: { children: React.ReactNode }) {
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
