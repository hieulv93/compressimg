import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-inches/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to Inches Online Free — Set Width & Height in Inches | CompressImg',
  description:
    'Resize any image to exact inch dimensions at any DPI. Enter width and height in inches, choose 72/96/150/300 DPI, download instantly. Free, browser-based.',
  keywords: [
    'resize image to inches',
    'resize photo to inches',
    'image resizer inches',
    'resize image in inches online',
    'image inches to pixels',
    'resize image inches dpi',
    'resize photo to inch size',
    'image size inches online',
    'convert image to inches',
    'resize image to 4x6 inches',
    'resize image to 8x10 inches',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to Inches Online Free',
    description:
      'Set width and height in inches, choose DPI (72/96/150/300), download instantly. Perfect for US print sizes — Letter, 4×6, 5×7, 8×10. Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to Inches — CompressImg' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to Inches Online Free',
    description: 'Set width and height in inches, choose DPI — download instantly.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize Image to Inches', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Image Resizer to Inches — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to exact inch dimensions at any DPI. Enter width and height in inches, select resolution (72, 96, 150, or 300 DPI), and download the resized image instantly. No upload, no server.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to Inches',
      description:
        'Resize any image to exact inch dimensions at your chosen DPI — free, in your browser.',
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
          name: 'Set DPI and enter dimensions in inches',
          text: 'Choose the resolution (150 DPI for documents, 300 DPI for professional print). Enter the target width and height in inches — for example, 4×6 for a photo print or 8.5×11 for US Letter. The tool shows the computed pixel output in real time.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the resized image',
          text: 'Click Resize Image and download. The output will be exactly the correct pixel size to print at your chosen dimensions and DPI.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many pixels is 4×6 inches at 300 DPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4×6 inches at 300 DPI is 1200×1800 pixels. The formula is: pixels = inches × DPI. At 150 DPI, 4×6 inches = 600×900 pixels.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is US Letter size in pixels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'US Letter (8.5×11 inches) at 300 DPI is 2550×3300 pixels. At 150 DPI it is 1275×1650 pixels. At 96 DPI it is 816×1056 pixels.',
          },
        },
        {
          '@type': 'Question',
          name: 'What DPI should I use for photo prints?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '300 DPI is the standard for photo lab prints. Most home printers produce good results at 150–300 DPI. If you are printing on a professional press (magazines, brochures), 300 DPI is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my image uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens entirely in your browser. Your image file never leaves your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'What formats are supported?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG, PNG, WebP, and HEIC (iPhone) are all supported. The output format matches the input format.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageToInchesLayout({ children }: { children: React.ReactNode }) {
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
