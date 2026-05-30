import Link from 'next/link'

export default function HowToAddWatermarkToPhotos() {
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
        <span className="text-text-main">How to Add a Watermark to Photos</span>
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
            How to Add a Watermark to Photos Online — Free Guide
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            A watermark protects your work, builds your brand, and ensures credit travels with your
            photos wherever they are shared. This guide covers exactly how to add a watermark in
            three steps using a free browser tool — no Photoshop, no account, no install.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">Why Watermark Your Photos?</h2>
            <p className="text-text-muted">
              When you share photos online — on a portfolio, social media, stock site, or anywhere
              public — those images can be downloaded and reused without your permission. A
              watermark does not make theft impossible, but it does three important things:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">Identifies the owner</strong> — anyone who sees
                the image knows where it came from
              </li>
              <li>
                <strong className="text-text-main">Deters casual theft</strong> — most unauthorized
                reuse is opportunistic, not deliberate hacking
              </li>
              <li>
                <strong className="text-text-main">Passive marketing</strong> — when your
                watermarked photo is shared, your name or website reaches new audiences
              </li>
            </ul>
            <p className="text-text-muted mt-3">
              Photographers, illustrators, content creators, and brands all watermark for different
              reasons — but the mechanics are the same: overlay text on the image at a chosen
              position, opacity, and size.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How to Add a Watermark — 3 Steps</h2>
            <p className="text-text-muted mb-4">
              Use our free{' '}
              <Link href="/add-watermark/" className="text-primary hover:underline">
                Add Watermark tool
              </Link>{' '}
              — no installation, no account required. Everything runs in your browser.
            </p>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-text-main mb-1">Upload your photo</h3>
                  <p className="text-text-muted">
                    Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP, and
                    HEIC up to 20MB. The image loads as a live preview — you will see every setting
                    change immediately.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-text-main mb-1">Configure your watermark</h3>
                  <p className="text-text-muted">
                    Type your watermark text — your name, website URL, copyright notice, or brand
                    phrase. Then adjust:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-text-muted">
                    <li>
                      <strong className="text-text-main">Position</strong> — 9 grid options
                      (corners, edges, center)
                    </li>
                    <li>
                      <strong className="text-text-main">Font size</strong> — as a percentage of
                      image width, scales proportionally
                    </li>
                    <li>
                      <strong className="text-text-main">Opacity</strong> — 10% to 100%
                    </li>
                    <li>
                      <strong className="text-text-main">Color</strong> — white, black, yellow, red,
                      blue, or any custom hex color
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-text-main mb-1">
                    Download the watermarked photo
                  </h3>
                  <p className="text-text-muted">
                    Click Download. The file saves as a JPEG at quality 92 — visually lossless. Your
                    watermark is permanently embedded. The file is ready to share.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Choosing the Right Position</h2>
            <p className="text-text-muted mb-4">
              Where you place your watermark depends on your goal — protection, branding, or
              professional presentation:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-text-main">Position</th>
                    <th className="text-left py-2 font-semibold text-text-main">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 pr-4">Bottom right</td>
                    <td className="py-2">
                      Standard photography — visible, minimal, professional. The most common choice.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Center</td>
                    <td className="py-2">
                      Client proofs and maximum protection — hard to crop out.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Bottom left</td>
                    <td className="py-2">
                      Documentary / news style — less common, harder to crop without affecting the
                      main subject.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Top right</td>
                    <td className="py-2">
                      Social media and product photos where the bottom is busy.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-muted mt-4">
              Avoid placing the watermark directly over faces, key product details, or important
              compositional elements — it makes the photo harder to evaluate and reduces your
              chances of sales or engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Choosing the Right Opacity</h2>
            <p className="text-text-muted mb-4">
              Opacity is the most important setting to get right. Too low and your watermark is
              invisible; too high and it distracts from the image:
            </p>
            <div className="space-y-3">
              {[
                {
                  range: '20–40%',
                  label: 'Subtle branding',
                  desc: 'Barely visible at a glance. For professional portfolios where you want attribution without distracting from the work itself.',
                },
                {
                  range: '50–70%',
                  label: 'Standard protection',
                  desc: 'Clearly readable — the sweet spot for most photographers and content creators sharing work publicly.',
                },
                {
                  range: '80–100%',
                  label: 'Maximum protection',
                  desc: 'Fully opaque — for client proofs, proof-of-concept previews, or when deterrence is the primary goal over aesthetics.',
                },
              ].map(({ range, label, desc }) => (
                <div
                  key={range}
                  className="flex gap-3 rounded-xl border border-border bg-surface p-4"
                >
                  <div className="shrink-0 w-20 text-right">
                    <p className="text-xs font-mono font-bold text-text-main">{range}</p>
                    <p className="text-[10px] text-text-muted mt-0.5">{label}</p>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Choosing the Right Color</h2>
            <p className="text-text-muted">
              White works on most photographs — it is visible against dark areas but blends
              naturally with light areas. Black works well on bright, high-key photos. Yellow is
              highly visible on both dark and mid-tone images but can look amateurish — use it for
              maximum visibility rather than professional branding.
            </p>
            <p className="text-text-muted mt-3">
              The most professional approach: use white at 40–60% opacity on color photographs. Use
              your brand color at 60–80% opacity if you want consistent brand presentation across a
              series of images.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Text Should Your Watermark Say?</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">Your name or studio name</strong> — the most
                direct attribution. &quot;© Jane Smith Photography&quot;
              </li>
              <li>
                <strong className="text-text-main">Your website URL</strong> — drives traffic
                directly. &quot;compressimg.pro&quot;
              </li>
              <li>
                <strong className="text-text-main">Copyright symbol + year</strong> — signals
                ownership formally. &quot;© 2026&quot;
              </li>
              <li>
                <strong className="text-text-main">Your brand handle</strong> — for social media
                recognition. &quot;@yourhandle&quot;
              </li>
            </ul>
            <p className="text-text-muted mt-3">
              Keep it short — a watermark that is too long wraps awkwardly or must be reduced to an
              unreadably small size. A name, URL, or short phrase is ideal. Avoid full sentences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Will a Watermark Stop Photo Theft?</h2>
            <p className="text-text-muted">
              No — a determined editor can remove a watermark using Photoshop&apos;s content-aware
              fill or a generative AI tool. But most unauthorized photo use is opportunistic:
              someone finds an image on Google, downloads it, and posts it without thinking. A
              visible watermark stops this casual theft because the effort to remove it outweighs
              the convenience of using the photo.
            </p>
            <p className="text-text-muted mt-3">
              For proof-of-concept previews and client galleries, a center watermark at 80%+ opacity
              makes the photo functionally unusable without payment, while still being evaluable for
              composition and quality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Add Your Watermark Now</h2>
            <p className="text-text-muted mb-4">
              Our free tool runs entirely in your browser — no upload, no account, no Photoshop.
              Upload your photo, configure your watermark, download. Done in under 30 seconds.
            </p>
            <Link
              href="/add-watermark/"
              className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Add Watermark to Photo — Free
            </Link>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  Does adding a watermark reduce photo quality?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  No, if you use the correct tool. Our watermark tool saves the output at JPEG
                  quality 92 — visually lossless. The watermark text is rendered on top of your
                  image using the Canvas API in your browser, so no server processing reduces the
                  quality. The downloaded file is essentially as sharp as the original.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  Can someone remove my watermark?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  A determined editor can remove any watermark using Photoshop content-aware fill or
                  AI tools. However, a visible watermark stops casual theft — most unauthorized
                  reuse is opportunistic. For maximum protection, use a center watermark at 80%
                  opacity, which makes the image difficult to use without obvious removal effort.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  What opacity should I use for a watermark?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  50–70% opacity is the sweet spot for most photographers and content creators —
                  clearly readable without significantly distracting from the image. Use 20–40% for
                  subtle branding on portfolio work, and 80–100% for client proofs where you want
                  maximum deterrence.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  Where should I place my watermark?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  Bottom right is the most common position for photography watermarks — visible,
                  minimal, and professional. Center placement offers the most protection (hard to
                  crop out) and is best for client proof images. Avoid corners that are easily
                  cropped off if theft prevention is your main goal.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  What should my watermark text say?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  Your name, studio name, website URL, or copyright notice are the most effective
                  options. Examples: &quot;© Jane Smith Photography&quot;,
                  &quot;yourwebsite.com&quot;, or &quot;@yourhandle&quot;. Keep it short — a
                  watermark that is too long must be reduced to an unreadably small size. A website
                  URL is especially useful as it drives traffic when the image is shared.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  Does watermarking work on iPhone photos (HEIC)?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  Yes. Our watermark tool accepts HEIC files uploaded in Safari on iPhone and iPad.
                  The HEIC is decoded in your browser and the watermark is applied before saving the
                  output as JPEG. No conversion step is needed — just upload your HEIC photo
                  directly.
                </p>
              </details>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
