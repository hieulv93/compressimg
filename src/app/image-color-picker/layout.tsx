import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/image-color-picker/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Image Color Picker — Pick Colors from Any Photo Online Free',
  description:
    'Click anywhere on an uploaded photo to pick the exact color. Get HEX, RGB, and HSL values instantly. Copy in one click. 100% browser-based — free, no sign-up.',
  keywords: [
    'image color picker',
    'pick color from image',
    'color picker online',
    'get color from photo',
    'hex color from image',
    'rgb color picker',
    'eyedropper tool online',
    'color extractor from image',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image Color Picker — Pick Colors from Any Photo Online Free',
    description:
      'Click anywhere on a photo to pick exact HEX, RGB, and HSL color values. Copy in one click. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Image Color Picker' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Color Picker — Pick Colors from Any Photo',
    description: 'Click to pick HEX, RGB, HSL from any photo. Free & browser-based.',
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
        { '@type': 'ListItem', position: 2, name: 'Image Color Picker', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Image Color Picker',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image color picker. Upload any photo and click any pixel to get the exact HEX, RGB, and HSL color values. Color history of last 10 picks. Copy any format in one click.',
      featureList: [
        'Click any pixel to get exact color values',
        'HEX, RGB, and HSL formats all shown at once',
        'One-click copy for each format',
        'Color history — last 10 picked colors',
        'Works on JPG, PNG, WebP, HEIC up to 20MB',
        'No file upload — 100% browser-based',
        'Free with no limits or sign-up',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Pick a Color from a Photo Online',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your photo',
          text: 'Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Click any pixel on the image',
          text: 'The image is displayed as a clickable canvas. Move your cursor over the image and click any spot to sample the exact color at that pixel.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Copy the color value',
          text: 'The HEX, RGB, and HSL values appear instantly. Click any format to copy it to your clipboard. Your last 10 picked colors are saved in the color history.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a color picker tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A color picker tool lets you sample the exact color of any pixel in an image and get the color value in formats like HEX (#ff6b35), RGB (rgb(255, 107, 53)), and HSL (hsl(20, 100%, 60%)). Designers and developers use color pickers to match colors from photos, logos, or screenshots for use in CSS, design software, or branding.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between HEX, RGB, and HSL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HEX is a 6-character hexadecimal code (e.g., #ff6b35) widely used in HTML and CSS. RGB (Red, Green, Blue) expresses color as three 0–255 values and is standard in CSS and image editing software. HSL (Hue, Saturation, Lightness) is intuitive for designers — hue is the color angle (0–360), saturation is intensity (0–100%), and lightness is brightness (0–100%). All three represent the same color, just in different notations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How accurate is the color picker?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Canvas API reads exact pixel-level color data from the uploaded image. The sampled color is the precise RGB value of the clicked pixel — as accurate as the image data itself. Accuracy depends on the source image: JPEG compression artifacts can cause nearby pixels to differ slightly from the intended color.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pick multiple colors from the same image?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Click multiple times anywhere on the image — each click samples a new color. Your last 10 picked colors are shown in the color history panel so you can compare and copy any of them.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my photo private when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The image is loaded into an HTML canvas element in your browser. No data is sent to any server. The color sampling happens entirely on your device using the Canvas getImageData API.',
          },
        },
      ],
    },
  ],
}

export default function ImageColorPickerLayout({ children }: { children: React.ReactNode }) {
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
