import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/compress-image-to-5mb/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Compress Image to 5MB Online Free — Reduce to Under 5MB',
  description:
    'Free online tool to compress images to under 5MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  keywords: [
    'compress image to 5mb',
    'compress photo to 5mb',
    'reduce image size to 5mb',
    'compress image to 5mb online',
    'compress jpg to 5mb',
    'compress png to 5mb',
    'reduce image under 5mb',
    'image compressor 5mb',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Compress Image to 5MB Online Free',
    description:
      'Reduce JPG, PNG, or WebP images to under 5MB for free. No uploads — works 100% in your browser.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Compress Image to 5MB Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 5MB Online Free',
    description: 'Reduce any image to under 5MB for free. 100% browser-based — no uploads.',
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
        { '@type': 'ListItem', position: 2, name: 'Compress Image to 5MB', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — Compress Image to 5MB',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor. Reduce JPG, PNG, and WebP files to under 5MB. Adjustable quality slider with real-time output size. No upload required.',
      featureList: [
        'Compress image to under 5MB',
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
          name: 'How do I compress an image to under 5MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your image and set the quality slider to 88–92. For most DSLR and mirrorless camera RAW exports or high-resolution scans (20–50MB), quality 90 typically produces an output of 2–4MB — well under 5MB. If the file is still over 5MB, lower the quality to 85 or reduce the image dimensions slightly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I need to compress images to under 5MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 5MB limit appears in email (Gmail and Outlook warn when a single attachment approaches 5MB), messaging apps (Telegram and WhatsApp compress images over 5MB automatically, degrading quality), online portfolio platforms, and print service upload portals. Staying under 5MB ensures your image transfers reliably without automatic re-compression by the receiving platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'What quality setting should I use for a 5MB target?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality 88–92 is the recommended range for a 5MB target. This retains excellent visual quality — near-lossless for most images — while reducing file size significantly. At quality 90, a typical 24-megapixel DSLR JPEG (8–15MB) compresses to 2–4MB with no visible quality loss at normal viewing sizes.',
          },
        },
        {
          '@type': 'Question',
          name: 'My image is still over 5MB after compression — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Very large images from professional cameras (50+ megapixels) or high-resolution scans can stay above 5MB at quality 88. Lower the quality to 80–85, which still produces excellent results while reducing the file size by 40–60%. Alternatively, use the Resize Image tool to reduce the pixel dimensions before compressing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I lose quality compressing to under 5MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At quality 88–92, the visual difference between the original and the compressed version is imperceptible at normal viewing sizes. Even at quality 85, images look virtually identical on screen. The difference only becomes noticeable when pixel-peeping at 100% zoom on fine details like hair or foliage.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of images typically need to be compressed to under 5MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'High-resolution DSLR and mirrorless camera photos (20–50MP), smartphone photos with ProRAW or high-efficiency modes enabled, professional scans of documents or artwork, screenshots from 4K or 5K displays, and PNG exports from design tools like Figma or Photoshop are the most common images that exceed 5MB and need reduction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which format compresses best to under 5MB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photographic images, JPG at quality 88–92 is the most reliable approach. WebP produces even smaller files at the same quality level. For PNG files from design tools, consider converting to JPG first if transparency is not required — JPG compression is far more aggressive and can bring a 10MB PNG down to under 2MB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my images uploaded to a server when I compress them?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All processing happens entirely in your browser. Your image files never leave your device and are never sent to any external server. This is particularly important for professional photographers, designers, and anyone sharing confidential or unpublished work.',
          },
        },
      ],
    },
  ],
}

export default function CompressTo5MbLayout({ children }: { children: React.ReactNode }) {
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
