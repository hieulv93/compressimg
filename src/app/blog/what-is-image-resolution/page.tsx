import Link from 'next/link'

export default function WhatIsImageResolution() {
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
        <span className="text-text-main">What Is Image Resolution</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-06-15">June 15, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            What Is Image Resolution? Pixels, DPI, and File Size Explained
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Image resolution describes how much detail an image contains. It is measured in pixels
            for digital images and in DPI (dots per inch) for print. Understanding resolution
            determines whether your photo will look sharp on screen, print cleanly at A4 size, or
            upload correctly to a website or social platform. This guide explains every term clearly
            with practical examples.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Resolution at a Glance</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-text-main mb-2">For screens:</p>
                <ul className="space-y-1 text-text-muted">
                  <li>• Measured in pixels (e.g. 1920×1080)</li>
                  <li>• More pixels = more detail</li>
                  <li>• DPI setting doesn&apos;t matter for web</li>
                  <li>• Common: 1080p (FHD), 1440p (QHD), 4K</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-text-main mb-2">For print:</p>
                <ul className="space-y-1 text-text-muted">
                  <li>• Measured in DPI (dots per inch)</li>
                  <li>• 300 DPI = professional print quality</li>
                  <li>• 72 DPI is web-only, blurry when printed</li>
                  <li>• More DPI = sharper physical output</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Resolution Actually Means</h2>
            <p className="text-text-muted mb-4">
              Resolution is the total number of pixels in an image, expressed as width × height. A
              1920×1080 image has 1,920 pixels across and 1,080 pixels tall, for a total of
              2,073,600 pixels — just over 2 megapixels.
            </p>
            <p className="text-text-muted mb-4">
              Each pixel is a single colored square. When you zoom out, these squares blend together
              and the image looks smooth and detailed. When you zoom in too far, individual pixels
              become visible — this is what &quot;pixelated&quot; or &quot;blocky&quot; means.
            </p>
            <p className="text-text-muted mb-4">
              Higher resolution = more pixels = more detail. A 4000×3000 photo (12 megapixels)
              contains four times as many pixels as a 2000×1500 photo (3 megapixels), which means it
              can be printed larger while remaining sharp, or cropped more aggressively without
              losing detail.
            </p>
            <p className="text-text-muted">
              Resolution and file size are related but not the same. A 4000×3000 JPEG at quality 80
              might be 2–4 MB. The same 4000×3000 image as an uncompressed TIFF might be 34 MB. Same
              resolution, very different file sizes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Pixels vs Megapixels</h2>
            <p className="text-text-muted mb-4">
              A megapixel (MP) is simply one million pixels. Camera specs use megapixels because it
              is a more convenient number than listing the full pixel count.
            </p>
            <div className="bg-surface border border-border rounded-xl p-5 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">Megapixels</th>
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">
                      Common dimensions
                    </th>
                    <th className="text-left pb-2 font-semibold text-text-main">Use case</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">2 MP</td>
                    <td className="py-2 pr-4">1920×1080</td>
                    <td className="py-2">Full HD, web display</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">8 MP</td>
                    <td className="py-2 pr-4">3264×2448</td>
                    <td className="py-2">Standard smartphone, A4 print</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">12 MP</td>
                    <td className="py-2 pr-4">4000×3000</td>
                    <td className="py-2">iPhone, A3 print</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">48 MP</td>
                    <td className="py-2 pr-4">8064×6048</td>
                    <td className="py-2">High-end phones, large format print</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">50 MP</td>
                    <td className="py-2 pr-4">8192×6144</td>
                    <td className="py-2">Professional DSLR, billboard print</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-muted">
              For web use: you rarely need more than 2 megapixels. A 1920×1080 image fills a 1080p
              monitor completely. Uploading a 50 MP image to a website that displays it at 1920px
              wide just wastes bandwidth — the browser scales it down anyway.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Is DPI (Dots Per Inch)?</h2>
            <p className="text-text-muted mb-4">
              DPI (dots per inch) describes how densely pixels are packed when an image is printed
              or displayed on a physical surface. Higher DPI means more dots per inch of paper,
              which means sharper output.
            </p>
            <p className="text-text-muted mb-4">The standard rule:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">300 DPI</strong> — professional print quality.
                Magazines, brochures, business cards. Any image intended for physical print should
                be at 300 DPI at the intended print size.
              </li>
              <li>
                <strong className="text-text-main">150–200 DPI</strong> — acceptable for
                large-format prints (posters, banners) viewed from a distance where the viewer
                won&apos;t be close enough to see individual pixels.
              </li>
              <li>
                <strong className="text-text-main">72–96 DPI</strong> — screen resolution. Web
                images are typically saved at 72 DPI. This number has no effect on how the image
                looks on screen — it only matters if the image is printed.
              </li>
            </ul>
            <p className="text-text-muted">
              For web: the DPI value embedded in an image file is ignored by browsers. A 72 DPI
              image and a 300 DPI image at the same pixel dimensions look identical on screen. The
              DPI value only matters when the image is sent to a printer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">PPI vs DPI: What&apos;s the Difference?</h2>
            <p className="text-text-muted mb-4">
              PPI (pixels per inch) is the correct term for digital displays. DPI (dots per inch) is
              technically a print term referring to ink dots on paper. In practice, both terms are
              used interchangeably for images — when someone says &quot;72 DPI&quot; for a web
              image, they mean 72 PPI.
            </p>
            <p className="text-text-muted mb-4">Screen PPI varies by device:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>Standard LCD monitor: 72–96 PPI</li>
              <li>MacBook Pro Retina (14&quot;): 254 PPI</li>
              <li>iPhone 15 Pro: 460 PPI</li>
              <li>4K TV (55&quot;): ~80 PPI (large screen, same pixel count)</li>
            </ul>
            <p className="text-text-muted">
              High-PPI (Retina) displays actually show images at 2× the detail of standard monitors
              when the OS sends a 2× resolution image. This is why web developers often provide 2×
              images for Retina displays — a 1080px-wide image becomes 540px-wide on a Retina
              display if only a 1× asset is provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How Resolution Affects File Size</h2>
            <p className="text-text-muted mb-4">
              More pixels = more data to store = larger file size. The relationship is roughly
              quadratic: doubling the width and height of an image (e.g. 1000×1000 to 2000×2000)
              produces four times as many pixels, and roughly four times the uncompressed file size.
            </p>
            <p className="text-text-muted mb-4">
              JPEG compression reduces file size independently of resolution. The same 4000×3000
              photo might be:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>34 MB as uncompressed TIFF</li>
              <li>6–8 MB as JPEG quality 95</li>
              <li>2–4 MB as JPEG quality 80</li>
              <li>800 KB–1.5 MB as JPEG quality 60</li>
            </ul>
            <p className="text-text-muted mb-4">
              For web use, reducing resolution is often more effective than reducing quality. A
              4000×3000 image resized to 1920×1440 at quality 85 will be smaller and look identical
              at standard monitor sizes compared to the full-resolution image at quality 60.
            </p>
            <p className="text-text-muted">
              The best compression strategy: resize first to the required display dimensions, then
              compress. Never compress at full resolution and then upload — you send more data than
              needed for zero visual benefit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Image Resolutions Explained</h2>
            <div className="bg-surface border border-border rounded-xl p-5 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">
                      Resolution name
                    </th>
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">Pixels</th>
                    <th className="text-left pb-2 font-semibold text-text-main">Common use</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">HD (720p)</td>
                    <td className="py-2 pr-4">1280×720</td>
                    <td className="py-2">YouTube thumbnails, older monitors</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Full HD (1080p)</td>
                    <td className="py-2 pr-4">1920×1080</td>
                    <td className="py-2">Most monitors, TV, wallpapers</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">QHD / 2K (1440p)</td>
                    <td className="py-2 pr-4">2560×1440</td>
                    <td className="py-2">High-end monitors, gaming</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">4K (UHD)</td>
                    <td className="py-2 pr-4">3840×2160</td>
                    <td className="py-2">4K TVs, professional photography</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">8K</td>
                    <td className="py-2 pr-4">7680×4320</td>
                    <td className="py-2">High-end TV, large format print</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Resolution Do You Need for Print?</h2>
            <p className="text-text-muted mb-4">
              To print at 300 DPI, you need enough pixels to fill the physical print size at that
              density. The formula: print width (inches) × 300 = pixels needed.
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">4×6 inch photo</strong> (standard print): needs
                1200×1800 px minimum at 300 DPI — about 2 megapixels. Any modern phone photo works.
              </li>
              <li>
                <strong className="text-text-main">A4 (8.27×11.69 inch)</strong>: needs 2481×3507 px
                at 300 DPI — about 8.7 megapixels.
              </li>
              <li>
                <strong className="text-text-main">A3 (11.69×16.54 inch)</strong>: needs 3508×4961
                px at 300 DPI — about 17 megapixels.
              </li>
              <li>
                <strong className="text-text-main">24×36 inch poster</strong>: needs 7200×10800 px
                at 300 DPI — about 78 megapixels. For poster printing, 150 DPI is usually
                acceptable, requiring half those pixels.
              </li>
            </ul>
            <p className="text-text-muted">
              Enlarging an image beyond its native resolution produces blurry prints. AI upscaling
              tools can add pixels intelligently, but there is a quality ceiling — you cannot
              recover fine detail from a 1 MP image that was never captured.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Resolution vs Image Quality: Not the Same Thing
            </h2>
            <p className="text-text-muted mb-4">
              High resolution does not automatically mean high quality. A blurry 48 MP photo is
              still blurry at high resolution — it just has a lot of blurry pixels.
            </p>
            <p className="text-text-muted mb-4">Image quality is affected by:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Camera sensor quality</strong> — a larger sensor
                captures more light, reducing noise even at lower megapixel counts
              </li>
              <li>
                <strong className="text-text-main">Lens sharpness</strong> — a sharp prime lens will
                produce cleaner images at 12 MP than a soft zoom lens at 48 MP
              </li>
              <li>
                <strong className="text-text-main">Focus accuracy</strong> — a sharp subject in
                focus beats high resolution with camera shake
              </li>
              <li>
                <strong className="text-text-main">JPEG compression settings</strong> — heavy
                compression at high resolution looks worse than moderate compression at medium
                resolution
              </li>
            </ul>
            <p className="text-text-muted">
              For web use: a well-lit, sharp 8 MP photo compressed to 1920px wide at quality 80 will
              look better than a technically 48 MP shot with compression artifacts and poor
              lighting. Resolution is one factor; the image content is what actually determines
              perceived quality.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">Compress Without Losing Resolution</h2>
            <p className="text-text-muted mb-4">
              CompressImg reduces JPEG, PNG, and WebP file sizes without changing dimensions. Your
              1920×1080 image stays 1920×1080 — only the file size shrinks. No server upload, no
              account required.
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
                <Link
                  href="/blog/dpi-vs-resolution-print-vs-web"
                  className="text-primary hover:underline"
                >
                  DPI vs Resolution: Print vs Web Explained
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
                <Link
                  href="/blog/how-to-reduce-image-file-size"
                  className="text-primary hover:underline"
                >
                  How to Reduce Image File Size: 5 Methods
                </Link>
              </li>
              <li>
                <Link href="/blog/avif-vs-webp" className="text-primary hover:underline">
                  AVIF vs WebP: Next-Gen Format Comparison
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
