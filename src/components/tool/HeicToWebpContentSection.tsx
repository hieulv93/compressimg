import Link from 'next/link'

export default function HeicToWebpContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert HEIC to WebP?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          HEIC (High Efficiency Image Format) is Apple&apos;s default photo format on iPhone and
          iPad. While HEIC is excellent for storage — comparable quality to JPEG at half the file
          size — it has poor compatibility outside the Apple ecosystem. Many websites, apps, and
          tools do not accept HEIC uploads.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          WebP is Google&apos;s modern image format designed for the web. It delivers 25–35% smaller
          files than JPEG at the same visual quality, and is supported by all modern browsers
          (Chrome, Firefox, Safari 14+, Edge). Converting HEIC to WebP gives you a web-optimized
          file that works everywhere online.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          HEIC vs WebP vs JPEG — Format Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Feature</th>
                <th className="text-left p-3 border border-border font-semibold">HEIC</th>
                <th className="text-left p-3 border border-border font-semibold">WebP</th>
                <th className="text-left p-3 border border-border font-semibold">JPEG</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: 'File size vs JPEG',
                  heic: '~50% smaller',
                  webp: '25–35% smaller',
                  jpeg: 'Baseline',
                },
                {
                  feature: 'Browser support',
                  heic: 'Safari only',
                  webp: 'All modern browsers',
                  jpeg: 'Universal',
                },
                {
                  feature: 'Transparency',
                  heic: 'Supported',
                  webp: 'Supported',
                  jpeg: 'Not supported',
                },
                {
                  feature: 'Web upload compatibility',
                  heic: 'Poor',
                  webp: 'Excellent',
                  jpeg: 'Universal',
                },
                {
                  feature: 'Social media',
                  heic: 'Rejected by most',
                  webp: 'Most platforms accept',
                  jpeg: 'Universal',
                },
                {
                  feature: 'Quality at same file size',
                  heic: 'Excellent',
                  webp: 'Excellent',
                  jpeg: 'Good',
                },
              ].map(({ feature, heic, webp, jpeg }, i) => (
                <tr key={feature} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{feature}</td>
                  <td className="p-3 border border-border text-text-muted">{heic}</td>
                  <td className="p-3 border border-border text-primary font-medium">{webp}</td>
                  <td className="p-3 border border-border text-text-muted">{jpeg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Uses for HEIC to WebP</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Website and blog images',
              desc: 'WebP is the recommended format for web images. Google PageSpeed Insights specifically suggests serving images in WebP for better Core Web Vitals scores.',
            },
            {
              title: 'Shopify and e-commerce',
              desc: 'Shopify automatically converts uploaded images to WebP for shoppers on compatible browsers. Upload WebP directly to skip re-compression and preserve quality.',
            },
            {
              title: 'Social media posts',
              desc: 'Most platforms (Instagram, Facebook, Twitter, LinkedIn) now accept WebP. The smaller file size means faster uploads from mobile.',
            },
            {
              title: 'Email newsletters',
              desc: 'Email clients like Gmail display WebP images. Smaller files mean faster loading in email previews.',
            },
            {
              title: 'Sharing iPhone photos on Android or Windows',
              desc: 'Android and Windows do not natively open HEIC files. WebP is widely supported and opens in any modern browser or file viewer.',
            },
            {
              title: 'Portfolio and photography sites',
              desc: 'WebP delivers the same sharp detail as HEIC at smaller file sizes — ideal for photo galleries where load speed affects visitor experience.',
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
          How to Get HEIC Files from iPhone to Your Computer
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          iPhones shoot HEIC by default. To use this tool, you first need the HEIC file on your
          computer or Android device:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <strong className="text-text-main">AirDrop (Mac)</strong> — AirDrop from iPhone to Mac
            transfers the original HEIC file. Find it in ~/Downloads.
          </li>
          <li>
            <strong className="text-text-main">iCloud Photos</strong> — Enable iCloud Photos, then
            download originals from icloud.com on any browser as HEIC.
          </li>
          <li>
            <strong className="text-text-main">USB cable (Windows)</strong> — Connect iPhone via
            USB. Open File Explorer → This PC → iPhone → DCIM folder. Copy HEIC files to your
            desktop.
          </li>
          <li>
            <strong className="text-text-main">Email to yourself</strong> — Email the photo from
            iPhone. The attached file will be HEIC on most email clients.
          </li>
          <li>
            <strong className="text-text-main">Change camera settings</strong> — In iPhone Settings
            → Camera → Formats, select &quot;Most Compatible&quot; to shoot JPEG instead of HEIC
            going forward.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/heic-to-jpg" className="text-primary hover:underline">
              HEIC to JPG
            </Link>{' '}
            — convert iPhone photos to universal JPEG format
          </li>
          <li>
            <Link href="/heic-to-png" className="text-primary hover:underline">
              HEIC to PNG
            </Link>{' '}
            — convert HEIC to lossless PNG with transparency
          </li>
          <li>
            <Link href="/jpg-to-webp" className="text-primary hover:underline">
              JPG to WebP
            </Link>{' '}
            — convert JPEG photos to smaller WebP for web
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce WebP or JPEG file size further
          </li>
          <li>
            <Link href="/resize-heic" className="text-primary hover:underline">
              Resize HEIC
            </Link>{' '}
            — resize iPhone photos without converting format
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Why convert HEIC to WebP instead of JPEG?',
              a: 'WebP is 25–35% smaller than JPEG at the same visual quality. For websites, this means faster page loads and better Google PageSpeed scores. All modern browsers support WebP, making it the best format for any image you publish online.',
            },
            {
              q: 'Will my HEIC photos look different after converting to WebP?',
              a: 'At high quality settings (90+), WebP output is visually identical to the original. For web use at quality 80–85, the difference is imperceptible at normal viewing distances while the file size is significantly smaller than JPEG.',
            },
            {
              q: 'Does WebP support the same photo quality as HEIC?',
              a: 'Yes. Both formats use modern compression algorithms that far outperform JPEG. A WebP at quality 85 is typically sharper than JPEG at quality 95 at the same file size.',
            },
            {
              q: 'Can I open a WebP file on iPhone?',
              a: 'Yes. Safari on iOS 14+ fully supports WebP. The Photos app on older iOS versions may not open WebP — in that case, convert back to JPEG for iOS sharing.',
            },
            {
              q: 'Does WebP support transparency?',
              a: 'Yes. WebP supports full alpha transparency. HEIC photos from iPhone cameras do not contain transparency, so the converted WebP will have a solid background.',
            },
            {
              q: 'Are my HEIC files uploaded to a server?',
              a: 'No. All conversion happens entirely in your browser using JavaScript. Your files never leave your device and are never sent to any server.',
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
