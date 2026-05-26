import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-2x2-inch/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 2×2 Inch — US Passport Photo Free | CompressImg',
  description:
    'Resize any photo to 2×2 inch (600×600px) for US passport, visa, and immigration forms. Free, browser-based, no upload required. HEIC from iPhone supported.',
  keywords: [
    'resize image to 2x2 inch',
    '2x2 passport photo',
    '2x2 inch photo',
    'us passport photo size',
    '600x600 passport photo',
    'resize photo to 2x2',
    '2x2 photo resize free',
    'us passport photo pixels',
    'resize image 2 inch by 2 inch',
    'passport photo 2x2',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 2×2 Inch — US Passport Photo Free | CompressImg',
    description:
      'Resize any photo to 2×2 inch (600×600px) for US passport and visa. HEIC supported. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 2x2 Inch' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 2×2 Inch — US Passport Photo Free',
    description: 'Get exact 600×600px (2×2 inch) for US passport and DS-160 visa. Instant, free.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 2×2 Inch', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: '2×2 Inch Photo Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize photos to exactly 2×2 inches (600×600px at 300 DPI) for US passport, US visa (DS-160), TSA PreCheck, and immigration forms. HEIC from iPhone converted automatically to JPEG.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a Photo to 2×2 Inch for US Passport',
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
          name: 'Resize to 2×2 inch',
          text: 'The tool resizes your photo to exactly 600×600px — the 2×2 inch US passport standard at 300 DPI.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and submit',
          text: 'Download the 600×600px JPEG and upload it to DS-160, the USPS passport portal, or print at 300 DPI for paper applications.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many pixels is a 2×2 inch passport photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '600×600 pixels at 300 DPI. The formula is: inches × DPI = pixels. 2 × 300 = 600. A 600×600px JPEG printed at 300 DPI measures exactly 2×2 inches on paper.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the US passport photo have to be exactly 600×600px?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The State Department requires 2×2 inches (600×600px at 300 DPI). For digital DS-160 submissions, the minimum accepted is 600px wide and the file must be under 240KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use this for a US visa (DS-160)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. US visa applications use the same 2×2 inch (600×600px) requirement as US passport photos. The DS-160 accepts files under 240KB — a 600×600px JPEG at quality 85 is typically 60–130KB.',
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

export default function ResizeImageTo2x2InchLayout({ children }: { children: React.ReactNode }) {
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
