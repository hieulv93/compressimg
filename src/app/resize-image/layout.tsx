import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image')

export const metadata: Metadata = {
  title: 'Resize Image Online Free — JPG, PNG, WebP & HEIC',
  description:
    'Resize images to exact pixel dimensions free. Set custom width & height or use Instagram, YouTube, and passport presets. Supports HEIC. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image Online Free — JPG, PNG, WebP & HEIC | CompressImg',
    description:
      'Free online image resizer. Change dimensions for Instagram, YouTube, Twitter and more. 100% browser-based — your images never leave your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompressImg — Free Online Image Resizer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image Online Free — JPG, PNG, WebP & HEIC | CompressImg',
    description:
      'Resize JPG, PNG, WebP to any size instantly. No uploads — works 100% in your browser.',
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
    name: 'Resize Image Online Free — JPG, PNG, WebP & HEIC',
    description:
      'Resize images to exact pixel dimensions free. Set custom width & height or use Instagram, YouTube, and passport presets. Supports HEIC. No upload — 100% browser-based.',
    faq: [
      {
        question: 'Is this image resizer free to use?',
        answer:
          'Yes, completely free with no limits. No sign-up, no subscription, no watermarks. You can resize as many images as you want at no cost.',
      },
      {
        question: 'Does resizing reduce image quality?',
        answer:
          'Shrinking an image (downscaling) generally preserves quality very well. Enlarging (upscaling) can reduce sharpness. For upscaling beyond 2x the original size, AI-based upscalers produce better results.',
      },
      {
        question: 'Can I resize an image without changing the aspect ratio?',
        answer:
          'Yes. Enable the lock icon between the width and height fields. When locked, changing one dimension automatically calculates the other to preserve the original aspect ratio.',
      },
      {
        question: 'What image formats are supported?',
        answer:
          'JPG, PNG, and WebP are supported. The output keeps the same format as the input. PNG files retain full transparency after resizing.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All resizing happens 100% in your browser using the HTML5 Canvas API. Your images never leave your device and are never stored on any server.',
      },
      {
        question: 'What is the maximum file size I can upload?',
        answer: 'The maximum file size is 20MB. Maximum output dimensions are 8000×8000 pixels.',
      },
      {
        question: 'Why is the resized file larger than the original?',
        answer:
          'When you increase the image dimensions, the output has more pixels and a larger file size. To reduce file size, use our Compress Image tool after resizing.',
      },
      {
        question: 'Does this work on mobile phones?',
        answer:
          'Yes. The tool is fully optimized for iOS and Android browsers. Tap to select an image from your gallery, set dimensions, and download — no app required.',
      },
      {
        question: 'Can I resize a HEIC photo from my iPhone?',
        answer:
          'Yes. Upload the .heic file directly — the tool automatically converts it to JPEG in your browser before resizing. No separate conversion step is needed.',
      },
      {
        question: 'What is the best image size for an Instagram post?',
        answer:
          'Square post: 1080×1080px (1:1). Portrait post: 1080×1350px (4:5). Story/Reel: 1080×1920px (9:16). All available as quick presets in the tool.',
      },
      {
        question: 'How do I resize an image to a specific KB size?',
        answer:
          'Use our dedicated KB resizer tools — available for 20KB, 50KB, 100KB, 200KB, and 500KB targets. These use automatic quality adjustment to guarantee the output stays under the specified limit.',
      },
      {
        question: 'Can I resize multiple images at once?',
        answer:
          'Yes. Use our batch image resizer at /resize-images/ — accepts up to 10 files and downloads all resized images as a ZIP file.',
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
