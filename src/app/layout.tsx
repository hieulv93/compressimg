import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://compressimg.pro'),
  title: {
    default: 'Compress Image Online Free – Reduce JPG, PNG, WebP Size | CompressImg',
    template: '%s | CompressImg',
  },
  description:
    'Free online image compressor. Reduce image file size up to 90% without losing quality. No upload to server — 100% browser-based and private.',
  keywords: ['image compressor', 'compress image online', 'reduce image size', 'compress jpg', 'compress png', 'compressimg'],
  authors: [{ name: 'CompressImg' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CompressImg',
    url: 'https://compressimg.pro',
  },
  twitter: { card: 'summary_large_image', site: '@compressimg' },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-text-main flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
        {/* Google AdSense — afterInteractive để không block LCP */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5429920062430374"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          id="adsense-script"
        />
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
