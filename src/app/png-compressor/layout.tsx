import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/png-compressor/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'PNG Compressor Online Free — Reduce PNG File Size',
  description:
    'Free PNG compressor. Reduce PNG file size instantly while preserving transparency and sharp edges. No upload to server — 100% browser-based, no sign-up.',
  keywords: [
    'png compressor',
    'png file size reducer',
    'compress png free',
    'png image compressor',
    'reduce png size online',
    'png compressor online',
    'compress png without losing quality',
    'png size reducer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG Compressor Online Free — Reduce PNG File Size',
    description:
      'Compress PNG files instantly. Preserves transparency and sharp edges. 100% browser-based — your images never leave your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'PNG Compressor Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG Compressor Online Free',
    description: 'Reduce PNG file size while keeping transparency. No uploads, no sign-up.',
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
        { '@type': 'ListItem', position: 2, name: 'PNG Compressor', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free PNG Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based PNG compressor. Reduces file size while preserving transparency and sharp edges. No upload required.',
      featureList: [
        'Compress PNG images online for free',
        'Preserve PNG transparency (alpha channel)',
        'Reduce PNG file size for websites',
        'Compress PNG logos without quality loss',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress a PNG Online',
      description:
        'Compress PNG files with full transparency preserved — free, browser-based, no upload required.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'PNG image file up to 20 MB' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg PNG Compressor', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your PNG file',
          text: 'Click the upload area, drag and drop your PNG, or paste from clipboard. Supports PNG files up to 20 MB including those with transparency.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Adjust quality to balance size and detail',
          text: 'The default quality of 80 reduces file size significantly while keeping the image visually identical. Lower for maximum compression; raise for fine detail in logos and icons.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the compressed PNG',
          text: 'Compression completes instantly in your browser. Transparency is fully preserved in the output. No account, no watermark, no server upload.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a PNG compressor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A PNG compressor is a tool that reduces the file size of PNG images. PNG uses lossless compression, so standard PNG files can be large — especially for screenshots, illustrations, and web graphics. A PNG compressor applies additional compression to reduce the file size while maintaining image quality, transparency, and sharp edges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing a PNG remove transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. PNG transparency (alpha channel) is fully preserved during compression. Transparent pixels remain transparent, semi-transparent pixels keep their exact opacity level. The compressed PNG looks identical to the original over any background color.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can a PNG compressor reduce file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Logos and flat-color graphics: 40–70% reduction. Screenshots: 40–65% reduction. PNG photos: 30–55% reduction. For photographs without transparency, converting to JPG achieves even greater reduction (60–90%). Use PNG compression when transparency must be preserved.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I compress PNG or convert to WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For web use, converting to WebP lossless is the most efficient option — WebP lossless files are typically 26% smaller than optimized PNG. However, not all platforms accept WebP. For email attachments, WordPress uploads older than version 5.8, and platforms that only accept PNG, use PNG compression instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use to compress a PNG logo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For logos with flat colors and sharp text, quality 80–90 preserves edges and color accuracy. At quality 80, a typical logo PNG reduces by 50–65% with no visible difference. Avoid quality below 70 for logos — compression artifacts become visible on sharp color boundaries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a PNG screenshot without making text blurry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. At quality 80–85, text in screenshots remains sharp and readable. The compression algorithm is conservative on high-contrast edges and text outlines. If text sharpness is critical, use quality 85+ or keep the file as a lossless PNG at the maximum compression level.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this PNG compressor free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — completely free with no sign-up, no watermark, and no daily limit. All compression runs in your browser using JavaScript. Your PNG files are never uploaded to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my PNG files safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression happens in your browser. Your files never leave your device and are never transmitted to any server. This is especially important for logos containing proprietary branding, product mockups, and confidential screenshots.',
          },
        },
      ],
    },
  ],
}

export default function PngCompressorLayout({ children }: { children: React.ReactNode }) {
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
