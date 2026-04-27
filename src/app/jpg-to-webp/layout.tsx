import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/jpg-to-webp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'JPG to WebP Converter Online Free — Convert JPEG to WebP',
  description:
    'Free online JPG to WebP converter. Convert JPEG to WebP and reduce file size by 25–35% with no quality loss. No upload — 100% browser-based and private.',
  keywords: [
    'jpg to webp',
    'jpeg to webp',
    'jpg to webp converter',
    'convert jpg to webp',
    'convert jpeg to webp online',
    'jpg to webp online free',
    'change jpg to webp',
    'compress jpg to webp',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'JPG to WebP Converter Online Free',
    description:
      'Convert JPG and JPEG files to WebP — reduce file size by 25–35% with no visible quality loss. No uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'JPG to WebP Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to WebP Converter Online Free',
    description: 'Convert JPG to WebP and save 25–35% file size. No uploads — 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'JPG to WebP', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — JPG to WebP Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based JPG to WebP converter. Converts JPEG files to WebP with 25–35% smaller file size. No file upload required.',
      featureList: [
        'Convert JPG to WebP online',
        'Convert JPEG to WebP online',
        '25–35% smaller file size than JPG',
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
          name: 'How much smaller is WebP compared to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is typically 25–35% smaller than JPG at equivalent visual quality. For a typical 500KB JPG photo, the WebP equivalent is around 325–375KB. The exact savings depend on image content — photos with fine detail or gradients benefit most from WebP compression.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does converting JPG to WebP lose quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At default quality settings, the quality difference between a JPG and its WebP conversion is virtually invisible to the human eye, while file size drops significantly. Both formats use lossy compression, so some minimal re-encoding loss occurs. For best results, convert from the original source rather than re-converting multiple times.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is WebP supported in all browsers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is supported in all modern browsers: Chrome, Firefox, Safari 14+, Edge, and Opera. Global browser support exceeds 95% as of 2025. The main exceptions are very old browsers (IE11, Safari before 2020) and some email clients (Outlook 2019 and earlier).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use WebP images for email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not recommended. Many email clients — including older Outlook versions and some corporate email systems — do not display WebP images correctly. For email attachments and newsletter images, use JPG for universal compatibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WebP support transparency like PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WebP supports an alpha channel (transparency), making it a potential replacement for PNG on the web. When you convert a JPG to WebP, the output does not have transparency since JPG has no alpha channel. To get a WebP with transparency, start from a PNG with transparent areas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert JPG to WebP on mobile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers. Tap to select a photo from your camera roll, and the WebP file downloads directly to your device. No app installation required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What software opens WebP files?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All modern browsers open WebP natively. On Windows, Photos app (Windows 10 v1809+) and Paint 3D support WebP. On macOS, Preview supports WebP from macOS Ventura (2022). Photoshop added native WebP support in version 23.2 (2022). For older software, convert WebP back to JPG using our WebP to JPG tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my JPG files uploaded when converting to WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser using the Canvas API. Your JPG files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone.',
          },
        },
      ],
    },
  ],
}

export default function JpgToWebpLayout({ children }: { children: React.ReactNode }) {
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
