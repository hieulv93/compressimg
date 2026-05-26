import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function ThirtyFiveByFortyFiveMmContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to 35x45mm passport photo resizing"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Countries That Use 35×45mm Passport Photos
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          35×45mm is the most widely used passport photo format in the world. It is the standard for
          the UK, all 27 Schengen countries, India, Australia, Japan, and dozens of other nations.
          At 300 DPI (the standard for print quality), 35×45mm converts to 413×531 pixels.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Country / Document
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Size</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Background
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Face height
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  country: 'UK Passport',
                  size: '35×45mm',
                  bg: 'White / light grey',
                  face: '29–34mm',
                },
                {
                  country: 'Schengen Visa (all 27 countries)',
                  size: '35×45mm',
                  bg: 'Light grey or white',
                  face: '32–36mm',
                },
                {
                  country: 'India Passport',
                  size: '35×45mm',
                  bg: 'White',
                  face: '25–35mm',
                },
                {
                  country: 'Australia Passport',
                  size: '35×45mm',
                  bg: 'Plain light',
                  face: '32–36mm',
                },
                {
                  country: 'Japan Passport',
                  size: '35×45mm',
                  bg: 'Plain light',
                  face: '32–36mm',
                },
                {
                  country: 'New Zealand Passport',
                  size: '35×45mm',
                  bg: 'Light grey',
                  face: '32–36mm',
                },
                {
                  country: 'South Korea Passport',
                  size: '35×45mm',
                  bg: 'White',
                  face: '32–36mm',
                },
                {
                  country: 'Singapore Passport',
                  size: '35×45mm',
                  bg: 'White',
                  face: '32–36mm',
                },
              ].map(({ country, size, bg, face }) => (
                <tr key={country}>
                  <td className="px-4 py-2.5 font-medium text-text-main">{country}</td>
                  <td className="px-4 py-2.5 font-mono">{size}</td>
                  <td className="px-4 py-2.5">{bg}</td>
                  <td className="px-4 py-2.5">{face}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Each country has slightly different face height and background requirements, but all use
          the same 35×45mm physical size — 413×531px at 300 DPI.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          35×45mm in Pixels — The Conversion Explained
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Millimeters and pixels are connected by DPI (dots per inch). The standard for printed
          photos is 300 DPI. To convert millimeters to pixels:
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 space-y-2 font-mono text-xs text-text-muted">
          <p>
            Width: 35mm ÷ 25.4mm/inch × 300 DPI ={' '}
            <span className="text-text-main font-bold">413px</span>
          </p>
          <p>
            Height: 45mm ÷ 25.4mm/inch × 300 DPI ={' '}
            <span className="text-text-main font-bold">531px</span>
          </p>
          <p className="mt-2 text-text-main">
            Result: <span className="font-bold">413×531 pixels at 300 DPI = 35×45mm printed</span>
          </p>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For digital portal submissions (UKVI, Schengen visa applications, Indian Passport Seva),
          the same pixel dimensions apply. File size limits vary by portal — most accept JPEG files
          between 100KB and 10MB.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          UK vs Schengen vs India — Same Size, Different Rules
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All three use 35×45mm (413×531px), but differ in face requirements and background:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              country: 'UK Passport',
              rules: [
                '35×45mm — white or off-white background',
                'Face 29–34mm from chin to crown',
                'Head centered in the frame',
                'No glasses since 2021',
                'Taken within 1 month',
              ],
            },
            {
              country: 'Schengen Visa',
              rules: [
                '35×45mm — light grey or white background',
                'Face 32–36mm (70–80% of frame)',
                'Neutral expression, mouth closed',
                'No glasses, no hat',
                'Taken within 6 months',
              ],
            },
            {
              country: 'India Passport',
              rules: [
                '35×45mm — plain white background',
                'Face 25–35mm, centered',
                'Light-coloured clothing preferred',
                'No spectacles for new applications',
                'Taken within 3 months',
              ],
            },
          ].map(({ country, rules }) => (
            <div key={country} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold text-text-main text-xs mb-2">{country}</p>
              <ul className="space-y-1">
                {rules.map((r) => (
                  <li key={r} className="text-text-muted text-xs flex gap-1.5">
                    <span className="text-primary shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Print 35×45mm Passport Photos</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          After downloading the resized 413×531px JPEG, you can print it at home or at a photo print
          service. A standard 4×6 inch print fits six 35×45mm passport photos.
        </p>
        <div className="space-y-2">
          {[
            {
              step: '1',
              title: 'Print at actual size — 300 DPI',
              text: 'In your print dialog, disable "Fit to page" and set scale to 100%. Select 4×6 photo paper.',
            },
            {
              step: '2',
              title: 'Use matte or semi-gloss photo paper',
              text: 'Most passport offices require matte or semi-gloss. Glossy paper may be rejected.',
            },
            {
              step: '3',
              title: 'Trim to exactly 35×45mm',
              text: 'Use a ruler and scissors or craft knife. Measure twice — clean edges are required. 35mm wide, 45mm tall.',
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

      <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
        <h2 className="font-semibold text-text-main">Your Photos Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All resizing runs entirely in your browser. Your passport photos are never uploaded to any
          server. Safe for passport applications, visa documents, and sensitive ID photos. Free with
          no limits, no watermarks, and no account required.
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
              desc: 'All countries in one tool',
            },
            {
              href: '/resize-image-to-2x2-inch/',
              label: 'Resize to 2×2 Inch',
              desc: 'US passport — 600×600px',
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
          Frequently Asked Questions — 35×45mm Passport Photos
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How many pixels is 35×45mm at 300 DPI?',
              a: '413×531 pixels. The calculation: 35 ÷ 25.4 × 300 = 413px wide; 45 ÷ 25.4 × 300 = 531px tall. This is the standard pixel size for UK, Schengen, India, Australia, and Japan passport photos at print quality.',
            },
            {
              q: 'Is 35×45mm the same as 2×2 inch?',
              a: 'No. 35×45mm (413×531px) is a rectangular format, 1.38×1.77 inch. 2×2 inch (600×600px) is the US standard — a larger, square format. Never use the 2×2 inch US format for a UK or Schengen passport application.',
            },
            {
              q: 'Can I use a HEIC photo from my iPhone for a UK or Schengen passport?',
              a: 'Passport offices and visa portals only accept JPEG. This tool automatically converts HEIC files from iPhone to JPEG during the resize — you will receive a JPEG file at 413×531px ready for upload or print.',
            },
            {
              q: 'What background does a 35×45mm passport photo need?',
              a: 'UK passport: white or off-white (light grey/cream). Schengen visa: light grey or white. India passport: plain white. Most countries reject photos with patterned, coloured, or outdoor backgrounds.',
            },
            {
              q: 'How do I submit a 35×45mm photo to UKVI digitally?',
              a: 'The UKVI online passport application accepts JPEG files from 50KB to 10MB. Upload the 413×531px JPEG directly. The system will verify the dimensions and flag if the photo does not meet requirements.',
            },
            {
              q: 'Can I print a 35×45mm photo at home?',
              a: 'Yes. Print the 413×531px JPEG at 300 DPI on matte or semi-gloss photo paper. Use actual size (not "fit to page") and trim to exactly 35mm wide × 45mm tall. A ruler and sharp scissors or craft knife produce clean edges.',
            },
            {
              q: 'Is this 35×45mm photo resizer free?',
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
