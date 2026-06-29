import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/heic-to-png')

export const metadata: Metadata = {
  title: 'HEIC to PNG Converter — Convert iPhone Photos to PNG Free',
  description:
    'Convert HEIC to PNG free online. Lossless PNG output — no quality loss. Works on Windows, Android, and web. No upload, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'HEIC to PNG Converter — Convert iPhone Photos to PNG Free',
    description:
      'Convert iPhone HEIC photos to PNG instantly. Lossless output, no quality loss. 100% browser-based — no upload, no app required.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HEIC to PNG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to PNG — Free iPhone Photo Converter',
    description: 'Convert iPhone HEIC photos to PNG free. Lossless output. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'HEIC to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'HEIC to PNG Converter — Convert iPhone Photos to PNG Free',
    description:
      'Convert HEIC to PNG free online. Lossless PNG output — no quality loss. Works on Windows, Android, and web. No upload, 100% browser-based.',
    faq: [
      {
        question: 'What is HEIC and why do I need to convert it to PNG?',
        answer:
          'HEIC (High Efficiency Image Container) is the default photo format on iPhones since iOS 11. It produces smaller files than JPG at the same quality, but it is not supported by most Windows apps, Android devices, or web platforms. Converting to PNG gives you a universally compatible format with lossless quality — no data is thrown away in the conversion.',
      },
      {
        question: 'Is HEIC to PNG conversion lossless?',
        answer:
          'Yes. PNG uses lossless compression, so the visual content of your image is preserved perfectly. No pixel data is discarded during the conversion. The resulting PNG will be visually identical to the original HEIC photo at full resolution.',
      },
      {
        question: 'Why convert HEIC to PNG instead of JPG?',
        answer:
          'Choose PNG over JPG when you need lossless quality (no compression artifacts), when you plan to edit the image further, when the image contains text or sharp lines that degrade with JPG compression, or when the platform requires PNG format. Choose JPG when file size matters more than absolute quality, such as for social media or email.',
      },
      {
        question: 'Will the PNG file be larger than the original HEIC?',
        answer:
          'Yes, typically 2–4 times larger. HEIC uses highly efficient lossy compression that keeps file sizes small. PNG uses lossless compression, which preserves all pixel data and produces larger files. A 3MB HEIC photo may become an 8–15MB PNG. If file size matters, consider converting to JPG instead.',
      },
      {
        question: 'Are my HEIC photos safe to convert here?',
        answer:
          'Yes. All conversion happens entirely in your browser using JavaScript — no file is ever sent to a server. Your photos stay on your device throughout the entire process. This makes the tool safe for personal photos, private documents, and confidential images.',
      },
      {
        question: 'Can I convert HEIC to PNG on my iPhone?',
        answer:
          'Yes. Open this page in Safari or Chrome on your iPhone. Tap the upload area and select your HEIC photo from the camera roll. The browser converts it locally. The downloaded PNG saves to your Files app.',
      },
      {
        question: 'Does the converted PNG preserve transparency?',
        answer:
          'HEIC photos from the iPhone camera do not contain transparency — they are standard opaque photos. The converted PNG will have a solid background matching the original photo. PNG transparency support is relevant when converting design assets, not camera photos.',
      },
      {
        question: 'Does converting HEIC to PNG preserve EXIF data?',
        answer:
          'The browser-based conversion process does not preserve EXIF metadata such as GPS coordinates, date taken, or camera settings. If you need to retain EXIF data, use a desktop application like Adobe Lightroom or Apple Photos (File → Export as PNG).',
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
