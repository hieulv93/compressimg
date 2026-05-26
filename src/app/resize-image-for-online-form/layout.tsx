import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/resize-image-for-online-form/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Resize Image for Online Form — Government & Exam Upload | CompressImg',
  description:
    'Resize your photo or signature to exact KB and pixel requirements for government portals, exam applications, and online forms. Free, browser-based, no upload.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image for Online Form — Government & Exam Upload',
    description:
      'Resize photos and signatures to exact KB limits for SSC, UPSC, IBPS, Railway, and other government portals. Free, browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Resize Image for Online Form — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for Online Form — Free',
    description: 'Set target KB, upload photo, download instantly. Meets government portal limits.',
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Resize Image for Online Form',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Image Resizer for Online Forms — CompressImg',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based tool to resize photos and signatures to exact KB file sizes required by government exam portals, online application forms, and HR systems. Set a target size in KB and download instantly. No upload, no server.',
    },
    {
      '@type': 'HowTo',
      name: 'How to Resize a Photo for an Online Application Form',
      description:
        'Resize any photo or signature to the exact KB file size required by a government or exam portal.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Check the file size requirement',
          text: 'Read the form instructions to find the required photo or signature file size — for example, "under 50KB" or "between 10KB and 100KB". Note this number before uploading.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Set the target KB and upload',
          text: 'Enter the maximum file size in KB, then upload your photo or signature. The tool automatically adjusts compression and resolution to meet the target.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download and upload to the form',
          text: 'Download the resized image. The file will be at or below the target KB limit and ready to upload to the application portal.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What photo size do most government online forms require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Indian government exam portals (SSC, UPSC, IBPS, Railway) require photos between 20KB and 100KB in JPEG format. Pixel dimensions vary: SSC uses 100×120px, UPSC uses 300×400px, and IBPS uses 200×230px. Always check the official notification for the exact requirement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reduce a photo to under 50KB for an online form?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Set the target KB to 50 in the tool above, upload your photo, and download the result. The tool automatically compresses and resizes the image to fit under 50KB. If the form also specifies exact pixel dimensions, use the Resize Signature or Resize Image tool first to set the correct pixels, then use this tool to meet the KB limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I resize both photo and signature for the same form?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Process each image separately. Upload the photo first, set the target KB, and download. Then upload the signature, adjust the KB target if it is different (signature limits are often smaller — 10KB or 20KB), and download.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my photo sent to a server when I use this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing happens entirely in your browser. Your photo or signature never leaves your device — there is no server upload at any point.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the form requires a specific pixel size AND a KB limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Handle them in two steps. First, use the Resize Image or Resize Signature tool to set the exact pixel dimensions (e.g., 140×60px for an SSC signature). Then upload that resized image here and set the target KB to meet the file size limit (e.g., 20KB).',
          },
        },
      ],
    },
  ],
}

export default function ResizeImageForOnlineFormLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
