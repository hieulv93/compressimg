import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image Online Free — JPG, PNG, WebP & HEIC | CompressImg',
  description:
    'Resize images to exact pixel dimensions free. Set custom width & height or use Instagram, YouTube, and passport presets. Supports HEIC. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image Online Free — JPG, PNG, WebP & HEIC | CompressImg',
    description:
      'Free online image resizer. Change dimensions for Instagram, YouTube, Twitter and more. 100% browser-based — your images never leave your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'CompressImg — Free Online Image Resizer' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image Online Free — JPG, PNG, WebP & HEIC | CompressImg',
    description:
      'Resize JPG, PNG, WebP to any size instantly. No uploads — works 100% in your browser.',
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
        { '@type': 'ListItem', position: 2, name: 'Resize Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Online Image Resizer',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image resizer. Supports JPG, PNG, WebP. Resize to any pixel dimension or use presets for Instagram, YouTube, Twitter, and more. No upload required.',
      featureList: [
        'Resize JPG images online',
        'Resize PNG images online',
        'Resize WebP images online',
        'Lock aspect ratio automatically',
        'Quick presets: Instagram, YouTube, Twitter, 4K, Full HD',
        'No file upload — 100% browser-based',
        'Free with no limits',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image Online',
      description:
        'Resize any JPG, PNG, WebP, or HEIC image to exact pixel dimensions in your browser — free, no upload required.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area, drag and drop your file, or paste from clipboard (Ctrl+V). Supports JPG, PNG, WebP, HEIC — up to 20MB.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set your dimensions',
          text: 'Enter a custom width and height, or choose a quick preset: Instagram Post (1080×1080), YouTube Thumbnail (1280×720), Full HD (1920×1080), and more. Toggle the lock icon to maintain aspect ratio.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the resized image',
          text: 'Click "Resize Image". Processing happens instantly in your browser. Download the result — no account, no watermark, no server upload.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this image resizer free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free with no limits. No sign-up, no subscription, no watermarks. You can resize as many images as you want at no cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does resizing reduce image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shrinking an image (downscaling) generally preserves quality very well. Enlarging (upscaling) can reduce sharpness. For upscaling beyond 2x the original size, AI-based upscalers produce better results.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize an image without changing the aspect ratio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Enable the lock icon between the width and height fields. When locked, changing one dimension automatically calculates the other to preserve the original aspect ratio.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image formats are supported?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG, PNG, and WebP are supported. The output keeps the same format as the input. PNG files retain full transparency after resizing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens 100% in your browser using the HTML5 Canvas API. Your images never leave your device and are never stored on any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum file size I can upload?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The maximum file size is 20MB. Maximum output dimensions are 8000×8000 pixels.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is the resized file larger than the original?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you increase the image dimensions, the output has more pixels and a larger file size. To reduce file size, use our Compress Image tool after resizing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this work on mobile phones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool is fully optimized for iOS and Android browsers. Tap to select an image from your gallery, set dimensions, and download — no app required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize a HEIC photo from my iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload the .heic file directly — the tool automatically converts it to JPEG in your browser before resizing. No separate conversion step is needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best image size for an Instagram post?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Square post: 1080×1080px (1:1). Portrait post: 1080×1350px (4:5). Story/Reel: 1080×1920px (9:16). All available as quick presets in the tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I resize an image to a specific KB size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use our dedicated KB resizer tools — available for 20KB, 50KB, 100KB, 200KB, and 500KB targets. These use automatic quality adjustment to guarantee the output stays under the specified limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize multiple images at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Use our batch image resizer at /resize-images/ — accepts up to 10 files and downloads all resized images as a ZIP file.',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageLayout({ children }: { children: React.ReactNode }) {
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
