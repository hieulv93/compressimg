import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-for-linkedin/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image for LinkedIn — Reduce Photo Size for Profile & Posts',
  description:
    'Free online tool to compress images for LinkedIn. Reduce JPG, PNG file size before uploading profile photos, cover images, and post attachments. 100% browser-based, no upload.',
  keywords: [
    'compress image for linkedin',
    'compress photo for linkedin',
    'reduce image size linkedin',
    'linkedin image compressor',
    'compress linkedin profile photo',
    'linkedin photo size reducer',
    'compress image before linkedin',
    'shrink photo linkedin',
    'linkedin image size reducer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for LinkedIn — Reduce Photo Size for Profile & Posts',
    description:
      'Reduce JPG and PNG file size before uploading to LinkedIn. Keep profile photos sharp, avoid re-compression — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image for LinkedIn' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for LinkedIn — Free Photo Size Reducer',
    description:
      'Compress profile photos and post images before uploading to LinkedIn. 100% browser-based, no uploads.',
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
          name: 'Compress Image for LinkedIn',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image for LinkedIn',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor for LinkedIn. Reduce JPG, PNG, WebP file size before uploading profile photos, background images, and post attachments to minimize re-compression and keep images sharp. No upload required.',
      featureList: [
        'Compress images before LinkedIn upload',
        'Supports JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'Avoid LinkedIn re-compression quality loss',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress an Image for LinkedIn',
      description:
        'Reduce image file size before uploading to LinkedIn to avoid quality loss on profile photos, cover images, and post attachments.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your photo',
          text: 'Click the upload area, drag and drop your image, or paste from clipboard with Ctrl+V. Supports JPG, PNG, and WebP files up to 20MB.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set quality to 80',
          text: 'Quality 80 reduces a typical professional headshot or banner from several MB to under 500KB without visible quality loss — ideal for LinkedIn profile and cover images.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload to LinkedIn',
          text: "Download the compressed file, then upload it to your LinkedIn profile, cover, or post. The pre-compressed image preserves professional-grade sharpness after LinkedIn's processing.",
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does my LinkedIn profile photo look blurry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LinkedIn compresses profile photos during upload and again for delivery across different devices and connection speeds. A high-resolution headshot (3–5MB) is reduced to the display size of 200×200px with additional lossy compression applied. Pre-compressing your photo to 400×400px at quality 80 — under 200KB — gives LinkedIn a file already at its display dimensions, requiring no downscaling. The result is a noticeably sharper profile photo.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image size for a LinkedIn profile photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload a square JPG at 400×400px compressed to under 200KB. LinkedIn displays profile photos at 200×200px but stores them at a larger size for retina displays. 400×400px provides the right balance: sharp at all display sizes, small enough that LinkedIn applies minimal re-compression. Make sure your face is centered — LinkedIn applies a circular crop that cuts the corners.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the recommended size for a LinkedIn background photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LinkedIn background photos (cover images) display at 1584×396px on desktop. Upload at exactly 1584×396px compressed to 300–600KB at quality 80. If you upload a larger image, LinkedIn crops and scales it down, which can shift the visible area of your design. Create your background image at the exact dimensions before uploading to ensure your layout appears as intended.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file size should LinkedIn images be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "For profile photos: under 200KB at 400×400px. For background/cover: 300–600KB. For post images: 300–700KB at 1200×627px or 1080×1080px. LinkedIn accepts files up to 8MB, but uploading at these target sizes gives LinkedIn less to compress, resulting in sharper images across all devices. LinkedIn's compression is more noticeable on mobile, so pre-optimizing matters for mobile viewers.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does LinkedIn compress images in posts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. LinkedIn compresses all images uploaded to posts, articles, and company pages. Post images are typically delivered at 500KB–2MB depending on dimensions — less aggressive than Facebook or Instagram, but still noticeable on high-resolution originals. Pre-compressing post images to 300–700KB at quality 80 before uploading ensures minimal additional quality loss.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format is best for LinkedIn?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG at quality 80 is best for professional headshots, event photos, and team photos. LinkedIn converts all images to JPG internally, so uploading JPG avoids an extra encode step. Use PNG for company logos, infographics, slide screenshots, and any image with text overlay — PNG preserves sharp edges and text that JPG compression would soften.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress LinkedIn images on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my LinkedIn images safe to compress with this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your professional headshots, company branding assets, and confidential presentation graphics never leave your device. This makes the tool suitable for business-sensitive content that you have not yet published publicly.',
          },
        },
      ],
    },
  ],
}

export default function CompressForLinkedInLayout({ children }: { children: React.ReactNode }) {
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
