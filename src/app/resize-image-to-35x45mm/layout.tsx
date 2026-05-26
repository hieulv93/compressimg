import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-35x45mm/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 35×45mm — Passport Photo Free | CompressImg',
  description:
    'Resize any photo to 35×45mm (413×531px) for UK, Schengen, India, Australia, and Japan passport. Free, browser-based, no upload. HEIC from iPhone supported.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 35×45mm — Passport Photo Free | CompressImg',
    description:
      'Resize any photo to 35×45mm (413×531px) for UK, Schengen, India, and Australia passport. HEIC supported. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 35x45mm' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 35×45mm — Passport Photo Free',
    description:
      'Get exact 413×531px (35×45mm) for UK, Schengen, India, and Japan passport. Instant, free.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 35×45mm', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: '35×45mm Photo Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize photos to exactly 35×45mm (413×531px at 300 DPI) for UK, Schengen, India, Australia, Japan, and most international passport and visa applications. HEIC from iPhone converted automatically to JPEG.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a Photo to 35×45mm',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your photo',
          text: 'Upload a recent front-facing photo in JPG, PNG, WebP, or HEIC format. HEIC from iPhone is converted automatically.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Resize to 35×45mm',
          text: 'The tool resizes your photo to 413×531px — the 35×45mm international passport standard at 300 DPI.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and submit',
          text: 'Download the 413×531px JPEG and upload it to the UKVI portal, Schengen visa application, Indian Passport Seva, or print at 300 DPI.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many pixels is 35×45mm at 300 DPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '413×531 pixels. The calculation: 35 ÷ 25.4 × 300 = 413px wide; 45 ÷ 25.4 × 300 = 531px tall. This is the standard for UK, Schengen, India, Australia, and Japan passport photos at print quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is 35×45mm the same as 2×2 inch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. 35×45mm (413×531px) is a rectangular format used by most of the world. 2×2 inch (600×600px) is the US standard — a larger, square format. Never use the US 2×2 inch format for a UK or Schengen passport.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a HEIC photo from my iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool automatically converts HEIC from iPhone to JPEG during the resize. Passport offices and visa portals only accept JPEG — HEIC is not accepted.',
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

export default function ResizeImageTo35x45mmLayout({ children }: { children: React.ReactNode }) {
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
