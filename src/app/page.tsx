import type { Metadata } from 'next'
import Link from 'next/link'
import HomeContentSection from '@/components/layout/HomeContentSection'

export const metadata: Metadata = {
  title: { absolute: 'Free Online Image Tools — Compress, Resize, Convert & Crop | CompressImg' },
  description:
    'Free online image tools: compress, resize, convert and crop JPG, PNG, WebP images. No upload to any server — 100% browser-based and private.',
  alternates: { canonical: 'https://compressimg.pro/' },
  openGraph: {
    title: 'Free Online Image Tools — Compress, Resize, Convert & Crop | CompressImg',
    description:
      'Compress, resize, convert, and crop JPG, PNG, WebP instantly. No upload, no login — 100% private.',
    url: 'https://compressimg.pro/',
    siteName: 'CompressImg',
    images: [
      {
        url: 'https://compressimg.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompressImg — Free Online Image Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What image tools does CompressImg offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CompressImg offers four free browser-based tools: Compress Image (reduce file size up to 90%), Resize Image (change dimensions for any platform), Convert Image (convert between JPG, PNG, WebP, HEIC, BMP, GIF), and Crop Image (trim to preset ratios for Instagram, YouTube, and more). All tools run in your browser — no server upload.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are all CompressImg tools free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All tools on CompressImg are completely free — no account, no watermarks, no file limits, and no subscription required. Compress, resize, convert, and crop as many images as you need at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to upload my images to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All processing runs entirely in your browser using JavaScript. Your images never leave your device — nothing is uploaded to any server. This makes CompressImg safe for personal, confidential, and unreleased images.',
      },
    },
    {
      '@type': 'Question',
      name: 'What image formats does CompressImg support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CompressImg supports JPG, PNG, WebP, HEIC (iPhone photos), BMP, GIF, and SVG across its tools. Output files are downloaded directly to your device — no server storage involved.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does CompressImg work on mobile phones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All tools work on iPhone and Android in Chrome, Safari, and Firefox. Tap the upload area on any tool page to select from your camera roll — no app installation needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a file size limit for CompressImg tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All tools accept image files up to 20MB. Most smartphone photos (3–8MB) and web images are well within this limit. Files larger than 20MB can be scaled down before processing.',
      },
    },
  ],
}

const tools = [
  {
    href: '/compress-image',
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline points="17 8 12 3 7 8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round" />
      </svg>
    ),
    title: 'Compress Image',
    description:
      'Reduce file size up to 90% without losing visible quality. Supports JPG, PNG, WebP.',
    cta: 'Compress Now',
    badge: 'Most Popular',
  },
  {
    href: '/resize-image',
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 21 3 21 3 15" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="21" y1="3" x2="14" y2="10" strokeLinecap="round" />
        <line x1="3" y1="21" x2="10" y2="14" strokeLinecap="round" />
      </svg>
    ),
    title: 'Resize Image',
    description:
      'Change photo dimensions for any platform. Presets for Instagram, YouTube, and more.',
    cta: 'Resize Now',
    badge: null,
  },
  {
    href: '/convert-image',
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path
          d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" />
        <polyline points="9 11 12 8 15 11" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 13 12 16 15 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Convert Image',
    description:
      'Convert between JPG, PNG, and WebP instantly. Transparency preserved for PNG and WebP output.',
    cta: 'Convert Now',
    badge: null,
  },
  {
    href: '/crop-image',
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M6 2v14a2 2 0 0 0 2 2h14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 22V8a2 2 0 0 0-2-2H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Crop Image',
    description:
      'Trim, cut, and crop photos to any ratio. Presets for Instagram, YouTube, Stories, and more.',
    cta: 'Crop Now',
    badge: null,
  },
]

