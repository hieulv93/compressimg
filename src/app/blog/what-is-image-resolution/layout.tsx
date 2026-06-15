import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/what-is-image-resolution/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'What Is Image Resolution? Pixels, DPI & File Size Explained (2026)',
  description:
    'Image resolution explained simply — what pixels and megapixels mean, DPI vs PPI for print and web, how resolution affects file size, and what resolution you need for printing.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Image Resolution? Pixels, DPI & File Size Explained',
    description:
      'Plain-English explanation of image resolution, megapixels, DPI vs PPI, and what resolution you actually need for web and print.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'What Is Image Resolution' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Image Resolution? Pixels, DPI and File Size Explained',
    description: 'Pixels, megapixels, DPI, PPI — all the resolution terms explained clearly.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What Is Image Resolution? Pixels, DPI, and File Size Explained (2026)',
      description:
        'Complete guide to image resolution — pixels vs megapixels, DPI vs PPI, how resolution affects file size, and what resolution you need for print at various sizes.',
      url: PAGE_URL,
      datePublished: '2026-06-15',
      dateModified: '2026-06-15',
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'What Is Image Resolution',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is image resolution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Image resolution is the total number of pixels in an image, expressed as width × height. A 1920×1080 image contains 1,920 pixels across and 1,080 pixels tall — about 2 megapixels. More pixels means more detail: higher resolution images can be printed larger, cropped more aggressively, and displayed on larger screens without becoming pixelated.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is DPI and why does it matter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DPI (dots per inch) describes how densely pixels are packed when an image is printed. 300 DPI is the standard for professional print quality. 72 DPI is web resolution — adequate for screen display but will look blurry when printed. For web use, the DPI value in an image file is ignored by browsers; only pixel dimensions matter for screen display.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between DPI and PPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PPI (pixels per inch) is the correct term for digital displays — how many pixels fit in one inch of screen. DPI (dots per inch) technically refers to ink dots on paper in print. In everyday use both terms are used interchangeably to mean the same thing. When someone says "72 DPI" for a web image, they mean 72 PPI.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many megapixels do I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For web display: 2–8 megapixels is plenty — a 1920×1080 image (2MP) fills a Full HD monitor completely. For A4 print at 300 DPI: you need about 8.7 megapixels (2481×3507px). For A3 print at 300 DPI: about 17 megapixels. Any modern smartphone camera (12MP+) is sufficient for standard print sizes up to A3.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does higher resolution mean better image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not automatically. Resolution means more pixels, but those pixels can still be blurry, noisy, or poorly lit. A sharp, well-lit 8 megapixel photo will look better than a blurry 48 megapixel photo at any practical display size. Image quality is affected by lens sharpness, sensor quality, focus accuracy, and lighting — not just pixel count.',
          },
        },
        {
          '@type': 'Question',
          name: 'What resolution do I need to print an A4 photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A4 is 8.27×11.69 inches. At 300 DPI (standard print quality), you need 2481×3507 pixels — about 8.7 megapixels. Any smartphone camera shot in the last 5 years provides more than enough pixels for A4 printing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does resizing an image change its resolution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Resizing changes the pixel dimensions. Scaling down (e.g., 4000×3000 to 1920×1440) reduces pixel count and file size. Scaling up adds pixels but cannot recover detail that was never captured — the result looks blurry or pixelated. For web use, always scale down to the required display size before compressing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What resolution is 4K?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4K (UHD) is 3840×2160 pixels — about 8.3 megapixels. The "4K" name comes from the approximate 4,000-pixel width. Cinema 4K (DCI 4K) is slightly different at 4096×2160. For consumer content (YouTube, TV, streaming), 3840×2160 is the standard 4K resolution.',
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
