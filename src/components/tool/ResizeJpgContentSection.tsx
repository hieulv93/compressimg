import Link from 'next/link'

export default function ResizeJpgContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Resize a JPG</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPEG is the most common photo format — produced by every smartphone, digital camera, and
          scanner. Resizing a JPG reduces its pixel dimensions, which directly reduces file size and
          makes it compatible with upload limits, email attachments, and responsive web layouts.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Unlike compression (which reduces quality), resizing changes the actual canvas size. A
          4032×3024px photo from a 12MP smartphone can be resized to 1200×900px for web use —
          reducing file size from 3–5MB to 200–500KB without a perceptible quality drop at screen
          resolution.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common JPG Resize Targets</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Web and blog images',
              desc: '1200–1920px wide covers most desktop displays. Resizing a smartphone photo to 1200px wide reduces file size by 80–90% and speeds up page load time significantly.',
            },
            {
              title: 'Email attachments',
              desc: 'Most email providers warn at 25MB and reject over 50MB. Resizing photos to 1024px wide produces files under 500KB — readable in any email client without slow load times.',
            },
            {
              title: 'Social media profiles',
              desc: 'Profile photos for LinkedIn (400×400), Twitter (400×400), and Facebook (320×320 min) require specific dimensions. Resize your headshot to the exact size for sharpest display.',
            },
            {
              title: 'E-commerce product images',
              desc: 'Shopify, WooCommerce, and Etsy recommend square product images at 2048×2048px maximum. Resize all product photos to a consistent dimension for a uniform catalog grid.',
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
        <h2 className="text-xl font-bold text-text-main">JPG File Size at Common Dimensions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Dimensions</th>
                <th className="text-left p-3 border border-border font-semibold">Megapixels</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Typical JPG size
                </th>
                <th className="text-left p-3 border border-border font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dim: '4032×3024',
                  mp: '12MP',
                  size: '3–5 MB',
                  use: 'Smartphone original',
                },
                {
                  dim: '1920×1080',
                  mp: '2.1MP',
                  size: '400–800 KB',
                  use: 'Full HD wallpaper, web hero',
                },
                {
                  dim: '1280×720',
                  mp: '0.9MP',
                  size: '200–400 KB',
                  use: 'YouTube thumbnail, banner',
                },
                {
                  dim: '800×600',
                  mp: '0.5MP',
                  size: '100–200 KB',
                  use: 'Email, legacy upload forms',
                },
                { dim: '400×400', mp: '0.16MP', size: '30–80 KB', use: 'Profile picture, avatar' },
                {
                  dim: '150×150',
                  mp: '0.02MP',
                  size: '5–20 KB',
                  use: 'Thumbnail, favicon context',
                },
              ].map(({ dim, mp, size, use }, i) => (
                <tr key={dim} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{dim}</td>
                  <td className="p-3 border border-border text-text-muted">{mp}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image
            </Link>{' '}
            — resize any format to custom dimensions
          </li>
          <li>
            <Link href="/compress-jpg-online" className="text-primary hover:underline">
              Compress JPG Online
            </Link>{' '}
            — reduce JPG file size without resizing
          </li>
          <li>
            <Link href="/resize-image-in-kb" className="text-primary hover:underline">
              Resize Image in KB
            </Link>{' '}
            — resize to an exact file size (e.g., under 100KB)
          </li>
          <li>
            <Link href="/jpg-to-webp" className="text-primary hover:underline">
              JPG to WebP
            </Link>{' '}
            — convert JPEG to WebP for smaller web files
          </li>
          <li>
            <Link href="/resize-images" className="text-primary hover:underline">
              Batch Resize Images
            </Link>{' '}
            — resize multiple JPGs at once
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Does resizing a JPG reduce image quality?',
              a: 'Downscaling a JPG (making it smaller) does not visibly reduce quality — the image contains more pixel data than the target size needs. Upscaling (making it larger) always reduces sharpness because pixels are interpolated. Always downscale from a larger original.',
            },
            {
              q: 'What is the output format after resizing?',
              a: 'When you upload a JPG file, the output is JPEG at 92% quality. This setting produces a sharp image with a small file size — identical to what most image editors use as their default.',
            },
            {
              q: 'How do I resize a JPG to a specific file size like 100KB?',
              a: 'First resize to your target pixel dimensions here, then use the Resize Image in KB tool if the file size still exceeds the limit. Reducing pixel dimensions reduces file size proportionally — a 50% reduction in width/height produces a file about 25% the original size.',
            },
            {
              q: 'Can I resize a JPEG from my iPhone?',
              a: 'Yes. iPhones save photos in HEIC format by default. This tool automatically converts HEIC to JPEG before resizing, so you can upload iPhone photos directly.',
            },
            {
              q: 'What pixel dimensions should I use for a website banner?',
              a: 'Full-width website banners are typically 1920px wide. Section banners and hero images are commonly 1200–1600px wide. Always check your CMS or theme documentation for exact recommended dimensions.',
            },
            {
              q: 'Are my JPG files uploaded to a server?',
              a: 'No. All resizing happens entirely in your browser using the Canvas API. Your files are never sent to any server.',
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
