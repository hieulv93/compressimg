import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-200kb')

export const metadata: Metadata = {
  title: 'Resize Image to 200KB Online Free — Aadhaar, Visa',
  description:
    'Resize any image to under 200KB free. Perfect for Aadhaar/PAN document uploads, visa applications, and online form submissions. JPEG output, 100% private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 200KB Online Free — Aadhaar, Visa',
    description: 'Resize to under 200KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 200KB Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 200KB Online Free',
    description: 'Resize to under 200KB automatically. Free, browser-based, no upload.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image in KB', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image to 200KB Online Free — Aadhaar, Visa',
    description:
      'Resize any image to under 200KB free. Perfect for Aadhaar/PAN document uploads, visa applications, and online form submissions. JPEG output, 100% private.',
    faq: [
      {
        question: 'What is the Aadhaar document upload size limit?',
        answer:
          'Aadhaar update portal (UIDAI) typically requires documents under 200KB in JPEG format. This tool resizes to under 200KB automatically.',
      },
      {
        question: 'How do I resize a scanned document to under 200KB?',
        answer:
          'Scan at 150–200 DPI (not 600 DPI), save as JPEG, then upload here. Most A4 scans at 1024px wide land at 100–180KB — within the 200KB limit. If still over, the tool reduces it automatically.',
      },
      {
        question: 'What is the photo size limit for Schengen visa applications?',
        answer:
          'Schengen visa photo requirements vary by country but typically allow up to 500KB. Uploading under 200KB ensures compatibility with all Schengen consulate portals.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. All processing happens 100% in your browser. Your files never leave your device.',
      },
      {
        question: 'Can I resize a HEIC photo from iPhone to 200KB?',
        answer:
          'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing to 200KB.',
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
