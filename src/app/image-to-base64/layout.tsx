import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/image-to-base64/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Image to Base64 Converter — Encode Photos Free Online',
  description:
    'Convert JPG, PNG, WebP, or HEIC to a Base64 data URL string instantly. Copy to clipboard or download as .txt. 100% browser-based — image never leaves your device. Free.',
  keywords: [
    'image to base64',
    'convert image to base64',
    'base64 encoder online',
    'jpg to base64',
    'png to base64',
    'base64 image string',
    'encode image base64',
    'image data url converter',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image to Base64 Converter — Encode Photos Free Online',
    description:
      'Convert any image to a Base64 data URL string instantly. Copy to clipboard or download as .txt. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Image to Base64 Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to Base64 Converter — Free Online',
    description: 'Convert JPG, PNG, WebP to Base64 string instantly. Copy or download.',
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
        { '@type': 'ListItem', position: 2, name: 'Image to Base64', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Image to Base64 Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image to Base64 converter. Upload JPG, PNG, WebP, or HEIC and get the full Base64 data URL instantly. Copy to clipboard or download as .txt — no upload, 100% private.',
      featureList: [
        'Converts JPG, PNG, WebP, HEIC to Base64 data URL',
        'Copy Base64 string to clipboard in one click',
        'Download encoded string as .txt file',
        'Shows original size, encoded size, and character count',
        'No file upload — 100% browser-based',
        'Free with no limits or sign-up',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert an Image to Base64',
      totalTime: 'PT5S',
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
          name: 'Base64 string is generated instantly',
          text: 'The FileReader API encodes your image to a Base64 data URL in milliseconds — fully in-browser, no server upload required.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Copy or download the result',
          text: 'Click Copy to copy the full Base64 data URL to your clipboard, or Download to save it as a .txt file.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Base64 encoding for images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Base64 encoding converts binary image data into a text string using 64 printable ASCII characters. The result is a data URL like data:image/jpeg;base64,/9j/4AAQ... that can be embedded directly in HTML, CSS, or JSON without needing a separate image file or HTTP request.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much larger is a Base64-encoded image?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Base64 encoding increases the data size by approximately 33%. A 100 KB image becomes roughly 133 KB as a Base64 string. This overhead is the tradeoff for being able to embed image data directly in text-based formats.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I use Base64 for images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use Base64 for small images that are critical to rendering (icons, logos under 10 KB) to eliminate an extra HTTP request. Avoid Base64 for large images — the 33% size increase outweighs the benefit, and base64 images cannot be cached by the browser separately from the HTML/CSS file.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Base64 encoding the same as compression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Base64 encoding makes images larger, not smaller. It is a way to represent binary data as text — not a compression algorithm. For reducing image file size, use our Compress Image tool instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image private when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All encoding runs in your browser using the FileReader API. Your image is never uploaded to any server. The Base64 string is generated entirely on your device.',
          },
        },
      ],
    },
  ],
}

export default function ImageToBase64Layout({ children }: { children: React.ReactNode }) {
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
