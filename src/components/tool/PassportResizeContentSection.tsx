import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function PassportResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing passport photos"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Passport Photo Sizes by Country</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Passport photo requirements vary by country but follow a small set of standard dimensions.
          Most countries use either 35×45mm or 2×2 inch (51×51mm). For digital submissions, 300 DPI
          is the standard print quality — which converts to 413×531px for 35×45mm, and 600×600px for
          2×2 inch.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Country / Document
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Physical size
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Pixels at 300 DPI
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Background
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  country: 'US Passport / Visa',
                  size: '2×2 inch (51×51mm)',
                  px: '600×600px',
                  bg: 'Plain white',
                },
                {
                  country: 'UK Passport',
                  size: '35×45mm',
                  px: '413×531px',
                  bg: 'Light grey / cream',
                },
                {
                  country: 'Schengen Visa',
                  size: '35×45mm',
                  px: '413×531px',
                  bg: 'Light grey',
                },
                { country: 'India Passport', size: '35×45mm', px: '413×531px', bg: 'White' },
                {
                  country: 'India PAN / Aadhaar',
                  size: '25×35mm',
                  px: '295×413px',
                  bg: 'White',
                },
                {
                  country: 'Canada Passport',
                  size: '50×70mm',
                  px: '591×827px',
                  bg: 'Plain white',
                },
                {
                  country: 'Australia Passport',
                  size: '35×45mm',
                  px: '413×531px',
                  bg: 'Plain light',
                },
                {
                  country: 'China Visa',
                  size: '33×48mm',
                  px: '390×567px',
                  bg: 'White',
                },
                { country: 'Japan Passport', size: '35×45mm', px: '413×531px', bg: 'Plain' },
                {
                  country: 'Vietnam Passport',
                  size: '4×6cm',
                  px: '473×709px',
                  bg: 'White / Blue',
                },
              ].map(({ country, size, px, bg }) => (
                <tr key={country}>
                  <td className="px-4 py-2.5 font-medium text-text-main">{country}</td>
                  <td className="px-4 py-2.5">{size}</td>
                  <td className="px-4 py-2.5 font-mono">{px}</td>
                  <td className="px-4 py-2.5">{bg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          All of the above sizes assume 300 DPI — the standard for printed passport photos. Digital
          portals (DS-160, UKVI, VFS) accept the same pixel dimensions at screen resolution.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Resize a Photo for a Passport</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Resizing gets the pixel dimensions right. You still need a clear, front-facing photo with
          the correct background. Follow these steps for an accepted result:
        </p>
        <div className="space-y-2">
          {[
            {
              step: '1',
              title: 'Select your country preset',
              text: 'Choose the country or document type above. The correct pixel dimensions are set automatically — no manual calculation needed.',
            },
            {
              step: '2',
              title: 'Upload a clear front-facing photo',
              text: 'Use a recent photo with your face centered and eyes open. Good lighting matters — passport offices reject photos with shadows across the face or a patterned background.',
            },
            {
              step: '3',
              title: 'Download and submit',
              text: 'Download the resized JPEG. For digital portals, upload the file directly. For printed applications, print at 300 DPI on matte or semi-gloss paper and trim to size.',
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
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Digital vs Printed Passport Photos — What You Need
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Digital submission (online portal)',
              points: [
                'Minimum 600×600px (US); 413×531px (UK/Schengen/India)',
                'File size typically under 240KB–10MB depending on portal',
                'JPEG format — PNG and HEIC not accepted',
                'Upload directly to DS-160, UKVI, VFS, or embassy portal',
              ],
            },
            {
              title: 'Printed submission (paper application)',
              points: [
                '300 DPI required for standard print quality',
                'Print at home or at a pharmacy / print shop',
                'Trim to exact size: 35×45mm or 2×2 inch (51×51mm)',
                'Matte or semi-gloss paper — no glossy sheen',
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
        <h2 className="text-xl font-bold text-text-main">
          5 Common Passport Photo Mistakes to Avoid
        </h2>
        <div className="space-y-2">
          {[
            {
              mistake: 'Wrong country preset — wrong dimensions',
              fix: 'US requires 2×2 inch (600×600px). UK, Schengen, India use 35×45mm (413×531px). Canada uses 50×70mm (591×827px). Always verify the target country before resizing.',
            },
            {
              mistake: 'Resizing up from a small photo',
              fix: 'Enlarging a small image creates a blurry output. Start with a photo of at least 1200×1200px and resize down. Phone cameras produce 12–48MP images — use the original, not a screenshot.',
            },
            {
              mistake: 'Colored or patterned background',
              fix: 'Most countries require a plain white or light grey background. Use our Passport Photo Maker tool to auto-set the correct background color.',
            },
            {
              mistake: 'Uploading a HEIC file to a government portal',
              fix: 'Government portals accept JPEG only. This tool automatically converts HEIC files from iPhone to JPEG during the resize step.',
            },
            {
              mistake: 'File too large for the portal upload limit',
              fix: 'After resizing, use our Compress Image tool to reduce file size. A 600×600px JPEG at quality 85 is typically 60–120KB — within all major portal limits.',
            },
          ].map(({ mistake, fix }) => (
            <div key={mistake} className="rounded-xl border border-border bg-surface p-3">
              <p className="font-semibold text-text-main text-xs">❌ {mistake}</p>
              <p className="text-text-muted text-xs mt-0.5">✓ {fix}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
        <h2 className="font-semibold text-text-main">Your Passport Photos Stay Private</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All resizing runs entirely in your browser. Your passport photos are never uploaded to any
          server — there is no upload step. Safe for passport applications, visa documents, and any
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
              href: '/resize-image-to-2x2-inch/',
              label: 'Resize to 2×2 Inch',
              desc: 'US passport — 600×600px',
            },
            {
              href: '/resize-image-to-35x45mm/',
              label: 'Resize to 35×45mm',
              desc: 'UK / Schengen / India passport',
            },
            {
              href: '/compress-image-for-passport/',
              label: 'Compress Passport Photo',
              desc: 'Under 50KB or 100KB',
            },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Custom pixel dimensions' },
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
          Frequently Asked Questions About Passport Photo Resizing
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What pixel size should a passport photo be?',
              a: 'US passport photos must be 600×600px (2×2 inch at 300 DPI). UK, Schengen, India, Australia, and Japan use 413×531px (35×45mm at 300 DPI). Canada uses 591×827px (50×70mm at 300 DPI). India PAN/Aadhaar uses 295×413px (25×35mm at 300 DPI). Select the correct country preset to get the exact size automatically.',
            },
            {
              q: 'Is 35×45mm the same as 2×2 inch?',
              a: 'No. 35×45mm (1.38×1.77 inch) is used by the UK, Schengen zone, India, Japan, and most of the world. 2×2 inch (51×51mm) is the US standard — a larger, square format. Never use the US size for a UK or Schengen application.',
            },
            {
              q: 'Can I use a HEIC photo from my iPhone for a passport?',
              a: 'Government portals accept JPEG only, not HEIC. This tool automatically converts HEIC from iPhone to JPEG during the resize. You will receive a JPEG file at the correct dimensions ready for upload or print.',
            },
            {
              q: 'What background color is required for a passport photo?',
              a: 'The US, Canada, and India require a plain white background. The UK allows white or off-white (light grey/cream). Schengen requires a plain light-coloured background. Most countries reject photos with patterned, coloured, or outdoor backgrounds.',
            },
            {
              q: 'My passport portal says the file is too large — what do I do?',
              a: 'After resizing, use our Compress Image tool to reduce the file size. A 600×600px JPEG at quality 85 is typically 60–120KB, well within all major portal limits. The DS-160 accepts files up to 240KB; UKVI accepts up to 10MB.',
            },
            {
              q: 'How do I print a passport photo at home?',
              a: 'Download the resized photo and print at 300 DPI on matte or semi-gloss photo paper. Most inkjet printers support this. Print at actual size (not "fit to page") and trim with scissors or a craft knife to the exact dimension: 35×45mm or 2×2 inch.',
            },
            {
              q: 'Is this passport photo resizer free?',
              a: 'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens entirely in your browser — your photos never leave your device.',
            },
            {
              q: 'What is the difference between a passport photo and a visa photo?',
              a: 'Many countries use the same physical size for both (35×45mm for UK passport and UK visa, 2×2 inch for US passport and US visa). Always check the specific requirements for your document — background color, face height ratio, and file size limits can differ even within the same country.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
