import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/heic-to-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Convert iPhone Photos to JPG Free — HEIC to JPG Converter',
  description:
    'iPhone saves photos as HEIC — convert them to JPG free online. Opens on Windows, Android, and any website instantly. No upload, 100% browser-based, no app install.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Convert iPhone Photos to JPG Free — HEIC to JPG Converter',
    description:
      'iPhone photos are saved as HEIC — convert them to JPG instantly. Works on Windows, Android, and web. 100% browser-based — no upload, no app required.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'HEIC to JPG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert iPhone Photos to JPG Free — HEIC Converter',
    description:
      'iPhone photos are HEIC — convert to JPG free online. Opens on Windows, Android, and any site. No upload needed.',
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
      '@type': 'HowTo',
      name: 'How to Convert HEIC to JPG Online',
      description:
        'Convert iPhone HEIC photos to universally compatible JPG format — free, 100% browser-based, no app install required.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'HEIC or HEIF photo file from iPhone or iPad — up to 20 MB',
        },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg HEIC to JPG Converter', url: PAGE_URL },
        {
          '@type': 'HowToTool',
          name: 'Modern web browser with JavaScript enabled (Chrome, Firefox, Edge, Safari 16+)',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your HEIC file from iPhone or Mac',
          text: 'Click the upload area or drag and drop your HEIC photo. On iPhone, tap the upload area in Safari or Chrome and select the photo from your camera roll. Files up to 20 MB are supported.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Conversion to JPG runs automatically',
          text: 'Your HEIC file is converted to JPG instantly in your browser using JavaScript — no server upload, no waiting. The conversion uses quality 90, which is visually indistinguishable from the original.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the JPG file',
          text: 'Click Download to save the converted JPG. The file is named with a "converted-" prefix so you can easily distinguish it from the original HEIC. No account, no watermark.',
          url: `${PAGE_URL}#step-3`,
        },
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
