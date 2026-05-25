import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-wordpress/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Images for WordPress — Faster Page Speed Free',
  description:
    'Compress WordPress images to under 500KB before uploading. Improve PageSpeed and LCP score without a plugin — 100% browser-based, free, no sign-up.',
  keywords: [
    'compress image for wordpress',
    'wordpress image optimization',
    'wordpress image compressor',
    'optimize images for wordpress',
    'reduce image size wordpress',
    'wordpress image file size',
    'compress wordpress photos',
    'wordpress pagespeed images',
    'image compression wordpress no plugin',
    'wordpress upload image size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Images for WordPress — Faster Page Speed Free',
    description:
      'Compress WordPress images to under 500KB before uploading. Improve LCP and PageSpeed — 100% browser-based, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images for WordPress' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for WordPress — Free',
    description: 'Compress WordPress images before uploading. Faster page speed, no plugin needed.',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Compress Images for WordPress',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — WordPress Image Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for WordPress sites. Reduce image file size to under 500KB before uploading — no plugin required, no upload to server, 100% private.',
      featureList: [
        'Compress WordPress images before uploading',
        'Target under 500KB for posts and pages',
        'Target under 200KB for thumbnails and gallery',
        'JPEG and WebP output for fast loading',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress Images for WordPress',
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
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
          name: 'Set quality to 80',
          text: 'Quality 80 is the WordPress sweet spot — visually lossless at screen resolution, typically under 300KB for most post images. Lower to 72–75 for thumbnails and background images.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload to WordPress',
          text: 'Download the compressed file, then upload it via WordPress Media Library or directly in the post editor. Faster page loading, better PageSpeed score.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the recommended image size for WordPress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For WordPress post content images: under 200KB at 1200px wide. For featured/hero images: under 300KB at 1920px wide. For thumbnails: under 50KB at 400px wide. For product images (WooCommerce): under 500KB at 1000×1000px. WordPress generates multiple sizes from each upload — always compress the source before uploading.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WordPress compress images automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WordPress applies JPEG compression at quality 82 by default (changed from 90 in WordPress 4.5). It also generates thumbnail, medium, large, and full-size versions from your upload. However, it does not compress PNG or WebP files, and quality 82 still produces large files from high-resolution originals. Pre-compressing before upload is more effective.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a plugin to compress images for WordPress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Compressing images before uploading is more effective than using a plugin. Plugins like Smush or ShortPixel process images after upload, which means WordPress first generates all thumbnail sizes from the original, then the plugin re-processes them. Pre-compressing gives you smaller source files and faster thumbnail generation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for WordPress images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 80 for post content images and featured images — visually lossless at screen resolution with file sizes typically under 200–300KB. Quality 72–75 for background images, thumbnails, and any image where the viewing distance is large. Avoid quality below 65 — compression artifacts become visible.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do WordPress image sizes work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WordPress generates up to 4 sizes from every uploaded image: thumbnail (150×150px cropped), medium (300px max), large (1024px max), and full (original). Some themes and plugins register additional sizes. The generated sizes are all derived from the original file — a smaller, compressed original produces smaller, faster-loading derivatives.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use JPEG or WebP for WordPress images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WordPress 5.8+ supports WebP natively. WebP produces files 25–35% smaller than JPEG at the same visual quality and is supported by all modern browsers. Use WebP for new WordPress sites. Use JPEG for maximum compatibility and for sites where visitors may use older browsers. Avoid PNG for photographs — PNG files are 3–10× larger than JPEG for the same photo.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I fix a failing PageSpeed score caused by WordPress images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Find the LCP element in PageSpeed Insights — it is usually the hero image or featured image. Compress it to under 200KB and ensure it loads with high priority (no lazy loading on above-the-fold images). Also check "Serve images in next-gen formats" — switch from JPEG to WebP. These two changes typically improve LCP by 1–3 seconds.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my WordPress images private when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser using JavaScript. Your images never leave your device — nothing is uploaded to any server. Safe for unreleased blog content, client work, and WooCommerce products that are not yet published.',
          },
        },
      ],
    },
  ],
}

export default function CompressForWordPressLayout({ children }: { children: React.ReactNode }) {
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
