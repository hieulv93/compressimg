import Link from 'next/link'

export default function JpgToGifContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert JPG to GIF?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPEG and GIF are both legacy image formats, but they serve different purposes. JPEG is
          optimized for photographs — millions of colors, small file sizes, lossy compression. GIF
          is optimized for simple graphics and animation — 256 colors, lossless LZW compression,
          universal compatibility for animation.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Convert JPG to GIF when a platform or tool specifically requires GIF format — for example,
          some older email templates, CMS placeholders for animated content, or messaging platforms
          that treat GIF files differently from JPEG. For most static images, keeping the JPG is the
          better choice.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">JPG vs GIF — Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Feature</th>
                <th className="text-left p-3 border border-border font-semibold">JPG</th>
                <th className="text-left p-3 border border-border font-semibold">GIF</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Colors', jpg: '16 million+', gif: '256 maximum' },
                { feature: 'Compression', jpg: 'Lossy (JPEG DCT)', gif: 'Lossless (LZW)' },
                { feature: 'Transparency', jpg: 'None', gif: '1-bit (on/off)' },
                { feature: 'Animation', jpg: 'No', gif: 'Yes (universal)' },
                {
                  feature: 'Best for',
                  jpg: 'Photos, real-world images',
                  gif: 'Simple graphics, animation',
                },
                { feature: 'File size (photo)', jpg: 'Small', gif: 'Large (color reduction)' },
                { feature: 'File size (flat graphic)', jpg: 'Medium', gif: 'Small' },
              ].map(({ feature, jpg, gif }, i) => (
                <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{feature}</td>
                  <td className="p-3 border border-border text-text-muted">{jpg}</td>
                  <td className="p-3 border border-border text-text-muted">{gif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Happens to Photo Quality in GIF?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPEG photos converted to GIF show a noticeable quality difference. GIF&apos;s 256-color
          palette cannot represent the millions of colors in a typical photograph. The result is
          visible color banding — smooth gradients (blue sky, skin tones, sunsets) become blocks of
          flat color instead of smooth transitions.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This is expected behavior and is inherent to the GIF format — it is not a flaw in the
          converter. If you need a smaller file without color degradation, compress the JPG instead
          or convert to WebP.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/gif-to-jpg" className="text-primary hover:underline">
              GIF to JPG
            </Link>{' '}
            — convert GIF back to JPEG (first frame)
          </li>
          <li>
            <Link href="/png-to-gif" className="text-primary hover:underline">
              PNG to GIF
            </Link>{' '}
            — convert PNG images to GIF format
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
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce JPG file size without converting to GIF
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Will the output GIF be animated?',
              a: 'No. Converting a single JPEG creates a static single-frame GIF. GIF animation requires multiple frames. This tool converts the static JPEG image to a static GIF.',
            },
            {
              q: 'Why does my photo look worse after converting to GIF?',
              a: 'GIF supports only 256 colors. A typical photograph contains millions of colors. During conversion, similar colors are mapped to the nearest of 256 palette entries, causing visible color banding on gradients and smooth areas like skin, sky, and foliage.',
            },
            {
              q: 'Will the GIF file be larger than the JPG?',
              a: 'Often yes, especially for photographic images. The color reduction to 256 colors actually creates more data for the LZW compressor to handle. For flat-color graphics, GIF may be similar in size or smaller.',
            },
            {
              q: 'Is there a way to make the GIF look better?',
              a: 'Dithering (mixing pixels to simulate more colors) can improve the visual quality of GIF at the cost of file size. This converter uses gif.js which applies dithering automatically.',
            },
            {
              q: 'When should I use GIF instead of JPG?',
              a: 'Use GIF when the target platform requires it — for example, some animated content slots in email clients or CMS tools that specifically process GIF differently. For static photos on the web, JPG or WebP is always better than GIF.',
            },
            {
              q: 'Are my files uploaded to a server?',
              a: 'No. All conversion happens entirely in your browser. Your JPEG files are never sent to any server.',
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
