import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-twitter')

export const metadata: Metadata = {
  title: 'Does Twitter/X Compress Images? Yes — Fix It Free',
  description:
    'Twitter/X compresses every image to 300–500KB on upload. Pre-compress at quality 80 before posting to keep photos sharp on the timeline — free, browser-based, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does Twitter/X Compress Images? Yes — Fix It Free',
    description:
      'Twitter/X compresses every image to 300–500KB on upload. Pre-compress at quality 80 to keep photos sharp on the timeline — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Twitter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Twitter Compress Images? Yes — Fix Free Online',
    description:
      'Yes, Twitter compresses every image to 300–500KB. Pre-compress before tweeting to keep photos sharp. 100% browser-based, no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Twitter', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does Twitter/X Compress Images? Yes — Fix It Free',
    description:
      'Twitter/X compresses every image to 300–500KB on upload. Pre-compress at quality 80 before posting to keep photos sharp on the timeline — free, browser-based, no sign-up.',
    faq: [
      {
        question: 'Does Twitter compress images?',
        answer:
          'Yes, Twitter (X) automatically compresses every image uploaded to the platform. Twitter converts uploaded images to WebP format and reduces file size to its 300–500KB delivery target — regardless of the original size or format. A crisp 8MP smartphone photo can emerge noticeably softer on the tweet timeline. Pre-compressing at quality 80 before uploading gives Twitter a file already near its target size, resulting in minimal additional compression and a sharper final image.',
      },
      {
        question: 'Why do my Twitter photos look blurry after uploading?',
        answer:
          'Twitter automatically compresses all uploaded images to control bandwidth. When you upload a large, high-resolution original, Twitter applies heavy lossy compression to reduce the file to its 300–500KB target — introducing visible softness, banding, and artifacts. Pre-compressing at quality 80 gives Twitter a file already near its target size, requiring minimal additional compression and preserving more of the original sharpness on the timeline.',
      },
      {
        question: 'What image size is best for Twitter posts?',
        answer:
          'For tweet images, upload at 1200×675px (16:9 ratio) for landscape photos, or 1200×1200px for square images. For your Twitter header/banner, use 1500×500px. Profile photos should be 400×400px square — Twitter applies a circular crop for display. Uploading at these exact dimensions prevents Twitter from resizing your image, which preserves quality.',
      },
      {
        question: 'What file size should Twitter images be?',
        answer:
          "Twitter enforces a 5MB limit for images attached to tweets. For best quality, compress photos to 300–700KB at quality 80 before uploading. This is close to Twitter's internal delivery target, meaning the platform applies minimal additional compression. Files under 1MB upload faster on mobile and give Twitter's compression algorithm a better starting point.",
      },
      {
        question: 'Does Twitter convert images to WebP?',
        answer:
          "Yes. Twitter converts all uploaded images to WebP format for delivery in modern browsers, and falls back to JPG for older browsers. This happens server-side regardless of what format you upload. Because Twitter re-encodes your image anyway, uploading a pre-compressed JPG or PNG at quality 80 gives the best results — Twitter's WebP conversion of an already-optimized file introduces less additional quality loss.",
      },
      {
        question: 'What is the best image format to upload to Twitter?',
        answer:
          "For photographs, upload JPG at quality 80. For screenshots, infographics, and graphics with text, upload PNG — Twitter's conversion of PNG input to WebP generally preserves sharper text than converting from JPG. Avoid uploading WebP directly to Twitter, as the double WebP encoding may introduce additional artifacts.",
      },
      {
        question: 'How many images can I attach to one tweet?',
        answer:
          "Twitter allows up to 4 images per tweet. When you attach multiple images, Twitter displays them in a 2×2 grid. Each image is compressed individually. For 4-image tweets, compress each photo to 200–500KB — this keeps total upload size manageable and gives Twitter's algorithm less to compress for each individual frame.",
      },
      {
        question: 'Can I compress Twitter images on my phone?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
      },
      {
        question: 'Are my Twitter images safe to compress with this tool?',
        answer:
          'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing unreleased brand assets, promotional graphics, personal photos, and any content you have not yet published publicly.',
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
