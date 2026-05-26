import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size',
  description:
    'Free online image compressor. Reduce image file size up to 90% without losing quality. No upload to server — 100% browser-based and private. Supports JPG, PNG, WebP.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size',
    description:
      'Free online image compressor. Reduce file size up to 90% without losing quality. 100% browser-based — your images never leave your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'CompressImg — Free Online Image Compressor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size',
    description:
      'Reduce image file size up to 90% for free. No uploads — works 100% in your browser.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Online Image Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Free browser-based image compressor. Supports JPG, PNG, and WebP. Reduces file size up to 90% without quality loss. No upload required.',
      featureList: [
        'Compress JPG images online',
        'Compress PNG images online',
        'Compress WebP images online',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Free with no limits',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image Online',
      description:
        'Compress any JPG, PNG, or WebP image in your browser — free, no upload required, results in seconds.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [
        { '@type': 'HowToSupply', name: 'Image file (JPG, PNG, WebP or HEIC — up to 20 MB)' },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg — Free Online Image Compressor', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area, drag and drop your file, or paste from clipboard with Ctrl+V. Supports JPG, PNG, WebP and HEIC — up to 20 MB per file.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Adjust the quality slider',
          text: 'The default quality of 80 reduces file size by 60–80% with no visible quality loss. Lower the slider for a smaller file, raise it to preserve more detail.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the compressed image',
          text: 'Compression runs instantly in your browser. Click Download to save the compressed file — no account, no watermark, no server upload.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this image compressor free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free with no limits. There are no sign-ups, subscriptions, or watermarks. You can compress as many images as you want at no cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing an image reduce its quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lossy compression (JPG, WebP) does remove some image data, but at quality settings of 75–85%, the difference is invisible to the human eye in most photos. Lossless compression (PNG) reduces file size without removing any data. You can use the quality slider to find the right balance for your needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum file size I can compress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The maximum file size is 20MB per image. This covers the vast majority of images from cameras, phones, and design tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which image format gives the best compression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP generally delivers the best compression — 25–35% smaller than JPG at the same visual quality. For photographs, JPG with quality 75–85 is a great balance. PNG is best when you need transparency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression happens 100% in your browser using JavaScript and Web Workers. Your images never leave your device and are never stored on any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress PNG images without losing transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When you compress a PNG file, the output retains full alpha channel (transparency) support. You can compress PNG images without worrying about transparency being lost.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can I reduce image file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typical reductions are 60–90% depending on the image and quality setting. A 5MB JPG photograph can often be compressed to under 500KB while remaining visually identical on screen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this work on mobile phones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool is fully optimized for mobile browsers on iOS and Android. You can tap to open your camera roll or photo library, select an image, and download the compressed result — all within your mobile browser, no app required.',
          },
        },
      ],
    },
  ],
}

export default function CompressImageLayout({ children }: { children: React.ReactNode }) {
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
