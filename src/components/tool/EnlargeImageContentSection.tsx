import Link from 'next/link'

export default function EnlargeImageContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is Image Enlargement?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Image enlargement (upscaling) increases the pixel dimensions of an image — making it
          physically larger. When you set a target dimension larger than the source, the resize
          algorithm must create new pixels that did not exist in the original. This is fundamentally
          different from downscaling, where existing pixels are averaged or sampled.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The result quality depends heavily on how much you enlarge. Enlarging by 25–50% produces
          good results. Enlarging by 3–4× produces noticeably soft or blurry output with standard
          interpolation.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How Much Can You Enlarge Without Blur?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Scale factor</th>
                <th className="text-left p-3 border border-border font-semibold">Example</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Expected quality
                </th>
                <th className="text-left p-3 border border-border font-semibold">Use case</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  scale: '1.1–1.25×',
                  example: '1000px → 1250px',
                  quality: 'Excellent',
                  use: 'Minor size adjustment',
                },
                {
                  scale: '1.25–1.5×',
                  example: '1000px → 1500px',
                  quality: 'Very good',
                  use: 'Print at slightly larger size',
                },
                {
                  scale: '1.5–2×',
                  example: '1000px → 2000px',
                  quality: 'Good',
                  use: 'Presentation, display enlargement',
                },
                {
                  scale: '2–3×',
                  example: '1000px → 3000px',
                  quality: 'Acceptable',
                  use: 'Large print from decent source',
                },
                {
                  scale: '3–4×+',
                  example: '1000px → 4000px',
                  quality: 'Soft / blurry',
                  use: 'Use AI upscaler instead',
                },
              ].map(({ scale, example, quality, use }, i) => (
                <tr key={scale} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{scale}</td>
                  <td className="p-3 border border-border text-text-muted font-mono">{example}</td>
                  <td
                    className={`p-3 border border-border font-medium ${i < 2 ? 'text-green-600' : i === 2 ? 'text-yellow-600' : i === 3 ? 'text-orange-500' : 'text-red-500'}`}
                  >
                    {quality}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Reasons to Enlarge an Image</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Print at larger size',
              desc: 'A 1200px image prints at 4 inches at 300 DPI. Enlarging to 2400px lets you print at 8 inches — same source, larger output.',
            },
            {
              title: 'Fix undersize source',
              desc: 'Old photos, screenshots, or images downloaded at low resolution can be enlarged for modern displays.',
            },
            {
              title: 'Presentation slides',
              desc: 'Slide decks often need images at 1920×1080px or larger. Enlarging a 800px photo fills the slide.',
            },
            {
              title: 'Social media cover images',
              desc: 'LinkedIn banner (1584×396px), Facebook cover (820×312px) — existing photos may need upscaling to fill the space.',
            },
            {
              title: 'Crop recovery',
              desc: 'If you cropped an image too tightly, enlarging lets you work with the cropped version at a usable size.',
            },
            {
              title: 'Retina display prep',
              desc: 'HiDPI screens need 2× pixel images. Enlarge a 1× image to provide a 2× version for sharper rendering.',
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
        <h2 className="text-xl font-bold text-text-main">Tips for Best Enlargement Results</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <strong className="text-text-main">Start from the highest-resolution original</strong> —
            If you have a 4000px photo and need 2000px, downscaling is always better than starting
            from a 1000px copy and upscaling to 2000px.
          </li>
          <li>
            <strong className="text-text-main">Lock aspect ratio</strong> — Enlarging without
            locking distorts proportions. Always enlarge proportionally unless you specifically need
            a different crop.
          </li>
          <li>
            <strong className="text-text-main">Use PNG output for lossless results</strong> — When
            enlarging a PNG, the output stays lossless. JPEG output applies compression on export,
            adding artifacts to already-interpolated pixels.
          </li>
          <li>
            <strong className="text-text-main">Enlarge in steps for extreme upscaling</strong> — For
            3–4× enlargement, multiple 1.5× passes with sharpening in between can produce better
            results than a single large jump.
          </li>
          <li>
            <strong className="text-text-main">Beyond 2×: consider an AI upscaler</strong> — AI
            models trained on millions of images can predict fine detail that standard interpolation
            cannot. Results are significantly sharper at 4× and above.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Enlarge Image for Print — DPI Guide</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Print quality is measured in DPI (dots per inch). The required pixel count depends on the
          target print size:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Print size</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Pixels needed (300 DPI)
                </th>
                <th className="text-left p-3 border border-border font-semibold">
                  Pixels needed (150 DPI)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { print: '4×6 inch', px300: '1200×1800 px', px150: '600×900 px' },
                { print: '5×7 inch', px300: '1500×2100 px', px150: '750×1050 px' },
                { print: '8×10 inch', px300: '2400×3000 px', px150: '1200×1500 px' },
                { print: 'A4 (210×297mm)', px300: '2480×3508 px', px150: '1240×1754 px' },
                { print: '11×14 inch', px300: '3300×4200 px', px150: '1650×2100 px' },
              ].map(({ print, px300, px150 }, i) => (
                <tr key={print} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border">{print}</td>
                  <td className="p-3 border border-border font-medium text-text-main">{px300}</td>
                  <td className="p-3 border border-border text-text-muted">{px150}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize image
            </Link>{' '}
            — full resize tool with presets and batch options
          </li>
          <li>
            <Link
              href="/resize-image-without-losing-quality"
              className="text-primary hover:underline"
            >
              Resize image without losing quality
            </Link>{' '}
            — quality-focused downscaling guide
          </li>
          <li>
            <Link href="/crop-image" className="text-primary hover:underline">
              Crop image
            </Link>{' '}
            — remove unwanted areas before enlarging
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce file size after enlarging for web use
          </li>
          <li>
            <Link href="/passport-photo-maker" className="text-primary hover:underline">
              Passport photo maker
            </Link>{' '}
            — resize to exact passport dimensions at 300 DPI
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Can I enlarge an image without it becoming blurry?',
              a: 'Up to about 1.5–2× the original size, results are generally sharp. Beyond 2×, standard interpolation introduces softness. For large enlargements, AI upscalers produce significantly better results by predicting fine detail from training data.',
            },
            {
              q: 'How do I enlarge an image for printing?',
              a: 'Calculate the pixels needed: print width (inches) × 300 = pixel width. For an 8×10 inch print at 300 DPI, you need 2400×3000 pixels. If your source is smaller, enlarge it to these dimensions before sending to print.',
            },
            {
              q: 'Will enlarging a JPEG make it look worse?',
              a: 'Enlarging a JPEG interpolates pixels to fill the larger canvas. Any compression artifacts in the original JPEG become slightly more visible at larger sizes. Start from the highest-quality JPEG (or original raw file) when enlarging.',
            },
            {
              q: 'What is the maximum size I can enlarge to?',
              a: 'The tool supports output up to 8000×8000 pixels. For larger outputs, use a dedicated print preparation tool or AI upscaler.',
            },
            {
              q: 'Is upscaling the same as increasing resolution?',
              a: 'When people say "increase resolution," they usually mean increasing pixel count (which is upscaling). True resolution (PPI) is a print concept — it describes how many pixels fit in one inch. Increasing pixel count does make the image able to print at higher DPI.',
            },
            {
              q: 'Are my images uploaded to a server when I enlarge them?',
              a: 'No. All processing happens 100% in your browser. Your images never leave your device.',
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
