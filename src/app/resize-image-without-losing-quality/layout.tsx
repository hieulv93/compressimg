import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-without-losing-quality')

export const metadata: Metadata = {
  title: 'Resize Image Without Losing Quality — Free Online',
  description:
    'Resize JPG, PNG, WebP and HEIC images without losing quality. Lock aspect ratio, choose the right output format, and downscale with maximum sharpness. Free, browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image Without Losing Quality — Free Online',
    description:
      'Resize images with maximum quality. Lock aspect ratio, choose PNG for lossless output. Free, no upload.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image Without Losing Quality',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image Without Losing Quality (Free)',
    description: 'Free online image resizer with quality preservation. No upload required.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image Without Losing Quality', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image Without Losing Quality — Free Online',
    description:
      'Resize JPG, PNG, WebP and HEIC images without losing quality. Lock aspect ratio, choose the right output format, and downscale with maximum sharpness. Free, browser-based.',
    faq: [
      {
        question: 'Can you resize an image without losing quality?',
        answer:
          'Downscaling (making smaller) preserves quality very well — the output is sharp because existing pixels are averaged. Upscaling (making larger) always introduces some blur because the tool must invent new pixels. For best quality when enlarging, use an AI upscaler.',
      },
      {
        question: 'What format preserves quality best when resizing?',
        answer:
          'PNG is lossless — resizing a PNG produces a PNG with zero quality degradation. JPEG applies lossy compression on export, so each save introduces minor quality loss. For the highest quality output, use PNG source files.',
      },
      {
        question: 'Does locking the aspect ratio help quality?',
        answer:
          'Locking the aspect ratio prevents distortion (stretching or squashing). It does not affect pixel quality directly, but distorted images appear lower quality to viewers. Always lock aspect ratio unless you specifically need a non-proportional resize.',
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
