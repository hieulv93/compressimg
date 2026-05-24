import Link from 'next/link'

export default function WebpToGifContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert WebP to GIF?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WebP is a modern format with excellent compression and broad browser support. GIF is a
          1987 format with limited colors but near-universal compatibility — including email
          clients, SMS, WhatsApp, Slack, and legacy platforms. Converting WebP to GIF is typically
          done when the destination platform accepts GIF but not WebP, or when you need the image to
          behave as &quot;a GIF&quot; in contexts that trigger special handling (auto-play, loop
          indicators).
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For most web use cases, WebP is far superior to GIF. Convert to GIF only when the target
          platform or workflow specifically requires it.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">WebP vs GIF — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Feature</th>
                <th className="text-left p-3 border border-border font-semibold">WebP</th>
                <th className="text-left p-3 border border-border font-semibold">GIF</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Colors', webp: '16 million+', gif: '256 maximum' },
                { feature: 'Compression', webp: 'Lossy or lossless (VP8)', gif: 'Lossless (LZW)' },
                { feature: 'Transparency', webp: 'Full alpha channel', gif: '1-bit (on/off)' },
                { feature: 'Animation', webp: 'Yes (Animated WebP)', gif: 'Yes (universal)' },
                { feature: 'File size', webp: 'Very small', gif: '2–5× larger than WebP' },
                {
                  feature: 'Browser support',
                  webp: 'Chrome 17+, Firefox 65+, Safari 14+',
                  gif: 'Universal (all platforms)',
                },
                {
                  feature: 'Email client support',
                  webp: 'Limited (Gmail, Apple Mail)',
                  gif: 'Universal',
                },
              ].map(({ feature, webp, gif }, i) => (
                <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{feature}</td>
                  <td className="p-3 border border-border text-text-muted">{webp}</td>
                  <td className="p-3 border border-border text-text-muted">{gif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Platforms That Require GIF Over WebP</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Older email clients',
              desc: 'Outlook 2016 and earlier, Yahoo Mail, and some corporate email clients do not render WebP. GIF works universally in all email clients.',
            },
            {
              title: 'SMS and MMS',
              desc: 'Standard MMS messaging does not support WebP. GIF is the standard format for animated images sent via text message.',
            },
            {
              title: 'Legacy CMS and tools',
              desc: 'Some older WordPress themes, email marketing tools (older Mailchimp templates), and CMS systems accept GIF but not WebP.',
            },
            {
              title: 'Social media "GIF" slots',
              desc: 'Some platforms differentiate between "images" and "GIFs" — uploading a file with .gif extension may trigger auto-play or loop behavior that WebP does not.',
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
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/gif-to-png" className="text-primary hover:underline">
              GIF to PNG
            </Link>{' '}
            — convert GIF back to PNG (first frame)
          </li>
          <li>
            <Link href="/webp-to-png" className="text-primary hover:underline">
              WebP to PNG
            </Link>{' '}
            — convert WebP to lossless PNG
          </li>
          <li>
            <Link href="/webp-to-jpg" className="text-primary hover:underline">
              WebP to JPG
            </Link>{' '}
            — convert WebP to JPEG for maximum compatibility
          </li>
          <li>
            <Link href="/png-to-gif" className="text-primary hover:underline">
              PNG to GIF
            </Link>{' '}
            — convert PNG images to GIF format
          </li>
          <li>
            <Link href="/compress-gif-online" className="text-primary hover:underline">
              Compress GIF
            </Link>{' '}
            — reduce GIF file size while preserving animation
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Can it convert animated WebP to animated GIF?',
              a: 'This tool converts static WebP images to static GIF. Animated WebP files contain multiple frames that require individual extraction before GIF encoding — this tool processes the first frame only. For animated WebP to GIF conversion, use a dedicated animation tool.',
            },
            {
              q: 'Will the GIF be larger than the WebP?',
              a: 'Yes, significantly. WebP is one of the most efficient formats available. The GIF equivalent is typically 2–5× larger because GIF uses older LZW compression and is limited to 256 colors, which can cause more data for complex images.',
            },
            {
              q: 'Does WebP to GIF preserve transparency?',
              a: 'Only partially. WebP supports full alpha transparency. GIF supports only 1-bit transparency (fully transparent or fully opaque). Semi-transparent edges in your WebP will be filled with white in the GIF output.',
            },
            {
              q: 'Why does the GIF look different from the WebP?',
              a: "GIF reduces colors to 256 from WebP's millions. Images with gradients, smooth color transitions, or photographic content will show color banding in GIF. Simple flat-color graphics convert cleanly.",
            },
            {
              q: 'Is WebP supported in all email clients?',
              a: 'Not all. Gmail, Apple Mail, and modern Outlook support WebP. Older Outlook versions (2016 and earlier) and Yahoo Mail do not. For maximum email compatibility, use GIF (for animation) or JPEG/PNG (for static images).',
            },
            {
              q: 'Are my files uploaded to a server?',
              a: 'No. All conversion happens entirely in your browser. Your WebP files are never sent to any server.',
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
