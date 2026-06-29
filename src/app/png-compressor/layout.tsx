import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/png-compressor')

export const metadata: Metadata = {
  title: 'PNG Compressor Online Free — Reduce PNG File Size',
  description:
    'Free PNG compressor. Reduce PNG file size instantly while preserving transparency and sharp edges. No upload to server — 100% browser-based, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG Compressor Online Free — Reduce PNG File Size',
    description:
      'Compress PNG files instantly. Preserves transparency and sharp edges. 100% browser-based — your images never leave your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PNG Compressor Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG Compressor Online Free',
    description: 'Reduce PNG file size while keeping transparency. No uploads, no sign-up.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'PNG Compressor', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'PNG Compressor Online Free — Reduce PNG File Size',
    description:
      'Free PNG compressor. Reduce PNG file size instantly while preserving transparency and sharp edges. No upload to server — 100% browser-based, no sign-up.',
    faq: [
      {
        question: 'What is a PNG compressor?',
        answer:
          'A PNG compressor is a tool that reduces the file size of PNG images. PNG uses lossless compression, so standard PNG files can be large — especially for screenshots, illustrations, and web graphics. A PNG compressor applies additional compression to reduce the file size while maintaining image quality, transparency, and sharp edges.',
      },
      {
        question: 'Does compressing a PNG remove transparency?',
        answer:
          'No. PNG transparency (alpha channel) is fully preserved during compression. Transparent pixels remain transparent, semi-transparent pixels keep their exact opacity level. The compressed PNG looks identical to the original over any background color.',
      },
      {
        question: 'How much can a PNG compressor reduce file size?',
        answer:
          'Logos and flat-color graphics: 40–70% reduction. Screenshots: 40–65% reduction. PNG photos: 30–55% reduction. For photographs without transparency, converting to JPG achieves even greater reduction (60–90%). Use PNG compression when transparency must be preserved.',
      },
      {
        question: 'Should I compress PNG or convert to WebP?',
        answer:
          'For web use, converting to WebP lossless is the most efficient option — WebP lossless files are typically 26% smaller than optimized PNG. However, not all platforms accept WebP. For email attachments, WordPress uploads older than version 5.8, and platforms that only accept PNG, use PNG compression instead.',
      },
      {
        question: 'What quality setting should I use to compress a PNG logo?',
        answer:
          'For logos with flat colors and sharp text, quality 80–90 preserves edges and color accuracy. At quality 80, a typical logo PNG reduces by 50–65% with no visible difference. Avoid quality below 70 for logos — compression artifacts become visible on sharp color boundaries.',
      },
      {
        question: 'Can I compress a PNG screenshot without making text blurry?',
        answer:
          'Yes. At quality 80–85, text in screenshots remains sharp and readable. The compression algorithm is conservative on high-contrast edges and text outlines. If text sharpness is critical, use quality 85+ or keep the file as a lossless PNG at the maximum compression level.',
      },
      {
        question: 'Is this PNG compressor free?',
        answer:
          'Yes — completely free with no sign-up, no watermark, and no daily limit. All compression runs in your browser using JavaScript. Your PNG files are never uploaded to any server.',
      },
      {
        question: 'Are my PNG files safe when using this tool?',
        answer:
          'Yes. All compression happens in your browser. Your files never leave your device and are never transmitted to any server. This is especially important for logos containing proprietary branding, product mockups, and confidential screenshots.',
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
