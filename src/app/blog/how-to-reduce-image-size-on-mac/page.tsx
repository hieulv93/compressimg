import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Reduce Image File Size on Mac — 5 Free Methods (2026)',
  description:
    'Reduce image file size on Mac using Preview, browser tools, sips command line, and more. Step-by-step guide for JPG, PNG, HEIC, and WebP on macOS.',
  alternates: { canonical: 'https://compressimg.pro/blog/how-to-reduce-image-size-on-mac/' },
}

export default function HowToReduceImageSizeOnMac() {
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
        <span className="text-text-main">Reduce Image Size on Mac</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-06-23">June 23, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Reduce Image File Size on Mac — 5 Free Methods (2026)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            macOS has several built-in tools for reducing image file size — Preview, sips, and
            ColorSync — plus browser-based options that work without any software at all. This guide
            covers all five methods with step-by-step instructions, so you can choose the one that
            fits your workflow.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">5 Methods — Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 border border-border font-semibold">Method</th>
                    <th className="text-left p-2 border border-border font-semibold">Best for</th>
                    <th className="text-left p-2 border border-border font-semibold">
                      Quality control
                    </th>
                    <th className="text-left p-2 border border-border font-semibold">Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      method: '1. Browser tool',
                      best: 'Any image, any Mac',
                      quality: '⭐⭐⭐⭐⭐',
                      batch: 'Up to 5',
                    },
                    {
                      method: '2. Preview app',
                      best: 'Quick one-off',
                      quality: '⭐⭐⭐',
                      batch: '❌',
                    },
                    {
                      method: '3. Preview Export',
                      best: 'Format convert',
                      quality: '⭐⭐⭐⭐',
                      batch: '❌',
                    },
                    {
                      method: '4. sips (Terminal)',
                      best: 'Power users',
                      quality: '⭐⭐⭐',
                      batch: '✅ Unlimited',
                    },
                    {
                      method: '5. Automator',
                      best: 'Recurring tasks',
                      quality: '⭐⭐⭐',
                      batch: '✅ Unlimited',
                    },
                  ].map(({ method, best, quality, batch }, i) => (
                    <tr key={method} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-2 border border-border font-medium text-xs">{method}</td>
                      <td className="p-2 border border-border text-text-muted text-xs">{best}</td>
                      <td className="p-2 border border-border text-xs">{quality}</td>
                      <td className="p-2 border border-border text-xs">{batch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Method 1 — Browser Tool (No Software, Works on Any Mac)
            </h2>
            <p>
              The fastest method that works on any macOS version, including M1/M2/M3 Macs, without
              installing anything. All processing happens in your browser — images never leave your
              device.
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-3 text-text-muted">
              <li>
                Open <strong className="text-text-main">Safari or Chrome</strong> and go to{' '}
                <Link href="/compress-image/" className="text-primary hover:underline">
                  compressimg.pro/compress-image
                </Link>
              </li>
              <li>Drag your image onto the upload area, or click to browse</li>
              <li>
                Adjust the quality slider — <strong className="text-text-main">80</strong> is the
                recommended default (visually lossless for web and email use)
              </li>
              <li>
                Click <strong className="text-text-main">Download</strong> — the compressed file
                saves to your Downloads folder
              </li>
            </ol>
            <p className="mt-4 text-text-muted text-sm">
              Supports JPEG, PNG, WebP, and HEIC. For multiple images, use the{' '}
              <Link href="/compress-images/" className="text-primary hover:underline">
                batch compress tool
              </Link>{' '}
              to process up to 5 files at once.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Method 2 — Resize in Preview (Built into macOS)
            </h2>
            <p>
              Preview is macOS&apos;s built-in image viewer and editor. It can reduce image file
              size by resizing the dimensions, which is the most effective way to shrink large
              photos from iPhone or DSLR cameras.
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-3 text-text-muted">
              <li>
                Open your image in <strong className="text-text-main">Preview</strong> (double-click
                the file)
              </li>
              <li>
                Go to <strong className="text-text-main">Tools → Adjust Size</strong> (⌘ + Opt + I)
              </li>
              <li>
                Change the <strong className="text-text-main">Width</strong> to your target — for
                web use, 1920px is sufficient for a full-width image; 800px for smaller uses
              </li>
              <li>
                Make sure <strong className="text-text-main">Scale proportionally</strong> is
                checked — the height adjusts automatically
              </li>
              <li>Click OK</li>
              <li>
                Save: <strong className="text-text-main">File → Save</strong> (⌘ S) to overwrite, or
                <strong className="text-text-main"> File → Export</strong> to save a new copy
              </li>
            </ol>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <p className="font-semibold mb-2">Preview resize results (typical DSLR photo)</p>
              <div className="space-y-2 text-text-muted">
                <div className="flex justify-between">
                  <span>Original (4000×3000 px)</span>
                  <span className="text-red-500 font-medium">12 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Resized to 1920×1440 px</span>
                  <span className="text-amber-600 font-medium">3.2 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Resized to 1280×960 px</span>
                  <span className="text-green-600 font-medium">1.4 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Resized to 800×600 px</span>
                  <span className="text-green-600 font-medium">400 KB</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Method 3 — Export as JPEG in Preview</h2>
            <p>
              If your image is a PNG (lossless, large file), exporting it as JPEG with a quality
              setting dramatically reduces file size. This is the Preview method for controlling
              compression quality directly.
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-3 text-text-muted">
              <li>Open the image in Preview</li>
              <li>
                Go to <strong className="text-text-main">File → Export</strong>
              </li>
              <li>
                Change <strong className="text-text-main">Format</strong> to{' '}
                <strong className="text-text-main">JPEG</strong>
              </li>
              <li>
                Drag the <strong className="text-text-main">Quality</strong> slider to around 75–80%
                — this is the compression sweet spot for most images
              </li>
              <li>Click Save</li>
            </ol>
            <p className="mt-3 text-text-muted text-sm">
              A 10 MB PNG exported as JPEG at quality 75% typically becomes 500 KB–1.5 MB — a
              reduction of 85–95% — with no visible difference on screen.
            </p>
            <div className="mt-4 border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 rounded-xl p-4 text-sm">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1">
                Note on HEIC files
              </p>
              <p className="text-amber-700 dark:text-amber-400">
                Preview can open HEIC files from iPhone but the Export quality slider behavior
                differs from JPEG. For HEIC compression with precise quality control, use{' '}
                <Link href="/heic-to-jpg/" className="text-primary hover:underline">
                  compressimg.pro/heic-to-jpg
                </Link>{' '}
                instead.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Method 4 — sips Command (Terminal, Power Users)
            </h2>
            <p>
              <strong>sips</strong> (Scriptable Image Processing System) is a command-line tool
              built into macOS that can resize, convert, and compress images without any additional
              software. It is ideal for batch processing large numbers of images.
            </p>
            <div className="mt-4 space-y-4">
              <div className="bg-surface rounded-xl p-4 font-mono text-sm">
                <p className="text-text-muted text-xs mb-2">
                  # Resize a single image to max 1920px wide, keeping aspect ratio
                </p>
                <p className="text-text-main">sips -Z 1920 ~/Desktop/photo.jpg</p>
              </div>
              <div className="bg-surface rounded-xl p-4 font-mono text-sm">
                <p className="text-text-muted text-xs mb-2">
                  # Convert PNG to JPEG with quality 80
                </p>
                <p className="text-text-main">
                  sips -s format jpeg -s formatOptions 80 ~/Desktop/image.png --out
                  ~/Desktop/image.jpg
                </p>
              </div>
              <div className="bg-surface rounded-xl p-4 font-mono text-sm">
                <p className="text-text-muted text-xs mb-2">
                  # Batch resize all JPEGs in a folder to max 1920px
                </p>
                <p className="text-text-main">
                  {'for f in ~/Desktop/photos/*.jpg; do sips -Z 1920 "$f"; done'}
                </p>
              </div>
            </div>
            <p className="mt-4 text-text-muted text-sm">
              The <code className="bg-surface px-1 rounded">-Z</code> flag sets the maximum
              dimension (longest edge). The{' '}
              <code className="bg-surface px-1 rounded">-s formatOptions</code> flag sets JPEG
              quality from 0 (lowest) to 100 (highest). sips modifies images in-place by default —
              use <code className="bg-surface px-1 rounded">--out path</code> to save to a new
              location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Method 5 — Automator Quick Action (Batch, No Terminal)
            </h2>
            <p>
              Automator lets you create a right-click Quick Action for images, so you can compress
              any image directly from Finder without opening an app or writing commands.
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-3 text-text-muted">
              <li>
                Open <strong className="text-text-main">Automator</strong> (search in Spotlight)
              </li>
              <li>
                Choose <strong className="text-text-main">New Document → Quick Action</strong>
              </li>
              <li>
                Set <strong className="text-text-main">Workflow receives</strong> to{' '}
                <strong className="text-text-main">image files</strong> in{' '}
                <strong className="text-text-main">Finder</strong>
              </li>
              <li>
                Search for and add the <strong className="text-text-main">Scale Images</strong>{' '}
                action
              </li>
              <li>Set the width to your target (e.g., 1920 pixels)</li>
              <li>
                Optionally add a <strong className="text-text-main">Copy Finder Items</strong>{' '}
                action before Scale Images to preserve the originals
              </li>
              <li>Save with a name like &ldquo;Compress to 1920px&rdquo;</li>
            </ol>
            <p className="mt-3 text-text-muted text-sm">
              After saving, right-click any image or selection of images in Finder →{' '}
              <strong className="text-text-main">Quick Actions → Compress to 1920px</strong>. The
              images are resized instantly without opening any app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Target Sizes by Use Case</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Use case</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Target size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Max dimensions
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Best method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      use: 'Email attachment',
                      size: '< 1 MB',
                      dims: '1280×960 px',
                      method: 'Method 1 or 3',
                    },
                    {
                      use: 'Website / blog',
                      size: '< 300 KB',
                      dims: '1920×1080 px',
                      method: 'Method 1',
                    },
                    {
                      use: 'WhatsApp / Messages',
                      size: '< 500 KB',
                      dims: '1280×960 px',
                      method: 'Method 1 or 3',
                    },
                    {
                      use: 'Form upload (100KB limit)',
                      size: '< 100 KB',
                      dims: '600×600 px',
                      method: 'Method 1',
                    },
                    {
                      use: 'PowerPoint / Keynote',
                      size: '< 500 KB',
                      dims: '1920×1080 px',
                      method: 'Method 1',
                    },
                    {
                      use: 'Batch (100+ images)',
                      size: 'Varies',
                      dims: 'Max 1920 px',
                      method: 'Method 4 (sips)',
                    },
                  ].map(({ use, size, dims, method }, i) => (
                    <tr key={use} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{use}</td>
                      <td className="p-3 border border-border text-green-600 font-medium">
                        {size}
                      </td>
                      <td className="p-3 border border-border font-mono text-xs">{dims}</td>
                      <td className="p-3 border border-border text-text-muted text-xs">{method}</td>
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
                — full quality control, works in Safari on Mac
              </li>
              <li>
                <Link href="/compress-images/" className="text-primary hover:underline">
                  Batch compress
                </Link>{' '}
                — compress multiple images at once
              </li>
              <li>
                <Link href="/heic-to-jpg/" className="text-primary hover:underline">
                  HEIC to JPG
                </Link>{' '}
                — convert iPhone HEIC photos to JPEG on Mac
              </li>
              <li>
                <Link href="/resize-image/" className="text-primary hover:underline">
                  Resize image
                </Link>{' '}
                — reduce dimensions to shrink file size
              </li>
              <li>
                <Link href="/png-to-jpg/" className="text-primary hover:underline">
                  PNG to JPG
                </Link>{' '}
                — convert large PNGs to smaller JPEG files
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'How do I reduce image file size on Mac without losing quality?',
                  a: "Compress to quality 80 using compressimg.pro or Preview's JPEG export. At quality 80, JPEG compression is perceptually lossless — the difference is invisible on screen at normal viewing distance. For PNG files with flat colors (logos, diagrams), keep them as PNG since quality 80 JPEG will introduce artifacts on sharp edges.",
                },
                {
                  q: 'Can Preview reduce image file size on Mac?',
                  a: 'Yes, in two ways: (1) resize dimensions via Tools → Adjust Size, which reduces file size proportionally to pixel count; (2) export as JPEG via File → Export with the quality slider set to 75–80%. Resizing is the more effective method for large camera photos.',
                },
                {
                  q: 'How do I compress images in bulk on Mac?',
                  a: 'Use the sips command in Terminal for the most control: `for f in folder/*.jpg; do sips -Z 1920 "$f"; done` resizes all JPEGs in a folder to max 1920px. Alternatively, create an Automator Quick Action with the Scale Images step for a right-click workflow from Finder.',
                },
                {
                  q: 'Does Mac have a built-in image compressor?',
                  a: 'Yes — Preview can resize and export images at lower quality (effective compression). The sips command-line tool provides more control and supports batch processing. For the best quality-to-size ratio with a visual preview, use compressimg.pro in Safari.',
                },
                {
                  q: 'How do I reduce HEIC file size on Mac?',
                  a: 'Open the HEIC file in Preview and export via File → Export → Format: JPEG at quality 75–80. Alternatively, use compressimg.pro/heic-to-jpg for more precise control and a before/after size comparison.',
                },
                {
                  q: 'Why does my image get larger after saving in Preview?',
                  a: 'Preview saves PNG files as lossless by default, which can actually increase file size if the original was a compressed JPEG. Always use File → Export and explicitly choose JPEG with quality 75–80 rather than saving in place, which re-encodes the file in its original format.',
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
