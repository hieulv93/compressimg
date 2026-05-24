import Link from 'next/link'

export default function BmpToPngContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert BMP to PNG?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          BMP (Bitmap) is an uncompressed format — it stores every pixel with no compression
          whatsoever. A single BMP photo can be 10–30MB, which is impractical for web use, email, or
          sharing. PNG uses lossless compression that typically reduces BMP file size by 60–80% with
          zero quality loss. The image looks identical but takes a fraction of the storage.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          BMP is also poorly supported on the web — most browsers display BMP files, but many
          platforms, CMS tools, and image editors require PNG. Converting ensures your file works
          everywhere while preserving full quality and any transparency in the image.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">BMP vs PNG — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Feature</th>
                <th className="text-left p-3 border border-border font-semibold">BMP</th>
                <th className="text-left p-3 border border-border font-semibold">PNG</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Compression', bmp: 'None (raw pixel data)', png: 'Lossless (DEFLATE)' },
                {
                  feature: 'File size',
                  bmp: 'Very large (3MP = ~9MB)',
                  png: 'Moderate (3MP = 1–3MB)',
                },
                { feature: 'Quality', bmp: 'Lossless', png: 'Lossless (identical)' },
                {
                  feature: 'Transparency',
                  bmp: 'Limited (32-bit BMP only)',
                  png: 'Full alpha channel',
                },
                { feature: 'Web support', bmp: 'Poor — not used on web', png: 'Universal' },
                {
                  feature: 'Platform support',
                  bmp: 'Windows Paint, limited',
                  png: 'All platforms and tools',
                },
                { feature: 'Color depth', bmp: 'Up to 32-bit', png: 'Up to 48-bit' },
              ].map(({ feature, bmp, png }, i) => (
                <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{feature}</td>
                  <td className="p-3 border border-border text-text-muted">{bmp}</td>
                  <td className="p-3 border border-border text-text-muted">{png}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Sources of BMP Files</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Windows Paint',
              desc: 'Microsoft Paint saves as BMP by default. Convert to PNG for sharing or web use without resaving in Paint.',
            },
            {
              title: 'Screenshots on Windows (older)',
              desc: 'Older Windows versions saved screenshots as BMP. Windows 10+ uses PNG, but you may still encounter BMP screenshots.',
            },
            {
              title: 'Industrial and scientific equipment',
              desc: 'Some cameras, scanners, and scientific instruments output BMP for compatibility with legacy software.',
            },
            {
              title: 'Legacy applications',
              desc: 'Older CAD programs, point-of-sale systems, and document management software sometimes produce BMP files.',
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
          BMP to PNG vs BMP to JPG — Which to Choose?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Convert BMP to PNG when:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Image has text, logos, or sharp edges</li>
              <li>Image has transparency or needs it</li>
              <li>You need lossless quality for further editing</li>
              <li>The image is a screenshot or UI graphic</li>
              <li>You will edit and re-save the file multiple times</li>
            </ul>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Convert BMP to JPG instead when:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Image is a photograph</li>
              <li>File size must be as small as possible</li>
              <li>Transparency is not needed</li>
              <li>Uploading to social media or email</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/bmp-to-jpg" className="text-primary hover:underline">
              BMP to JPG
            </Link>{' '}
            — convert BMP to JPEG for photos and social media
          </li>
          <li>
            <Link href="/png-to-jpg" className="text-primary hover:underline">
              PNG to JPG
            </Link>{' '}
            — convert PNG to JPEG for smaller file size
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce PNG file size further after conversion
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize image
            </Link>{' '}
            — resize the PNG to specific dimensions
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Does converting BMP to PNG lose quality?',
              a: 'No. Both BMP and PNG are lossless formats. The conversion preserves every pixel exactly — no quality loss whatsoever. The only change is that the file is smaller due to PNG compression.',
            },
            {
              q: 'How much smaller will my PNG be compared to the BMP?',
              a: 'Typically 60–80% smaller. A 10MB BMP often converts to a 1–3MB PNG. Images with simple colors or large uniform areas compress more. Complex photographic images compress less. The exact result depends on the content.',
            },
            {
              q: 'Can I convert a BMP with transparency to PNG?',
              a: 'Yes. If your BMP file is 32-bit with an alpha channel, the transparency is preserved in the PNG output. Standard 24-bit BMP files without transparency also convert correctly to PNG.',
            },
            {
              q: 'Why does Windows Paint save as BMP by default?',
              a: "BMP is Microsoft's native format, so Paint has always defaulted to it. To save as PNG in Paint, click File → Save As → PNG. Alternatively, use this tool to convert BMP files you already have to PNG.",
            },
            {
              q: 'Can I open the converted PNG in Photoshop, Figma, or Canva?',
              a: 'Yes. PNG is universally supported in all design tools and image editors — Photoshop, Lightroom, Figma, Sketch, Canva, GIMP, Affinity Photo, and all others accept PNG without any plugins.',
            },
            {
              q: 'Are my BMP files uploaded to a server?',
              a: 'No. All conversion happens in your browser using the HTML5 Canvas API. Your BMP files are never sent to any server — they stay on your device throughout the entire process.',
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
