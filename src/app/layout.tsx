import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
})

export const metadata: Metadata = {
  verification: {
    other: {
      'google-adsense-account': 'ca-pub-5429920062430374',
    },
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://compressimg.pro'),
  title: {
    default: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size | CompressImg',
    template: '%s | CompressImg',
  },
  description:
    'Free online image compressor. Reduce image file size up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  keywords: [
    'image compressor',
    'compress image online',
    'reduce image size',
    'compress jpg',
    'compress png',
    'compressimg',
  ],
  authors: [{ name: 'CompressImg' }],
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CompressImg',
    url: 'https://compressimg.pro/',
    images: [{ url: 'https://compressimg.pro/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@compressimg' },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      url: 'https://compressimg.pro',
      name: 'CompressImg',
      description:
        'Free browser-based image tools. Compress, resize, convert, and crop JPG, PNG, WebP instantly. No upload, no login — 100% private.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://compressimg.pro/{search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      url: 'https://compressimg.pro',
      name: 'CompressImg',
      logo: {
        '@type': 'ImageObject',
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-text-main flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        {/* Google AdSense — lazyOnload để không cạnh tranh băng thông với LCP */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5429920062430374"
          crossOrigin="anonymous"
          strategy="lazyOnload"
          id="adsense-script"
        />
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
