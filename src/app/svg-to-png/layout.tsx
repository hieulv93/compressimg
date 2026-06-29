import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/svg-to-png')

export const metadata: Metadata = {
  title: 'SVG to PNG Converter Online Free — Convert SVG to PNG',
  description:
    'Free online SVG to PNG converter. Convert SVG files to PNG instantly — lossless output, no upload, 100% browser-based and private. Supports any SVG file up to 20MB.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'SVG to PNG Converter Online Free',
    description:
      'Convert SVG files to PNG instantly. Lossless output, no uploads — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SVG to PNG Converter Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVG to PNG Converter Online Free',
    description: 'Convert SVG to PNG instantly. No uploads — 100% browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'SVG to PNG', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'SVG to PNG Converter Online Free — Convert SVG to PNG',
    description:
      'Free online SVG to PNG converter. Convert SVG files to PNG instantly — lossless output, no upload, 100% browser-based and private. Supports any SVG file up to 20MB.',
    faq: [
      {
        question: 'What is the difference between SVG and PNG?',
        answer:
          'SVG (Scalable Vector Graphics) is a vector format — it stores shapes, paths, and text as mathematical instructions, so it scales to any size without losing quality. PNG is a raster format — it stores individual pixels, so quality degrades when you scale it up. SVG is ideal for logos, icons, and illustrations. PNG is needed when compatibility matters: email clients, social media, most apps, and older software all support PNG but not SVG.',
      },
      {
        question: 'Why would I convert SVG to PNG instead of using SVG directly?',
        answer:
          'Many platforms and apps do not support SVG: Gmail, Outlook, Twitter, Facebook, WhatsApp, Slack, and most CMS image uploaders require raster formats like PNG or JPG. Presentations in PowerPoint or Google Slides render SVGs inconsistently. If you need to share an SVG as an image or use it in a context that only accepts PNG or JPG, conversion is the correct approach.',
      },
      {
        question: 'What resolution will the PNG be after conversion?',
        answer:
          'The PNG output uses the same pixel dimensions as the SVG\'s natural viewBox or width/height attributes. If your SVG specifies width="100" height="100", the PNG will be 100×100 pixels. If no dimensions are set, the browser defaults to 300×150px. For a larger PNG, add explicit width and height attributes to your SVG before converting, or use the Resize Image tool on the output.',
      },
      {
        question: 'Will my SVG background be transparent or white in the PNG?',
        answer:
          "This tool fills the background with white before rendering the SVG. This is the safest default for compatibility — many apps display transparent PNGs with a black or checkered background. If you need a transparent PNG, use an SVG that has an explicit transparent or no background, and note that this tool's output will have a white fill.",
      },
      {
        question: 'Can I convert SVG icons and logos to PNG?',
        answer:
          'Yes — SVG icons and logos are the most common use case. Upload your SVG icon, and the tool renders it to a PNG at its natural size. For logos, make sure your SVG has an explicit width and height (or a viewBox) so the output dimensions are predictable. If you need multiple sizes (e.g., 16px, 32px, 512px), convert once and use the Resize Image tool to generate each size.',
      },
      {
        question: 'Does the conversion support SVG animations and filters?',
        answer:
          'SVG animations are not captured in PNG — PNG is a still image format. The converter renders a static snapshot of the SVG at the moment of conversion (typically the initial state of any animation). CSS filters, drop shadows, and blur effects defined within the SVG are rendered correctly in most modern browsers. Complex SVG features like foreignObject or external font references may not render as expected.',
      },
      {
        question: 'Are my SVG files uploaded to a server during conversion?',
        answer:
          "No. All conversion happens entirely in your browser. Your SVG file is never sent to any server — it is processed using the browser's built-in Canvas API and SVG rendering engine. This means your files are completely private, including proprietary logos, unreleased artwork, and confidential vector assets.",
      },
      {
        question: 'Can I convert SVG to PNG on my phone?',
        answer:
          'Yes. This tool works fully on iOS and Android mobile browsers (Safari, Chrome, Firefox). Open the site on your phone, tap the upload area to select an SVG from your files app, and download the converted PNG directly to your device. No app installation required.',
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
