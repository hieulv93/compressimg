import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-50kb`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 50KB Online Free — Reduce Photo Size',
  description:
    'Free online tool to compress images to 50KB or less. Reduce JPG, PNG file size for government portals, exam registration, and official forms. 100% browser-based, no upload.',
  keywords: [
    'compress image to 50kb',
    'reduce image size to 50kb',
    'compress photo to 50kb',
    'image compressor 50kb',
    'resize image to 50kb',
    'compress image under 50kb',
    'compress jpg to 50kb',
    'compress png to 50kb',
    'reduce photo size to 50kb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 50KB Online Free — Reduce Photo Size',
    description:
      'Compress images to under 50KB for government portals, exam registration, and official forms. Free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 50KB' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 50KB Online Free',
    description:
      'Reduce image file size to under 50KB for government portals and official forms. 100% browser-based, no uploads.',
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
          name: 'Compress Image to 50KB',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 50KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for reducing photos to under 50KB. Compress JPG, PNG, WebP for government portals, exam registration forms, scholarship applications, and identity verification. No upload required.',
      featureList: [
        'Compress images to under 50KB',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Suitable for government portals and official forms',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I compress an image to under 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image to this tool, set quality to 65, and download the result. If the output is still above 50KB, lower the quality to 50–55 and compress again. For very large originals, use the Resize Image tool first to reduce dimensions to 600–800px wide, then compress — smaller dimensions produce smaller files at any quality setting.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use to reach 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start at quality 65. A typical 1MB smartphone photo compresses to 40–70KB at quality 65. If still above 50KB, try quality 55–60. For passport or ID photos (small dimensions, usually 600×800px), quality 70–75 often reaches 50KB without excessive quality loss. For signature scans on white backgrounds, quality 60 is usually sufficient.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a passport photo to 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Passport photos are typically already small in dimensions (600×800px or similar), so they compress easily to under 50KB. Upload your passport photo, set quality to 70, and download. The result is typically 20–45KB — well within the 50KB limit. If the original is very large, resize to 600px wide first using the Resize Image tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do government portals require images under 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Government portals enforce strict file size limits to manage server storage, bandwidth costs, and database size at scale. Many government IT systems were built years ago with conservative upload limits. The 50KB limit is common for identity photos (passport, ID photos) uploaded during exam registration, scholarship applications, and visa processing — where millions of images are stored.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my image look acceptable at 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For small-dimension images (under 800px wide), 50KB is sufficient for clear, acceptable quality. Portrait photos at 600×800px compressed to 50KB look sharp enough for official identification purposes. For larger images (1920px wide), 50KB will show visible compression artifacts — use the Resize Image tool to reduce dimensions first, then compress.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a signature scan to 50KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Signature scans typically have white backgrounds and simple black ink — they compress very efficiently. Upload your signature scan, set quality to 60, and download. A typical 300×100px signature at quality 60 compresses to 5–15KB, well under 50KB. If the scan is very large, crop it to show only the signature before compressing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing to 50KB change the image dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This tool only reduces file size through lossy compression — it does not change image dimensions. The output image has the same width and height as the original. If you need to reduce dimensions as well, use the Resize Image tool first to scale down the image, then compress to reach your target file size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe to compress with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos, passport images, and signature scans never leave your device. This makes the tool suitable for compressing sensitive official documents and identity photos.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo50KbLayout({ children }: { children: React.ReactNode }) {
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
