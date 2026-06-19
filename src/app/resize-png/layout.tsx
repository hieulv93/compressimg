import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize PNG Online Free — Change PNG Image Dimensions',
  description:
    'Resize PNG images online for free. Change dimensions while keeping PNG format and transparency. No upload, no quality loss — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize PNG Online Free — Change PNG Image Dimensions | CompressImg',
    description:
      'Resize PNG images to any pixel dimensions free. Transparency is preserved. No upload, no sign-up.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize PNG Online — CompressImg' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize PNG Online Free — Change PNG Dimensions',
    description: 'Change PNG width and height by pixel. Transparency preserved — free, no upload.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'PNG Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize PNG images to any pixel dimensions. Transparency (alpha channel) is preserved in the resized output. Processing happens entirely in your browser — your files are never uploaded.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a PNG Image Online',
      description: 'Resize any PNG to exact pixel dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your PNG',
          text: 'Click or drag your PNG file onto the upload area. Transparent PNGs are fully supported.',
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
          name: 'Download the resized PNG',
          text: 'Click Resize Image and download your resized PNG file with transparency intact.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does resizing a PNG keep the transparent background?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool uses the browser Canvas API with PNG output, which fully supports transparency (alpha channel). Logos, icons, and cutout images retain their transparent areas after resizing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I resize a PNG or convert it to JPG first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Keep PNG if your image has transparent areas or sharp edges (logos, icons, text). Convert to JPG only for photos without transparency — JPG produces a much smaller file for photographic content. Use our PNG to JPG converter if needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my resized PNG still large in file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG uses lossless compression, so file size depends on content complexity, not just pixel count. For smaller PNG files, try using the Compress PNG tool after resizing, or convert to WebP which offers smaller files at the same quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my PNG file uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens entirely in your browser using the Canvas API. Your file is never sent to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize a PNG logo without losing sharpness?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Downscaling a PNG logo works well — the output remains sharp at the target size. For upscaling (making larger), quality will degrade regardless of the tool. Always start from the largest original version of your logo.',
          },
        },
      ],
    },
  ],
}

export default function ResizePngLayout({ children }: { children: React.ReactNode }) {
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
