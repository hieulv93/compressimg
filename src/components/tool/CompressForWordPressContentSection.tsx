import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForWordPressContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for WordPress"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Image File Size Matters for WordPress Speed
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Images are the single biggest source of page weight on WordPress sites. A typical blog
          post with three uncompressed photos can weigh 8–15MB — taking 6–12 seconds to load on a
          mobile connection. Google measures this with LCP (Largest Contentful Paint), a Core Web
          Vitals metric used as a direct ranking signal. Pages with LCP under 2.5 seconds rank
          higher than slower pages with otherwise equal content.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Compressing images before uploading to WordPress is the most effective optimization you
          can make — more effective than caching plugins, CDN setup, or server upgrades for
          image-heavy sites. A 5MB JPEG compressed to 200KB at quality 80 is visually identical at
          screen resolution but loads 25× faster.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Recommended WordPress Image Sizes — Quick Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Image type</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Dimensions</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Target size</th>
                <th className="text-left py-2 font-semibold text-text-main">Quality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { type: 'Hero / header image', dim: '1920×1080px', size: '< 300KB', q: '78–82' },
                { type: 'Featured post image', dim: '1200×630px', size: '< 200KB', q: '78–82' },
                { type: 'In-post content image', dim: '1200×800px', size: '< 150KB', q: '78–82' },
                { type: 'WooCommerce product', dim: '1000×1000px', size: '< 300KB', q: '80–85' },
                { type: 'Blog thumbnail', dim: '400×300px', size: '< 50KB', q: '72–78' },
                { type: 'Background / pattern', dim: '1920×1080px', size: '< 150KB', q: '70–75' },
                { type: 'Logo (JPEG)', dim: '300×100px', size: '< 20KB', q: '82–85' },
                { type: 'Gallery image', dim: '1200×900px', size: '< 200KB', q: '78–82' },
              ].map(({ type, dim, size, q }) => (
                <tr key={type}>
                  <td className="py-2 pr-4 font-medium text-text-main">{type}</td>
                  <td className="py-2 pr-4">{dim}</td>
                  <td className="py-2 pr-4">{size}</td>
                  <td className="py-2">{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          These targets apply to JPEG. WebP at the same quality setting produces files 25–35%
          smaller — use WebP where your theme and hosting support it (WordPress 5.8+ natively
          accepts WebP uploads).
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How WordPress Handles Image Sizes Automatically
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Every image you upload to WordPress Media Library is processed into multiple sizes. The
          default sizes are:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Size name</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Dimensions</th>
                <th className="text-left py-2 font-semibold text-text-main">Used for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { name: 'thumbnail', dim: '150×150px (cropped)', use: 'Archive pages, widgets' },
                { name: 'medium', dim: 'max 300px wide', use: 'In-post small images' },
                { name: 'medium_large', dim: 'max 768px wide', use: 'Mobile-sized images' },
                { name: 'large', dim: 'max 1024px wide', use: 'Full-width post images' },
                { name: 'full', dim: 'Original dimensions', use: 'Lightbox, downloads' },
              ].map(({ name, dim, use }) => (
                <tr key={name}>
                  <td className="py-2 pr-4 font-mono text-xs text-text-main">{name}</td>
                  <td className="py-2 pr-4">{dim}</td>
                  <td className="py-2">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          All these sizes are generated from the original file you upload. A 5MB original produces
          five large derivative files. A pre-compressed 200KB original produces five small
          derivatives — faster Media Library, faster regeneration, faster CDN delivery.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Pre-Compress vs Plugin — Which Is Better?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Pre-compress before upload (this tool)',
              pros: [
                'WordPress generates all thumbnail sizes from the compressed source',
                'No plugin overhead on every page load',
                'No API calls, no subscription, no limits',
                'Full control over quality per image',
              ],
              verdict: 'Best for performance',
            },
            {
              title: 'Plugin after upload (Smush, ShortPixel, Imagify)',
              pros: [
                'Automatic — works on existing libraries',
                'Bulk-processes old uploads',
                'Some offer WebP conversion automatically',
                'API-based compression can be more aggressive',
              ],
              verdict: 'Best for large existing libraries',
            },
          ].map(({ title, pros, verdict }) => (
            <div key={title} className="rounded-xl border border-border bg-surface p-4 text-sm">
              <p className="font-semibold text-text-main text-xs mb-2">{title}</p>
              <ul className="space-y-1">
                {pros.map((p) => (
                  <li key={p} className="text-text-muted text-xs flex gap-1.5">
                    <span className="text-primary shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-primary mt-3">{verdict}</p>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For new WordPress sites: pre-compress every image before uploading. For existing sites
          with hundreds of uploaded images: use a plugin to bulk-process the library, then switch to
          pre-compression for new uploads.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          5 WordPress Image Mistakes That Slow Your Site
        </h2>
        <div className="space-y-2">
          {[
            {
              mistake: 'Uploading camera-original or export-original images (3–20MB)',
              fix: 'Resize to the display width first (1200px for posts, 1920px for heroes), then compress to quality 80. Never upload a 48MP phone photo directly.',
            },
            {
              mistake: 'Using PNG for photographs',
              fix: 'PNG is lossless — a photo of a landscape in PNG is 5–15× larger than JPEG at equivalent quality. Use JPEG or WebP for all photos. Reserve PNG for logos and graphics with transparency.',
            },
            {
              mistake: 'Relying on WordPress default quality (82) to compress your originals',
              fix: "WordPress quality 82 on a 5MB original still produces a 1–2MB output. Pre-compressing to quality 80 before upload produces a 200–400KB source, so WordPress's generated sizes are smaller still.",
            },
            {
              mistake: 'Lazy-loading the hero or featured image',
              fix: 'The above-the-fold hero image should load immediately — never add loading="lazy" to it. Lazy loading the LCP element is one of the most common causes of failing Core Web Vitals in WordPress.',
            },
            {
              mistake: 'Not setting width and height attributes on images',
              fix: 'WordPress adds width and height automatically for Media Library images. If you hard-code images in HTML or use a page builder, always set explicit dimensions. Missing dimensions cause CLS (Cumulative Layout Shift) which Google penalizes.',
            },
          ].map(({ mistake, fix }) => (
            <div key={mistake} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">❌ {mistake}</p>
              <p className="text-text-muted text-xs mt-0.5">✓ {fix}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">JPEG vs WebP vs PNG for WordPress</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              format: 'JPEG',
              best: 'Photos, hero images, blog content',
              pros: 'Universal support including old browsers. Smallest file for photos. Supported by all WordPress themes, plugins, and hosting.',
              cons: 'No transparency. Slight color banding at low quality settings.',
            },
            {
              format: 'WebP',
              best: 'All images on modern WordPress sites',
              pros: '25–35% smaller than JPEG at same quality. Full transparency. Native support in WordPress 5.8+. Supported by Chrome, Firefox, Safari, Edge.',
              cons: 'Some older plugins or CDNs may not handle WebP correctly. Not supported in IE11.',
            },
            {
              format: 'PNG',
              best: 'Logos, icons, UI elements with transparency',
              pros: 'Lossless quality. Full alpha channel transparency. Exact pixel reproduction.',
              cons: 'Never use for photos — a PNG photo is 5–15× larger than JPEG. Only use when transparency is required.',
            },
          ].map(({ format, best, pros, cons }) => (
            <div key={format} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-bold text-text-main text-sm">{format}</p>
              <p className="text-text-muted text-xs mt-1">
                <span className="font-semibold text-text-main">Best for:</span> {best}
              </p>
              <p className="text-text-muted text-xs mt-1">
                <span className="font-semibold text-text-main">Pros:</span> {pros}
              </p>
              <p className="text-text-muted text-xs mt-1">
                <span className="font-semibold text-text-main">Cons:</span> {cons}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs in your browser using JavaScript. Your images are never uploaded to
          any server — there is no upload step. Safe for unreleased blog content, WooCommerce
          products, and client work. Free with no limits, no watermarks, no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools for WordPress</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90%',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            {
              href: '/compress-image-for-website/',
              label: 'For Website',
              desc: 'Web optimization guide + tool',
            },
            {
              href: '/compress-image-for-shopify/',
              label: 'For Shopify',
              desc: 'Product photos under 500KB',
            },
            { href: '/jpg-to-webp/', label: 'JPG to WebP', desc: '25–35% smaller for WordPress' },
            { href: '/compress-images/', label: 'Batch Compress', desc: 'Multiple images at once' },
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
          Frequently Asked Questions About WordPress Image Compression
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is the recommended image size for WordPress?',
              a: 'Featured images: under 200KB at 1200×630px. Hero images: under 300KB at 1920px wide. In-post content: under 150KB at 1200px wide. WooCommerce products: under 300KB at 1000×1000px. Thumbnails: under 50KB at 400px wide. WordPress generates multiple derivative sizes from your upload — always compress the source before uploading.',
            },
            {
              q: 'Does WordPress compress images automatically?',
              a: 'WordPress applies JPEG compression at quality 82 by default (since WordPress 4.5). It also generates thumbnail, medium, large, and full-size versions. However, WordPress does not compress PNG or WebP files, and quality 82 still produces large files from high-resolution originals. Pre-compressing before upload — especially for large photos — gives better results.',
            },
            {
              q: 'Do I need a plugin to compress images for WordPress?',
              a: 'No. Compressing images before uploading is more effective than any plugin. When you pre-compress, WordPress generates all its thumbnail sizes from a small, efficient source file. Plugins like Smush or ShortPixel process images after upload — useful for existing libraries but less efficient for new uploads.',
            },
            {
              q: 'What quality setting should I use for WordPress images?',
              a: 'Quality 80 for most WordPress images — visually lossless at screen resolution (72–96 DPI), typically under 200KB for 1200px-wide JPEGs. Quality 72–75 for background images, page-builder section backgrounds, and thumbnails where viewing distance is larger. Avoid quality below 65 — artifacts become visible even at small sizes.',
            },
            {
              q: 'Should I use JPEG or WebP for WordPress?',
              a: 'WordPress 5.8+ natively supports WebP uploads. WebP produces files 25–35% smaller than JPEG at the same quality, which directly improves LCP scores. For modern WordPress sites, use WebP for new uploads. JPEG is the safer choice for maximum compatibility with older themes, plugins, and hosting setups.',
            },
            {
              q: 'How do I fix a failing LCP score in WordPress?',
              a: 'Find your LCP image in Google PageSpeed Insights (it highlights which element is the LCP). Compress that image to under 200KB. Remove lazy loading from above-the-fold images — add fetchpriority="high" to the hero image instead. Use WordPress 5.8+ for native WebP support. These changes typically improve LCP by 1–3 seconds.',
            },
            {
              q: 'How many image sizes does WordPress generate per upload?',
              a: 'WordPress generates up to 5 default sizes per upload: thumbnail (150×150px), medium (max 300px), medium_large (max 768px), large (max 1024px), and full (original). Themes and plugins can register additional sizes. A pre-compressed 200KB original produces 5 small, fast-loading derivative files — a 5MB original produces 5 large ones.',
            },
            {
              q: 'Are my WordPress images private when using this tool?',
              a: 'Yes. All compression runs entirely in your browser. Your images never leave your device — there is no upload step. Safe for unreleased blog posts, WooCommerce products not yet published, and client work.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
