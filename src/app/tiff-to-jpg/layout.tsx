import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/tiff-to-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'TIFF to JPG Converter — Convert TIFF to JPEG Free Online',
  description:
    'Convert TIFF to JPG free online. Reduce huge TIFF files to compact JPEG instantly. No upload — 100% browser-based and private.',
  keywords: [
    'tiff to jpg',
    'tiff to jpeg',
    'convert tiff to jpg',
    'tiff to jpg online',
    'tiff to jpg free',
    'tif to jpg',
    'tiff to jpeg converter',
    'tiff file to jpg',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'TIFF to JPG Converter — Free Online',
    description:
      'Convert TIFF to JPG instantly. Shrink huge TIFF files to compact JPEG. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'TIFF to JPG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TIFF to JPG — Free Online Converter',
    description:
      'Convert TIFF to JPG free. Shrink large TIFF files to compact JPEG. No upload needed.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'TIFF to JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — TIFF to JPG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based TIFF to JPG converter. Convert large TIFF files to compact JPEG instantly. No file upload, no account required.',
      featureList: [
        'Convert TIFF to JPG online',
        'Drastically reduce TIFF file size',
        'High quality JPEG output at 92%',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on Windows, Mac, and mobile',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why convert TIFF to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TIFF files are uncompressed or losslessly compressed — a 12MP TIFF from a DSLR camera is typically 36MB or more. Converting to JPG reduces the same image to 2–5MB at quality 92, making it practical to share by email, upload to web platforms, or store in bulk. Most websites, CMS platforms, and social media accept JPG but not TIFF.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a TIFF file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TIFF (Tagged Image File Format) is a professional raster format used by cameras, scanners, and publishing workflows. It stores full pixel data without JPEG compression, making it ideal for archiving and print production. TIFF files are 10–30x larger than equivalent JPEGs, which is why they are rarely used on the web.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the JPG look the same as the TIFF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 92, the JPG output is visually identical to the TIFF for photographs viewed on screen. For images with very fine detail or sharp text, subtle JPEG compression artifacts may appear at extreme zoom. If you need pixel-perfect lossless quality, use PNG format instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much smaller will the JPG be compared to the TIFF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photographic content, the JPG is typically 85–95% smaller than the TIFF. A 36MB TIFF from a 12MP camera converts to approximately 3–5MB as JPG at quality 92. A scanned document TIFF of 50MB often compresses to under 3MB. The exact ratio depends on image content — photos compress more than line art.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does TIFF support transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TIFF can store transparency (alpha channel), but JPG cannot. If your TIFF has a transparent background, this tool fills it with white before converting to JPG. If you need to preserve transparency, export as PNG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can this tool handle multi-page TIFF files?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool converts the first page of a multi-page TIFF to JPG. Multi-page TIFFs are common in fax documents and scanned reports. For converting all pages of a multi-page TIFF, you will need dedicated software like Adobe Acrobat or IrfanView.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my TIFF files safe to convert here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All conversion happens entirely in your browser — no file is ever sent to a server. Your TIFF files stay on your device throughout the entire process. This is important for photographers working with RAW-adjacent TIFF files from professional shoots.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress the JPG further after converting from TIFF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. After converting TIFF to JPG, use the Compress Image tool to reduce the file size further. You can target a specific file size (1MB, 500KB) or use the quality slider to reach your exact target.',
          },
        },
      ],
    },
  ],
}

export default function TiffToJpgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
