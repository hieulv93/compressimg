import Link from 'next/link'

export default function HowToReduceImageFileSize() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
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
        <span className="text-text-main">How to Reduce Image File Size</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-04-29">April 29, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Reduce Image File Size: 5 Methods That Actually Work
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Large image files slow down websites, get rejected by upload forms, and clog email
            inboxes. This guide explains five proven methods to reduce image file size — from basic
            compression to format conversion — and when to use each one.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick reference */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Quick Reference — Which Method to Use</h2>
            <div className="space-y-2 text-sm">
              {[
                {
                  method: 'Lossy compression',
                  use: 'Photographs, social media — 60–80% size reduction',
                },
                {
                  method: 'Resize to display dimensions',
                  use: 'Images larger than needed — free file size reduction',
                },
                {
                  method: 'Convert to WebP',
                  use: 'Web images — 25–35% smaller than JPEG at same quality',
                },
                {
                  method: 'Target-size compression',
                  use: 'Upload forms, email limits — hit an exact KB target',
                },
                {
                  method: 'Batch compression',
                  use: 'Multiple images at once — process a full folder',
                },
              ].map(({ method, use }) => (
                <div key={method} className="flex gap-3">
                  <span className="font-semibold text-text-main shrink-0 w-44">{method}</span>
                  <span className="text-text-muted">{use}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why file size matters */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Why Image File Size Matters</h2>
            <p className="text-text-muted">
              A single unoptimized image can be the difference between a page that loads in 1 second
              and one that takes 5. Google&apos;s Core Web Vitals — specifically Largest Contentful
              Paint (LCP) — are directly affected by image file size. Pages with LCP under 2.5
              seconds rank higher than slower pages.
            </p>
            <p className="text-text-muted">
              Beyond web performance, file size affects everyday tasks. Email providers limit
              attachments to 10–25MB. Government portals and job applications often require photos
              under 100KB or 200KB. Messaging apps like WhatsApp re-compress images above a certain
              size, reducing quality further. Reducing file size before sending or uploading gives
              you control over output quality.
            </p>
          </section>

          {/* Method 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 1: Compress With Lossy Compression</h2>
            <p className="text-text-muted">
              Lossy compression is the most effective way to reduce image file size for photographs.
              JPEG compression works by analyzing image data in 8×8 pixel blocks and discarding
              frequency information that the human eye is least likely to notice. At 80% quality,
              JPEG typically removes 60–75% of the original file size with no visible difference on
              screen.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-bold text-base">What to expect at different quality settings</h3>
              <div className="space-y-2 text-sm">
                {[
                  [
                    '100% quality',
                    'Near-lossless. File still 30–50% smaller than raw. Overkill for web.',
                  ],
                  [
                    '85% quality',
                    'Visually identical to original for most photos. File ~60% smaller.',
                  ],
                  [
                    '75% quality',
                    'Slight softness on very fine detail. File ~70% smaller. Standard for web.',
                  ],
                  [
                    '60% quality',
                    'Visible compression artifacts on close inspection. File ~80% smaller.',
                  ],
                  ['40% quality', 'Noticeable quality loss. Only use for thumbnails or previews.'],
                ].map(([setting, desc]) => (
                  <div key={setting} className="flex gap-3">
                    <span className="font-medium text-text-main w-28 shrink-0">{setting}</span>
                    <span className="text-text-muted">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-text-muted">
              For most use cases — social media, email, websites, portfolios — 80–85% quality
              produces the best balance between file size and visual quality. Use the free{' '}
              <Link href="/compress-image" className="text-primary hover:underline font-medium">
                Compress Image tool
              </Link>{' '}
              to compress JPEG, PNG, and WebP files directly in your browser with no upload.
            </p>
          </section>

          {/* Method 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 2: Resize to Actual Display Dimensions</h2>
            <p className="text-text-muted">
              One of the most common — and wasteful — mistakes is uploading an image at 4000×3000
              pixels when it displays at 800×600. Every pixel in the original file is stored and
              transferred, even though most are never rendered. Resizing to the actual display
              dimensions removes these unused pixels entirely.
            </p>
            <p className="text-text-muted">
              File size scales roughly with pixel count. Halving the width and height (e.g., 4000px
              → 2000px) reduces pixel count by 75%, which typically reduces file size by 70–80%.
              This reduction is completely lossless in the sense that the viewer never sees the
              discarded pixels — the image looks identical on screen.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 space-y-2 text-sm">
              <h3 className="font-bold text-base mb-3">Common target dimensions</h3>
              {[
                ['Website banner', '1200–1920px wide'],
                ['Blog post image', '800–1200px wide'],
                ['Social media post', '1080×1080px (Instagram), 1200×628px (Facebook)'],
                ['Email inline image', '600px wide (email client max width)'],
                ['WhatsApp photo', '1600px wide — WhatsApp resizes further automatically'],
                ['Government portal photo', 'Check requirements — often 200–400px at 96 dpi'],
              ].map(([context, size]) => (
                <div key={context} className="flex gap-3">
                  <span className="font-medium text-text-main w-44 shrink-0">{context}</span>
                  <span className="text-text-muted">{size}</span>
                </div>
              ))}
            </div>

            <p className="text-text-muted">
              Use the free{' '}
              <Link href="/resize-image" className="text-primary hover:underline font-medium">
                Resize Image tool
              </Link>{' '}
              to resize by pixel dimensions or by percentage directly in your browser.
            </p>
          </section>

          {/* Method 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 3: Convert to a More Efficient Format</h2>
            <p className="text-text-muted">
              Not all image formats compress equally. Some formats are inherently more efficient
              than others for specific types of content. Switching formats can reduce file size by
              25–50% with identical visual quality.
            </p>

            <div className="space-y-4">
              <div className="border border-border rounded-xl p-5 space-y-2">
                <h3 className="font-bold">Convert JPEG or PNG to WebP</h3>
                <p className="text-text-muted text-sm">
                  WebP is Google&apos;s modern image format that produces 25–35% smaller files than
                  JPEG at equivalent visual quality. All major browsers (Chrome, Firefox, Safari,
                  Edge) support WebP. For web use, converting existing JPEG and PNG images to WebP
                  is one of the highest-impact optimizations available.
                </p>
                <div className="flex gap-3 pt-1 flex-wrap">
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
              </div>

              <div className="border border-border rounded-xl p-5 space-y-2">
                <h3 className="font-bold">Convert PNG to JPG (when no transparency needed)</h3>
                <p className="text-text-muted text-sm">
                  PNG uses lossless compression optimized for flat colors and sharp edges. For
                  photographs and complex images without transparency, PNG files are 3–10× larger
                  than equivalent JPEG. If your PNG is a photograph with no transparent areas,
                  converting to JPEG reduces file size dramatically.
                </p>
                <div className="flex gap-3 pt-1">
                  <Link
                    href="/png-to-jpg"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    PNG to JPG →
                  </Link>
                </div>
              </div>

              <div className="border border-border rounded-xl p-5 space-y-2">
                <h3 className="font-bold">Convert BMP or GIF to JPG</h3>
                <p className="text-text-muted text-sm">
                  BMP files are uncompressed — a 1920×1080 BMP is ~6MB. GIF is limited to 256
                  colors, making it poor for photographs. Converting either format to JPEG produces
                  a dramatically smaller, more compatible file.
                </p>
                <div className="flex gap-3 pt-1 flex-wrap">
                  <Link
                    href="/bmp-to-jpg"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    BMP to JPG →
                  </Link>
                  <Link
                    href="/gif-to-jpg"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    GIF to JPG →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Method 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 4: Compress to a Specific File Size</h2>
            <p className="text-text-muted">
              Many upload forms specify an exact maximum file size — 100KB for a passport photo,
              200KB for a job application, 500KB for a CMS upload. General compression tools require
              you to guess a quality setting and check the output size repeatedly. Target-size
              compression handles this automatically: you specify the target size and the tool finds
              the right quality setting.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/compress-image-to-100kb',
                  label: 'Compress to 100KB',
                  desc: 'Government forms, exam portals, ID photos',
                },
                {
                  href: '/compress-image-to-200kb',
                  label: 'Compress to 200KB',
                  desc: 'Job applications, profile photos, resumes',
                },
                {
                  href: '/compress-image-to-500kb',
                  label: 'Compress to 500KB',
                  desc: 'CMS uploads, WordPress, web publishing',
                },
                {
                  href: '/compress-image-to-1mb',
                  label: 'Compress to 1MB',
                  desc: 'Email attachments, large form uploads',
                },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
                >
                  <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                    {label}
                  </p>
                  <p className="text-xs text-text-muted mt-1">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Method 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Method 5: Batch Compress Multiple Images</h2>
            <p className="text-text-muted">
              When you need to reduce the size of multiple images — a product catalog, a photo
              album, a folder of screenshots — compressing them one by one is impractical. Batch
              compression processes multiple files simultaneously, applying the same compression
              settings to every image and producing a ZIP file with all results.
            </p>
            <p className="text-text-muted">
              Use the free{' '}
              <Link href="/compress-images" className="text-primary hover:underline font-medium">
                Batch Compress Images tool
              </Link>{' '}
              to upload multiple images at once. All compression happens in your browser — no files
              are sent to a server.
            </p>
          </section>

          {/* Platform guide */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Recommended Settings by Use Case</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Use Case
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Target Size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold text-text-main">
                      Best Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Website hero image', 'Under 200KB', 'Resize to 1920px, compress to WebP'],
                    ['Blog post image', 'Under 100KB', 'Resize to 1200px, compress JPG at 80%'],
                    ['Instagram post', 'Under 1MB', 'Resize to 1080×1080, compress JPG'],
                    [
                      'Email attachment',
                      'Under 5MB total',
                      'Compress JPG at 80%, resize if needed',
                    ],
                    [
                      'WhatsApp photo',
                      'Under 5MB',
                      'Compress or resize — WhatsApp re-compresses anyway',
                    ],
                    ['Government portal', 'Under 100–200KB', 'Use target-size compressor'],
                    ['Job application', 'Under 200KB', 'Use target-size compressor'],
                    ['WordPress upload', 'Under 500KB', 'Resize to 1200px, compress JPG'],
                  ].map(([useCase, target, method]) => (
                    <tr key={useCase} className="border-t border-border">
                      <td className="p-3 border border-border font-medium text-text-main">
                        {useCase}
                      </td>
                      <td className="p-3 border border-border">{target}</td>
                      <td className="p-3 border border-border">{method}</td>
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
                  q: 'What is the best way to reduce image file size?',
                  a: 'For photographs, use lossy JPEG compression at 80–85% quality — file size drops 60–80% with no visible difference. For web use, convert to WebP for an additional 25–35% reduction. If you need to hit a specific size limit (100KB, 200KB), use a target-size compressor that automatically finds the right quality setting.',
                },
                {
                  q: 'How do I reduce image file size without losing quality?',
                  a: 'Resize the image to its actual display dimensions — removing pixels that are never shown is free file size reduction. Use lossless PNG compression for graphics and screenshots. Convert JPEG to WebP lossless for a smaller file with identical pixels. At 80–85% JPEG quality, the quality loss is invisible to most viewers.',
                },
                {
                  q: 'How do I reduce an image to under 100KB?',
                  a: "Use a target-size compressor that automatically adjusts JPEG quality until the output is under 100KB. If the image is very large (over 3000px wide), first resize it — compressing a large image to 100KB will result in very low quality. Resize first, then compress. CompressImg's Compress to 100KB tool handles this automatically.",
                },
                {
                  q: 'Does reducing image file size reduce quality?',
                  a: 'Lossy compression (JPEG at high quality settings, WebP lossy) removes some image data but produces imperceptible differences at 80–85%. Lossless methods — resizing, PNG compression, format conversion — reduce file size without touching visual quality. The impact depends on the method and quality setting used.',
                },
                {
                  q: 'What image format produces the smallest file size?',
                  a: 'WebP produces the smallest file size for most web images — 25–35% smaller than JPEG at equivalent quality, with both lossy and lossless modes. AVIF is even more efficient but has less platform support. For photographs, JPEG remains the universal choice. For graphics and screenshots, PNG is best when you need lossless output.',
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
              <li>Compress with lossy JPEG at 80–85% quality for 60–80% file size reduction</li>
              <li>Resize to actual display dimensions to eliminate unused pixels for free</li>
              <li>Convert to WebP for 25–35% smaller files than JPEG at the same quality</li>
              <li>Use target-size compression to hit exact KB limits required by upload forms</li>
              <li>Batch compress multiple files at once to process entire folders efficiently</li>
            </ul>
            <p className="text-sm text-text-muted pt-2">
              All five methods are available free at{' '}
              <Link href="/" className="text-primary hover:underline font-medium">
                CompressImg
              </Link>{' '}
              — no upload, no account, 100% browser-based.
            </p>
          </section>

          {/* Related tools */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Free Tools to Reduce Image File Size</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/compress-image',
                  label: 'Compress Image',
                  desc: 'Reduce JPG, PNG, WebP file size instantly',
                },
                {
                  href: '/resize-image',
                  label: 'Resize Image',
                  desc: 'Resize to specific pixel dimensions',
                },
                {
                  href: '/compress-image-to-100kb',
                  label: 'Compress to 100KB',
                  desc: 'Hit exact 100KB size limits automatically',
                },
                {
                  href: '/compress-images',
                  label: 'Batch Compress',
                  desc: 'Compress multiple images at once',
                },
                {
                  href: '/jpg-to-webp',
                  label: 'JPG to WebP',
                  desc: 'Convert to WebP for 25–35% smaller files',
                },
                {
                  href: '/png-to-jpg',
                  label: 'PNG to JPG',
                  desc: 'Reduce large PNG files to compact JPEG',
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
