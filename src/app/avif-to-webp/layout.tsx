import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/avif-to-webp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'AVIF to WebP Converter — Convert AVIF to WebP Free Online',
  description:
    'Convert AVIF to WebP free online. Smaller files than PNG, wider browser support than AVIF. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AVIF to WebP Converter — Free Online',
    description:
      'Convert AVIF to WebP instantly. Smaller than PNG, wider support than AVIF. No upload — browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AVIF to WebP Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to WebP — Free Online Converter',
    description: 'Convert AVIF to WebP free. Better compatibility, smaller than PNG. No upload.',
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
        { '@type': 'ListItem', position: 2, name: 'AVIF to WebP', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — AVIF to WebP Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires Chrome 85+, Firefox 93+, or Safari 16+',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based AVIF to WebP converter. Convert AVIF images to the widely supported WebP format for web use. No upload required.',
      featureList: [
        'Convert AVIF to WebP online',
        'Smaller output than PNG',
        'Wider browser support than AVIF',
        'Preserves transparency (alpha channel)',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert AVIF to WebP Online',
      description: 'Convert AVIF to WebP in your browser — free, no upload required.',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your AVIF file',
          text: 'Click the upload area or drag and drop your AVIF image. Files up to 20 MB are supported. Use Chrome 85+, Firefox 93+, or Safari 16+ for AVIF decoding.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Automatic WebP conversion',
          text: 'Your AVIF is decoded and converted to WebP at quality 92 in your browser. Transparency is preserved if present in the source.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the WebP file',
          text: 'Click Download to save the WebP. Use it in web projects, CMS uploads, or anywhere that supports WebP.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why convert AVIF to WebP instead of PNG or JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP offers a middle ground: smaller file sizes than PNG, better compatibility than AVIF (supported since Chrome 17, Firefox 65, Safari 14), and supports transparency. For web use, WebP is often the best choice when AVIF compatibility is a concern.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AVIF to WebP preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Both AVIF and WebP support transparency. This converter preserves the alpha channel — transparent areas in the AVIF remain transparent in the WebP output.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the WebP be larger or smaller than the AVIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is typically larger than AVIF — AVIF has the most efficient compression of any current format. However, WebP is significantly smaller than PNG and slightly smaller than JPEG at equivalent quality, making it a good choice for web delivery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which browsers support WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is supported in all modern browsers: Chrome 17+, Firefox 65+, Safari 14+, Edge 18+. WebP has much broader compatibility than AVIF, making it a safer choice for web images when you need to support slightly older browsers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser. Your AVIF files are never sent to any server — they stay on your device.',
          },
        },
      ],
    },
  ],
}

export default function AvifToWebpLayout({ children }: { children: React.ReactNode }) {
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
