import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-discord/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Discord Compresses Inline Images & Clipboard Pastes — Free Pre-Compressor',
  description:
    'Yes, Discord compresses images for inline display and aggressively compresses clipboard pastes. Pre-compress photos before uploading to keep full quality — free, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Discord Compresses Inline Images & Clipboard Pastes — Free Pre-Compressor',
    description:
      'Yes, Discord compresses images for display and aggressively compresses clipboard pastes. Pre-compress before uploading to preserve full quality — free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for Discord' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Compresses Inline Images & Clipboard Pastes — Free Pre-Compressor',
    description:
      'Yes, Discord compresses images for display and clipboard pastes. Pre-compress to keep full quality — 100% browser-based, no uploads to server.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for Discord',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        "Free browser-based image compressor for Discord uploads. Reduce JPG, PNG, WebP file size to stay under Discord's 10MB free tier limit. No upload required.",
      featureList: [
        'Compress images to fit Discord upload limits',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Optimized for Discord server sharing',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image for Discord',
      description: "Reduce image file size to stay under Discord's upload limit.",
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area, drag and drop your image, or paste from clipboard with Ctrl+V. Supports JPG, PNG, and WebP files up to 20MB.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Adjust quality',
          text: 'Set quality to 80 for most photos. For screenshots, lower to 70–75 to get well under the 10MB Discord limit while keeping text readable.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and share on Discord',
          text: 'Download the compressed image and drag it into any Discord channel or DM. The file will upload instantly without hitting size limits.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Discord compress images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Discord compresses images for inline display in channels and DMs. Discord re-encodes uploaded images to generate smaller preview versions. However, the original full-quality file remains downloadable. Discord also applies heavier compression to images pasted from clipboard — saving and uploading as a file produces better results. Pre-compressing images before uploading ensures the inline display matches your intended quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Discord file upload size limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Discord free accounts can upload files up to 10MB. Discord Nitro Basic increases the limit to 50MB, and Discord Nitro increases it to 500MB. For most photos and screenshots, 10MB is sufficient — a typical smartphone JPEG at quality 80 is 300KB–2MB, well under the limit. High-resolution screenshots and RAW photo exports may need compression.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image formats does Discord support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Discord displays JPG, PNG, GIF, and WebP images inline in chat. Other formats (BMP, TIFF, HEIC) can be uploaded as file attachments but will not display as inline images — they appear as download links instead. For inline image sharing, use JPG for photos, PNG for screenshots, and GIF for animations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a screenshot for Discord?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Screenshots are typically PNG files, which can be large (2–10MB for high-resolution displays). To compress a screenshot for Discord: upload the PNG to this tool, set quality to 75–80, and download the compressed version. Alternatively, convert the PNG screenshot to JPG — JPG screenshots of interfaces are typically 80–90% smaller than PNG at equivalent visual quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a GIF smaller for Discord?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF files cannot be compressed the same way as JPG or PNG — GIF compression is lossless. To reduce a GIF for Discord: (1) Reduce the frame dimensions (e.g., from 1280px wide to 480px). (2) Reduce the number of colors in the palette. (3) Trim unnecessary frames. (4) Convert to WebP animated format, which is significantly smaller than GIF. For GIF-specific compression, use a dedicated GIF optimizer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does Discord compress my images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Discord re-encodes uploaded images to optimize storage and delivery. JPG images above a certain resolution are downscaled when displayed inline (though the original file remains downloadable). PNG images are served as-is. To control the quality of what Discord displays, pre-compress your image before uploading — Discord will then display your compressed version rather than applying its own re-encoding.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress Discord images on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works in mobile browsers on iOS and Android. Open the site in your phone browser, tap the upload area, select from your camera roll or files app, compress, and download. You can then share the compressed file directly in the Discord mobile app.',
          },
        },
      ],
    },
  ],
}

export default function CompressForDiscordLayout({ children }: { children: React.ReactNode }) {
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
