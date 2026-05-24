import Link from 'next/link'

export default function AvifToWebpContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert AVIF to WebP?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          AVIF has excellent compression, but browser support is limited to Chrome 85+, Firefox 93+,
          and Safari 16+. WebP has much wider support — Chrome 17+, Firefox 65+, Safari 14+, and all
          modern mobile browsers. Converting AVIF to WebP lets you deliver efficient images to users
          on slightly older browsers without sacrificing too much file size efficiency.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          WebP is also the right choice when working with platforms and CMS tools that support WebP
          but not AVIF — including WordPress (4.8+), Shopify, and most modern image CDNs.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          AVIF vs WebP vs PNG vs JPG — Size Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Format</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Relative file size
                </th>
                <th className="text-left p-3 border border-border font-semibold">Transparency</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Browser support
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  format: 'AVIF',
                  size: '1× (smallest)',
                  alpha: 'Yes',
                  support: 'Chrome 85+, Firefox 93+, Safari 16+',
                },
                {
                  format: 'WebP',
                  size: '1.3×',
                  alpha: 'Yes',
                  support: 'Chrome 17+, Firefox 65+, Safari 14+',
                },
                { format: 'JPEG', size: '1.5–2×', alpha: 'No', support: 'Universal' },
                { format: 'PNG', size: '3–6×', alpha: 'Yes', support: 'Universal' },
              ].map(({ format, size, alpha, support }, i) => (
                <tr key={format} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-mono font-bold text-primary">
                    {format}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{alpha}</td>
                  <td className="p-3 border border-border text-text-muted text-xs">{support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-xs">
          File sizes are approximate at equivalent visual quality.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Use WebP Over PNG or JPEG</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Use WebP for:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Website images (photos and graphics)</li>
              <li>WordPress, Shopify, and CMS uploads</li>
              <li>Images with transparency (replaces PNG)</li>
              <li>Social media previews and thumbnails</li>
              <li>Email newsletter images (Gmail, Outlook 2019+)</li>
            </ul>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Use PNG instead when:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Editing in Photoshop (lossless master)</li>
              <li>Sending to a printer (print workflows)</li>
              <li>Uploading to tools that reject WebP</li>
              <li>Archiving original images</li>
            </ul>
          </div>
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
            <Link href="/avif-to-png" className="text-primary hover:underline">
              AVIF to PNG
            </Link>{' '}
            — convert AVIF to lossless PNG with transparency
          </li>
          <li>
            <Link href="/webp-to-jpg" className="text-primary hover:underline">
              WebP to JPG
            </Link>{' '}
            — convert WebP to JPEG for maximum compatibility
          </li>
          <li>
            <Link href="/webp-to-png" className="text-primary hover:underline">
              WebP to PNG
            </Link>{' '}
            — convert WebP to lossless PNG
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce file size further after conversion
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Is WebP better than AVIF?',
              a: 'AVIF has better compression than WebP — files are typically 20–30% smaller at equivalent quality. But WebP has wider browser and platform support. Use AVIF when you can guarantee a modern browser audience. Use WebP when you need broader compatibility, including Safari 14 users.',
            },
            {
              q: 'Does converting AVIF to WebP lose quality?',
              a: 'There is a small quality loss since WebP at quality 92 is lossy. However, the difference is imperceptible on screen for normal viewing. If you need pixel-perfect lossless quality, convert to PNG instead.',
            },
            {
              q: 'Does WebP support transparency?',
              a: 'Yes. WebP supports alpha transparency. If your AVIF has transparent areas, they are preserved in the WebP output.',
            },
            {
              q: 'Will WordPress accept WebP images?',
              a: 'Yes. WordPress supports WebP from version 5.8 (released 2021). Themes and page builders also generally support WebP. WebP is the recommended format for WordPress images — it loads faster than JPEG and PNG at equivalent quality.',
            },
            {
              q: 'Which browsers support AVIF but not WebP?',
              a: 'All browsers that support AVIF also support WebP. The opposite is not true — browsers like Safari 14 and Firefox 65 support WebP but not AVIF. This is why converting AVIF to WebP can help reach a larger audience.',
            },
            {
              q: 'Are my files uploaded to a server?',
              a: 'No. All conversion happens entirely in your browser. Your AVIF files are never sent to any server.',
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
