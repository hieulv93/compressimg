import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/gif-to-png')

export const metadata: Metadata = {
  title: 'GIF to PNG Converter — Convert GIF to PNG Free Online',
  description:
    'Convert GIF to PNG free online. Get a lossless PNG with full color depth and transparency support. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'GIF to PNG Converter — Free Online',
    description:
      'Convert GIF to PNG instantly. Lossless output, full color depth, transparency preserved. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GIF to PNG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF to PNG — Free Online Converter',
    description:
      'Convert GIF to PNG free. Lossless output, transparency preserved. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'GIF to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'GIF to PNG Converter — Convert GIF to PNG Free Online',
    description:
      'Convert GIF to PNG free online. Get a lossless PNG with full color depth and transparency support. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'Why convert GIF to PNG?',
        answer:
          'GIF is limited to 256 colors, which makes photos and complex images look grainy. PNG supports millions of colors and uses lossless compression — every pixel is preserved exactly. Converting GIF to PNG gives better image quality, especially for photographs, gradients, and detailed graphics.',
      },
      {
        question: 'What happens to the GIF animation when converting to PNG?',
        answer:
          'PNG is a static image format. Converting a GIF to PNG extracts the first frame as a static image. The animation is not preserved. If you need to keep the animation, consider converting to WebM or MP4 video instead.',
      },
      {
        question: 'Does GIF to PNG preserve transparency?',
        answer:
          'GIF supports binary transparency (pixels are either fully transparent or fully opaque). PNG supports full alpha transparency (0–255 opacity per pixel). When converting, the transparent pixels from the GIF are preserved as transparent in the PNG output, making this the ideal conversion when transparency matters.',
      },
      {
        question: 'Will the PNG be higher quality than the GIF?',
        answer:
          'PNG removes the 256-color restriction of GIF, so colors and gradients will look smoother in the PNG output. However, if the GIF was originally created from a low-resolution or low-color source, the PNG output will reflect those limitations — PNG cannot recover detail that was never in the GIF.',
      },
      {
        question: 'Will the PNG be larger than the GIF?',
        answer:
          'Usually yes. PNG uses lossless compression optimized for full-color images. GIF uses a 256-color palette that can compress simple graphics very efficiently. For photographs and complex images, PNG will be similar in size or smaller. For simple flat-color graphics, GIF may actually be smaller than PNG.',
      },
      {
        question: 'Should I use GIF to PNG or GIF to JPG?',
        answer:
          'Choose PNG when: you need transparency preserved, the image has sharp edges or text, or you plan to edit the image further. Choose JPG when: file size is the priority, the image is a photograph, or you are uploading to a platform that compresses images anyway.',
      },
      {
        question: 'Are my GIF files safe to convert here?',
        answer:
          'Yes. All conversion happens entirely in your browser — no file is ever sent to a server. Your GIF files stay on your device throughout the entire process.',
      },
      {
        question: 'Can I convert GIF to JPG instead of PNG?',
        answer:
          'Yes. Use the GIF to JPG converter for a smaller file size output. JPG is better when you need a compact file for email, social media, or web use. PNG is better when you need lossless quality, transparency, or an image for further editing.',
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
