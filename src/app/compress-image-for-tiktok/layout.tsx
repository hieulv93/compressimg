import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-tiktok/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for TikTok — Reduce Photo Size for Uploads',
  description:
    'Free online tool to compress images for TikTok. Reduce JPG, PNG size before uploading profile photos, cover images, and in-video assets. 100% browser-based, no upload.',
  keywords: [
    'compress image for tiktok',
    'compress photo for tiktok',
    'tiktok image compressor',
    'reduce image size tiktok',
    'tiktok profile picture size',
    'compress image before uploading tiktok',
    'tiktok photo size reducer',
    'tiktok image size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for TikTok — Reduce Photo Size for Uploads',
    description:
      'Reduce JPG and PNG file size before uploading to TikTok. Avoid double-compression on profile photos and cover images — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for TikTok' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for TikTok — Free Photo Size Reducer',
    description:
      'Compress photos before uploading to TikTok to avoid quality loss. 100% browser-based, no uploads.',
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
          name: 'Compress Image for TikTok',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for TikTok',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for TikTok uploads. Reduce JPG, PNG, WebP file size before uploading to minimize double-compression and keep photos sharp. No upload required.',
      featureList: [
        'Compress images before TikTok upload',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Avoid TikTok double-compression',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do my TikTok photos look blurry after uploading?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TikTok applies automatic compression to every uploaded photo and cover image. When you upload a large, high-resolution image, TikTok aggressively reduces the file size using lossy compression — often introducing visible softness and artifacts. Pre-compressing your photo at quality 80 before uploading gives TikTok a smaller, already-optimized file that requires less re-compression, resulting in a noticeably sharper image on your profile.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image size for TikTok?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For TikTok profile photos, upload at 200×200px minimum — though 400×400px or higher is recommended for sharpness on retina displays. For TikTok video cover images, use 1080×1920px (9:16 vertical ratio). For in-video images displayed on screen, 1080×1920px also ensures full coverage without upscaling artifacts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file size should TikTok images be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For TikTok profile photos, aim for 100–300KB at quality 80. For video cover images, 300–800KB is appropriate. Keeping files small reduces the amount of additional compression TikTok applies, resulting in sharper final images. Files over 2MB will be aggressively re-compressed by TikTok regardless of your original quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does TikTok compress profile pictures?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. TikTok compresses all uploaded profile photos during processing. The compression is most visible when uploading large RAW or high-resolution photos — TikTok scales these down and applies lossy JPG compression. By pre-compressing your photo at quality 80 before uploading, you retain control over the compression and avoid TikTok applying its own aggressive settings on an oversized file.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format does TikTok accept?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TikTok accepts JPG and PNG for profile photos and cover images. PNG is recommended for graphics with text, logos, or solid colors. JPG is better for photographs — it produces smaller files at equivalent visual quality. TikTok does not reliably accept WebP or HEIC files for profile uploads, so always convert to JPG or PNG first.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I upload a high quality photo to TikTok?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For the best quality TikTok profile photo: (1) Start with a high-resolution photo (at least 800×800px). (2) Crop it to a square (1:1 ratio) so TikTok does not crop it automatically. (3) Compress to quality 80 using this tool. (4) Upload on a strong WiFi connection. (5) Allow the upload to finish completely before closing the app. Uploading on a slow connection can cause TikTok to apply extra compression mid-transfer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress TikTok images on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open compressimg.pro/compress-image-for-tiktok on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required — everything runs in your browser.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my photos safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing personal photos, brand assets, and unreleased content before posting to TikTok.',
          },
        },
      ],
    },
  ],
}

export default function CompressForTikTokLayout({ children }: { children: React.ReactNode }) {
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
