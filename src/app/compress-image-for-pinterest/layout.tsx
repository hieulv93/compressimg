import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-pinterest')

export const metadata: Metadata = {
  title: 'Does Pinterest Compress Images? Yes — Fix It Free',
  description:
    'Pinterest re-compresses every pin image on upload. Pre-compress your JPGs and PNGs at quality 80 to keep pins sharp and vibrant — free, browser-based, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does Pinterest Compress Images? Yes — Fix It Free',
    description:
      'Pinterest re-compresses every pin on upload. Pre-compress at quality 80 to keep pins sharp and vibrant — free, no uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Pinterest',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image for Pinterest — Free Photo Size Reducer',
    description:
      'Compress photos before pinning on Pinterest to avoid quality loss. 100% browser-based, no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Pinterest', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Does Pinterest Compress Images? Yes — Fix It Free',
    description:
      'Pinterest re-compresses every pin image on upload. Pre-compress your JPGs and PNGs at quality 80 to keep pins sharp and vibrant — free, browser-based, no sign-up.',
    faq: [
      {
        question: 'What is the best image size for Pinterest?',
        answer:
          'Pinterest recommends a 2:3 aspect ratio for standard pins — 1000×1500px is the most widely used size. Square pins (1000×1000px) work well for products. Tall pins (1000×2100px) get more screen real estate in feeds. Pinterest downscales images wider than 1000px, so there is no benefit to uploading at higher resolutions.',
      },
      {
        question: 'What file format should I use for Pinterest?',
        answer:
          'Pinterest supports JPG, PNG, WebP, and GIF. JPG is best for photographs and complex images — it produces smaller files than PNG at equivalent quality. PNG is better for graphics with text, logos, or flat colors where crisp edges matter. Pinterest does not support WebP uploads from desktop; use JPG for maximum compatibility.',
      },
      {
        question: 'What is the maximum file size for Pinterest images?',
        answer:
          'Pinterest accepts images up to 20MB. However, Pinterest re-compresses large images after upload, which can reduce visual quality. Uploading a pre-compressed image under 500KB gives Pinterest less to compress, resulting in a sharper pin on boards and in search results.',
      },
      {
        question: 'Why do my Pinterest images look blurry?',
        answer:
          'Pinterest applies automatic compression to all uploaded images. If your original is large (several MB), Pinterest compresses it aggressively, which introduces softness and artifacts. Pre-compressing at quality 80 before uploading reduces the file size so Pinterest needs to apply less additional compression — resulting in a noticeably sharper pin.',
      },
      {
        question: 'Can I compress Pinterest images on my phone?',
        answer:
          'Yes. This tool works fully in mobile browsers on iOS and Android — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select from your camera roll, compress, and download. No app installation required.',
      },
      {
        question: 'Are my images safe to compress with this tool?',
        answer:
          'Yes. All compression runs entirely in your browser — no image is ever uploaded to a server. Your photos never leave your device, making it safe for personal photos, branded content, and unreleased creative work.',
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
