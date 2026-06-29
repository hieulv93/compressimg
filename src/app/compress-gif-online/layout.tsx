import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-gif-online')

export const metadata: Metadata = {
  title: 'GIF Compressor Online Free — Compress Animated GIF File Size',
  description:
    'Free GIF compressor and animated GIF size reducer. Reduce GIF file size by up to 70% without losing animation. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'GIF Compressor Online Free — Compress Animated GIF File Size',
    description:
      'Reduce animated GIF file size by up to 70% without losing animation. 100% browser-based, no uploads.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress GIF Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF Compressor Online Free — Compress Animated GIF',
    description: 'Reduce animated GIF file size by up to 70%. Browser-based, no uploads, free.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress GIF Online', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'GIF Compressor Online Free — Compress Animated GIF File Size',
    description:
      'Free GIF compressor and animated GIF size reducer. Reduce GIF file size by up to 70% without losing animation. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'How does GIF compression work?',
        answer:
          'GIF compression works by reducing the number of colors in the color palette (from 256 to fewer) and optionally reducing the frame rate by skipping frames. Fewer colors means smaller file size. Reducing from 256 colors to 64 colors typically cuts file size by 40–60% with minimal visible change for most animations.',
      },
      {
        question: 'Will compressing a GIF lose the animation?',
        answer:
          'No. This tool preserves the animation — all frames are retained and the GIF continues to animate after compression. The "Frame Skip" option reduces the number of frames to lower file size further, which reduces animation smoothness but keeps the animation playing.',
      },
      {
        question: 'How much can I reduce a GIF file size?',
        answer:
          'Typical reduction is 30–70% depending on the original GIF content. GIFs with few colors compress more easily. GIFs with complex photographic content (many colors) compress less. Using quality 10 and frame skip 2 together can reduce a 5MB GIF to under 2MB in most cases.',
      },
      {
        question: 'What quality setting should I use?',
        answer:
          'Quality 10 (default) is a good balance between file size and visual quality for most GIFs. Quality 1 produces the smallest file but may show visible color banding. Quality 20–30 is better for GIFs with gradients or many colors. Start at 10 and check the result — reduce to 5 if you need a smaller file.',
      },
      {
        question: 'Is my GIF uploaded to a server?',
        answer:
          'No. All GIF processing runs entirely in your browser using JavaScript and Web Workers. Your GIF file is never sent to any server. The compression happens locally on your device.',
      },
      {
        question: 'What is frame skip and should I use it?',
        answer:
          'Frame skip removes every Nth frame from the animation. Frame skip 2 keeps every other frame, halving the number of frames and reducing file size by roughly 40-50% on top of color compression. The animation will play at half the original frame rate. For smooth animations (30fps), frame skip 2 produces 15fps which is usually still smooth enough. For slow animations, use frame skip 1 (no skip).',
      },
      {
        question: 'Can I compress multiple GIFs at once?',
        answer:
          'This tool processes one GIF at a time for the best results and to avoid browser memory issues. For batch compression of multiple images (JPG, PNG, WebP), use the Batch Image Compressor tool.',
      },
      {
        question: 'Why is GIF compression slower than JPEG compression?',
        answer:
          'GIF compression is more complex than JPEG because each frame must be decoded, re-colored, and re-encoded individually. A 5MB GIF with 50 frames at 500×500px takes 5–15 seconds in the browser. This is normal — the compression is running entirely in your browser without any server, so it takes a few extra seconds.',
      },
    ],
  },
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />}
      {children}
    </>
  )
}
