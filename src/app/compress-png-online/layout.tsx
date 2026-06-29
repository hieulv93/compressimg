import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-png-online')

export const metadata: Metadata = {
  title: 'Compress PNG Online Free – Reduce PNG File Size',
  description:
    'Free online PNG compressor. Reduce PNG file size while preserving transparency and quality. No upload to server — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress PNG Online Free – Reduce PNG File Size',
    description:
      'Reduce PNG file size while preserving transparency for free. No uploads — works 100% in your browser. Alpha channel fully preserved.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress PNG Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress PNG Online Free – Reduce PNG File Size',
    description:
      'Reduce PNG file size while keeping transparency. 100% browser-based — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress PNG Online', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress PNG Online Free – Reduce PNG File Size',
    description:
      'Free online PNG compressor. Reduce PNG file size while preserving transparency and quality. No upload to server — 100% browser-based and private.',
    faq: [
      {
        question: 'What is a PNG file and when should I use it?',
        answer:
          'PNG (Portable Network Graphics) is a lossless image format that supports transparency. Use PNG for logos, icons, screenshots, and images requiring transparent backgrounds or sharp edges.',
      },
      {
        question: 'Does compressing a PNG affect its transparency?',
        answer:
          'No. PNG transparency (alpha channel) is fully preserved. Transparent pixels stay transparent, semi-transparent pixels keep their exact opacity. The compressed PNG looks identical to the original over any background.',
      },
      {
        question: 'How much can I reduce a PNG file size?',
        answer:
          'Logos and flat-color graphics reduce by 40–70%. Screenshots reduce by 40–65%. PNG photos reduce by 30–60%. For photos without transparency, converting to JPG achieves 60–90% reduction.',
      },
      {
        question: 'Is PNG compression lossless?',
        answer:
          'Traditional PNG is lossless. Our tool applies near-lossless techniques at lower quality settings for greater size reduction while keeping quality imperceptible on screen. Output is always saved as PNG with full alpha channel support.',
      },
      {
        question: 'When should I use PNG instead of JPG?',
        answer:
          'Use PNG when you need transparent backgrounds, sharp edges, logos with flat colors, or lossless quality for further editing. Use JPG for photographs without transparency — JPG compresses photos far more efficiently.',
      },
      {
        question: 'How do I compress a PNG image for a website?',
        answer:
          'Upload your PNG, set quality to 75–85 for logos or 60–70 for screenshots, then download. For even smaller files, convert the compressed PNG to WebP — WebP lossless mode is typically 26% smaller than PNG.',
      },
      {
        question: 'Can I compress PNG without losing sharp edges and text?',
        answer:
          'Yes. At quality 80 and above, logos, text, and sharp edges are preserved with no visible degradation. The algorithm is conservative on high-contrast edges and text.',
      },
      {
        question: 'Are my PNG files safe when using this tool?',
        answer:
          'Yes. All PNG compression happens in your browser using JavaScript. Files are never uploaded to any server, never stored, and never transmitted anywhere. No accounts, no watermarks, no limits.',
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
