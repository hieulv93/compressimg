import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/convert-image')

export const metadata: Metadata = {
  title: 'Convert Image Online Free — JPG, PNG, WebP',
  description:
    'Free online image converter. Convert JPG, PNG, WebP to any format instantly. No upload — 100% browser-based. Transparency preserved for PNG and WebP output.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Convert Image Online Free – JPG to PNG, PNG to WebP, WebP to JPG',
    description:
      'Convert between JPG, PNG, and WebP instantly. Transparency preserved. No upload — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompressImg — Free Online Image Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Image Online Free – JPG to PNG, PNG to WebP, WebP to JPG',
    description:
      'Convert JPG, PNG, WebP to any format instantly. No uploads — works 100% in your browser.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Convert Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Convert Image Online Free — JPG, PNG, WebP',
    description:
      'Free online image converter. Convert JPG, PNG, WebP to any format instantly. No upload — 100% browser-based. Transparency preserved for PNG and WebP output.',
    faq: [
      {
        question: 'Is this image converter free to use?',
        answer:
          "Yes. CompressImg's image converter is 100% free with no sign-up, no watermark and no usage limits. There is no paid tier — every feature, including JPG, PNG and WebP conversion, is available to everyone without restrictions.",
      },
      {
        question: 'Which formats can I convert between?',
        answer:
          'You can convert between JPG, PNG and WebP in any direction — for example JPG to PNG, PNG to WebP, WebP to JPG, and so on. HEIC files from iPhone can also be uploaded and converted to JPG, PNG or WebP. Maximum input size is 20 MB per image.',
      },
      {
        question: 'Will converting to a different format reduce quality?',
        answer:
          'Converting from a lossless format like PNG to a lossy format like JPG or WebP applies compression, which can introduce very subtle pixel-level changes. At our default quality setting of 92 out of 100 the visual result is virtually indistinguishable from the original. Converting from JPG to PNG does not restore any quality already lost in the original JPG file.',
      },
      {
        question: 'What happens to transparency when I convert to JPG?',
        answer:
          'JPG does not support transparency, so transparent pixels are filled with a solid white background during conversion. This is ideal for product photos, logos on light backgrounds and documents. If you need to keep transparency, convert to PNG or WebP instead — both formats support full alpha channel transparency.',
      },
      {
        question: 'Why is the converted file larger than the original?',
        answer:
          'This usually happens when you convert a JPG to PNG. JPG uses lossy compression that discards pixel data, while PNG stores every pixel losslessly. Re-encoding the same image into a lossless container produces a larger file. For a smaller output, convert to WebP, or convert to JPG and then run the result through our image compressor.',
      },
      {
        question: 'Can I convert multiple images at once?',
        answer:
          'The converter currently processes one image at a time to keep the interface simple and the browser memory usage low. You can convert multiple files in sequence very quickly because conversion runs locally and takes only a few seconds per image.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All conversion happens entirely in your browser using the HTML5 Canvas API. Your images are never uploaded to a server, never stored anywhere and never seen by anyone else. When you close the browser tab, the image data is gone — no trace remains on any server.',
      },
      {
        question: 'Does this work on mobile phones?',
        answer:
          'Yes. The converter works in any modern mobile browser on iOS and Android, including Safari, Chrome and Firefox. You can pick an image from your camera roll or files app, choose the output format and download the converted file directly to your device.',
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
