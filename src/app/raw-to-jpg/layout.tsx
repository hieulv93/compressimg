import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/raw-to-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'RAW to JPG Converter Online Free — CR2, CR3, NEF, ARW to JPG',
  description:
    'Convert camera RAW files to JPG free online. CR2, CR3 (Canon), NEF (Nikon), ARW (Sony), DNG to JPG instantly. No upload — 100% browser-based and private.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'RAW to JPG Converter Online Free — CR2, CR3, NEF, ARW to JPG',
    description:
      'Convert CR2, CR3, NEF, ARW, DNG camera files to JPG instantly. No upload, no software install — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'RAW to JPG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAW to JPG Converter — CR2, CR3, NEF, ARW Free Online',
    description:
      'Convert camera RAW files to JPG free. CR2, CR3, NEF, ARW, DNG — no upload, instant, 100% private.',
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
        { '@type': 'ListItem', position: 2, name: 'RAW to JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — RAW to JPG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based RAW to JPG converter. Convert CR2, CR3, NEF, ARW, DNG camera RAW files to JPG by extracting the embedded full-resolution JPEG preview. No file upload, no server processing.',
      featureList: [
        'Convert CR2 and CR3 (Canon) to JPG',
        'Convert NEF (Nikon) to JPG',
        'Convert ARW (Sony) to JPG',
        'Convert DNG to JPG',
        'No file upload — 100% browser-based',
        'Extracts full-resolution embedded JPEG from RAW',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert RAW to JPG Online',
      description:
        'Convert camera RAW files (CR2, CR3, NEF, ARW, DNG) to JPG free — 100% browser-based, no upload required.',
      totalTime: 'PT5S',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload your RAW file',
          text: 'Click the upload area or drag and drop your CR2, CR3, NEF, ARW, or DNG file. Files up to 100MB are supported.',
          url: `${PAGE_URL}#step-1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Extraction runs automatically',
          text: 'The tool reads the RAW file in your browser, finds the embedded full-resolution JPEG preview, and extracts it. No server upload. Typically completes in under one second.',
          url: `${PAGE_URL}#step-2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download the JPG',
          text: 'Click Download to save the extracted JPG. The file keeps the original filename with a .jpg extension.',
          url: `${PAGE_URL}#step-3`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I convert CR2 to JPG online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your CR2 file to this tool. It extracts the embedded full-resolution JPEG preview from the CR2 container and lets you download it as a JPG. No software installation, no account, and no file upload to any server. Works for CR2 files from any Canon DSLR.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I convert NEF to JPG online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Drop your NEF file into the upload area. Nikon NEF files embed a full-resolution JPEG preview that this tool extracts in your browser. The result is a JPG file compatible with any viewer, platform, or app. The conversion takes under one second for any NEF file size.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert Sony ARW to JPG without installing software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ARW files from Sony cameras (Alpha, ZV, RX series) embed a full-resolution JPEG preview. Upload the ARW file and the tool extracts the preview in your browser instantly — no software, no sign-up, no server upload.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my RAW file uploaded to a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No. All processing happens in your browser using JavaScript. The RAW file never leaves your device. This is verifiable by checking your browser's network activity — you will see no file upload request while using the tool.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a RAW file and a JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A RAW file contains unprocessed sensor data from the camera — up to 14 bits per pixel — and requires software to decode and render. A JPG is a compressed, processed image that opens in any viewer. RAW files are much larger (20–80MB vs 4–8MB for JPG) and offer more editing flexibility, but JPG is required for sharing, uploading to platforms, and printing at standard labs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does the extracted JPG look exactly like what the camera produces?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The camera generates a full-resolution JPEG at the moment of capture and stores it inside the RAW file. This preview uses the camera's picture style (neutral, vivid, landscape, etc.), white balance, and noise reduction — the same processing the camera would apply if you had shot in JPG mode. Extracting this embedded JPEG gives you camera-quality output without any additional rendering.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does it work for CR3 files from Canon EOS R cameras?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. CR3 is the RAW format used by Canon EOS R-series mirrorless cameras (R, R5, R6, R8, R50, R100, R3) and newer Canon DSLRs. The CR3 container uses a different structure than CR2 (ISO base media file format instead of TIFF), but this tool handles both formats and extracts the full-resolution embedded JPEG preview from CR3 files.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I compress the converted JPG to reduce file size further?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. After downloading the JPG, you can reduce its file size further using the Image Compressor on this site. The compressor works with JPG, PNG, and WebP and runs entirely in your browser.',
          },
        },
      ],
    },
  ],
}

export default function RawToJpgLayout({ children }: { children: React.ReactNode }) {
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
