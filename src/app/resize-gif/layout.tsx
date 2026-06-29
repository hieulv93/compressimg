import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-gif')

export const metadata: Metadata = {
  title: 'Resize GIF Online Free — Change GIF Width & Height',
  description:
    'Resize GIF images online for free. Change GIF width and height by pixel. Static GIFs output as PNG; for animation, use our GIF compressor. No upload, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize GIF Online Free — Change GIF Width & Height | CompressImg',
    description:
      'Resize GIF images to any pixel dimensions free. No upload, no sign-up, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize GIF Online — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize GIF Online Free — Change GIF Dimensions',
    description: 'Change GIF width and height by pixel — free, no upload.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize GIF Online Free — Change GIF Width & Height',
    description:
      'Resize GIF images online for free. Change GIF width and height by pixel. Static GIFs output as PNG; for animation, use our GIF compressor. No upload, 100% browser-based.',
    faq: [
      {
        question: 'Can I resize an animated GIF and keep the animation?',
        answer:
          'Browsers cannot re-encode animated GIF frames via the Canvas API, so this tool outputs a static PNG of the first frame. To resize an animated GIF while preserving animation, use a dedicated animated GIF editor. To reduce animated GIF file size without resizing, use our GIF Compressor tool.',
      },
      {
        question: 'What format does the resized GIF download as?',
        answer:
          'GIF files are output as PNG because browsers cannot re-encode GIF via canvas. PNG is lossless and produces a high-quality result at the resized dimensions. For photographic content, you can also convert the GIF to JPG before resizing.',
      },
      {
        question: 'How do I make a GIF smaller in file size?',
        answer:
          'To reduce GIF file size while keeping the animation, use our GIF Compressor tool which uses quantization and frame-skipping to shrink animated GIFs by up to 70%. Resizing the pixel dimensions also reduces file size.',
      },
      {
        question: 'Is my GIF file uploaded to a server?',
        answer:
          'No. All processing happens entirely in your browser using the Canvas API. Your file is never sent to any server.',
      },
      {
        question: 'What GIF size should I use for social media?',
        answer:
          'Twitter accepts GIFs up to 15MB at 1280×1080px maximum. Discord supports GIFs up to 8MB at 128×128px for avatars or larger for server uploads. Slack and Teams display GIFs inline up to 720px wide.',
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
