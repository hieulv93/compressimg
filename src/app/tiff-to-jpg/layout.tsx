import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/tiff-to-jpg')

export const metadata: Metadata = {
  title: 'TIFF to JPG Converter — Convert TIFF to JPEG Free Online',
  description:
    'Convert TIFF to JPG free online. Reduce huge TIFF files to compact JPEG instantly. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'TIFF to JPG Converter — Free Online',
    description:
      'Convert TIFF to JPG instantly. Shrink huge TIFF files to compact JPEG. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TIFF to JPG Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TIFF to JPG — Free Online Converter',
    description:
      'Convert TIFF to JPG free. Shrink large TIFF files to compact JPEG. No upload needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'TIFF to JPG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'TIFF to JPG Converter — Convert TIFF to JPEG Free Online',
    description:
      'Convert TIFF to JPG free online. Reduce huge TIFF files to compact JPEG instantly. No upload — 100% browser-based and private.',
    faq: [
      {
        question: 'Why convert TIFF to JPG?',
        answer:
          'TIFF files are uncompressed or losslessly compressed — a 12MP TIFF from a DSLR camera is typically 36MB or more. Converting to JPG reduces the same image to 2–5MB at quality 92, making it practical to share by email, upload to web platforms, or store in bulk. Most websites, CMS platforms, and social media accept JPG but not TIFF.',
      },
      {
        question: 'What is a TIFF file?',
        answer:
          'TIFF (Tagged Image File Format) is a professional raster format used by cameras, scanners, and publishing workflows. It stores full pixel data without JPEG compression, making it ideal for archiving and print production. TIFF files are 10–30x larger than equivalent JPEGs, which is why they are rarely used on the web.',
      },
      {
        question: 'Will the JPG look the same as the TIFF?',
        answer:
          'At quality 92, the JPG output is visually identical to the TIFF for photographs viewed on screen. For images with very fine detail or sharp text, subtle JPEG compression artifacts may appear at extreme zoom. If you need pixel-perfect lossless quality, use PNG format instead.',
      },
      {
        question: 'How much smaller will the JPG be compared to the TIFF?',
        answer:
          'For photographic content, the JPG is typically 85–95% smaller than the TIFF. A 36MB TIFF from a 12MP camera converts to approximately 3–5MB as JPG at quality 92. A scanned document TIFF of 50MB often compresses to under 3MB. The exact ratio depends on image content — photos compress more than line art.',
      },
      {
        question: 'Does TIFF support transparency?',
        answer:
          'TIFF can store transparency (alpha channel), but JPG cannot. If your TIFF has a transparent background, this tool fills it with white before converting to JPG. If you need to preserve transparency, export as PNG instead.',
      },
      {
        question: 'Can this tool handle multi-page TIFF files?',
        answer:
          'This tool converts the first page of a multi-page TIFF to JPG. Multi-page TIFFs are common in fax documents and scanned reports. For converting all pages of a multi-page TIFF, you will need dedicated software like Adobe Acrobat or IrfanView.',
      },
      {
        question: 'Are my TIFF files safe to convert here?',
        answer:
          'Yes. All conversion happens entirely in your browser — no file is ever sent to a server. Your TIFF files stay on your device throughout the entire process. This is important for photographers working with RAW-adjacent TIFF files from professional shoots.',
      },
      {
        question: 'Can I compress the JPG further after converting from TIFF?',
        answer:
          'Yes. After converting TIFF to JPG, use the Compress Image tool to reduce the file size further. You can target a specific file size (1MB, 500KB) or use the quality slider to reach your exact target.',
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
