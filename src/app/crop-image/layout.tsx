import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/crop-image')

export const metadata: Metadata = {
  title: 'Crop Image Online Free – Trim & Cut JPG, PNG, WebP',
  description:
    'Free online image cropper. Select any area, choose ratio (1:1, 16:9, 4:3), and download instantly. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Image Online Free – Trim & Cut JPG, PNG, WebP',
    description:
      'Crop any image to any ratio instantly. Presets: 1:1, 16:9, 4:3, 3:2, 9:16 or free crop. No upload — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompressImg — Free Online Image Cropper',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Image Online Free – Trim & Cut JPG, PNG, WebP',
    description:
      'Crop images to any ratio instantly. Presets: 1:1, 16:9, 4:3. No uploads — works 100% in your browser.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Crop Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Crop Image Online Free – Trim & Cut JPG, PNG, WebP',
    description:
      'Free online image cropper. Select any area, choose ratio (1:1, 16:9, 4:3), and download instantly. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'How do I crop an image online for free?',
        answer:
          'Upload your JPG, PNG, or WebP image to CompressImg Crop Image tool. Drag the handles to select the area you want to keep, choose an aspect ratio preset if needed, then click "Crop Image". Your cropped image downloads instantly — no account required.',
      },
      {
        question: 'Does cropping an image reduce file size?',
        answer:
          'Yes. Cropping removes pixels from outside the selected area, which directly reduces file size. A photo cropped to 50% of its original dimensions can be up to 75% smaller in file size, because file size scales with the number of pixels (width × height).',
      },
      {
        question: 'What aspect ratio should I use for social media?',
        answer:
          'Instagram feed posts use 1:1 or 4:5. YouTube thumbnails use 16:9. Facebook cover photos use approximately 16:9. LinkedIn profile photos use 1:1. Instagram Stories and TikTok use 9:16.',
      },
      {
        question: 'Will cropping reduce image quality?',
        answer:
          'No. The crop tool extracts the selected area at full resolution using the Canvas API. The remaining pixels are output exactly as they were in the original — no re-encoding or quality loss.',
      },
      {
        question: 'What image formats can I crop?',
        answer:
          'You can crop JPG, PNG, and WebP images up to 20MB. The output format matches the input format — PNG files keep their transparency.',
      },
      {
        question: 'Is my image uploaded to a server?',
        answer:
          'No. This tool processes your image entirely inside your browser using JavaScript and the Canvas API. Your image never leaves your device.',
      },
      {
        question: 'Can I crop to a custom size?',
        answer:
          'Yes. Select "Free" mode and drag the crop handles to any shape. The exact pixel dimensions are shown in real time. For a specific pixel size, crop first then use our Resize Image tool.',
      },
      {
        question: 'How is crop different from resize?',
        answer:
          'Cropping removes parts of the image — you keep a selected region and discard the rest. Resizing changes the dimensions of the entire image by scaling. Use crop to remove unwanted areas; use resize to change pixel dimensions.',
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
