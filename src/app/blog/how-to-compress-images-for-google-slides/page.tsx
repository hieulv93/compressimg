import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Compress Images for Google Slides — Reduce File Size',
  description:
    'Google Slides files get large because of uncompressed images. Learn how to reduce Google Slides file size by compressing images before or after inserting. Free, no software.',
  alternates: {
    canonical: 'https://compressimg.pro/blog/how-to-compress-images-for-google-slides/',
  },
}

export default function CompressImagesForGoogleSlides() {
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
        <span className="text-text-main">Compress Images for Google Slides</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-06-30">June 30, 2026</time>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Compress Images for Google Slides — Reduce File Size
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Google Slides has no built-in image compression tool. When you insert a photo directly
            from your phone or desktop, it goes into the presentation at full resolution — which
            means a 10-slide deck can easily hit 80–120 MB. This guide explains how to fix that,
            whether you are building a new presentation or working with one that is already too
            large.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-3">Fastest Fix — Compress Before Inserting</h2>
            <ol className="space-y-3 text-sm text-text-muted">
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">1.</span>
                <span>
                  Go to{' '}
                  <Link href="/compress-image/" className="text-primary hover:underline">
                    compressimg.pro/compress-image
                  </Link>{' '}
                  in your browser
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">2.</span>
                <span>Upload each image you plan to use in your Google Slides presentation</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">3.</span>
                <span>
                  Set quality to <strong className="text-text-main">80</strong> — looks perfect on
                  any display, including projectors and shared screens
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">4.</span>
                <span>
                  Download the compressed images, then insert them into Google Slides via{' '}
                  <strong className="text-text-main">Insert → Image → Upload from computer</strong>
                </span>
              </li>
            </ol>
            <p className="mt-4 text-xs text-text-muted">
              No file is uploaded to any server. All compression runs locally in your browser. Works
              on Windows, Mac, and Chromebook.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Google Slides Files Become So Large</h2>
            <p>
              Unlike PowerPoint, Google Slides does not prompt you to compress images or offer a
              built-in &ldquo;Reduce file size&rdquo; option. Every image you insert goes in at
              exactly the resolution you uploaded. A 48MP smartphone photo is 15–25 MB. Three of
              those on a single deck means a 60–75 MB file before you have added a title or bullet
              point.
            </p>
            <p className="mt-3">
              Google Slides is a web application, so large files cause three specific problems: slow
              loading on slower connections, long wait times when collaborators open the deck, and
              large .pptx downloads when you export for offline use or to email to a client.
            </p>
            <p className="mt-3">
              The only reliable solution is to compress images before inserting them. Google Slides
              does store a slightly reduced version internally for performance, but this reduction
              is not predictable or controllable — and it does not apply to the original embedded
              file data that is downloaded when you export the deck.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Target Image Sizes for Google Slides</h2>
            <p>
              Google Slides displays at a canvas resolution of 1920×1080px (16:9 default). Any image
              larger than this is invisible quality that only adds weight.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Image type</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Max dimensions
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Target file size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">Quality</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: 'Full-slide background',
                      dims: '1920 × 1080 px',
                      size: '< 500 KB',
                      q: '80',
                    },
                    {
                      type: 'Half-slide photo',
                      dims: '960 × 720 px',
                      size: '< 200 KB',
                      q: '80',
                    },
                    {
                      type: 'Small inset / product photo',
                      dims: '600 × 600 px',
                      size: '< 100 KB',
                      q: '80',
                    },
                    {
                      type: 'Logo (PNG with transparency)',
                      dims: '400 × 200 px',
                      size: '< 50 KB',
                      q: '90',
                    },
                    {
                      type: 'Screenshot / UI capture',
                      dims: '1280 × 800 px',
                      size: '< 250 KB',
                      q: '85',
                    },
                  ].map(({ type, dims, size, q }, i) => (
                    <tr key={type} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{type}</td>
                      <td className="p-3 border border-border font-mono text-xs">{dims}</td>
                      <td className="p-3 border border-border text-green-600 font-medium">
                        {size}
                      </td>
                      <td className="p-3 border border-border text-text-muted">{q}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Reduce a Google Slides File That Is Already Too Large
            </h2>
            <p>
              If the presentation already has large images inserted, the only way to reduce it is to
              replace those images with compressed versions. Google Slides does not have a
              &ldquo;recompress all images&rdquo; function.
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                Download the presentation as .pptx:{' '}
                <strong className="text-text-main">
                  File → Download → Microsoft PowerPoint (.pptx)
                </strong>
              </li>
              <li>
                Open the .pptx file in PowerPoint (if available) and use{' '}
                <strong className="text-text-main">
                  Picture Format → Compress Pictures → Web (150 ppi)
                </strong>
              </li>
              <li>
                Save the compressed .pptx file, then re-upload it to Google Drive:{' '}
                <strong className="text-text-main">
                  New → File upload → select the .pptx → Open with Google Slides
                </strong>
              </li>
            </ol>
            <p className="mt-4 text-sm text-text-muted">
              If you do not have PowerPoint, the manual approach works too: download the deck,
              identify which slides have large images, compress each image individually at
              compressimg.pro, and re-insert them. It takes longer but gives you full quality
              control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Batch Compress Images for a Large Deck</h2>
            <p>
              If your presentation has many images — for example, a product catalog or a research
              deck with lots of charts and photos — compress them all before building the deck.
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                Go to{' '}
                <Link href="/compress-images/" className="text-primary hover:underline">
                  compressimg.pro/compress-images
                </Link>{' '}
                — the batch compress tool
              </li>
              <li>Upload up to 5 images at once</li>
              <li>Set quality to 80 and download all</li>
              <li>Repeat until all images are processed</li>
              <li>Build your Google Slides deck using the compressed files</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Google Slides vs PowerPoint — Image Compression Differences
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Feature</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Google Slides
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">PowerPoint</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'Built-in compress pictures',
                      slides: '❌ Not available',
                      ppt: '✅ Picture Format tab',
                    },
                    {
                      feature: 'Auto-resize on insert',
                      slides: '❌ Inserts at full size',
                      ppt: '⚠️ Resizes display, not file',
                    },
                    {
                      feature: 'Export with compression',
                      slides: '❌ Exports at inserted size',
                      ppt: '✅ Save as optimized',
                    },
                    {
                      feature: 'Collaboration without file size limit',
                      slides: '✅ Google Drive storage',
                      ppt: '⚠️ Email limit 25 MB',
                    },
                    {
                      feature: 'Best solution for large files',
                      slides: 'Compress before inserting',
                      ppt: 'Built-in compress OR compress before',
                    },
                  ].map(({ feature, slides, ppt }, i) => (
                    <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border font-medium">{feature}</td>
                      <td className="p-3 border border-border text-text-muted text-sm">{slides}</td>
                      <td className="p-3 border border-border text-text-muted text-sm">{ppt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Common Mistakes That Make Slides Files Large
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Pasting images directly from a browser or clipboard.
                </strong>{' '}
                Copy-pasting an image into Google Slides often inserts it at 2x retina resolution —
                twice the pixels you can see. Always save the image file first, compress it, then
                insert via Upload.
              </li>
              <li>
                <strong className="text-text-main">Using PNG for photographs.</strong> PNG is
                lossless and correct for logos, icons, and screenshots with flat colors — but a
                photographic PNG is 3–5× larger than the same image as JPEG quality 80. Convert
                photos using{' '}
                <Link href="/png-to-jpg/" className="text-primary hover:underline">
                  compressimg.pro/png-to-jpg
                </Link>{' '}
                before inserting.
              </li>
              <li>
                <strong className="text-text-main">
                  Inserting screenshots at retina resolution.
                </strong>{' '}
                A MacBook retina screenshot is 2880×1800px — almost three times the slide width.
                Resize to 1440×900px first.
              </li>
              <li>
                <strong className="text-text-main">
                  Downloading the presentation as PDF instead of .pptx for sharing.
                </strong>{' '}
                A Google Slides PDF preserves the full embedded image data, producing a very large
                PDF. Compress images before inserting, then export — or use Google&apos;s{' '}
                <strong className="text-text-main">File → Download → PDF Document (.pdf)</strong>{' '}
                which does apply some optimization.
              </li>
            </ul>
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
                — reduce to 1920×1080px before inserting
              </li>
              <li>
                <Link href="/png-to-jpg/" className="text-primary hover:underline">
                  PNG to JPG
                </Link>{' '}
                — convert photographic PNGs to smaller JPEG
              </li>
              <li>
                <Link
                  href="/blog/how-to-compress-images-for-powerpoint/"
                  className="text-primary hover:underline"
                >
                  Compress images for PowerPoint
                </Link>{' '}
                — including the built-in Compress Pictures tool
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'Why is my Google Slides file so large?',
                  a: 'Most of the time, large images are the cause. Google Slides inserts photos at their original resolution — a single 20 MB photo from a modern camera adds 20 MB to the deck. Check each slide for full-resolution photos and replace them with versions compressed at compressimg.pro (quality 80, max 1920px width).',
                },
                {
                  q: 'Does Google Slides compress images automatically?',
                  a: 'Google Slides does resize the display of oversized images, but it does not compress the embedded file data. The original full-resolution image data is stored inside the presentation. When you download or export the deck, the full-size images are included. There is no automatic compression — you must compress images before inserting them.',
                },
                {
                  q: 'How do I reduce Google Slides file size without losing quality?',
                  a: 'Compress images at quality 80 using compressimg.pro before inserting them. At quality 80, JPEG compression is perceptually lossless — the difference is invisible on any display. File size typically drops 90–97% compared to the uncompressed original, with no visible quality loss on a projector or screen.',
                },
                {
                  q: 'What image format should I use in Google Slides?',
                  a: 'Use JPEG for photographs and complex images — it produces the smallest files. Use PNG only for logos, icons, and diagrams that need sharp edges or transparent backgrounds. Avoid inserting TIFF or BMP files — they are uncompressed and will significantly inflate the file size.',
                },
                {
                  q: 'Can I compress a Google Slides file directly?',
                  a: 'Google Slides does not have a direct file compression option. The only way to reduce a Google Slides file is to replace the large images inside it with compressed versions. Download the deck as .pptx, use PowerPoint to compress all pictures, then re-upload to Google Drive and open with Google Slides.',
                },
                {
                  q: 'How large should images be for Google Slides?',
                  a: 'Google Slides canvas is 1920×1080px (for the default 16:9 format). Full-slide background images should be 1920×1080px or smaller. Half-slide images should be 960×720px. At quality 80, a 1920×1080px JPEG is typically 200–400 KB — ideal for fast loading during a live presentation.',
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
