import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-facebook/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for Facebook — Reduce Photo Size Before Posting',
  description:
    'Free online tool to compress images for Facebook. Reduce JPG, PNG file size before posting — keep quality, avoid double-compression. 100% browser-based, no upload.',
  keywords: [
    'compress image for facebook',
    'compress photo for facebook',
    'reduce image size facebook',
    'facebook image compressor',
    'compress image before posting facebook',
    'shrink photo facebook',
    'facebook photo size reducer',
    'compress jpg for facebook',
    'reduce photo size for facebook',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Facebook — Reduce Photo Size Before Posting',
    description:
      'Reduce JPG and PNG file size before posting on Facebook. Avoid double-compression and keep photos sharp — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for Facebook' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for Facebook — Free Photo Size Reducer',
    description:
      'Compress photos before posting on Facebook to avoid quality loss. 100% browser-based, no uploads.',
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
          name: 'Compress Image for Facebook',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for Facebook',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for Facebook. Reduce JPG, PNG, WebP file size before posting to minimize double-compression and keep photos sharp. No upload required.',
      featureList: [
        'Compress images before Facebook posting',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Avoid Facebook double-compression',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image for Facebook',
      description:
        'Reduce image file size before posting to Facebook to prevent double-compression and keep photos sharp.',
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
          name: 'Set quality to 80',
          text: 'Quality 80 reduces a typical photo from 5–10MB to 300–600KB without visible quality loss — optimal for Facebook feed and cover photos.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and post to Facebook',
          text: 'Download the compressed file, then upload it to Facebook. The pre-compressed image will retain more detail than one Facebook re-compressed from a large original.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do my Facebook photos look blurry after uploading?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Facebook automatically compresses all uploaded images to reduce bandwidth and storage costs. When you upload a high-resolution photo, Facebook applies lossy compression that introduces visible softness, color banding, and reduced sharpness. Pre-compressing at quality 80 gives Facebook a file already near its internal target size, resulting in minimal additional compression and a sharper final image on the timeline.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image size for Facebook posts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Facebook feed photos, upload at 1200×630px (landscape) or 1080×1080px (square). For Facebook cover photos, use 820×312px on desktop or 640×360px for mobile-optimized covers. Profile photos should be at least 170×170px. Uploading at these dimensions prevents Facebook from resizing your image, which preserves quality at the displayed resolution.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file size should Facebook photos be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Facebook recommends keeping image file sizes under 100KB for fastest loading. For best quality, compress photos to 200–500KB at quality 80 before uploading. Facebook accepts files up to 4MB for standard posts. Keeping your upload under 1MB gives Facebook less to compress, resulting in a sharper final image.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I upload high-quality photos to Facebook?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Enable the HD upload setting in Facebook's app settings (Settings → Media → Upload HD Photos). Even with HD enabled, Facebook still applies some compression — pre-compressing at quality 80 before uploading gives the best results. Also make sure your image is in sRGB color space, as Facebook converts non-sRGB images which can cause color shifts.",
          },
        },
        {
          '@type': 'Question',
          name: 'What image format is best for Facebook?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG is the best format for photos on Facebook. Facebook converts all images to its internal format anyway, so uploading JPG at quality 80 is more efficient than PNG for photographs. Use PNG only for graphics with text, logos, or images with transparency — PNG preserves hard edges that JPG compression would blur.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I keep Facebook photos sharp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "To keep Facebook photos sharp: (1) Enable HD Photos in Facebook app settings, (2) Upload at quality 80 using this tool before posting, (3) Use sRGB color profile — Facebook may shift colors on wide-gamut images, (4) Upload at Facebook's recommended dimensions to avoid resizing, (5) Avoid multiple save/upload cycles which stack compression losses.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress Facebook images on mobile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my Facebook images safe to compress with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This tool is suitable for compressing personal photos, brand assets, promotional images, and any content you have not yet posted publicly.',
          },
        },
      ],
    },
  ],
}

export default function CompressForFacebookLayout({ children }: { children: React.ReactNode }) {
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
