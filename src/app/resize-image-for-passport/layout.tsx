import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-passport/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for Passport — All Countries Free | CompressImg',
  description:
    'Resize photos to passport size for any country — US 2×2 inch (600×600px), UK/Schengen/India 35×45mm (413×531px), Canada 50×70mm. Free, browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Passport — All Countries Free | CompressImg',
    description:
      'Resize photos to exact passport size for US, UK, Schengen, India, Canada and more. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image for Passport' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Passport — Free, All Countries',
    description:
      'US 2×2 inch, UK/Schengen/India 35×45mm, Canada 50×70mm — exact passport dimensions instantly.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for Passport', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Passport Photo Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize photos to exact passport dimensions for any country. US 2×2 inch (600×600px), UK/Schengen/India 35×45mm (413×531px), Canada 50×70mm (591×827px). HEIC from iPhone automatically converted to JPEG.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a Photo for a Passport',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select your country',
          text: 'Choose the country or document type. The correct pixel dimensions are set automatically.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your photo',
          text: 'Upload a recent front-facing photo in JPG, PNG, WebP, or HEIC format. HEIC from iPhone is converted automatically.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and submit',
          text: 'Download the resized JPEG and upload it to the passport portal or print at 300 DPI for paper applications.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What pixel size should a passport photo be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'US passport photos must be 600×600px (2×2 inch at 300 DPI). UK, Schengen, India, Australia, and Japan use 413×531px (35×45mm at 300 DPI). Canada uses 591×827px (50×70mm at 300 DPI). Select the correct country preset to get the exact size automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is 35×45mm the same as 2×2 inch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. 35×45mm (1.38×1.77 inch) is used by the UK, Schengen zone, India, Japan, and most of the world. 2×2 inch (51×51mm) is the US standard — a larger, square format. Never use the US size for a UK or Schengen application.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a HEIC photo from my iPhone for a passport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Government portals accept JPEG only. This tool automatically converts HEIC files from iPhone to JPEG during the resize. You will receive a JPEG file at the correct dimensions ready for upload or print.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this passport photo resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens entirely in your browser — your photos never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForPassportLayout({ children }: { children: React.ReactNode }) {
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
