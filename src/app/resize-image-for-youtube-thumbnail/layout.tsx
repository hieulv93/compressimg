import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-youtube-thumbnail/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for YouTube Thumbnail — 1280×720 Free',
  description:
    'Resize images to the perfect YouTube thumbnail size (1280×720) and channel art (2560×1440) free. HEIC from iPhone supported. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for YouTube Thumbnail — 1280×720 Free | CompressImg',
    description:
      'Resize any image to 1280×720 YouTube thumbnail or 2560×1440 channel art. HEIC from iPhone supported. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image for YouTube — CompressImg' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for YouTube Thumbnail — 1280×720 Free',
    description:
      'Perfect 1280×720 thumbnails and channel art in seconds. No upload, no account needed.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize for YouTube', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'YouTube Thumbnail Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to YouTube specifications. Supports Thumbnail (1280×720), Channel Art (2560×1440), Profile Picture (800×800), and Community Post (1080×1080). HEIC files are automatically converted.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image for YouTube',
      description:
        'Resize any image to YouTube thumbnail or channel art dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select YouTube image type',
          text: 'Choose Thumbnail (1280×720), Channel Art (2560×1440), Profile (800×800), or Community Post (1080×1080).',
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
          name: 'Download and upload to YouTube Studio',
          text: 'Download the resized JPEG and upload it in YouTube Studio under Video Details → Thumbnail.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size should a YouTube thumbnail be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "1280×720px (16:9 aspect ratio) at under 2MB. This is YouTube's official recommendation and displays correctly at all sizes from mobile search to desktop watch page.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my YouTube thumbnail blurry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common cause is uploading a thumbnail smaller than 1280×720px. YouTube upscales it, creating blur. Resize to exactly 1280×720px using this tool and re-upload.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the YouTube channel art size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2560×1440px. YouTube crops this image for different devices — keep important content in the central 1546×423px safe zone to ensure it appears on all devices.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a HEIC photo as a YouTube thumbnail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube does not accept HEIC directly. Upload your HEIC file here — it is automatically converted to JPEG and resized to 1280×720px in one step.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this YouTube thumbnail resizer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No account, no watermark, no usage limits. All processing runs in your browser.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForYouTubeLayout({ children }: { children: React.ReactNode }) {
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
