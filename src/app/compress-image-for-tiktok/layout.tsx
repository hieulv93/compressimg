import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-tiktok')

export const metadata: Metadata = {
  title: 'Does TikTok Compress Images? Yes — Fix It Free',
  description:
    'TikTok compresses profile pictures and cover images on upload. Pre-compress at quality 80 to keep photos sharp — free, browser-based, no sign-up required.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does TikTok Compress Images? Yes — Fix It Free',
    description:
      'TikTok compresses profile pictures and cover images on upload. Pre-compress at quality 80 to keep photos sharp — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for TikTok',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does TikTok Compress Images? Yes — Fix Free Online',
    description:
      'Yes, TikTok compresses every photo on upload. Pre-compress to keep profile photos sharp. 100% browser-based, no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for TikTok', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does TikTok Compress Images? Yes — Fix It Free',
    description:
      'TikTok compresses profile pictures and cover images on upload. Pre-compress at quality 80 to keep photos sharp — free, browser-based, no sign-up required.',
    faq: [
      {
        question: 'Does TikTok compress images?',
        answer:
          'Yes, TikTok automatically compresses every photo you upload — profile pictures, video cover images, and in-video assets. TikTok applies aggressive lossy compression that can turn a sharp 12MP photo into a blurry, artifact-filled result. Pre-compressing at quality 80 before uploading gives TikTok a smaller, already-optimized file, so TikTok applies far less additional compression and the final result looks noticeably sharper.',
      },
      {
        question: 'Why do my TikTok photos look blurry after uploading?',
        answer:
          'TikTok applies automatic compression to every uploaded photo and cover image. When you upload a large, high-resolution image, TikTok aggressively reduces the file size using lossy compression — often introducing visible softness and artifacts. Pre-compressing your photo at quality 80 before uploading gives TikTok a smaller, already-optimized file that requires less re-compression, resulting in a noticeably sharper image on your profile.',
      },
      {
        question: 'What is the best image size for TikTok?',
        answer:
          'For TikTok profile photos, upload at 200×200px minimum — though 400×400px or higher is recommended for sharpness on retina displays. For TikTok video cover images, use 1080×1920px (9:16 vertical ratio). For in-video images displayed on screen, 1080×1920px also ensures full coverage without upscaling artifacts.',
      },
      {
        question: 'What file size should TikTok images be?',
        answer:
          'For TikTok profile photos, aim for 100–300KB at quality 80. For video cover images, 300–800KB is appropriate. Keeping files small reduces the amount of additional compression TikTok applies, resulting in sharper final images. Files over 2MB will be aggressively re-compressed by TikTok regardless of your original quality.',
      },
      {
        question: 'Does TikTok compress profile pictures?',
        answer:
          'Yes. TikTok compresses all uploaded profile photos during processing. The compression is most visible when uploading large RAW or high-resolution photos — TikTok scales these down and applies lossy JPG compression. By pre-compressing your photo at quality 80 before uploading, you retain control over the compression and avoid TikTok applying its own aggressive settings on an oversized file.',
      },
      {
        question: 'What image format does TikTok accept?',
        answer:
          'TikTok accepts JPG and PNG for profile photos and cover images. PNG is recommended for graphics with text, logos, or solid colors. JPG is better for photographs — it produces smaller files at equivalent visual quality. TikTok does not reliably accept WebP or HEIC files for profile uploads, so always convert to JPG or PNG first.',
      },
      {
        question: 'How do I upload a high quality photo to TikTok?',
        answer:
          'For the best quality TikTok profile photo: (1) Start with a high-resolution photo (at least 800×800px). (2) Crop it to a square (1:1 ratio) so TikTok does not crop it automatically. (3) Compress to quality 80 using this tool. (4) Upload on a strong WiFi connection. (5) Allow the upload to finish completely before closing the app. Uploading on a slow connection can cause TikTok to apply extra compression mid-transfer.',
      },
      {
        question: 'Can I compress TikTok images on my phone?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open compressimg.pro/compress-image-for-tiktok on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required — everything runs in your browser.',
      },
      {
        question: 'Are my photos safe when using this tool?',
        answer:
          'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing personal photos, brand assets, and unreleased content before posting to TikTok.',
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
