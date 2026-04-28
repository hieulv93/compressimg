import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-500kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 500KB Online Free — Reduce to Under 500KB',
  description:
    'Free online tool to compress images to under 500KB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress image to 500kb',
    'compress photo to 500kb',
    'reduce image size to 500kb',
    'compress image to 500kb online',
    'compress jpg to 500kb',
    'compress png to 500kb',
    'reduce image under 500kb',
    'image compressor 500kb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 500KB Online Free',
    description:
      'Reduce JPG, PNG, or WebP images to under 500KB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 500KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 500KB Online Free',
    description: 'Reduce any image to under 500KB for free. 100% browser-based — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 500KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 500KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor. Reduce JPG, PNG, and WebP files to under 500KB. Adjustable quality slider with real-time output size. No upload required.',
      featureList: [
        'Compress image to under 500KB',
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
          name: 'How do I compress an image to under 500KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image and set the quality slider to 75–80. For a typical 1280px wide photo, this produces an output of 100–400KB — well under 500KB. If the result is still over 500KB, lower the quality to 65–70 or use the Resize Image tool to reduce the image dimensions to 1280px wide before compressing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use to hit under 500KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 75–80 is the best starting point. At quality 75, a typical 1280px wide photograph compresses to 80–300KB. For larger images (1920px+), start at quality 80 and check the result. If still over 500KB at quality 70, resize the dimensions to 1280px or smaller first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do platforms require images under 500KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 500KB limit is common across WordPress media libraries, university and government portals, job application systems, and social media platforms. At 500KB, images load quickly on mobile connections (under 1 second on 4G) while retaining excellent visual quality for display on screen. It is the standard web-optimized image size.',
          },
        },
        {
          '@type': 'Question',
          name: 'My image is still over 500KB after compression — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'High-resolution images (3000px+) can stay above 500KB even at quality 65. The best solution is to resize the dimensions first. Use the Resize Image tool to bring your image to 1280–1920px wide, then compress at quality 75. A 1280px wide image at quality 75 almost always comes in under 300KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the image look good at under 500KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. At quality 75–80, images at 1280–1920px wide are visually excellent for all screen display purposes. Compression artifacts are invisible at normal viewing distances. This quality range is standard for professional web publishing, blog images, and social media uploads.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does 500KB compare to other common size targets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '500KB sits between the strict government-form limit (100KB) and the general web limit (1MB). It provides better visual quality than 100–200KB targets while loading faster than 1MB files. Most web images, blog photos, and CMS uploads aim for 200–500KB as the optimal balance of quality and performance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which image format compresses best to under 500KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG is easiest — most smartphone photos compress to under 500KB at quality 75–80 in one step. WebP is even more efficient, producing files 25–35% smaller than JPG at the same quality. PNG is harder because it uses lossless compression; large PNGs often need dimension reduction or conversion to JPG to reliably reach 500KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images sent to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression happens in your browser. Your files never leave your device. This makes the tool safe for personal photos, confidential images, and any files you would not want uploaded to a third-party server.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo500KbLayout({ children }: { children: React.ReactNode }) {
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
