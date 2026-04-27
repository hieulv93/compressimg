import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/png-to-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'PNG to JPG Converter Online Free — Convert PNG to JPEG',
  description:
    'Free online PNG to JPG converter. Reduce file size by 70–85%. No upload — 100% browser-based and private. Transparent areas filled with white background automatically.',
  keywords: [
    'png to jpg',
    'png to jpeg',
    'png to jpg converter',
    'convert png to jpg',
    'convert png to jpeg online',
    'png to jpg online free',
    'change png to jpg',
    'png to jpg free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG to JPG Converter Online Free',
    description:
      'Convert PNG to JPG instantly. Reduce file size by 70–85%. No uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'PNG to JPG Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to JPG Converter Online Free',
    description: 'Convert PNG to JPG instantly. Reduce file size by 70–85%. No uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'PNG to JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — PNG to JPG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based PNG to JPG converter. Reduces file size by 70–85% for photographs. Transparent areas filled with white. No file upload required.',
      featureList: [
        'Convert PNG to JPG online',
        'Convert PNG to JPEG online',
        'Transparent areas filled with white background',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Will converting PNG to JPG reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Converting PNG to JPG uses lossy compression, so some image data is discarded. At high quality settings, the difference is virtually invisible on screen. For logos, icons, or text-heavy images, compression artifacts may be more noticeable around sharp edges.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to transparency when converting PNG to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG does not support transparency. All transparent pixels in your PNG are replaced with a white background in the JPG output. If you need to preserve transparency, convert to WebP instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much smaller will my file be after converting PNG to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photographs saved as PNG, the JPG is typically 70–85% smaller. A 4MB PNG photo commonly becomes 400–800KB as JPG at quality 85. For screenshots and graphics, the reduction is 50–75%.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to convert PNG logos to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally not recommended. JPG introduces artifacts around sharp edges and text common in logos. For logos without transparency needs, WebP is a better choice — smaller files while keeping sharp edges clean.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert PNG to JPEG? Is JPEG the same as JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — JPEG and JPG are identical formats. This tool outputs a standard JPG file that can be opened by any application that reads JPEG images.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I convert multiple PNG files to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool converts one image at a time. For each file: upload, wait for conversion, download. For large batches, consider desktop software like ImageMagick or GIMP with batch export.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert PNG to JPG on an iPhone or Android?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS Safari and Android Chrome. Tap to select a PNG from your files, and download the converted JPG directly to your device — no app required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my PNG files uploaded to a server during conversion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser using the Canvas API. Your files never leave your device and are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function PngToJpgLayout({ children }: { children: React.ReactNode }) {
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
