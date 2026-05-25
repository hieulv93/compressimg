import Link from 'next/link'

export default function ResizePngContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Resize PNG Instead of Converting to JPG?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG uses lossless compression — every pixel is stored exactly, with no quality reduction.
          This makes PNG the right format for images with transparency (logos, icons, cutouts),
          sharp edges (text, screenshots, diagrams), and graphics where color accuracy matters.
          Converting these to JPG would introduce compression artifacts around edges and destroy
          transparency.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          When you resize a PNG, the canvas dimensions shrink but the format stays lossless. A
          1000×1000px logo resized to 400×400px stays sharp, keeps its transparent background, and
          produces a smaller file without any quality loss.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Use PNG for Resized Images</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Logos and brand assets',
              desc: 'Logos need transparent backgrounds to sit cleanly on any color. PNG preserves transparency after resizing — the logo downloads at the new size with the alpha channel intact.',
            },
            {
              title: 'UI icons and app assets',
              desc: 'Mobile apps and web apps require icons at multiple sizes (16px, 32px, 64px, 128px, 512px). Resize your master PNG icon to each required size for the app store or web manifest.',
            },
            {
              title: 'Screenshots with text',
              desc: 'Screenshots of software, websites, or documents contain sharp text edges. PNG preserves this sharpness at any size — JPG would blur the text and make it hard to read.',
            },
            {
              title: 'Digital art and illustrations',
              desc: 'Flat-color illustrations, pixel art, and hand-drawn graphics look best in PNG. The lossless format preserves color accuracy and sharp transitions that JPG compression would smear.',
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
        <h2 className="text-xl font-bold text-text-main">PNG vs JPG — Which Format to Use?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Property</th>
                <th className="text-left p-3 border border-border font-semibold">PNG</th>
                <th className="text-left p-3 border border-border font-semibold">JPG</th>
              </tr>
            </thead>
            <tbody>
              {[
                { prop: 'Compression', png: 'Lossless', jpg: 'Lossy' },
                { prop: 'Transparency', png: '✓ Yes (alpha channel)', jpg: '✗ No' },
                { prop: 'Best for', png: 'Logos, icons, text, art', jpg: 'Photos, gradients' },
                { prop: 'File size (photos)', png: 'Large (3–10×)', jpg: 'Small' },
                {
                  prop: 'File size (logos/icons)',
                  png: 'Small–medium',
                  jpg: 'Larger with artifacts',
                },
                { prop: 'Edge sharpness', png: 'Perfect', jpg: 'Slight blur at edges' },
                { prop: 'Browser support', png: '100%', jpg: '100%' },
              ].map(({ prop, png, jpg }, i) => (
                <tr key={prop} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{prop}</td>
                  <td className="p-3 border border-border text-text-muted">{png}</td>
                  <td className="p-3 border border-border text-text-muted">{jpg}</td>
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
            <Link href="/compress-png-online" className="text-primary hover:underline">
              Compress PNG Online
            </Link>{' '}
            — reduce PNG file size without resizing
          </li>
          <li>
            <Link href="/png-to-webp" className="text-primary hover:underline">
              PNG to WebP
            </Link>{' '}
            — convert PNG to WebP for smaller web files with transparency
          </li>
          <li>
            <Link href="/png-to-jpg" className="text-primary hover:underline">
              PNG to JPG
            </Link>{' '}
            — convert PNG to JPG when transparency is not needed
          </li>
          <li>
            <Link href="/crop-image-circle" className="text-primary hover:underline">
              Crop to Circle
            </Link>{' '}
            — create circular PNG with transparent background
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Does resizing a PNG keep the transparent background?',
              a: 'Yes. The tool outputs a PNG with the alpha channel (transparency) fully preserved. Logos, icons, and cutout images retain their transparent areas at the new pixel dimensions.',
            },
            {
              q: 'Why is my resized PNG still a large file?',
              a: 'PNG uses lossless compression, so file size depends on content complexity. Photos and gradients stored as PNG are large because every pixel is encoded precisely. Try using the Compress PNG tool after resizing, or convert to WebP which achieves 30–50% smaller files with the same visual quality.',
            },
            {
              q: 'Can I resize a PNG without losing the transparent areas?',
              a: 'Yes. This tool uses the browser Canvas API with PNG output, which supports the full alpha channel. Unlike some tools that add a white background, this tool keeps all transparent areas transparent in the resized output.',
            },
            {
              q: 'How do I resize a PNG logo for a website?',
              a: 'Common web logo sizes are 200–300px wide for headers and 1000–2000px wide for retina-ready display (with CSS max-width constraining it). For favicons, resize to 512×512 and use our PNG to ICO converter to create the .ico file.',
            },
            {
              q: 'Is PNG or WebP better for resized web images?',
              a: 'WebP with transparency (lossless WebP) is typically 25% smaller than PNG at the same quality. If your target browsers support WebP (all modern browsers do), convert to WebP after resizing. Use PNG when you need 100% compatibility with older browsers or email clients.',
            },
            {
              q: 'Are my PNG files uploaded to a server?',
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
