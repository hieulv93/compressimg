import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-cm/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to Centimeters Online Free — Set Width & Height in CM | CompressImg',
  description:
    'Resize any image to exact centimeter dimensions at any DPI. Enter width and height in cm, choose 72/96/150/300 DPI, download instantly. Free, browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to Centimeters Online Free',
    description:
      'Set width and height in cm, choose DPI (72/96/150/300), download instantly. Perfect for print documents and A4 layouts. Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to CM — CompressImg' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to CM Online Free',
    description: 'Set width and height in centimeters, choose DPI — download instantly.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize Image to CM', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Image Resizer to Centimeters — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to exact centimeter dimensions at any DPI. Enter width and height in cm, select resolution (72, 96, 150, or 300 DPI), and download the resized image instantly. No upload, no server.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to Centimeters',
      description:
        'Resize any image to exact cm dimensions at your chosen DPI — free, in your browser.',
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
          name: 'Set DPI and enter dimensions in cm',
          text: 'Choose the resolution (150 DPI for documents, 300 DPI for professional print). Enter the target width and height in centimeters. The tool shows the computed pixel output in real time.',
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
          name: 'How many pixels is 21 cm at 300 DPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '21 cm at 300 DPI is 2480 pixels. The formula is: pixels = (cm ÷ 2.54) × DPI. So 21 ÷ 2.54 = 8.268 inches × 300 = 2480px. At 150 DPI, 21 cm = 1240px.',
          },
        },
        {
          '@type': 'Question',
          name: 'What DPI should I use for printing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '300 DPI is the standard for professional print (photos, brochures, posters). 150 DPI is adequate for documents and forms that will be printed at home or in an office. 72 or 96 DPI is for screen display only — it will look blurry if printed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is A4 size in pixels at 300 DPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A4 (21×29.7 cm) at 300 DPI is 2480×3508 pixels. At 150 DPI it is 1240×1754 pixels. At 72 DPI it is 595×842 pixels (standard PDF screen size).',
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
            text: 'JPG, PNG, WebP, and HEIC (iPhone) are all supported. The output format matches the input — a JPG input produces a JPG output, a PNG input produces a PNG output.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageToCmLayout({ children }: { children: React.ReactNode }) {
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
