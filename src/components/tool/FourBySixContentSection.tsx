import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function FourBySixContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to 4x6 inch photo resizing"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a 4×6 Inch Photo in Pixels?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A 4×6 inch photo is the most common print size for photos — used at pharmacies, home
          printers, and photo labs worldwide. At 300 DPI (the standard for photo print quality), 4×6
          inches equals 1200×1800 pixels in portrait orientation or 1800×1200 pixels in landscape.
          At 72 DPI (screen resolution), the same 4×6 inches equals just 288×432 pixels.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">DPI</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Portrait (4×6 in)
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Landscape (6×4 in)
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  dpi: '72 DPI',
                  portrait: '288×432px',
                  landscape: '432×288px',
                  use: 'Screen / web display only',
                },
                {
                  dpi: '96 DPI',
                  portrait: '384×576px',
                  landscape: '576×384px',
                  use: 'Low-quality inkjet draft',
                },
                {
                  dpi: '150 DPI',
                  portrait: '600×900px',
                  landscape: '900×600px',
                  use: 'Acceptable home print quality',
                },
                {
                  dpi: '300 DPI',
                  portrait: '1200×1800px',
                  landscape: '1800×1200px',
                  use: 'Standard photo print — pharmacy / lab',
                },
              ].map(({ dpi, portrait, landscape, use }) => (
                <tr key={dpi}>
                  <td className="px-4 py-2.5 font-mono font-medium text-text-main">{dpi}</td>
                  <td className="px-4 py-2.5">{portrait}</td>
                  <td className="px-4 py-2.5">{landscape}</td>
                  <td className="px-4 py-2.5">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For printing, always use 300 DPI — 1200×1800px portrait or 1800×1200px landscape. Lower
          resolutions will appear blurry or pixelated when printed at 4×6 inches.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Uses for 4×6 Inch Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Printed photo albums',
              points: [
                'The standard slot size in most photo albums',
                'Portrait (1200×1800) for people and portraits',
                'Landscape (1800×1200) for scenery and group shots',
                'Print at pharmacy or photo lab for best color',
              ],
            },
            {
              title: 'Home printing',
              points: [
                'Most inkjet printers support 4×6 photo paper',
                'Use glossy or semi-gloss 4×6 paper for best results',
                'Set print scale to 100% — not "fit to page"',
                '300 DPI source required for sharp prints',
              ],
            },
            {
              title: 'Greeting cards and postcards',
              points: [
                'Standard postcard is 4×6 inches',
                'Landscape orientation for most postcard designs',
                'Print on cardstock for mailing, photo paper for display',
                'JPEG quality 92+ recommended for vivid colors',
              ],
            },
            {
              title: 'Photo gifts and services',
              points: [
                'Shutterfly, Snapfish, Walmart Photo all use 4×6',
                'Upload 1200×1800px minimum for sharp prints',
                'Pharmacy kiosks (CVS, Walgreens) accept JPEG directly',
                'File size under 10MB for most online upload portals',
              ],
            },
          ].map(({ title, points }) => (
            <div key={title} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold text-text-main text-xs mb-2">{title}</p>
              <ul className="space-y-1">
                {points.map((p) => (
                  <li key={p} className="text-text-muted text-xs flex gap-1.5">
                    <span className="text-primary shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">4×6 vs Other Common Print Sizes</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          4×6 inch is part of a family of standard print sizes. Here is how it compares to other
          common formats, all at 300 DPI:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Print size
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Pixels at 300 DPI
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                { size: '2×2 inch', px: '600×600px', use: 'Passport / ID photo (US)' },
                { size: '3×5 inch', px: '900×1500px', use: 'Small prints, wallets' },
                { size: '4×6 inch', px: '1200×1800px', use: 'Standard photo print ← this page' },
                { size: '5×7 inch', px: '1500×2100px', use: 'Framed prints, portraits' },
                { size: '8×10 inch', px: '2400×3000px', use: 'Large framed prints' },
                { size: 'A4 (8.27×11.69 in)', px: '2480×3508px', use: 'Documents, European print' },
              ].map(({ size, px, use }) => (
                <tr key={size} className={size === '4×6 inch' ? 'bg-surface' : ''}>
                  <td className="px-4 py-2.5 font-medium text-text-main">{size}</td>
                  <td className="px-4 py-2.5 font-mono">{px}</td>
                  <td className="px-4 py-2.5">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for the Best 4×6 Print Results</h2>
        <div className="space-y-2">
          {[
            {
              tip: 'Start from the largest original available',
              detail:
                'Resizing down from a large photo (12MP+) always produces sharper results than enlarging a small image. Use the original from your camera or phone, not a screenshot.',
            },
            {
              tip: 'Use portrait for people, landscape for scenery',
              detail:
                'Portrait (1200×1800px) fills the frame better for headshots and single subjects. Landscape (1800×1200px) works better for groups, scenery, and events.',
            },
            {
              tip: 'Save as JPEG at quality 90–95 before printing',
              detail:
                'Photo labs and pharmacy kiosks compress uploads slightly. Starting with a high-quality JPEG (90+) ensures no additional quality loss compounds on top of their processing.',
            },
            {
              tip: 'Check aspect ratio before cropping',
              detail:
                'A 4×6 print has a 2:3 aspect ratio. Phone photos are typically 4:3, so cropping is unavoidable — the top and bottom (or sides in landscape) will be trimmed. Compose shots with this in mind.',
            },
          ].map(({ tip, detail }) => (
            <div key={tip} className="rounded-xl border border-border bg-surface p-3">
              <p className="font-semibold text-text-main text-xs">✓ {tip}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
        <h2 className="font-semibold text-text-main">Your Photos Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All resizing runs entirely in your browser. Your photos are never uploaded to any server.
          Free with no limits, no watermarks, and no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/resize-image/', label: 'Resize Image', desc: 'Custom pixel dimensions' },
            {
              href: '/resize-image-to-inches/',
              label: 'Resize to Inches',
              desc: '4×6, 5×7, 8×10 and more',
            },
            { href: '/resize-image-to-a4/', label: 'Resize to A4', desc: '2480×3508px at 300 DPI' },
            {
              href: '/resize-image-for-passport/',
              label: 'Passport Photo Size',
              desc: 'US, UK, India and more',
            },
            { href: '/crop-image/', label: 'Crop Image', desc: 'Trim to 2:3 ratio for 4×6' },
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size for upload',
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
          Frequently Asked Questions — 4×6 Photo Size
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How many pixels is a 4×6 inch photo?',
              a: 'At 300 DPI (standard photo print quality): 1200×1800px portrait or 1800×1200px landscape. At 72 DPI (screen only): 288×432px or 432×288px. Always use 300 DPI when preparing photos for printing.',
            },
            {
              q: 'What aspect ratio is a 4×6 photo?',
              a: 'A 4×6 photo has a 2:3 aspect ratio (width:height in portrait). Most phone cameras shoot at 4:3, so cropping is required to fit a 4×6 print — the top/bottom will be slightly trimmed in portrait orientation.',
            },
            {
              q: 'Can I print a 4×6 photo at home?',
              a: 'Yes. Most inkjet printers support 4×6 photo paper. Set your print dialog to 100% scale (not "fit to page") and select the correct paper size. Use glossy or semi-gloss photo paper for best color reproduction.',
            },
            {
              q: 'What is the file size of a 4×6 photo at 300 DPI?',
              a: 'A 1200×1800px JPEG at quality 90 is typically 500KB–1.5MB. At quality 85, around 300–800KB. Photo labs and kiosks accept files up to 10MB — most 4×6 photos are well within this limit.',
            },
            {
              q: 'Can I use HEIC from my iPhone for a 4×6 print?',
              a: 'This tool automatically converts HEIC from iPhone to JPEG during the resize. Photo labs and pharmacy kiosks only accept JPEG — HEIC is not supported for print orders.',
            },
            {
              q: 'Is 4×6 the same as A6?',
              a: 'No. A6 is 105×148mm (4.13×5.83 inches) — slightly different proportions. 4×6 inch is 101.6×152.4mm. Both are similar in size but have different aspect ratios. Use 4×6 for standard photo prints, A6 for European document formats.',
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
