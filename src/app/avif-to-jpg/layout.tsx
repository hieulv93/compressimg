import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/avif-to-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'AVIF to JPG Converter — Convert AVIF to JPEG Free Online',
  description:
    'Convert AVIF to JPG free online. Transform modern AVIF images to universally compatible JPEG instantly. No upload — 100% browser-based.',
  keywords: [
    'avif to jpg',
    'avif to jpeg',
    'convert avif to jpg',
    'avif to jpg online',
    'avif to jpg free',
    'avif converter',
    'avif to jpeg converter',
    'avif file to jpg',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AVIF to JPG Converter — Free Online',
    description:
      'Convert AVIF to JPG instantly. Make AVIF images compatible everywhere. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AVIF to JPG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to JPG — Free Online Converter',
    description:
      'Convert AVIF to JPG free. Make AVIF images universally compatible. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'AVIF to JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — AVIF to JPG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires Chrome 85+, Firefox 93+, or Safari 16+',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based AVIF to JPG converter. Convert modern AVIF images to universally compatible JPEG. No file upload, no account required.',
      featureList: [
        'Convert AVIF to JPG online',
        'Universal JPG compatibility',
        'High quality JPEG output at 92%',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on Chrome, Firefox, and Safari',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert AVIF to JPG Online',
      description:
        'Convert modern AVIF images to universally compatible JPG — free, browser-based, no upload required.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [{ '@type': 'HowToSupply', name: 'AVIF image file up to 20 MB' }],
      tool: [
        { '@type': 'HowToTool', name: 'CompressImg AVIF to JPG Converter', url: PAGE_URL },
        {
          '@type': 'HowToTool',
          name: 'Modern web browser with JavaScript enabled (Chrome 85+, Firefox 93+)',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your AVIF file',
          text: 'Click the upload area or drag and drop your AVIF image. AVIF files up to 20 MB are supported. Use Chrome or Firefox for best compatibility.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Conversion to JPG runs automatically',
          text: 'Your AVIF is decoded and converted to JPG at quality 92 in your browser — no server upload. The output is universally compatible with Windows, macOS, iOS, Android and all email clients.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the JPG file',
          text: 'Click Download to save the JPG. The result opens in any image viewer, email client, CMS or social media platform without needing AVIF support.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why convert AVIF to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF is a modern image format with excellent compression, but it is not yet supported in all applications, email clients, and older software. Converting AVIF to JPG makes the image universally compatible — JPG opens in every image viewer, web browser, email client, and photo editor without plugins.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is an AVIF file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF (AV1 Image File Format) is a modern image format based on the AV1 video codec. It achieves 50% smaller files than JPEG at equivalent visual quality. AVIF is supported in Chrome 85+, Firefox 93+, and Safari 16+, and is increasingly used by web services for efficient image delivery. However, it is not universally supported in older tools and platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the JPG look the same as the AVIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 92, the JPG output will look virtually identical to the AVIF for normal viewing. AVIF may show slightly better quality at very small file sizes due to its superior compression algorithm, but at quality 92 JPEG, the difference is imperceptible on screen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the JPG file be larger than the AVIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — AVIF has more efficient compression than JPEG. A 500KB AVIF image will typically convert to a 1–2MB JPG at quality 92. If you need a smaller JPG, use the Compress Image tool after converting to reduce the file size further.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AVIF support transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF supports transparency (alpha channel). When converting to JPG, this tool fills transparent areas with white since JPG does not support transparency. If you need to preserve transparency, convert to PNG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which browsers support AVIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF is supported in Chrome 85+, Firefox 93+, and Safari 16+ (macOS Ventura and iOS 16). Edge also supports AVIF. Older browsers including IE11 and older versions of Safari do not support AVIF. This converter requires a modern browser to decode AVIF files.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my AVIF files safe to convert here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All conversion happens entirely in your browser using the HTML5 Canvas API — no file is ever sent to a server. Your AVIF files stay on your device throughout the entire process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress the JPG further after converting from AVIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. After converting AVIF to JPG, use the Compress Image tool to reduce file size further. You can target specific sizes like 1MB, 500KB, or 200KB depending on where you need to upload the image.',
          },
        },
      ],
    },
  ],
}

export default function AvifToJpgLayout({ children }: { children: React.ReactNode }) {
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
