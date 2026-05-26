import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-600x600/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 600×600 Pixels — Free Online | CompressImg',
  description:
    'Resize any image to 600×600px — US passport photo (2×2 inch at 300 DPI), WooCommerce thumbnail, eBay listing, podcast art. Free, browser-based, no upload.',
  keywords: [
    'resize image to 600x600',
    '600x600 pixels',
    '600x600 image',
    'resize photo to 600x600',
    '600 x 600 pixel image',
    'resize image 600 600',
    '600x600 passport photo',
    '600x600 woocommerce',
    'resize to 600x600 free',
    '600 pixel square image',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 600×600 Pixels — Free Online | CompressImg',
    description:
      'Resize any image to exactly 600×600px. US passport, WooCommerce thumbnail, eBay. 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 600x600' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 600×600px — Free',
    description:
      'US passport (2×2 in at 300 DPI), WooCommerce thumbnail, eBay listing — resize to 600×600 instantly.',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resize Image',
          item: `${SITE_URL}/resize-image/`,
        },
        { '@type': 'ListItem', position: 3, name: 'Resize to 600×600', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: '600×600 Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize any image to exactly 600×600 pixels — the US passport photo size (2×2 inch at 300 DPI), WooCommerce default thumbnail, eBay minimum, and podcast art minimum. HEIC from iPhone converted automatically.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to 600×600 Pixels',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Upload your JPG, PNG, WebP, or HEIC file. HEIC from iPhone is converted automatically.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Resize to 600×600',
          text: 'The tool resizes your image to exactly 600×600 pixels.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download',
          text: 'Download the 600×600px JPEG and upload it to your portal, marketplace, or print service.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is 600×600px used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'US passport and visa photos (2×2 inch at 300 DPI), WooCommerce default product thumbnail, eBay listing minimum, podcast and album art minimum (Apple Podcasts), and government portal uploads (TSA PreCheck, Global Entry).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is 600×600px the same as a 2×2 inch photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, at 300 DPI. 2 inches × 300 DPI = 600 pixels. A 600×600px JPEG printed at 300 DPI measures exactly 2×2 inches — the US passport photo standard.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this tool free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens in your browser.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageTo600x600Layout({ children }: { children: React.ReactNode }) {
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
