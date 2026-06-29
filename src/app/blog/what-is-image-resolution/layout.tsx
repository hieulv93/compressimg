import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/what-is-image-resolution')

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
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'What Is Image Resolution',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Image Resolution? Pixels, DPI and File Size Explained',
    description: 'Pixels, megapixels, DPI, PPI — all the resolution terms explained clearly.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'What Is Image Resolution', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'What Is Image Resolution? Pixels, DPI & File Size Explained (2026)',
    blog: {
      headline: 'What Is Image Resolution? Pixels, DPI, and File Size Explained (2026)',
      description:
        'Complete guide to image resolution — pixels vs megapixels, DPI vs PPI, how resolution affects file size, and what resolution you need for print at various sizes.',
      datePublished: '2026-06-15',
      dateModified: '2026-06-15',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'What is image resolution?',
        answer:
          'Image resolution is the total number of pixels in an image, expressed as width × height. A 1920×1080 image contains 1,920 pixels across and 1,080 pixels tall — about 2 megapixels. More pixels means more detail: higher resolution images can be printed larger, cropped more aggressively, and displayed on larger screens without becoming pixelated.',
      },
      {
        question: 'What is DPI and why does it matter?',
        answer:
          'DPI (dots per inch) describes how densely pixels are packed when an image is printed. 300 DPI is the standard for professional print quality. 72 DPI is web resolution — adequate for screen display but will look blurry when printed. For web use, the DPI value in an image file is ignored by browsers; only pixel dimensions matter for screen display.',
      },
      {
        question: 'What is the difference between DPI and PPI?',
        answer:
          'PPI (pixels per inch) is the correct term for digital displays — how many pixels fit in one inch of screen. DPI (dots per inch) technically refers to ink dots on paper in print. In everyday use both terms are used interchangeably to mean the same thing. When someone says "72 DPI" for a web image, they mean 72 PPI.',
      },
      {
        question: 'How many megapixels do I need?',
        answer:
          'For web display: 2–8 megapixels is plenty — a 1920×1080 image (2MP) fills a Full HD monitor completely. For A4 print at 300 DPI: you need about 8.7 megapixels (2481×3507px). For A3 print at 300 DPI: about 17 megapixels. Any modern smartphone camera (12MP+) is sufficient for standard print sizes up to A3.',
      },
      {
        question: 'Does higher resolution mean better image quality?',
        answer:
          'Not automatically. Resolution means more pixels, but those pixels can still be blurry, noisy, or poorly lit. A sharp, well-lit 8 megapixel photo will look better than a blurry 48 megapixel photo at any practical display size. Image quality is affected by lens sharpness, sensor quality, focus accuracy, and lighting — not just pixel count.',
      },
      {
        question: 'What resolution do I need to print an A4 photo?',
        answer:
          'A4 is 8.27×11.69 inches. At 300 DPI (standard print quality), you need 2481×3507 pixels — about 8.7 megapixels. Any smartphone camera shot in the last 5 years provides more than enough pixels for A4 printing.',
      },
      {
        question: 'Does resizing an image change its resolution?',
        answer:
          'Resizing changes the pixel dimensions. Scaling down (e.g., 4000×3000 to 1920×1440) reduces pixel count and file size. Scaling up adds pixels but cannot recover detail that was never captured — the result looks blurry or pixelated. For web use, always scale down to the required display size before compressing.',
      },
      {
        question: 'What resolution is 4K?',
        answer:
          '4K (UHD) is 3840×2160 pixels — about 8.3 megapixels. The "4K" name comes from the approximate 4,000-pixel width. Cinema 4K (DCI 4K) is slightly different at 4096×2160. For consumer content (YouTube, TV, streaming), 3840×2160 is the standard 4K resolution.',
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
