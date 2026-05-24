import Link from 'next/link'

export default function CompressImagesForShopify() {
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
        <span className="text-text-main">Compress Images for Shopify</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-24">May 24, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Compress Images for Shopify — Speed Up Your Store (2026)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Uncompressed product images are the most common cause of slow Shopify stores. Shopify
            does apply some automatic optimization, but it is not enough to offset the impact of
            oversized source images. This guide covers the right image sizes, quality settings, and
            the pre-upload workflow that keeps your store fast.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Shopify Image Targets at a Glance</h2>
            <div className="space-y-2 text-sm">
              {[
                {
                  type: 'Product images',
                  size: '2048 × 2048 px max',
                  target: '< 500 KB',
                  quality: '82',
                },
                {
                  type: 'Collection banner',
                  size: '1800 × 1000 px',
                  target: '< 300 KB',
                  quality: '80',
                },
                {
                  type: 'Hero / homepage banner',
                  size: '1920 × 800 px',
                  target: '< 350 KB',
                  quality: '80',
                },
                {
                  type: 'Blog post images',
                  size: '1200 × 628 px',
                  target: '< 200 KB',
                  quality: '80',
                },
                { type: 'Logo', size: '200–400 px wide', target: '< 50 KB', quality: 'Lossless' },
              ].map(({ type, size, target, quality }, i) => (
                <div
                  key={type}
                  className={`flex items-center gap-3 p-3 rounded-lg ${i % 2 === 0 ? '' : 'bg-surface'}`}
                >
                  <span className="flex-1 font-medium text-text-main">{type}</span>
                  <span className="text-text-muted">{size}</span>
                  <span className="text-green-600 font-medium w-24 text-right">{target}</span>
                  <span className="text-text-muted w-16 text-right">Q{quality}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Image Size Matters for Shopify SEO</h2>
            <p>
              Shopify stores run on shared infrastructure. While Shopify serves images through a CDN
              and automatically converts uploads to WebP for supported browsers, it cannot fix the
              problems caused by oversized source images:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">LCP (Largest Contentful Paint)</strong> —
                Google&apos;s Core Web Vitals measure how long until the largest visible element
                loads. For product pages, this is almost always the product image. A 3 MB source
                image, even CDN-served, will fail LCP on mobile connections.
              </li>
              <li>
                <strong className="text-text-main">Mobile conversion rates</strong> — Research
                consistently shows that each 100ms of additional load time reduces mobile conversion
                rates by 1–3%. A product gallery with 10 × 2 MB images adds multiple seconds on
                mobile.
              </li>
              <li>
                <strong className="text-text-main">Google Shopping visibility</strong> — Page
                experience signals (which include Core Web Vitals) affect visibility in Google
                Shopping. Stores with fast-loading product pages get better placement.
              </li>
              <li>
                <strong className="text-text-main">Shopify speed score</strong> — Shopify displays a
                store speed score in the admin dashboard. Image optimization is the fastest way to
                improve this score.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Step-by-Step: Compress Before Uploading to Shopify
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Prepare the image at the right dimensions',
                  desc: 'Resize your product photo to 2048 × 2048 pixels maximum. Shopify will not display larger — it only generates thumbnails from the source. Any pixels above 2048 are wasted file size.',
                },
                {
                  step: '2',
                  title: 'Compress with quality 82',
                  desc: 'Go to compressimg.pro, upload the resized image, and set quality to 82. This is the recommended setting for product photos — high enough to show product detail clearly, low enough to stay under 500 KB for most images.',
                },
                {
                  step: '3',
                  title: 'Verify file size before uploading',
                  desc: 'The result card shows the compressed file size. Target under 500 KB for product images, under 300 KB for collection banners. If still too large, reduce quality to 78.',
                },
                {
                  step: '4',
                  title: 'Name the file descriptively before uploading',
                  desc: 'Shopify uses the filename as part of image SEO. Rename from "IMG_4521.jpg" to "blue-denim-jacket-front.jpg" before uploading. Use hyphens, not spaces or underscores.',
                },
                {
                  step: '5',
                  title: 'Add alt text in Shopify after upload',
                  desc: 'In the Shopify product editor, click on each image and add alt text. Describe what the image shows — include the product name and a descriptive detail. Shopify uses this for Google Images and accessibility.',
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 border border-border rounded-xl p-5">
                  <span className="text-2xl font-bold text-primary flex-shrink-0 w-8">{step}</span>
                  <div>
                    <p className="font-semibold text-text-main mb-1">{title}</p>
                    <p className="text-text-muted text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Does Shopify Automatically Optimize Images?</h2>
            <p>Shopify applies several automatic optimizations to uploaded images:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>Converts to WebP for browsers that support it (all modern browsers)</li>
              <li>Generates multiple size variants for responsive display</li>
              <li>Serves through a global CDN (Fastly)</li>
              <li>Applies HTTP/2 and caching headers</li>
            </ul>
            <p className="mt-3">
              What Shopify does <em>not</em> do:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>
                Reduce quality below what was uploaded — if you upload an 8 MB photo, Shopify stores
                the full 8 MB and generates variants from it
              </li>
              <li>Strip unnecessary EXIF metadata from images</li>
              <li>Automatically rename files for SEO</li>
              <li>Add alt text — that is always manual</li>
            </ul>
            <p className="mt-3">
              The practical conclusion: compress before uploading. Shopify&apos;s CDN will then
              serve already-optimized images even faster.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Product Image Best Practices</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                {
                  title: 'Square format',
                  desc: "1:1 ratio (2048×2048) is Shopify's recommended format. Consistent ratios prevent layout shifts in collection grids.",
                },
                {
                  title: 'White or light background',
                  desc: 'Clean backgrounds compress better (less color information) and convert better for product marketplaces like Google Shopping.',
                },
                {
                  title: 'Multiple angles',
                  desc: 'Show front, back, detail, and in-use views. Multiple images reduce return rates. Keep each image under 500 KB.',
                },
                {
                  title: 'No watermarks',
                  desc: "Watermarks create hard-to-compress artifacts and reduce perceived product quality. Use Shopify's built-in fraud protection instead.",
                },
                {
                  title: 'High contrast, sharp edges',
                  desc: 'JPEG compression works best on smooth gradients. Product photos with sharp object edges compress better as WebP.',
                },
                {
                  title: 'Lifestyle photos for collections',
                  desc: 'Collection banners can use lifestyle photos at 1800×1000 px. Compress to under 300 KB — these load on every category page.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="border border-border rounded-xl p-4">
                  <p className="font-semibold text-text-main mb-1">{title}</p>
                  <p className="text-text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Batch Compressing Existing Shopify Images</h2>
            <p>
              If your store already has unoptimized images, the most efficient approach is to export
              them from Shopify, compress in bulk, and re-upload.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <ol className="space-y-2 text-text-muted">
                <li>
                  1. In Shopify admin, go to <strong className="text-text-main">Products</strong> →
                  select products → <strong className="text-text-main">Export</strong> to get a CSV
                  with image URLs
                </li>
                <li>2. Download the images from the URLs in the CSV</li>
                <li>
                  3. Use the{' '}
                  <Link href="/compress-images" className="text-primary hover:underline">
                    batch compress tool
                  </Link>{' '}
                  to compress up to 5 at a time (download as ZIP)
                </li>
                <li>
                  4. Re-upload the compressed images to each product — Shopify will replace the old
                  ones
                </li>
                <li>5. Re-add alt text (it does not carry over on re-upload)</li>
              </ol>
            </div>
            <p className="mt-3 text-sm text-text-muted">
              For stores with hundreds of products, Shopify app store has bulk image optimization
              apps. For under 50 products, manual compression is faster.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — compress product photos before Shopify upload
              </li>
              <li>
                <Link href="/compress-images" className="text-primary hover:underline">
                  Batch compress images
                </Link>{' '}
                — compress multiple product photos at once
              </li>
              <li>
                <Link href="/resize-image" className="text-primary hover:underline">
                  Resize image
                </Link>{' '}
                — resize to 2048 × 2048 px for Shopify
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-primary hover:underline">
                  JPG to WebP
                </Link>{' '}
                — convert to WebP for smaller files
              </li>
              <li>
                <Link href="/compress-image-for-website" className="text-primary hover:underline">
                  Compress images for website
                </Link>{' '}
                — general web image optimization
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What is the best image size for Shopify product photos?',
                  a: "2048 × 2048 pixels at a 1:1 aspect ratio is Shopify's recommended size for product images. This is the maximum resolution Shopify uses for zoom functionality. File size should be under 500 KB — compress at quality 82 before uploading.",
                },
                {
                  q: 'Does Shopify convert images to WebP automatically?',
                  a: 'Yes. When a browser supports WebP (all modern browsers), Shopify serves a WebP version of your uploaded image. However, the WebP is generated from your source — if the source is 5 MB, the WebP will still be large. Compress the source first.',
                },
                {
                  q: 'What image format should I upload to Shopify?',
                  a: 'Upload JPEG for product photos and PNG for images that require transparency (logos, overlays). Shopify converts to WebP for delivery automatically. You do not need to upload WebP files directly, though Shopify accepts them.',
                },
                {
                  q: 'How do I fix a slow Shopify store caused by images?',
                  a: 'Check your PageSpeed score at pagespeed.web.dev. If images are the cause, compress them at compressimg.pro (quality 82, under 500 KB per product image), re-upload to Shopify, then re-run PageSpeed. Typically improves LCP by 1–3 seconds on mobile.',
                },
                {
                  q: 'What is the maximum file size for Shopify images?',
                  a: 'Shopify accepts images up to 20 MB per file. However, you should never upload near this limit — product images should be under 500 KB and collection banners under 300 KB for optimal performance.',
                },
                {
                  q: 'Does image compression affect product photo quality?',
                  a: 'At quality 82 (recommended), compressed product photos are visually identical to uncompressed originals at normal viewing. The compression removes data the eye cannot perceive. At quality below 70, artifacts may appear on high-detail product areas.',
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
