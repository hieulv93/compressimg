import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-instagram`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for Instagram — Reduce Photo Size Before Uploading',
  description:
    'Free online tool to compress images for Instagram. Reduce JPG, PNG size before uploading to avoid double-compression and keep photos sharp. 100% browser-based, no upload.',
  keywords: [
    'compress image for instagram',
    'compress photo for instagram',
    'reduce image size instagram',
    'instagram image compressor',
    'compress image before uploading instagram',
    'instagram photo size reducer',
    'compress jpg for instagram',
    'best image size for instagram',
    'instagram photo quality',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Instagram — Reduce Photo Size Before Uploading',
    description:
      'Reduce JPG and PNG size before posting on Instagram. Prevent double-compression and keep photos sharp — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for Instagram' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for Instagram — Free Photo Size Reducer',
    description:
      'Compress photos before posting on Instagram to avoid quality loss. 100% browser-based, no uploads.',
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
          name: 'Compress Image for Instagram',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for Instagram',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for Instagram uploads. Reduce JPG, PNG, WebP file size before posting to minimize double-compression and keep photos sharp. No upload required.',
      featureList: [
        'Compress images before Instagram upload',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Avoid Instagram double-compression',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do my Instagram photos look blurry after uploading?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram applies automatic compression to every uploaded photo. When you upload a large, high-resolution image, Instagram aggressively reduces the file size using lossy compression — often introducing visible softness and artifacts. Pre-compressing your photo at quality 80 before uploading gives Instagram a smaller, already-optimized file that requires less re-compression, resulting in a noticeably sharper photo on your feed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image size for Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Instagram feed photos, upload at 1080px wide. Square photos should be 1080×1080px, portrait photos 1080×1350px (4:5 ratio), and landscape photos 1080×566px. For Stories and Reels, use 1080×1920px (9:16 ratio). Images wider than 1080px are downscaled by Instagram, and images that do not match supported aspect ratios are automatically cropped.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file size should Instagram photos be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aim for 300–800KB for square and portrait feed photos at quality 80. This is small enough that Instagram applies minimal additional compression, while remaining sharp enough to display well on high-resolution phone screens. For Stories and Reels, 500–1000KB is acceptable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Instagram support WebP images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram does not officially support WebP uploads. Uploading a WebP file may result in the app converting it to JPG internally, adding an extra generation of lossy compression. For best results on Instagram, always upload in JPG format for photos and PNG for graphics with text or solid colors.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I upload high quality photos to Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use these steps for best quality: (1) Edit your photo in Lightroom, VSCO, or your preferred app. (2) Export at quality 80, 1080px wide in JPG format. (3) Compress with this tool if the file is still over 1MB. (4) Upload using the Instagram mobile app rather than the web interface. (5) Allow the upload to complete fully on a strong WiFi or 4G connection before closing the app.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum file size Instagram accepts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram accepts photos up to 30MB in file size. However, Instagram applies compression regardless of file size — a 30MB uncompressed photo will be more aggressively compressed than a 500KB pre-optimized one. There is no benefit to uploading files larger than 1–2MB for feed photos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress Instagram photos on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my Instagram photos safe to compress with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing personal, private, and unreleased creative work before posting to Instagram.',
          },
        },
      ],
    },
  ],
}

export default function CompressForInstagramLayout({ children }: { children: React.ReactNode }) {
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
