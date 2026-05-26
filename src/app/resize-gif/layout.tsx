import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-gif/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize GIF Online Free — Change GIF Width & Height | CompressImg',
  description:
    'Resize GIF images online for free. Change GIF width and height by pixel. Static GIFs output as PNG; for animation, use our GIF compressor. No upload, 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize GIF Online Free — Change GIF Width & Height | CompressImg',
    description:
      'Resize GIF images to any pixel dimensions free. No upload, no sign-up, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize GIF Online — CompressImg' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize GIF Online Free — Change GIF Dimensions',
    description: 'Change GIF width and height by pixel — free, no upload.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize GIF', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'GIF Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize GIF images to any pixel dimensions. Upload a GIF or any image, set target dimensions, and download the resized file. Processing happens entirely in your browser — your files are never uploaded.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a GIF Image Online',
      description: 'Resize any GIF to exact pixel dimensions in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your GIF',
          text: 'Click or drag your GIF file onto the upload area. JPG, PNG, and WebP are also accepted.',
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
          name: 'Download the resized image',
          text: 'Click Resize Image and download your resized file. GIF files are output as PNG for maximum quality.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I resize an animated GIF and keep the animation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Browsers cannot re-encode animated GIF frames via the Canvas API, so this tool outputs a static PNG of the first frame. To resize an animated GIF while preserving animation, use a dedicated animated GIF editor. To reduce animated GIF file size without resizing, use our GIF Compressor tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format does the resized GIF download as?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF files are output as PNG because browsers cannot re-encode GIF via canvas. PNG is lossless and produces a high-quality result at the resized dimensions. For photographic content, you can also convert the GIF to JPG before resizing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a GIF smaller in file size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To reduce GIF file size while keeping the animation, use our GIF Compressor tool which uses quantization and frame-skipping to shrink animated GIFs by up to 70%. Resizing the pixel dimensions also reduces file size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my GIF file uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing happens entirely in your browser using the Canvas API. Your file is never sent to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'What GIF size should I use for social media?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Twitter accepts GIFs up to 15MB at 1280×1080px maximum. Discord supports GIFs up to 8MB at 128×128px for avatars or larger for server uploads. Slack and Teams display GIFs inline up to 720px wide.',
          },
        },
      ],
    },
  ],
}

export default function ResizeGifLayout({ children }: { children: React.ReactNode }) {
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
