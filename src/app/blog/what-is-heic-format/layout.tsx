import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/what-is-heic-format')

export const metadata: Metadata = {
  title: 'What Is HEIC? How to Open and Convert HEIC Images',
  description:
    'HEIC is the default photo format on iPhones. Learn what HEIC is, why it exists, how to open HEIC files on Windows and Mac, and how to convert HEIC to JPG or PNG.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is HEIC? How to Open and Convert HEIC Images',
    description:
      'HEIC is the default photo format on iPhones. Learn what HEIC is, how to open HEIC files on Windows, and how to convert HEIC to JPG or PNG for free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'What Is HEIC Format?',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is HEIC? Open and Convert HEIC Images',
    description:
      'HEIC explained — what it is, Windows support, and how to convert to JPG for free.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'What Is HEIC Format?', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'What Is HEIC? How to Open and Convert HEIC Images',
    blog: {
      headline: 'What Is HEIC? How to Open and Convert HEIC Images',
      description:
        'HEIC is the default photo format on iPhones — how to open it on Windows/Mac and convert to JPEG.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: "Why can't I open HEIC files on my Windows PC?",
        answer:
          'Windows does not include HEIC support by default. You need either the HEVC Video Extensions codec from the Microsoft Store ($0.99), or a free converter tool like CompressImg that converts HEIC to JPEG directly in your browser without any software installation.',
      },
      {
        question: 'Will I lose quality when converting HEIC to JPEG?',
        answer:
          'At high JPEG quality settings (85–95%), the conversion from HEIC to JPEG is visually lossless — you cannot see any difference on a normal screen. HEIC stores more color information (16-bit vs 8-bit for JPEG), but this difference is invisible unless you are working in professional photo editing workflows.',
      },
      {
        question: 'How do I stop my iPhone from saving photos as HEIC?',
        answer:
          'Go to Settings → Camera → Formats → select Most Compatible. Your camera will now save photos as JPEG instead of HEIC. Photos will be about twice as large, but will open on all devices and services without conversion.',
      },
      {
        question: 'Can I convert HEIC to PNG instead of JPEG?',
        answer:
          'Yes. Converting HEIC to PNG produces a lossless output — every pixel is preserved exactly. PNG files are larger than JPEG but smaller than HEIC in many cases. Use PNG when you need pixel-perfect quality or transparency; use JPEG for sharing and web use where file size matters.',
      },
      {
        question: 'Is HEIC the same as HEIF?',
        answer:
          'HEIF (High Efficiency Image Format) is the container standard; HEIC (High Efficiency Image Container) is the specific implementation using HEVC compression that Apple uses. They are often used interchangeably. When people refer to iPhone HEIC files, they mean the .heic extension, which is the most common HEIF variant.',
      },
      {
        question: 'Do social media platforms support HEIC?',
        answer:
          "Most social media platforms (Instagram, Facebook, Twitter/X, TikTok) do not accept HEIC uploads. They require JPEG or PNG. When you upload from your iPhone's camera roll via the app, iOS automatically converts the file to JPEG before uploading. But if you transfer the .heic file to another device and then try to upload it, many platforms will reject it.",
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
