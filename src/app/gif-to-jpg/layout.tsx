import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/gif-to-jpg')

export const metadata: Metadata = {
  title: 'GIF to JPG Converter — Convert GIF to JPEG Free Online',
  description:
    'Convert GIF to JPG free online. Extract the first frame as a high-quality JPEG instantly. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'GIF to JPG Converter — Free Online',
    description:
      'Convert GIF to JPG instantly. Extract GIF frames as high-quality JPEG. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GIF to JPG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF to JPG — Free Online Converter',
    description: 'Convert GIF to JPG free. Extract frames as JPEG. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'GIF to JPG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'GIF to JPG Converter — Convert GIF to JPEG Free Online',
    description:
      'Convert GIF to JPG free online. Extract the first frame as a high-quality JPEG instantly. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'What happens to the animation when I convert a GIF to JPG?',
        answer:
          'JPG is a static image format and cannot store animation. Converting a GIF to JPG extracts the first frame of the animation as a static JPEG image. The remaining frames are discarded. If you need all frames, you would need video conversion software.',
      },
      {
        question: 'Why convert GIF to JPG?',
        answer:
          'GIF files use a limited 256-color palette, which makes photos and complex images look grainy and low-quality. Converting to JPG gives you millions of colors and significantly better image quality for photographs. JPG also produces much smaller file sizes than GIF for photographic content.',
      },
      {
        question: 'Will the JPG be better quality than the original GIF?',
        answer:
          "JPG supports millions of colors versus GIF's 256-color limit, so the JPG will look smoother — especially for photographs. However, if the GIF was created from a low-resolution source, the JPG cannot recover lost detail. The output quality is limited by the original GIF quality.",
      },
      {
        question: 'Does GIF support transparency? What happens when converting to JPG?',
        answer:
          'GIF supports binary transparency (a pixel is either fully transparent or fully opaque). JPG does not support transparency. When converting, transparent areas are filled with a white background in the JPG output. If you need to preserve transparency, convert to PNG instead.',
      },
      {
        question: 'Will the JPG file be smaller than the GIF?',
        answer:
          'For photographic content, yes — JPG is typically 60–80% smaller than GIF for the same image. For simple graphics with flat colors and few details, GIF can actually be smaller than JPG. The size difference depends heavily on the image content.',
      },
      {
        question: 'Can I convert an animated GIF to a video instead?',
        answer:
          'This tool converts GIF to a static JPG image (first frame only). To convert an animated GIF to a video format like MP4 or WebM, you need a dedicated video conversion tool. Many free online tools handle GIF-to-video conversion.',
      },
      {
        question: 'Are my GIF files safe to convert here?',
        answer:
          'Yes. All conversion happens entirely in your browser — no file is ever sent to a server. Your GIF files stay on your device throughout the entire process.',
      },
      {
        question: 'Can I convert GIF to PNG instead of JPG?',
        answer:
          'Yes. Use the GIF to PNG converter for a lossless output that preserves sharp edges and supports transparency. PNG is better for graphics, logos, and images with text. JPG is better for photographs where file size matters more than perfect accuracy.',
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
