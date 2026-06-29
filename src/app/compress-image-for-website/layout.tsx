import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-website')

export const metadata: Metadata = {
  title: 'Compress Images for Website — Faster Page Speed Free',
  description:
    'Compress images for website use — under 200KB for faster loading, better Core Web Vitals, and higher Google rankings. JPG, PNG, WebP — 100% browser-based, free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Images for Website — Faster Page Speed Free',
    description:
      'Compress images for website use. Improve Core Web Vitals and Google rankings — 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Images for Website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Website — Free',
    description: 'Optimize website images for faster loading and better Core Web Vitals.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Images for Website', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Images for Website — Faster Page Speed Free',
    description:
      'Compress images for website use — under 200KB for faster loading, better Core Web Vitals, and higher Google rankings. JPG, PNG, WebP — 100% browser-based, free.',
    faq: [
      {
        question: 'What image size is best for a website?',
        answer:
          'For most websites: hero images under 300KB at 1920px wide, blog featured images under 200KB at 1200px wide, thumbnails under 50KB at 400px wide. The exact right size depends on where the image appears on the page. Google PageSpeed flags images over 100KB that could be compressed without visible quality loss.',
      },
      {
        question: 'How do images affect Google rankings?',
        answer:
          'Google uses Core Web Vitals as a ranking signal. The most important metric for images is LCP (Largest Contentful Paint) — how fast the biggest visible element loads. Large uncompressed images are the #1 cause of slow LCP scores. Pages with LCP under 2.5 seconds rank higher than slower pages with otherwise equal content.',
      },
      {
        question: 'What quality setting should I use for website images?',
        answer:
          'Quality 75–82 is the standard for website images. Quality 80 produces files that are indistinguishable from the original at screen resolution (72–96 DPI). Below quality 70, compression artifacts become visible. Above quality 85, file sizes grow rapidly with no visible improvement at screen size.',
      },
      {
        question: 'Should I use JPEG or WebP for website images?',
        answer:
          'WebP produces files 25–35% smaller than JPEG at the same visual quality and is supported by all modern browsers (Chrome, Firefox, Safari, Edge). JPEG is safer for maximum compatibility with older browsers and CMS systems that may not support WebP uploads. For most websites in 2026, WebP is the better choice.',
      },
      {
        question: 'Does compressing images affect SEO?',
        answer:
          'Yes — positively. Smaller images load faster, improving LCP (Largest Contentful Paint), a Core Web Vitals metric Google uses for ranking. Faster pages also reduce bounce rate (users leaving before the page loads), which is another indirect ranking signal. Google Search Console shows your Core Web Vitals scores — compressing images is the fastest way to improve them.',
      },
      {
        question: 'Are my images uploaded to a server when using this tool?',
        answer:
          'No. All compression runs entirely in your browser. Your images never leave your device — there is no upload step. This makes it safe to compress unreleased product images, internal assets, or client photos.',
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
