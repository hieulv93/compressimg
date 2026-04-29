import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-300kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 300KB Online Free — Any Format',
  description:
    'Free online tool to compress images to 300KB or less. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress image to 300kb',
    'compress photo to 300kb',
    'reduce image size to 300kb',
    'compress image to 300kb online',
    'compress jpg to 300kb',
    'compress png to 300kb',
    'reduce photo size to 300kb',
    'compress image under 300kb',
    'image compressor 300kb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 300KB Online Free — Any Format',
    description:
      'Reduce JPG, PNG, or WebP images to under 300KB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 300KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 300KB Online Free',
    description: 'Reduce any image to under 300KB for free. 100% browser-based — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 300KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 300KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor. Reduce JPG, PNG, and WebP files to under 300KB. Adjustable quality slider. No upload required.',
      featureList: [
        'Compress image to under 300KB',
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
          name: 'What quality setting compresses an image to under 300KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a typical 1920px wide photo, quality 70–80 usually produces an output of 150–300KB. Start at quality 80, check the result size, and adjust down if needed. If the photo is very large (4000px+), resize to 1920px first, then compress.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I need to compress an image to 300KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '300KB is a common upload limit for WordPress blogs, CMS platforms, social media profile images, email newsletters, and job application portals. Compressing to under 300KB ensures your image is accepted and loads quickly on any connection speed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will compressing to 300KB reduce image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 75–80, most photos compressed to 300KB are visually indistinguishable from the original when viewed on screen. The quality loss is imperceptible for web use, email, and standard printing at A4 or smaller.',
          },
        },
        {
          '@type': 'Question',
          name: 'My photo is still over 300KB at quality 70 — what do I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most effective fix is to resize the image dimensions first. A 5000px wide photo at quality 70 can still exceed 300KB. Use the Resize Image tool to reduce width to 1920px or less, then compress. The result will comfortably be under 300KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress PNG to under 300KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG uses lossless compression, so large PNGs may stay above 300KB even at the lowest quality setting. For photographs saved as PNG, converting to JPG first (using the PNG to JPG tool) and then compressing usually achieves well under 300KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression happens entirely in your browser. Your files never leave your device and are never sent to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between compressing to 100KB vs 300KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '300KB allows higher quality — quality 75–80 is typically sufficient, which preserves excellent sharpness and color accuracy. 100KB requires more aggressive compression (quality 50–65), which can introduce visible softness. Use 300KB for web publishing, email, and CMS. Use 100KB for government forms and strict portal requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a file size limit for upload?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — files up to 20MB are accepted. For files larger than 20MB, resize the dimensions first to bring the file under 20MB, then compress.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo300KbLayout({ children }: { children: React.ReactNode }) {
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
