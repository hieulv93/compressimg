import Link from 'next/link'

export default function PngVsJpg() {
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
        <span className="text-text-main">PNG vs JPG</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-06-08">June 8, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            PNG vs JPG: Which Image Format Should You Use?
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            PNG and JPG solve different problems. PNG preserves every pixel exactly as captured. JPG
            trades some quality for dramatically smaller file sizes. Choosing the wrong one either
            bloats your files unnecessarily or introduces visible artifacts where you do not want
            them. This guide explains when to use each format and why.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">The Short Answer</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-text-main mb-2">Use PNG when:</p>
                <ul className="space-y-1 text-text-muted">
                  <li>• You need transparency (no background)</li>
                  <li>• Image has text or sharp edges</li>
                  <li>• You will re-edit and re-save repeatedly</li>
                  <li>• Screenshots and diagrams</li>
                  <li>• Logos and icons</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-text-main mb-2">Use JPG when:</p>
                <ul className="space-y-1 text-text-muted">
                  <li>• Image is a photograph</li>
                  <li>• File size matters (web, email)</li>
                  <li>• No transparency needed</li>
                  <li>• Complex scenes with many colors</li>
                  <li>• Social media uploads</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How PNG Compression Works</h2>
            <p className="text-text-muted mb-4">
              PNG uses lossless compression — it stores every pixel in the original image exactly as
              it was captured. The compression algorithm finds patterns and repeating sequences in
              the image data to reduce file size without discarding any information.
            </p>
            <p className="text-text-muted mb-4">
              This makes PNG ideal for images with large flat-color areas (logos, diagrams,
              screenshots of text) because those areas compress extremely efficiently — a row of 500
              identical white pixels is far more compressible than a row of 500
              slightly-different-shade pixels in a photograph.
            </p>
            <p className="text-text-muted mb-4">
              PNG also supports an alpha channel — a fourth channel alongside red, green, and blue
              that controls transparency pixel by pixel. This is why PNG is the only format to use
              when you need a transparent background on a logo or icon. JPG has no transparency
              support at all.
            </p>
            <p className="text-text-muted">
              The trade-off: PNG files are significantly larger than JPG for photographic content. A
              photograph saved as PNG can be 3–10× larger than the same photograph at high-quality
              JPG.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How JPG Compression Works</h2>
            <p className="text-text-muted mb-4">
              JPG uses lossy compression — it permanently discards some image data during the save
              process to achieve much smaller file sizes. The compression works by dividing the
              image into 8×8 pixel blocks and then approximating the color information within each
              block rather than storing every pixel exactly.
            </p>
            <p className="text-text-muted mb-4">
              The quality setting (typically 0–100) controls how aggressively the approximation is
              applied. At quality 95, the result is visually indistinguishable from the original for
              most photographs. At quality 60, compression artifacts become visible — blocky
              patterns called &quot;mosquito noise&quot; appear around sharp edges and text.
            </p>
            <p className="text-text-muted mb-4">
              Once image data is discarded by JPG compression, it cannot be recovered. Opening a JPG
              and re-saving it applies the lossy compression a second time, discarding more data. A
              JPG that has been opened and re-saved 10 times will look noticeably worse than the
              original.
            </p>
            <p className="text-text-muted">
              For photographs at quality 80–90, JPG delivers excellent visual quality at file sizes
              3–10× smaller than PNG. This is why JPG is the dominant format for photographic
              content on the web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">File Size Comparison: PNG vs JPG</h2>
            <p className="text-text-muted mb-4">
              The file size difference between PNG and JPG depends heavily on the image content:
            </p>
            <div className="bg-surface border border-border rounded-xl p-5 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">Image type</th>
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">PNG size</th>
                    <th className="text-left pb-2 font-semibold text-text-main">JPG (q85) size</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Photograph (1920×1080)</td>
                    <td className="py-2 pr-4">~3–8 MB</td>
                    <td className="py-2">~300–600 KB</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Screenshot (1920×1080)</td>
                    <td className="py-2 pr-4">~200–800 KB</td>
                    <td className="py-2">~150–400 KB</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Logo on white background</td>
                    <td className="py-2 pr-4">~20–100 KB</td>
                    <td className="py-2">~30–150 KB</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Logo with transparency</td>
                    <td className="py-2 pr-4">~20–100 KB</td>
                    <td className="py-2">Not supported</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-muted">
              For photographs, JPG is consistently smaller — often dramatically so. For screenshots
              with large flat-color areas, the difference is smaller. For logos with transparency,
              PNG is the only option.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">PNG vs JPG for Websites</h2>
            <p className="text-text-muted mb-4">
              Page load speed directly affects bounce rate and search rankings. Every kilobyte of
              image data the browser must download adds to load time, which is why the correct
              format choice matters for web use.
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">For photographs and hero images:</strong> Use JPG
              (or WebP for modern browsers). A photograph that is 4MB as PNG becomes 300KB as JPG at
              quality 85 — the same visual quality at 7% of the file size.
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">For logos, icons, and UI elements:</strong> Use PNG
              if you need transparency, or SVG if the graphic is vector-based. PNG preserves sharp
              edges and text that JPG compression makes look blurry or blocky.
            </p>
            <p className="text-text-muted">
              <strong className="text-text-main">Best option for web overall:</strong> WebP supports
              both lossy compression (like JPG) and lossless compression (like PNG) with better
              quality-to-size ratios than either. It also supports transparency like PNG. All modern
              browsers support WebP. If your workflow allows it, WebP is the right choice for web
              images in 2026.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">PNG vs JPG for Social Media</h2>
            <p className="text-text-muted mb-4">
              All major social platforms (Instagram, Twitter/X, Facebook, LinkedIn) re-compress
              uploaded images when they display them. This means the format you upload in matters
              less than you might expect — both PNG and JPG will be compressed again by the
              platform.
            </p>
            <p className="text-text-muted mb-4">
              For most social media posts: upload JPG at quality 85–90. The platform compression
              process introduces its own artifacts, so starting with a high-quality JPG gives the
              platform the best source material to work from.
            </p>
            <p className="text-text-muted mb-4">
              For profile pictures and logos: upload PNG. Some platforms preserve PNG transparency
              for profile pictures, and the lossless quality of PNG gives the platform better source
              material for the aggressive compression applied to profile picture thumbnails.
            </p>
            <p className="text-text-muted">
              For thumbnails on YouTube: upload JPG. YouTube accepts PNG thumbnails but recommends
              JPG for smaller file sizes. The 2MB upload limit for thumbnails is rarely an issue at
              quality 85 JPG, but PNG thumbnails for photographs can exceed this limit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">When to Convert PNG to JPG</h2>
            <p className="text-text-muted mb-4">Converting a PNG to JPG makes sense when:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                The image is a photograph or complex scene — JPG will be much smaller with
                negligible quality loss at quality 80+
              </li>
              <li>
                You do not need the transparent background — if the PNG has a white background
                anyway, JPG is almost always smaller
              </li>
              <li>The file size is causing slow page loads or exceeding upload limits</li>
              <li>You are preparing images for email attachments where file size matters</li>
            </ul>
            <p className="text-text-muted mb-4">Do not convert PNG to JPG when:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted">
              <li>The image has a transparent background you need to preserve</li>
              <li>The image contains text or sharp logos — JPG compression will blur them</li>
              <li>
                You will edit and re-save the image — convert to JPG only for the final export, not
                as a working format
              </li>
            </ul>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">Compress PNG or JPG Free</h2>
            <p className="text-text-muted mb-4">
              CompressImg reduces PNG and JPG file sizes in your browser — no upload to a server, no
              account required. Reduce file size by up to 90% while keeping visible quality.
            </p>
            <Link
              href="/compress-image"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors text-sm"
            >
              Compress Image Free →
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Related Guides</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/jpg-vs-jpeg" className="text-primary hover:underline">
                  JPG vs JPEG: What&apos;s the Difference?
                </Link>
              </li>
              <li>
                <Link href="/blog/avif-vs-webp" className="text-primary hover:underline">
                  AVIF vs WebP: Next-Gen Format Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/best-image-format-for-web"
                  className="text-primary hover:underline"
                >
                  Best Image Format for Web in 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/compress-images-without-losing-quality"
                  className="text-primary hover:underline"
                >
                  How to Compress Images Without Losing Quality
                </Link>
              </li>
              <li>
                <Link href="/blog/what-is-webp-format" className="text-primary hover:underline">
                  What Is WebP? The Modern Image Format Explained
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
