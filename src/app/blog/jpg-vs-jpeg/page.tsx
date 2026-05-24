import Link from 'next/link'

export default function JpgVsJpeg() {
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
        <span className="text-text-main">JPG vs JPEG</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-24">May 24, 2026</time>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            JPG vs JPEG: What&apos;s the Difference? (2026 Guide)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            JPG and JPEG are the same format. There is no technical difference between them — the
            two extensions exist for a purely historical reason. Here is the full explanation of why
            both exist, which to use, and when JPEG itself is the right choice at all.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-3">The short answer</h2>
            <p className="text-text-muted text-sm">
              <strong className="text-text-main">.jpg</strong> and{' '}
              <strong className="text-text-main">.jpeg</strong> are identical formats. The same
              compression algorithm, the same file structure, the same decoder. Every program that
              opens one opens the other. The only difference is the file extension characters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Two Extensions Exist</h2>
            <p>
              JPEG stands for <em>Joint Photographic Experts Group</em> — the committee that
              published the standard in 1992. The format name is JPEG, and the natural file
              extension is <code className="bg-surface px-1 py-0.5 rounded text-sm">.jpeg</code>.
            </p>
            <p className="mt-3">
              The problem: early versions of MS-DOS and Windows 3.x enforced a strict 8.3 filename
              format — a maximum of 8 characters for the name and <strong>3 characters</strong> for
              the extension. The four-letter extension{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">.jpeg</code> was not allowed.
              So software vendors shortened it to{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">.jpg</code> to comply with
              the limit.
            </p>
            <p className="mt-3">
              Unix and Mac systems never had this restriction — they continued using{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">.jpeg</code> throughout the
              same period. When Windows NT and later versions lifted the 8.3 limit, the habit of
              using <code className="bg-surface px-1 py-0.5 rounded text-sm">.jpg</code> was already
              locked in. Both extensions coexist to this day — purely for legacy and convention
              reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Are They Technically Identical?</h2>
            <p>Yes. There is no difference in:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>Compression algorithm (DCT-based lossy compression)</li>
              <li>File header or internal byte structure</li>
              <li>Color support (RGB, CMYK, grayscale)</li>
              <li>Metadata support (EXIF, IPTC)</li>
              <li>Quality levels (1–100 scale)</li>
              <li>Browser decoding — Chrome, Firefox, Safari treat them identically</li>
            </ul>
            <p className="mt-4">
              You can rename a <code className="bg-surface px-1 py-0.5 rounded text-sm">.jpg</code>{' '}
              to <code className="bg-surface px-1 py-0.5 rounded text-sm">.jpeg</code> (or vice
              versa) and the file will open perfectly in every application. No conversion, no
              re-encoding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Which Extension Should You Use?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Situation</th>
                    <th className="text-left p-3 border border-border font-semibold">Use</th>
                    <th className="text-left p-3 border border-border font-semibold">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      situation: 'Web images, web projects',
                      ext: '.jpg',
                      reason: 'Convention — shorter, universally expected',
                    },
                    {
                      situation: 'Photo editing software export',
                      ext: '.jpg',
                      reason: 'Most software defaults to .jpg',
                    },
                    {
                      situation: 'REST API / HTTP responses',
                      ext: 'image/jpeg',
                      reason: 'MIME type is always "image/jpeg" regardless of extension',
                    },
                    {
                      situation: 'HTML <img> src',
                      ext: 'Either',
                      reason: 'Browsers read MIME type, not extension',
                    },
                    {
                      situation: 'Print workflows (Adobe)',
                      ext: '.jpeg or .jpg',
                      reason: 'Both accepted; .jpg is more common',
                    },
                  ].map(({ situation, ext, reason }, i) => (
                    <tr key={situation} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{situation}</td>
                      <td className="p-3 border border-border font-mono font-medium text-primary">
                        {ext}
                      </td>
                      <td className="p-3 border border-border text-text-muted">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              The safe default is <strong className="text-text-main">.jpg</strong>. It is what most
              people expect, what most tools produce, and what most upload forms accept. Use{' '}
              <strong className="text-text-main">.jpeg</strong> only if a specific system requires
              it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How JPEG Compression Works</h2>
            <p>
              JPEG uses <em>discrete cosine transform (DCT)</em> compression — a lossy algorithm
              that discards image data that the human eye is least likely to notice. It works
              especially well on photographs with smooth color gradients: skies, skin tones, blurred
              backgrounds.
            </p>
            <p className="mt-3">
              The quality setting (typically 1–100) controls how aggressively data is discarded.
              Quality 100 keeps almost everything — producing large files. Quality 1 throws away
              most data — producing tiny files with heavy artifacts.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 space-y-2 text-sm">
              <p className="font-semibold">Practical quality guide:</p>
              <ul className="list-disc pl-5 space-y-1 text-text-muted">
                <li>
                  <strong className="text-text-main">90–100</strong> — Near-lossless, very large
                  files. Use only for professional print archiving.
                </li>
                <li>
                  <strong className="text-text-main">80–85</strong> — Sweet spot for web photos.
                  Visually indistinguishable at normal viewing distance.
                </li>
                <li>
                  <strong className="text-text-main">70–79</strong> — Noticeable only on close
                  inspection. Good for thumbnails and secondary images.
                </li>
                <li>
                  <strong className="text-text-main">60–69</strong> — Artifacts visible on
                  high-contrast edges. Acceptable for very small thumbnails only.
                </li>
                <li>
                  <strong className="text-text-main">Below 60</strong> — Obvious degradation. Avoid
                  for anything user-facing.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">JPEG vs WebP: When to Choose Each</h2>
            <p>
              In 2026,{' '}
              <Link href="/blog/best-image-format-for-web" className="text-primary hover:underline">
                WebP is the recommended default
              </Link>{' '}
              for web images. It produces 25–35% smaller files than JPEG at equivalent visual
              quality. However, JPEG remains the right choice in several scenarios:
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  label: 'Use JPEG when',
                  items: [
                    'Uploading to platforms that re-compress uploads (Instagram, Facebook, Twitter)',
                    'Sending files to print labs that require JPEG',
                    'Working with clients or systems that cannot handle WebP',
                    'Email attachments — maximum compatibility',
                  ],
                },
                {
                  label: 'Use WebP when',
                  items: [
                    'Publishing images directly on your own website',
                    'Optimizing for LCP and PageSpeed scores',
                    'You control the entire stack and can verify WebP support',
                    'File size is critical (e-commerce product galleries, CDN bandwidth costs)',
                  ],
                },
              ].map(({ label, items }) => (
                <div key={label} className="border border-border rounded-xl p-4">
                  <p className="font-semibold text-sm mb-2">{label}:</p>
                  <ul className="list-disc pl-5 space-y-1 text-text-muted text-sm">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">JPEG Limitations to Know</h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">No transparency</strong> — JPEG does not support
                alpha channels. Any transparent areas will be filled with white (or another solid
                color) when saving as JPEG. Use PNG or WebP for transparent images.
              </li>
              <li>
                <strong className="text-text-main">Lossy on every save</strong> — Re-saving a JPEG
                applies the compression algorithm again, increasing quality loss with each
                generation. Always work from an original (RAW, TIFF, or high-quality JPEG) and
                export at the final quality setting once.
              </li>
              <li>
                <strong className="text-text-main">Block artifacts at low quality</strong> — DCT
                compression divides images into 8×8 pixel blocks. At low quality settings, these
                blocks become visible as a grid-like pattern on sharp edges.
              </li>
              <li>
                <strong className="text-text-main">Not ideal for flat graphics</strong> — Logos,
                text screenshots, and images with sharp color boundaries show ringing artifacts near
                edges. PNG handles these better.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — reduce JPEG file size with quality slider
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-primary hover:underline">
                  JPG to WebP
                </Link>{' '}
                — convert JPEG to WebP for 25–35% smaller files
              </li>
              <li>
                <Link href="/webp-to-jpg" className="text-primary hover:underline">
                  WebP to JPG
                </Link>{' '}
                — convert back to JPEG for platform compatibility
              </li>
              <li>
                <Link href="/convert-image" className="text-primary hover:underline">
                  Convert image format
                </Link>{' '}
                — convert between any supported format
              </li>
              <li>
                <Link href="/compress-images" className="text-primary hover:underline">
                  Batch compress images
                </Link>{' '}
                — compress multiple JPEGs at once
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'Is .jpg the same as .jpeg?',
                  a: 'Yes, completely identical. The two extensions refer to the same file format — JPEG. The shorter .jpg extension originated from Windows 3.x limitations that required 3-character extensions. There is no technical difference between a .jpg and a .jpeg file.',
                },
                {
                  q: 'Can I rename a .jpg file to .jpeg without converting it?',
                  a: 'Yes. Changing the extension from .jpg to .jpeg (or vice versa) does not alter the file in any way. No conversion or re-encoding occurs. The file opens identically in every application.',
                },
                {
                  q: 'Which extension should I use for web images?',
                  a: '.jpg is the conventional choice for web use. It is shorter, more widely expected, and produced by default in most image editors and export tools. Use .jpeg only if a specific system or client requires it.',
                },
                {
                  q: 'What is the MIME type for JPEG images?',
                  a: 'The MIME type is always "image/jpeg" regardless of whether the file extension is .jpg or .jpeg. Browsers and servers use the MIME type, not the extension, to determine how to process image data.',
                },
                {
                  q: 'Does JPEG support transparency?',
                  a: 'No. JPEG does not support alpha channel transparency. If you need transparency, use PNG (for lossless, full transparency) or WebP (for compressed images with transparency). Converting a transparent PNG to JPEG fills the transparent areas with white.',
                },
                {
                  q: 'What quality setting should I use for JPEG on the web?',
                  a: 'Quality 80 is the recommended default for web photos. At this setting, the difference from higher quality is imperceptible to most viewers, while file size is reduced by 70–80% compared to an uncompressed source. For thumbnails, quality 75 is acceptable.',
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
