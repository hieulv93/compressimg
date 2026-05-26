import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function TwoByTwoInchContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to 2x2 inch passport photo resizing"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          US Passport Photo Requirements — 2×2 Inch Specification
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The US State Department requires all passport and visa photos to be exactly 2×2 inches
          (51×51mm). At 300 DPI — the standard for print quality — this equals 600×600 pixels. The
          photo must show your full face, centered, against a plain white background, with your head
          between 1 and 1⅜ inches (22–35mm) from chin to top of head.
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
          <p className="font-semibold text-text-main text-sm">2×2 inch — Specification Summary</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
            {[
              { label: 'Physical size', value: '2×2 inch (51×51mm)' },
              { label: 'Pixels at 300 DPI', value: '600×600px' },
              { label: 'Aspect ratio', value: '1:1 (square)' },
              { label: 'Format', value: 'JPEG (color)' },
              { label: 'Background', value: 'Plain white' },
              { label: 'Face height', value: '1–1⅜ inch from chin to top' },
              { label: 'File size (digital)', value: 'Under 240KB (DS-160)' },
              { label: 'Valid for', value: 'US Passport, US Visa, DHS, TSA PreCheck' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-2 border-b border-border pb-1.5">
                <span className="text-text-muted">{label}</span>
                <span className="font-medium text-text-main text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What 600×600 Pixels Means for Your Passport Photo
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pixels and inches are connected by DPI (dots per inch). At 300 DPI, which is the standard
          for photo printing, 2 inches equals 2 × 300 = 600 pixels. This means a 600×600px JPEG
          printed at 300 DPI will measure exactly 2×2 inches on paper.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For digital submissions (US DS-160 visa application, USPS passport application), the State
          Department accepts the same 600×600px JPEG. The file must be under 240KB. A 600×600px JPEG
          at quality 85 is typically 60–130KB — well within the limit.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Use case
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Format required
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  File size limit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  use: 'US Passport (physical print)',
                  fmt: '2×2 in print at 300 DPI',
                  limit: 'N/A — physical print',
                },
                {
                  use: 'US Passport renewal (online)',
                  fmt: 'JPEG, 600×600px minimum',
                  limit: 'Under 10MB',
                },
                { use: 'US Visa (DS-160)', fmt: 'JPEG, 600×600px', limit: 'Under 240KB' },
                {
                  use: 'TSA PreCheck / Global Entry',
                  fmt: 'JPEG, 2×2 in equivalent',
                  limit: 'Under 2MB',
                },
                {
                  use: 'US green card / immigration forms',
                  fmt: 'JPEG, 2×2 in (600×600px)',
                  limit: 'Under 2MB',
                },
              ].map(({ use, fmt, limit }) => (
                <tr key={use}>
                  <td className="px-4 py-2.5 font-medium text-text-main">{use}</td>
                  <td className="px-4 py-2.5">{fmt}</td>
                  <td className="px-4 py-2.5">{limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          State Department Photo Requirements — Full Checklist
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              category: 'Photo basics',
              items: [
                'Exactly 2×2 inches (600×600px at 300 DPI)',
                'Taken within the last 6 months',
                'Color photo — black and white not accepted',
                'JPEG format for digital submission',
              ],
            },
            {
              category: 'Background',
              items: [
                'Plain white or off-white only',
                'No patterns, gradients, or shadows',
                'No outdoor backgrounds',
                'Lighting must be even — no shadow behind head',
              ],
            },
            {
              category: 'Face and head position',
              items: [
                'Full face visible, centered in frame',
                'Looking directly at the camera',
                'Neutral expression or natural smile',
                'Eyes open, clearly visible',
              ],
            },
            {
              category: 'Clothing and accessories',
              items: [
                'No hats or head coverings (religious exceptions apply)',
                'No glasses (since 2016)',
                'Everyday clothing — no uniforms',
                'Hearing aids are allowed',
              ],
            },
          ].map(({ category, items }) => (
            <div key={category} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold text-text-main text-xs mb-2">{category}</p>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-text-muted text-xs flex gap-1.5">
                    <span className="text-primary shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Print 2×2 Inch Passport Photos at Home
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          After downloading the resized 600×600px JPEG, you can print it at home or at a pharmacy.
          Most print services offer 4×6 inch prints, which can fit four 2×2 inch passport photos in
          a 2×4 arrangement.
        </p>
        <div className="space-y-2">
          {[
            {
              step: '1',
              title: 'Print at actual size',
              text: 'In your print dialog, set scale to 100% (not "Fit to Page"). Select photo paper, 4×6 inch format.',
            },
            {
              step: '2',
              title: 'Use photo paper',
              text: 'Matte or semi-gloss photo paper. Plain printer paper is too flimsy and may be rejected.',
            },
            {
              step: '3',
              title: 'Trim to exactly 2×2 inch',
              text: 'Use scissors or a craft knife and ruler. Borders must be clean — no torn edges.',
            },
          ].map(({ step, title, text }) => (
            <div key={step} className="flex gap-3 rounded-xl border border-border bg-surface p-3">
              <span className="text-primary font-bold text-sm shrink-0 w-5">{step}.</span>
              <div>
                <p className="font-semibold text-text-main text-xs">{title}</p>
                <p className="text-text-muted text-xs mt-0.5">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Pharmacies (CVS, Walgreens, Walmart Photo) offer 2-print sets for $10–$17. If you have a
          quality inkjet printer and photo paper, home printing produces an identical result for a
          fraction of the cost.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
        <h2 className="font-semibold text-text-main">Your Photos Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All resizing runs entirely in your browser. Your passport photos are never uploaded to any
          server — there is no upload step. Safe for passport applications, visa documents, and
          sensitive ID photos. Free with no limits, no watermarks, and no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Passport Photo Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/passport-photo-maker/',
              label: 'Passport Photo Maker',
              desc: '50+ country presets, auto-crop',
            },
            {
              href: '/resize-image-for-passport/',
              label: 'Resize for Passport',
              desc: 'All countries — US, UK, India…',
            },
            {
              href: '/resize-image-to-35x45mm/',
              label: 'Resize to 35×45mm',
              desc: 'UK / Schengen / India passport',
            },
            {
              href: '/compress-image-for-passport/',
              label: 'Compress Passport Photo',
              desc: 'Under 50KB or 100KB for portals',
            },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            {
              href: '/compress-image-to-100kb/',
              label: 'Compress to 100KB',
              desc: 'Reduce for portal upload limits',
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
          Frequently Asked Questions — 2×2 Inch Passport Photo
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How many pixels is a 2×2 inch photo at 300 DPI?',
              a: '600×600 pixels. The formula is: inches × DPI = pixels. 2 × 300 = 600. A 600×600px JPEG printed at 300 DPI measures exactly 2×2 inches on paper.',
            },
            {
              q: 'Does the US passport photo have to be exactly 600×600px?',
              a: 'The State Department requires 2×2 inches, which is 600×600px at 300 DPI. For digital submissions (DS-160, online passport renewal), the minimum accepted is 600px wide. Larger is acceptable, but 600×600px at quality 85 keeps the file under the 240KB DS-160 limit.',
            },
            {
              q: 'Can I use a 2×2 inch photo for a US visa?',
              a: 'Yes. US visa applications (DS-160) use the same 2×2 inch (600×600px) requirement as US passport photos. Same background, same face positioning rules.',
            },
            {
              q: 'Can I use a 2×2 inch photo for a non-US passport?',
              a: 'No. Most countries outside the US use 35×45mm (413×531px) — a rectangular format, not square. Never use the 2×2 inch US size for a UK, Schengen, Indian, or Canadian passport application.',
            },
            {
              q: 'My phone camera takes HEIC photos — will that work?',
              a: 'Yes. This tool automatically converts HEIC files from iPhone to JPEG during the resize. Government portals and passport offices only accept JPEG — HEIC is not accepted.',
            },
            {
              q: 'How do I make my passport photo under 240KB for DS-160?',
              a: 'A 600×600px JPEG at quality 85 is typically 60–130KB — well within the 240KB DS-160 limit. If your file is still too large after resizing, use our Compress Image tool to reduce it further.',
            },
            {
              q: 'Is this tool free?',
              a: 'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens in your browser.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
