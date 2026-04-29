import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/gif-to-png/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'GIF to PNG Converter — Convert GIF to PNG Free Online',
  description:
    'Convert GIF to PNG free online. Get a lossless PNG with full color depth and transparency support. No upload — 100% browser-based and private.',
  keywords: [
    'gif to png',
    'convert gif to png',
    'gif to png online',
    'gif to png free',
    'gif to png converter',
    'gif frame to png',
    'save gif as png',
    'gif to transparent png',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'GIF to PNG Converter — Free Online',
    description:
      'Convert GIF to PNG instantly. Lossless output, full color depth, transparency preserved. No upload — 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GIF to PNG Converter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF to PNG — Free Online Converter',
    description:
      'Convert GIF to PNG free. Lossless output, transparency preserved. No upload needed.',
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
        { '@type': 'ListItem', position: 2, name: 'GIF to PNG', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'CompressImg — GIF to PNG Converter',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based GIF to PNG converter. Convert GIF images to lossless PNG with full color depth. No file upload, no account required.',
      featureList: [
        'Convert GIF to PNG online',
        'Lossless PNG output',
        'Full 24-bit color depth',
        'Transparency preserved in output',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why convert GIF to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF is limited to 256 colors, which makes photos and complex images look grainy. PNG supports millions of colors and uses lossless compression — every pixel is preserved exactly. Converting GIF to PNG gives better image quality, especially for photographs, gradients, and detailed graphics.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to the GIF animation when converting to PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG is a static image format. Converting a GIF to PNG extracts the first frame as a static image. The animation is not preserved. If you need to keep the animation, consider converting to WebM or MP4 video instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does GIF to PNG preserve transparency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GIF supports binary transparency (pixels are either fully transparent or fully opaque). PNG supports full alpha transparency (0–255 opacity per pixel). When converting, the transparent pixels from the GIF are preserved as transparent in the PNG output, making this the ideal conversion when transparency matters.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the PNG be higher quality than the GIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG removes the 256-color restriction of GIF, so colors and gradients will look smoother in the PNG output. However, if the GIF was originally created from a low-resolution or low-color source, the PNG output will reflect those limitations — PNG cannot recover detail that was never in the GIF.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the PNG be larger than the GIF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usually yes. PNG uses lossless compression optimized for full-color images. GIF uses a 256-color palette that can compress simple graphics very efficiently. For photographs and complex images, PNG will be similar in size or smaller. For simple flat-color graphics, GIF may actually be smaller than PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use GIF to PNG or GIF to JPG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choose PNG when: you need transparency preserved, the image has sharp edges or text, or you plan to edit the image further. Choose JPG when: file size is the priority, the image is a photograph, or you are uploading to a platform that compresses images anyway.',
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
          name: 'Can I convert GIF to JPG instead of PNG?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Use the GIF to JPG converter for a smaller file size output. JPG is better when you need a compact file for email, social media, or web use. PNG is better when you need lossless quality, transparency, or an image for further editing.',
          },
        },
      ],
    },
  ],
}

export default function GifToPngLayout({ children }: { children: React.ReactNode }) {
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
