import Link from 'next/link'

export default function ResizeQualityContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does Resizing an Image Reduce Quality?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          It depends on the direction. <strong className="text-text-main">Downscaling</strong>{' '}
          (making an image smaller) preserves quality well — the algorithm averages existing pixels
          to produce a smaller, sharp result. A 4000×3000 photo downscaled to 1920×1440 is visually
          indistinguishable from the original at normal viewing sizes.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">Upscaling</strong> (making an image larger) always
          introduces some softness — the algorithm must invent new pixels where none exist. The
          result looks acceptable up to about 1.5–2× the original size. Beyond that, use an AI
          upscaler for better results.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize With Maximum Quality — Best Settings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Setting</th>
                <th className="text-left p-3 border border-border font-semibold">Recommendation</th>
                <th className="text-left p-3 border border-border font-semibold">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  setting: 'Aspect ratio',
                  rec: 'Always lock',
                  why: 'Prevents distortion — stretched images look lower quality',
                },
                {
                  setting: 'Output format',
                  rec: 'PNG for graphics, JPEG for photos',
                  why: 'PNG is lossless — zero quality loss. JPEG applies compression on export.',
                },
                {
                  setting: 'JPEG quality',
                  rec: '85–90 for resized photos',
                  why: 'Higher quality setting compensates for the re-compression during export',
                },
                {
                  setting: 'Downscale amount',
                  rec: 'Reduce by 50% max per step',
                  why: 'Extreme reductions (>80%) can lose fine detail in single pass',
                },
                {
                  setting: 'Start from original',
                  rec: 'Always resize from original source',
                  why: 'Re-resizing a compressed copy stacks quality loss',
                },
              ].map(({ setting, rec, why }, i) => (
                <tr key={setting} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{setting}</td>
                  <td className="p-3 border border-border text-green-600 font-medium">{rec}</td>
                  <td className="p-3 border border-border text-text-muted">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Resize vs Compress — Which One?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Both methods reduce file size, but they work differently and suit different situations.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Resize (change dimensions)</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Image is too large for its display context</li>
              <li>Source is 4000px but displayed at 1200px</li>
              <li>Printing at a specific physical size</li>
              <li>Platform requires maximum pixel dimensions</li>
            </ul>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">
              <Link href="/compress-image" className="text-primary hover:underline">
                Compress
              </Link>{' '}
              (reduce quality/file size)
            </p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Display size is correct but file is too large</li>
              <li>Need specific KB target (50KB, 100KB)</li>
              <li>Social media upload size limit</li>
              <li>Email attachment limit</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Recommended Sizes for Common Uses</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Use case</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Target dimensions
                </th>
                <th className="text-left p-3 border border-border font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  use: 'Website hero image',
                  dims: '1920 × 800 px',
                  note: 'Max display width on desktop',
                },
                {
                  use: 'Blog inline image',
                  dims: '1200 × 800 px',
                  note: 'Column width on most blogs',
                },
                {
                  use: 'Instagram post',
                  dims: '1080 × 1080 px',
                  note: '1:1 square, highest quality',
                },
                {
                  use: 'Email attachment',
                  dims: '1024 × 768 px',
                  note: 'Safe for all email clients',
                },
                {
                  use: 'Product photo (Shopify)',
                  dims: '2048 × 2048 px',
                  note: 'Max Shopify displays for zoom',
                },
                { use: 'Thumbnail', dims: '400 × 300 px', note: 'Blog/YouTube preview' },
              ].map(({ use, dims, note }, i) => (
                <tr key={use} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border">{use}</td>
                  <td className="p-3 border border-border font-mono text-primary font-medium">
                    {dims}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Format Guide for Best Quality</h2>
        <div className="space-y-3 text-sm">
          {[
            {
              format: 'PNG',
              quality: 'Lossless',
              best: 'Screenshots, logos, graphics, icons',
              note: 'Zero quality loss on resize. Larger file size than JPEG for photos.',
            },
            {
              format: 'JPEG',
              quality: 'Lossy (set 85–90)',
              best: 'Photographs, product photos, portraits',
              note: 'Minor quality reduction on each save. Start from original, export once at final quality.',
            },
            {
              format: 'WebP',
              quality: 'Lossy or lossless',
              best: 'Web images where file size matters',
              note: '25–35% smaller than JPEG at same quality. Use for websites. Not all platforms accept WebP.',
            },
          ].map(({ format, quality, best, note }) => (
            <div key={format} className="border border-border rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono font-bold text-primary">{format}</span>
                <span className="text-xs bg-surface border border-border px-2 py-0.5 rounded">
                  {quality}
                </span>
              </div>
              <p className="text-text-muted">
                <strong className="text-text-main">Best for:</strong> {best}
              </p>
              <p className="text-text-muted mt-1">{note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce file size at same dimensions (quality slider)
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize image
            </Link>{' '}
            — full resize tool with presets for Instagram, YouTube, and more
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
            — resize to an exact KB target (50KB, 100KB, 200KB)
          </li>
          <li>
            <Link href="/jpg-to-webp" className="text-primary hover:underline">
              JPG to WebP
            </Link>{' '}
            — convert to WebP for 25–35% smaller files at same quality
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Can I resize an image without losing quality?',
              a: 'Downscaling (reducing size) preserves quality very well — the algorithm averages existing pixels to produce sharp results. Upscaling (increasing size) always introduces some softness. For enlarging beyond 2×, use an AI upscaler.',
            },
            {
              q: 'What is the best format for resizing without losing quality?',
              a: 'PNG is lossless — resizing a PNG file produces no quality degradation whatsoever. JPEG applies compression on each export, introducing minor quality loss. Always start from the original source file.',
            },
            {
              q: 'Does locking the aspect ratio preserve quality?',
              a: 'Locking the aspect ratio prevents distortion, which is a form of quality loss. When you stretch an image to non-proportional dimensions, the result looks warped. Lock aspect ratio for all resizes unless you specifically need a custom crop.',
            },
            {
              q: 'How much can I downscale without visible quality loss?',
              a: 'Reducing dimensions by up to 75% (e.g., 4000px → 1000px) produces excellent results with modern downscaling algorithms. The output is sharp because more source pixels contribute to each output pixel.',
            },
            {
              q: 'Will resizing reduce the file size?',
              a: 'Yes. Smaller dimensions mean fewer pixels, which directly reduces file size. A 4000×3000 image at 80% JPEG quality may be 3MB. The same image at 1920×1440 is typically 400–600KB — an 80% reduction.',
            },
            {
              q: 'Are my images uploaded to a server when resizing?',
              a: 'No. All resizing happens 100% in your browser using the HTML5 Canvas API. Your images never leave your device and are never transmitted to any server.',
            },
            {
              q: 'Can I resize a HEIC photo without losing quality?',
              a: 'Yes. Upload the HEIC file — the tool automatically converts it to JPEG in your browser before resizing. The conversion is a one-time operation from the original HEIC data.',
            },
            {
              q: 'What is the maximum size I can resize to?',
              a: 'The maximum output dimension is 8000×8000 pixels. There is no minimum — you can resize as small as 1×1 pixels.',
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
