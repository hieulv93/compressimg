import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function AddWatermarkContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to adding watermarks to photos online"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a Photo Watermark?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A watermark is visible text or a logo overlaid on an image to identify its creator or
          owner. The term comes from the paper-making industry, where thin designs were embedded
          into paper during manufacturing — visible when held up to light. Digital watermarks serve
          the same purpose: making an image traceable back to its source, even when shared or
          reposted without attribution.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Text watermarks are the simplest form — a name, website URL, copyright symbol, or brand
          phrase overlaid at a chosen position with controlled opacity. They range from barely
          visible branding marks at 20–30% opacity to prominent protection marks at 70–100% opacity
          that make unauthorized use impractical.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Watermark Your Photos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Copyright protection',
              detail:
                'A visible watermark signals that an image is owned and protected. While it does not legally prevent use, it makes unauthorized use obviously wrong — and makes the source clear to anyone who sees the image shared elsewhere.',
            },
            {
              name: 'Brand building',
              detail:
                "Every time a watermarked photo is shared, the creator's name or website travels with it. For photographers, content creators, and brands, this turns every share into passive promotion — especially valuable for viral or widely-reposted content.",
            },
            {
              name: 'Client proofing',
              detail:
                'Photographers delivering digital proofs to clients add watermarks so clients can review composition and quality before final payment — without having a usable final image without paying.',
            },
            {
              name: 'Attribution on social media',
              detail:
                "Images shared on social platforms are frequently downloaded and re-shared with the original poster's credit stripped. A watermark ensures your name travels with the image regardless of who shares it next.",
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Watermark Position Guide — Which to Use When
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Position</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Best for</th>
                <th className="text-left py-2 font-semibold text-text-main">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">Bottom right</td>
                <td className="py-2 pr-4">Photography, portfolio shots</td>
                <td className="py-2">Most common — visible but not intrusive</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Bottom left</td>
                <td className="py-2 pr-4">Documentary, news photography</td>
                <td className="py-2">Less common — harder to crop without cropping subject</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Bottom center</td>
                <td className="py-2 pr-4">Landscape, wide-format photos</td>
                <td className="py-2">Works well when corners are busy with content</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Center</td>
                <td className="py-2 pr-4">Client proofs, stock photo previews</td>
                <td className="py-2">Maximum protection — difficult to crop out</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Top right</td>
                <td className="py-2 pr-4">Social media posts, product photos</td>
                <td className="py-2">Good if subject is bottom-heavy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Opacity — Choosing the Right Level</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Watermark opacity controls the balance between visibility and intrusiveness. There is no
          single right answer — it depends on your goal:
        </p>
        <div className="space-y-2">
          {[
            {
              range: '20–40%',
              label: 'Subtle branding',
              desc: 'Barely visible — for professional portfolios where you want attribution without distracting from the image. Shows ownership but does not dominate the photo.',
            },
            {
              range: '50–70%',
              label: 'Standard protection',
              desc: 'Clearly visible — for social media content and stock previews. Readable at a glance, but the underlying image is still viewable. The most common choice for working photographers.',
            },
            {
              range: '80–100%',
              label: 'Maximum protection',
              desc: 'Opaque — for client proofing, proof-of-concept previews, or images shared in contexts where unauthorized use is a real concern. Maximally visible; intentionally intrusive.',
            },
          ].map(({ range, label, desc }) => (
            <div key={range} className="flex gap-3 rounded-xl border border-border bg-surface p-3">
              <div className="shrink-0 text-right">
                <p className="text-xs font-mono font-bold text-text-main">{range}</p>
                <p className="text-[10px] text-text-muted">{label}</p>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How the Watermark Is Applied</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool draws the watermark using the browser Canvas API. When you upload an image, it
          is rendered onto a canvas element at its original pixel resolution. The watermark text is
          drawn on top using{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-[11px]">ctx.fillText()</code> with
          the chosen font size (as a percentage of image width), color, and opacity set via RGBA.
          The font size scales relative to the image width so the watermark looks proportionally
          consistent across photos of different dimensions.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The canvas is then exported as JPEG at quality 92 — visually lossless for the underlying
          photo. Only the pixels covered by the watermark text are changed from the original. The
          rest of the image is pixel-perfect. No server is involved at any step.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Photos Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All watermark processing runs entirely in your browser. Your photos are never uploaded to
          any server — not even for a moment. This makes the tool safe for watermarking sensitive
          client work, unpublished photographs, or personal images. Free with no limits, no account
          required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90%',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/exif-remover/', label: 'EXIF Remover', desc: 'Strip GPS & camera metadata' },
            { href: '/rotate-image/', label: 'Rotate Image', desc: '90°, 180°, 270° rotation' },
            { href: '/crop-image/', label: 'Crop Image', desc: 'Remove unwanted areas' },
            {
              href: '/image-color-picker/',
              label: 'Color Picker',
              desc: 'Pick HEX, RGB from any photo',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-border bg-surface p-3 hover:border-primary/40 transition-colors"
            >
              <p className="font-semibold text-text-main text-xs">{label}</p>
              <p className="text-text-muted text-xs mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          Frequently Asked Questions About Watermarking Photos
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is a watermark and why should I add one?',
              a: 'A watermark is visible text or a logo overlaid on an image to identify its creator or owner. Photographers and content creators add watermarks to protect their work from unauthorized use, to build brand recognition as images are shared, and to ensure attribution. Even a subtle watermark makes the source clear to anyone who sees the image.',
            },
            {
              q: 'Where should I position my watermark?',
              a: 'Bottom-right is the industry standard for photography — visible but minimally intrusive. For client proofing or maximum protection, center placement is harder to crop out. For consistent branding across a series, bottom-left or top-right creates a uniform look. Choose based on the subject composition: avoid placing the watermark over faces or key details.',
            },
            {
              q: 'What opacity should I use for my watermark?',
              a: 'For subtle professional branding: 20–40%. For standard social media protection: 50–70%. For client proofing or maximum protection: 80–100%. Lower opacity looks polished; higher opacity is harder to remove or ignore. There is no single right answer — adjust based on your goal.',
            },
            {
              q: 'Does adding a watermark reduce image quality?',
              a: 'This tool exports the watermarked image as JPEG at quality 92, which is visually lossless. Only the pixels under the watermark text are changed. The rest of the image is unchanged from the original. The quality difference from JPEG compression at q92 is imperceptible at normal viewing distances.',
            },
            {
              q: 'Can I remove a watermark from a photo?',
              a: 'Watermarks can be removed by skilled editors using inpainting or clone stamp tools — no watermark is 100% removal-proof. Increasing opacity and using center placement makes removal significantly harder. For maximum protection, use high opacity watermarks that cover the main subject area.',
            },
            {
              q: 'What font size should I use for the watermark?',
              a: 'This tool sets font size as a percentage of the image width — so the watermark scales proportionally across images of different sizes. A setting of 3–5% produces a clearly readable but non-dominant watermark on most photos. Use 7–10% for more prominent protection, 2–3% for subtle branding.',
            },
            {
              q: 'What image formats can I watermark?',
              a: 'JPG, PNG, WebP, and HEIC — up to 20MB. iPhone HEIC photos are automatically converted to JPEG before processing. Output is always JPEG at quality 92.',
            },
            {
              q: 'Is my photo private when using this tool?',
              a: 'Yes. All watermark processing runs entirely in your browser using the Canvas API. Your photos are never uploaded to any server. The watermark is applied locally on your device — safe for unpublished, client, or personal photos.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
