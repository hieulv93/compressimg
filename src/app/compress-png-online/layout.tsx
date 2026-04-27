import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-png-online/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress PNG Online Free – Reduce PNG File Size',
  description:
    'Free online PNG compressor. Reduce PNG file size while preserving transparency and quality. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress png',
    'compress png online',
    'reduce png file size',
    'png compressor',
    'compress png without losing quality',
    'compress png with transparency',
    'reduce png size',
    'compress png for website',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress PNG Online Free – Reduce PNG File Size',
    description:
      'Reduce PNG file size while preserving transparency for free. No uploads — works 100% in your browser. Alpha channel fully preserved.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress PNG Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress PNG Online Free – Reduce PNG File Size',
    description:
      'Reduce PNG file size while keeping transparency. 100% browser-based — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress PNG Online', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Online PNG Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based PNG compressor. Reduces file size while preserving transparency. No upload required.',
      featureList: [
        'Compress PNG images online',
        'Preserve PNG transparency and alpha channel',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Compress PNG for websites and email',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a PNG file and when should I use it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG (Portable Network Graphics) is a lossless image format that supports transparency. Use PNG for logos, icons, screenshots, and images requiring transparent backgrounds or sharp edges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing a PNG affect its transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. PNG transparency (alpha channel) is fully preserved. Transparent pixels stay transparent, semi-transparent pixels keep their exact opacity. The compressed PNG looks identical to the original over any background.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can I reduce a PNG file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Logos and flat-color graphics reduce by 40–70%. Screenshots reduce by 40–65%. PNG photos reduce by 30–60%. For photos without transparency, converting to JPG achieves 60–90% reduction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is PNG compression lossless?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional PNG is lossless. Our tool applies near-lossless techniques at lower quality settings for greater size reduction while keeping quality imperceptible on screen. Output is always saved as PNG with full alpha channel support.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I use PNG instead of JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use PNG when you need transparent backgrounds, sharp edges, logos with flat colors, or lossless quality for further editing. Use JPG for photographs without transparency — JPG compresses photos far more efficiently.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a PNG image for a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your PNG, set quality to 75–85 for logos or 60–70 for screenshots, then download. For even smaller files, convert the compressed PNG to WebP — WebP lossless mode is typically 26% smaller than PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress PNG without losing sharp edges and text?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. At quality 80 and above, logos, text, and sharp edges are preserved with no visible degradation. The algorithm is conservative on high-contrast edges and text.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my PNG files safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All PNG compression happens in your browser using JavaScript. Files are never uploaded to any server, never stored, and never transmitted anywhere. No accounts, no watermarks, no limits.',
          },
        },
      ],
    },
  ],
}

export default function CompressPngLayout({ children }: { children: React.ReactNode }) {
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
