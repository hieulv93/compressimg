import Link from 'next/link'

export default function AvifVsWebp() {
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
        <span className="text-text-main">AVIF vs WebP</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-24">May 24, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            AVIF vs WebP: Which Modern Image Format Wins in 2026?
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            AVIF and WebP are both modern image formats designed to replace JPEG on the web. AVIF
            produces smaller files — but WebP has broader support. This guide breaks down the
            real-world differences so you can choose the right format for your use case.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-3 border border-border font-semibold">Feature</th>
                    <th className="text-left p-3 border border-border font-semibold">AVIF</th>
                    <th className="text-left p-3 border border-border font-semibold">WebP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'File size vs JPEG',
                      avif: '40–60% smaller',
                      webp: '25–35% smaller',
                    },
                    {
                      feature: 'Browser support (2026)',
                      avif: '~90% (Chrome, Firefox, Edge)',
                      webp: '~97% (all modern)',
                    },
                    {
                      feature: 'Safari support',
                      avif: 'Partial (iOS 16+)',
                      webp: 'Full (Safari 14+)',
                    },
                    { feature: 'Transparency (alpha)', avif: 'Yes', webp: 'Yes' },
                    { feature: 'Lossless mode', avif: 'Yes', webp: 'Yes' },
                    { feature: 'Animation', avif: 'Yes', webp: 'Yes' },
                    { feature: 'Encoding speed', avif: 'Slow (CPU-heavy)', webp: 'Fast' },
                    { feature: 'HDR / wide color gamut', avif: 'Yes', webp: 'Limited' },
                  ].map(({ feature, avif, webp }, i) => (
                    <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border font-medium">{feature}</td>
                      <td className="p-3 border border-border text-text-muted">{avif}</td>
                      <td className="p-3 border border-border text-text-muted">{webp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Is AVIF?</h2>
            <p>
              AVIF (AV1 Image File Format) is an image format derived from the AV1 video codec — the
              same technology used by YouTube, Netflix, and Vimeo for video streaming. It was
              developed by the Alliance for Open Media (AOM) and standardized in 2019.
            </p>
            <p className="mt-3">
              Because AV1 was designed to compress video with extreme efficiency, its still-image
              variant AVIF achieves remarkable compression ratios. At equivalent visual quality,
              AVIF files are typically 40–60% smaller than JPEG and 20–30% smaller than WebP.
            </p>
            <p className="mt-3">
              The trade-off is encoding speed. Generating an AVIF file from an original source is
              significantly more CPU-intensive than encoding WebP or JPEG. For static images on a
              website, this is a one-time server cost. For user-uploaded content or real-time
              processing, it can be a bottleneck.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Is WebP?</h2>
            <p>
              WebP was developed by Google and released in 2010. It uses a compression algorithm
              based on the VP8 video codec for lossy mode and a custom algorithm for lossless mode.
              It was designed as a single format to replace both JPEG (lossy photos) and PNG
              (lossless transparency).
            </p>
            <p className="mt-3">
              WebP achieves 25–35% smaller file sizes than JPEG at the same visual quality — a
              meaningful improvement for web performance without the encoding complexity of AVIF. As
              of 2026, WebP support exceeds 97% globally across all modern browsers.
            </p>
            <p className="mt-3">
              The key advantage WebP has over AVIF is maturity. It is supported in every modern
              browser, every major CMS, most image CDNs, and most image processing libraries. It is
              the format Google PageSpeed Insights recommends when it flags &quot;Serve images in
              next-gen formats.&quot;
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">File Size: How Big Is the Difference?</h2>
            <p>
              The compression advantage of AVIF over WebP varies by image content. Photographic
              images with smooth gradients show the largest AVIF advantage. Images with sharp edges
              and flat colors show less difference.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Image type</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      JPEG baseline
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">WebP</th>
                    <th className="text-left p-3 border border-border font-semibold">AVIF</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: 'Portrait photo',
                      jpeg: '300 KB',
                      webp: '200 KB (−33%)',
                      avif: '140 KB (−53%)',
                    },
                    {
                      type: 'Product photo (white bg)',
                      jpeg: '180 KB',
                      webp: '130 KB (−28%)',
                      avif: '100 KB (−44%)',
                    },
                    {
                      type: 'Landscape / nature',
                      jpeg: '500 KB',
                      webp: '320 KB (−36%)',
                      avif: '220 KB (−56%)',
                    },
                    {
                      type: 'Screenshot / UI',
                      jpeg: '120 KB',
                      webp: '90 KB (−25%)',
                      avif: '75 KB (−38%)',
                    },
                  ].map(({ type, jpeg, webp, avif }, i) => (
                    <tr key={type} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{type}</td>
                      <td className="p-3 border border-border text-text-muted">{jpeg}</td>
                      <td className="p-3 border border-border text-green-600 font-medium">
                        {webp}
                      </td>
                      <td className="p-3 border border-border text-green-600 font-bold">{avif}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-text-muted">
              Approximate values at equivalent visual quality (JPEG q80, WebP q75, AVIF q60). Actual
              results vary by image content and encoder settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Browser Support in 2026</h2>
            <p>
              WebP has universal support among modern browsers — Chrome, Firefox, Safari 14+, Edge,
              Samsung Internet, and Opera. Global support exceeds 97%.
            </p>
            <p className="mt-3">
              AVIF support has grown significantly since 2022. Chrome and Firefox have supported it
              since 2020–2021. Safari added basic AVIF support in Safari 16 (iOS 16 / macOS
              Ventura), but support for edge cases (animations, specific encoding profiles) has been
              inconsistent.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <p className="font-semibold mb-2">Remaining AVIF gaps as of 2026:</p>
              <ul className="list-disc pl-5 space-y-1 text-text-muted">
                <li>Older iOS devices (pre-iOS 16) — approximately 5–8% of mobile users</li>
                <li>Some embedded browsers in apps on Android</li>
                <li>Internet Explorer (irrelevant for most sites, but worth noting)</li>
                <li>Some server-side image processors that pre-date AVIF support</li>
              </ul>
            </div>
            <p className="mt-4">
              The practical implication: if you serve AVIF without a fallback, roughly 7–10% of
              visitors may see broken images depending on your audience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The &lt;picture&gt; Element: Best of Both Worlds
            </h2>
            <p>
              For production websites, the recommended approach is to serve AVIF to browsers that
              support it and fall back to WebP or JPEG for those that do not. The HTML{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">&lt;picture&gt;</code>{' '}
              element handles this automatically:
            </p>
            <pre className="mt-4 bg-surface border border-border rounded-xl p-4 text-xs overflow-x-auto leading-relaxed">
              {`<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" width="800" height="600" />
</picture>`}
            </pre>
            <p className="mt-3 text-sm text-text-muted">
              The browser picks the first source it supports. AVIF for modern browsers, WebP for
              Safari 14–15, JPEG for everything older. No JavaScript required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Which Should You Use?</h2>
            <div className="space-y-4">
              <div className="border border-border rounded-xl p-5">
                <h3 className="font-semibold text-text-main mb-2">
                  Use WebP if you want simplicity
                </h3>
                <p className="text-text-muted text-sm">
                  WebP works everywhere, encodes fast, and is supported by virtually all tools and
                  CDNs. For most websites, switching from JPEG to WebP gives the largest performance
                  improvement with the least complexity. This is the right choice for most
                  developers in 2026.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h3 className="font-semibold text-text-main mb-2">
                  Use AVIF if you prioritize file size
                </h3>
                <p className="text-text-muted text-sm">
                  AVIF is worth using if your site serves large volumes of images (e-commerce, news,
                  CDN-heavy), your audience is primarily on modern Chrome/Firefox, and you can
                  implement the <code className="bg-surface px-1 rounded">&lt;picture&gt;</code>{' '}
                  element fallback. The 20–30% additional size reduction over WebP is meaningful at
                  scale.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h3 className="font-semibold text-text-main mb-2">
                  Serve both with a &lt;picture&gt; element
                </h3>
                <p className="text-text-muted text-sm">
                  The best production strategy is AVIF → WebP → JPEG. This gives AVIF benefits to
                  the majority of users while guaranteeing compatibility for everyone else. Most
                  image CDNs (Cloudflare Images, Imgix, Cloudinary) can handle this automatically.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — reduce JPEG, PNG, or WebP file size
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-primary hover:underline">
                  JPG to WebP
                </Link>{' '}
                — convert photos to WebP format
              </li>
              <li>
                <Link href="/png-to-webp" className="text-primary hover:underline">
                  PNG to WebP
                </Link>{' '}
                — convert PNG to smaller WebP
              </li>
              <li>
                <Link href="/convert-image" className="text-primary hover:underline">
                  Convert image format
                </Link>{' '}
                — convert between any supported format
              </li>
              <li>
                <Link
                  href="/blog/best-image-format-for-web"
                  className="text-primary hover:underline"
                >
                  Best image format for web
                </Link>{' '}
                — full format comparison guide
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'Is AVIF better than WebP?',
                  a: 'AVIF produces 20–30% smaller files than WebP at equivalent visual quality, which makes it technically superior in compression. However, WebP has broader browser support (97% vs ~90%) and faster encoding. For most websites in 2026, WebP is the practical choice — use AVIF with a WebP fallback if file size is critical.',
                },
                {
                  q: 'Does Safari support AVIF?',
                  a: 'Safari 16+ (iOS 16 / macOS Ventura and later) added basic AVIF support. Older Safari versions do not support AVIF. This is why the <picture> element fallback to WebP is important — it ensures Safari users always see the image.',
                },
                {
                  q: 'Is AVIF supported in Chrome?',
                  a: 'Yes. Chrome has supported AVIF since version 85 (released August 2020). This covers the majority of desktop and Android browser usage.',
                },
                {
                  q: 'How much smaller is AVIF compared to JPEG?',
                  a: 'At equivalent visual quality, AVIF is typically 40–60% smaller than JPEG. The actual reduction varies by image type — photographs with smooth gradients show the largest improvement, while flat-color images show less difference.',
                },
                {
                  q: 'Can I convert images to AVIF or WebP for free?',
                  a: 'Yes. Use the free tools at compressimg.pro — JPG to WebP and PNG to WebP convert in your browser without any upload. For AVIF conversion, specialized tools or image CDNs handle this at the server level.',
                },
                {
                  q: 'Does WebP or AVIF support transparency?',
                  a: 'Both formats support alpha channel transparency. WebP can replace PNG for transparent images with much smaller file sizes. AVIF also supports transparency with even better compression.',
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
