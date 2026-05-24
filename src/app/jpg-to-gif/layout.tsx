import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/jpg-to-gif/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'JPG to GIF Converter — Convert JPEG to GIF Free Online',
  description:
    'Convert JPG to GIF free online. Turn any JPEG photo into a GIF file instantly. No upload — 100% browser-based.',
  keywords: [
    'jpg to gif',
    'jpeg to gif',
    'convert jpg to gif',
    'jpg to gif online',
    'jpg to gif free',
    'jpeg gif converter',
    'photo to gif',
    'image to gif',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'JPG to GIF Converter — Free Online',
    description: 'Convert JPG to GIF instantly. Free, no upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'JPG to GIF Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to GIF — Free Online Converter',
    description: 'Convert JPG to GIF free. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'JPG to GIF', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — JPG to GIF Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based JPG to GIF converter. Convert JPEG photos to GIF format instantly. No upload required.',
      featureList: [
        'Convert JPG to GIF online',
        'Instant conversion in your browser',
        'No file upload — 100% private',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert JPG to GIF Online',
      description: 'Convert JPEG images to GIF in your browser — free, no upload required.',
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your JPG file',
          text: 'Click the upload area or drag and drop your JPEG image. Files up to 20 MB are supported.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Automatic GIF conversion',
          text: 'Your JPEG is converted to GIF format in your browser. The output is a static single-frame GIF.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the GIF file',
          text: 'Click Download to save the GIF. Use it anywhere GIF is accepted — websites, email, messaging apps.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Will the GIF be animated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Converting a single JPG creates a static (non-animated) single-frame GIF. To create an animated GIF, you need multiple source images or frames.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the GIF look the same quality as the JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF is limited to 256 colors, while JPEG supports millions of colors. Photographic images often show visible color banding or dithering in GIF. For photos, JPG or WebP is a better format — GIF is best for simple graphics.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is GIF worse than JPG for photos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF was designed in 1987 for simple web graphics, not photographs. Its 256-color limit causes visible color reduction on photographic images. JPEG handles millions of colors and is always the better choice for photos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser. Your JPG files are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function JpgToGifLayout({ children }: { children: React.ReactNode }) {
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
