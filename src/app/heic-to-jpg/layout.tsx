import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/heic-to-jpg`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'HEIC to JPG Converter — Convert iPhone Photos Free Online',
  description:
    'Convert HEIC to JPG free online. Open iPhone photos on Windows, Android, and the web instantly. No upload, 100% browser-based, no app install required.',
  keywords: [
    'heic to jpg',
    'heic to jpeg',
    'convert heic to jpg',
    'heic converter',
    'iphone photo converter',
    'heif to jpg',
    'open heic on windows',
    'heic to jpg free',
    'convert iphone photos to jpg',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'HEIC to JPG Converter — Convert iPhone Photos Free Online',
    description:
      'Convert iPhone HEIC photos to JPG instantly. Works on Windows, Android, and web. 100% browser-based — no upload, no app required.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'HEIC to JPG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to JPG — Free iPhone Photo Converter',
    description:
      'Convert iPhone HEIC photos to JPG free. Open on Windows, Android, and any website. No upload needed.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'HEIC to JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — HEIC to JPG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based HEIC to JPG converter. Convert iPhone and iPad HEIC photos to universally compatible JPG format instantly. No file upload, no app installation, no account required.',
      featureList: [
        'Convert HEIC and HEIF to JPG',
        'Works with iPhone and iPad photos',
        'No file upload — 100% browser-based',
        'JPG output at quality 90',
        'Open on Windows, Android, and web',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is my HEIC photo safe to convert here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All conversion happens entirely in your browser using JavaScript — no file is ever sent to a server. Your photos stay on your device throughout the entire process. This makes the tool safe for personal photos, passport photos, and confidential documents.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will converting HEIC to JPG reduce the image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 90 (which this tool uses), the visual difference between HEIC and the converted JPG is imperceptible. Both formats use lossy compression, so there is a small theoretical quality loss, but it is not visible in normal viewing conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does my HEIC file show as blank on Windows?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Windows does not include native HEIC support by default. Microsoft offers the HEVC Video Extensions codec for $0.99 in the Microsoft Store, which adds HEIC support. Alternatively, converting to JPG is the free solution that works immediately without any software installation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert HEIC to JPG on my iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Open this page in Safari or Chrome on your iPhone. Tap the upload area and select your HEIC photo from the camera roll. The browser converts it locally. The downloaded JPG saves to your Files app or camera roll.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between HEIC and HEIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "HEIF (High Efficiency Image Format) is the container format standard. HEIC is Apple's implementation of HEIF using the HEVC codec. In practice, .heic and .heif files are functionally identical. Both are converted to JPG by this tool.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I stop my iPhone from taking photos in HEIC format?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Go to Settings → Camera → Formats and select 'Most Compatible'. This changes the camera to record JPG files directly. Note that this uses approximately twice the storage per photo compared to HEIC.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does converting HEIC to JPG preserve EXIF data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The browser-based conversion process does not preserve EXIF metadata such as GPS coordinates, date taken, or camera settings. If you need to retain EXIF data, use a desktop application like Adobe Lightroom or Apple Photos (File → Export).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert multiple HEIC files at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Currently this tool converts one file at a time. For batch conversion, you can use the tool repeatedly — each conversion takes 1–3 seconds. Batch conversion is on the development roadmap.',
          },
        },
      ],
    },
  ],
}

export default function HeicToJpgLayout({ children }: { children: React.ReactNode }) {
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
