import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function FlipImageContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to flipping images online"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Flip vs Mirror vs Rotate — What Is the Difference?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Flipping and mirroring are the same operation — both describe reflecting an image along an
          axis. A horizontal flip (mirror) reflects the image left-to-right: what was on the left
          appears on the right, like a mirror image. A vertical flip reflects the image
          top-to-bottom: what was at the top appears at the bottom, as if the image were on a piece
          of paper you turned upside-down over a horizontal axis.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Rotation is different: it turns the image clockwise or counter-clockwise without
          reflection. A 90° rotation does not produce the same result as a flip — a photo rotated
          90° clockwise is not the same as the same photo flipped. You can combine flips (apply both
          horizontal and vertical) for a 180° mirror effect. To rotate instead of flip, use our{' '}
          <Link href="/rotate-image/" className="text-primary hover:underline">
            Rotate Image
          </Link>{' '}
          tool.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Flip an Image Online — 3 Steps</h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard. Accepts JPG, PNG,
                WebP, and HEIC up to 20MB. iPhone HEIC photos are automatically converted to JPEG.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Click Flip Horizontal or Flip Vertical
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click Flip Horizontal (⇄) to mirror left-to-right, or Flip Vertical (⇅) to mirror
                top-to-bottom. You can apply both for a combined mirror effect. Active flips are
                highlighted. Click again to toggle off.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download the flipped image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click Download. The file saves as{' '}
                <span className="font-mono text-xs bg-surface px-1 py-0.5 rounded">
                  flipped-[original-name].jpg
                </span>{' '}
                — ready to use on social media, websites, or any application.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for Flipping Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Mirror a selfie to match how you look in real life',
              detail:
                'Front cameras show a mirrored preview, but save the non-mirrored image. Flip horizontal to make your selfie look the way you see yourself in a mirror — natural for profile photos.',
            },
            {
              name: 'Remove readable text from background',
              detail:
                'Product photos or lifestyle shots may have readable text (brand names, signs) in the background. Flipping horizontally makes the text unreadable — useful for content repurposing without replacing the background.',
            },
            {
              name: 'Create symmetrical designs',
              detail:
                'Flip half an image and layer it with the original to create perfect symmetry. Useful for graphic design, social media headers, and logo concepts.',
            },
            {
              name: 'Duplicate product shots for left/right variants',
              detail:
                'Shoe, clothing, and furniture listings often show a left-facing and right-facing view. Flip the original product photo to create the mirrored variant without a second photoshoot.',
            },
            {
              name: 'Correct reversed scanned documents',
              detail:
                'Scanning some documents face-down reverses the content horizontally. Flip horizontal to restore the correct reading orientation without re-scanning.',
            },
            {
              name: 'YouTube thumbnails and social media graphics',
              detail:
                'Design convention often places the subject facing inward (toward text). Flip a photo of a person facing right to face left — toward your title text — for better thumbnail composition.',
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
        <h2 className="text-xl font-bold text-text-main">Flip Horizontal vs Flip Vertical</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Flip type</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">What it does</th>
                <th className="text-left py-2 font-semibold text-text-main">Common use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">⇄ Horizontal (mirror)</td>
                <td className="py-2 pr-4">Reflects left ↔ right</td>
                <td className="py-2">Selfies, product variants, text removal</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">⇅ Vertical</td>
                <td className="py-2 pr-4">Reflects top ↕ bottom</td>
                <td className="py-2">Water reflections, design symmetry</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">⇄ + ⇅ Both</td>
                <td className="py-2 pr-4">180° mirror effect</td>
                <td className="py-2">Inverted maps, artistic effects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All flip operations run entirely in your browser using the Canvas API. Your photos,
          product images, and personal pictures are never uploaded to any server. Free with no
          limits, no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/rotate-image/', label: 'Rotate Image', desc: '90°, 180°, 270° rotation' },
            { href: '/crop-image/', label: 'Crop Image', desc: 'Remove unwanted areas' },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/compress-image/', label: 'Compress Image', desc: 'Reduce file size' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            { href: '/jpg-to-webp/', label: 'JPG to WebP', desc: '30% smaller than JPG' },
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
          Frequently Asked Questions About Flipping Images
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How do I flip an image horizontally online for free?',
              a: 'Upload your image to this tool and click Flip Horizontal (⇄). The preview mirrors left-to-right instantly. Click Download to save. No account, no watermark — free.',
            },
            {
              q: 'What is the difference between flip horizontal and flip vertical?',
              a: 'Flip horizontal (mirror) reflects the image left-to-right — like looking in a mirror. What was on the left appears on the right. Flip vertical reflects the image top-to-bottom — what was at the top appears at the bottom. You can apply both at once for a combined 180° mirror effect.',
            },
            {
              q: 'Does flipping an image reduce quality?',
              a: 'This tool outputs JPEG at quality 92, which is visually lossless for all practical purposes. The flip operation itself is mathematically exact — no pixel data is lost during the transformation. Only the JPEG encoding step applies minimal compression.',
            },
            {
              q: 'Why would I want to flip a selfie?',
              a: 'Front cameras show you a mirrored preview (like a mirror) but save the non-mirrored image. This means your selfies look different from how you see yourself. Flipping the saved photo horizontally makes it match the mirrored preview — which often looks more natural for profile photos and social media.',
            },
            {
              q: 'Can I flip an image and then rotate it?',
              a: 'Yes. Use this Flip Image tool first to mirror the image, then use our Rotate Image tool to rotate it. Each tool applies its transformation from the original uploaded file, so there is no quality degradation from chaining the two operations.',
            },
            {
              q: 'Can I flip a PNG without losing transparency?',
              a: 'The flip transformation itself preserves all pixel data. However, the output is currently JPEG at quality 92, which does not support transparency — transparent areas will be filled white. If you need transparency preserved, use an image editor that supports PNG flip output.',
            },
            {
              q: 'What image formats can I flip?',
              a: 'JPG, PNG, WebP, and HEIC — up to 20MB per file. iPhone HEIC photos are automatically converted to JPEG before flipping. Output is always JPEG at quality 92.',
            },
            {
              q: 'Is this tool free and private?',
              a: 'Yes — completely free with no limits. All flip operations run in your browser; images never leave your device. No sign-up required.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
