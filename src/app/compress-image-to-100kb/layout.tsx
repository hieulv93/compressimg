import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-100kb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 100KB Online Free — Any Format',
  description:
    'Free online tool to compress images to 100KB or less. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress image to 100kb',
    'compress photo to 100kb',
    'reduce image size to 100kb',
    'compress image to 100kb online',
    'compress jpg to 100kb',
    'compress png to 100kb',
    'reduce photo size to 100kb',
    'compress image under 100kb',
    'image compressor 100kb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 100KB Online Free — Any Format',
    description:
      'Reduce JPG, PNG, or WebP images to under 100KB for free. No uploads — works 100% in your browser. Adjust quality slider to hit your exact target size.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 100KB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 100KB Online Free',
    description: 'Reduce any image to under 100KB for free. 100% browser-based — no uploads.',
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
          name: 'Compress Image to 100KB',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 100KB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor. Reduce JPG, PNG, and WebP files to under 100KB. Adjustable quality slider with real-time output size. No upload required.',
      featureList: [
        'Compress image to under 100KB',
        'Compress JPG, PNG, WebP formats',
        'Adjustable quality slider (1–100)',
        'No file upload — 100% browser-based',
        'See exact output size before downloading',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I compress any image to exactly 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can compress most photos to under 100KB by adjusting the quality slider and, if needed, resizing the image dimensions first. The tool shows the exact output file size before you download, so you can adjust and re-compress until you hit the target.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use to compress to 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a typical 1280px wide photo, quality 60–70 usually produces an output of 40–120KB. Start at quality 70 and check the result size. If still over 100KB, try 50–60. If a 4000px photo still exceeds 100KB at quality 60, resize the dimensions to 1280px first, then compress.',
          },
        },
        {
          '@type': 'Question',
          name: 'My image is still over 100KB after compression — what do I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most effective fix is to reduce the image dimensions before compressing. A 4000×3000px image has 12 million pixels — even at quality 40, this can exceed 100KB. Use the Resize Image tool to bring the image to 1000–1280px wide, then compress at quality 60–70.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my image look bad at under 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most use cases — ID photos, form submissions, thumbnails, profile pictures — quality 60–70 at 1280px produces a visually acceptable result when viewed at normal screen sizes. For identification and form submission purposes, the quality is sufficient.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a 5MB photo to under 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A two-step process works best. First, resize the image to 1000–1280px wide — this alone typically takes a 5MB photo to 300–600KB. Then compress the resized image at quality 60–70. The result is usually 50–100KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which image formats can be compressed to 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG, PNG, and WebP are all supported. JPG is easiest — a quality 60 JPG at 1280px typically lands at 50–120KB. PNG uses lossless compression so large PNGs may need dimension reduction or conversion to JPG before reaching 100KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server when compressing to 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All compression happens in your browser using JavaScript. Your files never leave your device and are never uploaded to any server. This is especially important for sensitive documents like passport photos and government IDs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a file size limit for images I can upload?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — files up to 20MB are accepted. If your original file is larger than 20MB, consider resizing the dimensions first to bring the file under 20MB before uploading.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a photo to 100KB for WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your photo, set quality to 70, and check the output size. If still over 100KB, lower quality to 55–60 or resize to 800px wide first. WhatsApp profile photos display at 300×300px, so a 800px wide JPG at quality 70 lands at 30–60KB.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a photo size less than 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Try quality 70 first — this reduces most phone photos to 50–150KB. If still over 100KB, lower to 55–60 or resize to 1000–1280px wide first, then compress at quality 70.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to reduce image size below 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with quality 70 and check the output size. If still over 100KB at quality 60, resize the image to 1000–1280px wide first, then compress at quality 60–70. For limits under 50KB, resize to 800px and use quality 50–55.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress an image to under 100KB for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — this tool compresses images to under 100KB completely free with no sign-up, no watermark, and no daily limit. All compression runs in your browser — your image is never uploaded to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress an image to 100KB on a mobile phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open this page in Safari or Chrome on your phone, tap the upload area, select a photo from your camera roll, set quality to 60–70, and compress. The result shows the exact output size. Download the compressed image directly to your phone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress an iPhone photo (HEIC) to 100KB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'iPhones save photos as HEIC format by default. This tool accepts HEIC directly — upload the photo and it will be automatically converted to JPG during compression. iPhone 12MP photos are typically 2–4MB at 4032×3024px. To reach 100KB, resize to 1280px wide first, then compress at quality 60.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I compress a photo to 100KB for a government form or visa application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Government forms and visa portals typically require photos under 100KB at specific dimensions (e.g., 600×600px). Use the Resize Image tool to set the exact pixel dimensions, then upload here and compress at quality 65. A 600×600px JPG at quality 65 is typically 30–70KB — safely under 100KB.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo100KbLayout({ children }: { children: React.ReactNode }) {
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
