import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function HowToCompressImagesForWordPressPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="space-y-8">
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-11">May 11, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight">
            How to Compress Images for WordPress — Speed Up Your Site Without Losing Quality
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Uncompressed images are the single most common cause of slow WordPress sites. A single
            hero image uploaded straight from a smartphone camera can be 5–15MB — enough to push
            your LCP (Largest Contentful Paint) past Google&apos;s 2.5-second threshold and directly
            hurt your search rankings. This guide covers exactly how to compress images before
            uploading to WordPress, what sizes to target, how WebP works in WordPress, and the
            mistakes that silently slow down most sites.
          </p>
        </header>

        {/* Why it matters */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            Why Image Compression Matters for WordPress
          </h2>
          <p className="text-text-muted leading-relaxed">
            Images account for 50–80% of page weight on most WordPress sites. When a visitor loads a
            page, the browser must download every image before it can fully render the content.
            Large images mean longer download times — and longer download times mean higher bounce
            rates, lower engagement, and lower search rankings.
          </p>
          <p className="text-text-muted leading-relaxed">
            Google&apos;s Core Web Vitals score includes LCP (Largest Contentful Paint), which
            measures how long it takes for the largest visible element — usually a featured image or
            hero photo — to load. Sites with LCP under 2.5 seconds are rated &quot;Good.&quot; Sites
            above 4 seconds are rated &quot;Poor&quot; and face ranking penalties.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left p-3 font-semibold text-text-main">Image State</th>
                  <th className="text-left p-3 font-semibold text-text-main">Typical File Size</th>
                  <th className="text-left p-3 font-semibold text-text-main">Load Time (4G)</th>
                  <th className="text-left p-3 font-semibold text-text-main">LCP Rating</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Straight from camera (12MP)', '3–8 MB', '2–6 seconds', '❌ Poor'],
                  [
                    'WordPress resized, uncompressed original',
                    '500KB–2MB',
                    '0.5–2 seconds',
                    '⚠️ Needs improvement',
                  ],
                  ['Pre-compressed at Q80, 1200px', '80–200KB', '0.1–0.3 seconds', '✅ Good'],
                  ['Pre-compressed WebP at Q80, 1200px', '50–140KB', '0.05–0.2 seconds', '✅ Good'],
                ].map(([state, size, time, rating]) => (
                  <tr
                    key={state}
                    className="border-b border-border hover:bg-surface/50 transition-colors"
                  >
                    <td className="p-3 text-text-main text-xs font-medium">{state}</td>
                    <td className="p-3 text-text-muted text-xs">{size}</td>
                    <td className="p-3 text-text-muted text-xs">{time}</td>
                    <td className="p-3 text-text-muted text-xs">{rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How WordPress handles images */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            What Happens When You Upload an Image to WordPress
          </h2>
          <p className="text-text-muted leading-relaxed">
            When you upload an image through the WordPress Media Library, WordPress does two things
            automatically:
          </p>
          <ol className="space-y-3 text-text-muted">
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">1.</span>
              <span>
                <strong className="text-text-main">Saves the original file as-is.</strong> The
                full-resolution image you uploaded is stored in{' '}
                <code className="text-xs bg-surface px-1 py-0.5 rounded">wp-content/uploads/</code>{' '}
                unchanged. If you upload a 6MB iPhone photo, that 6MB file stays on your server
                permanently.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">2.</span>
              <span>
                <strong className="text-text-main">
                  Generates resized versions at JPEG quality 82.
                </strong>{' '}
                WordPress automatically creates thumbnail (150×150px), medium (300×300px), large
                (1024×1024px), and medium-large (768px wide) sizes from the original. These are
                saved at JPEG quality 82 — decent, but not optimal.
              </span>
            </li>
          </ol>
          <div className="rounded-xl border border-border bg-surface p-5 space-y-2">
            <p className="font-semibold text-text-main text-sm">The problem with this approach</p>
            <p className="text-sm text-text-muted leading-relaxed">
              WordPress generates intermediate sizes from your original file. If you upload a 6MB
              photo, WordPress&apos;s &quot;large&quot; size (1024px wide at quality 82) will be
              100–300KB — but the original 6MB file is still sitting on your server, consuming
              storage and sometimes served directly by themes that use{' '}
              <code className="text-xs bg-surface px-1 py-0.5 rounded">full</code> image size.
              Pre-compressing before upload means WordPress generates all its sizes from an
              already-optimized source.
            </p>
          </div>
        </section>

        {/* How to compress before uploading */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            How to Compress Images Before Uploading to WordPress
          </h2>
          <p className="text-text-muted leading-relaxed">
            The most reliable method is to compress images client-side before they ever reach your
            WordPress media library. This gives you control over the output quality and file size —
            and means you are not relying on WordPress or a plugin to do it correctly.
          </p>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-text-main">
                  Resize to the maximum display width first
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Check your WordPress theme&apos;s content width. Most themes have a content area
                  600–1200px wide. Use the{' '}
                  <Link href="/resize-image" className="text-primary underline">
                    Resize Image tool
                  </Link>{' '}
                  to bring your image to 1200px wide (or your theme&apos;s max content width) before
                  compressing. Uploading a 4000px image to a 1200px column wastes 3× the file size
                  for no visual benefit.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-text-main">Compress at quality 80</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Upload the resized image to{' '}
                  <Link href="/compress-image" className="text-primary underline">
                    CompressImg
                  </Link>{' '}
                  and set the quality slider to 80. This matches WordPress&apos;s internal quality
                  setting (82) but on an already correctly-sized image. At quality 80, a 1200px wide
                  photo typically compresses to 80–180KB — fast to load and visually sharp.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-text-main">
                  Upload the compressed image to WordPress
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Download the compressed file and upload it to your WordPress Media Library. You
                  will see the file size is already a fraction of the original — and all the
                  WordPress-generated intermediate sizes will be generated from this leaner source.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Recommended image sizes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            Recommended Image Dimensions and File Sizes for WordPress
          </h2>
          <p className="text-text-muted leading-relaxed">
            The right dimensions depend on where the image appears in your WordPress theme.
            Uploading a 3000px image to a sidebar widget or a 600px blog post column adds
            unnecessary file size with no quality benefit — WordPress will scale it down to display
            size anyway.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left p-3 font-semibold text-text-main">Image Use</th>
                  <th className="text-left p-3 font-semibold text-text-main">Recommended Width</th>
                  <th className="text-left p-3 font-semibold text-text-main">Quality</th>
                  <th className="text-left p-3 font-semibold text-text-main">Target File Size</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Full-width hero / banner', '1920px', 'Q75–80', '100–250KB'],
                  ['Featured image (post thumbnail)', '1200px', 'Q80', '80–180KB'],
                  ['Blog post body images', '800–1000px', 'Q80', '50–120KB'],
                  ['Product images (WooCommerce)', '800×800px', 'Q80', '60–150KB'],
                  ['Sidebar widgets / thumbnails', '400–600px', 'Q75', '20–60KB'],
                  ['Author avatar / profile', '300×300px', 'Q80', '15–40KB'],
                  ['Logo (PNG with transparency)', '300–600px', 'Q100 PNG', '10–50KB'],
                ].map(([use, width, quality, size]) => (
                  <tr
                    key={use}
                    className="border-b border-border hover:bg-surface/50 transition-colors"
                  >
                    <td className="p-3 text-text-main text-xs font-medium">{use}</td>
                    <td className="p-3 text-text-muted text-xs">{width}</td>
                    <td className="p-3 text-text-muted text-xs">{quality}</td>
                    <td className="p-3 text-text-muted text-xs">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            <strong className="text-text-main">How to find your theme&apos;s content width:</strong>{' '}
            In Chrome, right-click on a content image in your WordPress posts and select{' '}
            &quot;Inspect.&quot; The element&apos;s computed width shows the actual display size.
            Upload images at that width — not wider.
          </p>
        </section>

        {/* WebP in WordPress */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            WebP in WordPress: 25–35% Smaller Files
          </h2>
          <p className="text-text-muted leading-relaxed">
            WordPress has supported WebP image uploads natively since version 5.8 (July 2021). If
            you upload a WebP image, WordPress generates all its intermediate sizes (thumbnail,
            medium, large) in WebP format. Modern browsers — Chrome, Firefox, Safari 14+, Edge — all
            support WebP, covering over 95% of web users as of 2026.
          </p>
          <p className="text-text-muted leading-relaxed">
            The practical benefit: a 1200px wide photo that is 150KB as JPEG is typically 90–110KB
            as WebP at the same visual quality. Multiply that across 20–30 images on a page and the
            difference is measurable in LCP scores.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-border p-4 space-y-2">
              <h3 className="font-semibold text-text-main text-sm">
                Convert JPG to WebP before uploading
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Use the{' '}
                <Link href="/jpg-to-webp" className="text-primary underline">
                  JPG to WebP converter
                </Link>{' '}
                to convert your compressed JPG to WebP format. Then upload the WebP file to
                WordPress. All intermediate sizes WordPress generates will also be WebP.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4 space-y-2">
              <h3 className="font-semibold text-text-main text-sm">Check plugin compatibility</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Most modern WordPress themes and page builders (Elementor, Divi, Gutenberg blocks)
                display WebP correctly. Older image gallery plugins may show broken images. Test
                with one WebP image before switching fully.
              </p>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            Common WordPress Image Mistakes — And How to Fix Them
          </h2>
          <div className="space-y-3">
            {[
              {
                mistake: 'Uploading camera photos directly without resizing',
                fix: 'A 12MP phone photo at 4032×3024px is unnecessary for any WordPress content area. Resize to 1200px wide first. This alone reduces a 5MB photo to 400–800KB before any quality compression.',
              },
              {
                mistake: 'Using PNG for photographs',
                fix: 'PNG uses lossless compression, which makes it ideal for logos and graphics but terrible for photos. A photograph saved as PNG can be 3–5× larger than the same photo as JPG at quality 80. Use the Convert Image tool to switch format before uploading.',
              },
              {
                mistake: 'Relying on WordPress plugins to compress after upload',
                fix: 'Plugins like Smush or ShortPixel compress images after they reach your server — but the original uncompressed file is already stored in uploads/. Pre-compressing before upload gives you control over the source quality and avoids storing unnecessarily large originals.',
              },
              {
                mistake: 'Using the same image for desktop and mobile',
                fix: 'WordPress generates responsive srcset automatically, but only if you upload an image larger than the display sizes. If you upload a 1200px image, WordPress generates smaller sizes for mobile automatically. If you upload a 600px image, mobile users get no smaller option.',
              },
              {
                mistake: 'Not setting alt text on compressed images',
                fix: 'Alt text is an SEO signal — it tells Google what the image contains. Compressing images improves performance, but SEO also requires descriptive alt text. Always fill in the Alt Text field in the WordPress Media Library after uploading.',
              },
            ].map(({ mistake, fix }) => (
              <div key={mistake} className="rounded-xl border border-border p-4 space-y-2">
                <p className="text-sm font-semibold text-text-main">❌ {mistake}</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  <strong className="text-text-main">Fix:</strong> {fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical workflow */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            The 3-Minute WordPress Image Optimization Workflow
          </h2>
          <p className="text-text-muted leading-relaxed">
            Here is the exact process to follow every time you prepare an image for WordPress:
          </p>
          <div className="space-y-2">
            {[
              {
                step: '1. Identify the display context',
                desc: 'Is this a hero image (full width), a featured post image, or a body image? Each has a different target width. When in doubt, 1200px covers 90% of WordPress themes.',
              },
              {
                step: '2. Resize to max display width',
                desc: 'Use the Resize Image tool to set the width. Lock aspect ratio so the height scales automatically. Download the resized file.',
              },
              {
                step: '3. Compress at quality 80',
                desc: 'Upload the resized image to CompressImg. Set quality to 80. Check the output file size — it should be under 200KB for a 1200px image. If it is over 200KB, the image has very high detail (fine textures, lots of small objects) — try quality 70.',
              },
              {
                step: '4. (Optional) Convert to WebP',
                desc: 'Download the compressed JPG, then upload it to the JPG to WebP converter. Download the WebP version. WebP will be 20–30% smaller than the already-compressed JPG.',
              },
              {
                step: '5. Upload to WordPress Media Library',
                desc: 'Upload the compressed (and optionally WebP-converted) image. WordPress generates all intermediate sizes from this optimized source. Fill in the Alt Text field before inserting into content.',
              },
            ].map(({ step, desc }) => (
              <div key={step} className="border border-border rounded-xl p-4 space-y-1">
                <p className="text-sm font-semibold text-text-main">{step}</p>
                <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Format comparison */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            JPG vs PNG vs WebP for WordPress — Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left p-3 font-semibold text-text-main">Format</th>
                  <th className="text-left p-3 font-semibold text-text-main">Best For</th>
                  <th className="text-left p-3 font-semibold text-text-main">File Size</th>
                  <th className="text-left p-3 font-semibold text-text-main">Transparency</th>
                  <th className="text-left p-3 font-semibold text-text-main">Use in WordPress</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['JPG', 'Photos, hero images', 'Medium', 'No', 'Default for photos'],
                  [
                    'PNG',
                    'Logos, icons, screenshots',
                    'Large (lossless)',
                    'Yes',
                    'Logos and graphics only',
                  ],
                  [
                    'WebP',
                    'Photos + graphics',
                    'Small (25–35% < JPG)',
                    'Yes',
                    'Best choice (WP 5.8+)',
                  ],
                ].map(([fmt, best, size, transparency, wp]) => (
                  <tr
                    key={fmt}
                    className="border-b border-border hover:bg-surface/50 transition-colors"
                  >
                    <td className="p-3 font-semibold text-text-main text-xs">{fmt}</td>
                    <td className="p-3 text-text-muted text-xs">{best}</td>
                    <td className="p-3 text-text-muted text-xs">{size}</td>
                    <td className="p-3 text-text-muted text-xs">{transparency}</td>
                    <td className="p-3 text-text-muted text-xs">{wp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tools section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">
            Free Tools for WordPress Image Optimization
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: '/compress-image',
                title: 'Compress Image',
                desc: 'Quality 80 compression for JPG, PNG, WebP. Shows exact output size before download.',
              },
              {
                href: '/resize-image',
                title: 'Resize Image',
                desc: 'Set exact pixel dimensions. Lock aspect ratio. Ideal for bringing large photos to theme width.',
              },
              {
                href: '/jpg-to-webp',
                title: 'JPG to WebP',
                desc: 'Convert JPEG photos to WebP format for 25–35% smaller files in WordPress.',
              },
              {
                href: '/convert-image',
                title: 'Convert Image',
                desc: 'Convert PNG photos to JPG before compressing — PNGs of photos are typically 3–5× larger.',
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                  {title}
                </p>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">Frequently Asked Questions</h2>
          <dl className="space-y-3">
            {[
              {
                q: 'What is the best image size for WordPress?',
                a: "For most WordPress themes, a featured image width of 1200px covers the content area without excess. Full-width hero images can go to 1920px, but compress at quality 75–80 to keep file size under 200KB. Body content images should be 800–1000px wide. Never upload images wider than your theme's content column — the extra pixels are discarded during display but still downloaded by the browser.",
              },
              {
                q: 'What quality should I use to compress images for WordPress?',
                a: 'Quality 80 is the standard recommendation. WordPress itself saves resized images at quality 82. At quality 80, a 1200px wide photo is typically 80–200KB — fast enough to not impact LCP and sharp enough for most content. For large hero images, quality 75 is acceptable. For thumbnails shown at small sizes, quality 70 is fine.',
              },
              {
                q: 'Does WordPress compress uploaded images automatically?',
                a: 'Yes, but only for the resized intermediate sizes, not the original. WordPress generates thumbnail, medium, large, and medium-large sizes from your original at JPEG quality 82. The original file is saved as-is. This is why pre-compressing before upload matters — WordPress uses your original as the source for all generated sizes. A lean original produces leaner generated sizes.',
              },
              {
                q: 'Should I use WebP for WordPress images?',
                a: 'Yes, if your theme and plugins support it. WordPress has natively supported WebP uploads since version 5.8. WebP files are 25–35% smaller than JPEG at the same visual quality, and all modern browsers (Chrome, Firefox, Safari 14+, Edge) support WebP. Check one image first to confirm your theme renders WebP correctly before switching all images.',
              },
              {
                q: 'What is the maximum file size I should upload to WordPress?',
                a: 'The server-side limit depends on your host (typically 2–64MB), but the practical performance limit is much lower. Featured images should be under 200KB, body images under 120KB. Images over 500KB noticeably slow page loads on mobile connections. Aim for total page image weight under 1MB across all images on a single page.',
              },
              {
                q: 'How do I compress a PNG for WordPress?',
                a: 'If the PNG is a photograph (no transparency needed), convert it to JPG first — photos saved as PNG are typically 3–5× larger than the same image as JPG. Use the Convert Image tool, then compress the JPG at quality 80. If the PNG is a logo or graphic with transparency, keep it as PNG but resize to the maximum display size before uploading.',
              },
              {
                q: 'Does image file size affect WordPress SEO?',
                a: 'Yes, directly. Google uses page speed as a ranking factor, and images are typically the largest contributors to page weight. Large uncompressed images hurt LCP (Largest Contentful Paint), which is a Core Web Vital. Pages with LCP under 2.5 seconds rank better than slower pages. Compressing images to under 200KB per image is one of the highest-impact SEO improvements for most WordPress sites.',
              },
              {
                q: 'Should I compress images before or after uploading to WordPress?',
                a: 'Before. Pre-compressing gives you full control over output quality and file size. When you upload a large uncompressed image, WordPress saves the original as-is and generates intermediate sizes from it. If the original is 5MB, all WordPress-generated sizes are derived from that 5MB source. Pre-compress to quality 80 at the correct width, then upload. WordPress generates all its sizes from your already-optimized original.',
              },
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </dl>
        </section>

        <div className="pt-6 border-t border-border">
          <Link href="/blog" className="text-primary text-sm hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  )
}
