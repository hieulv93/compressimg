import Link from 'next/link'

export default function CompressImagesOnIphone() {
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
        <span className="text-text-main">Compress Images on iPhone</span>
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
            How to Compress Images on iPhone — Without Losing Quality (2026)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            iPhone photos are large — a single HEIC from an iPhone 15 Pro can be 8–12 MB. When you
            need to email a photo, upload to a website with a file size limit, or share without
            burning mobile data, you need to compress first. Here are the best free methods,
            including one that requires no app at all.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-3">
              Method 1: Browser-based (Fastest, No App Needed)
            </h2>
            <ol className="space-y-3 text-sm text-text-muted">
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">1.</span>
                <span>
                  Open <strong className="text-text-main">Safari</strong> on your iPhone and go to{' '}
                  <strong className="text-text-main">compressimg.pro</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">2.</span>
                <span>
                  Tap the upload area — your iPhone will show the option to choose from{' '}
                  <strong className="text-text-main">Photos</strong> or{' '}
                  <strong className="text-text-main">Files</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">3.</span>
                <span>Adjust the quality slider if needed (default 80 is recommended)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">4.</span>
                <span>
                  Tap <strong className="text-text-main">Download</strong> — the compressed image
                  saves to your Photos or Files app
                </span>
              </li>
            </ol>
            <p className="mt-4 text-xs text-text-muted">
              Works on iOS 14+. No account, no app install, no upload to any server — compression
              happens entirely in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Are iPhone Photos So Large?</h2>
            <p>
              Modern iPhones shoot in <strong>HEIC format</strong> (High Efficiency Image Coding) by
              default — Apple&apos;s implementation of HEIF, which produces roughly half the file
              size of JPEG at the same visual quality. Despite the efficiency, photos from
              high-resolution cameras are still large because:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>iPhone 14–15 cameras shoot at 12–48 megapixels</li>
              <li>Apple applies minimal compression to preserve detail for editing</li>
              <li>ProRAW and Apple ProRAW formats can reach 25–75 MB per image</li>
              <li>Live Photos include a short video clip (doubles file size)</li>
            </ul>
            <p className="mt-3">
              For sharing and uploading, most platforms only display images at 1080–2560px wide —
              far smaller than what the camera captures. Compressing to this range reduces file size
              by 80–95% with no visible quality difference in everyday use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">All 5 Methods Compared</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Method 1: Browser tool (compressimg.pro)',
                  pros: [
                    'No app to install',
                    'Full quality control via slider',
                    'Handles HEIC, JPEG, PNG, WebP',
                    'Works on any iOS version 14+',
                  ],
                  cons: [
                    'Requires internet connection',
                    'One image at a time (use batch tool for multiple)',
                  ],
                  best: 'Best for: one-off compression, email attachments, web uploads',
                },
                {
                  title: 'Method 2: iPhone Settings — HEIC to JPEG on capture',
                  pros: [
                    'No extra step after the fact',
                    'Camera → Formats → Most Compatible switches to JPEG',
                  ],
                  cons: [
                    'Applies to all future photos — not retroactive',
                    'Loses HEIC efficiency (larger JPEG files)',
                  ],
                  best: 'Best for: users who always need JPEG compatibility',
                },
                {
                  title: 'Method 3: Share as reduced size (Mail / Messages)',
                  pros: [
                    'Built into iOS — no app needed',
                    'Works inline when sharing via Mail app',
                  ],
                  cons: [
                    'Only accessible via Mail share sheet',
                    'Limited size options (Small / Medium / Large / Actual)',
                  ],
                  best: 'Best for: quick email sends directly from Photos app',
                },
                {
                  title: 'Method 4: iCloud Photos — optimize iPhone storage',
                  pros: ['Frees up device storage', 'Originals stored in iCloud at full quality'],
                  cons: [
                    'Requires iCloud subscription for large libraries',
                    'Does not reduce sharing size — only local storage',
                  ],
                  best: 'Best for: freeing space on device, not for reducing send size',
                },
                {
                  title: 'Method 5: Shortcuts app (automated)',
                  pros: [
                    'Can set custom size targets',
                    'Can batch compress albums',
                    'Fully automated with triggers',
                  ],
                  cons: ['Requires setup time', 'Limited options vs dedicated tool'],
                  best: 'Best for: power users who compress frequently',
                },
              ].map(({ title, pros, cons, best }) => (
                <div key={title} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-text-main mb-3">{title}</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-green-600 font-medium mb-1">Pros</p>
                      <ul className="list-disc pl-4 space-y-1 text-text-muted">
                        {pros.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-500 font-medium mb-1">Cons</p>
                      <ul className="list-disc pl-4 space-y-1 text-text-muted">
                        {cons.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted border-t border-border pt-3">{best}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Size Should You Target?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Use case</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Target size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Quality setting
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { use: 'Email attachment', target: '< 1 MB', quality: '80' },
                    { use: 'WhatsApp / iMessage', target: '< 500 KB', quality: '75' },
                    { use: 'Instagram upload', target: '< 2 MB', quality: '85' },
                    { use: 'Website / blog', target: '< 300 KB', quality: '80' },
                    {
                      use: 'Form upload with limit',
                      target: 'Below stated limit',
                      quality: '70–80',
                    },
                    { use: 'Etsy listing photo', target: '< 1 MB', quality: '80' },
                  ].map(({ use, target, quality }, i) => (
                    <tr key={use} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{use}</td>
                      <td className="p-3 border border-border text-green-600 font-medium">
                        {target}
                      </td>
                      <td className="p-3 border border-border text-text-muted">{quality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">HEIC vs JPEG on iPhone</h2>
            <p>
              HEIC is Apple&apos;s default photo format since iOS 11. It delivers better image
              quality at smaller file sizes compared to JPEG — but creates compatibility problems
              when you need to share with Windows users, upload to websites, or use images in
              non-Apple tools.
            </p>
            <p className="mt-3">
              When you compress a HEIC photo using the browser tool, it is automatically converted
              to JPEG (or WebP, depending on the tool output). The result is a universally
              compatible, compressed image ready for any platform.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <p className="font-semibold mb-2">To permanently switch to JPEG on camera:</p>
              <ol className="space-y-1 text-text-muted">
                <li>
                  1. Open <strong className="text-text-main">Settings</strong>
                </li>
                <li>
                  2. Tap <strong className="text-text-main">Camera</strong>
                </li>
                <li>
                  3. Tap <strong className="text-text-main">Formats</strong>
                </li>
                <li>
                  4. Select <strong className="text-text-main">Most Compatible</strong> (this uses
                  JPEG instead of HEIC)
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — compress any photo in your browser
              </li>
              <li>
                <Link href="/compress-images" className="text-primary hover:underline">
                  Batch compress images
                </Link>{' '}
                — compress multiple photos at once
              </li>
              <li>
                <Link href="/heic-to-jpg" className="text-primary hover:underline">
                  HEIC to JPG
                </Link>{' '}
                — convert iPhone HEIC photos to universal JPEG
              </li>
              <li>
                <Link href="/resize-image" className="text-primary hover:underline">
                  Resize image
                </Link>{' '}
                — reduce dimensions as well as file size
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'How do I compress photos on my iPhone without an app?',
                  a: 'Open Safari and go to compressimg.pro. Tap the upload area, select your photo, adjust quality if needed, and tap Download. The entire process happens in your browser — no app install required.',
                },
                {
                  q: 'Does compressing photos on iPhone reduce quality?',
                  a: 'At quality 80 (the default), compressed photos are visually indistinguishable from the original on a phone screen or monitor. The compression removes data the human eye cannot easily perceive. For professional print use, keep quality at 85–90.',
                },
                {
                  q: 'Why are iPhone photos so large?',
                  a: 'iPhone cameras capture at 12–48 megapixels to preserve maximum detail for editing. This results in raw files of 8–25 MB. For sharing and web use, you only need 1–3 MP, so compression reduces file size by 80–95% without any visible difference.',
                },
                {
                  q: 'Can I compress a HEIC photo on iPhone?',
                  a: 'Yes. Upload the HEIC file to compressimg.pro in Safari. The tool automatically converts it to JPEG (the universal format) and compresses it at your chosen quality level.',
                },
                {
                  q: 'How do I send a smaller photo from my iPhone via email?',
                  a: 'In the Photos app, share the photo via Mail. The share sheet offers size options (Small, Medium, Large, Actual). Select Medium or Small. Alternatively, compress first at compressimg.pro then attach the compressed file.',
                },
                {
                  q: 'Does iPhone compress photos automatically when sharing?',
                  a: 'iMessage and WhatsApp do compress photos when sent as messages (not as files). Instagram also re-compresses uploads. If you share via AirDrop, email as a file, or save to Files app, the original uncompressed file is used.',
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
