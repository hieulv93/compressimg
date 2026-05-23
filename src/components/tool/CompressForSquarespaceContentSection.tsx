import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForSquarespaceContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Squarespace"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Squarespace Sites Need Compressed Images
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Squarespace recommends images under 500KB for blog posts and under 1MB for full-width
          banners — but even these limits can slow your site if the above-fold image is large.
          Squarespace uses Imgix CDN to serve images at the correct display size, but LCP (Largest
          Contentful Paint) — Google&apos;s primary speed metric — is determined by how fast the
          source file begins loading, not just how fast it displays. A 1.5MB hero image served via
          Imgix still triggers a slow LCP because the full source file must be fetched before the
          CDN processes a new size variant.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Squarespace templates are JavaScript-heavy — some premium templates load 600KB+ of JS.
          This makes images even more critical: images are the one factor fully within your control
          as a site owner. Compressing all images to under 500KB before uploading reduces your
          Squarespace site&apos;s LCP by 0.5–1.5 seconds on mobile, which can lift your PageSpeed
          score by 10–20 points and improve your Google search ranking.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Squarespace Image Size Guidelines</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Page element</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Recommended px</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Target size</th>
                <th className="text-left py-2 font-semibold text-text-main">Quality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">Full-width banner / hero</td>
                <td className="py-2 pr-4">2000–2500px wide</td>
                <td className="py-2 pr-4">&lt; 600KB</td>
                <td className="py-2">80–82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Blog post image</td>
                <td className="py-2 pr-4">1500px wide</td>
                <td className="py-2 pr-4">&lt; 500KB</td>
                <td className="py-2">82–85</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Product image</td>
                <td className="py-2 pr-4">1500×1500px</td>
                <td className="py-2 pr-4">&lt; 500KB</td>
                <td className="py-2">82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Gallery image</td>
                <td className="py-2 pr-4">1500px wide</td>
                <td className="py-2 pr-4">&lt; 400KB</td>
                <td className="py-2">82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Portfolio cover</td>
                <td className="py-2 pr-4">2000×1333px</td>
                <td className="py-2 pr-4">&lt; 600KB</td>
                <td className="py-2">80–82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Logo</td>
                <td className="py-2 pr-4">400px wide</td>
                <td className="py-2 pr-4">&lt; 50KB</td>
                <td className="py-2">PNG (transparent)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted">
          At quality 82, a 2000px wide JPEG compresses to 300–600KB for most landscape photos —
          within the Squarespace recommended limit for full-width banners.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Squarespace — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard. Accepts JPG, PNG,
                WebP, and HEIC up to 20MB. For very large photos (over 3000px wide), consider
                resizing to 2000px wide first using the{' '}
                <Link href="/resize-image/" className="text-primary hover:underline">
                  Resize Image
                </Link>{' '}
                tool before compressing.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 80–85</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 82 is the recommended starting point. A 2000px wide JPEG at quality 82
                compresses to 300–600KB for most photos. For hero banners and portfolio covers, aim
                for under 600KB. For blog images at 1500px wide, quality 82 typically gives
                200–450KB. Landscape photos with lots of detail may be larger — try quality 78.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download and upload to Squarespace
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Download the compressed file. In Squarespace, click the image block → Edit → Replace
                image → upload the compressed file. For blog posts, use the Insert Image button. For
                products, go to the product editor → Images → Add Image. Your LCP score will improve
                immediately on the next PageSpeed test.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Does Squarespace Resize Images Automatically?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes — Squarespace uses Imgix CDN to serve images at the correct display size for each
          device and screen resolution. When a visitor loads your page, Squarespace requests the
          image from Imgix at the exact pixel width needed — not the full 2000px source. This
          automatic resizing is a powerful feature.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          However, automatic resizing only handles dimensions, not compression quality. Imgix will
          serve a smaller copy of your image, but the compression ratio is based on the original
          file. If you upload a 10MB original at maximum JPEG quality, Imgix&apos;s resized versions
          will still be larger than if you had uploaded a well-compressed source. Additionally, the
          first time a new size variant is requested, Imgix must process the original — a 10MB
          source takes longer to process than a 500KB source, causing a slow first load for new
          visitors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {[
            {
              name: 'What Imgix handles for you',
              detail:
                'Serves images at the correct display width for each device. Delivers via CDN close to the visitor. Converts to WebP for modern browsers automatically.',
            },
            {
              name: 'What you must do before uploading',
              detail:
                'Compress to under 500KB for blog images, under 600KB for banners. This reduces processing time for new size variants and improves LCP for first-time visitors.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Squarespace Image Mistakes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Uploading RAW or uncompressed exports',
              detail:
                'Lightroom and Photoshop exports at maximum quality produce 10–30MB files. Export at 2000px wide, quality 80–85 from your editing software first.',
            },
            {
              name: 'Hero banner over 1MB',
              detail:
                'The hero banner is the LCP element — the single biggest factor in your PageSpeed score. Compress to under 600KB at 2000px wide. Under 400KB is even better.',
            },
            {
              name: 'Using PNG for photography',
              detail:
                'PNG portfolio photos are 5–15MB. The same photo as JPEG at quality 82 is 300–600KB. Use PNG only for logos, icons, and images requiring transparency.',
            },
            {
              name: 'Portfolio covers over 1MB',
              detail:
                'Portfolio index pages load multiple cover images simultaneously. Each cover over 500KB causes the portfolio grid to load slowly on mobile.',
            },
            {
              name: 'Not resizing before compressing',
              detail:
                'A 6000×4000px photo compressed to quality 82 is still 2–5MB. Resize to 2000px wide first, then compress — output will be 300–600KB.',
            },
            {
              name: 'Ignoring the blog thumbnail',
              detail:
                'Blog index pages show multiple thumbnails at once. Target under 300KB per thumbnail at 1500px wide for fast blog index loading.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs entirely in your browser. Your portfolio photos, product images, and
          blog content are never uploaded to any server. Free with no limits, no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Any format, any size',
            },
            {
              href: '/resize-image/',
              label: 'Resize Image',
              desc: 'Change pixel dimensions',
            },
            {
              href: '/compress-image-to-500kb/',
              label: 'Compress to 500KB',
              desc: 'Blog and web photos',
            },
            {
              href: '/compress-image-to-1mb/',
              label: 'Compress to 1MB',
              desc: 'Full-width banners',
            },
            {
              href: '/compress-image-for-shopify/',
              label: 'For Shopify',
              desc: 'Shopify product photos',
            },
            {
              href: '/compress-image-for-wix/',
              label: 'For Wix',
              desc: 'Wix image guide',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-border bg-surface p-3 hover:border-primary/40 transition-colors"
            >
              <p className="font-semibold text-text-main text-xs">{label}</p>
              <p className="text-text-muted text-xs mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          Frequently Asked Questions About Squarespace Image Compression
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is the recommended image size for Squarespace?',
              a: "Squarespace recommends images under 500KB for blog posts and under 1MB for full-width banners. For dimensions: full-width banners at 2000–2500px wide, blog images at 1500px wide, product images at 1500×1500px. These are source file targets — Squarespace's Imgix CDN handles display sizing.",
            },
            {
              q: 'Does Squarespace compress images automatically?',
              a: 'Squarespace uses Imgix CDN to resize and convert images to WebP for modern browsers. It handles display dimensions automatically. But it does not reduce compression quality of the source — upload images already compressed to under 500KB (blog/products) or under 600KB (banners) for best performance.',
            },
            {
              q: 'Why is my Squarespace site slow?',
              a: 'Common causes: (1) Large hero banner over 1MB — the LCP element, biggest factor in PageSpeed score. (2) Uncompressed portfolio images. (3) JavaScript-heavy theme — some premium templates load 500–800KB of JavaScript. Fix images first (fully in your control), then contact Squarespace support about theme JS if still slow.',
            },
            {
              q: 'How do I improve my Squarespace PageSpeed score?',
              a: 'Compress all above-fold images to under 400KB. Hero banner: under 600KB at 2000px wide. Blog thumbnails: under 300KB at 1500px wide. Run PageSpeed Insights before and after — image compression typically improves the mobile score by 10–20 points. Enable "Built-in" performance in Squarespace settings if available.',
            },
            {
              q: 'What image format should I use for Squarespace?',
              a: 'JPEG for photos (portfolios, products, blog images, banners) — best compression at quality 80–85. PNG for logos and transparent graphics. Squarespace and Imgix automatically convert to WebP for modern browsers, so upload JPEG and let Imgix handle the conversion for delivery.',
            },
            {
              q: 'Can I upload PNG photos to Squarespace?',
              a: 'Yes — Squarespace accepts PNG, JPEG, WebP, and GIF. But PNG portfolio photos are 5–15MB, while the same photo as JPEG at quality 82 is 300–600KB. Imgix converts to WebP for delivery, but the source file size still affects upload speed and first-load processing time.',
            },
            {
              q: 'My Squarespace portfolio loads slowly on mobile — what should I do?',
              a: 'Portfolio index pages load multiple cover images simultaneously. If each cover is 1–3MB, the mobile load time exceeds 5 seconds. Compress each portfolio cover to under 600KB at 2000×1333px. For galleries within portfolio pages, compress each image to under 400KB at 1500px wide.',
            },
            {
              q: 'Is this tool free and private?',
              a: 'Yes — completely free with no limits. All compression runs in your browser; images never leave your device. No sign-up required.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
