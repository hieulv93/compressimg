import Link from 'next/link'

export default function ResizeWebpContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Resize WebP Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WebP is the modern image format developed by Google, supported by all major browsers since
          2020. It produces files 25–35% smaller than JPEG at the same visual quality, and 30–50%
          smaller than PNG for images with transparency. If your CMS, Next.js project, or CDN
          delivers WebP assets, you need to resize them to exact dimensions — and keep them in WebP
          format.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool resizes WebP files and outputs them back as WebP. You keep the compression
          advantage of the format without converting to a heavier JPG or PNG in the middle of your
          workflow.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common WebP Resize Use Cases</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Next.js and React projects',
              desc: 'Next.js Image component serves WebP automatically, but source assets must be the correct dimensions. Resize your WebP images to match the layout breakpoints defined in your component.',
            },
            {
              title: 'CMS and WordPress uploads',
              desc: 'WordPress 5.8+ generates WebP variants from uploads. Uploading a pre-sized WebP gives you control over the exact dimensions and avoids server-side resampling quality loss.',
            },
            {
              title: 'Shopify and e-commerce',
              desc: 'Shopify serves WebP automatically via their CDN. Pre-resizing product images to 2048×2048px as WebP before uploading ensures maximum quality at minimum file size.',
            },
            {
              title: 'Social media and Open Graph',
              desc: 'Twitter, LinkedIn, and Facebook read Open Graph images at 1200×630px. Resize WebP images to these dimensions for social previews that load fast and display sharply.',
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
        <h2 className="text-xl font-bold text-text-main">WebP vs JPG vs PNG — Size Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Format</th>
                <th className="text-left p-3 border border-border font-semibold">Compression</th>
                <th className="text-left p-3 border border-border font-semibold">Transparency</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Typical size (1200×630)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { fmt: 'JPG', comp: 'Lossy', trans: 'No', size: '150–300 KB' },
                { fmt: 'PNG', comp: 'Lossless', trans: 'Yes', size: '400–900 KB' },
                { fmt: 'WebP (lossy)', comp: 'Lossy', trans: 'No', size: '80–180 KB' },
                { fmt: 'WebP (lossless)', comp: 'Lossless', trans: 'Yes', size: '250–600 KB' },
                { fmt: 'AVIF', comp: 'Lossy', trans: 'No', size: '50–120 KB' },
              ].map(({ fmt, comp, trans, size }, i) => (
                <tr key={fmt} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{fmt}</td>
                  <td className="p-3 border border-border text-text-muted">{comp}</td>
                  <td className="p-3 border border-border text-text-muted">{trans}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
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
            <Link href="/jpg-to-webp" className="text-primary hover:underline">
              JPG to WebP
            </Link>{' '}
            — convert JPEG to WebP for smaller file sizes
          </li>
          <li>
            <Link href="/png-to-webp" className="text-primary hover:underline">
              PNG to WebP
            </Link>{' '}
            — convert PNG to WebP with transparency support
          </li>
          <li>
            <Link href="/webp-to-jpg" className="text-primary hover:underline">
              WebP to JPG
            </Link>{' '}
            — convert WebP to JPG for broader compatibility
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image
            </Link>{' '}
            — reduce WebP file size further after resizing
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Does the output stay in WebP format after resizing?',
              a: 'Yes. When you upload a WebP file, the tool outputs a resized WebP. The format is preserved, so you keep the compression benefits.',
            },
            {
              q: 'Is WebP supported in all browsers?',
              a: 'Yes. WebP is supported in Chrome (since 2014), Firefox (since 2019), Safari (since 2020), and Edge (since 2018). As of 2024, browser support is effectively 95%+ globally. It is safe to use WebP for all public-facing web images.',
            },
            {
              q: 'How do I resize a WebP for a WordPress featured image?',
              a: "WordPress typically uses featured images at 1200×628px for social sharing and 1200×900px for full-width layouts. Resize your WebP to match your theme's recommended dimensions. WordPress 5.8+ will serve your pre-sized WebP without re-encoding it.",
            },
            {
              q: 'Can I resize a WebP with transparency?',
              a: 'Yes. The Canvas API supports transparent WebP (lossless WebP). Upload your transparent WebP, resize it, and download — transparency is preserved in the output.',
            },
            {
              q: 'Should I use WebP or AVIF for web images?',
              a: 'WebP offers 25–35% smaller files than JPG with near-universal browser support. AVIF is 40–50% smaller than JPG but has more limited browser support (Chrome 85+, Firefox 93+, Safari 16.4+). For maximum compatibility, WebP is the safer choice today.',
            },
            {
              q: 'Are my WebP files uploaded to a server?',
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
