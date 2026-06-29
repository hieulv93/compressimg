import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-discord')

export const metadata: Metadata = {
  title: 'Does Discord Compress Images? Yes — Fix Blurry Pastes Free',
  description:
    'Yes, Discord compresses inline previews and aggressively compresses clipboard pastes. Pre-compress before uploading to keep full quality — free, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does Discord Compress Images? Yes — Fix Blurry Pastes Free',
    description:
      'Yes, Discord compresses images for display and aggressively compresses clipboard pastes. Pre-compress before uploading to preserve full quality — free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Discord',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Discord Compress Images? Yes — Fix Blurry Pastes Free',
    description:
      'Yes, Discord compresses images for display and clipboard pastes. Pre-compress to keep full quality — 100% browser-based, no uploads to server.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Discord', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does Discord Compress Images? Yes — Fix Blurry Pastes Free',
    description:
      'Yes, Discord compresses inline previews and aggressively compresses clipboard pastes. Pre-compress before uploading to keep full quality — free, 100% browser-based.',
    faq: [
      {
        question: 'Does Discord compress images?',
        answer:
          'Yes, Discord compresses images for inline display in channels and DMs. Discord re-encodes uploaded images to generate smaller preview versions. However, the original full-quality file remains downloadable. Discord also applies heavier compression to images pasted from clipboard — saving and uploading as a file produces better results. Pre-compressing images before uploading ensures the inline display matches your intended quality.',
      },
      {
        question: 'What is the Discord file upload size limit?',
        answer:
          'Discord free accounts can upload files up to 10MB. Discord Nitro Basic increases the limit to 50MB, and Discord Nitro increases it to 500MB. For most photos and screenshots, 10MB is sufficient — a typical smartphone JPEG at quality 80 is 300KB–2MB, well under the limit. High-resolution screenshots and RAW photo exports may need compression.',
      },
      {
        question: 'What image formats does Discord support?',
        answer:
          'Discord displays JPG, PNG, GIF, and WebP images inline in chat. Other formats (BMP, TIFF, HEIC) can be uploaded as file attachments but will not display as inline images — they appear as download links instead. For inline image sharing, use JPG for photos, PNG for screenshots, and GIF for animations.',
      },
      {
        question: 'How do I compress a screenshot for Discord?',
        answer:
          'Screenshots are typically PNG files, which can be large (2–10MB for high-resolution displays). To compress a screenshot for Discord: upload the PNG to this tool, set quality to 75–80, and download the compressed version. Alternatively, convert the PNG screenshot to JPG — JPG screenshots of interfaces are typically 80–90% smaller than PNG at equivalent visual quality.',
      },
      {
        question: 'How do I make a GIF smaller for Discord?',
        answer:
          'GIF files cannot be compressed the same way as JPG or PNG — GIF compression is lossless. To reduce a GIF for Discord: (1) Reduce the frame dimensions (e.g., from 1280px wide to 480px). (2) Reduce the number of colors in the palette. (3) Trim unnecessary frames. (4) Convert to WebP animated format, which is significantly smaller than GIF. For GIF-specific compression, use a dedicated GIF optimizer.',
      },
      {
        question: 'Why does Discord compress my images?',
        answer:
          'Discord re-encodes uploaded images to optimize storage and delivery. JPG images above a certain resolution are downscaled when displayed inline (though the original file remains downloadable). PNG images are served as-is. To control the quality of what Discord displays, pre-compress your image before uploading — Discord will then display your compressed version rather than applying its own re-encoding.',
      },
      {
        question: 'Can I compress Discord images on my phone?',
        answer:
          'Yes. This tool works in mobile browsers on iOS and Android. Open the site in your phone browser, tap the upload area, select from your camera roll or files app, compress, and download. You can then share the compressed file directly in the Discord mobile app.',
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
