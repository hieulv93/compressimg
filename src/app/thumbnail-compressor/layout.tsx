import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/thumbnail-compressor')

export const metadata: Metadata = {
  title: 'Thumbnail Compressor Online — Compress Under 2MB Free',
  description:
    'Free online thumbnail compressor for YouTube, gaming, and social media. Reduce thumbnail file size under 2MB instantly. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Thumbnail Compressor Online Free — YouTube, Gaming & Social Media',
    description:
      'Compress YouTube, gaming, and social media thumbnails under 2MB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Thumbnail Compressor Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thumbnail Compressor Online Free',
    description:
      'Compress YouTube and gaming thumbnails under 2MB. Free, no uploads, browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Thumbnail Compressor', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Thumbnail Compressor Online — Compress Under 2MB Free',
    description:
      'Free online thumbnail compressor for YouTube, gaming, and social media. Reduce thumbnail file size under 2MB instantly. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'What is the file size limit for YouTube thumbnails?',
        answer:
          'YouTube requires thumbnails to be under 2MB (2,048KB). The recommended dimensions are 1280×720 pixels (16:9 aspect ratio). This tool compresses your thumbnail file to under 2MB while preserving the full 1280×720 resolution and visual quality.',
      },
      {
        question: 'How do I compress a thumbnail without losing quality?',
        answer:
          'Set the quality slider to 80–85. At this setting, a 1280×720 JPG thumbnail compresses to 80–200KB with no visible quality loss when viewed on YouTube. The before/after comparison lets you check quality before downloading.',
      },
      {
        question: 'What format should I use for YouTube thumbnails?',
        answer:
          'JPG is the best format for YouTube thumbnails — it delivers the smallest file size for photos and graphic-heavy designs. PNG is better only if your thumbnail contains transparency or very sharp text edges. WebP is also accepted by YouTube and produces the smallest files, but some browsers may display it slightly differently.',
      },
      {
        question: 'My thumbnail is already 1280×720 — why is it over 2MB?',
        answer:
          'Design tools like Photoshop, Canva, and GIMP often export unoptimized files. A 1280×720 PNG exported from Canva can be 3–10MB. This compressor reduces the file to under 2MB by recompressing the image data — no dimension change needed. Use quality 80 as a starting point.',
      },
      {
        question: 'Can I compress thumbnails for Twitch, TikTok, and Instagram?',
        answer:
          'Yes. This tool compresses any JPG, PNG, or WebP image regardless of platform. Twitch panel images (recommended under 2.9MB), TikTok cover images (under 10MB), and Instagram post thumbnails all benefit from compression to speed up loading.',
      },
      {
        question: 'Does compressing a thumbnail reduce its dimensions?',
        answer:
          'No. This compressor reduces file size only — your thumbnail dimensions (e.g., 1280×720) remain unchanged. Compression removes redundant image data, not pixels. The output image is the same resolution as the input.',
      },
      {
        question: 'Is my thumbnail uploaded to a server?',
        answer:
          'No. All compression runs entirely in your browser using JavaScript. Your thumbnail never leaves your device and is never sent to any server. This tool is 100% private and works offline after the page loads.',
      },
      {
        question: 'What quality setting should I use for gaming thumbnails?',
        answer:
          'Quality 80 is the recommended setting for gaming thumbnails. Gaming thumbnails typically have high contrast, bold text, and vivid colors — quality 80 preserves all of these while reducing file size by 60–70%. If you need to go under 500KB, try quality 70.',
      },
      {
        question: 'How do I reduce thumbnail size in YouTube Studio?',
        answer:
          'YouTube Studio does not have a built-in thumbnail compressor. You need to compress the image before uploading. Export your thumbnail from Canva, Photoshop, or any design tool, compress it here at quality 80, then upload the compressed file in YouTube Studio under the Custom Thumbnail option.',
      },
      {
        question: 'How do I compress a YouTube thumbnail from Canva?',
        answer:
          "In Canva, export your thumbnail as JPG at standard quality. Canva JPG exports are often 1–5MB even at 1280×720. Upload the exported file here, set quality to 80, and download the compressed version — typically 80–200KB, well under YouTube's 2MB limit.",
      },
      {
        question: 'What is thumbnail compression and why does it matter?',
        answer:
          'Thumbnail compression reduces the file size of a thumbnail image by removing redundant image data. Smaller thumbnails load faster across video cards and search results, and stay within platform upload limits (YouTube: 2MB, Twitch: 10MB). Compressed thumbnails at quality 80 are visually identical to uncompressed originals on screen.',
      },
      {
        question: 'How do I compress a thumbnail for free without Photoshop?',
        answer:
          'Upload your thumbnail here — no Photoshop or software installation needed. Set quality to 80 and download the compressed file. The tool runs entirely in your browser, is completely free, and has no file limits or watermarks.',
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
