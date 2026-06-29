import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/image-seo-guide')

export const metadata: Metadata = {
  title: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
  description:
    'How to optimize images for Google search — file size, alt text, file names, structured data, Core Web Vitals, and next-gen formats. Complete image SEO guide for 2026.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
    description:
      'File size, alt text, file names, structured data, Core Web Vitals — complete image SEO guide.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image SEO Guide 2026',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image SEO Guide 2026 — Complete Optimization Checklist',
    description:
      'Alt text, file size, Core Web Vitals, structured data — everything that affects image SEO.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'Image SEO Guide', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
    blog: {
      headline: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
      description: 'How to optimize images for Google search rankings — complete 2026 guide.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'Does image optimization affect SEO?',
        answer:
          'Yes, significantly. Image file size directly affects LCP — a Core Web Vital that Google uses as a ranking signal. Alt text affects how Google understands and indexes images. Correct file names and structured data affect visibility in Google Images and rich results.',
      },
      {
        question: 'What is the best image format for SEO?',
        answer:
          'WebP is the recommended format for web images in 2026. It produces 25–35% smaller files than JPEG at the same visual quality, which improves LCP. Google PageSpeed Insights explicitly recommends converting to WebP or AVIF.',
      },
      {
        question: 'How does image alt text help SEO?',
        answer:
          'Alt text is the primary text signal Google uses to understand image content. It influences ranking in Google Images and provides keyword context to the surrounding page content. Write natural descriptions of what the image shows — include the page keyword only when it fits naturally.',
      },
      {
        question: 'What file size should images be for SEO?',
        answer:
          "Hero images should be under 150–250 KB. Blog images under 120 KB. Thumbnails under 50 KB. These targets support LCP scores under 2.5 seconds on mobile, which is Google's benchmark for a good page experience.",
      },
      {
        question: 'Does lazy loading help SEO?',
        answer:
          'Adding loading="lazy" to below-fold images reduces initial page load weight, which can improve LCP for the visible images. Never lazy-load the LCP image itself — that delays the most important element and directly hurts LCP scores.',
      },
      {
        question: 'Should I include images in my XML sitemap?',
        answer:
          'Yes, especially for e-commerce and photography sites where image discovery is important. The image sitemap extension (image:image) helps Google discover images it might otherwise miss, particularly images loaded via JavaScript.',
      },
      {
        question: 'Does image file name affect Google ranking?',
        answer:
          'File names are a weak but real signal. Google reads file names when indexing images. A descriptive file name like "red-running-shoes.webp" is preferable to "IMG_4521.jpg". Use hyphens, not underscores, between words.',
      },
      {
        question: 'How do I fix the "serve images in next-gen formats" warning in PageSpeed?',
        answer:
          'Convert your JPEG and PNG images to WebP. Use the free JPG to WebP or PNG to WebP tools at compressimg.pro. Then update your img tags to serve the .webp files. The warning will clear in the next PageSpeed test.',
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
