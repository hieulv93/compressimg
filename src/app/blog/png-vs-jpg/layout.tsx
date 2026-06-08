import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/png-vs-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'PNG vs JPG' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG vs JPG: Which Format Should You Use?',
    description: 'When to use PNG, when to use JPG, and when WebP beats both.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'PNG vs JPG: Which Image Format Should You Use? (2026 Guide)',
      description:
        'PNG vs JPG: when transparency matters, when compression wins, lossy vs lossless explained, and the right format for web, print, and social media.',
      url: PAGE_URL,
      datePublished: '2026-06-08',
      dateModified: '2026-06-08',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: OG_IMAGE },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: 'PNG vs JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between PNG and JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG uses lossless compression — it preserves every pixel exactly as captured, supports transparency (alpha channel), and is best for logos, screenshots, and graphics with sharp edges. JPG uses lossy compression — it discards some image data to achieve much smaller file sizes and is best for photographs and complex scenes. The right choice depends on what type of image you have and how you plan to use it.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is PNG better quality than JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG preserves 100% of the original image data (lossless), while JPG discards some data to compress. However, "better quality" depends on the use case. For photographs, high-quality JPG (quality 85–95) is visually indistinguishable from PNG while being 3–5× smaller. For logos and text, PNG is clearly better because JPG compression creates artifacts around sharp edges and text.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I use PNG instead of JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use PNG when: (1) you need a transparent background (logos, icons, stickers), (2) the image has text or sharp geometric edges that look bad with JPG compression artifacts, (3) you will edit and re-save the image multiple times (JPG degrades with each save, PNG does not), or (4) the image is a screenshot or diagram with large flat-color areas that PNG compresses efficiently.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I use JPG instead of PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use JPG when: (1) the image is a photograph or complex scene with many colors and gradients, (2) file size matters more than absolute quality (web pages, email attachments), (3) you do not need transparency, or (4) you are uploading to social media platforms that will re-compress the image anyway. JPG is typically 3–10× smaller than PNG for photographic content.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does converting PNG to JPG lose quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — converting PNG to JPG introduces lossy compression. The amount of quality loss depends on the JPG quality setting. At quality 85–90, the difference is usually invisible to the naked eye for photographs. At quality 60–70, compression artifacts become visible, especially around sharp edges. Converting JPG back to PNG does not recover lost quality — it just stores the already-compressed JPG data in a lossless container.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is better for websites: PNG or JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photographs and hero images: JPG (or WebP) — significantly smaller files mean faster page loads and better Core Web Vitals scores. For logos, icons, and UI elements: PNG (or SVG for vector graphics). For the best of both worlds, use WebP — it supports both lossy (like JPG) and lossless (like PNG) compression with better quality-to-size ratios than either.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is better for social media: PNG or JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most social media posts: JPG at quality 85+ gives the best balance of quality and file size. Social platforms (Instagram, Twitter, Facebook) re-compress uploaded images regardless of format, so a high-quality JPG and a PNG of the same photo will look identical after platform compression. For profile pictures and logos with transparency, upload PNG — platforms that support transparency will preserve it.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is PNG or JPG better for printing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For print: PNG is safer because it is lossless and will not introduce compression artifacts when the image is printed at high resolution. However, professional print workflows often use TIFF or PDF rather than either PNG or JPG. If you must use one: PNG for designs with text and sharp graphics, high-quality JPG (quality 95+) for photographs intended for print.',
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
