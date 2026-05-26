import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-wix/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Images for Wix — Faster Website Photos Free',
  description:
    'Compress Wix images to under 500KB for faster website loading. Optimize product photos, gallery images, and blog banners. 100% browser-based, free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Images for Wix — Faster Website Photos Free',
    description:
      'Compress Wix images to under 500KB. Faster Wix site loading, better Lighthouse score — 100% browser-based, private, free.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Images for Wix' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Wix — Free',
    description: 'Compress Wix photos to under 500KB for faster site loading.',
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
          name: 'Compress Images for Wix',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Wix Image Compressor',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for Wix websites. Reduce photo file size to under 500KB for faster page loading — no upload required, 100% private.',
      featureList: [
        'Compress Wix images under 500KB',
        'JPEG output for fast loading on all browsers',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'See exact output size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress Images for Wix',
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your photo. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 80–85',
          text: 'Quality 82 produces sharp images under 500KB for most 1920px wide photos. Adjust lower if over 500KB.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload to Wix',
          text: 'Download the compressed file. Upload to your Wix Media Manager or directly to a page element. Faster loading, better site score.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the recommended image size for Wix?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wix recommends keeping images under 25MB (their hard limit), but for fast loading you should target under 500KB per image. Full-width backgrounds: 1920×1080px, under 600KB. Blog post images: 940×480px, under 300KB. Product images: 800×800 to 1500×1500px, under 400KB. Gallery images: 1000px wide, under 300KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress images for Wix to load faster?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image here and set quality to 82. A 1920×1080px JPEG at quality 82 compresses to 200–450KB. For blog thumbnails at 940×480px, quality 82 gives 80–200KB. Download and upload to Wix Media Manager. Your Wix site will load faster and score better on Google PageSpeed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Wix optimize images automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wix uses Imagekit (formerly Cloudinary) to serve images at the correct display size. However, Wix does not reduce the file size of the original image you upload. A 5MB photo uploaded to Wix Media Manager stays 5MB in storage. Wix resizes the display dimensions, but pre-compressing to under 500KB reduces upload time, storage, and CDN bandwidth costs.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Wix site loads slowly — will compressing images help?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Images are the leading cause of slow Wix sites. Wix's Google PageSpeed score is affected by LCP (Largest Contentful Paint) — usually your hero banner or first visible image. Compress the banner to under 400KB and any above-the-fold images to under 200KB. Below-the-fold gallery images can be 300–500KB. This often improves PageSpeed score by 10–20 points.",
          },
        },
        {
          '@type': 'Question',
          name: 'What image format should I use for Wix?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPEG for photos (product images, backgrounds, blog covers) — best compression ratio at quality 80–85. PNG for logos, icons, and images with transparency. WebP is supported by Wix and all modern browsers, producing files 25–35% smaller than JPEG — use WebP when you need the best performance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this tool free and private?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — completely free with no limits. All compression runs in your browser; images never leave your device. No sign-up required.',
          },
        },
      ],
    },
  ],
}

export default function CompressForWixLayout({ children }: { children: React.ReactNode }) {
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
