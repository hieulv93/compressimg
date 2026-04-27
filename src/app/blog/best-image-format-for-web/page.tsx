import Link from 'next/link'

export default function BestImageFormatForWeb() {
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
        <span className="text-text-main">Best Image Format for Web</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-04-28">April 28, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            Best Image Format for Web: JPEG vs PNG vs WebP in 2026
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Choosing the wrong image format is one of the most common — and most costly — mistakes
            in web performance. A PNG where a JPEG would do can be 5× larger. A JPEG where WebP
            works costs 30% more bandwidth than necessary. This guide explains exactly when to use
            each format and why.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick reference */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Format Decision — Quick Reference</h2>
            <div className="space-y-2 text-sm">
              {[
                {
                  format: 'WebP',
                  use: 'Default format for all web images in 2026',
                  badge: 'Recommended',
                },
                {
                  format: 'JPEG',
                  use: "Photos on platforms that don't support WebP",
                  badge: 'Fallback',
                },
                {
                  format: 'PNG',
                  use: 'Logos, icons, screenshots, images with transparency',
                  badge: 'Specific use',
                },
                {
                  format: 'AVIF',
                  use: 'Modern browsers only — smaller than WebP but limited support',
                  badge: 'Experimental',
                },
                {
                  format: 'SVG',
                  use: 'Logos, icons, illustrations — vector graphics only',
                  badge: 'Vector only',
                },
                {
                  format: 'GIF',
                  use: 'Simple animations — avoid for static images',
                  badge: 'Animations',
                },
              ].map(({ format, use, badge }) => (
                <div
                  key={format}
                  className="flex items-start gap-3 border border-border rounded-lg p-3"
                >
                  <span className="font-mono font-bold text-primary w-12 flex-shrink-0">
                    {format}
                  </span>
                  <span className="text-text-muted flex-1">{use}</span>
                  <span className="text-xs bg-surface border border-border px-2 py-0.5 rounded flex-shrink-0">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">JPEG — The Reliable Standard</h2>
            <p>
              JPEG (also written JPG) has been the dominant web image format for 30 years. It uses
              lossy compression to reduce file size by discarding image data that the human eye
              cannot easily perceive — particularly in areas of gradual color transition like skies,
              skin tones, and blurred backgrounds.
            </p>
            <p className="mt-3">
              At quality 80, a typical 3MB phone photo becomes 150–300KB with no perceptible quality
              change on a standard monitor. At quality 75, the reduction reaches 70–80% with only
              minor artifacts visible on close inspection.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 space-y-2 text-sm">
              <p className="font-semibold text-text-main">JPEG strengths:</p>
              <ul className="list-disc pl-5 space-y-1 text-text-muted">
                <li>Universal browser and platform support</li>
                <li>Excellent for photographs and complex color images</li>
                <li>Quality 75–85 hits the sweet spot of size vs. quality</li>
                <li>Accepted everywhere — social media, email, CMS, print</li>
              </ul>
              <p className="font-semibold text-text-main mt-3">JPEG weaknesses:</p>
              <ul className="list-disc pl-5 space-y-1 text-text-muted">
                <li>No transparency support — white or colored backgrounds only</li>
                <li>Quality degrades each time you re-save the file</li>
                <li>Block artifacts visible at quality below 60</li>
                <li>Larger than WebP at equivalent visual quality</li>
              </ul>
            </div>
            <p className="mt-4">
              <strong>Use JPEG when:</strong> you need maximum platform compatibility, the image is
              a photograph without transparent areas, or you are uploading to social media platforms
              that re-compress uploads anyway (Instagram, Facebook, Twitter).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">PNG — Lossless Quality, Larger Files</h2>
            <p>
              PNG uses lossless compression — every pixel is preserved exactly. This makes PNG the
              correct choice for images where quality loss is unacceptable: logos with sharp edges,
              screenshots with text, UI elements, and any image that requires a transparent
              background.
            </p>
            <p className="mt-3">
              The cost is file size. A PNG photograph at 1920×1080px can easily reach 3–6MB — 10×
              larger than the same image as a JPEG at quality 80. For photographs, PNG provides no
              visible quality improvement over JPEG at quality 85, but costs 10× the bandwidth.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 space-y-2 text-sm">
              <p className="font-semibold text-text-main">PNG strengths:</p>
              <ul className="list-disc pl-5 space-y-1 text-text-muted">
                <li>Supports transparency (alpha channel)</li>
                <li>Lossless — no quality degradation on re-save</li>
                <li>Sharp edges and flat colors are preserved perfectly</li>
                <li>Ideal for screenshots, logos, icons, UI components</li>
              </ul>
              <p className="font-semibold text-text-main mt-3">PNG weaknesses:</p>
              <ul className="list-disc pl-5 space-y-1 text-text-muted">
                <li>Much larger than JPEG for photographs</li>
                <li>No animation support (use GIF or WebP animated for that)</li>
                <li>PNG-24 (full color) files can be very large</li>
              </ul>
            </div>
            <p className="mt-4">
              <strong>Use PNG when:</strong> the image has a transparent background, contains
              sharp-edged text or flat colors (logos, icons, diagrams), or will be re-edited and
              re-exported multiple times where quality compounding would be a problem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">WebP — The Recommended Default in 2026</h2>
            <p>
              WebP was developed by Google specifically to address JPEG and PNG&apos;s limitations
              for web delivery. It supports both lossy and lossless compression, transparency, and
              animation in a single format — and produces significantly smaller files than its
              predecessors.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Comparison</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      WebP vs JPEG
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      WebP vs PNG
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border">File size (same quality)</td>
                    <td className="p-3 border border-border text-green-600 font-medium">
                      25–35% smaller
                    </td>
                    <td className="p-3 border border-border text-green-600 font-medium">
                      Up to 70% smaller
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border">Transparency</td>
                    <td className="p-3 border border-border text-green-600">✓ Supported</td>
                    <td className="p-3 border border-border text-green-600">✓ Supported</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Lossless mode</td>
                    <td className="p-3 border border-border text-red-500">✗ Not available</td>
                    <td className="p-3 border border-border text-green-600">✓ Available</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border">Animation</td>
                    <td className="p-3 border border-border text-red-500">✗ Not available</td>
                    <td className="p-3 border border-border text-red-500">✗ Not available</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Browser support</td>
                    <td className="p-3 border border-border">100% modern browsers</td>
                    <td className="p-3 border border-border">100% modern browsers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              All modern browsers — Chrome, Firefox, Safari 14+, Edge, Opera — support WebP. As of
              2026, WebP browser support exceeds 97% globally. The only remaining edge cases are
              very old iOS devices (pre-iOS 14) and certain embedded browsers.
            </p>
            <p className="mt-3">
              Google&apos;s PageSpeed Insights actively flags JPEG and PNG images as opportunities
              to &quot;Serve images in next-gen formats&quot; — meaning WebP. Converting to WebP is
              one of the single highest-impact actions for improving LCP scores.
            </p>
            <p className="mt-3">
              <strong>Convert your images:</strong>{' '}
              <Link href="/jpg-to-webp" className="text-primary hover:underline">
                JPG to WebP
              </Link>{' '}
              and{' '}
              <Link href="/png-to-webp" className="text-primary hover:underline">
                PNG to WebP
              </Link>{' '}
              — free, browser-based, no upload.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">AVIF — Smaller Than WebP, Not Yet Universal</h2>
            <p>
              AVIF (AV1 Image File Format) is the newest major web image format, derived from the
              AV1 video codec. At equivalent visual quality, AVIF produces files 20–30% smaller than
              WebP and 50–60% smaller than JPEG.
            </p>
            <p className="mt-3">
              The limitation is browser support. As of 2026, AVIF is supported in Chrome, Firefox,
              and Edge, but Safari support remains partial and iOS support is inconsistent. For
              sites where the majority of visitors use modern desktop Chrome, AVIF is worth testing.
            </p>
            <p className="mt-3">
              The recommended approach is to use the{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">&lt;picture&gt;</code>{' '}
              element with AVIF as the first source, WebP as the second, and JPEG as the final
              fallback:
            </p>
            <pre className="mt-3 bg-surface border border-border rounded-xl p-4 text-xs overflow-x-auto leading-relaxed">
              {`<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="description" />
</picture>`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">SVG — For Logos and Icons Only</h2>
            <p>
              SVG (Scalable Vector Graphics) is a fundamentally different format — it stores images
              as mathematical descriptions of shapes rather than pixel data. This means SVG files
              scale perfectly to any size without any quality loss, and simple SVGs are often under
              5KB.
            </p>
            <p className="mt-3">
              SVG is the correct format for logos, icons, illustrations, charts, and any image built
              from geometric shapes and flat colors. It is not suitable for photographs — a
              photographic SVG would be far larger than the equivalent JPEG.
            </p>
            <p className="mt-3">
              For icon sets, SVG is dramatically better than PNG sprite sheets. A set of 50 UI icons
              as SVG might be 30KB total — the equivalent PNG sprite at 2× retina resolution could
              be 200KB.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Format vs. Compression: Both Matter</h2>
            <p>
              Choosing the right format is only half the equation. Compression quality within each
              format has an equally large impact on file size. A WebP at quality 100 can be larger
              than a JPEG at quality 80 — format alone does not guarantee a small file.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Use case</th>
                    <th className="text-left p-3 border border-border font-semibold">Format</th>
                    <th className="text-left p-3 border border-border font-semibold">Quality</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Target size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { use: 'Hero image', format: 'WebP', quality: '80', target: '100–250 KB' },
                    { use: 'Product photo', format: 'WebP', quality: '75', target: '60–150 KB' },
                    { use: 'Blog image', format: 'WebP', quality: '75', target: '50–120 KB' },
                    { use: 'Thumbnail', format: 'WebP', quality: '70', target: '20–60 KB' },
                    {
                      use: 'Logo / icon',
                      format: 'SVG or PNG',
                      quality: 'Lossless',
                      target: '< 20 KB',
                    },
                    {
                      use: 'Social media upload',
                      format: 'JPEG',
                      quality: '85–90',
                      target: '< 1 MB',
                    },
                  ].map(({ use, format, quality, target }, i) => (
                    <tr key={use} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{use}</td>
                      <td className="p-3 border border-border font-medium">{format}</td>
                      <td className="p-3 border border-border">{quality}</td>
                      <td className="p-3 border border-border text-green-600 font-medium">
                        {target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              Start with these targets and verify with PageSpeed Insights. If LCP is still above
              2.5s on mobile, reduce quality by 5 and recheck.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Impact on Core Web Vitals and SEO</h2>
            <p>
              Image format and compression are the largest levers for improving Core Web Vitals on
              most websites. The three metrics most affected by image decisions:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">LCP (Largest Contentful Paint)</strong> — for
                most pages, the LCP element is the hero image. Switching a 500KB JPEG hero to a
                200KB WebP can improve LCP by 0.5–1.5 seconds on mobile. Google wants LCP under 2.5
                seconds.
              </li>
              <li>
                <strong className="text-text-main">CLS (Cumulative Layout Shift)</strong> — not
                directly format-dependent, but images without explicit width and height attributes
                cause layout shifts. Always set dimensions in HTML regardless of format.
              </li>
              <li>
                <strong className="text-text-main">Total page weight</strong> — Google&apos;s
                ranking algorithm uses page speed as a signal. The average webpage sends 1–2MB of
                images. Converting to WebP at quality 75–80 typically reduces total image weight by
                35–50%.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How to Convert and Compress Images for Web</h2>
            <p>
              All conversions below happen entirely in your browser — no files are uploaded to a
              server.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — reduce JPEG, PNG, or WebP file size with a quality slider
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-primary hover:underline">
                  JPG to WebP
                </Link>{' '}
                — convert photos to WebP for 25–35% smaller files
              </li>
              <li>
                <Link href="/png-to-webp" className="text-primary hover:underline">
                  PNG to WebP
                </Link>{' '}
                — convert lossless PNGs to smaller WebP format
              </li>
              <li>
                <Link href="/webp-to-jpg" className="text-primary hover:underline">
                  WebP to JPG
                </Link>{' '}
                — convert back to JPEG for platform compatibility
              </li>
              <li>
                <Link href="/convert-image" className="text-primary hover:underline">
                  Convert image format
                </Link>{' '}
                — convert between any format (JPG, PNG, WebP, GIF)
              </li>
              <li>
                <Link href="/compress-images" className="text-primary hover:underline">
                  Batch compress images
                </Link>{' '}
                — compress up to 5 images at once, download as ZIP
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What is the best image format for websites?',
                  a: 'WebP is the best image format for most websites in 2026. It produces 25–35% smaller files than JPEG at equivalent visual quality, supports transparency like PNG, and is supported by all modern browsers. Use JPEG as a fallback for platforms that do not accept WebP.',
                },
                {
                  q: 'When should I use PNG instead of JPEG?',
                  a: 'Use PNG for images that require transparency, images with flat colors and sharp edges (logos, icons, screenshots), and images that will be re-edited multiple times. Use JPEG for photographs and any image where transparency is not needed.',
                },
                {
                  q: 'Is WebP better than JPEG?',
                  a: 'Yes, for web use. WebP produces 25–35% smaller files than JPEG at the same visual quality and also supports lossless compression and transparency. All modern browsers support WebP. Only prefer JPEG when uploading to platforms that do not accept WebP.',
                },
                {
                  q: 'Should I use AVIF or WebP?',
                  a: 'AVIF produces 20–30% smaller files than WebP but has incomplete browser support (especially on iOS). For 2026, use WebP for maximum compatibility. If your audience is primarily on modern Chrome or Firefox, AVIF is worth testing with a <picture> fallback.',
                },
                {
                  q: 'Does image format affect SEO?',
                  a: 'Yes, indirectly. Format affects file size, which affects page load speed. Using WebP instead of JPEG can reduce image weight by 25–35%, improving LCP — a Core Web Vital that directly affects search rankings.',
                },
                {
                  q: 'Can I convert JPEG to WebP online for free?',
                  a: 'Yes. Use the free JPG to WebP converter at compressimg.pro/jpg-to-webp. Conversion happens entirely in your browser — no upload to server. PNG to WebP is also available at compressimg.pro/png-to-webp.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-text-main mb-2">{q}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
