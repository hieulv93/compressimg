import Link from 'next/link'
import FAQItem from './FAQItem'

export default function PngCompressorContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border" aria-label="PNG compressor guide">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a PNG Compressor?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A PNG compressor is a tool that reduces the file size of PNG images without permanently
          destroying image data. PNG (Portable Network Graphics) uses lossless compression by
          default — every pixel is stored exactly. That precision makes PNG files large: a 1920×1080
          screenshot saved as PNG can easily reach 2–5MB, while the same image as a compressed JPG
          might be 200–400KB.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG compressors work by applying additional compression passes and, at lower quality
          settings, near-lossless techniques that reduce file size while keeping the image visually
          identical on screen. The key advantage over converting to JPG: PNG compression preserves
          transparency. Logos, icons, overlays, and UI elements with transparent backgrounds can be
          compressed significantly while remaining usable wherever a transparent PNG is needed.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Compress PNG Files — 3 Steps</h2>
        <ol className="space-y-4">
          {[
            {
              n: 1,
              title: 'Upload your PNG file',
              desc: 'Click the upload area, drag and drop, or paste with Ctrl+V. PNG files up to 20MB are accepted. Your file is never sent to any server — compression runs entirely in your browser.',
            },
            {
              n: 2,
              title: 'Set quality based on your use case',
              desc: 'Quality 80–90 for logos and icons (preserves sharp edges). Quality 70–80 for screenshots. Quality 60–70 for PNG photos. The output size is shown before you download — adjust until you hit your target.',
            },
            {
              n: 3,
              title: 'Download the compressed PNG',
              desc: 'Click Download. The compressed PNG saves to your device with transparency fully intact. The filename gets a "compressed-" prefix, keeping it separate from your original.',
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
        <h2 className="text-xl font-bold text-text-main">PNG Compression Results by File Type</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          How much a PNG compressor reduces file size depends heavily on the image content. Flat
          colors and simple graphics compress more than complex photographs or images with many
          colors. Use this table as a starting point:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">PNG Type</th>
                <th className="text-left p-3 font-semibold text-text-main">
                  Typical Original Size
                </th>
                <th className="text-left p-3 font-semibold text-text-main">After Compression</th>
                <th className="text-left p-3 font-semibold text-text-main">Reduction</th>
                <th className="text-left p-3 font-semibold text-text-main">Best Quality</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Logo (flat colors, transparent)', '50–300KB', '20–120KB', '40–70%', 'Q80–90'],
                ['Icon (24–64px)', '2–20KB', '1–10KB', '40–60%', 'Q85'],
                ['Screenshot (1920×1080)', '1–4MB', '400KB–1.5MB', '50–65%', 'Q75–80'],
                ['UI mockup / wireframe', '500KB–3MB', '200KB–1MB', '50–65%', 'Q80'],
                ['PNG photograph (no transparency)', '2–6MB', '800KB–2.5MB', '40–55%', 'Q75'],
                ['Illustration / digital art', '500KB–5MB', '200KB–2MB', '45–60%', 'Q80'],
              ].map(([type, orig, after, reduction, q]) => (
                <tr
                  key={type}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{type}</td>
                  <td className="p-3 text-text-muted text-xs">{orig}</td>
                  <td className="p-3 text-text-muted text-xs">{after}</td>
                  <td className="p-3 text-text-muted text-xs">{reduction}</td>
                  <td className="p-3 text-text-muted text-xs">{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">Tip:</strong> If your PNG does not have transparency
          and is a photograph, converting to JPG first achieves 60–90% reduction — far more than PNG
          compression alone. Use the{' '}
          <Link href="/convert-image" className="text-primary underline">
            Convert Image tool
          </Link>{' '}
          to switch to JPG, then compress if needed.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          PNG vs JPG vs WebP — Which to Use After Compression?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Compressing a PNG is the right choice when you need to keep the PNG format. But for many
          use cases, a different format after compression produces a smaller file. Here is when to
          keep PNG vs switch format:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Keep as PNG when:</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-2">
                <span className="text-primary">→</span> Image has transparent background
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Logo with flat colors and sharp edges
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Platform only accepts PNG
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Image will be edited further
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Convert to JPG when:</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-2">
                <span className="text-primary">→</span> No transparency needed
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Image is a photograph
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Uploading to email, forms, social
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Need smallest possible file size
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Convert to WebP when:</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-2">
                <span className="text-primary">→</span> Uploading to a website
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Need transparency + small size
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Platform accepts WebP
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> WordPress 5.8+ or modern CMS
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How PNG Compression Preserves Transparency
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG images store transparency using an alpha channel — a separate layer that defines the
          opacity of each pixel. A pixel can be fully transparent (invisible), fully opaque (solid),
          or anywhere in between (semi-transparent, for soft shadows and gradients).
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This PNG compressor preserves the alpha channel through all quality levels. After
          compression, transparent pixels remain transparent — you can place the compressed PNG over
          any background and it will display correctly. Semi-transparent pixels (like drop shadows
          or glows) also retain their exact opacity values.
        </p>
        <div className="rounded-xl border border-border bg-surface p-5 space-y-2">
          <p className="font-semibold text-text-main text-sm">
            Why this matters for logos and icons
          </p>
          <p className="text-sm text-text-muted leading-relaxed">
            Brand logos are frequently placed over different colored backgrounds — white headers,
            dark footers, hero images, email templates. A PNG logo with a preserved alpha channel
            works in all these contexts. If transparency is lost during compression (as happens with
            JPG conversion), you get a white or black box around the logo instead.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">PNG Compressor for Web Performance</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Large PNG files are one of the most common causes of slow web page loads. A single
          unoptimized PNG hero image or UI mockup can weigh 3–8MB — enough to push a page&apos;s
          Largest Contentful Paint (LCP) past Google&apos;s 2.5-second &quot;Good&quot; threshold
          and directly hurt search rankings.
        </p>
        <div className="space-y-2">
          {[
            {
              use: 'Website logos and icons',
              rec: 'Compress at quality 85. Logos display at small sizes — compression artifacts are invisible at 200px wide. Target under 30KB for inline logos.',
            },
            {
              use: 'UI mockups and design previews',
              rec: 'Compress at quality 75–80. Mockups viewed in browser at standard monitor resolution tolerate moderate compression well. Target under 500KB for full-page mockups.',
            },
            {
              use: 'Blog post screenshots',
              rec: 'Compress at quality 75. Code screenshots and UI screenshots at quality 75 remain readable and sharp. Target under 200KB per screenshot.',
            },
            {
              use: 'Transparent product images (e-commerce)',
              rec: 'Compress at quality 80–85. Product images on white or transparent backgrounds need accurate color and edge quality. Target under 150KB per product image.',
            },
          ].map(({ use, rec }) => (
            <div key={use} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{use}</p>
              <p className="text-sm text-text-muted leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your PNG Files Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This PNG compressor runs entirely in your browser. When you upload a PNG, it is loaded
          into browser memory and processed using JavaScript — no data is transmitted to any server.
          For logos containing proprietary branding, UI mockups with unreleased product designs, and
          screenshots with sensitive information, this means your files are never stored, analyzed,
          or shared with any third party.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image',
              title: 'Compress Image',
              desc: 'Compress JPG, PNG, WebP — the main tool for all formats.',
            },
            {
              href: '/png-to-webp',
              title: 'PNG to WebP',
              desc: 'Convert PNG to WebP for 26% smaller files with transparency preserved.',
            },
            {
              href: '/png-to-jpg',
              title: 'PNG to JPG',
              desc: 'Convert PNG photos to JPG for the smallest possible file size.',
            },
          ].map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                {title}
              </p>
              <p className="text-xs text-text-muted mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <dl className="space-y-3">
          {[
            {
              q: 'What is a PNG compressor?',
              a: 'A PNG compressor reduces the file size of PNG images. PNG uses lossless compression by default, which makes files large — especially screenshots, illustrations, and logos. A PNG compressor applies additional compression techniques to reduce file size while maintaining image quality and transparency.',
            },
            {
              q: 'Does compressing a PNG remove transparency?',
              a: 'No. PNG transparency (alpha channel) is fully preserved during compression. Transparent pixels remain transparent, semi-transparent pixels keep their exact opacity. The compressed PNG looks identical to the original over any background.',
            },
            {
              q: 'How much can a PNG compressor reduce file size?',
              a: 'Logos and flat-color graphics: 40–70% reduction. Screenshots: 40–65%. PNG photos: 30–55%. For photographs without transparency, converting to JPG achieves 60–90% — far more than PNG compression alone.',
            },
            {
              q: 'What quality setting should I use for a PNG logo?',
              a: 'Quality 80–90 preserves sharp edges and flat colors in logos. At quality 80, a typical logo reduces by 50–65% with no visible difference. Avoid quality below 70 for logos — compression artifacts appear on sharp color boundaries.',
            },
            {
              q: 'Should I compress PNG or convert to WebP?',
              a: 'For web use, WebP lossless is typically 26% smaller than optimized PNG and supports transparency. If your platform accepts WebP (WordPress 5.8+, modern browsers), convert to WebP. Use PNG compression when the platform only accepts PNG or when you need maximum compatibility.',
            },
            {
              q: 'Can I compress a PNG screenshot without making text blurry?',
              a: 'Yes. At quality 80–85, text in screenshots stays sharp and readable. The compression algorithm is conservative on high-contrast text edges. For critical text sharpness, use quality 85+.',
            },
            {
              q: 'Is this PNG compressor free?',
              a: 'Yes — completely free with no sign-up, no watermark, and no daily limit. All compression runs in your browser. Your PNG files are never uploaded to any server.',
            },
            {
              q: 'Are my PNG files safe when using this tool?',
              a: 'Yes. All compression happens in your browser using JavaScript. Files never leave your device and are never transmitted to any server. Important for logos with proprietary branding, confidential screenshots, and unreleased product designs.',
            },
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </dl>
      </div>
    </section>
  )
}
