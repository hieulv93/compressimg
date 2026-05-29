import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GAPageview from '@/components/analytics/GAPageview'

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
  icons: {
    icon: [{ url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://compressimg.pro'),
  title: {
    default: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size | CompressImg',
    template: '%s | CompressImg',
  },
  description:
    'Free online image compressor. Reduce image file size up to 90% without losing quality. No upload to server — 100% browser-based and private.',
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
    {
      '@type': 'WebApplication',
      name: 'CompressImg',
      url: 'https://compressimg.pro',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based image compressor, resizer, converter, and cropper. Supports JPG, PNG, WebP, HEIC, GIF, BMP, SVG. No upload required.',
      featureList: [
        'Compress JPG, PNG, WebP images online',
        'Resize images to any dimension',
        'Convert between image formats',
        'Crop images to any ratio',
        'Batch compress multiple images',
        'No file upload — 100% browser-based',
        'Free with no limits or watermarks',
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.google.com" />
      </head>
      <body className="font-sans antialiased bg-white text-text-main flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        {/* Google AdSense — plain script tag tránh data-nscript attr gây AdSense warning */}
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5429920062430374"
          crossOrigin="anonymous"
        />
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Suspense fallback={null}>
              <GAPageview />
            </Suspense>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
