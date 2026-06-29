import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-facebook')

export const metadata: Metadata = {
  title: 'Does Facebook Compress Images? Yes — Pre-Compress to Keep Quality | Free Tool',
  description:
    'Facebook compresses images when you post them, reducing quality. Pre-compress at quality 80 before uploading to keep photos sharp — free, browser-based, no upload required.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does Facebook Compress Images? Yes — Pre-Compress to Keep Quality | Free Tool',
    description:
      'Facebook reduces image quality when you post. Pre-compress at quality 80 before uploading to keep photos sharp for all viewers — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Facebook',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Facebook Compress Images? Yes — Pre-Compress to Keep Quality | Free Tool',
    description:
      'Compress photos before posting on Facebook to avoid quality loss. 100% browser-based, no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Facebook', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does Facebook Compress Images? Yes — Pre-Compress to Keep Quality | Free Tool',
    description:
      'Facebook compresses images when you post them, reducing quality. Pre-compress at quality 80 before uploading to keep photos sharp — free, browser-based, no upload required.',
    faq: [
      {
        question: 'Why do my Facebook photos look blurry after uploading?',
        answer:
          'Facebook automatically compresses all uploaded images to reduce bandwidth and storage costs. When you upload a high-resolution photo, Facebook applies lossy compression that introduces visible softness, color banding, and reduced sharpness. Pre-compressing at quality 80 gives Facebook a file already near its internal target size, resulting in minimal additional compression and a sharper final image on the timeline.',
      },
      {
        question: 'What is the best image size for Facebook posts?',
        answer:
          'For Facebook feed photos, upload at 1200×630px (landscape) or 1080×1080px (square). For Facebook cover photos, use 820×312px on desktop or 640×360px for mobile-optimized covers. Profile photos should be at least 170×170px. Uploading at these dimensions prevents Facebook from resizing your image, which preserves quality at the displayed resolution.',
      },
      {
        question: 'What file size should Facebook photos be?',
        answer:
          'Facebook recommends keeping image file sizes under 100KB for fastest loading. For best quality, compress photos to 200–500KB at quality 80 before uploading. Facebook accepts files up to 4MB for standard posts. Keeping your upload under 1MB gives Facebook less to compress, resulting in a sharper final image.',
      },
      {
        question: 'How do I upload high-quality photos to Facebook?',
        answer:
          "Enable the HD upload setting in Facebook's app settings (Settings → Media → Upload HD Photos). Even with HD enabled, Facebook still applies some compression — pre-compressing at quality 80 before uploading gives the best results. Also make sure your image is in sRGB color space, as Facebook converts non-sRGB images which can cause color shifts.",
      },
      {
        question: 'What image format is best for Facebook?',
        answer:
          'JPG is the best format for photos on Facebook. Facebook converts all images to its internal format anyway, so uploading JPG at quality 80 is more efficient than PNG for photographs. Use PNG only for graphics with text, logos, or images with transparency — PNG preserves hard edges that JPG compression would blur.',
      },
      {
        question: 'How can I keep Facebook photos sharp?',
        answer:
          "To keep Facebook photos sharp: (1) Enable HD Photos in Facebook app settings, (2) Upload at quality 80 using this tool before posting, (3) Use sRGB color profile — Facebook may shift colors on wide-gamut images, (4) Upload at Facebook's recommended dimensions to avoid resizing, (5) Avoid multiple save/upload cycles which stack compression losses.",
      },
      {
        question: 'Can I compress Facebook images on mobile?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
      },
      {
        question: 'Are my Facebook images safe to compress with this tool?',
        answer:
          'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This tool is suitable for compressing personal photos, brand assets, promotional images, and any content you have not yet posted publicly.',
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
