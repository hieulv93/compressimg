import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/how-to-compress-images-for-instagram')

export const metadata: Metadata = {
  title: 'How to Compress Images for Instagram (2026 Guide)',
  description:
    'Compress images for Instagram without quality loss — correct dimensions, JPG quality settings, HEIC conversion, and file size tips for feed, Stories, and Reels.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images for Instagram Without Losing Quality',
    description:
      'The right compression settings for Instagram feed, Stories, and Reels. Stop blurry uploads forever.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Images for Instagram',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images for Instagram (2026)',
    description: 'Stop Instagram blurring your photos — correct dimensions and quality settings.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'How to Compress Images for Instagram', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Compress Images for Instagram (2026 Guide)',
    blog: {
      headline: 'How to Compress Images for Instagram Without Losing Quality (2026)',
      description:
        'Complete guide to compressing Instagram images — feed, Stories, Reels, correct dimensions, quality settings, HEIC conversion, and file size targets.',
      datePublished: '2026-06-15',
      dateModified: '2026-06-15',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'Why do my photos look blurry after uploading to Instagram?',
        answer:
          'Instagram automatically recompresses every uploaded image. Large files (high megapixel photos, files over 5MB) receive heavier compression than small files. Uploading at the wrong dimensions also forces Instagram to rescale, which adds additional quality loss. Pre-compressing to 1080px wide at quality 80–85 gives Instagram the best possible source material and results in sharper displayed images.',
      },
      {
        question: 'What is the best image size for Instagram?',
        answer:
          'Feed portrait: 1080×1350 px (4:5, recommended — takes up more feed space). Feed square: 1080×1080 px (1:1). Feed landscape: 1080×566 px (1.91:1). Stories and Reels: 1080×1920 px (9:16). All at quality 80–85 JPG, targeting under 300KB for feed posts.',
      },
      {
        question: 'What quality setting should I use when compressing images for Instagram?',
        answer:
          "Use JPG quality 80–85 for all Instagram uploads. This produces files in the 150–300KB range for correctly-sized images, which is Instagram's preferred input. At quality 80, visual quality is indistinguishable from quality 100 on a phone screen, but the file is 3–5x smaller and triggers minimal additional platform compression.",
      },
      {
        question: 'Should I upload PNG or JPG to Instagram?',
        answer:
          "JPG for all photographs and most content. PNG is larger for photos and triggers heavier platform compression. The exception is graphic design posts with text or flat-color areas where PNG's lossless quality is beneficial — but even then, a high-quality JPG (quality 85+) is acceptable.",
      },
      {
        question: 'How do I stop Instagram from compressing my photos?',
        answer:
          "You cannot prevent Instagram from compressing images — the platform always applies its own compression. What you can do is pre-compress to the correct dimensions (1080px wide) at quality 80–85 JPG. This gives Instagram already-optimized input and results in minimal additional quality loss from the platform's compression pass.",
      },
      {
        question: 'How do I compress iPhone HEIC photos for Instagram?',
        answer:
          "Option 1: Go to Settings → Camera → Formats → Most Compatible to shoot in JPG by default. Option 2: Use a browser-based tool to convert HEIC to JPG at quality 85 before uploading. Instagram converts HEIC automatically, but doing the conversion yourself gives you control over the output quality and removes a step from Instagram's processing chain.",
      },
      {
        question: 'What is the Instagram image file size limit?',
        answer:
          "Instagram's maximum file size for images is 30MB. In practice, a correctly compressed 1080×1350 JPG at quality 85 will be 200–300KB — well below this limit. The 30MB limit is mainly relevant for video uploads.",
      },
      {
        question: 'Does compressing images before uploading to Instagram actually help?',
        answer:
          "Yes, significantly. Pre-compressing removes Instagram's guesswork about how to resize and compress your image. When you upload at exactly 1080px wide at quality 80–85, Instagram applies minimal additional processing. When you upload a raw 12MP photo, Instagram must resize it, apply its own compression algorithm, and convert the format — each step introduces more quality loss.",
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
