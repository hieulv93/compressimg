import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-1920x1080/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 1920×1080 (Full HD) Free | CompressImg',
  description:
    'Resize any image to 1920×1080 Full HD instantly. Perfect for wallpapers, presentations, and video frames. No upload — 100% browser-based.',
  keywords: [
    'resize image to 1920x1080',
    '1920x1080 image resize',
    'full hd image resize',
    'resize to 1920 1080',
    '1080p image size',
    'wallpaper resize 1920x1080',
    'resize image full hd',
    '1920x1080 wallpaper maker',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 1920×1080 (Full HD) Free | CompressImg',
    description:
      'Resize any image to 1920×1080 Full HD. Perfect for wallpapers, presentations, and video. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image to 1920×1080 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 1920×1080 (Full HD) Free',
    description: 'Perfect 1920×1080 Full HD images in seconds. No upload, no account needed.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 1920×1080', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Resize Image to 1920×1080 — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize any image to 1920×1080 Full HD and other common HD resolutions. Supports JPG, PNG, WebP, HEIC. No file upload required.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to 1920×1080',
      description: 'Resize any image to 1920×1080 Full HD in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select resolution',
          text: 'Choose 1920×1080 Full HD or another HD resolution from the preset buttons.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your image',
          text: 'Upload your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download',
          text: 'Download the resized image instantly. No account or upload to any server.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is 1920×1080 resolution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1920×1080 is Full HD (FHD), also called 1080p. It has 1920 pixels wide and 1080 pixels tall in a 16:9 aspect ratio. It is the most common resolution for monitors, TVs, laptops, and video content.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is 1920×1080 used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1920×1080 is used for desktop wallpapers, PowerPoint and Google Slides presentations, YouTube video frames, web hero images, and backgrounds for video calls (Zoom, Teams, Google Meet).',
          },
        },
        {
          '@type': 'Question',
          name: 'Will resizing to 1920×1080 distort my image?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tool fits your image within 1920×1080 while maintaining the original aspect ratio by default. If your image is not 16:9, it will be letterboxed (white bars added) to fill the frame without distortion.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format does the resized image download as?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The resized image downloads as JPEG. This keeps the file size small while maintaining quality appropriate for 1920×1080 wallpapers and presentations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my files uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens entirely in your browser. Your images are never sent to any server.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo1920x1080Layout({ children }: { children: React.ReactNode }) {
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
