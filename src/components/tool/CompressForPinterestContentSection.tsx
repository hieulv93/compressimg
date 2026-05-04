import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForPinterestContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Pinterest"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress Images for Pinterest?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pinterest automatically re-compresses every image you upload. When you pin a large
          high-resolution photo, Pinterest resizes and re-encodes it using its own lossy compression
          algorithm — reducing a crisp original to a noticeably softer result, especially on
          high-density mobile screens. This double-compression effect is the most common reason pins
          look less sharp than the original photo.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The fix is to pre-compress your image at quality 80 before uploading. When Pinterest
          receives an already-optimized file, it has less room to degrade the image further. The
          result is a sharper pin that stands out in feeds and search results — which directly
          affects click-through rate, saves, and repins.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Smaller files also upload faster and are less likely to fail on slow mobile connections.
          For creators who batch-pin multiple images per session, pre-compressing reduces upload
          time significantly.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Pinterest Image Size Guide — Best Dimensions for Every Pin Type
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pinterest uses a variable-height grid layout. Tall images take up more vertical space and
          are more visible in feeds — which is why the 2:3 aspect ratio is the standard
          recommendation for most pins.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Pin type
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Recommended size
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Aspect ratio
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Target file size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Standard pin', '1000×1500px', '2:3', '100–300KB'],
                ['Square pin', '1000×1000px', '1:1', '80–200KB'],
                ['Long pin', '1000×2100px', '1:2.1', '150–400KB'],
                ['Story pin', '1080×1920px', '9:16', '200–500KB'],
                ['Video thumbnail', '1000×1500px', '2:3', '100–300KB'],
              ].map(([type, size, ratio, target]) => (
                <tr key={type} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{type}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{ratio}</td>
                  <td className="p-3 border border-border text-text-muted">{target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Pinterest downscales images wider than 1000px, so uploading at higher resolution offers no
          benefit. If your image is 4000×6000px from a mirrorless camera, resize to 1000×1500px
          before compressing — this alone removes 85% of the file size with no visible change at pin
          display sizes.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Pinterest — Step by Step
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Upload your image',
              desc: 'Click the upload area, drag and drop, or paste with Ctrl+V. Supports JPG, PNG, and WebP up to 20MB. Nothing is sent to any server — compression runs entirely in your browser.',
            },
            {
              n: '2',
              title: 'Set quality to 80',
              desc: 'Quality 80 reduces a typical 5–10MB photo to 200–500KB with no visible quality difference. For graphics with text (infographics, quote pins), keep quality at 85–90 to preserve crisp edges.',
            },
            {
              n: '3',
              title: 'Download the compressed image',
              desc: 'The download button shows the exact compressed file size before you save. Aim for under 500KB for standard pins.',
            },
            {
              n: '4',
              title: 'Upload to Pinterest',
              desc: 'Go to Pinterest, click the + button to create a new pin, and upload the compressed file. Your pre-compressed pin will be noticeably sharper than one Pinterest re-compressed from a large original.',
            },
          ].map(({ n, title, desc }) => (
            <li key={n} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {n}
              </span>
              <div>
                <p className="text-sm font-semibold text-text-main">{title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Image Format for Pinterest</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pinterest supports JPG, PNG, WebP, and GIF uploads. Each format has specific strengths:
        </p>
        <div className="space-y-3">
          {[
            {
              fmt: 'JPG — best for photographs',
              desc: "JPG is the right choice for lifestyle photos, product shots, travel photography, and any image with gradients or complex color. At quality 80, a JPG pin is typically 100–300KB — well within Pinterest's limits and small enough that Pinterest applies minimal additional compression.",
            },
            {
              fmt: 'PNG — best for infographics and text overlays',
              desc: 'PNG preserves crisp edges and flat colors, making it ideal for infographic pins, quote images, and branded content with text. PNG files are larger than JPG, so compress at quality 80 to reduce size while keeping text sharp. Alternatively, convert to JPG if the image has no transparency.',
            },
            {
              fmt: 'WebP — limited Pinterest support',
              desc: 'Pinterest does not reliably accept WebP uploads from desktop browsers. Stick to JPG or PNG for Pinterest to ensure your pin uploads correctly and displays inline.',
            },
          ].map(({ fmt, desc }) => (
            <div key={fmt} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{fmt}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Quality Settings for Different Pin Types
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Pin type
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Recommended quality
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Lifestyle / travel photos',
                  '80',
                  'Best file size vs. quality balance for photographs',
                ],
                [
                  'Product photography',
                  '82–85',
                  'Slightly higher to preserve fine product details',
                ],
                ['Infographics with text', '85–90', 'Text legibility requires higher quality'],
                ['Quote / typography pins', '88–92', 'Fine text renders poorly at low quality'],
                ['Food photography', '80', 'Color accuracy maintained at quality 80'],
                ['Flat lay / minimal design', '80', 'Large flat areas compress efficiently'],
              ].map(([type, quality, reason]) => (
                <tr key={type} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{type}</td>
                  <td className="p-3 border border-border text-text-muted">{quality}</td>
                  <td className="p-3 border border-border text-text-muted">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'General image compressor for JPG, PNG, WebP',
            },
            {
              href: '/resize-image',
              label: 'Resize Image',
              desc: 'Resize to 1000×1500px before compressing',
            },
            {
              href: '/compress-image-for-instagram',
              label: 'Compress for Instagram',
              desc: 'Optimize images for Instagram uploads',
            },
            {
              href: '/jpg-to-webp',
              label: 'JPG to WebP',
              desc: 'Convert to WebP for other platforms',
            },
            {
              href: '/compress-image-for-facebook',
              label: 'Compress for Facebook',
              desc: 'Reduce image size for Facebook posts',
            },
            {
              href: '/compress-images',
              label: 'Batch Compress',
              desc: 'Compress multiple pin images at once',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="divide-y divide-border">
          {[
            {
              q: 'Why do my Pinterest images look blurry after uploading?',
              a: 'Pinterest applies automatic compression to all uploaded images. Large originals get compressed aggressively, introducing softness and color shifts. Pre-compressing at quality 80 before uploading gives Pinterest a smaller, already-optimized file — the platform then applies less additional compression, resulting in a sharper pin.',
            },
            {
              q: 'What is the best image size for Pinterest pins?',
              a: '1000×1500px (2:3 ratio) is the standard recommendation for most pins. Pinterest downscales wider images, so there is no benefit to uploading at higher resolution. Square pins (1000×1000px) work well for products, and long pins (1000×2100px) take up more feed space.',
            },
            {
              q: 'What file format should I use for Pinterest?',
              a: 'JPG for photographs — smaller files with excellent quality. PNG for infographics, text overlays, and graphics with flat colors. Avoid WebP for Pinterest as it may not upload correctly from all desktop browsers.',
            },
            {
              q: 'What is the maximum file size for Pinterest images?',
              a: 'Pinterest accepts images up to 20MB. However, any image above 500KB–1MB will be re-compressed by Pinterest. Pre-compressing to under 500KB eliminates most of this re-compression and keeps your pin sharper.',
            },
            {
              q: 'Does compressing images affect Pinterest SEO?',
              a: "Image quality indirectly affects Pinterest SEO through engagement metrics — sharp, visually appealing pins get more saves and clicks. Pinterest's algorithm rewards high-engagement pins with better distribution. A sharper pre-compressed pin can outperform a blurry large-file pin in search results and recommended feeds.",
            },
            {
              q: 'Can I compress multiple Pinterest images at once?',
              a: 'Yes — use the Batch Compress tool to compress multiple images simultaneously. All files are compressed in your browser and downloaded as a ZIP archive.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
