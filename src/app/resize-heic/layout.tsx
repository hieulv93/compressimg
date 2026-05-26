import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-heic/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize HEIC Image Online Free — Convert & Resize iPhone Photos',
  description:
    'Resize HEIC photos from iPhone to any size and convert to JPEG in your browser. Free, no upload, no software needed. Supports all iPhone HEIC files instantly.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize HEIC Image Online Free — Convert & Resize iPhone Photos',
    description:
      'Resize HEIC photos from your iPhone and convert to JPEG in one step. Free, no upload, works in any browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize HEIC Image — CompressImg' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize HEIC Image Online Free — Convert & Resize iPhone Photos',
    description:
      'Upload HEIC from iPhone → resize → download as JPEG. Free, browser-based, no software needed.',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resize Image',
          item: `${SITE_URL}/resize-image/`,
        },
        { '@type': 'ListItem', position: 3, name: 'Resize HEIC', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'HEIC Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize HEIC photos from iPhone and convert to JPEG in one step. Supports Full HD (1920×1080), Web (1280×720), Instagram (1080×1080), Email (800×600), and Thumbnail (640×480) presets.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a HEIC Image Online',
      description:
        'Resize HEIC photos from iPhone and convert to JPEG in your browser — free, no software needed.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select target size',
          text: 'Choose a preset — Full HD (1920×1080), Web (1280×720), Instagram (1080×1080), Email (800×600), or Thumbnail (640×480).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your HEIC file',
          text: 'Upload your .heic file from iPhone. The tool detects HEIC format automatically and converts it to JPEG before resizing.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download as JPEG',
          text: 'Download the resized JPEG — universally compatible with Windows, Android, web browsers, and all upload portals.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I resize a HEIC photo from my iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload the .heic file directly — the tool automatically converts HEIC to JPEG and resizes to your chosen dimensions in one step. No app or software needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I open HEIC files on Windows?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not without the HEIC Image Extensions codec from the Microsoft Store. The easiest workaround is converting HEIC to JPEG using this tool — the result opens on any Windows version without extra software.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does converting HEIC to JPEG lose quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At high JPEG quality settings (92+), the difference is imperceptible in normal use. For photos shared online or printed, the output is visually identical to the HEIC original.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does Instagram reject my iPhone photos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Instagram's web uploader rejects HEIC files. Upload your HEIC here, resize to Instagram dimensions (1080×1080 or 1080×1350), then upload the resulting JPEG to Instagram.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is this HEIC resize tool free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No account, no watermark, no usage limits. All HEIC conversion and resizing happens in your browser.',
          },
        },
      ],
    },
  ],
}

export default function ResizeHeicLayout({ children }: { children: React.ReactNode }) {
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
