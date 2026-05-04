import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-pinterest/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for Pinterest — Reduce Photo Size Before Pinning',
  description:
    'Free online tool to compress images for Pinterest. Reduce JPG, PNG size before uploading pins — avoid blurry results, faster uploads. 100% browser-based, no upload.',
  keywords: [
    'compress image for pinterest',
    'compress photo for pinterest',
    'reduce image size pinterest',
    'pinterest image compressor',
    'pinterest image size',
    'compress jpg for pinterest',
    'pinterest photo optimizer',
    'resize image for pinterest',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Pinterest — Reduce Photo Size Before Pinning',
    description:
      'Reduce JPG and PNG size before pinning on Pinterest. Prevent quality loss from double-compression — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for Pinterest' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for Pinterest — Free Photo Size Reducer',
    description:
      'Compress photos before pinning on Pinterest to avoid quality loss. 100% browser-based, no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image for Pinterest', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for Pinterest',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for Pinterest uploads. Reduce JPG, PNG, WebP file size before pinning to minimize double-compression and keep photos sharp. No upload required.',
      featureList: [
        'Compress images before Pinterest upload',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Optimized for Pinterest pin dimensions',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image for Pinterest',
      description: 'Reduce image file size before uploading to Pinterest to prevent quality loss.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area, drag and drop your image, or paste from clipboard with Ctrl+V. Supports JPG, PNG, and WebP files up to 20MB.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 80',
          text: 'Quality 80 reduces a typical photo from 5–10MB to 200–500KB with no visible quality loss — ideal for Pinterest pins.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and pin',
          text: 'Download the compressed image and upload it to Pinterest. Pre-compressed images look sharper and load faster on boards.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best image size for Pinterest?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pinterest recommends a 2:3 aspect ratio for standard pins — 1000×1500px is the most widely used size. Square pins (1000×1000px) work well for products. Tall pins (1000×2100px) get more screen real estate in feeds. Pinterest downscales images wider than 1000px, so there is no benefit to uploading at higher resolutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file format should I use for Pinterest?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pinterest supports JPG, PNG, WebP, and GIF. JPG is best for photographs and complex images — it produces smaller files than PNG at equivalent quality. PNG is better for graphics with text, logos, or flat colors where crisp edges matter. Pinterest does not support WebP uploads from desktop; use JPG for maximum compatibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum file size for Pinterest images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pinterest accepts images up to 20MB. However, Pinterest re-compresses large images after upload, which can reduce visual quality. Uploading a pre-compressed image under 500KB gives Pinterest less to compress, resulting in a sharper pin on boards and in search results.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do my Pinterest images look blurry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pinterest applies automatic compression to all uploaded images. If your original is large (several MB), Pinterest compresses it aggressively, which introduces softness and artifacts. Pre-compressing at quality 80 before uploading reduces the file size so Pinterest needs to apply less additional compression — resulting in a noticeably sharper pin.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress Pinterest images on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully in mobile browsers on iOS and Android — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select from your camera roll, compress, and download. No app installation required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images safe to compress with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser — no image is ever uploaded to a server. Your photos never leave your device, making it safe for personal photos, branded content, and unreleased creative work.',
          },
        },
      ],
    },
  ],
}

export default function CompressForPinterestLayout({ children }: { children: React.ReactNode }) {
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
