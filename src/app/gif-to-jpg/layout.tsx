import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/gif-to-jpg/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'GIF to JPG Converter — Convert GIF to JPEG Free Online',
  description:
    'Convert GIF to JPG free online. Extract the first frame as a high-quality JPEG instantly. No upload — 100% browser-based and private.',
  keywords: [
    'gif to jpg',
    'gif to jpeg',
    'convert gif to jpg',
    'gif to jpg online',
    'gif to jpg free',
    'gif to jpeg converter',
    'gif frame to jpg',
    'save gif as jpg',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'GIF to JPG Converter — Free Online',
    description:
      'Convert GIF to JPG instantly. Extract GIF frames as high-quality JPEG. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GIF to JPG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF to JPG — Free Online Converter',
    description: 'Convert GIF to JPG free. Extract frames as JPEG. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'GIF to JPG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — GIF to JPG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based GIF to JPG converter. Extract the first frame of any GIF as a high-quality JPEG. No file upload, no account required.',
      featureList: [
        'Convert GIF to JPG online',
        'Extract GIF first frame as JPEG',
        'High quality JPEG output',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
        'Works on mobile and desktop',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens to the animation when I convert a GIF to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG is a static image format and cannot store animation. Converting a GIF to JPG extracts the first frame of the animation as a static JPEG image. The remaining frames are discarded. If you need all frames, you would need video conversion software.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why convert GIF to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF files use a limited 256-color palette, which makes photos and complex images look grainy and low-quality. Converting to JPG gives you millions of colors and significantly better image quality for photographs. JPG also produces much smaller file sizes than GIF for photographic content.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the JPG be better quality than the original GIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "JPG supports millions of colors versus GIF's 256-color limit, so the JPG will look smoother — especially for photographs. However, if the GIF was created from a low-resolution source, the JPG cannot recover lost detail. The output quality is limited by the original GIF quality.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does GIF support transparency? What happens when converting to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF supports binary transparency (a pixel is either fully transparent or fully opaque). JPG does not support transparency. When converting, transparent areas are filled with a white background in the JPG output. If you need to preserve transparency, convert to PNG instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the JPG file be smaller than the GIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For photographic content, yes — JPG is typically 60–80% smaller than GIF for the same image. For simple graphics with flat colors and few details, GIF can actually be smaller than JPG. The size difference depends heavily on the image content.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert an animated GIF to a video instead?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool converts GIF to a static JPG image (first frame only). To convert an animated GIF to a video format like MP4 or WebM, you need a dedicated video conversion tool. Many free online tools handle GIF-to-video conversion.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are my GIF files safe to convert here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All conversion happens entirely in your browser — no file is ever sent to a server. Your GIF files stay on your device throughout the entire process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert GIF to PNG instead of JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Use the GIF to PNG converter for a lossless output that preserves sharp edges and supports transparency. PNG is better for graphics, logos, and images with text. JPG is better for photographs where file size matters more than perfect accuracy.',
          },
        },
      ],
    },
  ],
}

export default function GifToJpgLayout({ children }: { children: React.ReactNode }) {
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
