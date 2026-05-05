import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/thumbnail-compressor/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Thumbnail Compressor Online Free — Reduce Thumbnail File Size',
  description:
    'Free thumbnail compressor for YouTube, gaming, and social media. Compress thumbnails under 2MB instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'thumbnail compressor',
    'compress thumbnail',
    'youtube thumbnail compressor',
    'reduce thumbnail size',
    'compress youtube thumbnail',
    'thumbnail file size reducer',
    'compress thumbnail online free',
    'gaming thumbnail compressor',
    'thumbnail image compressor',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Thumbnail Compressor Online Free — Reduce Thumbnail File Size',
    description:
      'Compress YouTube, gaming, and social media thumbnails under 2MB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Thumbnail Compressor Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thumbnail Compressor Online Free',
    description:
      'Compress YouTube and gaming thumbnails under 2MB. Free, no uploads, browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Thumbnail Compressor', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Thumbnail Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based thumbnail compressor. Reduce YouTube thumbnails, gaming thumbnails, and social media images to under 2MB. Supports JPG, PNG, WebP. No upload required.',
      featureList: [
        'Compress YouTube thumbnails online',
        'Compress gaming thumbnails (1280×720)',
        'Reduce thumbnail under 2MB for YouTube',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the file size limit for YouTube thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube requires thumbnails to be under 2MB (2,048KB). The recommended dimensions are 1280×720 pixels (16:9 aspect ratio). This tool compresses your thumbnail file to under 2MB while preserving the full 1280×720 resolution and visual quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a thumbnail without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set the quality slider to 80–85. At this setting, a 1280×720 JPG thumbnail compresses to 80–200KB with no visible quality loss when viewed on YouTube. The before/after comparison lets you check quality before downloading.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format should I use for YouTube thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG is the best format for YouTube thumbnails — it delivers the smallest file size for photos and graphic-heavy designs. PNG is better only if your thumbnail contains transparency or very sharp text edges. WebP is also accepted by YouTube and produces the smallest files, but some browsers may display it slightly differently.',
          },
        },
        {
          '@type': 'Question',
          name: 'My thumbnail is already 1280×720 — why is it over 2MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Design tools like Photoshop, Canva, and GIMP often export unoptimized files. A 1280×720 PNG exported from Canva can be 3–10MB. This compressor reduces the file to under 2MB by recompressing the image data — no dimension change needed. Use quality 80 as a starting point.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress thumbnails for Twitch, TikTok, and Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool compresses any JPG, PNG, or WebP image regardless of platform. Twitch panel images (recommended under 2.9MB), TikTok cover images (under 10MB), and Instagram post thumbnails all benefit from compression to speed up loading.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing a thumbnail reduce its dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This compressor reduces file size only — your thumbnail dimensions (e.g., 1280×720) remain unchanged. Compression removes redundant image data, not pixels. The output image is the same resolution as the input.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my thumbnail uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression runs entirely in your browser using JavaScript. Your thumbnail never leaves your device and is never sent to any server. This tool is 100% private and works offline after the page loads.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for gaming thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80 is the recommended setting for gaming thumbnails. Gaming thumbnails typically have high contrast, bold text, and vivid colors — quality 80 preserves all of these while reducing file size by 60–70%. If you need to go under 500KB, try quality 70.',
          },
        },
      ],
    },
  ],
}

export default function ThumbnailCompressorLayout({ children }: { children: React.ReactNode }) {
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
