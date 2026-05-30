import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/how-to-compress-images-on-iphone/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Compress Images on iPhone — Without Losing Quality (2026)',
  description:
    'Compress iPhone photos without losing quality — 5 free methods including browser-based tools, HEIC settings, AirDrop tricks, and the Files app. Works on iOS 16, 17, 18.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Compress Images on iPhone — Without Losing Quality',
    description: '5 free methods to compress iPhone photos. Works on iOS 16, 17, 18.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How to Compress Images on iPhone' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Images on iPhone (2026)',
    description: '5 free methods to reduce iPhone photo file size without losing quality.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Compress Images on iPhone — Without Losing Quality (2026)',
      description: '5 free methods to compress iPhone photos without losing quality.',
      url: PAGE_URL,
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: OG_IMAGE },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: 'Compress Images on iPhone', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I compress photos on my iPhone without an app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open Safari and go to compressimg.pro. Tap the upload area, select your photo, adjust quality if needed, and tap Download. The entire process happens in your browser — no app install required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does compressing photos on iPhone reduce quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 80 (the default), compressed photos are visually indistinguishable from the original on a phone screen or monitor. The compression removes data the human eye cannot easily perceive. For professional print use, keep quality at 85–90.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why are iPhone photos so large?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'iPhone cameras capture at 12–48 megapixels to preserve maximum detail for editing. This results in raw files of 8–25 MB. For sharing and web use, you only need 1–3 MP, so compression reduces file size by 80–95% without any visible difference.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress a HEIC photo on iPhone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload the HEIC file to compressimg.pro in Safari. The tool automatically converts it to JPEG (the universal format) and compresses it at your chosen quality level.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I send a smaller photo from my iPhone via email?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In the Photos app, share the photo via Mail. The share sheet offers size options (Small, Medium, Large, Actual). Select Medium or Small. Alternatively, compress first at compressimg.pro then attach the compressed file.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does iPhone compress photos automatically when sharing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'iMessage and WhatsApp do compress photos when sent as messages (not as files). Instagram also re-compresses uploads. If you share via AirDrop, email as a file, or save to Files app, the original uncompressed file is used.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress Images on iPhone',
      totalTime: 'PT2M',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Open Safari on your iPhone',
          text: 'Go to compressimg.pro in Safari.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload your photo',
          text: 'Tap the upload area and select your photo from the Photos app.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the compressed image',
          text: 'Tap Download to save the compressed photo — typically 60–90% smaller.',
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
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
