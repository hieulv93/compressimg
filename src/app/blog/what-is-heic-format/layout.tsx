import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/what-is-heic-format/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'What Is HEIC Format?' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is HEIC? Open and Convert HEIC Images',
    description:
      'HEIC explained — what it is, Windows support, and how to convert to JPG for free.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What Is HEIC? How to Open and Convert HEIC Images',
      description:
        'HEIC is the default photo format on iPhones — how to open it on Windows/Mac and convert to JPEG.',
      url: PAGE_URL,
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: OG_IMAGE },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: 'What Is HEIC Format?', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Why can't I open HEIC files on my Windows PC?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Windows does not include HEIC support by default. You need either the HEVC Video Extensions codec from the Microsoft Store ($0.99), or a free converter tool like CompressImg that converts HEIC to JPEG directly in your browser without any software installation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I lose quality when converting HEIC to JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At high JPEG quality settings (85–95%), the conversion from HEIC to JPEG is visually lossless — you cannot see any difference on a normal screen. HEIC stores more color information (16-bit vs 8-bit for JPEG), but this difference is invisible unless you are working in professional photo editing workflows.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I stop my iPhone from saving photos as HEIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Go to Settings → Camera → Formats → select Most Compatible. Your camera will now save photos as JPEG instead of HEIC. Photos will be about twice as large, but will open on all devices and services without conversion.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert HEIC to PNG instead of JPEG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Converting HEIC to PNG produces a lossless output — every pixel is preserved exactly. PNG files are larger than JPEG but smaller than HEIC in many cases. Use PNG when you need pixel-perfect quality or transparency; use JPEG for sharing and web use where file size matters.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is HEIC the same as HEIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HEIF (High Efficiency Image Format) is the container standard; HEIC (High Efficiency Image Container) is the specific implementation using HEVC compression that Apple uses. They are often used interchangeably. When people refer to iPhone HEIC files, they mean the .heic extension, which is the most common HEIF variant.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do social media platforms support HEIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Most social media platforms (Instagram, Facebook, Twitter/X, TikTok) do not accept HEIC uploads. They require JPEG or PNG. When you upload from your iPhone's camera roll via the app, iOS automatically converts the file to JPEG before uploading. But if you transfer the .heic file to another device and then try to upload it, many platforms will reject it.",
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
