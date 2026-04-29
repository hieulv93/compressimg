import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/bmp-to-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'BMP to JPG Converter — Convert BMP to JPEG Free Online',
  description:
    'Convert BMP to JPG free online. Reduce huge BMP files to compact JPEG instantly. No upload — 100% browser-based and private.',
  keywords: [
    'bmp to jpg',
    'bmp to jpeg',
    'convert bmp to jpg',
    'bmp to jpg online',
    'bmp to jpg free',
    'bmp to jpeg converter',
    'bitmap to jpg',
    'bmp file to jpg',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'BMP to JPG Converter — Free Online',
    description:
      'Convert BMP to JPG instantly. Shrink huge bitmap files to compact JPEG. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'BMP to JPG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMP to JPG — Free Online Converter',
    description: 'Convert BMP to JPG free. Shrink bitmap files to compact JPEG. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'BMP to JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — BMP to JPG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based BMP to JPG converter. Convert large bitmap files to compact JPEG instantly. No file upload, no account required.',
      featureList: [
        'Convert BMP to JPG online',
        'Drastically reduce BMP file size',
        'High quality JPEG output at 92%',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on Windows, Mac, and mobile',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why convert BMP to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BMP files are uncompressed bitmaps — a 1920×1080 BMP can be 6MB or more. JPG compresses the same image to 100–500KB with minimal visible quality loss. Converting BMP to JPG reduces file size by 90%+ and makes the image compatible with web platforms, email, and mobile apps that do not accept BMP files.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a BMP file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BMP (Bitmap) is a raster image format developed by Microsoft for Windows. BMP stores pixel data without compression, which makes files very large. A 1920×1080 image at 24-bit color takes ~6MB as BMP vs ~150KB as JPG. BMP is common in Windows applications like Paint, but is rarely used on the web due to its large size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the JPG look the same as the BMP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photographs and complex images, the JPG output at 92% quality is visually identical to the BMP — the difference is imperceptible to human eyes. For images with very fine text or sharp geometric edges, JPG compression may introduce slight softness. If lossless quality is essential, convert to PNG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much smaller will the JPG be compared to the BMP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photographic content, the JPG will typically be 90–97% smaller than the BMP. A 6MB BMP photo will compress to 150–300KB as JPG. For simple graphics with flat colors, the reduction is 70–90%. The exact ratio depends on image content, but BMP-to-JPG conversion always produces a dramatically smaller file.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to BMP transparency when converting to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard BMP files do not support transparency. If your BMP has a white or solid background, it will appear identically in the JPG output. JPG also does not support transparency — if you need transparency, convert to PNG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert BMP to PNG instead of JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Convert BMP to PNG for lossless quality and transparency support. PNG is better for logos, icons, screenshots, and images with text where you need every pixel preserved. JPG is better for photographs where file size matters and slight compression is acceptable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my BMP files safe to convert here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All conversion happens entirely in your browser using the HTML5 Canvas API — no file is ever sent to a server. Your BMP files stay on your device throughout the entire process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress the JPG further after converting from BMP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. After converting BMP to JPG, use the Compress Image tool to reduce the JPG file size even further. You can target a specific file size (100KB, 200KB) or compress to the maximum possible reduction.',
          },
        },
      ],
    },
  ],
}

export default function BmpToJpgLayout({ children }: { children: React.ReactNode }) {
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
