import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/add-watermark/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Add Watermark to Image Online Free — Text Overlay',
  description:
    'Add a custom text watermark to any photo instantly. Choose position, opacity, font size, and color. 100% browser-based — your image never leaves your device. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Add Watermark to Image Online Free — Text Overlay',
    description:
      'Add a custom text watermark to photos instantly. Choose position, opacity, font size, and color. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Add Watermark to Image' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Watermark to Image — Free Online',
    description:
      'Add custom text watermark to photos. Position, opacity, color. Free & browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Add Watermark', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Add Watermark to Image',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based watermark tool. Upload any photo, type your watermark text, choose position (9 grid positions), adjust opacity and font size, then download the watermarked JPEG. No server, 100% private.',
      featureList: [
        'Custom text watermark with any content',
        '9 position options (corners, edges, center)',
        'Adjustable opacity from 10% to 100%',
        'Font size control from 12px to 96px',
        'White, black, or custom color selection',
        'Supports JPG, PNG, WebP, HEIC up to 20MB',
        'No file upload — 100% browser-based',
        'Free with no limits or sign-up',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Add a Watermark to a Photo Online',
      totalTime: 'PT30S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your photo',
          text: 'Click the upload area or drag and drop your photo. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Customize your watermark',
          text: 'Type your watermark text, then adjust position (9 grid options), font size, opacity (10–100%), and color (white, black, or custom hex). The preview updates live.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the watermarked image',
          text: 'Click Download to save the watermarked photo as a JPEG file at quality 92.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a watermark and why add one to photos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A watermark is text or a logo overlaid on an image to identify the creator or owner. Photographers, artists, and content creators add watermarks to protect their work from unauthorized use, to brand their content, and to ensure attribution when images are shared online.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where should I position my watermark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bottom-right is the most common position for photography watermarks — it is visible but minimally intrusive. For stock photos or content protection, center placement with medium opacity is harder to crop out. For branding, top-right or bottom-left creates a consistent look across a series of images.',
          },
        },
        {
          '@type': 'Question',
          name: 'What opacity should I use for a watermark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For subtle branding: 30–50% opacity. For visible protection: 60–80%. For proof-of-concept or client preview images where you want the watermark prominent: 80–100%. Lower opacity looks more professional; higher opacity is harder to remove.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the watermark reduce image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The watermark is drawn on the image using the Canvas API and exported at JPEG quality 92, which is visually lossless. Only the pixels covered by the watermark text are changed. The rest of the image is pixel-perfect.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my photo private when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All watermark processing runs entirely in your browser. Your photo is never uploaded to any server. The Canvas API draws the watermark locally on your device.',
          },
        },
      ],
    },
  ],
}

export default function AddWatermarkLayout({ children }: { children: React.ReactNode }) {
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
