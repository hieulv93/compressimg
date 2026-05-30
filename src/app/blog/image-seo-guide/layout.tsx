import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/image-seo-guide/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Image SEO Guide 2026' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image SEO Guide 2026 — Complete Optimization Checklist',
    description:
      'Alt text, file size, Core Web Vitals, structured data — everything that affects image SEO.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
      description: 'How to optimize images for Google search rankings — complete 2026 guide.',
      url: PAGE_URL,
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
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
        { '@type': 'ListItem', position: 3, name: 'Image SEO Guide', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does image optimization affect SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Image file size directly affects LCP — a Core Web Vital that Google uses as a ranking signal. Alt text affects how Google understands and indexes images. Correct file names and structured data affect visibility in Google Images and rich results.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image format for SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP is the recommended format for web images in 2026. It produces 25–35% smaller files than JPEG at the same visual quality, which improves LCP. Google PageSpeed Insights explicitly recommends converting to WebP or AVIF.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does image alt text help SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alt text is the primary text signal Google uses to understand image content. It influences ranking in Google Images and provides keyword context to the surrounding page content. Write natural descriptions of what the image shows — include the page keyword only when it fits naturally.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file size should images be for SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Hero images should be under 150–250 KB. Blog images under 120 KB. Thumbnails under 50 KB. These targets support LCP scores under 2.5 seconds on mobile, which is Google's benchmark for a good page experience.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does lazy loading help SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adding loading="lazy" to below-fold images reduces initial page load weight, which can improve LCP for the visible images. Never lazy-load the LCP image itself — that delays the most important element and directly hurts LCP scores.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I include images in my XML sitemap?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, especially for e-commerce and photography sites where image discovery is important. The image sitemap extension (image:image) helps Google discover images it might otherwise miss, particularly images loaded via JavaScript.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does image file name affect Google ranking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'File names are a weak but real signal. Google reads file names when indexing images. A descriptive file name like "red-running-shoes.webp" is preferable to "IMG_4521.jpg". Use hyphens, not underscores, between words.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I fix the "serve images in next-gen formats" warning in PageSpeed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Convert your JPEG and PNG images to WebP. Use the free JPG to WebP or PNG to WebP tools at compressimg.pro. Then update your img tags to serve the .webp files. The warning will clear in the next PageSpeed test.',
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
