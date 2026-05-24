import Link from 'next/link'

export default function AvifToPngContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert AVIF to PNG?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          AVIF is one of the most efficient image formats available, but it is not yet supported in
          all software. Older image editors, email clients, and some platforms cannot open AVIF
          files. PNG is universally supported — every image editor, browser, operating system, and
          platform accepts PNG without any plugins or updates.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Choose PNG over JPG when transparency matters. PNG preserves the alpha channel from your
          AVIF file — logos, UI elements, and graphics with transparent backgrounds convert cleanly.
          PNG uses lossless compression, so every pixel is preserved exactly.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">AVIF vs PNG — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Feature</th>
                <th className="text-left p-3 border border-border font-semibold">AVIF</th>
                <th className="text-left p-3 border border-border font-semibold">PNG</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: 'Compression',
                  avif: 'Lossy or lossless (AV1)',
                  png: 'Lossless only (DEFLATE)',
                },
                {
                  feature: 'File size',
                  avif: 'Very small (50% smaller than JPEG)',
                  png: 'Large (2–5× larger than AVIF)',
                },
                {
                  feature: 'Transparency',
                  avif: 'Yes (alpha channel)',
                  png: 'Yes (alpha channel)',
                },
                {
                  feature: 'Browser support',
                  avif: 'Chrome 85+, Firefox 93+, Safari 16+',
                  png: 'All browsers (universal)',
                },
                {
                  feature: 'Software support',
                  avif: 'Limited — newer tools only',
                  png: 'Universal — all editors/platforms',
                },
                {
                  feature: 'Quality',
                  avif: 'Near-lossless at small sizes',
                  png: 'Perfect lossless quality',
                },
                {
                  feature: 'Best use',
                  avif: 'Web delivery, modern platforms',
                  png: 'Design, editing, logos, icons',
                },
              ].map(({ feature, avif, png }, i) => (
                <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{feature}</td>
                  <td className="p-3 border border-border text-text-muted">{avif}</td>
                  <td className="p-3 border border-border text-text-muted">{png}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Use AVIF vs PNG</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Keep as AVIF when:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Delivering images on a modern website</li>
              <li>File size is the priority</li>
              <li>Your audience uses Chrome, Firefox, or Safari 16+</li>
              <li>Serving images via a CDN with format negotiation</li>
            </ul>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Convert to PNG when:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Opening in Photoshop, Figma, Canva, or older editors</li>
              <li>Sharing via email or messaging apps</li>
              <li>Uploading to platforms that reject AVIF</li>
              <li>You need lossless quality for further editing</li>
              <li>The image has transparency that must be preserved</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Browser Support for AVIF</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This converter requires a browser that can decode AVIF. Check your browser version before
          uploading:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Browser</th>
                <th className="text-left p-3 border border-border font-semibold">Min version</th>
                <th className="text-left p-3 border border-border font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { browser: 'Chrome / Edge', version: '85+', status: '✅ Supported' },
                { browser: 'Firefox', version: '93+', status: '✅ Supported' },
                {
                  browser: 'Safari',
                  version: '16+ (iOS 16 / macOS Ventura)',
                  status: '✅ Supported',
                },
                { browser: 'Samsung Internet', version: '14+', status: '✅ Supported' },
                {
                  browser: 'Internet Explorer',
                  version: 'All versions',
                  status: '❌ Not supported',
                },
                { browser: 'Older Safari (< 16)', version: '< 16', status: '❌ Not supported' },
              ].map(({ browser, version, status }, i) => (
                <tr key={browser} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{browser}</td>
                  <td className="p-3 border border-border font-mono text-text-muted text-xs">
                    {version}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{status}</td>
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
            <Link href="/avif-to-jpg" className="text-primary hover:underline">
              AVIF to JPG
            </Link>{' '}
            — convert AVIF to universally compatible JPEG
          </li>
          <li>
            <Link href="/avif-to-webp" className="text-primary hover:underline">
              AVIF to WebP
            </Link>{' '}
            — smaller than PNG, wider support than AVIF
          </li>
          <li>
            <Link href="/png-to-webp" className="text-primary hover:underline">
              PNG to WebP
            </Link>{' '}
            — compress PNG to smaller WebP for web use
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce PNG file size after conversion
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Does AVIF to PNG lose any quality?',
              a: 'No. PNG uses lossless compression — every pixel is preserved exactly. The conversion from AVIF to PNG never degrades the image. You may notice a larger file size because PNG stores more data without lossy compression.',
            },
            {
              q: 'Can I convert AVIF to PNG on my iPhone?',
              a: 'Yes. This tool works in Safari 16+ on iOS 16 and later. If your iPhone runs iOS 15 or earlier, Safari does not support AVIF decoding — try Chrome on iOS instead.',
            },
            {
              q: 'Will transparent areas be preserved?',
              a: 'Yes. Both AVIF and PNG support alpha transparency. The converter preserves the alpha channel — transparent areas in your AVIF remain transparent in the PNG output.',
            },
            {
              q: 'Why is my PNG file so much larger than the AVIF?',
              a: 'AVIF achieves very small file sizes through lossy compression (similar to JPEG but more efficient). PNG is lossless — it stores all pixel data without loss. The size difference is expected. If you need a smaller file, convert to WebP or JPEG instead of PNG.',
            },
            {
              q: 'Can I convert AVIF to PNG in Photoshop?',
              a: 'Photoshop supports AVIF from version 23.2 (released 2022). Older versions cannot open AVIF files — use this online converter to get a PNG first, then open it in Photoshop.',
            },
            {
              q: 'Are my AVIF files uploaded to a server?',
              a: 'No. All conversion happens entirely in your browser using the HTML5 Canvas API. Your files are never sent to any server and never leave your device.',
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
