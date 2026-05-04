import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Compress Images Without Losing Quality',
  description:
    'Compress JPG, PNG, and WebP images without visible quality loss. Learn which settings, methods, and formats minimize file size while keeping images sharp.',
  alternates: {
    canonical: 'https://compressimg.pro/blog/compress-images-without-losing-quality/',
  },
  openGraph: {
    title: 'How to Compress Images Without Losing Quality',
    description:
      'Compress JPG, PNG, and WebP images without visible quality loss. Learn which settings, methods, and formats minimize file size while keeping images sharp.',
    type: 'article',
    url: 'https://compressimg.pro/blog/compress-images-without-losing-quality/',
    images: [{ url: 'https://compressimg.pro/og-image.png', width: 1200, height: 630 }],
  },
}

export default function CompressImagesWithoutLosingQuality() {
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
        <span className="text-text-main">Compress Images Without Losing Quality</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-04">May 4, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Compress Images Without Losing Quality
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Reducing image file size doesn&apos;t have to mean visible quality loss. With the right
            settings and methods, you can cut file size by 60–80% while keeping images that look
            identical on screen. This guide explains exactly how.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* What "without losing quality" means */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              What &quot;Without Losing Quality&quot; Actually Means
            </h2>
            <p className="text-text-muted">
              Strictly speaking, lossy compression always discards some image data. The goal
              isn&apos;t zero data loss — it&apos;s imperceptible data loss. At 80–85% JPEG quality,
              the removed information falls below what the human eye can distinguish on a normal
              screen, even when comparing the original and compressed versions side by side.
            </p>
            <p className="text-text-muted">
              True lossless compression — where no data whatsoever is removed — exists for PNG and
              WebP formats. Lossless compression reorganizes how data is stored rather than
              discarding it, producing smaller files while preserving every pixel exactly. The
              tradeoff: lossless compression gives smaller savings (15–30%) compared to lossy
              compression (60–80%).
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-bold text-base">Two types of compression</h3>
              <div className="space-y-3 text-sm">
                <div className="border-b border-border pb-3">
                  <p className="font-semibold text-text-main mb-1">Lossless — zero visual change</p>
                  <p className="text-text-muted">
                    No pixels are modified. File size reduction: 10–30%. Best for: PNG screenshots,
                    icons, diagrams. Formats: PNG, WebP lossless, GIF.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-text-main mb-1">Lossy — imperceptible change</p>
                  <p className="text-text-muted">
                    Discards invisible data. File size reduction: 60–85% at quality 80. Best for:
                    photographs, social media images. Formats: JPEG, WebP lossy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Method 1: Quality slider */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 1: Use the Right Quality Setting (80–85%)</h2>
            <p className="text-text-muted">
              The quality slider is the most direct control for balancing file size against visual
              quality. For JPEG compression, quality 80 is the standard recommendation — it
              typically reduces file size by 60–75% while producing output that looks identical to
              the original at normal viewing distances and screen resolutions.
            </p>
            <p className="text-text-muted">
              Going below 75% quality starts introducing visible artifacts in fine texture areas
              (fabric, hair, leaves). Going above 90% retains more data than most viewers can see,
              making the file unnecessarily large. For most photos destined for screens — websites,
              social media, email — quality 80 hits the ideal sweet spot.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-2 text-sm">
              <h3 className="font-bold text-base mb-3">Quality setting guide for JPEG</h3>
              {[
                [
                  '90–100%',
                  'Near-lossless. File still 30–50% smaller than raw. Best for print or archiving.',
                ],
                [
                  '80–85%',
                  'Visually identical on screen. File 60–75% smaller. Standard for web and social.',
                ],
                [
                  '70–75%',
                  'Very slight softness on fine detail. File 75–80% smaller. Good for thumbnails.',
                ],
                [
                  '60–65%',
                  'Compression artifacts visible on close inspection. Only for non-critical uses.',
                ],
                [
                  'Below 60%',
                  'Noticeable quality loss. Avoid unless extreme size reduction is required.',
                ],
              ].map(([setting, desc]) => (
                <div
                  key={setting}
                  className="flex gap-3 border-b border-border pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-text-main w-28 shrink-0">{setting}</span>
                  <span className="text-text-muted">{desc}</span>
                </div>
              ))}
            </div>

            <p className="text-text-muted">
              Use the free{' '}
              <Link href="/compress-image" className="text-primary hover:underline font-medium">
                Compress Image tool
              </Link>{' '}
              to compress JPG, PNG, and WebP at any quality setting directly in your browser — no
              upload required.
            </p>
          </section>

          {/* Method 2: Lossless PNG */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 2: Use Lossless Compression for PNG Files</h2>
            <p className="text-text-muted">
              PNG files use lossless compression internally, but the compression level can vary. PNG
              lossless optimization re-encodes the file using better compression filters and color
              palettes without changing any pixel values. Results are pixel-perfect — the before and
              after are mathematically identical — with file size reductions of 10–30% for
              photographs and 20–50% for graphics with flat colors.
            </p>
            <p className="text-text-muted">
              For PNG images with large areas of solid color (logos, screenshots, illustrations),
              lossless compression is highly effective. For photographs saved as PNG, the file sizes
              are inherently large — consider converting to JPEG or WebP instead for a much larger
              size reduction.
            </p>
            <p className="text-text-muted">
              When you need to preserve transparency, lossless PNG compression is the correct
              choice. JPEG does not support transparency; WebP lossless does and typically produces
              smaller files than PNG at equivalent quality.
            </p>
          </section>

          {/* Method 3: WebP */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 3: Convert to WebP for Maximum Efficiency</h2>
            <p className="text-text-muted">
              WebP is Google&apos;s modern image format designed to replace both JPEG and PNG on the
              web. At equivalent visual quality, WebP produces files that are 25–35% smaller than
              JPEG and up to 50% smaller than PNG. All major browsers — Chrome, Firefox, Safari, and
              Edge — have supported WebP since 2021.
            </p>
            <p className="text-text-muted">
              For web use, converting existing JPEG images to WebP is one of the highest-impact
              optimizations available. A 200KB JPEG typically becomes a 130–150KB WebP at the same
              visual quality — no perceptible difference, 25–35% smaller.
            </p>
            <p className="text-text-muted">
              WebP also supports lossless mode (better than PNG lossless) and transparency (better
              than JPEG). For images that need both small file size and transparency — like product
              photos on a white background — WebP is the best format available.
            </p>

            <div className="flex gap-3 flex-wrap pt-1">
              <Link
                href="/jpg-to-webp"
                className="text-sm text-primary hover:underline font-medium"
              >
                JPG to WebP →
              </Link>
              <Link
                href="/png-to-webp"
                className="text-sm text-primary hover:underline font-medium"
              >
                PNG to WebP →
              </Link>
            </div>
          </section>

          {/* Method 4: Resize first */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 4: Resize Before Compressing</h2>
            <p className="text-text-muted">
              A 4000×3000px photograph uploaded to a blog that displays images at 800px wide is
              carrying 25× more pixels than the page uses. Resizing to display dimensions before
              compression removes those excess pixels entirely — reducing file size by 70–90%
              without any visible quality change, because the viewer never sees the discarded
              pixels.
            </p>
            <p className="text-text-muted">
              Resizing first also makes subsequent compression more effective. Compression artifacts
              are less visible on smaller images because there are fewer pixels to examine. A 800px
              image compressed at 75% quality often looks better than a 4000px image compressed to
              the same file size.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-2 text-sm">
              <h3 className="font-bold text-base mb-3">
                Recommended dimensions before compressing
              </h3>
              {[
                ['Web/blog images', '1200–1600px wide'],
                ['Social media', '1080px wide (Instagram), 1280×720px (YouTube thumbnail)'],
                ['Email inline', '600px wide — maximum email client width'],
                ['Product photos', '1000–1500px — enough for zoom functionality'],
                ['Profile photos', '400–600px — screens rarely display larger'],
              ].map(([use, size]) => (
                <div
                  key={use}
                  className="flex gap-3 border-b border-border pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-text-main w-36 shrink-0">{use}</span>
                  <span className="text-text-muted">{size}</span>
                </div>
              ))}
            </div>

            <p className="text-text-muted">
              Use the free{' '}
              <Link href="/resize-image" className="text-primary hover:underline font-medium">
                Resize Image tool
              </Link>{' '}
              to resize to exact pixel dimensions before compressing.
            </p>
          </section>

          {/* Method 5: Target format by content type */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 5: Match Format to Content Type</h2>
            <p className="text-text-muted">
              Different image formats are optimized for different types of content. Using the wrong
              format for your content type produces unnecessarily large files regardless of
              compression settings.
            </p>

            <div className="space-y-3">
              {[
                {
                  type: 'Photographs',
                  best: 'JPEG at 80% or WebP lossy',
                  avoid: 'PNG (3–10× larger than JPEG for photos)',
                  note: 'JPEG handles gradients and smooth tones efficiently. PNG stores every pixel separately, making photographs large.',
                },
                {
                  type: 'Screenshots / UI',
                  best: 'PNG lossless or WebP lossless',
                  avoid: 'JPEG (introduces visible artifacts on sharp text and edges)',
                  note: 'Screenshots have flat colors and sharp edges — lossless formats handle these efficiently.',
                },
                {
                  type: 'Logos / icons',
                  best: 'SVG (vector) or PNG lossless',
                  avoid: 'JPEG (artifacts on hard edges, no transparency)',
                  note: 'SVG files are resolution-independent and often under 10KB. PNG preserves crisp edges.',
                },
                {
                  type: 'Product photos (with transparency)',
                  best: 'WebP lossless or PNG',
                  avoid: 'JPEG (no transparency support)',
                  note: 'WebP lossless is typically 20–30% smaller than PNG at identical quality.',
                },
              ].map(({ type, best, avoid, note }) => (
                <div key={type} className="border border-border rounded-xl p-5 space-y-2">
                  <h3 className="font-bold text-base">{type}</h3>
                  <div className="text-sm space-y-1">
                    <p className="text-text-muted">
                      <span className="font-medium text-text-main">Best format: </span>
                      {best}
                    </p>
                    <p className="text-text-muted">
                      <span className="font-medium text-text-main">Avoid: </span>
                      {avoid}
                    </p>
                    <p className="text-text-muted">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Settings reference table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Quick Reference: Best Settings by Use Case</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Use Case
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Format
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Quality
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Expected Reduction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Website photos', 'WebP or JPEG', '80%', '60–75%'],
                    ['Social media', 'JPEG', '85%', '55–70%'],
                    ['Email attachment', 'JPEG', '80%', '60–75%'],
                    ['Profile photo', 'JPEG', '85%', '55–65%'],
                    ['Screenshot', 'PNG lossless', 'n/a (lossless)', '10–30%'],
                    ['Logo with transparency', 'WebP or PNG', 'lossless', '15–40%'],
                    ['Government portal', 'JPEG', '70–80%', '70–80%'],
                    ['Print (high quality)', 'JPEG', '95%', '25–40%'],
                  ].map(([useCase, format, quality, reduction]) => (
                    <tr key={useCase} className="border-t border-border">
                      <td className="p-3 border border-border font-medium text-text-main">
                        {useCase}
                      </td>
                      <td className="p-3 border border-border text-text-muted">{format}</td>
                      <td className="p-3 border border-border text-text-muted">{quality}</td>
                      <td className="p-3 border border-border text-text-muted">{reduction}</td>
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
                  q: 'Can I compress an image without losing any quality at all?',
                  a: 'Yes — using lossless compression. For PNG, lossless optimization reorganizes internal data without changing any pixels, reducing file size by 10–30%. WebP lossless achieves similar results with smaller files. For photographs, however, lossless compression produces small savings (10–20%); lossy compression at quality 80 produces 60–75% savings with imperceptible quality loss.',
                },
                {
                  q: 'What is the best quality setting for compressing images?',
                  a: 'For JPEG, quality 80 is the industry-standard recommendation for web and social media use. It reduces file size by 60–75% while maintaining visual quality that is indistinguishable from the original on normal screens. For print or archiving, use 90–95%. For thumbnails and previews where small file size matters more, 70–75% is acceptable.',
                },
                {
                  q: 'Does compressing a JPEG multiple times reduce quality further?',
                  a: 'Yes — each time a JPEG is re-compressed, quality loss compounds. The first compression (e.g., from raw to 80% JPEG) removes the most data; subsequent compressions of the resulting JPEG remove more. Always compress from the original file rather than from an already-compressed copy. CompressImg processes the file you upload directly — it does not re-download a previously compressed version.',
                },
                {
                  q: 'Is WebP really better than JPEG?',
                  a: 'For web use, yes. WebP produces files 25–35% smaller than JPEG at equivalent visual quality, supports both lossy and lossless modes, and includes transparency support that JPEG lacks. All major browsers support WebP. The only reason to prefer JPEG is compatibility with older software (some desktop apps and email clients still do not handle WebP).',
                },
                {
                  q: 'How do I compress an image to a specific file size without losing quality?',
                  a: 'Use a target-size compressor that automatically finds the highest quality setting that produces output under your target size. This is better than guessing the quality setting manually. CompressImg offers target-size tools for 50KB, 100KB, 200KB, 300KB, 500KB, and 1MB. Resize the image to its actual display dimensions first — compressing an oversized image to a small target forces very low quality.',
                },
                {
                  q: 'What is the difference between lossless and lossy image compression?',
                  a: 'Lossless compression reduces file size by reorganizing data more efficiently — no pixel values change, and the original can be perfectly reconstructed. Lossy compression discards image data the human eye is unlikely to notice — the original cannot be perfectly reconstructed, but the difference is imperceptible at high quality settings. Lossless saves 10–30%; lossy saves 60–80%.',
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
              <li>Use quality 80–85% for JPEG — imperceptible loss, 60–75% file size reduction</li>
              <li>Use lossless PNG compression for screenshots, icons, and graphics</li>
              <li>Convert to WebP for 25–35% smaller files than JPEG at the same visual quality</li>
              <li>
                Resize to display dimensions before compressing — removes pixels that are never
                shown
              </li>
              <li>
                Match format to content type — JPEG for photos, PNG/WebP lossless for graphics
              </li>
            </ul>
            <p className="text-sm text-text-muted pt-2">
              All tools are available free at{' '}
              <Link href="/" className="text-primary hover:underline font-medium">
                CompressImg
              </Link>{' '}
              — no upload to any server, no account required.
            </p>
          </section>

          {/* Related tools */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Free Image Compression Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/compress-image',
                  label: 'Compress Image',
                  desc: 'Reduce JPG, PNG, WebP size with quality control',
                },
                {
                  href: '/jpg-to-webp',
                  label: 'JPG to WebP',
                  desc: 'Convert to WebP for 25–35% smaller files',
                },
                {
                  href: '/png-to-webp',
                  label: 'PNG to WebP',
                  desc: 'Lossless PNG to efficient WebP conversion',
                },
                {
                  href: '/resize-image',
                  label: 'Resize Image',
                  desc: 'Resize before compressing for best results',
                },
                {
                  href: '/compress-image-to-100kb',
                  label: 'Compress to 100KB',
                  desc: 'Auto-find the best quality for your target size',
                },
                {
                  href: '/compress-images',
                  label: 'Batch Compress',
                  desc: 'Compress multiple images at once',
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
