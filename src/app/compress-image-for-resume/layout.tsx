import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-resume/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for Resume / CV — Photo Under 100KB Free',
  description:
    'Compress your resume or CV photo to under 100KB in one click. Fits Naukri, LinkedIn, Indeed, and all job portal limits. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Resume / CV — Photo Under 100KB Free',
    description:
      'Compress resume and CV photos to under 100KB — fits Naukri, LinkedIn, Indeed. No uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for Resume Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Resume Photo — Under 100KB Free',
    description: 'Compress CV photos for Naukri, LinkedIn, Indeed. 100% browser-based — private.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image for Resume', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resume Photo Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based resume photo compressor. Reduce CV photo file size to under 100KB or 200KB for Naukri, LinkedIn, Indeed, and job portals. No upload required.',
      featureList: [
        'Compress resume photo under 100KB',
        'Fits Naukri, LinkedIn, Indeed requirements',
        'Supports JPG, PNG, WebP, HEIC',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress a Resume Photo Online',
      description:
        'Compress your CV or resume photo to under 100KB — free, browser-based, no upload required.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [
        { '@type': 'HowToSupply', name: 'Resume photo (JPG, PNG, WebP or HEIC — up to 20 MB)' },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg — Free Resume Photo Compressor', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your resume photo',
          text: 'Click the upload area or drag and drop your resume or CV photo. Accepts JPG, PNG, WebP and HEIC — up to 20 MB. iPhone HEIC photos are converted automatically.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 80–85',
          text: 'Quality 80 compresses most 400×400px resume photos to 15–40KB — well under the 100KB limit on Naukri and most job portals. Check the output size shown before downloading.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the compressed photo',
          text: 'Click Download to save the compressed resume photo. No account, no watermark, no server upload. The photo is ready to upload to any job portal.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the photo size limit for Naukri resume upload?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Naukri requires the resume photo to be under 50KB and in JPG or PNG format. The recommended dimensions are 200×200 pixels to 400×400 pixels with a plain white or light-coloured background. Use quality 75–80 on a 400×400px photo — the output will typically be 10–30KB, safely under the 50KB Naukri limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What photo size should I use for a LinkedIn profile picture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LinkedIn accepts profile photos up to 8MB, but the recommended upload size is under 2MB for fast processing. LinkedIn displays profile photos at 400×400 pixels. Upload at 400×400px JPEG quality 85 — the file will be around 30–80KB, fast to upload and sharp on all screen sizes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a CV photo to under 20KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'First resize your photo to 200×200 pixels using the Resize Image tool, then compress at quality 60–65. A 200×200px JPEG at quality 65 is typically 8–18KB. If still over 20KB, lower quality to 55. Avoid PNG for very small sizes — JPEG produces far smaller files at the same visual quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress an iPhone HEIC photo for my resume?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload your iPhone HEIC photo directly — it is automatically converted to JPEG during compression. iPhone photos are usually 4032×3024px, so the output JPEG at quality 80 will still be large. After compressing, use the Resize Image tool to reduce dimensions to 400×400px for job portal uploads.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format should a resume photo be — JPG or PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPEG (JPG) is the best format for resume photos. It produces files 3–5× smaller than PNG at the same visual quality. PNG is only better if your photo has transparency (a cut-out background), which most job portals do not support anyway. Use JPEG at quality 80 for the best combination of file size and clarity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing a resume photo affect how I look?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 80, compression is virtually invisible on a 400×400px portrait photo. Skin tones, sharpness, and background detail remain accurate. Quality loss only becomes slightly visible at full-screen zoom at quality below 55. For any job portal display at typical thumbnail sizes, quality 75–85 is indistinguishable from the uncompressed original.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my resume photo safe when I use this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser using JavaScript. Your photo never leaves your device and is never uploaded, stored, or shared with any server. This is important for ID and face photos — you should never use a tool that uploads your photo to an unknown server.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for a job application photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80 is the recommended setting for most job application photos. At 400×400px and quality 80, the JPEG file is typically 20–50KB — under every job portal limit. For very strict limits like Naukri (50KB) at larger dimensions (600×600px), use quality 70–75.',
          },
        },
      ],
    },
  ],
}

export default function CompressForResumeLayout({ children }: { children: React.ReactNode }) {
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
