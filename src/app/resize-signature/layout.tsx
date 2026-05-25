import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-signature/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Signature Online Free — SSC, UPSC, IBPS, Railway | CompressImg',
  description:
    'Resize your signature image to exact pixel dimensions for SSC, UPSC, IBPS, Railway, and other government exam forms. Free, browser-based, no upload.',
  keywords: [
    'resize signature online',
    'resize signature for SSC',
    'resize signature for UPSC',
    'signature resize for government form',
    'SSC signature size',
    'UPSC signature dimensions',
    'IBPS signature size pixels',
    'resize signature to 140x60',
    'resize signature to 280x90',
    'signature image resizer',
    'resize photo signature online',
    'government exam signature resize',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Signature Online Free — SSC, UPSC, IBPS, Railway',
    description:
      'Resize signature image to exact pixels for government exam forms. SSC (140×60px), UPSC (300×100px), IBPS (800×300px). Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Resize Signature Online — CompressImg' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Signature Online Free — SSC, UPSC, IBPS',
    description: 'Resize signature to exact pixels for government exam forms — free, no upload.',
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
        { '@type': 'ListItem', position: 3, name: 'Resize Signature', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Signature Resizer — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize signature images to exact pixel dimensions required by SSC, UPSC, IBPS, Railway, and other government exam application forms. Processing happens entirely in your browser — no upload, no server.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize Your Signature for a Government Exam Form',
      description:
        'Resize a signature image to the exact pixel dimensions required by SSC, UPSC, IBPS, or Railway forms.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your signature image',
          text: 'Click or drag your signature JPG or PNG file onto the upload area. The tool accepts JPG, PNG, and WebP formats.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter the required dimensions',
          text: 'Type the width and height in pixels as specified by the exam portal — for example, 140×60px for SSC or 300×100px for UPSC. Disable aspect lock to set exact dimensions independently.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the resized signature',
          text: 'Click Resize Image and download the resized signature file. If the form also requires a file size under 20KB, use the Resize Image in KB tool after downloading.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size should my signature be for SSC CGL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SSC CGL requires the signature image to be 140×60 pixels (some older portals accept 280×90px) in JPEG format with a file size under 20KB. Use this tool to resize your signature to 140×60px, then use the Resize Image in KB tool if the file exceeds 20KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the UPSC signature dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UPSC Civil Services requires the signature image to be 300×100 pixels in JPEG format, with a file size under 20KB. Some UPSC portals accept slightly different dimensions — always check the official notification for the exact requirement.',
          },
        },
        {
          '@type': 'Question',
          name: 'What signature size does IBPS require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IBPS PO and Clerk forms require the signature to be 800×300 pixels in JPEG format with a file size between 10KB and 50KB. This is a wider dimension than most exam portals — ensure the aspect ratio is set correctly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my signature file uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All resizing happens entirely in your browser using the Canvas API. Your signature image is never sent to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'My resized signature is over the KB limit — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After resizing to the correct pixel dimensions here, use the Resize Image in KB tool to reduce the file size to the required limit (typically 10KB or 20KB). Enter the target size in KB, upload the resized signature, and download the compressed version.',
          },
        },
      ],
    },
  ],
}

export default function ResizeSignatureLayout({ children }: { children: React.ReactNode }) {
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
