import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/raw-to-jpg')

export const metadata: Metadata = {
  title: 'RAW to JPG Converter Online Free — CR2, CR3, NEF, ARW to JPG',
  description:
    'Convert camera RAW files to JPG free online. CR2, CR3 (Canon), NEF (Nikon), ARW (Sony), DNG to JPG instantly. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'RAW to JPG Converter Online Free — CR2, CR3, NEF, ARW to JPG',
    description:
      'Convert CR2, CR3, NEF, ARW, DNG camera files to JPG instantly. No upload, no software install — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RAW to JPG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAW to JPG Converter — CR2, CR3, NEF, ARW Free Online',
    description:
      'Convert camera RAW files to JPG free. CR2, CR3, NEF, ARW, DNG — no upload, instant, 100% private.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'RAW to JPG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'RAW to JPG Converter Online Free — CR2, CR3, NEF, ARW to JPG',
    description:
      'Convert camera RAW files to JPG free online. CR2, CR3 (Canon), NEF (Nikon), ARW (Sony), DNG to JPG instantly. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'How do I convert CR2 to JPG online for free?',
        answer:
          'Upload your CR2 file to this tool. It extracts the embedded full-resolution JPEG preview from the CR2 container and lets you download it as a JPG. No software installation, no account, and no file upload to any server. Works for CR2 files from any Canon DSLR.',
      },
      {
        question: 'How do I convert NEF to JPG online?',
        answer:
          'Drop your NEF file into the upload area. Nikon NEF files embed a full-resolution JPEG preview that this tool extracts in your browser. The result is a JPG file compatible with any viewer, platform, or app. The conversion takes under one second for any NEF file size.',
      },
      {
        question: 'Can I convert Sony ARW to JPG without installing software?',
        answer:
          'Yes. ARW files from Sony cameras (Alpha, ZV, RX series) embed a full-resolution JPEG preview. Upload the ARW file and the tool extracts the preview in your browser instantly — no software, no sign-up, no server upload.',
      },
      {
        question: 'Is my RAW file uploaded to a server?',
        answer:
          "No. All processing happens in your browser using JavaScript. The RAW file never leaves your device. This is verifiable by checking your browser's network activity — you will see no file upload request while using the tool.",
      },
      {
        question: 'What is the difference between a RAW file and a JPG?',
        answer:
          'A RAW file contains unprocessed sensor data from the camera — up to 14 bits per pixel — and requires software to decode and render. A JPG is a compressed, processed image that opens in any viewer. RAW files are much larger (20–80MB vs 4–8MB for JPG) and offer more editing flexibility, but JPG is required for sharing, uploading to platforms, and printing at standard labs.',
      },
      {
        question: 'Why does the extracted JPG look exactly like what the camera produces?',
        answer:
          "The camera generates a full-resolution JPEG at the moment of capture and stores it inside the RAW file. This preview uses the camera's picture style (neutral, vivid, landscape, etc.), white balance, and noise reduction — the same processing the camera would apply if you had shot in JPG mode. Extracting this embedded JPEG gives you camera-quality output without any additional rendering.",
      },
      {
        question: 'Does it work for CR3 files from Canon EOS R cameras?',
        answer:
          'Yes. CR3 is the RAW format used by Canon EOS R-series mirrorless cameras (R, R5, R6, R8, R50, R100, R3) and newer Canon DSLRs. The CR3 container uses a different structure than CR2 (ISO base media file format instead of TIFF), but this tool handles both formats and extracts the full-resolution embedded JPEG preview from CR3 files.',
      },
      {
        question: 'Can I compress the converted JPG to reduce file size further?',
        answer:
          'Yes. After downloading the JPG, you can reduce its file size further using the Image Compressor on this site. The compressor works with JPG, PNG, and WebP and runs entirely in your browser.',
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
