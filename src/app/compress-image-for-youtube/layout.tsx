import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-youtube/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for YouTube — Reduce Thumbnail & Banner File Size',
  description:
    'Free online tool to compress YouTube thumbnails, channel banners, and profile photos. Reduce JPG, PNG size before uploading. 100% browser-based, no upload.',
  keywords: [
    'compress image for youtube',
    'compress youtube thumbnail',
    'reduce youtube thumbnail file size',
    'youtube thumbnail size reducer',
    'compress youtube banner',
    'youtube image compressor',
    'reduce image size youtube',
    'compress image before youtube upload',
    'youtube thumbnail file size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for YouTube — Reduce Thumbnail & Banner File Size',
    description:
      'Reduce JPG and PNG file size for YouTube thumbnails, channel art, and profile photos. Free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for YouTube' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for YouTube — Free Thumbnail Size Reducer',
    description:
      'Compress YouTube thumbnails and channel art before uploading. 100% browser-based, no uploads.',
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
          name: 'Compress Image for YouTube',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for YouTube',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for YouTube. Reduce JPG, PNG, WebP file size for thumbnails, channel banners, and profile photos. No upload required.',
      featureList: [
        'Compress YouTube thumbnails before upload',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Stay under YouTube 2MB thumbnail limit',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image for YouTube',
      description:
        'Reduce image file size before uploading to YouTube to stay under thumbnail limits and speed up channel art uploads.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area, drag and drop your image, or paste from clipboard with Ctrl+V. Supports JPG, PNG, and WebP files up to 20MB.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 85',
          text: "Quality 85 reduces a 1280×720px thumbnail from several MB to under 500KB with no visible quality loss — well within YouTube's 2MB limit while keeping text and faces sharp.",
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload to YouTube',
          text: 'Download the compressed file, then upload it as your video thumbnail or channel art in YouTube Studio. The compressed image loads faster in search results and suggested video feeds.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the maximum file size for a YouTube thumbnail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube allows thumbnails up to 2MB in file size. A 1280×720px JPG at quality 85 is typically 150–400KB — well within this limit. If your thumbnail exceeds 2MB, compress it to quality 80–85 to bring it under the limit without visible quality loss.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image size for a YouTube thumbnail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The recommended YouTube thumbnail size is 1280×720px (16:9 ratio). This is the minimum resolution YouTube recommends for HD thumbnails. Thumbnails smaller than 1280×720px may appear blurry on large screens. Keep the file size under 2MB and use JPG format for photographs or PNG for graphics with text.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format should I use for YouTube thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG is the best format for YouTube thumbnails with photos, faces, or gradients — it compresses efficiently and stays under the 2MB limit. Use PNG for thumbnails with text overlays, logos, or sharp color blocks where JPG compression artifacts would be visible. YouTube accepts JPG, PNG, GIF, BMP, and WebP.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing YouTube thumbnails affect click-through rate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Compression at quality 80–85 is visually indistinguishable from the original at thumbnail display sizes (approx. 320×180px on desktop). Viewers cannot see compression artifacts at these sizes. A faster-loading, properly-sized thumbnail can actually improve perceived quality on slow connections compared to a large file that loads progressively.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the YouTube channel banner dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube channel art (banner) should be 2560×1440px with a maximum file size of 6MB. The safe area visible on all devices is the center 1546×423px. Upload at 2560×1440px and keep all important text and logos within the center safe zone — the edges are cropped on mobile and TV displays.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make my YouTube thumbnail sharper?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with a high-resolution source image (at least 1280×720px). Apply any sharpening in your design tool before compressing. Export at quality 85 in JPG — this retains fine detail while keeping the file small. Avoid re-saving the same JPG multiple times, as each save adds compression artifacts. For text-heavy thumbnails, use PNG to preserve sharp edges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use WebP for YouTube thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, YouTube accepts WebP thumbnails. However, JPG at quality 85 typically produces comparable file sizes to WebP for photographs, and JPG is more universally compatible if you share the thumbnail image elsewhere. Use WebP only if your design tool exports it natively and you do not need the file for other purposes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my thumbnails safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression happens entirely in your browser — no image is ever uploaded to a server. Your thumbnail files never leave your device, making it safe to compress unreleased video thumbnails and brand assets before uploading to YouTube Studio.',
          },
        },
      ],
    },
  ],
}

export default function CompressForYouTubeLayout({ children }: { children: React.ReactNode }) {
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
