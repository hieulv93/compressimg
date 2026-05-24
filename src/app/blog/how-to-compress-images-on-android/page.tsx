import Link from 'next/link'

export default function CompressImagesOnAndroid() {
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
        <span className="text-text-main">Compress Images on Android</span>
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
            How to Compress Images on Android — Free Methods That Work
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Android phones shoot photos at 12–200 megapixels depending on the camera. The result:
            photos that are 5–25 MB each — too large for email, upload forms, and many websites.
            Here are the fastest free methods to reduce photo size on Android, including a
            browser-based approach that requires zero app installs.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-3">Method 1: Browser-based (No App Required)</h2>
            <ol className="space-y-3 text-sm text-text-muted">
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">1.</span>
                <span>
                  Open <strong className="text-text-main">Chrome</strong> on your Android and go to{' '}
                  <strong className="text-text-main">compressimg.pro</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">2.</span>
                <span>
                  Tap the upload area — select your photo from{' '}
                  <strong className="text-text-main">Gallery</strong> or{' '}
                  <strong className="text-text-main">Files</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">3.</span>
                <span>Adjust the quality slider (default 80 works for most uses)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">4.</span>
                <span>
                  Tap <strong className="text-text-main">Download</strong> — the compressed file
                  saves to your Downloads folder
                </span>
              </li>
            </ol>
            <p className="mt-4 text-xs text-text-muted">
              Works on any Android running Chrome. No sign-in, no install, no upload to any server —
              everything runs inside your browser tab.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Android Photos Are Large</h2>
            <p>
              Android phones from Samsung, Google, and OnePlus now feature 50–200 MP cameras. These
              cameras capture significantly more data than any screen can display — a 200 MP photo
              from a Samsung Galaxy S24 Ultra is 20,000 × 15,000 pixels. For web and email use,
              images only need to be 1,920 × 1,440 pixels at most.
            </p>
            <p className="mt-3">
              The camera also applies minimal compression to preserve editing flexibility. A
              compressed, display-ready version of the same photo is typically 80–95% smaller with
              no visible difference on a phone or monitor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">All Methods Compared</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Method 1: Browser tool (compressimg.pro)',
                  pros: [
                    'No app install',
                    'Quality control with slider',
                    'Works on any Android',
                    'Handles JPEG, PNG, WebP',
                  ],
                  cons: ['Needs internet', 'One image at a time (batch tool available)'],
                  best: 'Best for: email attachments, website uploads, one-off compression',
                },
                {
                  title: 'Method 2: Google Photos — Storage Saver',
                  pros: [
                    'Built-in to most Android phones',
                    'Compresses entire library at once',
                    'Free up to 15 GB (Google One)',
                  ],
                  cons: [
                    'Affects your stored copies permanently',
                    'Less control over output quality',
                    'Requires Google account',
                  ],
                  best: 'Best for: freeing up phone storage, backing up large libraries',
                },
                {
                  title: 'Method 3: Samsung Gallery — Resize feature',
                  pros: [
                    'Built into Samsung phones (One UI)',
                    'Works offline',
                    'No extra app needed',
                  ],
                  cons: [
                    'Samsung only — not available on other Android brands',
                    'Limited quality settings',
                  ],
                  best: 'Best for: Samsung users who need a quick resize',
                },
                {
                  title: 'Method 4: Camera settings — reduce capture resolution',
                  pros: ['Prevents large files at source', 'No extra step per photo'],
                  cons: [
                    'Reduces quality permanently for all photos',
                    'Cannot recover full resolution later',
                  ],
                  best: 'Best for: users who rarely need full resolution',
                },
                {
                  title: 'Method 5: Files by Google app',
                  pros: [
                    'Free from Google',
                    'Can identify large files',
                    'Some compression available',
                  ],
                  cons: [
                    'Limited compression options vs dedicated tools',
                    'Best used for file management',
                  ],
                  best: 'Best for: finding and cleaning up large photo files',
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
            <h2 className="text-2xl font-bold mb-4">Target File Sizes by Use Case</h2>
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
                    { use: 'WhatsApp photo', target: '< 500 KB', quality: '75' },
                    { use: 'Instagram upload', target: '< 2 MB', quality: '85' },
                    {
                      use: 'Government form upload',
                      target: 'Below stated limit',
                      quality: '70–80',
                    },
                    { use: 'Website / blog', target: '< 300 KB', quality: '80' },
                    { use: 'LinkedIn / Facebook', target: '< 1 MB', quality: '80' },
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
            <h2 className="text-2xl font-bold mb-4">How to Use Google Photos Storage Saver</h2>
            <p>
              Google Photos Storage Saver compresses photos to a maximum of 16 MP and applies lossy
              compression. This is a one-time operation that permanently replaces your
              high-resolution copies in Google Photos with compressed versions.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <ol className="space-y-2 text-text-muted">
                <li>
                  1. Open <strong className="text-text-main">Google Photos</strong> on your Android
                </li>
                <li>
                  2. Tap your profile icon →{' '}
                  <strong className="text-text-main">Photos settings</strong>
                </li>
                <li>
                  3. Tap <strong className="text-text-main">Backup</strong> →{' '}
                  <strong className="text-text-main">Backup quality</strong>
                </li>
                <li>
                  4. Select <strong className="text-text-main">Storage saver</strong>
                </li>
                <li>
                  5. To compress existing photos: tap{' '}
                  <strong className="text-text-main">Manage storage</strong> →{' '}
                  <strong className="text-text-main">Compress existing photos</strong>
                </li>
              </ol>
            </div>
            <p className="mt-3 text-sm text-text-muted">
              Note: this affects your Google Photos library, not the originals stored on your
              device. If you have backed up originals elsewhere, this is a safe way to free up
              Google storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy Note</h2>
            <div className="border border-border rounded-xl p-5 text-sm text-text-muted">
              <p>
                When you compress images using the browser tool at compressimg.pro, your photos are
                processed entirely inside your browser using JavaScript. No image data is sent to
                any server — the file never leaves your device. This is safe for sensitive photos
                including ID documents, medical images, and personal photos.
              </p>
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
                — compress up to 5 photos at once
              </li>
              <li>
                <Link href="/resize-image" className="text-primary hover:underline">
                  Resize image
                </Link>{' '}
                — reduce dimensions and file size together
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-primary hover:underline">
                  JPG to WebP
                </Link>{' '}
                — convert to WebP for 25–35% smaller files
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'How do I compress a photo on Android without an app?',
                  a: 'Open Chrome and go to compressimg.pro. Tap the upload area, select your photo from Gallery, adjust quality if needed, and tap Download. Everything runs in your browser — no app install needed.',
                },
                {
                  q: 'How do I reduce photo size on Android for email?',
                  a: 'Compress the photo first using compressimg.pro at quality 80 (targets under 1 MB for typical photos). Then attach the compressed file to your email. Alternatively, in Gmail you can share the photo directly and it may offer a size reduction option.',
                },
                {
                  q: 'Does Google Photos compress photos on Android?',
                  a: 'Yes, if you set backup quality to "Storage saver." This compresses your backed-up photos to 16 MP. Your device originals are not affected unless you explicitly choose to "Compress existing photos" in settings.',
                },
                {
                  q: 'How do I make a photo under 1 MB on Android?',
                  a: 'Upload it to compressimg.pro in Chrome. At quality 80, most phone photos compress to 200–600 KB — well under 1 MB. If the result is still over 1 MB, reduce quality to 70 or use the resize tool to reduce dimensions first.',
                },
                {
                  q: 'Does compressing photos reduce quality on Android?',
                  a: 'At quality 80 (the default), compression removes data that the human eye cannot detect at normal viewing. The result looks identical on a phone screen or standard monitor. Quality below 70 may show artifacts on close inspection.',
                },
                {
                  q: 'How do I compress an image on Samsung?',
                  a: 'Samsung Galaxy phones have a built-in resize option in the Gallery app: open a photo, tap the three-dot menu, and look for Resize or Edit options. For more control, use compressimg.pro in Chrome — it works on all Samsung models.',
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
