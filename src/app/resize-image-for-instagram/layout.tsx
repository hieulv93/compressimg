import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-for-instagram')

export const metadata: Metadata = {
  title: 'Resize Image for Instagram — Free, Exact Dimensions',
  description:
    'Resize any image to exact Instagram dimensions free. Square (1080×1080), Portrait (1080×1350), Story (1080×1920). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Instagram — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any photo to exact Instagram dimensions — square, portrait, story, or reel. HEIC from iPhone supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image for Instagram — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Instagram — Free, Exact Dimensions',
    description:
      'Square, portrait, story, reel — resize any photo to the right Instagram size instantly.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image for Instagram — Free, Exact Dimensions',
    description:
      'Resize any image to exact Instagram dimensions free. Square (1080×1080), Portrait (1080×1350), Story (1080×1920). HEIC from iPhone supported. No upload — browser-based.',
    faq: [
      {
        question: 'What is the best image size for an Instagram post?',
        answer:
          'For maximum feed visibility, use Portrait (1080×1350px, 4:5 ratio). For a clean grid, use Square (1080×1080px). For Stories and Reels, use 1080×1920px (9:16).',
      },
      {
        question: 'Does Instagram compress images when you upload?',
        answer:
          'Yes. Instagram recompresses all images to JPEG. Upload at exactly 1080px wide to skip the resampling step and preserve maximum quality.',
      },
      {
        question: 'Can I upload a HEIC photo from my iPhone to Instagram?',
        answer:
          'Instagram does not accept HEIC files directly. Use this tool to convert HEIC to JPEG and resize to the correct Instagram dimensions in one step.',
      },
      {
        question: 'What happens if I upload the wrong size to Instagram?',
        answer:
          'Instagram automatically crops images outside its accepted ratio range (4:5 to 1.91:1). Always resize to the correct dimensions before uploading to prevent unwanted cropping.',
      },
      {
        question: 'Is this Instagram image resizer free?',
        answer:
          'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser.',
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
