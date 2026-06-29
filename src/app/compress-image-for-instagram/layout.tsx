import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-instagram')

export const metadata: Metadata = {
  title: 'Does Instagram Compress Images? Yes — Fix Free Online',
  description:
    'Yes, Instagram compresses every photo you upload. Pre-compress at quality 80 before posting to reduce double-compression and keep photos sharp — free, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does Instagram Compress Images? Yes — Fix Free Online',
    description:
      'Yes, Instagram compresses every photo. Pre-compress at quality 80 before posting to reduce double-compression and keep photos sharp — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Instagram',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Instagram Compress Images? Yes — Fix Free Online',
    description:
      'Yes, Instagram compresses every upload. Pre-compress to keep photos sharp — 100% browser-based, no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Instagram', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does Instagram Compress Images? Yes — Fix Free Online',
    description:
      'Yes, Instagram compresses every photo you upload. Pre-compress at quality 80 before posting to reduce double-compression and keep photos sharp — free, 100% browser-based.',
    faq: [
      {
        question: 'Does Instagram compress images?',
        answer:
          "Yes, Instagram compresses every photo you upload. Instagram strips EXIF metadata, resizes images to its resolution limits (max 1080px wide for feed), and applies lossy compression. A 10MB uncompressed photo may be reduced to 150–300KB in Instagram's delivery format, resulting in visible softness. Pre-compressing at quality 80 before uploading gives Instagram less room to degrade the image further — resulting in a sharper photo on your feed.",
      },
      {
        question: 'Why do my Instagram photos look blurry after uploading?',
        answer:
          'Instagram applies automatic compression to every uploaded photo. When you upload a large, high-resolution image, Instagram aggressively reduces the file size using lossy compression — often introducing visible softness and artifacts. Pre-compressing your photo at quality 80 before uploading gives Instagram a smaller, already-optimized file that requires less re-compression, resulting in a noticeably sharper photo on your feed.',
      },
      {
        question: 'What is the best image size for Instagram?',
        answer:
          'For Instagram feed photos, upload at 1080px wide. Square photos should be 1080×1080px, portrait photos 1080×1350px (4:5 ratio), and landscape photos 1080×566px. For Stories and Reels, use 1080×1920px (9:16 ratio). Images wider than 1080px are downscaled by Instagram, and images that do not match supported aspect ratios are automatically cropped.',
      },
      {
        question: 'What file size should Instagram photos be?',
        answer:
          'Aim for 300–800KB for square and portrait feed photos at quality 80. This is small enough that Instagram applies minimal additional compression, while remaining sharp enough to display well on high-resolution phone screens. For Stories and Reels, 500–1000KB is acceptable.',
      },
      {
        question: 'Does Instagram support WebP images?',
        answer:
          'Instagram does not officially support WebP uploads. Uploading a WebP file may result in the app converting it to JPG internally, adding an extra generation of lossy compression. For best results on Instagram, always upload in JPG format for photos and PNG for graphics with text or solid colors.',
      },
      {
        question: 'How do I upload high quality photos to Instagram?',
        answer:
          'Use these steps for best quality: (1) Edit your photo in Lightroom, VSCO, or your preferred app. (2) Export at quality 80, 1080px wide in JPG format. (3) Compress with this tool if the file is still over 1MB. (4) Upload using the Instagram mobile app rather than the web interface. (5) Allow the upload to complete fully on a strong WiFi or 4G connection before closing the app.',
      },
      {
        question: 'What is the maximum file size Instagram accepts?',
        answer:
          'Instagram accepts photos up to 30MB in file size. However, Instagram applies compression regardless of file size — a 30MB uncompressed photo will be more aggressively compressed than a 500KB pre-optimized one. There is no benefit to uploading files larger than 1–2MB for feed photos.',
      },
      {
        question: 'Can I compress Instagram photos on my phone?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
      },
      {
        question: 'Are my Instagram photos safe to compress with this tool?',
        answer:
          'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing personal, private, and unreleased creative work before posting to Instagram.',
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
