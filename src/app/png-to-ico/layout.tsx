import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/png-to-ico/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'PNG to ICO Converter Online Free — Create Favicon from PNG',
  description:
    'Free online PNG to ICO converter. Create a favicon.ico from any PNG, JPG, or WebP image instantly — 6 sizes included (16×16 to 256×256), no upload, 100% browser-based.',
  keywords: [
    'png to ico',
    'png to ico converter',
    'convert png to ico',
    'favicon generator',
    'create favicon from png',
    'png to favicon',
    'image to ico',
    'favicon maker online free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG to ICO Converter Online Free — Create Favicon',
    description:
      'Convert PNG to ICO favicon instantly. 6 sizes included (16×16 to 256×256). No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'PNG to ICO Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to ICO Converter Online Free',
    description: 'Create favicon.ico from PNG instantly. 6 sizes. No uploads — 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'PNG to ICO', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — PNG to ICO Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based PNG to ICO favicon generator. Converts PNG, JPG, or WebP images to multi-size ICO files containing 16×16, 32×32, 48×48, 64×64, 128×128, and 256×256 variants. No file upload required.',
      featureList: [
        'Convert PNG to ICO online',
        'Create favicon.ico from PNG, JPG, or WebP',
        '6 sizes in one ICO file (16, 32, 48, 64, 128, 256px)',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Create a Favicon ICO from PNG Online',
      description:
        'Convert a PNG logo or icon to a multi-size favicon.ico file for your website — free, browser-based, no upload required.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'PNG, JPG, or WebP image file (square preferred)' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg PNG to ICO Converter', url: PAGE_URL },
        { '@type': 'HowToTool', name: 'Modern web browser with JavaScript enabled' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your PNG, JPG, or WebP file. A square image (1:1 ratio) produces the sharpest favicon at small sizes.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'ICO generation runs automatically',
          text: 'Your image is resized to 6 standard favicon sizes (16, 32, 48, 64, 128, 256 pixels) and packed into a single .ico file in your browser.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and add to your website',
          text: 'Click Download to save favicon.ico. Place it in the root of your website and add <link rel="icon" href="/favicon.ico"> to your HTML head.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size should a favicon PNG be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For best results, use a square PNG of at least 256×256 pixels. The converter will resize it to all required favicon sizes (16, 32, 48, 64, 128, 256px). A larger source image produces sharper results at small sizes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use the downloaded favicon.ico on my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload favicon.ico to your website root directory, then add this tag to your HTML head: <link rel="icon" href="/favicon.ico">. For modern browsers, also add <link rel="icon" href="/favicon.svg" type="image/svg+xml"> or a 32px PNG for better quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the ICO file contain multiple sizes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The generated ICO contains 6 sizes: 16×16, 32×32, 48×48, 64×64, 128×128, and 256×256 pixels. Browsers automatically select the most appropriate size based on display context.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a JPG or WebP image to create a favicon?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool accepts PNG, JPG, and WebP images. For logos with transparent backgrounds, use a PNG source — transparency is preserved in the ICO output.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All ICO generation happens entirely in your browser. Your files never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function PngToIcoLayout({ children }: { children: React.ReactNode }) {
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
