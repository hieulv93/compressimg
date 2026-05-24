import Link from 'next/link'

export default function MakeImageSmallerContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Two Ways to Make an Image Smaller</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          There are two distinct methods for reducing image file size. They work differently and
          suit different situations — choosing the right one determines whether you lose quality or
          not.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">
              Method 1: Resize (reduce dimensions)
            </p>
            <p className="text-text-muted mb-3">
              Shrinks the image to fewer pixels. A 4000×3000 image resized to 1200×900 has 90% fewer
              pixels — file size drops proportionally.
            </p>
            <p className="text-text-muted">
              <strong className="text-text-main">Best when:</strong> the image is displayed at a
              smaller size than its actual dimensions (e.g., a 4000px photo shown in a 1200px
              column).
            </p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Method 2: Compress (reduce quality)</p>
            <p className="text-text-muted mb-3">
              Keeps the same pixel dimensions but applies more aggressive JPEG compression. A
              1200×900 photo at quality 60 vs quality 95 can differ by 4–8× in file size.
            </p>
            <p className="text-text-muted">
              <strong className="text-text-main">Best when:</strong> the image dimensions are
              already correct but the file is too large for upload, email, or web.
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool does both simultaneously — resize to target dimensions and export at optimized
          quality. For compression-only (same dimensions, smaller file), use the{' '}
          <Link href="/compress-image" className="text-primary hover:underline">
            compress image tool
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Target File Sizes by Use Case</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Different platforms have different requirements. Use these targets when deciding how small
          to make your image:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Use case</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Target file size
                </th>
                <th className="text-left p-3 border border-border font-semibold">
                  Target dimensions
                </th>
                <th className="text-left p-3 border border-border font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  use: 'Email attachment',
                  size: '< 1 MB',
                  dims: '1024 × 768 px',
                  note: 'Safe limit for most email clients',
                },
                {
                  use: 'Web / blog image',
                  size: '< 200 KB',
                  dims: '1200 × 800 px',
                  note: 'Keeps page load under 2s',
                },
                {
                  use: 'Instagram post',
                  size: '< 8 MB',
                  dims: '1080 × 1080 px',
                  note: 'Instagram recompresses on upload',
                },
                {
                  use: 'WhatsApp / Telegram',
                  size: '< 5 MB',
                  dims: '1280 px long edge',
                  note: 'Avoids auto-downgrade on send',
                },
                {
                  use: 'Online form / application',
                  size: '< 500 KB',
                  dims: '800 × 600 px',
                  note: 'Government and university portals',
                },
                {
                  use: 'Shopify product photo',
                  size: '< 500 KB',
                  dims: '2048 × 2048 px',
                  note: 'Max Shopify uses for zoom view',
                },
                {
                  use: 'LinkedIn post',
                  size: '< 5 MB',
                  dims: '1200 × 627 px',
                  note: 'Feed post optimal aspect ratio',
                },
                {
                  use: 'Slack / Teams preview',
                  size: '< 500 KB',
                  dims: '800 × 600 px',
                  note: 'Inline preview renders at ~400px wide',
                },
              ].map(({ use, size, dims, note }, i) => (
                <tr key={use} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{use}</td>
                  <td className="p-3 border border-border text-primary font-medium font-mono">
                    {size}
                  </td>
                  <td className="p-3 border border-border text-text-muted font-mono">{dims}</td>
                  <td className="p-3 border border-border text-text-muted">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How Much Smaller Does Resizing Make a File?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          File size scales roughly with the number of pixels. Reducing width and height by half
          produces about ¼ the number of pixels — and roughly ¼ the file size.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Original</th>
                <th className="text-left p-3 border border-border font-semibold">Resized to</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Pixel reduction
                </th>
                <th className="text-left p-3 border border-border font-semibold">
                  Typical file size (JPEG)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  orig: '4000 × 3000 px',
                  to: '2000 × 1500 px',
                  pct: '75% fewer pixels',
                  size: '4 MB → ~800 KB',
                },
                {
                  orig: '4000 × 3000 px',
                  to: '1920 × 1440 px',
                  pct: '77% fewer pixels',
                  size: '4 MB → ~700 KB',
                },
                {
                  orig: '4000 × 3000 px',
                  to: '1200 × 900 px',
                  pct: '91% fewer pixels',
                  size: '4 MB → ~250 KB',
                },
                {
                  orig: '1920 × 1080 px',
                  to: '1280 × 720 px',
                  pct: '56% fewer pixels',
                  size: '1.5 MB → ~450 KB',
                },
                {
                  orig: '1920 × 1080 px',
                  to: '800 × 450 px',
                  pct: '83% fewer pixels',
                  size: '1.5 MB → ~120 KB',
                },
              ].map(({ orig, to, pct, size }, i) => (
                <tr key={orig + to} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-mono text-text-main">{orig}</td>
                  <td className="p-3 border border-border font-mono text-primary">{to}</td>
                  <td className="p-3 border border-border text-text-muted">{pct}</td>
                  <td className="p-3 border border-border font-medium text-green-600">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Actual file sizes vary by image content — photos with many details compress less than
          simple graphics. The JPEG quality setting also has a large effect on the final size.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Reasons to Make Images Smaller</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Email size limits',
              desc: 'Most email services reject attachments over 25 MB. Even within limits, large photos slow inbox loading. Keep email photos under 1 MB.',
            },
            {
              title: 'Slow page load speed',
              desc: 'Oversized images are the #1 cause of slow websites. A 4 MB hero image delays LCP and hurts Google ranking. Target under 200 KB for web images.',
            },
            {
              title: 'Online form upload limits',
              desc: 'Government portals, university applications, and job sites often cap uploads at 200–500 KB. Resize and compress before submitting.',
            },
            {
              title: 'Storage and backup',
              desc: 'A folder of 3000 phone photos at 5 MB each = 15 GB. Resizing to 1920px long edge reduces that to 2–3 GB without noticeable quality loss.',
            },
            {
              title: 'Messaging apps',
              desc: 'WhatsApp, Telegram, and Slack auto-compress large images on send, often producing worse results than compressing yourself first.',
            },
            {
              title: 'Social media upload speed',
              desc: 'Uploading a 10 MB photo to Instagram takes 10× longer than a 1 MB image on mobile data. Smaller files upload faster and start processing sooner.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4">
              <p className="font-semibold text-text-main mb-1">{title}</p>
              <p className="text-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Best Settings for Making Images Smaller
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <strong className="text-text-main">Set width to match display size</strong> — Find out
            where the image will be displayed. A 1200px column does not benefit from a 4000px image.
            Match dimensions to the display context.
          </li>
          <li>
            <strong className="text-text-main">Lock aspect ratio</strong> — Always reduce width and
            height proportionally to avoid stretching or squashing the image.
          </li>
          <li>
            <strong className="text-text-main">Use JPEG for photos</strong> — JPEG compresses
            photographic content far more efficiently than PNG. A photo saved as PNG is 3–5× larger
            than the JPEG equivalent at the same quality.
          </li>
          <li>
            <strong className="text-text-main">JPEG quality 75–85 for web</strong> — Quality 80 is
            the standard for web images. It reduces file size by 60–70% versus quality 95 with
            minimal visible difference.
          </li>
          <li>
            <strong className="text-text-main">Use PNG for screenshots and graphics</strong> — PNG
            is lossless, so screenshots and UI graphics stay sharp. For these file types, resize
            dimensions rather than lowering quality.
          </li>
          <li>
            <strong className="text-text-main">Start from the original file</strong> —
            Re-compressing a JPEG that was already compressed stacks quality loss. Always resize
            from the original source.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce file size at same dimensions with quality slider
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize image
            </Link>{' '}
            — full resize tool with presets for Instagram, LinkedIn, YouTube, and more
          </li>
          <li>
            <Link href="/resize-images" className="text-primary hover:underline">
              Batch resize images
            </Link>{' '}
            — resize up to 10 images at once, download as ZIP
          </li>
          <li>
            <Link href="/resize-image-in-kb" className="text-primary hover:underline">
              Resize image in KB
            </Link>{' '}
            — make an image hit a specific file size target (50KB, 100KB, 200KB)
          </li>
          <li>
            <Link href="/compress-image-to-100kb" className="text-primary hover:underline">
              Compress image to 100KB
            </Link>{' '}
            — target exactly 100KB for form and passport uploads
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What is the fastest way to make an image smaller?',
              a: 'Upload the image, set your target width (e.g., 1200px for web, 800px for email), and click download. The tool resizes and compresses in one step entirely in your browser — no upload to a server.',
            },
            {
              q: 'Will making an image smaller reduce quality?',
              a: 'Downscaling (reducing dimensions) preserves quality well — the algorithm averages existing pixels to produce a sharp smaller image. Lowering JPEG quality below 70 can introduce visible compression artifacts. For most uses, quality 80 at reduced dimensions is invisible from the original.',
            },
            {
              q: 'How do I make an image smaller for email?',
              a: 'Set width to 1024px and export as JPEG at quality 80. This typically produces files under 300 KB — well within the safe limit for email attachments. For very strict limits (under 100 KB), reduce width to 800px.',
            },
            {
              q: 'How do I make an image smaller for an online form?',
              a: 'Most forms specify a maximum file size (e.g., 500 KB) and sometimes maximum dimensions. Set the width to 800–1000px and export as JPEG at quality 80. Check the form requirements for exact limits.',
            },
            {
              q: 'Does making an image smaller change its aspect ratio?',
              a: 'No — this tool locks the aspect ratio by default. If you enter a width, the height adjusts automatically to keep proportions. You can unlock and enter custom dimensions if you need a specific crop.',
            },
            {
              q: 'Can I make a PNG image smaller without converting to JPEG?',
              a: 'Yes. Select PNG as the output format. PNG is lossless, so quality does not degrade. File size reduction comes from reducing pixel dimensions. Note that PNG files are significantly larger than JPEG for photographic content — convert to JPEG for photos.',
            },
            {
              q: 'What is the difference between making an image smaller and compressing it?',
              a: 'Making an image smaller (resizing) reduces the pixel dimensions — fewer pixels means a smaller file. Compressing reduces the quality encoding at the same dimensions. This tool does both: resize to target dimensions and compress on export. For compression only (same size), use the compress image tool.',
            },
            {
              q: 'Are my images uploaded to a server when I make them smaller?',
              a: 'No. All processing happens 100% in your browser. Your images never leave your device and are never transmitted to any server.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="border border-border rounded-xl p-4 group">
              <summary className="font-semibold text-sm text-text-main cursor-pointer list-none flex items-center justify-between gap-2">
                {q}
                <span className="text-text-muted text-xs flex-shrink-0 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-text-muted text-sm leading-relaxed mt-3">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
