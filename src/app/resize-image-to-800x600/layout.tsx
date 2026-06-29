import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/resize-image-to-800x600')

export const metadata: Metadata = {
  title: 'Resize Image to 800×600 Free',
  description:
    'Resize any image to 800×600 instantly. Perfect for web images, email attachments, and blog photos. No upload — 100% browser-based.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Resize Image to 800×600 Free | CompressImg',
    description:
      'Resize any image to 800×600. Perfect for web images, email attachments, and blog posts. 100% browser-based.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resize Image to 800×600 — CompressImg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to 800×600 Free',
    description: 'Perfect 800×600 images in seconds. No upload, no account needed.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Resize Image', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: 'Resize Image to 800×600 Free',
    description:
      'Resize any image to 800×600 instantly. Perfect for web images, email attachments, and blog photos. No upload — 100% browser-based.',
    faq: [
      {
        question: 'What is 800×600 resolution used for?',
        answer:
          '800×600 (SVGA) is a classic 4:3 web resolution used for blog post images, email attachments, CMS image uploads with size limits, online forms, and legacy systems that specify 800×600 as the maximum image size.',
      },
      {
        question: 'Why would I resize an image to 800×600?',
        answer:
          'Many online systems have file size limits for image uploads — resizing to 800×600 reduces a 4MB phone photo to around 200–400KB. It is also a common requirement for passport and ID photos in government portals, insurance forms, and job application systems.',
      },
      {
        question: 'Is 800×600 the same as 4:3 ratio?',
        answer:
          'Yes. 800÷600 = 4÷3, so 800×600 is the 4:3 aspect ratio at SVGA resolution. Other 4:3 sizes include 640×480 (VGA) and 1024×768 (XGA).',
      },
      {
        question: 'Will my image be distorted at 800×600?',
        answer:
          'The tool preserves your original aspect ratio. If your image is not 4:3, white bars are added to fit within 800×600 without distortion or cropping.',
      },
      {
        question: 'Are my files uploaded to a server?',
        answer:
          'No. All resizing happens entirely in your browser. Your images are never sent to any server.',
      },
    ],
  },
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />}
      {children}
    </>
  )
}
