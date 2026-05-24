import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/image-to-pdf/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Image to PDF Converter — Convert JPG, PNG to PDF Free Online',
  description:
    'Convert JPG, PNG, WebP, or HEIC to PDF instantly. Choose A4, Letter, or fit-to-image page size. 100% browser-based — your image never leaves your device. Free.',
  keywords: [
    'image to pdf',
    'jpg to pdf',
    'png to pdf',
    'convert image to pdf online',
    'photo to pdf',
    'image to pdf converter free',
    'jpg to pdf online free',
    'convert photo to pdf',
    'heic to pdf',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image to PDF Converter — Convert JPG, PNG to PDF Free Online',
    description:
      'Convert any image to PDF instantly. Choose A4, Letter, or fit-to-image. 100% browser-based — free, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Image to PDF Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to PDF Converter — Free Online',
    description:
      'Convert JPG, PNG, WebP to PDF instantly. A4, Letter, or fit. Free & browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Image to PDF', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Image to PDF Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image to PDF converter. Upload JPG, PNG, WebP, or HEIC and download a PDF instantly. Supports A4, US Letter, and fit-to-image page sizes. No upload, 100% private.',
      featureList: [
        'Converts JPG, PNG, WebP, HEIC to PDF',
        'A4, US Letter, and fit-to-image page size options',
        'Image centered on page with correct aspect ratio',
        'JPEG quality 92 — visually lossless',
        'No file upload — 100% browser-based',
        'Free with no limits or sign-up',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert an Image to PDF',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Choose page size',
          text: 'Select A4 (standard international), US Letter (North American standard), or Fit to Image (PDF sized to match exact image dimensions).',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the PDF',
          text: 'Click Download PDF. The file is generated in your browser and saved immediately. No server, no waiting.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does converting an image to PDF reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This tool embeds the image in the PDF at JPEG quality 92 — visually lossless. The image is not scaled down during the PDF creation step. If you choose A4 or Letter and the image is larger than the page, the image is scaled to fit while preserving aspect ratio, but at high quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'What page size should I choose?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Choose A4 (210×297mm) for international documents, resumes, and European printing. Choose US Letter (216×279mm) for US documents and printing. Choose Fit to Image if you want the PDF dimensions to exactly match your image — useful for digital sharing where you don't want white margins.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert a PNG with transparency to PDF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. PNG transparency is handled — transparent areas are filled white in the PDF output. This matches how most PDF viewers and printers handle transparency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image private when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All conversion runs in your browser using the Canvas API and jsPDF library. Your image is never uploaded to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert multiple images to one PDF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool converts one image per PDF. Each upload produces one PDF file. For multi-page PDFs, convert each image separately and combine using a PDF merge tool.',
          },
        },
      ],
    },
  ],
}

export default function ImageToPdfLayout({ children }: { children: React.ReactNode }) {
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
