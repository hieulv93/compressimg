import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/svg-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'SVG to PNG Converter Online Free — Convert SVG to PNG',
  description:
    'Free online SVG to PNG converter. Convert SVG files to PNG instantly — lossless output, no upload, 100% browser-based and private. Supports any SVG file up to 20MB.',
  keywords: [
    'svg to png',
    'svg to png converter',
    'convert svg to png',
    'svg to png online free',
    'svg to png online',
    'svg converter',
    'svg to png free',
    'convert svg to image',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'SVG to PNG Converter Online Free',
    description:
      'Convert SVG files to PNG instantly. Lossless output, no uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'SVG to PNG Converter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVG to PNG Converter Online Free',
    description: 'Convert SVG to PNG instantly. No uploads — 100% browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'SVG to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — SVG to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based SVG to PNG converter. Converts vector SVG files to raster PNG images instantly. No file upload required — 100% private.',
      featureList: [
        'Convert SVG to PNG online',
        'Preserves SVG dimensions and viewBox',
        'White background fill for transparent SVGs',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between SVG and PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SVG (Scalable Vector Graphics) is a vector format — it stores shapes, paths, and text as mathematical instructions, so it scales to any size without losing quality. PNG is a raster format — it stores individual pixels, so quality degrades when you scale it up. SVG is ideal for logos, icons, and illustrations. PNG is needed when compatibility matters: email clients, social media, most apps, and older software all support PNG but not SVG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why would I convert SVG to PNG instead of using SVG directly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many platforms and apps do not support SVG: Gmail, Outlook, Twitter, Facebook, WhatsApp, Slack, and most CMS image uploaders require raster formats like PNG or JPG. Presentations in PowerPoint or Google Slides render SVGs inconsistently. If you need to share an SVG as an image or use it in a context that only accepts PNG or JPG, conversion is the correct approach.',
          },
        },
        {
          '@type': 'Question',
          name: 'What resolution will the PNG be after conversion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The PNG output uses the same pixel dimensions as the SVG\'s width and height attributes, or the viewBox dimensions if no explicit size is set. For example, an SVG with width="400" height="300" produces a 400×300px PNG. If your SVG has no size and uses only a viewBox, the tool reads the viewBox dimensions. You can then resize the PNG with the Resize Image tool if you need a different output size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my SVG background be transparent or white in the PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "This tool fills the background with white before rendering the SVG. This is the safest default for compatibility — many apps display transparent PNGs with a black or checkered background. If you need a transparent PNG, use an SVG that has an explicit transparent or no background, and note that this tool's output will have a white fill.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert SVG icons and logos to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — SVG icons and logos are the most common use case. Upload your SVG icon, and the tool renders it to a PNG at its natural size. For logos, make sure your SVG has an explicit width and height (or a viewBox) so the output dimensions are predictable. If you need multiple sizes (e.g., 16px, 32px, 512px), convert once and use the Resize Image tool to generate each size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the conversion support SVG animations and filters?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SVG animations are not captured in PNG — PNG is a still image format. The converter renders a static snapshot of the SVG at the moment of conversion (typically the initial state of any animation). CSS filters, drop shadows, and blur effects defined within the SVG are rendered correctly in most modern browsers. Complex SVG features like foreignObject or external font references may not render as expected.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my SVG files uploaded to a server during conversion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No. All conversion happens entirely in your browser. Your SVG file is never sent to any server — it is processed using the browser's built-in Canvas API and SVG rendering engine. This means your files are completely private, including proprietary logos, unreleased artwork, and confidential vector assets.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert SVG to PNG on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This tool works fully on iOS and Android mobile browsers (Safari, Chrome, Firefox). Open the site on your phone, tap the upload area to select an SVG from your files app, and download the converted PNG directly to your device. No app installation required.',
          },
        },
      ],
    },
  ],
}

export default function SvgToPngLayout({ children }: { children: React.ReactNode }) {
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
