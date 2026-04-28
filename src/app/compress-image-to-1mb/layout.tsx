import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-1mb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 1MB Online Free — Reduce to Under 1MB',
  description:
    'Free online tool to compress images to under 1MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress image to 1mb',
    'compress photo to 1mb',
    'reduce image size to 1mb',
    'compress image to 1mb online',
    'compress jpg to 1mb',
    'compress png to 1mb',
    'reduce image under 1mb',
    'image compressor 1mb',
    'compress image size to 1mb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 1MB Online Free',
    description:
      'Reduce JPG, PNG, or WebP images to under 1MB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 1MB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 1MB Online Free',
    description: 'Reduce any image to under 1MB for free. 100% browser-based — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 1MB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 1MB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor. Reduce JPG, PNG, and WebP files to under 1MB. Adjustable quality slider with real-time output size. No upload required.',
      featureList: [
        'Compress image to under 1MB',
        'Compress JPG, PNG, WebP formats',
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
          name: 'How do I compress an image to under 1MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image, set the quality slider to 80–85, and check the compressed file size shown in the result. For most smartphone photos (3–8MB), quality 80 produces an output between 300KB and 900KB — well under 1MB. If the result is still over 1MB, lower the quality to 70 or resize the image dimensions first.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use to hit under 1MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80–85 is the best starting point for a 1MB target. At these settings, a typical 1920px wide photograph compresses to 200–800KB while retaining excellent visual quality. Only very high-resolution images (5000px+) may need a lower quality setting or dimension reduction to get under 1MB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I need to compress images to under 1MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many platforms enforce a 1MB file size limit: email clients show warnings for attachments over 1MB per image, CMS platforms like WordPress recommend uploads under 1MB for page speed, and some government portals and online forms cap uploads at 1MB. Compressing to under 1MB ensures compatibility while keeping image quality high.',
          },
        },
        {
          '@type': 'Question',
          name: 'My image is still over 1MB after compression — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Very high-resolution images (4000px+) can remain over 1MB even at quality 70. The most effective fix is to resize the image dimensions first. Use the Resize Image tool to reduce the image to 1920px wide or smaller, then re-compress. A 1920px wide image at quality 80 is almost always well under 1MB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the image still look good at under 1MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. At quality 80–85, compressed images are visually indistinguishable from the original at normal viewing sizes. The difference only becomes visible when zooming in on fine textures at 100% zoom. For web publishing, email, and social media, quality 80 at 1920px is the standard professional setting.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between 1MB, 500KB, and 100KB compression targets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1MB allows for high-quality images suitable for web publishing and professional email. 500KB is the sweet spot for fast-loading websites and CMS platforms. 100KB is required for strict government portals, ID photo submissions, and exam registration systems. Choose your target based on where the image will be used.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which formats are easiest to compress to under 1MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG is easiest — most smartphone JPG photos compress to under 1MB at quality 80 in a single step. WebP produces even smaller files at the same quality. PNG is harder because it uses lossless compression; large PNGs may need to be resized or converted to JPG before reliably reaching under 1MB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression happens entirely in your browser using JavaScript. Your files never leave your device and are never sent to any server. This makes the tool safe for personal photos, confidential documents, and proprietary images.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo1MbLayout({ children }: { children: React.ReactNode }) {
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
