import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/convert-image/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Convert Image Online Free — JPG, PNG, WebP',
  description:
    'Free online image converter. Convert JPG, PNG, WebP to any format instantly. No upload — 100% browser-based. Transparency preserved for PNG and WebP output.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Convert Image Online Free – JPG to PNG, PNG to WebP, WebP to JPG',
    description:
      'Convert between JPG, PNG, and WebP instantly. Transparency preserved. No upload — 100% browser-based and private.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'CompressImg — Free Online Image Converter' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Image Online Free – JPG to PNG, PNG to WebP, WebP to JPG',
    description:
      'Convert JPG, PNG, WebP to any format instantly. No uploads — works 100% in your browser.',
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
        { '@type': 'ListItem', position: 2, name: 'Convert Image', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Free Online Image Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image format converter. Convert between JPG, PNG, and WebP instantly. Transparency preserved. No file upload required.',
      featureList: [
        'Convert JPG to PNG online',
        'Convert JPG to WebP online',
        'Convert PNG to JPG online',
        'Convert PNG to WebP online',
        'Convert WebP to JPG online',
        'Convert WebP to PNG online',
        'Convert HEIC to JPG online',
        'Preserves transparency for PNG and WebP output',
        'Automatic white background fill for JPG output from transparent images',
        '100% browser-based — no file upload',
        'No registration, no watermark, no usage limits',
        'Works on desktop and mobile (iOS, Android)',
      ],
      inLanguage: 'en',
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert an Image Online (JPG, PNG, WebP)',
      description:
        'Convert JPG, PNG, or WebP images to any other format directly in your browser — no upload, no sign-up, 100% private.',
      image: {
        '@type': 'ImageObject',
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
      totalTime: 'PT15S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [
        { '@type': 'HowToSupply', name: 'Source image file (JPG, PNG, WebP or HEIC, up to 20 MB)' },
      ],
      tool: [
        {
          '@type': 'HowToTool',
          name: 'CompressImg Online Image Converter',
          url: PAGE_URL,
        },
        {
          '@type': 'HowToTool',
          name: 'Modern web browser with JavaScript enabled (Chrome, Firefox, Edge, Safari 16+)',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your image',
          text: 'Click the upload area, drag and drop your file, or paste it from the clipboard with Ctrl+V. Supported input formats are JPG, PNG, WebP and HEIC — up to 20 MB per file.',
          url: `${PAGE_URL}#step-1-upload`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Choose the output format',
          text: 'Select JPG, PNG or WebP as the target format. Conversion starts automatically in your browser. You can switch between formats at any time to compare the result without re-uploading.',
          url: `${PAGE_URL}#step-2-format`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the converted file',
          text: "Conversion happens instantly in your browser using the HTML5 Canvas API. Click Download to save the result. The file is saved with a 'converted-' prefix so you can easily distinguish it from the original.",
          url: `${PAGE_URL}#step-3-download`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this image converter free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. CompressImg's image converter is 100% free with no sign-up, no watermark and no usage limits. There is no paid tier — every feature, including JPG, PNG and WebP conversion, is available to everyone without restrictions.",
          },
        },
        {
          '@type': 'Question',
          name: 'Which formats can I convert between?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can convert between JPG, PNG and WebP in any direction — for example JPG to PNG, PNG to WebP, WebP to JPG, and so on. HEIC files from iPhone can also be uploaded and converted to JPG, PNG or WebP. Maximum input size is 20 MB per image.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will converting to a different format reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Converting from a lossless format like PNG to a lossy format like JPG or WebP applies compression, which can introduce very subtle pixel-level changes. At our default quality setting of 92 out of 100 the visual result is virtually indistinguishable from the original. Converting from JPG to PNG does not restore any quality already lost in the original JPG file.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to transparency when I convert to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG does not support transparency, so transparent pixels are filled with a solid white background during conversion. This is ideal for product photos, logos on light backgrounds and documents. If you need to keep transparency, convert to PNG or WebP instead — both formats support full alpha channel transparency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is the converted file larger than the original?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This usually happens when you convert a JPG to PNG. JPG uses lossy compression that discards pixel data, while PNG stores every pixel losslessly. Re-encoding the same image into a lossless container produces a larger file. For a smaller output, convert to WebP, or convert to JPG and then run the result through our image compressor.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert multiple images at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The converter currently processes one image at a time to keep the interface simple and the browser memory usage low. You can convert multiple files in sequence very quickly because conversion runs locally and takes only a few seconds per image.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All conversion happens entirely in your browser using the HTML5 Canvas API. Your images are never uploaded to a server, never stored anywhere and never seen by anyone else. When you close the browser tab, the image data is gone — no trace remains on any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this work on mobile phones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The converter works in any modern mobile browser on iOS and Android, including Safari, Chrome and Firefox. You can pick an image from your camera roll or files app, choose the output format and download the converted file directly to your device.',
          },
        },
      ],
    },
  ],
}

export default function ConvertImageLayout({ children }: { children: React.ReactNode }) {
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
