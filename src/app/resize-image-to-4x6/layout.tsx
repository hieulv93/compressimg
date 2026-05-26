import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-4x6/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 4×6 Inch — 1200×1800px Free | CompressImg',
  description:
    'Resize any photo to 4×6 inch (1200×1800px at 300 DPI) for printing at home, pharmacy, or photo lab. Portrait and landscape. Free, browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 4×6 Inch — 1200×1800px Free | CompressImg',
    description:
      'Resize any photo to 4×6 inch (1200×1800px) for printing. Portrait and landscape. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 4x6 Inch' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 4×6 Inch — Free',
    description:
      '1200×1800px portrait or 1800×1200px landscape — exact 4×6 print size at 300 DPI. Instant, free.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 4×6 Inch', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: '4×6 Photo Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize photos to 4×6 inch print size. Portrait (1200×1800px) or landscape (1800×1200px) at 300 DPI. HEIC from iPhone converted automatically to JPEG.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a Photo to 4×6 Inch',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select orientation',
          text: 'Choose Portrait (1200×1800px) for people and single subjects, or Landscape (1800×1200px) for scenery and groups.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your photo',
          text: 'Upload your JPG, PNG, WebP, or HEIC file. HEIC from iPhone is converted automatically to JPEG.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and print',
          text: 'Download the resized JPEG and upload it to a photo lab, pharmacy kiosk, or home printer. Print at 100% scale on 4×6 photo paper.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many pixels is a 4×6 inch photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At 300 DPI (standard photo print quality): 1200×1800px portrait or 1800×1200px landscape. At 72 DPI (screen only): 288×432px. Always use 300 DPI when preparing photos for printing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What aspect ratio is a 4×6 photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A 4×6 photo has a 2:3 aspect ratio. Most phone cameras shoot at 4:3, so slight cropping is required to fit a 4×6 print frame.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this tool free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens in your browser.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageTo4x6Layout({ children }: { children: React.ReactNode }) {
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
