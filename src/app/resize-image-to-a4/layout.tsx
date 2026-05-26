import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-a4/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to A4 Size Online Free — 2480×3508 or 1240×1754 px | CompressImg',
  description:
    'Resize any image to A4 size (21×29.7 cm) at 72, 96, 150, or 300 DPI. Portrait and landscape. Download instantly — free, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to A4 Size Online Free',
    description:
      'Resize to A4 at 300 DPI (2480×3508px), 150 DPI (1240×1754px), or 72 DPI (595×842px). Portrait and landscape. Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to A4 — CompressImg' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to A4 Size Online Free',
    description:
      'A4 at 300 DPI = 2480×3508px. At 150 DPI = 1240×1754px. Choose DPI and orientation — download instantly.',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resize Image',
          item: `${SITE_URL}/resize-image/`,
        },
        { '@type': 'ListItem', position: 3, name: 'Resize Image to A4', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Image Resizer to A4 — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to A4 size (21×29.7 cm) at any DPI. Supports portrait (2480×3508px at 300 DPI) and landscape (3508×2480px at 300 DPI). No upload, no server.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to A4 Size',
      description: 'Resize any image to A4 dimensions at your chosen DPI — free, in your browser.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click or drag your JPG, PNG, WebP, or HEIC image onto the upload area.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Choose DPI and orientation',
          text: 'Select the output resolution: 300 DPI for print quality (2480×3508px), 150 DPI for documents and forms (1240×1754px), or 72 DPI for screen/PDF (595×842px). Toggle Portrait or Landscape.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the A4-sized image',
          text: 'Click Resize Image and download. The output is the exact pixel size for A4 at your chosen DPI.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is A4 size in pixels at 300 DPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A4 (21×29.7 cm) at 300 DPI is 2480×3508 pixels in portrait orientation. In landscape it is 3508×2480 pixels. This is the standard resolution for professional print output.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is A4 at 150 DPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A4 at 150 DPI is 1240×1754 pixels in portrait. This is adequate for printing on a home or office printer and for embedding images in Word or Google Docs documents.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is A4 at 72 DPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A4 at 72 DPI is 595×842 pixels — the standard PDF page size used by Adobe Acrobat and most PDF viewers. Use this for screen-only PDFs and presentations where file size matters.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is A4 the same as US Letter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A4 is 21×29.7 cm (8.27×11.69 inches). US Letter is 8.5×11 inches (21.59×27.94 cm). A4 is slightly taller and narrower than Letter. Use the Resize Image to Inches tool for US Letter dimensions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens entirely in your browser using the Canvas API. Your image file never leaves your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageToA4Layout({ children }: { children: React.ReactNode }) {
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
