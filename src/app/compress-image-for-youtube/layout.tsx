import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-youtube')

export const metadata: Metadata = {
  title: 'Does YouTube Compress Images? Yes — Fix Free Online',
  description:
    'Yes, YouTube compresses thumbnails and images on upload. Pre-compress before uploading to stay sharp and under the 2MB limit. Free, browser-based, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does YouTube Compress Images? Yes — Fix Free Online',
    description:
      'Yes, YouTube compresses thumbnails on upload. Pre-compress before uploading to stay sharp and under the 2MB limit. Free, browser-based, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for YouTube',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does YouTube Compress Images? Yes — Fix Free Online',
    description:
      'Yes, YouTube compresses thumbnails on upload. Pre-compress to stay sharp and under 2MB. Free, no sign-up.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for YouTube', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does YouTube Compress Images? Yes — Fix Free Online',
    description:
      'Yes, YouTube compresses thumbnails and images on upload. Pre-compress before uploading to stay sharp and under the 2MB limit. Free, browser-based, no sign-up.',
    faq: [
      {
        question: 'Does YouTube compress images?',
        answer:
          'Yes, YouTube compresses thumbnails and images when displaying them across its platform. YouTube re-encodes thumbnails for delivery at multiple resolutions — search results, suggested feeds, mobile apps, and TV. The original file is preserved in YouTube Studio, but the displayed version is compressed. Thumbnails must also be under 2MB to upload at all. Pre-compressing to quality 85 before uploading ensures your thumbnail displays as sharp as possible across all surfaces.',
      },
      {
        question: 'What is the maximum file size for a YouTube thumbnail?',
        answer:
          'YouTube allows thumbnails up to 2MB in file size. A 1280×720px JPG at quality 85 is typically 150–400KB — well within this limit. If your thumbnail exceeds 2MB, compress it to quality 80–85 to bring it under the limit without visible quality loss.',
      },
      {
        question: 'What is the best image size for a YouTube thumbnail?',
        answer:
          'The recommended YouTube thumbnail size is 1280×720px (16:9 ratio). This is the minimum resolution YouTube recommends for HD thumbnails. Thumbnails smaller than 1280×720px may appear blurry on large screens. Keep the file size under 2MB and use JPG format for photographs or PNG for graphics with text.',
      },
      {
        question: 'What image format should I use for YouTube thumbnails?',
        answer:
          'JPG is the best format for YouTube thumbnails with photos, faces, or gradients — it compresses efficiently and stays under the 2MB limit. Use PNG for thumbnails with text overlays, logos, or sharp color blocks where JPG compression artifacts would be visible. YouTube accepts JPG, PNG, GIF, BMP, and WebP.',
      },
      {
        question: 'Does compressing YouTube thumbnails affect click-through rate?',
        answer:
          'Compression at quality 80–85 is visually indistinguishable from the original at thumbnail display sizes (approx. 320×180px on desktop). Viewers cannot see compression artifacts at these sizes. A faster-loading, properly-sized thumbnail can actually improve perceived quality on slow connections compared to a large file that loads progressively.',
      },
      {
        question: 'What are the YouTube channel banner dimensions?',
        answer:
          'YouTube channel art (banner) should be 2560×1440px with a maximum file size of 6MB. The safe area visible on all devices is the center 1546×423px. Upload at 2560×1440px and keep all important text and logos within the center safe zone — the edges are cropped on mobile and TV displays.',
      },
      {
        question: 'How do I make my YouTube thumbnail sharper?',
        answer:
          'Start with a high-resolution source image (at least 1280×720px). Apply any sharpening in your design tool before compressing. Export at quality 85 in JPG — this retains fine detail while keeping the file small. Avoid re-saving the same JPG multiple times, as each save adds compression artifacts. For text-heavy thumbnails, use PNG to preserve sharp edges.',
      },
      {
        question: 'Can I use WebP for YouTube thumbnails?',
        answer:
          'Yes, YouTube accepts WebP thumbnails. However, JPG at quality 85 typically produces comparable file sizes to WebP for photographs, and JPG is more universally compatible if you share the thumbnail image elsewhere. Use WebP only if your design tool exports it natively and you do not need the file for other purposes.',
      },
      {
        question: 'Are my thumbnails safe when using this tool?',
        answer:
          'Yes. All compression happens entirely in your browser — no image is ever uploaded to a server. Your thumbnail files never leave your device, making it safe to compress unreleased video thumbnails and brand assets before uploading to YouTube Studio.',
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
