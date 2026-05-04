import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is WebP? The Complete Guide to WebP Images',
  description:
    'WebP is a modern image format that produces 25–35% smaller files than JPEG. Learn what WebP is, how it works, browser support, and how to convert images to and from WebP.',
  alternates: {
    canonical: 'https://compressimg.pro/blog/what-is-webp-format/',
  },
  openGraph: {
    title: 'What Is WebP? The Complete Guide to WebP Images',
    description:
      'WebP is a modern image format that produces 25–35% smaller files than JPEG. Learn what WebP is, browser support, and how to convert to and from WebP.',
    type: 'article',
    url: 'https://compressimg.pro/blog/what-is-webp-format/',
    images: [{ url: 'https://compressimg.pro/og-image.png', width: 1200, height: 630 }],
  },
}

export default function WhatIsWebpFormat() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav
        className="text-xs text-text-muted mb-8 flex items-center gap-1.5"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-main">What Is WebP Format</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-03">May 3, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            What Is WebP? The Complete Guide to WebP Images
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            WebP is a modern image format developed by Google that produces significantly smaller
            files than JPEG and PNG — with no visible quality difference. This guide explains what
            WebP is, how it compares to other formats, browser support, and how to use it.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* What is WebP */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What Is WebP?</h2>
            <p className="text-text-muted">
              WebP (pronounced &quot;weppy&quot;) is an image format developed by Google and
              released in 2010. It was designed specifically to reduce image file sizes on the web
              without sacrificing visual quality. WebP uses advanced compression techniques derived
              from the VP8 video codec to achieve smaller file sizes than older formats like JPEG
              and PNG.
            </p>
            <p className="text-text-muted">
              Unlike JPEG (designed in 1992) and PNG (1996), WebP was built with modern web
              performance in mind. It supports both lossy and lossless compression, transparency
              (alpha channel), and animation — capabilities that JPEG, PNG, and GIF each handle
              separately. WebP combines the best features of all three.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-3 text-sm">
              <h3 className="font-bold text-base">WebP at a glance</h3>
              {[
                ['Developer', 'Google'],
                ['Released', '2010 (full browser support: ~2021)'],
                ['Extension', '.webp'],
                ['Lossy compression', 'Yes — 25–35% smaller than JPEG at same quality'],
                ['Lossless compression', 'Yes — 20–30% smaller than PNG'],
                ['Transparency', 'Yes (lossy and lossless modes)'],
                ['Animation', 'Yes (similar to GIF but much smaller)'],
                ['Browser support', 'Chrome, Firefox, Safari, Edge, Opera — all major browsers'],
              ].map(([key, value]) => (
                <div
                  key={key}
                  className="flex gap-3 border-b border-border pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-text-main w-40 shrink-0">{key}</span>
                  <span className="text-text-muted">{value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* WebP vs JPEG */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">WebP vs JPEG: How Do They Compare?</h2>
            <p className="text-text-muted">
              JPEG has been the standard format for photographs since 1992. It uses discrete cosine
              transform (DCT) compression, which was state-of-the-art for its time. WebP improves on
              JPEG&apos;s compression algorithm using techniques from VP8 video encoding, including
              better block prediction and more efficient entropy coding.
            </p>
            <p className="text-text-muted">
              The practical result: a WebP image at the same visual quality as a JPEG is typically
              25–35% smaller. For a website that serves 1,000 photographs per day, switching from
              JPEG to WebP reduces bandwidth consumption by 25–35% — directly improving page load
              speed and Google&apos;s Core Web Vitals scores.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Feature
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      JPEG
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      WebP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Lossy compression', 'Yes', 'Yes — 25–35% smaller at same quality'],
                    ['Lossless compression', 'No', 'Yes'],
                    ['Transparency', 'No', 'Yes (both modes)'],
                    ['Animation', 'No', 'Yes'],
                    ['File size (photos)', 'Baseline', '25–35% smaller'],
                    ['Browser support', 'Universal', 'All major browsers (since 2021)'],
                    [
                      'Desktop software support',
                      'Universal',
                      'Improving — some older apps still lack support',
                    ],
                    [
                      'Email client support',
                      'Universal',
                      'Limited — some clients do not display WebP',
                    ],
                  ].map(([feature, jpeg, webp]) => (
                    <tr key={feature} className="border-t border-border">
                      <td className="p-3 border border-border font-medium text-text-main">
                        {feature}
                      </td>
                      <td className="p-3 border border-border text-text-muted">{jpeg}</td>
                      <td className="p-3 border border-border text-text-muted">{webp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-text-muted">
              <strong className="text-text-main">When to prefer JPEG over WebP:</strong> When
              sharing with desktop applications that may not support WebP (older Photoshop versions,
              some Windows apps), or when attaching to emails where client support is uncertain. For
              all web-delivered images, WebP is the better choice.
            </p>
          </section>

          {/* WebP vs PNG */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">WebP vs PNG: When Does WebP Win?</h2>
            <p className="text-text-muted">
              PNG is the standard for lossless images with transparency — logos, icons, screenshots,
              and graphics. WebP lossless directly competes with PNG and typically produces files
              20–30% smaller at the same pixel-perfect quality.
            </p>
            <p className="text-text-muted">
              For photographs saved as PNG (which many users do accidentally), the difference is
              dramatic. A 4MB PNG photograph often becomes a 500KB WebP lossy image — a 87%
              reduction — while looking identical on screen. WebP&apos;s lossy mode handles
              photographic content far more efficiently than PNG&apos;s lossless algorithm.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-3 text-sm">
              <h3 className="font-bold text-base mb-1">Use WebP lossless instead of PNG when:</h3>
              <ul className="space-y-2 list-disc list-inside text-text-muted">
                <li>The image will be served on a website (browser support is universal)</li>
                <li>File size matters and the extra 20–30% savings is worth it</li>
                <li>The image has transparency that must be preserved exactly</li>
              </ul>
              <h3 className="font-bold text-base mt-4 mb-1">Keep PNG when:</h3>
              <ul className="space-y-2 list-disc list-inside text-text-muted">
                <li>Sharing with users who may open the file in older desktop software</li>
                <li>The workflow requires universal compatibility (print, legacy apps)</li>
                <li>The file size difference is not significant (small icons, small graphics)</li>
              </ul>
            </div>
          </section>

          {/* Browser support */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">WebP Browser Support in 2026</h2>
            <p className="text-text-muted">
              WebP is supported by all modern browsers with a combined market share of over 97%.
              Safari added WebP support in version 14 (September 2020), closing the last major gap
              in browser compatibility. In 2026, WebP support can be treated as universal for web
              use.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-2 text-sm">
              {[
                ['Chrome', '✅ Supported since version 9 (2011)'],
                ['Firefox', '✅ Supported since version 65 (2019)'],
                ['Safari', '✅ Supported since version 14 (2020)'],
                ['Edge', '✅ Supported since version 18 (2018)'],
                ['Opera', '✅ Supported since version 11.1 (2012)'],
                ['Samsung Internet', '✅ Supported'],
                ['iOS Safari', '✅ Supported since iOS 14 (2020)'],
                ['Android Browser', '✅ Supported'],
              ].map(([browser, status]) => (
                <div
                  key={browser}
                  className="flex gap-3 border-b border-border pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-text-main w-36 shrink-0">{browser}</span>
                  <span className="text-text-muted">{status}</span>
                </div>
              ))}
            </div>

            <p className="text-text-muted">
              <strong className="text-text-main">Where WebP is not supported:</strong> Some email
              clients (Outlook on Windows, some mobile email apps) do not render WebP images inline.
              If you are embedding images in email newsletters or attachments, JPEG remains the
              safer choice. For all other uses, WebP works.
            </p>
          </section>

          {/* How to convert */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Convert Images to WebP</h2>
            <p className="text-text-muted">
              The easiest way to convert existing JPEG or PNG images to WebP is using a
              browser-based converter that requires no software installation. CompressImg provides
              free converters for all common source formats:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/jpg-to-webp',
                  label: 'JPG to WebP',
                  desc: 'Convert JPEG photos to WebP for 25–35% smaller files',
                },
                {
                  href: '/png-to-webp',
                  label: 'PNG to WebP',
                  desc: 'Convert PNG graphics to WebP lossless',
                },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
                >
                  <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                    {label} →
                  </p>
                  <p className="text-xs text-text-muted mt-1">{desc}</p>
                </Link>
              ))}
            </div>

            <p className="text-text-muted">
              All conversions happen directly in your browser. No files are uploaded to any server —
              the conversion runs using the HTML5 Canvas API in a Web Worker.
            </p>
          </section>

          {/* How to convert FROM WebP */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Convert WebP Back to JPEG or PNG</h2>
            <p className="text-text-muted">
              Converting a WebP file back to JPEG or PNG is straightforward. You might need to do
              this when sharing images with people using software that does not support WebP, or
              when a form or service requires JPEG input.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/webp-to-jpg',
                  label: 'WebP to JPG',
                  desc: 'Convert WebP to JPEG for maximum compatibility',
                },
                {
                  href: '/webp-to-png',
                  label: 'WebP to PNG',
                  desc: 'Convert WebP to PNG with transparency preserved',
                },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
                >
                  <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                    {label} →
                  </p>
                  <p className="text-xs text-text-muted mt-1">{desc}</p>
                </Link>
              ))}
            </div>

            <p className="text-text-muted">
              Note: Converting from WebP back to JPEG or PNG will increase file size, since JPEG and
              PNG are less efficient formats. If the goal is to reduce file size, keep the WebP
              version and only convert for compatibility when needed.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Is WebP better than JPEG?',
                  a: 'For web images, yes. WebP produces files 25–35% smaller than JPEG at equivalent visual quality. It also supports transparency and lossless compression, which JPEG does not. The only reason to choose JPEG over WebP is compatibility — some older desktop software and email clients do not support WebP.',
                },
                {
                  q: 'Can you open WebP files on Windows or Mac?',
                  a: 'Yes. Windows 10 and later can open WebP files natively in Photos. macOS supports WebP in Preview and Safari. For older systems, free software like IrfanView (Windows) or GIMP (cross-platform) opens WebP files. Adobe Photoshop supports WebP since 2021.',
                },
                {
                  q: 'Does WebP support transparency?',
                  a: 'Yes — WebP supports both lossy and lossless compression with full alpha channel (transparency) support. This makes WebP suitable as a replacement for both JPEG (lossy photos) and PNG (lossless graphics with transparency).',
                },
                {
                  q: 'Is WebP good for SEO?',
                  a: "Yes. Google recommends serving images in modern formats like WebP as part of Core Web Vitals optimization. Smaller images load faster, improving Largest Contentful Paint (LCP) scores — a direct ranking factor in Google's algorithm. Switching from JPEG to WebP is one of the most impactful performance improvements for image-heavy websites.",
                },
                {
                  q: "Why don't all websites use WebP?",
                  a: 'Most modern websites do use WebP — especially those using content delivery networks (CDNs) that automatically convert images. Older sites that pre-date widespread browser support may still serve JPEG by default. CMS platforms like WordPress now support WebP natively.',
                },
                {
                  q: 'What is the difference between WebP lossy and WebP lossless?',
                  a: 'WebP lossy (like JPEG) discards image data to achieve smaller file sizes — typically 25–35% smaller than JPEG at the same visual quality. WebP lossless (like PNG) preserves every pixel exactly — typically 20–30% smaller than PNG. Use lossy for photographs and content where imperceptible quality loss is acceptable; use lossless for graphics, icons, and screenshots where pixel-perfect accuracy matters.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-base mb-2">{q}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="bg-surface border border-border rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold">Summary</h2>
            <ul className="space-y-2 text-sm text-text-muted list-disc list-inside">
              <li>
                WebP is a modern image format from Google — smaller files, same visual quality
              </li>
              <li>25–35% smaller than JPEG at the same quality setting for photographs</li>
              <li>20–30% smaller than PNG for lossless graphics with transparency</li>
              <li>Supported by all major browsers (Chrome, Firefox, Safari, Edge) since 2021</li>
              <li>Not recommended for email attachments — use JPEG for email compatibility</li>
              <li>Convert any JPEG or PNG to WebP free at CompressImg — no upload required</li>
            </ul>
          </section>

          {/* Related tools */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">WebP Conversion Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/jpg-to-webp',
                  label: 'JPG to WebP',
                  desc: 'Convert JPEG photos to smaller WebP',
                },
                {
                  href: '/png-to-webp',
                  label: 'PNG to WebP',
                  desc: 'Lossless PNG to WebP conversion',
                },
                { href: '/webp-to-jpg', label: 'WebP to JPG', desc: 'Convert WebP back to JPEG' },
                {
                  href: '/webp-to-png',
                  label: 'WebP to PNG',
                  desc: 'Convert WebP to PNG with transparency',
                },
                {
                  href: '/compress-image',
                  label: 'Compress Image',
                  desc: 'Compress JPG, PNG, WebP file size',
                },
                {
                  href: '/convert-image',
                  label: 'Convert Image',
                  desc: 'Convert between all image formats',
                },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
                >
                  <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                    {label}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
