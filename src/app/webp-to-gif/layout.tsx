import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/webp-to-gif/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'WebP to GIF Converter — Convert WebP to GIF Free Online',
  description:
    'Convert WebP to GIF free online. Turn any WebP image into a GIF file instantly. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'WebP to GIF Converter — Free Online',
    description: 'Convert WebP to GIF instantly. Free, no upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'WebP to GIF Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to GIF — Free Online Converter',
    description: 'Convert WebP to GIF free. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'WebP to GIF', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — WebP to GIF Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based WebP to GIF converter. Convert WebP images to GIF format instantly. No upload required.',
      featureList: [
        'Convert WebP to GIF online',
        'Instant conversion in your browser',
        'No file upload — 100% private',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert WebP to GIF Online',
      description: 'Convert WebP images to GIF in your browser — free, no upload required.',
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your WebP file',
          text: 'Click the upload area or drag and drop your WebP image. Files up to 20 MB are supported.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Automatic GIF conversion',
          text: 'Your WebP is converted to GIF format in your browser. The output is a static single-frame GIF.',
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
          name: 'Can it convert animated WebP to animated GIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool converts static WebP images to static GIF. Animated WebP to animated GIF conversion is complex and requires extracting individual frames — this tool does not currently support animated WebP input.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WebP to GIF preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF has limited transparency support (1-bit, on/off only). Transparent areas in your WebP are filled with white in the GIF output. If transparency preservation is important, convert to PNG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the GIF be larger than the WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. GIF is significantly less efficient than WebP. The GIF output will typically be 2–5× larger than the original WebP file. GIF is best used for compatibility with older platforms that do not support WebP.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser. Your WebP files are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function WebpToGifLayout({ children }: { children: React.ReactNode }) {
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
