import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/heic-to-jpg')

export const metadata: Metadata = {
  title: 'Convert iPhone Photos to JPG Free — HEIC to JPG Converter',
  description:
    'iPhone saves photos as HEIC — convert them to JPG free online. Opens on Windows, Android, and any website instantly. No upload, 100% browser-based, no app install.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Convert iPhone Photos to JPG Free — HEIC to JPG Converter',
    description:
      'iPhone photos are saved as HEIC — convert them to JPG instantly. Works on Windows, Android, and web. 100% browser-based — no upload, no app required.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HEIC to JPG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert iPhone Photos to JPG Free — HEIC Converter',
    description:
      'iPhone photos are HEIC — convert to JPG free online. Opens on Windows, Android, and any site. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'HEIC to JPG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Convert iPhone Photos to JPG Free — HEIC to JPG Converter',
    description:
      'iPhone saves photos as HEIC — convert them to JPG free online. Opens on Windows, Android, and any website instantly. No upload, 100% browser-based, no app install.',
    faq: [
      {
        question: 'Is my HEIC photo safe to convert here?',
        answer:
          'Yes. All conversion happens entirely in your browser using JavaScript — no file is ever sent to a server. Your photos stay on your device throughout the entire process. This makes the tool safe for personal photos, passport photos, and confidential documents.',
      },
      {
        question: 'Will converting HEIC to JPG reduce the image quality?',
        answer:
          'At quality 90 (which this tool uses), the visual difference between HEIC and the converted JPG is imperceptible. Both formats use lossy compression, so there is a small theoretical quality loss, but it is not visible in normal viewing conditions.',
      },
      {
        question: 'Why does my HEIC file show as blank on Windows?',
        answer:
          'Windows does not include native HEIC support by default. Microsoft offers the HEVC Video Extensions codec for $0.99 in the Microsoft Store, which adds HEIC support. Alternatively, converting to JPG is the free solution that works immediately without any software installation.',
      },
      {
        question: 'Can I convert HEIC to JPG on my iPhone?',
        answer:
          'Yes. Open this page in Safari or Chrome on your iPhone. Tap the upload area and select your HEIC photo from the camera roll. The browser converts it locally. The downloaded JPG saves to your Files app or camera roll.',
      },
      {
        question: 'What is the difference between HEIC and HEIF?',
        answer:
          "HEIF (High Efficiency Image Format) is the container format standard. HEIC is Apple's implementation of HEIF using the HEVC codec. In practice, .heic and .heif files are functionally identical. Both are converted to JPG by this tool.",
      },
      {
        question: 'How do I stop my iPhone from taking photos in HEIC format?',
        answer:
          "Go to Settings → Camera → Formats and select 'Most Compatible'. This changes the camera to record JPG files directly. Note that this uses approximately twice the storage per photo compared to HEIC.",
      },
      {
        question: 'Does converting HEIC to JPG preserve EXIF data?',
        answer:
          'The browser-based conversion process does not preserve EXIF metadata such as GPS coordinates, date taken, or camera settings. If you need to retain EXIF data, use a desktop application like Adobe Lightroom or Apple Photos (File → Export).',
      },
      {
        question: 'Can I convert multiple HEIC files at once?',
        answer:
          'Currently this tool converts one file at a time. For batch conversion, you can use the tool repeatedly — each conversion takes 1–3 seconds. Batch conversion is on the development roadmap.',
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
