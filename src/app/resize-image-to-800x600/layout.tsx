import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-800x600/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 800×600 Free',
  description:
    'Resize any image to 800×600 instantly. Perfect for web images, email attachments, and blog photos. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 800×600 Free | CompressImg',
    description:
      'Resize any image to 800×600. Perfect for web images, email attachments, and blog posts. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image to 800×600 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 800×600 Free',
    description: 'Perfect 800×600 images in seconds. No upload, no account needed.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize to 800×600', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Resize Image to 800×600 — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize any image to 800×600 and other standard web resolutions. Supports JPG, PNG, WebP, HEIC. No file upload required.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize an Image to 800×600',
      description: 'Resize any image to 800×600 in your browser — free, no upload.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select resolution',
          text: 'Choose 800×600 or another standard web resolution from the preset buttons.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your image',
          text: 'Upload your JPG, PNG, WebP, or HEIC file. iPhone HEIC photos are automatically converted.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download',
          text: 'Download the resized image instantly. Ready to attach to emails or embed in web pages.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is 800×600 resolution used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '800×600 (SVGA) is a classic 4:3 web resolution used for blog post images, email attachments, CMS image uploads with size limits, online forms, and legacy systems that specify 800×600 as the maximum image size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why would I resize an image to 800×600?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many online systems have file size limits for image uploads — resizing to 800×600 reduces a 4MB phone photo to around 200–400KB. It is also a common requirement for passport and ID photos in government portals, insurance forms, and job application systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is 800×600 the same as 4:3 ratio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. 800÷600 = 4÷3, so 800×600 is the 4:3 aspect ratio at SVGA resolution. Other 4:3 sizes include 640×480 (VGA) and 1024×768 (XGA).',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my image be distorted at 800×600?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tool preserves your original aspect ratio. If your image is not 4:3, white bars are added to fit within 800×600 without distortion or cropping.',
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

export default function ResizeTo800x600Layout({ children }: { children: React.ReactNode }) {
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
