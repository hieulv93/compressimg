import Link from 'next/link'

export default function PngToGifContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Convert PNG to GIF</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          GIF is one of the oldest web image formats, dating to 1987. Despite better alternatives
          existing today, GIF remains widely used for animation and has broad compatibility with
          email clients, messaging apps, and older platforms that may not support WebP or APNG.
          Converting a static PNG to GIF makes the image compatible with these legacy contexts.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          However, GIF has significant limitations compared to PNG. It supports only 256 colors
          (versus PNG&apos;s millions) and has limited transparency support. For most uses, PNG is
          the superior format — convert to GIF only when the target platform specifically requires
          it.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">PNG vs GIF — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Feature</th>
                <th className="text-left p-3 border border-border font-semibold">PNG</th>
                <th className="text-left p-3 border border-border font-semibold">GIF</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Colors', png: '16 million+', gif: '256 maximum' },
                { feature: 'Compression', png: 'Lossless (DEFLATE)', gif: 'Lossless (LZW)' },
                { feature: 'Transparency', png: 'Full alpha channel', gif: '1-bit (on/off only)' },
                { feature: 'Animation', png: 'APNG (limited support)', gif: 'Yes (universal)' },
                { feature: 'File size (photo)', png: 'Large', gif: 'Very large (color loss)' },
                { feature: 'File size (simple graphic)', png: 'Small', gif: 'Similar to PNG' },
                { feature: 'Browser support', png: 'Universal', gif: 'Universal' },
              ].map(({ feature, png, gif }, i) => (
                <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{feature}</td>
                  <td className="p-3 border border-border text-text-muted">{png}</td>
                  <td className="p-3 border border-border text-text-muted">{gif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          GIF Limitations to Know Before Converting
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: '256-color limit',
              desc: 'GIF can only store 256 colors per frame. PNG images with gradients, photographs, or many colors will show visible banding or dithering after conversion.',
            },
            {
              title: 'No full transparency',
              desc: "GIF only supports 1-bit transparency — a pixel is either fully transparent or fully opaque. PNG's smooth semi-transparent edges (anti-aliasing) will have white halos in GIF.",
            },
            {
              title: 'Larger file size for photos',
              desc: 'Photographic images converted to GIF are often larger than the PNG source because the color reduction creates more data, not less.',
            },
            {
              title: 'Best for simple graphics',
              desc: 'GIF works well for logos, icons, and flat-color illustrations with fewer than 256 colors. These convert cleanly with minimal quality loss.',
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
            — convert GIF back to PNG (first frame extracted)
          </li>
          <li>
            <Link href="/jpg-to-gif" className="text-primary hover:underline">
              JPG to GIF
            </Link>{' '}
            — convert JPEG images to GIF format
          </li>
          <li>
            <Link href="/webp-to-gif" className="text-primary hover:underline">
              WebP to GIF
            </Link>{' '}
            — convert WebP images to GIF format
          </li>
          <li>
            <Link href="/compress-gif-online" className="text-primary hover:underline">
              Compress GIF
            </Link>{' '}
            — reduce GIF file size while preserving animation
          </li>
          <li>
            <Link href="/png-to-webp" className="text-primary hover:underline">
              PNG to WebP
            </Link>{' '}
            — convert PNG to modern WebP (better than GIF)
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Will the output GIF be animated?',
              a: 'No. Converting a single PNG creates a static single-frame GIF. GIF animation requires multiple source frames. Use a dedicated animated GIF creator tool to combine multiple images into an animation.',
            },
            {
              q: 'Why does my PNG look worse as a GIF?',
              a: 'GIF supports only 256 colors. If your PNG has gradients, photographs, or many shades, the color reduction to 256 causes visible banding or dithering. GIF is best for simple graphics with flat colors.',
            },
            {
              q: 'Does converting PNG to GIF preserve transparency?',
              a: 'Only partially. GIF supports 1-bit transparency — pixels are either fully transparent or fully opaque. PNG smooth alpha (semi-transparent edges) is lost. Transparent areas that were anti-aliased against a background will have white or colored halos in GIF.',
            },
            {
              q: 'When would I need a PNG as a GIF?',
              a: 'Some older email clients, messaging platforms, and legacy CMS systems only accept GIF for certain image placements (especially animated content slots). Converting to GIF satisfies format requirements without changing the visual content significantly for simple graphics.',
            },
            {
              q: 'Is GIF better or worse than PNG?',
              a: 'For static images, PNG is always better — more colors, better transparency, usually smaller files. GIF is only preferred when animation support with universal compatibility is needed. For new projects, consider WebP or APNG as modern alternatives.',
            },
            {
              q: 'Are my files uploaded to a server?',
              a: 'No. All conversion happens entirely in your browser using JavaScript. Your PNG files are never sent to any server.',
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
