import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/flip-image/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Flip Image Online Free — Mirror Horizontal & Vertical',
  description:
    'Flip or mirror JPG, PNG, WebP, HEIC images horizontally or vertically in one click. 100% browser-based — no upload, no sign-up. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Flip Image Online Free — Mirror Horizontal & Vertical',
    description:
      'Flip images horizontally (mirror) or vertically in one click. Works on JPG, PNG, WebP, HEIC. 100% browser-based — private and free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Flip Image Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flip Image Online Free — Mirror Horizontal & Vertical',
    description: 'Flip images horizontally or vertically instantly. No upload, free.',
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
        { '@type': 'ListItem', position: 2, name: 'Flip Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Flip Image Online',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image flip tool. Mirror JPG, PNG, WebP, or HEIC images horizontally or vertically — no upload required, 100% private.',
      featureList: [
        'Flip horizontal (mirror left-right)',
        'Flip vertical (mirror top-bottom)',
        'Combine horizontal + vertical flip',
        'Supports JPG, PNG, WebP, HEIC up to 20MB',
        'JPEG output at quality 92',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Flip an Image Online',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Click Flip Horizontal or Flip Vertical',
          text: 'Click Flip Horizontal to mirror left-to-right, or Flip Vertical to mirror top-to-bottom. You can apply both. The preview updates instantly.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the flipped image',
          text: 'Click Download to save. No watermark, no sign-up, no server upload.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I flip an image horizontally online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image to this tool, then click Flip Horizontal. The preview mirrors left-to-right instantly. Click Download to save. No account required — free.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between flip horizontal and flip vertical?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Flip horizontal (mirror) reflects the image left-to-right — like looking in a mirror. Flip vertical reflects the image top-to-bottom — as if the image is on a piece of paper you flipped upside down. You can apply both at once for a 180° mirror effect.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does flipping an image reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool outputs JPEG at quality 92, which is visually lossless. The flip transformation itself is mathematically exact — no pixel data is lost. Only the JPEG encoding step applies minimal compression.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I flip a selfie to look like a mirror image?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload your selfie and click Flip Horizontal. This creates a mirror image — how others see you rather than how your camera captures you. Useful for profile photos and thumbnails.',
          },
        },
        {
          '@type': 'Question',
          name: 'What formats can I flip?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG, PNG, WebP, and HEIC — up to 20MB per file. Output is always JPEG at quality 92.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image uploaded to a server when I flip it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing runs entirely in your browser using the Canvas API. Your image never leaves your device.',
          },
        },
      ],
    },
  ],
}

export default function FlipImageLayout({ children }: { children: React.ReactNode }) {
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
