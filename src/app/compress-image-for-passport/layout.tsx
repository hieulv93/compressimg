import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-passport/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Passport Photo Online — Under 240KB Free',
  description:
    'Compress passport photos to under 240KB for US passport applications. JPEG output, 100% browser-based — your photo never leaves your device. Free, no sign-up.',
  keywords: [
    'compress passport photo',
    'passport photo file size',
    'compress passport photo to 240kb',
    'passport photo compressor',
    'us passport photo requirements',
    'passport photo jpeg',
    'compress photo for passport application',
    'passport photo size kb',
    'resize passport photo online',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Passport Photo Online — Under 240KB Free',
    description:
      'US passport photo requirement: JPEG, under 240KB, 600×600px minimum. Compress your passport photo free — 100% browser-based, private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Passport Photo Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Passport Photo — Under 240KB Free',
    description: 'Meet US passport photo file size requirements. 100% browser-based — private.',
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
          name: 'Compress Passport Photo',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Passport Photo Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based passport photo compressor. Reduce JPEG file size to under 240KB for US passport and visa applications. No upload required — 100% private.',
      featureList: [
        'Compress passport photo under 240KB',
        'JPEG output for government portals',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'See exact output size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the file size requirement for a US passport photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For the US State Department online passport application, your digital passport photo must be a JPEG file under 240KB. The photo must be at least 600×600 pixels and no larger than 1200×1200 pixels. The head must fill 70–80% of the frame, and the background must be plain white or off-white.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use to compress a passport photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a 600×600px passport photo, quality 75–80 almost always produces a file under 50KB — well under the 240KB limit. For larger photos (1200×1200px), quality 75 typically produces 80–180KB. Start at quality 80 and check the output size. If under 240KB, you are done.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use this tool for US passport renewal applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The US State Department online passport renewal portal (DS-82) requires a digital photo uploaded directly to their website. The file must be JPEG, under 240KB, and at least 600×600 pixels. This tool compresses your photo to meet those requirements without uploading to any third-party server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing a passport photo affect its quality for government use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No — at quality 75–80, a 600×600px JPEG passport photo is visually indistinguishable from the uncompressed original at typical review sizes. Government portals use compressed images for digital review and storage; they do not require photographic print quality. Quality 75 is the standard used by most professional passport photo services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to compress a passport photo online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'With this tool, yes — your photo never leaves your device. All compression runs entirely in your browser using JavaScript. Your image is never uploaded to any server, stored, or transmitted. This is critical for identity documents — no passport photo should be processed on an untrusted server.',
          },
        },
        {
          '@type': 'Question',
          name: 'What pixel dimensions should my passport photo be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For US passport applications, the photo must be at least 600×600 pixels and no more than 1200×1200 pixels. 600×600px is the most common submission size and produces the smallest file — a JPEG at 600×600px and quality 80 is typically 20–60KB, safely under the 240KB limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'My passport photo upload was rejected — what went wrong?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common reasons a passport photo upload is rejected are: (1) file size over 240KB, (2) wrong format — only JPEG is accepted, not PNG or WebP, (3) dimensions below 600×600px or above 1200×1200px, (4) the head is too small (must fill 70–80% of the frame). Compress to JPEG at quality 75–80 and ensure dimensions are 600×600 to 1200×1200px.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a passport photo on my iPhone or Android?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Open this page in Safari or Chrome on your phone. Tap the upload area and select your passport photo from your camera roll. The tool accepts iPhone HEIC photos and converts them to JPEG automatically. Set quality to 80 and compress. Download the compressed JPEG directly to your phone.',
          },
        },
      ],
    },
  ],
}

export default function CompressForPassportLayout({ children }: { children: React.ReactNode }) {
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
