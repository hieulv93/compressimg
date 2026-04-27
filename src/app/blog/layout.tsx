import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Image Compression Tips & Guides',
  description:
    'Free guides on image compression, file size optimization, and web performance. Learn how to compress images for web, email, Instagram, WhatsApp and more.',
  alternates: { canonical: 'https://compressimg.pro/blog/' },
  openGraph: {
    title: 'Blog — Image Compression Tips & Guides',
    description: 'Free guides on image compression, file size optimization, and web performance.',
    url: 'https://compressimg.pro/blog/',
    images: [{ url: 'https://compressimg.pro/og-image.png', width: 1200, height: 630 }],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
