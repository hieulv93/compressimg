import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/png-to-webp/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'PNG to WebP Converter Online Free — Convert PNG to WebP',
  description:
    'Free online PNG to WebP converter. Convert PNG to WebP instantly — 26–80% smaller, preserves transparency, no upload, 100% browser-based and private.',
  keywords: [
    'png to webp',
    'png to webp converter',
    'convert png to webp',
    'png to webp online free',
    'change png to webp',
    'png converter to webp',
    'convert png image to webp',
    'png to webp free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG to WebP Converter Online Free',
    description:
      'Convert PNG files to WebP — 26–80% smaller, preserves transparency, works in all modern browsers. No uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'PNG to WebP Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to WebP Converter Online Free',
    description:
      'Convert PNG to WebP instantly. Preserves transparency. No uploads — 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'PNG to WebP', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — PNG to WebP Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based PNG to WebP converter. Converts PNG files to WebP format, preserving transparency. Produces smaller files for faster web delivery. No file upload required.',
      featureList: [
        'Convert PNG to WebP online',
        'Preserves transparency (alpha channel)',
        'Smaller WebP output for faster web pages',
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
          name: 'How much smaller is WebP compared to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is typically 26% smaller than lossless PNG for equivalent image quality in lossless mode, and can be 60–80% smaller when using lossy WebP compression compared to a PNG of the same visual quality. For a typical 500KB PNG logo with transparency, the WebP equivalent is often 100–200KB — a substantial reduction that speeds up web page loading.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does converting PNG to WebP lose quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool converts PNG to lossy WebP at a quality setting of approximately 92. For most images, this produces a result that is visually indistinguishable from the original PNG at a significantly smaller file size. If you need a true lossless WebP, you would need a server-side conversion tool such as cwebp with the -lossless flag.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does PNG to WebP conversion preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WebP supports full alpha channel transparency, the same as PNG. When you convert a PNG with a transparent background to WebP, the transparency is preserved in the output file exactly. Logos, icons, and product cutouts with transparent backgrounds all convert correctly from PNG to WebP.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use WebP images on all websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is supported by all modern browsers, covering over 95% of users globally as of 2025. If your audience includes users on very old browsers (Internet Explorer 11, Safari before 2020), you may need a PNG fallback. For most web projects, serving WebP without a fallback is safe and delivers meaningful performance benefits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I open a WebP file in Photoshop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Photoshop added native WebP support in version 23.2, released in 2022. If you are using Photoshop CC 2022 or later, you can open WebP files directly. Older versions including Photoshop CS6 and CC versions before 2022 cannot open WebP natively — convert WebP back to PNG to open it in older software.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert PNG to WebP on mobile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers. Tap the upload area to select a PNG from your device, and the converted WebP file downloads directly to your device. No app installation is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between PNG and WebP for web images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG is a lossless format with universal compatibility — supported everywhere including email clients, print services, and all software. WebP is a modern format optimized for web delivery: smaller file sizes at equivalent quality, with support for both lossless and lossy compression and full alpha transparency. For web delivery, WebP is the better choice; for print, email, or desktop software, PNG is safer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my PNG files uploaded to a server when converting to WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser using the Canvas API. Your PNG files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone, making the tool completely private with no data transmitted.',
          },
        },
      ],
    },
  ],
}

export default function PngToWebpLayout({ children }: { children: React.ReactNode }) {
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
