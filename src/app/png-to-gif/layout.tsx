import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/png-to-gif/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'PNG to GIF Converter — Convert PNG to GIF Free Online',
  description:
    'Convert PNG to GIF free online. Turn any PNG image into a GIF file instantly. No upload — 100% browser-based.',
  keywords: [
    'png to gif',
    'convert png to gif',
    'png to gif online',
    'png to gif free',
    'png gif converter',
    'image to gif',
    'png to animated gif',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG to GIF Converter — Free Online',
    description: 'Convert PNG to GIF instantly. Free, no upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'PNG to GIF Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to GIF — Free Online Converter',
    description: 'Convert PNG to GIF free. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'PNG to GIF', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — PNG to GIF Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based PNG to GIF converter. Convert PNG images to GIF format instantly. No upload required.',
      featureList: [
        'Convert PNG to GIF online',
        'Instant conversion in your browser',
        'No file upload — 100% private',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert PNG to GIF Online',
      description: 'Convert PNG images to GIF in your browser — free, no upload required.',
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your PNG file',
          text: 'Click the upload area or drag and drop your PNG image. Files up to 20 MB are supported.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Automatic GIF conversion',
          text: 'Your PNG is converted to GIF format in your browser. The output is a static single-frame GIF.',
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
            text: 'No. Converting a single PNG creates a static (non-animated) single-frame GIF. To create an animated GIF, you need multiple source images or video frames.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does PNG to GIF preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF has limited transparency support — only 1-bit (on/off) transparency, not the full alpha channel that PNG supports. Transparent areas in your PNG are filled with white in the GIF output.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the GIF quality look the same as the PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF is limited to 256 colors, so photographic images may show visible color banding or dithering compared to the original PNG. Simple graphics with few colors convert cleanly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser. Your PNG files are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function PngToGifLayout({ children }: { children: React.ReactNode }) {
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
