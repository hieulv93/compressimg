import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/passport-photo-maker/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Passport Photo Maker Online Free — 2×2 inch & 35×45mm',
  description:
    'Make passport size photos online free. US 2×2 inch, UK/EU/India 35×45mm, white background. Print-ready JPG at 300 DPI — no upload, 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Passport Photo Maker Online Free — 2×2 inch & 35×45mm',
    description:
      'Make passport size photos free. US 2×2 inch, UK/EU/India 35×45mm. Print-ready, no upload.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Passport Photo Maker Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passport Photo Maker Online Free',
    description: 'US 2×2 inch, UK/EU/India 35×45mm. Print-ready JPG. No upload.',
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
        { '@type': 'ListItem', position: 2, name: 'Passport Photo Maker', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Passport Photo Maker',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based passport photo maker. Upload any photo and get a print-ready passport or visa photo at 300 DPI. Supports US 2×2 inch, UK/EU/India 35×45mm, and 10+ country presets. White background, no upload, 100% private.',
      featureList: [
        '10+ country presets — US, UK, Schengen, India, Canada, Australia',
        'Correct size at 300 DPI — print-ready',
        'White or off-white background',
        'Center-crop to exact passport aspect ratio',
        'Download as high-quality JPG',
        'No file upload — 100% browser-based',
        'Free with no limits or sign-up',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Make a Passport Photo Online',
      totalTime: 'PT30S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your photo',
          text: 'Click to upload or drag and drop your photo. JPG, PNG, WebP, and HEIC (iPhone) accepted.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select country / document type',
          text: 'Choose your country or document type from the preset list. The correct size and aspect ratio are applied automatically.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download your passport photo',
          text: 'Click Download. You get a print-ready JPG at 300 DPI — the correct size for any passport or visa application.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Will this passport photo be accepted?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "This tool produces photos at the correct dimensions and 300 DPI for each country preset. The photo must still meet requirements for expression (neutral), background (plain white), lighting (even), and no glasses. Check your country's official requirements before submitting.",
          },
        },
        {
          '@type': 'Question',
          name: 'What size is a US passport photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'US passport photos must be 2×2 inches (51×51mm). The face must be between 1 inch and 1 3/8 inches from the bottom of the chin to the top of the head. This tool outputs at exactly 600×600px at 300 DPI — the correct print size.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the passport photo size for UK, India, and Schengen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UK, India, and Schengen visa photos are 35×45mm. At 300 DPI, this is 413×531 pixels. This is the most common passport photo size globally and is also used in Australia, Japan, and many other countries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my photo uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing happens in your browser using the Canvas API. Your photo never leaves your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a selfie for a passport photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can upload a selfie, but most passport authorities require a photo taken against a plain white background with even lighting and a neutral expression. A front-facing photo with good lighting gives the best result.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I print a passport photo at home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Download the JPG and print it at a photo print shop at 4×6 inch size. For a US 2×2 inch photo on 4×6 paper, you can fit 4 photos. Many print services (Walgreens, CVS, Walmart) accept digital files for same-day printing.',
          },
        },
      ],
    },
  ],
}

export default function PassportPhotoMakerLayout({ children }: { children: React.ReactNode }) {
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
