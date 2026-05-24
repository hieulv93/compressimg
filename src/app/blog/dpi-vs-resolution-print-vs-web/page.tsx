import Link from 'next/link'

export default function DpiVsResolutionPrintVsWeb() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav
        className="text-xs text-text-muted mb-8 flex items-center gap-1.5"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-main">DPI vs Resolution</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-24">May 24, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            DPI vs Resolution: Image Settings for Print vs Web (2026 Guide)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            DPI and resolution are two of the most confused concepts in image work. DPI (dots per
            inch) matters for printing. Resolution (pixel dimensions) matters for screens. Using the
            wrong setting leads to blurry prints or unnecessarily large files. This guide explains
            exactly how each works and which setting to use for every situation.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Quick Reference</h2>
            <div className="space-y-3 text-sm">
              {[
                {
                  scenario: 'Printing a photo (home printer)',
                  setting: '150–300 DPI',
                  note: '300 DPI for sharp quality',
                },
                {
                  scenario: 'Commercial print (magazine, flyer)',
                  setting: '300 DPI',
                  note: 'Industry standard minimum',
                },
                {
                  scenario: 'Large format (banner, poster)',
                  setting: '72–150 DPI',
                  note: 'Viewed from a distance',
                },
                {
                  scenario: 'Web images (website, email)',
                  setting: 'Any DPI — only pixel dimensions matter',
                  note: 'DPI is ignored by browsers',
                },
                {
                  scenario: 'Social media upload',
                  setting: 'Any DPI',
                  note: 'Platform re-compresses regardless',
                },
                {
                  scenario: 'Retina / HiDPI screen',
                  setting: 'Serve at 2× pixel dimensions',
                  note: 'Device handles DPI scaling',
                },
              ].map(({ scenario, setting, note }, i) => (
                <div key={scenario} className={`p-3 rounded-lg ${i % 2 === 0 ? '' : 'bg-surface'}`}>
                  <div className="flex items-start gap-3">
                    <span className="flex-1 text-text-muted">{scenario}</span>
                    <div className="text-right">
                      <p className="font-medium text-text-main">{setting}</p>
                      <p className="text-xs text-text-muted">{note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Is DPI?</h2>
            <p>
              DPI stands for <em>dots per inch</em> — a measurement of how many ink dots a printer
              places in one inch of physical output. More dots per inch means finer detail and
              sharper edges in the printed result.
            </p>
            <p className="mt-3">
              DPI is a <strong>print concept</strong>. It describes the relationship between a
              digital image&apos;s pixel data and a physical output size. A 3000 × 2400 pixel image
              printed at 300 DPI produces a 10 × 8 inch print. The same image at 150 DPI produces a
              20 × 16 inch print — same pixels, just spread across more physical space.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <p className="font-semibold mb-2">The formula:</p>
              <p className="font-mono bg-surface px-3 py-2 rounded">
                Print size (inches) = Pixel dimension ÷ DPI
              </p>
              <p className="text-text-muted mt-2">
                Example: 3000 px ÷ 300 DPI = 10 inch print at full quality
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Is PPI?</h2>
            <p>
              PPI stands for <em>pixels per inch</em> — the same concept as DPI but used for screens
              instead of printers. A 72 PPI monitor displays 72 pixels per physical inch of screen.
              A 300 PPI Retina display shows 300 pixels per inch — which is why text and images
              appear sharper on high-resolution screens.
            </p>
            <p className="mt-3">
              In everyday use, DPI and PPI are used interchangeably — people say &quot;72 DPI for
              web&quot; when they technically mean 72 PPI. The distinction matters in professional
              workflows but not in practical image optimization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">DPI for Web: Why It Doesn&apos;t Matter</h2>
            <p>
              This is the most important point in this guide:{' '}
              <strong>browsers ignore the DPI setting embedded in image files</strong>. What matters
              for web images is pixel dimensions only.
            </p>
            <p className="mt-3">
              When you export an image at &quot;72 DPI&quot; for web versus &quot;300 DPI&quot; for
              print, you are not changing the number of pixels — you are only changing a metadata
              tag embedded in the file. A browser reads the pixel dimensions and ignores the DPI tag
              entirely.
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <p className="font-semibold mb-2">Proof:</p>
              <ul className="list-disc pl-5 space-y-1 text-text-muted">
                <li>800 × 600 px image exported at 72 DPI → browser displays it at 800 × 600 px</li>
                <li>
                  800 × 600 px image exported at 300 DPI → browser displays it at 800 × 600 px
                  (identical)
                </li>
                <li>
                  The file exported at 300 DPI is slightly larger due to extra metadata — but looks
                  identical
                </li>
              </ul>
            </div>
            <p className="mt-4">
              For web images, the only setting that affects display is pixel dimensions. The DPI
              embedded in the file has no effect on how the browser renders the image.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">300 DPI for Print: What It Means</h2>
            <p>
              300 DPI is the standard resolution for professional print work — magazines, brochures,
              business cards, photo prints. At 300 DPI, individual ink dots are small enough that
              the human eye cannot distinguish them at normal viewing distance (25–30 cm / 10–12
              inches).
            </p>
            <p className="mt-3">
              The practical implication: to print at a given physical size at 300 DPI, you need a
              specific minimum pixel count.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Print size</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Pixels needed at 300 DPI
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">Megapixels</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: '4 × 6 in (10 × 15 cm)', pixels: '1200 × 1800 px', mp: '2.2 MP' },
                    { size: '5 × 7 in (13 × 18 cm)', pixels: '1500 × 2100 px', mp: '3.2 MP' },
                    { size: '8 × 10 in (20 × 25 cm)', pixels: '2400 × 3000 px', mp: '7.2 MP' },
                    { size: 'A4 (21 × 29.7 cm)', pixels: '2480 × 3508 px', mp: '8.7 MP' },
                    { size: 'A3 (29.7 × 42 cm)', pixels: '3508 × 4961 px', mp: '17.4 MP' },
                    { size: '11 × 14 in (28 × 36 cm)', pixels: '3300 × 4200 px', mp: '13.9 MP' },
                  ].map(({ size, pixels, mp }, i) => (
                    <tr key={size} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{size}</td>
                      <td className="p-3 border border-border font-medium text-text-main">
                        {pixels}
                      </td>
                      <td className="p-3 border border-border text-text-muted">{mp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Passport and ID Photo DPI Requirements</h2>
            <p>
              Passport photos have specific size requirements measured in millimeters. At 300 DPI
              (the digital equivalent for ID printing), the pixel calculation is:
            </p>
            <div className="mt-4 border border-border rounded-xl p-4 text-sm">
              <p className="font-mono bg-surface px-3 py-2 rounded">Pixels = mm × (300 ÷ 25.4)</p>
              <p className="text-text-muted mt-2">
                Example: 35mm wide → 35 × (300/25.4) = 413 pixels wide
              </p>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Country</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Physical size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Pixels at 300 DPI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      country: 'United States',
                      physical: '2 × 2 inch (51 × 51mm)',
                      pixels: '600 × 600 px',
                    },
                    {
                      country: 'United Kingdom / EU',
                      physical: '35 × 45mm',
                      pixels: '413 × 531 px',
                    },
                    { country: 'Canada', physical: '50 × 70mm', pixels: '591 × 827 px' },
                    { country: 'Australia', physical: '35 × 45mm', pixels: '413 × 531 px' },
                    { country: 'China', physical: '33 × 48mm', pixels: '390 × 567 px' },
                  ].map(({ country, physical, pixels }, i) => (
                    <tr key={country} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{country}</td>
                      <td className="p-3 border border-border text-text-muted">{physical}</td>
                      <td className="p-3 border border-border font-medium">{pixels}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Generate the correct pixel size for your passport:{' '}
              <Link href="/passport-photo-maker" className="text-primary hover:underline">
                Passport Photo Maker
              </Link>{' '}
              — free, browser-based, 10 country presets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">DPI for Large Format Print</h2>
            <p>
              For large format output — banners, posters, trade show displays — 300 DPI is neither
              required nor practical. These materials are viewed from a distance where individual
              dots are not distinguishable.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Format</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Viewing distance
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Recommended DPI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { format: 'Business card / brochure', distance: '25–30 cm', dpi: '300 DPI' },
                    { format: 'A0 poster (viewed up close)', distance: '50–80 cm', dpi: '150 DPI' },
                    { format: 'Trade show banner (2m+)', distance: '1–2 m', dpi: '100–150 DPI' },
                    { format: 'Billboard / outdoor sign', distance: '5–50 m', dpi: '15–72 DPI' },
                    { format: 'Vehicle wrap', distance: '3–10 m', dpi: '50–100 DPI' },
                  ].map(({ format, distance, dpi }, i) => (
                    <tr key={format} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{format}</td>
                      <td className="p-3 border border-border text-text-muted">{distance}</td>
                      <td className="p-3 border border-border font-medium text-primary">{dpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Retina Screens and Web Images</h2>
            <p>
              High-DPI (Retina, HiDPI) screens display at 2× or 3× pixel density. A standard screen
              at 1920 × 1080 CSS pixels would need a 3840 × 2160 pixel image to look sharp on a 2×
              Retina display.
            </p>
            <p className="mt-3">
              The practical solution for web is to serve 2× resolution images using the{' '}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">srcset</code> attribute:
            </p>
            <pre className="mt-3 bg-surface border border-border rounded-xl p-4 text-xs overflow-x-auto">
              {`<img
  src="image-400.jpg"
  srcset="image-400.jpg 1x, image-800.jpg 2x"
  alt="Description"
  width="400"
  height="300"
/>`}
            </pre>
            <p className="mt-3">
              On a standard screen, the browser downloads the 400px version. On a Retina screen, it
              downloads the 800px version — same visual display size, sharper rendering.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/passport-photo-maker" className="text-primary hover:underline">
                  Passport photo maker
                </Link>{' '}
                — correct pixel sizes at 300 DPI for 10 countries
              </li>
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — reduce file size for web without affecting DPI
              </li>
              <li>
                <Link href="/resize-image" className="text-primary hover:underline">
                  Resize image
                </Link>{' '}
                — change pixel dimensions for print or web
              </li>
              <li>
                <Link href="/blog/image-seo-guide" className="text-primary hover:underline">
                  Image SEO guide
                </Link>{' '}
                — how image settings affect search rankings
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What is the difference between DPI and resolution?',
                  a: 'DPI (dots per inch) is a print concept — it describes how many ink dots a printer places per inch of physical output. Resolution refers to the total pixel count of an image (e.g., 3000 × 2400 px). For printing, both are relevant. For web, only pixel dimensions matter — DPI is ignored by browsers.',
                },
                {
                  q: 'Does DPI matter for web images?',
                  a: 'No. Browsers ignore the DPI value embedded in image files. For web images, only the pixel dimensions affect display. A 800 × 600 px image at 72 DPI displays identically to the same image at 300 DPI — both appear at 800 × 600 pixels in the browser.',
                },
                {
                  q: 'What DPI should I use for print?',
                  a: '300 DPI is the standard for professional print work — photos, magazines, brochures, business cards. For large-format materials viewed from a distance (banners, posters), 100–150 DPI is sufficient. For billboards, as low as 15–72 DPI is common.',
                },
                {
                  q: 'What is 72 DPI in pixels?',
                  a: '72 DPI is a screen resolution standard — originally set by Apple in the 1980s. At 72 DPI, 1 CSS pixel = 1 physical pixel on an original standard monitor. On modern Retina displays at 144+ PPI, the OS scales the display so 1 CSS pixel is still rendered at the same apparent size.',
                },
                {
                  q: 'How do I calculate pixels needed for a print at 300 DPI?',
                  a: 'Multiply the desired print size in inches by 300. For a 4 × 6 inch print: 4 × 300 = 1200 px wide, 6 × 300 = 1800 px tall. For millimeters: px = mm × (300 / 25.4). For example, 35mm = 35 × 11.81 = 413 px.',
                },
                {
                  q: 'Can I change the DPI of an image without losing quality?',
                  a: 'You can change the DPI metadata embedded in a file without resampling the actual pixels. This does not change the image quality or pixel count — only the embedded print size hint. However, increasing DPI by adding new pixels (upsampling) does reduce quality because the software has to invent pixel data.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-text-main mb-2">{q}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
