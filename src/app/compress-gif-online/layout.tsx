import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-gif-online/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'GIF Compressor Online Free — Compress Animated GIF File Size',
  description:
    'Free GIF compressor and animated GIF size reducer. Reduce GIF file size by up to 70% without losing animation. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress gif online',
    'gif compressor',
    'reduce gif size',
    'gif file size reducer',
    'compress animated gif',
    'gif optimizer online',
    'shrink gif',
    'gif compression free',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'GIF Compressor Online Free — Compress Animated GIF File Size',
    description:
      'Reduce animated GIF file size by up to 70% without losing animation. 100% browser-based, no uploads.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress GIF Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF Compressor Online Free — Compress Animated GIF',
    description: 'Reduce animated GIF file size by up to 70%. Browser-based, no uploads, free.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress GIF Online', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress GIF Online',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based GIF compressor. Reduce animated GIF file size by up to 70% by optimizing color palette and frame rate. No file upload required — compression runs entirely in your browser.',
      featureList: [
        'Compress animated GIF files',
        'Reduce file size by up to 70%',
        'Adjustable quality and frame rate',
        'No file upload — 100% browser-based',
        'Preserves animation',
        'Free with no limits',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does GIF compression work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF compression works by reducing the number of colors in the color palette (from 256 to fewer) and optionally reducing the frame rate by skipping frames. Fewer colors means smaller file size. Reducing from 256 colors to 64 colors typically cuts file size by 40–60% with minimal visible change for most animations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will compressing a GIF lose the animation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This tool preserves the animation — all frames are retained and the GIF continues to animate after compression. The "Frame Skip" option reduces the number of frames to lower file size further, which reduces animation smoothness but keeps the animation playing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can I reduce a GIF file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typical reduction is 30–70% depending on the original GIF content. GIFs with few colors compress more easily. GIFs with complex photographic content (many colors) compress less. Using quality 10 and frame skip 2 together can reduce a 5MB GIF to under 2MB in most cases.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 10 (default) is a good balance between file size and visual quality for most GIFs. Quality 1 produces the smallest file but may show visible color banding. Quality 20–30 is better for GIFs with gradients or many colors. Start at 10 and check the result — reduce to 5 if you need a smaller file.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my GIF uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All GIF processing runs entirely in your browser using JavaScript and Web Workers. Your GIF file is never sent to any server. The compression happens locally on your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is frame skip and should I use it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Frame skip removes every Nth frame from the animation. Frame skip 2 keeps every other frame, halving the number of frames and reducing file size by roughly 40-50% on top of color compression. The animation will play at half the original frame rate. For smooth animations (30fps), frame skip 2 produces 15fps which is usually still smooth enough. For slow animations, use frame skip 1 (no skip).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress multiple GIFs at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool processes one GIF at a time for the best results and to avoid browser memory issues. For batch compression of multiple images (JPG, PNG, WebP), use the Batch Image Compressor tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is GIF compression slower than JPEG compression?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF compression is more complex than JPEG because each frame must be decoded, re-colored, and re-encoded individually. A 5MB GIF with 50 frames at 500×500px takes 5–15 seconds in the browser. This is normal — the compression is running entirely in your browser without any server, so it takes a few extra seconds.',
          },
        },
      ],
    },
  ],
}

export default function CompressGifLayout({ children }: { children: React.ReactNode }) {
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
