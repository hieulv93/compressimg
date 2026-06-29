import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-300x300')

export const metadata: Metadata = {
  title: 'Resize Image to 300×300 Free',
  description:
    'Resize any image to 300×300 instantly. Perfect for thumbnails, product photos, and e-commerce listings. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 300×300 Free | CompressImg',
    description:
      'Resize any image to 300×300. Perfect for thumbnails, product photos, and e-commerce. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 300×300 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 300×300 Free',
    description: 'Perfect 300×300 thumbnails in seconds. No upload, no account needed.',
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
    name: 'Resize Image to 300×300 Free',
    description:
      'Resize any image to 300×300 instantly. Perfect for thumbnails, product photos, and e-commerce listings. No upload — 100% browser-based.',
    faq: [
      {
        question: 'What is 300×300 used for?',
        answer:
          '300×300px is used for product thumbnails on e-commerce sites (Amazon, eBay, Etsy), blog post thumbnail images, WordPress featured image previews, forum avatars, and small image placeholders in web and app layouts.',
      },
      {
        question: 'Is 300×300 good enough for product images?',
        answer:
          '300×300px is sufficient for thumbnail listings but too small for product detail views. Most e-commerce platforms use 300×300 for grid thumbnails and then display a larger version (800×800 or 1000×1000) when the user clicks on the product.',
      },
      {
        question: 'What is the Amazon product image minimum size?',
        answer:
          "Amazon requires product images to be at least 500×500px for listing, but recommends 1000×1000px or larger to enable the zoom feature. 300×300 is below Amazon's minimum — use the 600×600 preset for Amazon thumbnails instead.",
      },
      {
        question: 'Will my image be cropped to 300×300?',
        answer:
          'The tool fits your image within 300×300 while preserving the original aspect ratio. Non-square images get white bars on the sides or top/bottom. The image is not cropped.',
      },
      {
        question: 'Are my files uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser. Your images are never sent to any server.',
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
