import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-to-300kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image to 300KB Online Free — LinkedIn, Blog, Visa',
  description:
    'Resize any image to under 300KB free. Ideal for LinkedIn profile photo, blog featured images, Schengen visa, and web uploads. JPEG output, 100% browser-based.',
  keywords: [
    'resize image to 300kb',
    'compress image to 300kb',
    'reduce image to 300kb',
    'linkedin photo 300kb',
    'image under 300kb',
    '300kb photo resizer',
    'reduce photo to 300kb',
    'visa photo 300kb',
    'blog image size 300kb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 300KB Online Free — LinkedIn, Blog, Visa',
    description: 'Resize to under 300KB automatically. JPEG output, 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Image to 300KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 300KB Online Free',
    description: 'Resize to under 300KB automatically. Free, browser-based.',
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
          name: 'Resize Image in KB',
          item: `${SITE_URL}/resize-image-in-kb/`,
        },
        { '@type': 'ListItem', position: 3, name: 'Resize to 300KB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Resize Image to 300KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize images to under 300KB. Ideal for LinkedIn profile photos, blog featured images, Schengen visa, and web uploads. JPEG output, no server upload.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the LinkedIn profile photo size limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LinkedIn accepts profile photos up to 8MB, but a 300×300px JPEG under 300KB loads fastest and looks sharp on all devices — including the small circular thumbnail in the feed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Schengen visa photo size requirement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many Schengen visa application portals accept digital photos under 500KB. Uploading under 300KB is well within all EU embassy and visa portal limits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing happens 100% in your browser. Your files never leave your device.',
          },
        },
      ],
    },
  ],
}

export default function ResizeTo300KbLayout({ children }: { children: React.ReactNode }) {
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
