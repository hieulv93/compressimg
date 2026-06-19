import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-webp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize WebP Online Free — Change WebP Image Dimensions',
  description:
    'Resize WebP images online for free. Change WebP dimensions for web, CMS, and social media. Preserves WebP format. No upload, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize WebP Online Free — Change WebP Image Dimensions | CompressImg',
    description:
      'Resize WebP images to any pixel dimensions free. WebP format preserved on output. No upload, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize WebP Online — CompressImg' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize WebP Online Free — Change WebP Dimensions',
    description: 'Change WebP width and height by pixel — free, no upload, WebP output preserved.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize WebP', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'WebP Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize WebP images to any pixel dimensions. The output stays in WebP format. Ideal for web developers and content managers who need correctly sized WebP assets. Processing happens entirely in your browser.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a WebP Image Online',
      description: 'Resize any WebP to exact pixel dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your WebP',
          text: 'Click or drag your WebP file onto the upload area.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set the target dimensions',
          text: 'Enter the width and height in pixels. Use the lock icon to maintain the original aspect ratio.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the resized WebP',
          text: 'Click Resize Image and download your resized WebP file instantly.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the output stay in WebP format after resizing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When you upload a WebP file, the tool outputs a resized WebP file. The format is preserved, so you keep the WebP compression advantage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is WebP better than JPG for web images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is typically 25–35% smaller than JPEG at the same visual quality. It also supports transparency (unlike JPG). All major browsers support WebP since 2020. For new web projects, WebP is the recommended format.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I resize a WebP for a WordPress or CMS upload?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your WebP file here, enter your target dimensions (commonly 1200×630 for featured images, 300×300 for thumbnails), and download the resized file. Most modern CMS platforms accept WebP natively.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my WebP file uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens entirely in your browser using the Canvas API. Your file is never sent to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert WebP to JPG or PNG while resizing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool preserves the WebP format. To convert WebP to JPG or PNG, use our WebP to JPG or WebP to PNG converter first, then resize the output.',
          },
        },
      ],
    },
  ],
}

export default function ResizeWebpLayout({ children }: { children: React.ReactNode }) {
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
