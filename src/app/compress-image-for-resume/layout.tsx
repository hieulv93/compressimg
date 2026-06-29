import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/compress-image-for-resume')

export const metadata: Metadata = {
  title: 'Compress Image for Resume / CV — Photo Under 100KB Free',
  description:
    'Compress your resume or CV photo to under 100KB in one click. Fits Naukri, LinkedIn, Indeed, and all job portal limits. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image for Resume / CV — Photo Under 100KB Free',
    description:
      'Compress resume and CV photos to under 100KB — fits Naukri, LinkedIn, Indeed. No uploads, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compress Image for Resume Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Resume Photo — Under 100KB Free',
    description: 'Compress CV photos for Naukri, LinkedIn, Indeed. 100% browser-based — private.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Compress Image for Resume', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Compress Image for Resume / CV — Photo Under 100KB Free',
    description:
      'Compress your resume or CV photo to under 100KB in one click. Fits Naukri, LinkedIn, Indeed, and all job portal limits. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'What is the photo size limit for Naukri resume upload?',
        answer:
          'Naukri requires the resume photo to be under 50KB and in JPG or PNG format. The recommended dimensions are 200×200 pixels to 400×400 pixels with a plain white or light-coloured background. Use quality 75–80 on a 400×400px photo — the output will typically be 10–30KB, safely under the 50KB Naukri limit.',
      },
      {
        question: 'What photo size should I use for a LinkedIn profile picture?',
        answer:
          'LinkedIn accepts profile photos up to 8MB, but the recommended upload size is under 2MB for fast processing. LinkedIn displays profile photos at 400×400 pixels. Upload at 400×400px JPEG quality 85 — the file will be around 30–80KB, fast to upload and sharp on all screen sizes.',
      },
      {
        question: 'How do I compress a CV photo to under 20KB?',
        answer:
          'First resize your photo to 200×200 pixels using the Resize Image tool, then compress at quality 60–65. A 200×200px JPEG at quality 65 is typically 8–18KB. If still over 20KB, lower quality to 55. Avoid PNG for very small sizes — JPEG produces far smaller files at the same visual quality.',
      },
      {
        question: 'Can I compress an iPhone HEIC photo for my resume?',
        answer:
          'Yes. Upload your iPhone HEIC photo directly — it is automatically converted to JPEG during compression. iPhone photos are usually 4032×3024px, so the output JPEG at quality 80 will still be large. After compressing, use the Resize Image tool to reduce dimensions to 400×400px for job portal uploads.',
      },
      {
        question: 'What format should a resume photo be — JPG or PNG?',
        answer:
          'JPEG (JPG) is the best format for resume photos. It produces files 3–5× smaller than PNG at the same visual quality. PNG is only better if your photo has transparency (a cut-out background), which most job portals do not support anyway. Use JPEG at quality 80 for the best combination of file size and clarity.',
      },
      {
        question: 'Does compressing a resume photo affect how I look?',
        answer:
          'At quality 80, compression is virtually invisible on a 400×400px portrait photo. Skin tones, sharpness, and background detail remain accurate. Quality loss only becomes slightly visible at full-screen zoom at quality below 55. For any job portal display at typical thumbnail sizes, quality 75–85 is indistinguishable from the uncompressed original.',
      },
      {
        question: 'Is my resume photo safe when I use this tool?',
        answer:
          'Yes. All compression runs entirely in your browser using JavaScript. Your photo never leaves your device and is never uploaded, stored, or shared with any server. This is important for ID and face photos — you should never use a tool that uploads your photo to an unknown server.',
      },
      {
        question: 'What quality setting should I use for a job application photo?',
        answer:
          'Quality 80 is the recommended setting for most job application photos. At 400×400px and quality 80, the JPEG file is typically 20–50KB — under every job portal limit. For very strict limits like Naukri (50KB) at larger dimensions (600×600px), use quality 70–75.',
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
