import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size',
  description:
    'Free online image compressor. Reduce image file size up to 90% without losing quality. No upload to server — 100% browser-based and private. Supports JPG, PNG, WebP.',
  keywords: [
    'compress image',
    'image compressor',
    'compress image online free',
    'reduce image file size',
    'compress jpg',
    'compress png',
    'compress webp',
    'compress image without losing quality',
    'how to reduce image size in kb',
  ],
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
