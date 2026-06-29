import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog/how-to-add-watermark-to-photos')

export const metadata: Metadata = {
  title: 'How to Add a Watermark to Photos Online — Free Guide',
  description:
    'Learn how to watermark photos for free in your browser — no Photoshop needed. Covers position, opacity, font size, color, and when to use each setting.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Add a Watermark to Photos Online — Free Guide',
    description:
      'Watermark photos in 3 steps — position, opacity, color guide included. Free, no Photoshop.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How to Add a Watermark to Photos',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Add a Watermark to Photos — Free Guide',
    description: 'Position, opacity, color guide for photo watermarks. Free browser tool.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: 'How to Add a Watermark to Photos', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'How to Add a Watermark to Photos Online — Free Guide',
    blog: {
      headline: 'How to Add a Watermark to Photos Online — Free Guide',
      description:
        'Learn how to watermark photos for free in your browser — position, opacity, font size, and color guide.',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      url: PAGE_URL,
    },
    faq: [
      {
        question: 'Does adding a watermark reduce photo quality?',
        answer:
          'No, if you use the correct tool. Our watermark tool saves the output at JPEG quality 92 — visually lossless. The watermark text is rendered on top of your image using the Canvas API in your browser, so no server processing reduces the quality. The downloaded file is essentially as sharp as the original.',
      },
      {
        question: 'Can someone remove my watermark?',
        answer:
          'A determined editor can remove any watermark using Photoshop content-aware fill or AI tools. However, a visible watermark stops casual theft — most unauthorized reuse is opportunistic. For maximum protection, use a center watermark at 80% opacity, which makes the image difficult to use without obvious removal effort.',
      },
      {
        question: 'What opacity should I use for a watermark?',
        answer:
          '50–70% opacity is the sweet spot for most photographers and content creators — clearly readable without significantly distracting from the image. Use 20–40% for subtle branding on portfolio work, and 80–100% for client proofs where you want maximum deterrence.',
      },
      {
        question: 'Where should I place my watermark?',
        answer:
          'Bottom right is the most common position for photography watermarks — visible, minimal, and professional. Center placement offers the most protection (hard to crop out) and is best for client proof images. Avoid corners that are easily cropped off if theft prevention is your main goal.',
      },
      {
        question: 'What should my watermark text say?',
        answer:
          'Your name, studio name, website URL, or copyright notice are the most effective options. Examples: "© Jane Smith Photography", "yourwebsite.com", or "@yourhandle". Keep it short — a watermark that is too long must be reduced to an unreadably small size. A website URL is especially useful as it drives traffic when the image is shared.',
      },
      {
        question: 'Does watermarking work on iPhone photos (HEIC)?',
        answer:
          'Yes. Our watermark tool accepts HEIC files uploaded in Safari on iPhone and iPad. The HEIC is decoded in your browser and the watermark is applied before saving the output as JPEG. No conversion step is needed — just upload your HEIC photo directly.',
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
