import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-twitter/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for Twitter / X — Reduce Photo Size for Tweets',
  description:
    'Free online tool to compress images for Twitter and X. Reduce JPG, PNG file size before tweeting — keep quality, avoid double-compression. 100% browser-based, no upload.',
  keywords: [
    'compress image for twitter',
    'compress photo for twitter',
    'reduce image size twitter',
    'twitter image compressor',
    'compress image for x',
    'compress image before tweeting',
    'shrink photo twitter',
    'twitter photo size reducer',
    'compress jpg for twitter',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Twitter / X — Reduce Photo Size for Tweets',
    description:
      'Reduce JPG and PNG file size before tweeting. Avoid double-compression and keep photos sharp on the timeline — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for Twitter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for Twitter / X — Free Photo Size Reducer',
    description:
      "Compress photos before tweeting to avoid quality loss from Twitter's re-compression. 100% browser-based, no uploads.",
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
          name: 'Compress Image for Twitter',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for Twitter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for Twitter and X. Reduce JPG, PNG, WebP file size before tweeting to minimize double-compression and keep photos sharp on the timeline. No upload required.',
      featureList: [
        'Compress images before Twitter/X posting',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Avoid Twitter double-compression',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do my Twitter photos look blurry after uploading?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Twitter automatically compresses all uploaded images to control bandwidth. When you upload a large, high-resolution original, Twitter applies heavy lossy compression to reduce the file to its 300–500KB target — introducing visible softness, banding, and artifacts. Pre-compressing at quality 80 gives Twitter a file already near its target size, requiring minimal additional compression and preserving more of the original sharpness on the timeline.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image size is best for Twitter posts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For tweet images, upload at 1200×675px (16:9 ratio) for landscape photos, or 1200×1200px for square images. For your Twitter header/banner, use 1500×500px. Profile photos should be 400×400px square — Twitter applies a circular crop for display. Uploading at these exact dimensions prevents Twitter from resizing your image, which preserves quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file size should Twitter images be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Twitter enforces a 5MB limit for images attached to tweets. For best quality, compress photos to 300–700KB at quality 80 before uploading. This is close to Twitter's internal delivery target, meaning the platform applies minimal additional compression. Files under 1MB upload faster on mobile and give Twitter's compression algorithm a better starting point.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Twitter convert images to WebP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Twitter converts all uploaded images to WebP format for delivery in modern browsers, and falls back to JPG for older browsers. This happens server-side regardless of what format you upload. Because Twitter re-encodes your image anyway, uploading a pre-compressed JPG or PNG at quality 80 gives the best results — Twitter's WebP conversion of an already-optimized file introduces less additional quality loss.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image format to upload to Twitter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "For photographs, upload JPG at quality 80. For screenshots, infographics, and graphics with text, upload PNG — Twitter's conversion of PNG input to WebP generally preserves sharper text than converting from JPG. Avoid uploading WebP directly to Twitter, as the double WebP encoding may introduce additional artifacts.",
          },
        },
        {
          '@type': 'Question',
          name: 'How many images can I attach to one tweet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Twitter allows up to 4 images per tweet. When you attach multiple images, Twitter displays them in a 2×2 grid. Each image is compressed individually. For 4-image tweets, compress each photo to 200–500KB — this keeps total upload size manageable and gives Twitter's algorithm less to compress for each individual frame.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress Twitter images on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my Twitter images safe to compress with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing unreleased brand assets, promotional graphics, personal photos, and any content you have not yet published publicly.',
          },
        },
      ],
    },
  ],
}

export default function CompressForTwitterLayout({ children }: { children: React.ReactNode }) {
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
