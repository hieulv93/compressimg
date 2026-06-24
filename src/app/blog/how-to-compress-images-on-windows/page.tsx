import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Compress Images on Windows — 5 Free Methods (2026)',
  description:
    'Reduce image file size on Windows 10 and 11 using Paint, Photos app, File Explorer, and free online tools. No software to install. Step-by-step guide.',
  alternates: { canonical: 'https://compressimg.pro/blog/how-to-compress-images-on-windows/' },
}

export default function CompressImagesOnWindows() {
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
        <span className="text-text-main">Compress Images on Windows</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-06-30">June 30, 2026</time>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Compress Images on Windows — 5 Free Methods (2026)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            A photo taken on a modern smartphone or camera is typically 3–25 MB. That is too large
            for email attachments, website uploads, and most online forms. Windows has several
            built-in ways to reduce image file size — and a free browser-based option that gives you
            the most control over quality. Here are the five fastest methods.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">5 Methods at a Glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Method</th>
                    <th className="text-left p-3 border border-border font-semibold">Best for</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Quality control
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      method: 'compressimg.pro (browser)',
                      best: 'Any image, best results',
                      quality: '⭐⭐⭐⭐⭐',
                    },
                    {
                      method: 'Paint — Resize',
                      best: 'Quick dimension reduction',
                      quality: '⭐⭐⭐',
                    },
                    {
                      method: 'Photos app — Resize',
                      best: 'Simple, no settings',
                      quality: '⭐⭐⭐',
                    },
                    {
                      method: 'Paint — Save As JPEG',
                      best: 'Convert PNG to JPEG',
                      quality: '⭐⭐⭐⭐',
                    },
                    {
                      method: 'File Explorer — Send to',
                      best: 'Email attachments fast',
                      quality: '⭐⭐',
                    },
                  ].map(({ method, best, quality }, i) => (
                    <tr key={method} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border font-medium">{method}</td>
                      <td className="p-3 border border-border text-text-muted text-sm">{best}</td>
                      <td className="p-3 border border-border">{quality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Method 1 — compressimg.pro (Best Quality Control)
            </h2>
            <p>
              The fastest way to compress an image on Windows with precise control over the output
              size. No software installation required — it runs entirely in your browser.
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                Open{' '}
                <Link href="/compress-image/" className="text-primary hover:underline">
                  compressimg.pro/compress-image
                </Link>{' '}
                in any browser (Chrome, Edge, Firefox)
              </li>
              <li>Drag and drop your image onto the upload area, or click to browse</li>
              <li>
                Adjust the quality slider — <strong className="text-text-main">80</strong> is the
                default and gives excellent results for most photos
              </li>
              <li>Click download — the compressed file saves to your Downloads folder</li>
            </ol>
            <p className="mt-4 text-text-muted text-sm">
              Works on Windows 10 and 11. Supports JPG, PNG, and WebP. All processing happens
              locally in your browser — no file is ever uploaded to a server.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <p className="font-semibold text-text-main mb-1">Typical results at quality 80</p>
              <ul className="space-y-1 text-text-muted">
                <li>iPhone 14 photo (12 MB) → 380 KB (97% smaller)</li>
                <li>Samsung Galaxy screenshot (2 MB) → 140 KB (93% smaller)</li>
                <li>DSLR portrait (22 MB) → 620 KB (97% smaller)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Method 2 — Microsoft Paint (Resize)</h2>
            <p>
              Paint is built into every version of Windows and can reduce image dimensions, which
              directly reduces file size. This is not the same as quality compression, but it is
              effective when the image is simply too large in pixels.
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                Right-click your image file → <strong className="text-text-main">Open with</strong>{' '}
                → <strong className="text-text-main">Paint</strong>
              </li>
              <li>
                Click <strong className="text-text-main">Resize</strong> in the Home ribbon (or
                press Ctrl+W)
              </li>
              <li>
                Select <strong className="text-text-main">Pixels</strong> and enter the target width
                — for web use, 1920px width is plenty for full-screen images; 800px for thumbnails
              </li>
              <li>
                Make sure <strong className="text-text-main">Maintain aspect ratio</strong> is
                checked so the height adjusts automatically
              </li>
              <li>Click OK, then save (Ctrl+S) or Save As to keep the original</li>
            </ol>
            <div className="mt-4 border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 rounded-xl p-4 text-sm">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Limitation</p>
              <p className="text-amber-700 dark:text-amber-400">
                Paint saves JPEG at a fixed quality setting and does not let you choose compression
                level. For full control over quality vs file size, use Method 1 instead.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Method 3 — Windows Photos App (Resize)</h2>
            <p>
              The Photos app included in Windows 10 and 11 has a resize option that is simpler than
              Paint, with three preset size options.
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                Open the image in the Photos app (double-click, or right-click → Open with → Photos)
              </li>
              <li>
                Click the three-dot menu (⋯) in the top-right corner →{' '}
                <strong className="text-text-main">Resize image</strong>
              </li>
              <li>
                Choose a preset: <strong className="text-text-main">Small</strong>,{' '}
                <strong className="text-text-main">Medium</strong>, or{' '}
                <strong className="text-text-main">Large</strong> — or enter custom dimensions
              </li>
              <li>Click Save and choose a file name and location</li>
            </ol>
            <p className="mt-4 text-text-muted text-sm">
              The Small preset outputs roughly 640px wide, Medium around 1280px, and Large around
              1920px. These are general guides — actual output varies by image. This method does not
              control JPEG quality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Method 4 — Paint Save As JPEG (Convert PNG to JPEG)
            </h2>
            <p>
              PNG files are lossless and significantly larger than JPEG for photographic images.
              Converting a PNG photo to JPEG in Paint can reduce file size by 60–80% with no visible
              quality difference.
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>Open the PNG in Paint (right-click → Open with → Paint)</li>
              <li>
                Click <strong className="text-text-main">File</strong> →{' '}
                <strong className="text-text-main">Save as</strong>
              </li>
              <li>
                In the &ldquo;Save as type&rdquo; dropdown, select{' '}
                <strong className="text-text-main">JPEG picture</strong>
              </li>
              <li>Choose a save location and click Save</li>
            </ol>
            <p className="mt-4 text-text-muted text-sm">
              Note: do not convert PNGs that contain transparency (logos, icons with transparent
              backgrounds) — JPEG does not support transparency and the background will become
              white. For those, use{' '}
              <Link href="/compress-png-online/" className="text-primary hover:underline">
                compressimg.pro/compress-png-online
              </Link>{' '}
              to compress the PNG without conversion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Method 5 — File Explorer &ldquo;Send to&rdquo; (Email Quick Resize)
            </h2>
            <p>
              Windows has a built-in email resize shortcut hidden in the right-click context menu.
              It is the quickest method when you just need to attach a photo to an email and do not
              care about precise control.
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>Right-click the image file in File Explorer</li>
              <li>
                Hover over <strong className="text-text-main">Send to</strong>
              </li>
              <li>
                Click <strong className="text-text-main">Mail recipient</strong>
              </li>
              <li>
                Windows will ask: &ldquo;Do you want to make all your pictures smaller?&rdquo; —
                click <strong className="text-text-main">Make all my pictures smaller</strong>
              </li>
              <li>Your email client opens with a resized copy attached</li>
            </ol>
            <p className="mt-4 text-text-muted text-sm">
              This method requires a desktop email client (Outlook, Windows Mail) to be configured.
              It outputs at roughly 640×480px — appropriate for email but too small for print or
              professional use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Batch Compress Multiple Images at Once on Windows
            </h2>
            <p>
              None of the built-in Windows methods support batch compression. If you need to
              compress multiple images at once, use the batch tool:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                Go to{' '}
                <Link href="/compress-images/" className="text-primary hover:underline">
                  compressimg.pro/compress-images
                </Link>
              </li>
              <li>Upload up to 5 images at once</li>
              <li>Set quality (80 recommended) and download all compressed files</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              What File Size Should You Target on Windows?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Use case</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Target size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Recommended method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      use: 'Email attachment',
                      target: '< 1 MB per image',
                      method: 'Method 1 (quality 75) or Method 5',
                    },
                    {
                      use: 'Website upload',
                      target: '< 200 KB',
                      method: 'Method 1 (quality 80) + resize to 1200px',
                    },
                    {
                      use: 'Online form (passport, resume)',
                      target: '< 200 KB',
                      method: 'Method 1 with resize',
                    },
                    {
                      use: 'WhatsApp / social media',
                      target: '< 500 KB',
                      method: 'Method 1 (quality 80)',
                    },
                    {
                      use: 'Print (keep quality)',
                      target: '< 5 MB',
                      method: 'Method 1 (quality 90)',
                    },
                  ].map(({ use, target, method }, i) => (
                    <tr key={use} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{use}</td>
                      <td className="p-3 border border-border text-green-600 font-medium">
                        {target}
                      </td>
                      <td className="p-3 border border-border text-text-muted text-sm">{method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image/" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — single image, full quality control
              </li>
              <li>
                <Link href="/compress-images/" className="text-primary hover:underline">
                  Batch compress images
                </Link>{' '}
                — up to 5 images at once
              </li>
              <li>
                <Link href="/resize-image/" className="text-primary hover:underline">
                  Resize image
                </Link>{' '}
                — reduce pixel dimensions
              </li>
              <li>
                <Link href="/png-to-jpg/" className="text-primary hover:underline">
                  PNG to JPG
                </Link>{' '}
                — convert large PNG photos to JPEG
              </li>
              <li>
                <Link href="/compress-image-for-email/" className="text-primary hover:underline">
                  Compress image for email
                </Link>{' '}
                — target sizes for email attachments
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'How do I reduce image file size on Windows 10 or 11?',
                  a: 'The quickest way is to use compressimg.pro in your browser — drag your image, set quality to 80, and download. For a built-in option, open the image in Paint, go to File → Save as → JPEG, or use the Resize tool to reduce the pixel dimensions before saving.',
                },
                {
                  q: 'Does Windows have a built-in image compressor?',
                  a: 'Windows does not have a dedicated image compression tool, but Paint and the Photos app both have a Resize function that reduces file size by reducing image dimensions. For quality-based compression (reducing KB without changing pixel size), a browser-based tool like compressimg.pro gives better results.',
                },
                {
                  q: 'How do I compress a JPEG on Windows without losing quality?',
                  a: 'Use compressimg.pro with quality set to 80–85. At these settings, compression is perceptually lossless — the difference is invisible to the human eye at normal viewing distances. File size typically drops 85–95% compared to the original uncompressed photo.',
                },
                {
                  q: 'How do I reduce the size of an image to under 200 KB on Windows?',
                  a: 'Open compressimg.pro/compress-image in your browser. Upload the image and set quality to 80. For most photos, this produces a file under 200 KB. If the file is still too large, use the resize option to reduce the pixel dimensions to 1200px width, then compress again.',
                },
                {
                  q: 'Can I compress images in bulk on Windows?',
                  a: 'Windows has no built-in batch image compression tool. Use compressimg.pro/compress-images to compress up to 5 images at once in your browser. All processing is local — no upload required.',
                },
                {
                  q: 'What is the difference between resizing and compressing an image?',
                  a: 'Resizing changes the pixel dimensions (e.g. 4000×3000 → 1920×1080). Compression reduces the file size at the same dimensions by applying JPEG or WebP compression. Both reduce file size, but compression preserves the original resolution. For website use, doing both (resize to max 1920px + compress to quality 80) gives the smallest file with the best quality.',
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
