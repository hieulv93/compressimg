import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-instagram/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for Instagram — Free, Exact Dimensions | CompressImg',
  description:
    'Resize any image to exact Instagram dimensions free. Square (1080×1080), Portrait (1080×1350), Story (1080×1920). HEIC from iPhone supported. No upload — browser-based.',
  keywords: [
    'resize image for instagram',
    'instagram image size',
    'instagram photo size',
    'resize photo for instagram',
    'instagram post size',
    'instagram story size',
    'instagram image dimensions',
    'resize instagram photo free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Instagram — Free, Exact Dimensions | CompressImg',
    description:
      'Resize any photo to exact Instagram dimensions — square, portrait, story, or reel. HEIC from iPhone supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image for Instagram — CompressImg' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Instagram — Free, Exact Dimensions',
    description:
      'Square, portrait, story, reel — resize any photo to the right Instagram size instantly.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for Instagram', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Instagram Image Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to exact Instagram dimensions. Supports square posts (1080×1080), portrait posts (1080×1350), stories and reels (1080×1920), and landscape posts (1080×566). HEIC files from iPhone are automatically converted.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image for Instagram',
      description:
        'Resize any photo to exact Instagram dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select Instagram format',
          text: 'Choose your format: Square (1080×1080), Portrait (1080×1350), Story (1080×1920), or Landscape (1080×566).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your image',
          text: 'Upload your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted to JPEG.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and post to Instagram',
          text: 'Download the resized JPEG at the exact Instagram dimensions and upload directly to Instagram.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best image size for an Instagram post?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For maximum feed visibility, use Portrait (1080×1350px, 4:5 ratio). For a clean grid, use Square (1080×1080px). For Stories and Reels, use 1080×1920px (9:16).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Instagram compress images when you upload?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Instagram recompresses all images to JPEG. Upload at exactly 1080px wide to skip the resampling step and preserve maximum quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I upload a HEIC photo from my iPhone to Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram does not accept HEIC files directly. Use this tool to convert HEIC to JPEG and resize to the correct Instagram dimensions in one step.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I upload the wrong size to Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram automatically crops images outside its accepted ratio range (4:5 to 1.91:1). Always resize to the correct dimensions before uploading to prevent unwanted cropping.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this Instagram image resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForInstagramLayout({ children }: { children: React.ReactNode }) {
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
