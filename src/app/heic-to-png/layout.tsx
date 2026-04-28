import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/heic-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'HEIC to PNG Converter — Convert iPhone Photos to PNG Free',
  description:
    'Convert HEIC to PNG free online. Lossless PNG output — no quality loss. Works on Windows, Android, and web. No upload, 100% browser-based.',
  keywords: [
    'heic to png',
    'convert heic to png',
    'heic to png online',
    'heic to png free',
    'heif to png',
    'iphone photo to png',
    'heic converter png',
    'convert iphone photos to png',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'HEIC to PNG Converter — Convert iPhone Photos to PNG Free',
    description:
      'Convert iPhone HEIC photos to PNG instantly. Lossless output, no quality loss. 100% browser-based — no upload, no app required.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'HEIC to PNG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to PNG — Free iPhone Photo Converter',
    description: 'Convert iPhone HEIC photos to PNG free. Lossless output. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'HEIC to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — HEIC to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based HEIC to PNG converter. Convert iPhone and iPad HEIC photos to lossless PNG format instantly. No file upload, no app installation, no account required.',
      featureList: [
        'Convert HEIC and HEIF to PNG',
        'Lossless PNG output — no quality loss',
        'Works with iPhone and iPad photos',
        'No file upload — 100% browser-based',
        'Open on Windows, Android, and web',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is HEIC and why do I need to convert it to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HEIC (High Efficiency Image Container) is the default photo format on iPhones since iOS 11. It produces smaller files than JPG at the same quality, but it is not supported by most Windows apps, Android devices, or web platforms. Converting to PNG gives you a universally compatible format with lossless quality — no data is thrown away in the conversion.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is HEIC to PNG conversion lossless?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. PNG uses lossless compression, so the visual content of your image is preserved perfectly. No pixel data is discarded during the conversion. The resulting PNG will be visually identical to the original HEIC photo at full resolution.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why convert HEIC to PNG instead of JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choose PNG over JPG when you need lossless quality (no compression artifacts), when you plan to edit the image further, when the image contains text or sharp lines that degrade with JPG compression, or when the platform requires PNG format. Choose JPG when file size matters more than absolute quality, such as for social media or email.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the PNG file be larger than the original HEIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, typically 2–4 times larger. HEIC uses highly efficient lossy compression that keeps file sizes small. PNG uses lossless compression, which preserves all pixel data and produces larger files. A 3MB HEIC photo may become an 8–15MB PNG. If file size matters, consider converting to JPG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my HEIC photos safe to convert here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All conversion happens entirely in your browser using JavaScript — no file is ever sent to a server. Your photos stay on your device throughout the entire process. This makes the tool safe for personal photos, private documents, and confidential images.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert HEIC to PNG on my iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Open this page in Safari or Chrome on your iPhone. Tap the upload area and select your HEIC photo from the camera roll. The browser converts it locally. The downloaded PNG saves to your Files app.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the converted PNG preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HEIC photos from the iPhone camera do not contain transparency — they are standard opaque photos. The converted PNG will have a solid background matching the original photo. PNG transparency support is relevant when converting design assets, not camera photos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does converting HEIC to PNG preserve EXIF data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The browser-based conversion process does not preserve EXIF metadata such as GPS coordinates, date taken, or camera settings. If you need to retain EXIF data, use a desktop application like Adobe Lightroom or Apple Photos (File → Export as PNG).',
          },
        },
      ],
    },
  ],
}

export default function HeicToPngLayout({ children }: { children: React.ReactNode }) {
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
