import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-200kb`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 200KB Online Free — Reduce Photo Size',
  description:
    'Free online tool to compress images to under 200KB. Reduce JPG, PNG file size for LinkedIn, visa forms, and portals. No upload, 100% browser-based and private.',
  keywords: [
    'compress image to 200kb',
    'reduce image size to 200kb',
    'compress photo to 200kb',
    'image compressor 200kb',
    'resize image to 200kb',
    'compress image under 200kb',
    'reduce photo size 200kb online',
    'compress jpg to 200kb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 200KB Online Free',
    description:
      'Reduce JPG and PNG file size to under 200KB for LinkedIn, visa applications, and upload portals. Free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 200KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 200KB Online Free',
    description:
      'Compress photos to under 200KB for LinkedIn, government forms, and upload portals. 100% browser-based, no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 200KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 200KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor targeting 200KB output. Reduce JPG, PNG, WebP file size for LinkedIn profiles, visa applications, government portals, and other upload forms with size limits. No file upload required.',
      featureList: [
        'Compress images to under 200KB',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Suitable for government forms and portals',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I compress an image to under 200KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image to this tool and set the quality slider to 75. Check the output file size shown in the result — for most smartphone photos, quality 75 produces a result between 80–200KB. If the file is still above 200KB, reduce quality to 65 or 60. For very large originals (over 5MB), resize the image dimensions to 1200px wide first, then compress.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use to get a 200KB image?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 75 is the recommended starting point. For phone photos between 1–3MB, quality 75 typically produces a 100–200KB output. For larger originals (3–8MB), try quality 65–70. For photos already under 1MB, quality 80–85 is usually enough. Always check the output size shown after compression and adjust as needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which image format gives the smallest file size under 200KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG produces the smallest file size for photographs at equivalent quality, making it the easiest format to compress under 200KB. If you have a PNG photo that needs to be under 200KB, convert it to JPG first using the PNG to JPG tool, then compress the JPG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does my image not compress to 200KB even at low quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'High-resolution images (over 3000px wide) contain more data that must be encoded regardless of quality setting. Even at low quality, a 4000×3000px image may exceed 200KB. The solution is to resize the image dimensions first — reducing a 4000px photo to 1200px wide using the Resize tool cuts file size by 85% before any quality compression is applied.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a PNG image to 200KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but PNG is a lossless format and compresses less efficiently than JPG for photographs. For a PNG photo, convert it to JPG first using the PNG to JPG tool, then compress the JPG to under 200KB. This two-step process typically produces a much better result.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing to 200KB change the image dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This tool compresses image quality without changing the image dimensions. A 3000×2000px photo compressed to 200KB remains 3000×2000px — only the quality encoding is reduced. If you need to change dimensions, use the Resize Image tool separately.',
          },
        },
        {
          '@type': 'Question',
          name: 'What websites require photos under 200KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common platforms with 200KB photo limits include government visa and identity portals, university online applications, civil service job application systems, professional networking profile photos, forum and community avatar uploads, and email signature management systems. The 200KB limit is one of the most commonly used thresholds for form image uploads globally.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server when compressing to 200KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression runs entirely in your browser using JavaScript. No image file is ever sent to any server. Your photos — including ID documents, passport photos, and sensitive personal images — never leave your device during the compression process.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo200KbLayout({ children }: { children: React.ReactNode }) {
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
