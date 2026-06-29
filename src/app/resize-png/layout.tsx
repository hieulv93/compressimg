import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-png')

export const metadata: Metadata = {
  title: 'Resize PNG Online Free — Change PNG Image Dimensions',
  description:
    'Resize PNG images online for free. Change dimensions while keeping PNG format and transparency. No upload, no quality loss — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize PNG Online Free — Change PNG Image Dimensions | CompressImg',
    description:
      'Resize PNG images to any pixel dimensions free. Transparency is preserved. No upload, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize PNG Online — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize PNG Online Free — Change PNG Dimensions',
    description: 'Change PNG width and height by pixel. Transparency preserved — free, no upload.',
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
    name: 'Resize PNG Online Free — Change PNG Image Dimensions',
    description:
      'Resize PNG images online for free. Change dimensions while keeping PNG format and transparency. No upload, no quality loss — 100% browser-based.',
    faq: [
      {
        question: 'Does resizing a PNG keep the transparent background?',
        answer:
          'Yes. The tool uses the browser Canvas API with PNG output, which fully supports transparency (alpha channel). Logos, icons, and cutout images retain their transparent areas after resizing.',
      },
      {
        question: 'Should I resize a PNG or convert it to JPG first?',
        answer:
          'Keep PNG if your image has transparent areas or sharp edges (logos, icons, text). Convert to JPG only for photos without transparency — JPG produces a much smaller file for photographic content. Use our PNG to JPG converter if needed.',
      },
      {
        question: 'Why is my resized PNG still large in file size?',
        answer:
          'PNG uses lossless compression, so file size depends on content complexity, not just pixel count. For smaller PNG files, try using the Compress PNG tool after resizing, or convert to WebP which offers smaller files at the same quality.',
      },
      {
        question: 'Is my PNG file uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser using the Canvas API. Your file is never sent to any server.',
      },
      {
        question: 'Can I resize a PNG logo without losing sharpness?',
        answer:
          'Downscaling a PNG logo works well — the output remains sharp at the target size. For upscaling (making larger), quality will degrade regardless of the tool. Always start from the largest original version of your logo.',
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
