import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize JPG Online Free — Change JPEG Width & Height | CompressImg',
  description:
    'Resize JPG and JPEG images online for free. Change width and height by pixel. Preserves JPG format and quality. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize JPG Online Free — Change JPEG Width & Height | CompressImg',
    description:
      'Resize JPG images to any pixel dimension free. Enter width and height, download instantly. No upload, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize JPG Online — CompressImg' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize JPG Online Free — Change JPEG Dimensions',
    description: 'Change JPG width and height by pixel — free, instant, no upload.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'JPG Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize JPG and JPEG images to any pixel dimensions. Upload your photo, set width and height, and download the resized JPG instantly. Processing happens entirely in your browser.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a JPG Image Online',
      description: 'Resize any JPG to exact pixel dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your JPG',
          text: 'Click or drag your JPG or JPEG file onto the upload area. HEIC photos from iPhone are automatically converted.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set the target dimensions',
          text: 'Enter the width and height in pixels. Use the lock icon to maintain the original aspect ratio.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the resized JPG',
          text: 'Click Resize Image and download your resized JPEG file instantly.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does resizing a JPG reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Downscaling (making smaller) preserves quality well — the image has the same information in fewer pixels. Upscaling (making larger) always reduces sharpness because pixels are interpolated. For best results, always resize down from a larger original.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the output format after resizing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The output is JPEG — the same format as the input. JPEG uses lossy compression, which is ideal for photos. The tool uses 92% quality, which produces sharp output with a small file size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize a JPG to an exact pixel size for a form?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Enter exact pixel dimensions in the width and height fields. If the form requires a specific file size (e.g., under 100KB), use the Resize Image in KB tool after resizing to the correct dimensions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my JPG file uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens entirely in your browser using the Canvas API. Your file is never sent to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize multiple JPG files at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool processes one file at a time. For batch resizing multiple JPGs, use the Resize Images (Batch) tool.',
          },
        },
      ],
    },
  ],
}

export default function ResizeJpgLayout({ children }: { children: React.ReactNode }) {
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
