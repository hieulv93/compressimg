import Link from 'next/link'

export default function WhatIsBase64Encoding() {
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
        <span className="text-text-main">What Is Base64 Encoding?</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-24">May 24, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            What Is Base64 Encoding? A Plain-English Explanation
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Base64 encoding converts binary data — like image files — into a string of printable
            text characters. If you have ever seen a long string starting with{' '}
            <code className="bg-surface px-1.5 py-0.5 rounded text-sm">/9j/4AAQSkZ...</code> inside
            HTML or a JSON response, you have seen Base64. Here is exactly how it works and when you
            should use it.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Core Problem Base64 Solves</h2>
            <p className="text-text-muted">
              Computers store data as binary — sequences of 0s and 1s grouped into bytes. Image
              files, audio files, and most other media are pure binary. Text-based formats like
              HTML, CSS, JSON, and XML are designed to carry printable characters — letters,
              numbers, punctuation — not arbitrary binary bytes.
            </p>
            <p className="text-text-muted mt-3">
              If you try to include raw binary image data inside a JSON string, the binary bytes may
              contain characters that break the JSON structure: null bytes, control characters,
              bytes that look like quote marks. The result is corrupted data.
            </p>
            <p className="text-text-muted mt-3">
              Base64 solves this by translating every possible binary byte value into a safe
              printable character. The output contains only letters (A–Z, a–z), digits (0–9), plus
              (+), and slash (/). These are universally safe in any text-based format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How Base64 Encoding Works</h2>
            <p className="text-text-muted">
              Base64 processes binary data in groups of 3 bytes at a time. Each group of 3 bytes (24
              bits) is split into four 6-bit chunks. Each 6-bit value (0–63) maps to one of 64
              printable characters using the Base64 alphabet:
            </p>
            <div className="mt-4 rounded-xl bg-surface border border-border p-4">
              <p className="text-xs font-semibold text-text-main mb-2">
                Base64 alphabet (64 characters)
              </p>
              <code className="text-xs font-mono text-text-muted break-all">
                ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
              </code>
            </div>
            <p className="text-text-muted mt-4">
              Because 3 bytes become 4 characters, the output is always 33% larger than the input.
              If the input length is not divisible by 3, one or two{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">=</code> padding characters
              are added at the end.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What a Base64 Image Looks Like</h2>
            <p className="text-text-muted">
              A Base64-encoded image is wrapped in a data URL — a string that tells the browser the
              data type before the encoded content:
            </p>
            <div className="mt-4 rounded-xl bg-surface border border-border p-4">
              <code className="text-xs font-mono text-text-muted break-all">
                data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEB...
              </code>
            </div>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">data:</strong> — signals this is a data URL, not
                a file URL
              </li>
              <li>
                <strong className="text-text-main">image/jpeg</strong> — the MIME type (image/png,
                image/webp also valid)
              </li>
              <li>
                <strong className="text-text-main">;base64,</strong> — declares the encoding method
              </li>
              <li>
                <strong className="text-text-main">/9j/4AAQ...</strong> — the actual Base64-encoded
                image bytes
              </li>
            </ul>
            <p className="text-text-muted mt-4">
              A browser treats a data URL exactly like a regular image URL. You can use it directly
              in an <code className="bg-surface px-1 py-0.5 rounded text-sm">{'<img>'}</code> tag or
              as a CSS{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">background-image</code> — no
              separate HTTP request needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The 33% Size Overhead</h2>
            <p className="text-text-muted">
              Base64 encoding always increases data size by approximately 33%. This is the
              fundamental trade-off: you gain the ability to embed binary data in text formats, but
              the data grows:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs text-text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-text-main">
                      Original image
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-text-main">
                      Base64 size
                    </th>
                    <th className="text-left py-2 font-semibold text-text-main">Overhead</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 pr-4">5 KB (icon)</td>
                    <td className="py-2 pr-4">~6.7 KB</td>
                    <td className="py-2">+1.7 KB</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">50 KB (thumbnail)</td>
                    <td className="py-2 pr-4">~67 KB</td>
                    <td className="py-2">+17 KB</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">200 KB (photo)</td>
                    <td className="py-2 pr-4">~267 KB</td>
                    <td className="py-2">+67 KB</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">1 MB (large photo)</td>
                    <td className="py-2 pr-4">~1.33 MB</td>
                    <td className="py-2">+330 KB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">When to Use Base64 for Images</h2>
            <p className="text-text-muted mb-4">
              Base64 makes sense in specific situations. Outside of these, you are usually better
              served by a regular image URL:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text-main mb-1">✅ Use Base64 when:</h3>
                <ul className="list-disc pl-6 space-y-1 text-text-muted">
                  <li>
                    Embedding images in HTML emails (external images are blocked by many email
                    clients)
                  </li>
                  <li>Small icons under 5–10 KB where eliminating one HTTP request matters</li>
                  <li>JSON API responses that must include image data inline</li>
                  <li>Offline-first web apps that need images available without network access</li>
                  <li>
                    Canvas API output —{' '}
                    <code className="bg-surface px-1 py-0.5 rounded text-sm">
                      canvas.toDataURL()
                    </code>{' '}
                    returns Base64
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-1">❌ Avoid Base64 when:</h3>
                <ul className="list-disc pl-6 space-y-1 text-text-muted">
                  <li>
                    Images are larger than 10 KB — the 33% overhead outweighs the request savings
                  </li>
                  <li>You need browser caching — Base64 images cannot be cached independently</li>
                  <li>
                    You are building a public website — external image URLs with CDN caching are
                    significantly faster
                  </li>
                  <li>
                    Multiple pages use the same image — external URLs can be cached once and reused
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Using Base64 Images in HTML and CSS</h2>
            <p className="text-text-muted mb-4">
              Once you have a Base64 data URL, you can use it anywhere a regular image URL would
              appear:
            </p>
            <div className="space-y-3">
              <div className="rounded-xl bg-surface border border-border p-4">
                <p className="text-xs font-semibold text-text-main mb-2">HTML img tag</p>
                <code className="text-xs font-mono text-text-muted break-all">
                  {
                    '<img src="data:image/jpeg;base64,/9j/4AAQ..." alt="Logo" width="200" height="80" />'
                  }
                </code>
              </div>
              <div className="rounded-xl bg-surface border border-border p-4">
                <p className="text-xs font-semibold text-text-main mb-2">CSS background</p>
                <code className="text-xs font-mono text-text-muted break-all">
                  {'.logo { background-image: url("data:image/jpeg;base64,/9j/4AAQ..."); }'}
                </code>
              </div>
              <div className="rounded-xl bg-surface border border-border p-4">
                <p className="text-xs font-semibold text-text-main mb-2">JSON payload</p>
                <code className="text-xs font-mono text-text-muted break-all">
                  {'{ "thumbnail": "data:image/jpeg;base64,/9j/4AAQ..." }'}
                </code>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Free Tools for Base64 and Images</h2>
            <p className="text-text-muted mb-4">
              You can convert images to and from Base64 directly in your browser:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/image-to-base64/"
                className="rounded-xl border border-border bg-surface p-4 hover:border-primary/40 transition-colors block"
              >
                <p className="font-semibold text-text-main text-sm">Image to Base64 Converter</p>
                <p className="text-text-muted text-xs mt-1">
                  Upload any image and get the full Base64 data URL — copy to clipboard or download
                  as .txt.
                </p>
              </Link>
              <Link
                href="/base64-to-image/"
                className="rounded-xl border border-border bg-surface p-4 hover:border-primary/40 transition-colors block"
              >
                <p className="font-semibold text-text-main text-sm">Base64 to Image Decoder</p>
                <p className="text-text-muted text-xs mt-1">
                  Paste a Base64 string and decode it back to an image. Preview and download as JPG.
                </p>
              </Link>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  Why does Base64 make image files 33% larger?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  Base64 encodes every 3 bytes of binary data into 4 printable characters. Because 3
                  bytes become 4 characters, the output is always 33% larger than the input. This
                  size overhead is the fundamental trade-off — you gain the ability to embed binary
                  data in text formats, but at a cost to file size.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  When should I use Base64 for images?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  Base64 makes sense for: small icons under 5–10 KB where eliminating one HTTP
                  request matters, images embedded in HTML emails (external images are often blocked
                  by email clients), JSON API responses that must include image data inline, and
                  offline-first web apps that need images available without network access.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  Can I use a Base64 image in an img tag?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  Yes. A browser treats a Base64 data URL exactly like a regular image URL. Use it
                  as the src attribute: &lt;img src=&quot;data:image/jpeg;base64,/9j/4AAQ...&quot;
                  alt=&quot;Description&quot; /&gt;. No separate HTTP request is needed, as the
                  image data is embedded directly in the HTML.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  Does Base64 compress images?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  No. Base64 is an encoding scheme, not a compression algorithm. It converts binary
                  bytes into text characters, which actually increases data size by 33%. If you want
                  to reduce image file size, compress the image first (using JPEG quality reduction
                  or PNG optimization), then encode the compressed result to Base64 if needed.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  Are Base64 images cached by the browser?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  No. Base64 images embedded in HTML or CSS cannot be cached independently by the
                  browser — they are part of the document and cached only as long as that document
                  is cached. External image URLs with their own cache headers can be cached
                  indefinitely. This is a major reason to avoid Base64 for images larger than a few
                  KB on public websites.
                </p>
              </details>
              <details className="border border-border rounded-lg p-4">
                <summary className="font-medium text-text-main cursor-pointer">
                  What is the difference between Base64 and a regular image URL?
                </summary>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  A regular image URL (e.g., /images/photo.jpg) requires the browser to make an HTTP
                  request to fetch the image file — a separate network round-trip. A Base64 data URL
                  embeds the full image data inside the HTML or CSS, so no network request is
                  needed. The trade-off: Base64 images are 33% larger, cannot be cached separately,
                  and increase the size of the embedding document.
                </p>
              </details>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
