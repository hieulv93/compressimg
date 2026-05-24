import Link from 'next/link'

export default function ImageSeoGuide() {
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
        <span className="text-text-main">Image SEO Guide</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-24">May 24, 2026</time>
            <span>·</span>
            <span>12 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            Image SEO: Complete Guide to Optimizing Images for Google (2026)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Images affect SEO in more ways than most developers and content creators realize. File
            size affects Core Web Vitals. Alt text affects accessibility and keyword indexing. File
            names affect how Google understands and surfaces images. This guide covers every factor
            that influences image SEO — with specific settings and tactics for 2026.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Image SEO Checklist</h2>
            <div className="space-y-2 text-sm">
              {[
                {
                  item: 'File size under 200 KB for most images (under 100 KB for thumbnails)',
                  done: true,
                },
                { item: 'Alt text on every image — descriptive, keyword-relevant', done: true },
                { item: 'Descriptive file names (use hyphens, not underscores)', done: true },
                { item: 'Explicit width and height attributes on all img tags', done: true },
                { item: 'Next-gen format: WebP or AVIF instead of JPEG/PNG', done: true },
                { item: 'Lazy loading (loading="lazy") on below-fold images', done: true },
                { item: 'LCP image preloaded with <link rel="preload">', done: true },
                { item: 'Images included in sitemap.xml (with image:image extension)', done: true },
                { item: 'Structured data: ImageObject where applicable', done: true },
              ].map(({ item }) => (
                <div key={item} className="flex items-start gap-2 p-2 rounded">
                  <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. File Size and Core Web Vitals</h2>
            <p>
              Image file size is the single largest factor in page load speed for most websites.
              Google&apos;s Core Web Vitals — specifically LCP (Largest Contentful Paint) and INP —
              are direct ranking factors. If your hero image is a 2 MB JPEG, it is almost certainly
              causing your LCP to fail.
            </p>
            <p className="mt-3">
              Google&apos;s target is LCP under 2.5 seconds on a mobile connection. For a typical
              hero image, this means the image itself must be under 150–300 KB, depending on your
              server response time and other page resources.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Image type</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Max file size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">Format</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Hero / banner image', max: '150–250 KB', format: 'WebP' },
                    { type: 'Product photo (main)', max: '80–150 KB', format: 'WebP' },
                    { type: 'Blog inline image', max: '60–120 KB', format: 'WebP or JPEG' },
                    { type: 'Thumbnail', max: '20–50 KB', format: 'WebP' },
                    { type: 'Logo (raster)', max: '15–30 KB', format: 'PNG or SVG' },
                    { type: 'Icon', max: '< 5 KB', format: 'SVG or PNG' },
                  ].map(({ type, max, format }, i) => (
                    <tr key={type} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{type}</td>
                      <td className="p-3 border border-border text-green-600 font-medium">{max}</td>
                      <td className="p-3 border border-border text-text-muted">{format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <Link href="/compress-image" className="text-primary hover:underline">
                Compress images for free
              </Link>{' '}
              — reduces JPEG, PNG, and WebP to the target ranges above with a quality slider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Alt Text — What Google Actually Reads</h2>
            <p>
              Alt text (the <code className="bg-surface px-1 py-0.5 rounded text-sm">alt</code>{' '}
              attribute on{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">&lt;img&gt;</code> tags) is
              the primary signal Google uses to understand image content. It is also read by screen
              readers for visually impaired users.
            </p>
            <div className="mt-4 space-y-3">
              <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 rounded-xl p-4 text-sm">
                <p className="font-semibold text-red-600 mb-2">Avoid:</p>
                <ul className="space-y-1 text-text-muted">
                  <li>
                    <code className="bg-surface px-1 rounded">alt=&quot;&quot;</code> — empty (only
                    correct for purely decorative images)
                  </li>
                  <li>
                    <code className="bg-surface px-1 rounded">alt=&quot;image&quot;</code> or{' '}
                    <code className="bg-surface px-1 rounded">alt=&quot;photo&quot;</code> —
                    meaningless
                  </li>
                  <li>
                    <code className="bg-surface px-1 rounded">alt=&quot;IMG_4521.jpg&quot;</code> —
                    raw file names
                  </li>
                  <li>
                    Keyword stuffing:{' '}
                    <code className="bg-surface px-1 rounded">
                      alt=&quot;buy shoes cheap shoes discount shoes sale&quot;
                    </code>
                  </li>
                </ul>
              </div>
              <div className="border border-green-200 bg-green-50 dark:bg-green-950/20 rounded-xl p-4 text-sm">
                <p className="font-semibold text-green-600 mb-2">Do instead:</p>
                <ul className="space-y-1 text-text-muted">
                  <li>
                    Describe what the image actually shows:{' '}
                    <code className="bg-surface px-1 rounded">
                      alt=&quot;White leather sneakers on a wooden floor&quot;
                    </code>
                  </li>
                  <li>Include the primary keyword naturally if it fits the description</li>
                  <li>Keep it under 125 characters (screen reader limit)</li>
                  <li>Match the alt text to the surrounding page topic</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. File Names — How to Name Image Files for SEO
            </h2>
            <p>
              Google reads file names as a secondary signal about image content. A file named{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">DSC_4521.jpg</code> tells
              Google nothing.{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                white-leather-sneakers-side-view.jpg
              </code>{' '}
              is descriptive and keyword-relevant.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm space-y-3">
              <div>
                <p className="font-semibold mb-1">File naming rules:</p>
                <ul className="list-disc pl-5 space-y-1 text-text-muted">
                  <li>
                    Use hyphens between words, not underscores (
                    <code className="bg-surface px-1 rounded">red-dress.jpg</code> not{' '}
                    <code className="bg-surface px-1 rounded">red_dress.jpg</code>)
                  </li>
                  <li>All lowercase letters — avoid spaces and special characters</li>
                  <li>Be descriptive: 2–5 words that match the image content</li>
                  <li>Include the primary keyword for the page if it naturally fits</li>
                  <li>Do not repeat the same file name across multiple images on a site</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Image Dimensions and Responsive Images</h2>
            <p>
              Serving images at the correct display size is critical for performance. If your page
              displays a thumbnail at 300px wide but you serve a 2000px image, the browser downloads
              40× more data than needed.
            </p>
            <p className="mt-3">
              The <code className="bg-surface px-1 py-0.5 rounded text-sm">srcset</code> attribute
              lets you serve different image sizes based on the viewport and screen density:
            </p>
            <pre className="mt-3 bg-surface border border-border rounded-xl p-4 text-xs overflow-x-auto leading-relaxed">
              {`<img
  src="product-400.jpg"
  srcset="product-400.jpg 400w, product-800.jpg 800w, product-1200.jpg 1200w"
  sizes="(max-width: 640px) 100vw, 800px"
  alt="Product description"
  width="800"
  height="600"
/>`}
            </pre>
            <p className="mt-3">
              Always include explicit{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">width</code> and{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">height</code> attributes to
              prevent Cumulative Layout Shift (CLS) — a Core Web Vital Google uses directly in
              rankings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Next-Gen Formats: WebP and AVIF</h2>
            <p>
              Google PageSpeed Insights flags JPEG and PNG files with the warning &quot;Serve images
              in next-gen formats.&quot; This is a direct instruction to convert to WebP or AVIF.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              {[
                {
                  format: 'WebP',
                  saving: '25–35% smaller than JPEG',
                  support: 'All modern browsers (97%+)',
                  action: 'Convert JPEG → WebP for all web images',
                },
                {
                  format: 'AVIF',
                  saving: '40–60% smaller than JPEG',
                  support: '~90% browsers (Chrome, Firefox, newer Safari)',
                  action: 'Use with <picture> element and WebP fallback',
                },
              ].map(({ format, saving, support, action }) => (
                <div key={format} className="border border-border rounded-xl p-4">
                  <p className="font-semibold text-text-main">{format}</p>
                  <p className="text-text-muted mt-1">Size: {saving}</p>
                  <p className="text-text-muted">Support: {support}</p>
                  <p className="text-primary text-xs mt-2">→ {action}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Lazy Loading</h2>
            <p>
              Adding{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                loading=&quot;lazy&quot;
              </code>{' '}
              to below-the-fold images tells the browser not to load them until the user scrolls
              near them. This reduces initial page weight and improves LCP for the images that
              matter most.
            </p>
            <pre className="mt-3 bg-surface border border-border rounded-xl p-4 text-xs overflow-x-auto">
              {`<!-- Hero image — do NOT lazy load (it's the LCP element) -->
<img src="hero.webp" alt="..." width="1200" height="600" />

<!-- Below-fold images — do lazy load -->
<img src="feature.webp" alt="..." width="800" height="500" loading="lazy" />`}
            </pre>
            <p className="mt-3 text-sm text-text-muted">
              Never lazy-load the LCP image (usually the hero or above-fold image). Lazy loading the
              LCP image delays its rendering and hurts your LCP score.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Preloading the LCP Image</h2>
            <p>
              If your hero image is loaded via CSS background or a JavaScript framework, the browser
              discovers it late — hurting LCP. Add a preload hint to tell the browser to start
              fetching the LCP image immediately:
            </p>
            <pre className="mt-3 bg-surface border border-border rounded-xl p-4 text-xs overflow-x-auto">
              {`<link
  rel="preload"
  as="image"
  href="/hero.webp"
  type="image/webp"
/>`}
            </pre>
            <p className="mt-3">
              This is one of the highest-impact changes for LCP on image-heavy pages. Adding a
              preload for the LCP image typically improves LCP by 0.3–1.0 seconds on mobile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Structured Data for Images</h2>
            <p>
              Schema.org structured data helps Google understand images in context and surface them
              in rich results like Google Images and knowledge panels.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              {[
                {
                  type: 'ImageObject',
                  use: 'When the image is the primary subject of the page — photography portfolio, stock image site',
                },
                {
                  type: 'Product > image',
                  use: 'E-commerce product pages — required for Google Shopping rich results',
                },
                {
                  type: 'Recipe > image',
                  use: 'Recipe pages — triggers recipe rich results in search',
                },
                {
                  type: 'Article > image',
                  use: 'Blog and news articles — displays the article image in Google Discover and Top Stories',
                },
              ].map(({ type, use }) => (
                <div key={type} className="border border-border rounded-xl p-4">
                  <p className="font-mono font-semibold text-primary">{type}</p>
                  <p className="text-text-muted mt-1">{use}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Image Sitemap</h2>
            <p>
              Adding images to your sitemap helps Google discover images it might otherwise miss —
              especially images loaded by JavaScript or CSS. Use the{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">image:image</code> sitemap
              extension:
            </p>
            <pre className="mt-3 bg-surface border border-border rounded-xl p-4 text-xs overflow-x-auto leading-relaxed">
              {`<url>
  <loc>https://example.com/products/red-sneakers</loc>
  <image:image>
    <image:loc>https://example.com/images/red-sneakers.webp</image:loc>
    <image:title>Red leather sneakers</image:title>
    <image:caption>Red leather running sneakers, side view</image:caption>
  </image:image>
</url>`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — reduce file size for better LCP
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-primary hover:underline">
                  JPG to WebP
                </Link>{' '}
                — convert to next-gen format
              </li>
              <li>
                <Link href="/png-to-webp" className="text-primary hover:underline">
                  PNG to WebP
                </Link>{' '}
                — convert PNG to smaller WebP
              </li>
              <li>
                <Link href="/resize-image" className="text-primary hover:underline">
                  Resize image
                </Link>{' '}
                — serve images at correct display dimensions
              </li>
              <li>
                <Link href="/compress-images" className="text-primary hover:underline">
                  Batch compress
                </Link>{' '}
                — optimize multiple images at once
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'Does image optimization affect SEO?',
                  a: 'Yes, significantly. Image file size directly affects LCP — a Core Web Vital that Google uses as a ranking signal. Alt text affects how Google understands and indexes images. Correct file names and structured data affect visibility in Google Images and rich results.',
                },
                {
                  q: 'What is the best image format for SEO?',
                  a: 'WebP is the recommended format for web images in 2026. It produces 25–35% smaller files than JPEG at the same visual quality, which improves LCP. Google PageSpeed Insights explicitly recommends converting to WebP or AVIF.',
                },
                {
                  q: 'How does image alt text help SEO?',
                  a: 'Alt text is the primary text signal Google uses to understand image content. It influences ranking in Google Images and provides keyword context to the surrounding page content. Write natural descriptions of what the image shows — include the page keyword only when it fits naturally.',
                },
                {
                  q: 'What file size should images be for SEO?',
                  a: "Hero images should be under 150–250 KB. Blog images under 120 KB. Thumbnails under 50 KB. These targets support LCP scores under 2.5 seconds on mobile, which is Google's benchmark for a good page experience.",
                },
                {
                  q: 'Does lazy loading help SEO?',
                  a: 'Adding loading="lazy" to below-fold images reduces initial page load weight, which can improve LCP for the visible images. Never lazy-load the LCP image itself — that delays the most important element and directly hurts LCP scores.',
                },
                {
                  q: 'Should I include images in my XML sitemap?',
                  a: 'Yes, especially for e-commerce and photography sites where image discovery is important. The image sitemap extension (image:image) helps Google discover images it might otherwise miss, particularly images loaded via JavaScript.',
                },
                {
                  q: 'Does image file name affect Google ranking?',
                  a: 'File names are a weak but real signal. Google reads file names when indexing images. A descriptive file name like "red-running-shoes.webp" is preferable to "IMG_4521.jpg". Use hyphens, not underscores, between words.',
                },
                {
                  q: 'How do I fix the "serve images in next-gen formats" warning in PageSpeed?',
                  a: 'Convert your JPEG and PNG images to WebP. Use the free JPG to WebP or PNG to WebP tools at compressimg.pro. Then update your img tags to serve the .webp files. The warning will clear in the next PageSpeed test.',
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
