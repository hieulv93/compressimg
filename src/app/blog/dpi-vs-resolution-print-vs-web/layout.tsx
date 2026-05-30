import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/dpi-vs-resolution-print-vs-web/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'DPI vs Resolution: Image Settings for Print vs Web (2026 Guide)',
  description:
    "DPI and resolution explained — what they mean for print (300 DPI) vs web (72 PPI), why they're different, and how to set the right values for your use case.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'DPI vs Resolution: Image Settings for Print vs Web',
    description:
      '300 DPI for print, 72 PPI for web — what it means and how to set the right values.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'DPI vs Resolution Guide' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DPI vs Resolution: Print vs Web Explained',
    description: '300 DPI for print, 72 PPI for web — the complete explanation.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'DPI vs Resolution: Image Settings for Print vs Web (2026 Guide)',
      description: 'DPI and resolution explained for print and web use cases.',
      url: PAGE_URL,
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: OG_IMAGE },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: 'DPI vs Resolution', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between DPI and resolution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DPI (dots per inch) is a print concept — it describes how many ink dots a printer places per inch of physical output. Resolution refers to the total pixel count of an image (e.g., 3000 × 2400 px). For printing, both are relevant. For web, only pixel dimensions matter — DPI is ignored by browsers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does DPI matter for web images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Browsers ignore the DPI value embedded in image files. For web images, only the pixel dimensions affect display. A 800 × 600 px image at 72 DPI displays identically to the same image at 300 DPI — both appear at 800 × 600 pixels in the browser.',
          },
        },
        {
          '@type': 'Question',
          name: 'What DPI should I use for print?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '300 DPI is the standard for professional print work — photos, magazines, brochures, business cards. For large-format materials viewed from a distance (banners, posters), 100–150 DPI is sufficient. For billboards, as low as 15–72 DPI is common.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is 72 DPI in pixels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '72 DPI is a screen resolution standard — originally set by Apple in the 1980s. At 72 DPI, 1 CSS pixel = 1 physical pixel on an original standard monitor. On modern Retina displays at 144+ PPI, the OS scales the display so 1 CSS pixel is still rendered at the same apparent size.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate pixels needed for a print at 300 DPI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Multiply the desired print size in inches by 300. For a 4 × 6 inch print: 4 × 300 = 1200 px wide, 6 × 300 = 1800 px tall. For millimeters: px = mm × (300 / 25.4). For example, 35mm = 35 × 11.81 = 413 px.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I change the DPI of an image without losing quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can change the DPI metadata embedded in a file without resampling the actual pixels. This does not change the image quality or pixel count — only the embedded print size hint. However, increasing DPI by adding new pixels (upsampling) does reduce quality because the software has to invent pixel data.',
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
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
