import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is HEIC? How to Open and Convert HEIC Images',
  description:
    'HEIC is the default photo format on iPhones. Learn what HEIC is, why it exists, how to open HEIC files on Windows and Mac, and how to convert HEIC to JPG or PNG.',
  alternates: {
    canonical: 'https://compressimg.pro/blog/what-is-heic-format/',
  },
  openGraph: {
    title: 'What Is HEIC? How to Open and Convert HEIC Images',
    description:
      'HEIC is the default photo format on iPhones. Learn what HEIC is, how to open HEIC files on Windows, and how to convert HEIC to JPG or PNG for free.',
    type: 'article',
    url: 'https://compressimg.pro/blog/what-is-heic-format/',
    images: [{ url: 'https://compressimg.pro/og-image.png', width: 1200, height: 630 }],
  },
}

export default function WhatIsHeicFormat() {
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
        <span className="text-text-main">What Is HEIC Format</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-02">May 2, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            What Is HEIC? How to Open and Convert HEIC Images
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            If you&apos;ve ever transferred photos from an iPhone to a Windows PC and found files
            ending in .heic, you&apos;ve encountered HEIC. This guide explains what HEIC is, why
            iPhones use it, and how to convert HEIC files to JPEG or PNG so they open everywhere.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* What is HEIC */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What Is HEIC?</h2>
            <p className="text-text-muted">
              HEIC stands for High Efficiency Image Container. It is the file format Apple uses to
              store photos on iPhones running iOS 11 and later (released 2017). HEIC files use HEVC
              (High Efficiency Video Coding, also known as H.265) compression — the same technology
              used in high-quality video streaming — to compress photographs.
            </p>
            <p className="text-text-muted">
              The result is impressive: HEIC files are typically about half the size of equivalent
              JPEG files at the same visual quality. A photo that would be 4MB as a JPEG is often
              2MB as a HEIC — meaning an iPhone can store roughly twice as many photos in the same
              storage space.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-3 text-sm">
              <h3 className="font-bold text-base">HEIC at a glance</h3>
              {[
                ['Full name', 'High Efficiency Image Container'],
                ['Compression', 'HEVC (H.265) — same as 4K video streaming'],
                ['Developed by', 'MPEG group, adopted by Apple in 2017'],
                ['File size vs JPEG', '~50% smaller at equivalent quality'],
                ['Supports', 'Transparency, Live Photos, depth maps, HDR, 16-bit color'],
                ['iPhone support', 'Default format on iPhone 7 and later (iOS 11+)'],
                ['Windows support', 'Requires codec (not built in by default)'],
                ['Mac support', 'Built-in since macOS High Sierra'],
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

          {/* Why Apple uses HEIC */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Why Does My iPhone Take HEIC Photos?</h2>
            <p className="text-text-muted">
              Apple switched from JPEG to HEIC as the default photo format starting with iOS 11 in
              2017. The primary reason was storage efficiency. As iPhone cameras improved — from 8MP
              to 12MP to 48MP — photo file sizes grew proportionally. HEIC compression keeps file
              sizes manageable while preserving higher image quality.
            </p>
            <p className="text-text-muted">
              HEIC also supports features that JPEG cannot: it can store Live Photo data (the short
              video clip captured around a still photo), depth map information for Portrait Mode
              photos, HDR tone mapping, and 16-bit wide color. JPEG is limited to 8-bit color and
              cannot store any of these additional data streams.
            </p>
            <p className="text-text-muted">
              From Apple&apos;s perspective, HEIC is a better format in every technical way. The
              problem is compatibility — HEIC is not universally supported outside the Apple
              ecosystem, which causes frustration when sharing photos with non-Apple users or
              uploading to services that expect JPEG.
            </p>
          </section>

          {/* Why it causes problems */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Why HEIC Causes Compatibility Issues</h2>
            <p className="text-text-muted">
              JPEG has been the universal standard for photographs for over 30 years. Almost every
              application, website, printer, and service accepts JPEG. HEIC, despite being
              technically superior, is far from universal support:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-2">
              <li>
                Windows cannot open HEIC files without installing a codec from the Microsoft Store
              </li>
              <li>Many websites and upload forms reject HEIC and show an error</li>
              <li>Email clients may not display HEIC images inline</li>
              <li>Most Android devices cannot open HEIC without a third-party app</li>
              <li>Older versions of Adobe Photoshop (before 2019) do not support HEIC</li>
              <li>Professional printing services typically require JPEG or TIFF</li>
            </ul>
            <p className="text-text-muted">
              Converting HEIC to JPEG is the fastest solution. JPEG is accepted everywhere, and the
              visual quality difference between a HEIC and its JPEG conversion at high quality is
              imperceptible on screen.
            </p>
          </section>

          {/* How to convert */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              How to Convert HEIC to JPG (Free, No Software Needed)
            </h2>
            <p className="text-text-muted">
              The easiest way to convert HEIC files is using a browser-based converter — no software
              installation required. CompressImg provides free HEIC converters that run entirely in
              your browser:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/heic-to-jpg',
                  label: 'HEIC to JPG',
                  desc: 'Convert iPhone HEIC photos to JPEG — works on Windows and Mac',
                },
                {
                  href: '/heic-to-png',
                  label: 'HEIC to PNG',
                  desc: 'Convert HEIC to PNG with lossless quality',
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
              Your HEIC files never leave your device — all conversion happens locally in your
              browser using JavaScript. This is important because HEIC photos from your iPhone often
              include personal or private images.
            </p>
          </section>

          {/* Other conversion methods */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Other Ways to Convert HEIC Files</h2>

            <div className="space-y-4">
              <div className="border border-border rounded-xl p-5 space-y-2">
                <h3 className="font-bold">
                  Method 1: Change iPhone Settings (Prevent HEIC at Source)
                </h3>
                <p className="text-text-muted text-sm">
                  To stop your iPhone from taking HEIC photos: go to{' '}
                  <strong>Settings → Camera → Formats</strong> and select{' '}
                  <strong>Most Compatible</strong>. This changes the camera to shoot in JPEG instead
                  of HEIC. The tradeoff: photos will be about twice as large, using more storage.
                </p>
                <p className="text-text-muted text-sm">
                  Alternatively, keep HEIC for storage efficiency but enable{' '}
                  <strong>Transfer to Mac or PC</strong> under{' '}
                  <strong>Settings → Photos → Transfer to Mac or PC → Automatic</strong>. With this
                  setting, iOS automatically converts HEIC to JPEG when you transfer via USB.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5 space-y-2">
                <h3 className="font-bold">Method 2: Use Photos App on Mac</h3>
                <p className="text-text-muted text-sm">
                  On macOS, open the HEIC file in Photos, then go to{' '}
                  <strong>File → Export → Export 1 Photo</strong>. Choose JPEG from the format
                  dropdown and set your desired quality. This converts the HEIC while preserving
                  metadata like date, location, and camera settings.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5 space-y-2">
                <h3 className="font-bold">Method 3: Install HEVC Codec on Windows</h3>
                <p className="text-text-muted text-sm">
                  Microsoft sells the HEVC Video Extensions codec ($0.99) in the Microsoft Store,
                  which adds HEIC support to Windows Photos and File Explorer. Once installed, you
                  can open HEIC files natively and export them as JPEG using Paint or Photos. This
                  is a one-time setup that works for all future HEIC files.
                </p>
              </div>
            </div>
          </section>

          {/* HEIC vs JPEG */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">HEIC vs JPEG: Technical Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Feature
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      HEIC
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      JPEG
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Compression efficiency', '~2× better than JPEG', 'Baseline (1992 standard)'],
                    ['Color depth', '16-bit (HDR capable)', '8-bit'],
                    ['Transparency', 'Supported', 'Not supported'],
                    ['Live Photo / animation', 'Supported', 'Not supported'],
                    ['iPhone default', 'Yes (iOS 11+)', 'Optional (Most Compatible mode)'],
                    ['Windows support', 'Requires codec install', 'Built-in everywhere'],
                    ['Web browser support', 'Safari only (not Chrome/Firefox)', 'Universal'],
                    ['Upload form support', 'Often rejected', 'Accepted everywhere'],
                    ['Best for', 'Storage on Apple devices', 'Sharing, web, printing'],
                  ].map(([feature, heic, jpeg]) => (
                    <tr key={feature} className="border-t border-border">
                      <td className="p-3 border border-border font-medium text-text-main">
                        {feature}
                      </td>
                      <td className="p-3 border border-border text-text-muted">{heic}</td>
                      <td className="p-3 border border-border text-text-muted">{jpeg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Why can't I open HEIC files on my Windows PC?",
                  a: 'Windows does not include HEIC support by default. You need either the HEVC Video Extensions codec from the Microsoft Store ($0.99), or a free converter tool like CompressImg that converts HEIC to JPEG directly in your browser without any software installation.',
                },
                {
                  q: 'Will I lose quality when converting HEIC to JPEG?',
                  a: 'At high JPEG quality settings (85–95%), the conversion from HEIC to JPEG is visually lossless — you cannot see any difference on a normal screen. HEIC stores more color information (16-bit vs 8-bit for JPEG), but this difference is invisible unless you are working in professional photo editing workflows.',
                },
                {
                  q: 'How do I stop my iPhone from saving photos as HEIC?',
                  a: 'Go to Settings → Camera → Formats → select Most Compatible. Your camera will now save photos as JPEG instead of HEIC. Photos will be about twice as large, but will open on all devices and services without conversion.',
                },
                {
                  q: 'Can I convert HEIC to PNG instead of JPEG?',
                  a: 'Yes. Converting HEIC to PNG produces a lossless output — every pixel is preserved exactly. PNG files are larger than JPEG but smaller than HEIC in many cases. Use PNG when you need pixel-perfect quality or transparency; use JPEG for sharing and web use where file size matters.',
                },
                {
                  q: 'Is HEIC the same as HEIF?',
                  a: 'HEIF (High Efficiency Image Format) is the container standard; HEIC (High Efficiency Image Container) is the specific implementation using HEVC compression that Apple uses. They are often used interchangeably. When people refer to iPhone HEIC files, they mean the .heic extension, which is the most common HEIF variant.',
                },
                {
                  q: 'Do social media platforms support HEIC?',
                  a: "Most social media platforms (Instagram, Facebook, Twitter/X, TikTok) do not accept HEIC uploads. They require JPEG or PNG. When you upload from your iPhone's camera roll via the app, iOS automatically converts the file to JPEG before uploading. But if you transfer the .heic file to another device and then try to upload it, many platforms will reject it.",
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
              <li>HEIC is Apple&apos;s photo format — default on iPhones since iOS 11 (2017)</li>
              <li>HEIC files are ~50% smaller than JPEG at equivalent quality</li>
              <li>
                HEIC is not supported by Windows without a codec, Chrome, Firefox, or most upload
                forms
              </li>
              <li>
                Convert HEIC to JPEG for universal compatibility — no visible quality difference
              </li>
              <li>To stop iPhone saving HEIC: Settings → Camera → Formats → Most Compatible</li>
              <li>
                Convert HEIC to JPG or PNG free at CompressImg — files never leave your device
              </li>
            </ul>
          </section>

          {/* Related tools */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">HEIC Conversion Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/heic-to-jpg',
                  label: 'HEIC to JPG',
                  desc: 'Convert iPhone photos to JPEG',
                },
                {
                  href: '/heic-to-png',
                  label: 'HEIC to PNG',
                  desc: 'Convert HEIC to PNG lossless',
                },
                {
                  href: '/compress-image',
                  label: 'Compress Image',
                  desc: 'Reduce JPEG file size after converting',
                },
                {
                  href: '/jpg-to-webp',
                  label: 'JPG to WebP',
                  desc: 'Convert JPEG to smaller WebP format',
                },
                {
                  href: '/compress-image-for-instagram',
                  label: 'Compress for Instagram',
                  desc: 'Optimize images for Instagram upload',
                },
                {
                  href: '/compress-image-for-whatsapp',
                  label: 'Compress for WhatsApp',
                  desc: 'Reduce size for WhatsApp sharing',
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
