import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/png-vs-jpg')

export const metadata: Metadata = {
  title: 'PNG vs JPG: Which Format Should You Use? (2026 Guide)',
  description:
    'PNG vs JPG comparison — when to use each, file size differences, transparency support, quality loss, and the right format for web, social media, and print in 2026.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PNG vs JPG: Which Format Should You Use?',
    description:
      'PNG preserves quality but is larger. JPG compresses well but loses quality. Learn when to use each format for every use case.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: 'https://compressimg.pro/og-image.png', width: 1200, height: 630, alt: 'PNG vs JPG' },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG vs JPG: Which Format Should You Use?',
    description: 'When to use PNG, when to use JPG, and when WebP beats both.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'PNG vs JPG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'PNG vs JPG: Which Format Should You Use? (2026 Guide)',
    blog: {
      headline: 'PNG vs JPG: Which Image Format Should You Use? (2026 Guide)',
      description:
        'PNG vs JPG: when transparency matters, when compression wins, lossy vs lossless explained, and the right format for web, print, and social media.',
      datePublished: '2026-06-08',
      dateModified: '2026-06-08',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'What is the difference between PNG and JPG?',
        answer:
          'PNG uses lossless compression — it preserves every pixel exactly as captured, supports transparency (alpha channel), and is best for logos, screenshots, and graphics with sharp edges. JPG uses lossy compression — it discards some image data to achieve much smaller file sizes and is best for photographs and complex scenes. The right choice depends on what type of image you have and how you plan to use it.',
      },
      {
        question: 'Is PNG better quality than JPG?',
        answer:
          'PNG preserves 100% of the original image data (lossless), while JPG discards some data to compress. However, "better quality" depends on the use case. For photographs, high-quality JPG (quality 85–95) is visually indistinguishable from PNG while being 3–5× smaller. For logos and text, PNG is clearly better because JPG compression creates artifacts around sharp edges and text.',
      },
      {
        question: 'When should I use PNG instead of JPG?',
        answer:
          'Use PNG when: (1) you need a transparent background (logos, icons, stickers), (2) the image has text or sharp geometric edges that look bad with JPG compression artifacts, (3) you will edit and re-save the image multiple times (JPG degrades with each save, PNG does not), or (4) the image is a screenshot or diagram with large flat-color areas that PNG compresses efficiently.',
      },
      {
        question: 'When should I use JPG instead of PNG?',
        answer:
          'Use JPG when: (1) the image is a photograph or complex scene with many colors and gradients, (2) file size matters more than absolute quality (web pages, email attachments), (3) you do not need transparency, or (4) you are uploading to social media platforms that will re-compress the image anyway. JPG is typically 3–10× smaller than PNG for photographic content.',
      },
      {
        question: 'Does converting PNG to JPG lose quality?',
        answer:
          'Yes — converting PNG to JPG introduces lossy compression. The amount of quality loss depends on the JPG quality setting. At quality 85–90, the difference is usually invisible to the naked eye for photographs. At quality 60–70, compression artifacts become visible, especially around sharp edges. Converting JPG back to PNG does not recover lost quality — it just stores the already-compressed JPG data in a lossless container.',
      },
      {
        question: 'Which is better for websites: PNG or JPG?',
        answer:
          'For photographs and hero images: JPG (or WebP) — significantly smaller files mean faster page loads and better Core Web Vitals scores. For logos, icons, and UI elements: PNG (or SVG for vector graphics). For the best of both worlds, use WebP — it supports both lossy (like JPG) and lossless (like PNG) compression with better quality-to-size ratios than either.',
      },
      {
        question: 'Which is better for social media: PNG or JPG?',
        answer:
          'For most social media posts: JPG at quality 85+ gives the best balance of quality and file size. Social platforms (Instagram, Twitter, Facebook) re-compress uploaded images regardless of format, so a high-quality JPG and a PNG of the same photo will look identical after platform compression. For profile pictures and logos with transparency, upload PNG — platforms that support transparency will preserve it.',
      },
      {
        question: 'Is PNG or JPG better for printing?',
        answer:
          'For print: PNG is safer because it is lossless and will not introduce compression artifacts when the image is printed at high resolution. However, professional print workflows often use TIFF or PDF rather than either PNG or JPG. If you must use one: PNG for designs with text and sharp graphics, high-quality JPG (quality 95+) for photographs intended for print.',
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
