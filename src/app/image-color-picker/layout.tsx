import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/image-color-picker')

export const metadata: Metadata = {
  title: 'Image Color Picker — Pick Colors from Any Photo Online Free',
  description:
    'Click anywhere on an uploaded photo to pick the exact color. Get HEX, RGB, and HSL values instantly. Copy in one click. 100% browser-based — free, no sign-up.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image Color Picker — Pick Colors from Any Photo Online Free',
    description:
      'Click anywhere on a photo to pick exact HEX, RGB, and HSL color values. Copy in one click. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image Color Picker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Color Picker — Pick Colors from Any Photo',
    description: 'Click to pick HEX, RGB, HSL from any photo. Free & browser-based.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Image Color Picker', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Image Color Picker — Pick Colors from Any Photo Online Free',
    description:
      'Click anywhere on an uploaded photo to pick the exact color. Get HEX, RGB, and HSL values instantly. Copy in one click. 100% browser-based — free, no sign-up.',
    faq: [
      {
        question: 'What is a color picker tool?',
        answer:
          'A color picker tool lets you sample the exact color of any pixel in an image and get the color value in formats like HEX (#ff6b35), RGB (rgb(255, 107, 53)), and HSL (hsl(20, 100%, 60%)). Designers and developers use color pickers to match colors from photos, logos, or screenshots for use in CSS, design software, or branding.',
      },
      {
        question: 'What is the difference between HEX, RGB, and HSL?',
        answer:
          'HEX is a 6-character hexadecimal code (e.g., #ff6b35) widely used in HTML and CSS. RGB (Red, Green, Blue) expresses color as three 0–255 values and is standard in CSS and image editing software. HSL (Hue, Saturation, Lightness) is intuitive for designers — hue is the color angle (0–360), saturation is intensity (0–100%), and lightness is brightness (0–100%). All three represent the same color, just in different notations.',
      },
      {
        question: 'How accurate is the color picker?',
        answer:
          'The Canvas API reads exact pixel-level color data from the uploaded image. The sampled color is the precise RGB value of the clicked pixel — as accurate as the image data itself. Accuracy depends on the source image: JPEG compression artifacts can cause nearby pixels to differ slightly from the intended color.',
      },
      {
        question: 'Can I pick multiple colors from the same image?',
        answer:
          'Yes. Click multiple times anywhere on the image — each click samples a new color. Your last 10 picked colors are shown in the color history panel so you can compare and copy any of them.',
      },
      {
        question: 'Is my photo private when using this tool?',
        answer:
          'Yes. The image is loaded into an HTML canvas element in your browser. No data is sent to any server. The color sampling happens entirely on your device using the Canvas getImageData API.',
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
