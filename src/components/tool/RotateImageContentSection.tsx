import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function RotateImageContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to rotating images online"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Do Images Need to Be Rotated?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The most common reason an image appears rotated is EXIF orientation metadata. Smartphones
          record photos in a fixed sensor orientation and store the correct display direction in
          EXIF data. Most modern apps read this EXIF tag and display the photo correctly — but many
          websites, form upload portals, email clients, and older apps ignore it. The result: a
          portrait photo you took vertically appears sideways or upside down when uploaded.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool physically rotates the pixel data — not just the metadata — so the image
          displays correctly in all applications regardless of whether they read EXIF orientation.
          After rotating here and downloading, the image will appear correctly in every browser,
          app, and form upload portal.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Rotate an Image Online — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard. Accepts JPG, PNG,
                WebP, and HEIC up to 20MB. iPhone HEIC photos are automatically converted to JPEG
                before rotation.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Click a rotation button</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click Rotate Left (90° counter-clockwise), Rotate Right (90° clockwise), or 180°.
                The preview updates instantly. Click the same button multiple times to keep rotating
                — the current rotation angle is shown as a badge above the buttons.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download the rotated image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click Download. The file saves as{' '}
                <span className="font-mono text-xs bg-surface px-1 py-0.5 rounded">
                  rotated-[original-name].jpg
                </span>{' '}
                — ready to upload to any form, website, or social media platform.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Use Each Rotation Angle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              angle: '90° Left (CCW)',
              icon: '↺',
              uses: [
                'Landscape photo taken holding phone on its right side',
                'Document scanned on its side',
                'Fix "rotated 270° right" EXIF issue',
              ],
            },
            {
              angle: '90° Right (CW)',
              icon: '↻',
              uses: [
                'Portrait photo taken holding phone on its left side',
                'Most common smartphone sideways photo fix',
                'Fix "rotated 90° right" EXIF issue',
              ],
            },
            {
              angle: '180° (Upside Down)',
              icon: '↕',
              uses: [
                'Photo taken with phone held upside down',
                'Scanned document that came out inverted',
                'Creative mirroring or artistic effect',
              ],
            },
          ].map(({ angle, icon, uses }) => (
            <div key={angle} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs flex items-center gap-1.5">
                <span className="text-base">{icon}</span>
                {angle}
              </p>
              <ul className="mt-2 space-y-1">
                {uses.map((u) => (
                  <li key={u} className="text-text-muted text-xs flex gap-1.5">
                    <span className="text-primary mt-0.5 shrink-0">·</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for Image Rotation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Fix sideways phone photos',
              detail:
                'Smartphones often record in landscape orientation. If a portrait photo appears sideways on a website, rotate 90° right to fix it.',
            },
            {
              name: 'Correct EXIF-ignored portals',
              detail:
                'Government forms, university portals, and older business systems often strip EXIF data. Rotate to physically fix orientation before upload.',
            },
            {
              name: 'LinkedIn and social profile photos',
              detail:
                'Profile photo uploaders on LinkedIn, Twitter, and Facebook sometimes ignore EXIF orientation. Rotate and re-upload if the photo appears sideways.',
            },
            {
              name: 'Document and receipt scans',
              detail:
                'A scanned document placed sideways in the scanner can be corrected without re-scanning — rotate 90° to restore the correct reading orientation.',
            },
            {
              name: 'Product photography adjustment',
              detail:
                'Product photos shot from unusual angles for effect can be straightened to the standard 0° orientation for e-commerce listing requirements.',
            },
            {
              name: 'Email attachments',
              detail:
                'Email clients often strip EXIF orientation from attached images. Rotate before attaching to ensure recipients see the photo correctly oriented.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All rotation runs entirely in your browser using the Canvas API. Your photos, documents,
          and personal images are never uploaded to any server. Free with no limits, no account
          required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/flip-image/', label: 'Flip Image', desc: 'Mirror horizontal or vertical' },
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
          Frequently Asked Questions About Rotating Images
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How do I rotate an image 90 degrees online?',
              a: 'Upload your image to this tool and click Rotate Right (90° CW) or Rotate Left (90° CCW). The preview updates instantly. Click Download to save the rotated image. No account or software required.',
            },
            {
              q: 'Why is my photo sideways when I upload it?',
              a: 'Your phone records photos in a fixed sensor orientation and stores the correct display direction in EXIF metadata. Most apps read EXIF and show the photo correctly — but many upload forms, websites, and older apps ignore EXIF orientation, showing the raw pixel data instead. Rotating the image here physically changes the pixel orientation, so it appears correctly in all applications.',
            },
            {
              q: 'Will rotating an image reduce its quality?',
              a: 'This tool outputs JPEG at quality 92, which is visually lossless — pixel-level differences from quality 100 are invisible at normal viewing distances. The Canvas rotation is mathematically exact. If you need absolutely zero quality change, PNG output would be lossless, but JPEG at 92 is the standard for visual work.',
            },
            {
              q: 'Can I rotate a photo on my iPhone or Android?',
              a: 'Yes. Open this page in Safari or Chrome on your phone. Tap the upload area and select your photo. iPhone HEIC photos are automatically converted to JPEG before rotating. Tap the rotation button, then tap Download to save to your camera roll.',
            },
            {
              q: 'Can I rotate multiple times?',
              a: 'Yes. Each rotation button applies to the original uploaded image — the rotation angle accumulates. Click Rotate Right three times to get 270° (same as 90° left). The current angle is shown as a badge. Each click re-computes from the original, so quality is not degraded by chaining rotations.',
            },
            {
              q: 'What is the difference between rotate and flip?',
              a: 'Rotation turns the image clockwise or counter-clockwise around its center — the image orientation changes but is not mirrored. Flip (mirror) reflects the image along a horizontal or vertical axis — left becomes right (horizontal flip) or top becomes bottom (vertical flip). Use our Flip Image tool for mirroring.',
            },
            {
              q: 'Can I rotate a PNG without losing the transparent background?',
              a: 'The rotation itself preserves the full canvas — no pixels are lost. However, the output is currently JPEG at quality 92, which does not support transparency. If your PNG has a transparent background, download as JPEG — the transparent areas will be filled white. For transparency-preserving rotation, use an image editor that supports PNG output.',
            },
            {
              q: 'Is this tool free and private?',
              a: 'Yes — completely free with no limits. All rotation runs in your browser using the Canvas API; your image never leaves your device. No sign-up required.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
