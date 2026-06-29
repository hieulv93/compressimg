import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/reduce-image-size')

export const metadata: Metadata = {
  title: 'Reduce Image Size Online Free — Image Size Reducer',
  description:
    'Free online image size reducer. Reduce image file size by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Reduce Image Size Online Free — Image Size Reducer',
    description:
      'Free image size reducer. Reduce JPG, PNG, WebP file size by up to 90% — no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reduce Image Size Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reduce Image Size Online Free',
    description: 'Free image size reducer. Reduce file size by up to 90% — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Reduce Image Size', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Reduce Image Size Online Free — Image Size Reducer',
    description:
      'Free online image size reducer. Reduce image file size by up to 90% without losing quality. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'How do I reduce image size online for free?',
        answer:
          'Upload your image, set quality to 80, and download the reduced result. This tool reduces image size by 60–70% at quality 80 with no visible quality loss. No sign-up, no watermark, no limit.',
      },
      {
        question: 'How do I reduce image file size without losing quality?',
        answer:
          'Use quality 75–85. At quality 80, most images are reduced by 60–70% with a result that looks identical to the original on screen. Quality loss only becomes visible below quality 60 at full zoom.',
      },
      {
        question: 'How do I reduce image size to under 100KB?',
        answer:
          'Start with quality 70 and check the result size. If over 100KB, lower to 60. For large phone photos, resize to 1280px wide first using the Resize Image tool, then compress at quality 60–70.',
      },
      {
        question: 'Can I reduce image size without changing dimensions?',
        answer:
          'Yes. This tool reduces file size through quality compression only — the pixel dimensions stay exactly the same. A 1920×1080px image is still 1920×1080px after compression, just smaller in file size.',
      },
      {
        question: 'Does reducing image size affect quality?',
        answer:
          'At quality 75–85, quality loss is invisible on screen. At quality 60–70, minor artifacts appear only at full zoom. For email, web, and social media use, quality 70–80 is indistinguishable from the original.',
      },
      {
        question: 'How do I reduce image size on iPhone?',
        answer:
          'Open this page in Safari on your iPhone, tap the upload area, and select a photo from your camera roll. iPhone photos (HEIC) are converted and compressed automatically. Set quality to 60–70 for most sharing uses.',
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
