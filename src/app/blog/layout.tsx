import type { Metadata } from 'next'
import { pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/blog')

export const metadata: Metadata = {
  title: 'Image Optimization Blog — Compression, Format & Performance Tips',
  description:
    'Free guides on image compression, format conversion, and web performance. Learn how to compress JPG, PNG, WebP for web, email, Instagram, WhatsApp and more.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Image Optimization Blog — Compression, Format & Performance Tips',
    description:
      'Free guides on image compression, format conversion, and web performance. JPG, PNG, WebP, HEIC — everything you need to know.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompressImg Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Optimization Blog — CompressImg',
    description: 'Free guides on image compression, format conversion, and web performance.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
