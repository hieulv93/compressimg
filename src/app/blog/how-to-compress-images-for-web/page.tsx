import Link from 'next/link'

export default function HowToCompressImagesForWeb() {
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
        <span className="text-text-main">How to Compress Images for Web</span>
      </nav>

      <article className="prose-custom">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-04-28">April 28, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Compress Images for Web: The Complete Guide
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Images account for over 60% of the average webpage&apos;s total file size. Compressing
            them correctly is the single highest-impact action you can take to speed up a website,
            improve SEO rankings, and reduce bounce rates — without any visible quality loss for
            users.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">What Is Image Compression?</h2>
            <p>
              Image compression reduces the file size of an image by removing data that either
              cannot be seen by the human eye or is redundant. There are two types:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">Lossy compression</strong> — permanently removes
                some image data. JPEG uses lossy compression. A quality setting of 80 typically
                reduces file size by 60–80% with no perceptible quality change on screen.
              </li>
              <li>
                <strong className="text-text-main">Lossless compression</strong> — removes only
                redundant metadata and patterns, preserving every pixel. PNG and WebP (lossless
                mode) use this. File size reduction is smaller — typically 10–30%.
              </li>
            </ul>
            <p className="mt-3">
              For web use, lossy compression (JPEG or WebP) is almost always the right choice for
              photographs. Lossless (PNG) is better for logos, icons, and screenshots where sharp
              edges matter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Choosing the Right Image Format</h2>
            <p>
              The format you choose has a bigger impact on file size than any compression setting.
            </p>

            <div className="mt-4 space-y-4">
              <div className="border border-border rounded-xl p-4">
                <h3 className="font-bold text-lg mb-1">JPEG — Best for Photographs</h3>
                <p className="text-text-muted text-sm">
                  Use JPEG for photos, product images, and any image with gradients or complex color
                  transitions. At quality 80, a typical 3MB phone photo becomes 150–300KB with no
                  visible loss. JPEG does not support transparency.
                </p>
              </div>
              <div className="border border-border rounded-xl p-4">
                <h3 className="font-bold text-lg mb-1">
                  PNG — Best for Graphics &amp; Transparency
                </h3>
                <p className="text-text-muted text-sm">
                  Use PNG for logos, icons, screenshots, and images with text or flat colors. PNG
                  supports transparency (alpha channel). File sizes are larger than JPEG for photos,
                  but PNG never degrades quality on re-save.
                </p>
              </div>
              <div className="border border-border rounded-xl p-4">
                <h3 className="font-bold text-lg mb-1">
                  WebP — Best for Everything (Modern Browsers)
                </h3>
                <p className="text-text-muted text-sm">
                  WebP produces 25–35% smaller files than JPEG at equivalent visual quality, and
                  supports transparency like PNG. Supported by all modern browsers (Chrome, Firefox,
                  Safari 14+, Edge). Use WebP as your default web format in 2026.
                </p>
              </div>
              <div className="border border-border rounded-xl p-4">
                <h3 className="font-bold text-lg mb-1">HEIC — iPhone Native, Needs Conversion</h3>
                <p className="text-text-muted text-sm">
                  Modern iPhones shoot in HEIC by default. HEIC files are very small (1–2MB) but not
                  widely supported on websites or social media. Convert HEIC to JPEG before
                  uploading anywhere online.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Right Quality Settings</h2>
            <p>
              Quality settings vary by format, but here are the industry-standard starting points:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Use Case</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      JPEG Quality
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      WebP Quality
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Expected Size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border">Website hero image</td>
                    <td className="p-3 border border-border">80–85</td>
                    <td className="p-3 border border-border">80</td>
                    <td className="p-3 border border-border">100–300KB</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border">Product / e-commerce</td>
                    <td className="p-3 border border-border">80</td>
                    <td className="p-3 border border-border">75</td>
                    <td className="p-3 border border-border">80–200KB</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Blog / article image</td>
                    <td className="p-3 border border-border">75</td>
                    <td className="p-3 border border-border">70</td>
                    <td className="p-3 border border-border">50–150KB</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border">Thumbnail / preview</td>
                    <td className="p-3 border border-border">70</td>
                    <td className="p-3 border border-border">65</td>
                    <td className="p-3 border border-border">20–80KB</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Email attachment</td>
                    <td className="p-3 border border-border">70–75</td>
                    <td className="p-3 border border-border">70</td>
                    <td className="p-3 border border-border">under 500KB</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-text-muted text-sm">
              The human eye cannot detect quality differences between 75 and 100 on a normal screen.
              Going below 60 starts to produce visible artifacts on photos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Step-by-Step: Compress Images for Web</h2>
            <ol className="list-decimal pl-6 space-y-4 text-text-muted">
              <li>
                <strong className="text-text-main">Check the original size.</strong> Most phone
                cameras produce 3–8MB JPEG files. Even a &quot;small&quot; PNG screenshot can be
                1–2MB. Identify files above 500KB as compression targets.
              </li>
              <li>
                <strong className="text-text-main">Choose the right format.</strong> Photo → JPEG or
                WebP. Logo/icon → PNG or SVG. Screenshot → PNG or WebP.
              </li>
              <li>
                <strong className="text-text-main">Resize dimensions first.</strong> A 4000×3000px
                image on a blog where the content column is 800px wide is 25× larger than needed.
                Resize to 1600px wide (2× for retina) before compressing. This alone cuts file size
                by 85%.
              </li>
              <li>
                <strong className="text-text-main">Apply compression at quality 80.</strong> Start
                at 80 and check the result visually. Reduce to 75 if the file is still above your
                target size.
              </li>
              <li>
                <strong className="text-text-main">Check Core Web Vitals.</strong> Use Google
                PageSpeed Insights after adding images to your page. Images should not cause LCP
                above 2.5 seconds on mobile.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Image Compression Matters for SEO</h2>
            <p>
              Google uses page speed as a ranking factor. Slow pages rank lower in search results,
              particularly for mobile searches which make up over 60% of global web traffic.
            </p>
            <p className="mt-3">
              The three Core Web Vitals most affected by uncompressed images are:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">LCP (Largest Contentful Paint)</strong> — the
                time until the largest image or text block loads. Google wants this under 2.5
                seconds. A 3MB hero image can push LCP to 8–10 seconds on mobile.
              </li>
              <li>
                <strong className="text-text-main">CLS (Cumulative Layout Shift)</strong> — images
                without defined width/height attributes cause layout shifts as they load, hurting
                CLS score.
              </li>
              <li>
                <strong className="text-text-main">INP (Interaction to Next Paint)</strong> — large
                images can indirectly hurt INP by blocking the main thread during decode.
              </li>
            </ul>
            <p className="mt-3">
              A study by Portent found that a 1-second improvement in page load time increases
              conversion rate by 5–8% for e-commerce sites. For a blog, faster pages mean lower
              bounce rates and longer session duration — both signals that improve ranking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Platform-Specific Compression Targets</h2>
            <p>
              Different platforms have different requirements. Here are the targets used by
              professionals:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Platform</th>
                    <th className="text-left p-3 border border-border font-semibold">Max Size</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Recommended Dimensions
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">Format</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border">Instagram</td>
                    <td className="p-3 border border-border">8MB (compressed by IG)</td>
                    <td className="p-3 border border-border">1080×1080px</td>
                    <td className="p-3 border border-border">JPEG</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border">WhatsApp</td>
                    <td className="p-3 border border-border">16MB</td>
                    <td className="p-3 border border-border">1600px wide</td>
                    <td className="p-3 border border-border">JPEG</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Email attachment</td>
                    <td className="p-3 border border-border">under 1MB total</td>
                    <td className="p-3 border border-border">1200px wide</td>
                    <td className="p-3 border border-border">JPEG</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border">Government / visa forms</td>
                    <td className="p-3 border border-border">50–200KB</td>
                    <td className="p-3 border border-border">600–1200px</td>
                    <td className="p-3 border border-border">JPEG</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Website hero image</td>
                    <td className="p-3 border border-border">under 300KB</td>
                    <td className="p-3 border border-border">1920px wide</td>
                    <td className="p-3 border border-border">WebP or JPEG</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border">LinkedIn</td>
                    <td className="p-3 border border-border">8MB</td>
                    <td className="p-3 border border-border">1200×627px</td>
                    <td className="p-3 border border-border">JPEG</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">Re-compressing already-compressed files.</strong>{' '}
                Every time a JPEG is saved at a lower quality, quality loss compounds. Always start
                from the original high-quality source file.
              </li>
              <li>
                <strong className="text-text-main">Using PNG for photographs.</strong> A PNG photo
                is 5–10× larger than the same photo as a JPEG at quality 80, with no visible
                difference on screen.
              </li>
              <li>
                <strong className="text-text-main">Forgetting to resize dimensions.</strong>{' '}
                Compressing a 4000px-wide image to quality 80 still produces a 1–2MB file. Resize to
                your display width first.
              </li>
              <li>
                <strong className="text-text-main">Setting quality below 60.</strong> At quality
                50–60, JPEG compression artifacts become clearly visible — blocky edges, color
                banding, and smearing in shadow areas.
              </li>
              <li>
                <strong className="text-text-main">Not using alt text.</strong> Alt text is required
                for accessibility and helps Google understand image content, contributing to image
                search rankings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Free Tools for Image Compression</h2>
            <p>
              The fastest way to compress images without installing software is to use a
              browser-based tool. Everything runs locally — your images never leave your device.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress Image Online
                </Link>{' '}
                — reduce JPG, PNG, WebP size with a quality slider. Includes before/after
                comparison.
              </li>
              <li>
                <Link href="/resize-image" className="text-primary hover:underline">
                  Resize Image
                </Link>{' '}
                — change dimensions before compressing. Enter width and height or use percentage.
              </li>
              <li>
                <Link href="/convert-image" className="text-primary hover:underline">
                  Convert Image
                </Link>{' '}
                — convert PNG to JPEG or any format to WebP for smaller file sizes.
              </li>
              <li>
                <Link href="/compress-image-for-instagram" className="text-primary hover:underline">
                  Compress for Instagram
                </Link>{' '}
                — pre-set for Instagram&apos;s requirements.
              </li>
              <li>
                <Link href="/compress-image-for-email" className="text-primary hover:underline">
                  Compress for Email
                </Link>{' '}
                — target under 500KB for email attachments.
              </li>
              <li>
                <Link href="/heic-to-jpg" className="text-primary hover:underline">
                  HEIC to JPG
                </Link>{' '}
                — convert iPhone HEIC photos to JPEG before uploading.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What is the best quality setting for web images?',
                  a: 'Quality 80 is the standard starting point for web images. It produces a file 60–80% smaller than the original with no perceptible quality difference on a normal screen. For thumbnails and preview images, quality 70–75 is appropriate. Never go below 60 for JPEG — artifacts become clearly visible.',
                },
                {
                  q: 'Should I use JPEG or WebP for my website?',
                  a: "Use WebP if your site supports it (all modern browsers in 2026 do). WebP produces 25–35% smaller files than JPEG at the same visual quality. If you need to support very old browsers or specific platforms that don't accept WebP, JPEG is the fallback.",
                },
                {
                  q: 'Does compressing an image reduce its quality permanently?',
                  a: 'For lossy formats like JPEG, yes — each time you save a JPEG at reduced quality, the quality loss is permanent and compounds. Always keep your original high-quality source file and compress a copy for web use. WebP and PNG lossless compression do not permanently reduce quality.',
                },
                {
                  q: 'How small should images be for a website?',
                  a: 'Hero images: under 300KB. Product images: under 200KB. Blog images: under 150KB. Thumbnails: under 80KB. These targets ensure fast loading on mobile connections while maintaining acceptable visual quality.',
                },
                {
                  q: 'Why do my images look blurry after compression?',
                  a: 'Blur in compressed images usually means the quality setting was set too low (below 60 for JPEG) or the image was compressed multiple times. Start from the original file and use quality 75–80. If an image still looks blurry at quality 80, the original resolution may be too low.',
                },
                {
                  q: 'Does image compression affect SEO?',
                  a: 'Indirectly, yes. Google uses page speed as a ranking factor, and uncompressed images are the most common cause of slow pages. Compressing images improves LCP (Largest Contentful Paint), which is a Core Web Vital that directly affects search rankings. Google also ranks images in image search based on page speed.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-text-main mb-2">{q}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-surface rounded-xl p-6 text-center">
            <h2 className="text-xl font-bold text-text-main mb-2">
              Ready to compress your images?
            </h2>
            <p className="text-text-muted text-sm mb-4">
              Free, browser-based, no upload to server. Your files never leave your device.
            </p>
            <a
              href="/compress-image"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
            >
              Compress Image Free →
            </a>
          </section>
        </div>
      </article>
    </main>
  )
}
