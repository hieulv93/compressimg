import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/exif-remover/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'EXIF Remover — Strip Photo Metadata Free Online',
  description:
    'Remove EXIF data from JPG, PNG, WebP photos instantly. Strips GPS location, camera info, and date. 100% browser-based — no upload, no sign-up. Free.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'EXIF Remover — Strip Photo Metadata Free Online',
    description:
      'Remove GPS location, camera info, and all EXIF metadata from photos instantly. 100% browser-based — your photo never leaves your device.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'EXIF Remover — Strip Photo Metadata' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EXIF Remover — Strip Photo Metadata Free',
    description: 'Remove GPS, camera info, and all EXIF data from photos instantly.',
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
        { '@type': 'ListItem', position: 2, name: 'EXIF Remover', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — EXIF Remover',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based EXIF remover. Strip GPS location, camera make/model, date taken, and all metadata from JPG, PNG, WebP, HEIC photos — no upload required, 100% private.',
      featureList: [
        'Removes GPS location coordinates',
        'Strips camera make, model, and lens info',
        'Clears date and time taken',
        'Removes all EXIF, IPTC, and XMP metadata',
        'Supports JPG, PNG, WebP, HEIC up to 20MB',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Remove EXIF Data from a Photo',
      totalTime: 'PT10S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      supply: [],
      tool: [],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your photo',
          text: 'Click the upload area or drag and drop your photo. Accepts JPG, PNG, WebP, and HEIC up to 20MB.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'EXIF data is stripped automatically',
          text: 'The tool immediately redraws your photo through the Canvas API, stripping all EXIF, GPS, IPTC, and XMP metadata. No button to click — it happens instantly on upload.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the clean photo',
          text: 'Click Download to save the metadata-free JPEG. Safe to share publicly — no GPS location or personal camera data attached.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is EXIF data and why should I remove it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'EXIF (Exchangeable Image File Format) data is metadata embedded in your photo file by your camera or smartphone. It includes GPS coordinates (exact location where the photo was taken), camera make and model, date and time, lens settings, and sometimes even your device serial number. Removing EXIF before sharing photos publicly protects your location privacy and personal device information.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does removing EXIF data affect image quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool outputs JPEG at quality 92, which is visually lossless. The pixel data of your photo is fully preserved — only the metadata attached to the file is removed. At quality 92, differences from the original are invisible to the human eye at normal viewing distances.',
          },
        },
        {
          '@type': 'Question',
          name: 'What metadata does this tool remove?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Canvas API redraw removes all embedded metadata: EXIF (GPS coordinates, camera make/model, lens info, date/time, exposure settings, ISO, flash, orientation), IPTC (copyright, caption, creator info), and XMP (Adobe editing history, rating, keywords). The output JPEG contains no metadata — only pixel data.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can someone see where my photo was taken from the file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you share an unprocessed photo from a smartphone with location services enabled, yes — the GPS coordinates are in the EXIF data and can be read by anyone with basic tools. After running your photo through this EXIF remover, the GPS coordinates are completely gone from the file. The photo can be shared safely without revealing your location.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Facebook, Instagram, or Twitter remove EXIF automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most major social platforms strip EXIF data from uploaded photos before storing them. However, some platforms or configurations may not, and email attachments and direct file sharing (WhatsApp, Telegram, iMessage) typically preserve EXIF. Remove EXIF before sharing to any platform where you are not 100% certain about their metadata handling.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my photo safe when using this tool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All processing runs entirely in your browser using the Canvas API. Your photo never leaves your device — not even for the EXIF removal step. This is particularly important for sensitive photos: no server receives your image data.',
          },
        },
      ],
    },
  ],
}

export default function ExifRemoverLayout({ children }: { children: React.ReactNode }) {
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
