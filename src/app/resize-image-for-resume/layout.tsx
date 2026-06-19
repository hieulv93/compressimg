import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-resume/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for Resume / CV — Free, Exact Dimensions',
  description:
    'Resize your photo for resume, CV, or LinkedIn — LinkedIn 400×400px, Naukri 200×200px, European CV 300×400px. Free, browser-based, no upload required.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Resume / CV — Free, Exact Dimensions | CompressImg',
    description:
      'Resize your photo for LinkedIn, Naukri, European CV, or any job portal. Exact dimensions, 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image for Resume' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Resume / CV — Free',
    description:
      'LinkedIn 400×400px, Naukri 200×200px, European CV 300×400px — resize your resume photo instantly.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for Resume', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Resume Photo Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize photos for resume, CV, and job portals. Presets for LinkedIn (400×400px), Naukri/Indian portals (200×200px), European CV (300×400px), and small ID photos (150×200px). HEIC from iPhone converted automatically.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a Photo for a Resume',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select your platform',
          text: 'Choose LinkedIn, Naukri, European CV, or Small ID Photo. The correct dimensions are set automatically.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your photo',
          text: 'Upload a clear, professional headshot in JPG, PNG, WebP, or HEIC format.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload',
          text: 'Download the resized JPEG and upload it to LinkedIn, Naukri, or embed it in your CV document.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size should a resume photo be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For LinkedIn: 400×400px (square). For Naukri (India): 200×200px under 50KB. For most European CVs: 300×400px (3:4 ratio). For a printed CV: 150×200px at 300 DPI when embedded in a Word or PDF document.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make my Naukri profile photo under 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Resize to 200×200px using this tool, then compress using our Compress to 50KB tool. A 200×200px JPEG at quality 72 is typically 8–20KB — well under the 50KB Naukri limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I put a photo on my resume?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In India, Germany, France, South Korea, Japan, and the Middle East, a photo is expected. In the US, UK, Canada, and Australia, photos are discouraged due to anti-discrimination laws. Always check the job posting.',
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

export default function ResizeImageForResumeLayout({ children }: { children: React.ReactNode }) {
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
