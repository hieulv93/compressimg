import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-website/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images for Website' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Website — Free',
    description: 'Optimize website images for faster loading and better Core Web Vitals.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Compress Images for Website', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Website Image Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for websites. Reduce image file size for faster page speed, better Core Web Vitals, and higher Google search rankings. No upload, 100% private.',
      featureList: [
        'Compress images for faster website loading',
        'Improve Google PageSpeed and Core Web Vitals scores',
        'JPEG and WebP output for optimal web delivery',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress Images for a Website',
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 75–82',
          text: 'Quality 80 is the sweet spot for web images — visually lossless at screen resolution, under 200KB for most photos. Reduce to 70 for thumbnails and background images.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload to your site',
          text: 'Download the compressed file and upload it to WordPress, Squarespace, Webflow, or any CMS. Faster loading, better LCP score, higher Google ranking.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What image size is best for a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most websites: hero images under 300KB at 1920px wide, blog featured images under 200KB at 1200px wide, thumbnails under 50KB at 400px wide. The exact right size depends on where the image appears on the page. Google PageSpeed flags images over 100KB that could be compressed without visible quality loss.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do images affect Google rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google uses Core Web Vitals as a ranking signal. The most important metric for images is LCP (Largest Contentful Paint) — how fast the biggest visible element loads. Large uncompressed images are the #1 cause of slow LCP scores. Pages with LCP under 2.5 seconds rank higher than slower pages with otherwise equal content.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for website images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 75–82 is the standard for website images. Quality 80 produces files that are indistinguishable from the original at screen resolution (72–96 DPI). Below quality 70, compression artifacts become visible. Above quality 85, file sizes grow rapidly with no visible improvement at screen size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use JPEG or WebP for website images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebP produces files 25–35% smaller than JPEG at the same visual quality and is supported by all modern browsers (Chrome, Firefox, Safari, Edge). JPEG is safer for maximum compatibility with older browsers and CMS systems that may not support WebP uploads. For most websites in 2026, WebP is the better choice.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing images affect SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — positively. Smaller images load faster, improving LCP (Largest Contentful Paint), a Core Web Vitals metric Google uses for ranking. Faster pages also reduce bounce rate (users leaving before the page loads), which is another indirect ranking signal. Google Search Console shows your Core Web Vitals scores — compressing images is the fastest way to improve them.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression runs entirely in your browser. Your images never leave your device — there is no upload step. This makes it safe to compress unreleased product images, internal assets, or client photos.',
          },
        },
      ],
    },
  ],
}

export default function CompressForWebsiteLayout({ children }: { children: React.ReactNode }) {
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