const popularUseCases = [
  {
    href: '/heic-to-jpg',
    title: 'HEIC to JPG',
    description: 'Convert iPhone HEIC photos to JPG for universal sharing.',
  },
  {
    href: '/jpg-to-png',
    title: 'JPG to PNG',
    description: 'Convert JPG photos to PNG with transparency support.',
  },
  {
    href: '/webp-to-jpg',
    title: 'WebP to JPG',
    description: 'Convert WebP to JPG for universal compatibility.',
  },
  {
    href: '/jpg-to-webp',
    title: 'JPG to WebP',
    description: 'Convert JPG to WebP — 25–35% smaller file size for web use.',
  },
  {
    href: '/compress-image-for-whatsapp',
    title: 'Compress for WhatsApp',
    description: 'Reduce photo size before sharing to avoid double-compression.',
  },
  {
    href: '/compress-image-for-instagram',
    title: 'Compress for Instagram',
    description: 'Pre-compress photos before posting to keep them sharp.',
  },
  {
    href: '/compress-image-for-tiktok',
    title: 'Compress for TikTok',
    description: 'Reduce photo size before uploading TikTok profile and cover images.',
  },
  {
    href: '/compress-image-for-youtube',
    title: 'Compress for YouTube',
    description: "Reduce thumbnail and banner size — stay under YouTube's 2MB limit.",
  },
  {
    href: '/thumbnail-compressor',
    title: 'Thumbnail Compressor',
    description: 'Compress YouTube and gaming thumbnails to under 2MB before uploading.',
  },
  {
    href: '/compress-image-to-100kb',
    title: 'Compress to 100KB',
    description: 'Reduce any image to under 100KB for forms and portals.',
  },
  {
    href: '/compress-image-for-facebook',
    title: 'Compress for Facebook',
    description: 'Optimize photos for Facebook feed and cover photos.',
  },
  {
    href: '/compress-image-to-50kb',
    title: 'Compress to 50KB',
    description: 'Hit strict 50KB limits for government portals and exams.',
  },
  {
    href: '/heic-to-png',
    title: 'HEIC to PNG',
    description: 'Convert iPhone HEIC photos to lossless PNG for editing and archiving.',
  },
  {
    href: '/compress-image-to-1mb',
    title: 'Compress to 1MB',
    description: 'Reduce large photos to under 1MB for email and web uploads.',
  },
  {
    href: '/compress-image-to-500kb',
    title: 'Compress to 500KB',
    description: 'Hit 500KB targets for WordPress, CMS, and web-optimized images.',
  },
  {
    href: '/svg-to-png',
    title: 'SVG to PNG',
    description: 'Convert SVG logos and icons to PNG for email and social media.',
  },
  {
    href: '/gif-to-jpg',
    title: 'GIF to JPG',
    description: 'Convert GIF to JPG for better photo quality and smaller file size.',
  },
  {
    href: '/gif-to-png',
    title: 'GIF to PNG',
    description: 'Convert GIF to lossless PNG with full color depth and transparency.',
  },
  {
    href: '/bmp-to-jpg',
    title: 'BMP to JPG',
    description: 'Shrink huge uncompressed BMP files to compact JPG — 90%+ smaller.',
  },
  {
    href: '/compress-image-to-300kb',
    title: 'Compress to 300KB',
    description: 'Compress photos to under 300KB for CMS, email, and job portals.',
  },
  {
    href: '/compress-jpg-online',
    title: 'Compress JPG Online',
    description: 'Reduce JPG file size without visible quality loss. Fast, free, browser-based.',
  },
  {
    href: '/compress-png-online',
    title: 'Compress PNG Online',
    description: 'Shrink PNG files while preserving transparency and sharp edges.',
  },
  {
    href: '/compress-images',
    title: 'Batch Compress Images',
    description: 'Compress multiple images at once — ZIP download when done.',
  },
  {
    href: '/image-converter',
    title: 'Image Converter',
    description: 'Convert between JPG, PNG, WebP, HEIC, BMP, TIFF, and ICO — free, no upload.',
  },
]

export default function HomePage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20 space-y-10">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
            Free Online Image Tools — Compress, Resize, Convert & Crop
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg mx-auto">
            All your image tools in one place — free, instant, and 100% private. No upload to any
            server.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">
            Free image tools
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative rounded-2xl border border-border bg-white p-6 space-y-4 hover:border-primary hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {tool.badge && (
                  <span className="absolute top-4 right-4 text-xs font-semibold text-primary bg-blue-50 border border-primary/20 rounded-full px-2.5 py-0.5">
                    {tool.badge}
                  </span>
                )}
                <div className="w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:bg-drag-active transition-colors duration-200">
                  {tool.icon}
                </div>
                <div className="space-y-1.5">
                  <h2 className="font-bold text-text-main text-base group-hover:text-primary transition-colors duration-150">
                    {tool.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed">{tool.description}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {tool.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 space-y-1.5">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">
              Also free
            </p>
            <p className="font-bold text-text-main text-base">Create thumbnails & social images</p>
            <p className="text-sm text-text-muted leading-relaxed">
              YouTube thumbnails, Instagram posts, Twitter headers, LinkedIn banners, Facebook
              covers, OG images — all at exact platform sizes.
            </p>
          </div>
          <a
            href="https://click-thumb.com"
            target="_blank"
            rel="noopener"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-primary bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-drag-active transition-colors"
          >
            ClickThumb.com →
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 space-y-1">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">
              From the blog
            </p>
            <p className="font-bold text-text-main text-base">Image compression tips & guides</p>
            <p className="text-sm text-text-muted">
              How to reduce file size, best formats for web, compression tools compared.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-text-main hover:border-primary hover:text-primary transition-colors"
          >
            Read the blog →
          </Link>
        </div>

        <div className="space-y-4 pt-4 border-t border-border">
          <h2 className="text-base font-semibold text-text-main">Popular Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {popularUseCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <HomeContentSection />
      </div>
    </main>
  )
}
