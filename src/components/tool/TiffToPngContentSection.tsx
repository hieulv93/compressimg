import Link from 'next/link'

export default function TiffToPngContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is TIFF and Why Convert to PNG?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          TIFF (Tagged Image File Format) is a lossless format commonly used in professional
          photography, scanning, and print production. TIFF files are large — a full-resolution scan
          or camera raw export can easily exceed 50–200 MB. They are not supported by web browsers
          and most social media platforms.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG is also lossless, but uses efficient compression that reduces file size significantly
          without losing any pixel data. Converting TIFF to PNG makes images accessible on the web,
          viewable in any browser, and shareable on any platform while preserving every pixel
          exactly.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">TIFF vs PNG — Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Feature</th>
                <th className="text-left p-3 border border-border font-semibold">TIFF</th>
                <th className="text-left p-3 border border-border font-semibold">PNG</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: 'Compression',
                  tiff: 'Lossless (uncompressed or LZW)',
                  png: 'Lossless (DEFLATE)',
                },
                {
                  feature: 'File size',
                  tiff: 'Very large (50–500+ MB)',
                  png: 'Smaller (5–50 MB typical)',
                },
                {
                  feature: 'Browser support',
                  tiff: 'Not supported',
                  png: 'Full support (all browsers)',
                },
                {
                  feature: 'Transparency',
                  tiff: 'Supported (alpha channel)',
                  png: 'Full alpha transparency',
                },
                {
                  feature: 'Layers / metadata',
                  tiff: 'Supported (multi-page, layers)',
                  png: 'Single layer only',
                },
                {
                  feature: 'Color depth',
                  tiff: '8, 16, 32-bit per channel',
                  png: '8 or 16-bit per channel',
                },
                {
                  feature: 'Best use',
                  tiff: 'Print, archiving, professional workflow',
                  png: 'Web, sharing, general editing',
                },
              ].map(({ feature, tiff, png }, i) => (
                <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{feature}</td>
                  <td className="p-3 border border-border text-text-muted">{tiff}</td>
                  <td className="p-3 border border-border text-primary font-medium">{png}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Convert TIFF to PNG</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Sharing scanned documents',
              desc: 'Scanners often output TIFF by default. Convert to PNG to email, upload, or share scans without requiring the recipient to have special software.',
            },
            {
              title: 'Web publishing',
              desc: 'Browsers cannot display TIFF files. Convert to PNG to embed images on websites, blogs, or online portfolios.',
            },
            {
              title: 'Reducing file size for storage',
              desc: 'PNG compression typically reduces TIFF file size by 40–70% while maintaining pixel-perfect quality — making backups and archives more manageable.',
            },
            {
              title: 'Editing in web-based tools',
              desc: 'Canva, Google Slides, Figma, and similar tools do not accept TIFF uploads. Convert to PNG for compatibility.',
            },
            {
              title: 'Preserving transparency',
              desc: 'If your TIFF contains transparent regions (alpha channel), PNG preserves them exactly. JPEG would fill transparency with white.',
            },
            {
              title: 'Social media uploads',
              desc: 'Instagram, LinkedIn, Twitter, and Facebook reject TIFF uploads. PNG is universally accepted.',
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
          TIFF to PNG vs TIFF to JPEG — Which to Choose?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Convert to PNG when:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Image contains transparency (alpha channel)</li>
              <li>Image is a logo, screenshot, or graphic</li>
              <li>You need lossless output for further editing</li>
              <li>Image has sharp edges, text, or flat colors</li>
            </ul>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">
              Convert to{' '}
              <Link href="/tiff-to-jpg" className="text-primary hover:underline">
                JPEG
              </Link>{' '}
              when:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Image is a photograph with no transparency</li>
              <li>You need the smallest possible file size</li>
              <li>Uploading to a platform that prefers JPEG</li>
              <li>Final output — no further editing planned</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/tiff-to-jpg" className="text-primary hover:underline">
              TIFF to JPG
            </Link>{' '}
            — convert TIFF to JPEG for smallest file size
          </li>
          <li>
            <Link href="/png-to-jpg" className="text-primary hover:underline">
              PNG to JPG
            </Link>{' '}
            — convert PNG to JPEG for photos and email
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
            — resize the converted PNG to specific dimensions
          </li>
          <li>
            <Link href="/jpg-to-png" className="text-primary hover:underline">
              JPG to PNG
            </Link>{' '}
            — convert JPEG to lossless PNG
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Does converting TIFF to PNG lose quality?',
              a: 'No. Both TIFF and PNG are lossless formats. Converting between them introduces zero quality loss — every pixel is reproduced exactly. The only change is the compression algorithm used to store the data.',
            },
            {
              q: 'Why is my PNG file smaller than the TIFF?',
              a: 'PNG uses DEFLATE compression which efficiently stores repetitive pixel patterns. Uncompressed or LZW-compressed TIFF stores the same data less efficiently. A 50 MB TIFF might convert to a 5–15 MB PNG with identical visual quality.',
            },
            {
              q: 'Will transparency be preserved when converting TIFF to PNG?',
              a: 'Yes. PNG fully supports alpha transparency. If your TIFF contains transparent regions (alpha channel), they are preserved exactly in the PNG output.',
            },
            {
              q: 'Can I convert a multi-page TIFF to PNG?',
              a: 'This tool converts the first page of a multi-page TIFF. For multi-page TIFFs (common in scanned documents), use a dedicated PDF or document tool to split pages before converting.',
            },
            {
              q: 'Why does my TIFF fail to convert?',
              a: 'Some TIFF variants use uncommon compression types (CCITT Group 4, JBIG, etc.) that may not decode correctly. Try re-saving the TIFF from your source application with LZW or uncompressed settings before converting.',
            },
            {
              q: 'Are my TIFF files uploaded to a server?',
              a: 'No. All conversion happens entirely in your browser. Your files never leave your device and are never sent to any server.',
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
