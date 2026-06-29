import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-linkedin')

export const metadata: Metadata = {
  title: 'Does LinkedIn Compress Images? Yes — Free Fix Online',
  description:
    'Yes, LinkedIn re-compresses uploads and reduces quality. Pre-compress images before uploading to keep them sharp. Free, browser-based, no sign-up needed.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does LinkedIn Compress Images? Yes — Free Fix Online',
    description:
      'Yes, LinkedIn re-compresses uploads and reduces quality. Pre-compress images before uploading to keep them sharp. Free, browser-based, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for LinkedIn',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does LinkedIn Compress Images? Yes — Fix Free Online',
    description:
      'Yes, LinkedIn re-compresses uploads. Pre-compress before uploading to keep images sharp. Free, browser-based, no sign-up.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for LinkedIn', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does LinkedIn Compress Images? Yes — Free Fix Online',
    description:
      'Yes, LinkedIn re-compresses uploads and reduces quality. Pre-compress images before uploading to keep them sharp. Free, browser-based, no sign-up needed.',
    faq: [
      {
        question: 'Does LinkedIn compress images?',
        answer:
          'Yes, LinkedIn automatically compresses every image you upload — profile photos, cover images, post attachments, and article headers. LinkedIn applies lossy compression that can visibly reduce sharpness, especially on high-resolution originals. Pre-compressing at quality 80 before uploading gives LinkedIn a file already close to its delivery target, resulting in less double-compression and noticeably sharper images.',
      },
      {
        question: 'Why does my LinkedIn profile photo look blurry?',
        answer:
          'LinkedIn compresses profile photos during upload and again for delivery across different devices and connection speeds. A high-resolution headshot (3–5MB) is reduced to the display size of 200×200px with additional lossy compression applied. Pre-compressing your photo to 400×400px at quality 80 — under 200KB — gives LinkedIn a file already at its display dimensions, requiring no downscaling. The result is a noticeably sharper profile photo.',
      },
      {
        question: 'What is the best image size for a LinkedIn profile photo?',
        answer:
          'Upload a square JPG at 400×400px compressed to under 200KB. LinkedIn displays profile photos at 200×200px but stores them at a larger size for retina displays. 400×400px provides the right balance: sharp at all display sizes, small enough that LinkedIn applies minimal re-compression. Make sure your face is centered — LinkedIn applies a circular crop that cuts the corners.',
      },
      {
        question: 'What is the recommended size for a LinkedIn background photo?',
        answer:
          'LinkedIn background photos (cover images) display at 1584×396px on desktop. Upload at exactly 1584×396px compressed to 300–600KB at quality 80. If you upload a larger image, LinkedIn crops and scales it down, which can shift the visible area of your design. Create your background image at the exact dimensions before uploading to ensure your layout appears as intended.',
      },
      {
        question: 'What file size should LinkedIn images be?',
        answer:
          "For profile photos: under 200KB at 400×400px. For background/cover: 300–600KB. For post images: 300–700KB at 1200×627px or 1080×1080px. LinkedIn accepts files up to 8MB, but uploading at these target sizes gives LinkedIn less to compress, resulting in sharper images across all devices. LinkedIn's compression is more noticeable on mobile, so pre-optimizing matters for mobile viewers.",
      },
      {
        question: 'Does LinkedIn compress images in posts?',
        answer:
          'Yes. LinkedIn compresses all images uploaded to posts, articles, and company pages. Post images are typically delivered at 500KB–2MB depending on dimensions — less aggressive than Facebook or Instagram, but still noticeable on high-resolution originals. Pre-compressing post images to 300–700KB at quality 80 before uploading ensures minimal additional quality loss.',
      },
      {
        question: 'What image format is best for LinkedIn?',
        answer:
          'JPG at quality 80 is best for professional headshots, event photos, and team photos. LinkedIn converts all images to JPG internally, so uploading JPG avoids an extra encode step. Use PNG for company logos, infographics, slide screenshots, and any image with text overlay — PNG preserves sharp edges and text that JPG compression would soften.',
      },
      {
        question: 'Can I compress LinkedIn images on my phone?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
      },
      {
        question: 'Are my LinkedIn images safe to compress with this tool?',
        answer:
          'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your professional headshots, company branding assets, and confidential presentation graphics never leave your device. This makes the tool suitable for business-sensitive content that you have not yet published publicly.',
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
