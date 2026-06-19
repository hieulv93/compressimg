import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-pinterest/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for Pinterest — Free, Exact Dimensions',
  description:
    'Resize any image to exact Pinterest dimensions free. Standard pin (1000×1500), square pin (1000×1000), long pin (1000×2100). HEIC from iPhone supported. No upload — browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Pinterest — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any image to Pinterest standard pin, square pin, or long pin dimensions. HEIC supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image for Pinterest — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Pinterest — Free, Exact Dimensions',
    description:
      'Perfect Pinterest standard pin, square, and long pin sizes in seconds. No upload, no account.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for Pinterest', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pinterest Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to Pinterest specifications. Supports Standard Pin (1000×1500), Square Pin (1000×1000), Long Pin (1000×2100), and Infographic (1000×3000). HEIC files are automatically converted.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image for Pinterest',
      description:
        'Resize any image to Pinterest pin dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select Pinterest pin type',
          text: 'Choose Standard Pin (1000×1500), Square Pin (1000×1000), Long Pin (1000×2100), or Infographic (1000×3000).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your image',
          text: 'Upload your JPG, PNG, WebP, or HEIC file. iPhone HEIC photos are automatically converted to JPEG.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and pin to Pinterest',
          text: 'Download the resized image and upload it directly to Pinterest as a new Pin — no further cropping will occur.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best Pinterest pin size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1000×1500px (2:3 ratio) is the recommended Pinterest standard pin size. It takes up 50% more vertical space than a square pin, giving it more feed visibility and higher click-through rates.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum Pinterest pin size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pinterest supports pins up to 1:3 ratio tall — roughly 1000×3000px for a standard 1000px-wide pin. Pinterest truncates pins taller than 1:3 in the feed, showing a "See more" button.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size should Pinterest infographics be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1000×3000px (1:3 ratio) is the maximum visible height for Pinterest infographics. Pinterest clips anything taller in the feed preview. For very long infographics, consider splitting into multiple pins.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a HEIC photo for Pinterest?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pinterest does not accept HEIC files. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen Pinterest dimensions in one step.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this Pinterest image resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForPinterestLayout({ children }: { children: React.ReactNode }) {
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
