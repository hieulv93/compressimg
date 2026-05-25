import Link from 'next/link'

export default function ResizeToCmContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Resize an Image to Centimeters?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Print dimensions are measured in centimeters (or inches) — not pixels. A file that is
          2480×3508 pixels means nothing to a printer until you also specify DPI. At 300 DPI, those
          pixels produce an A4 print. At 72 DPI, they produce an A0 poster. Resizing to centimeters
          lets you set the physical output size directly and choose the DPI separately, so the pixel
          count is computed for you.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Use 300 DPI for professional print output (photos, brochures, business cards), 150 DPI for
          documents and forms, and 72–96 DPI for screen-only files like web images or email
          attachments.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Common Print Sizes in Centimeters and Their Pixel Equivalents
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Paper / Print</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Dimensions (cm)
                </th>
                <th className="text-left p-3 border border-border font-semibold">
                  At 150 DPI (px)
                </th>
                <th className="text-left p-3 border border-border font-semibold">
                  At 300 DPI (px)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'A4', dims: '21 × 29.7 cm', px150: '1240 × 1754', px300: '2480 × 3508' },
                { name: 'A5', dims: '14.8 × 21 cm', px150: '874 × 1240', px300: '1748 × 2480' },
                { name: 'A3', dims: '29.7 × 42 cm', px150: '1754 × 2480', px300: '3508 × 4961' },
                {
                  name: '10×15 cm (4×6")',
                  dims: '10 × 15 cm',
                  px150: '591 × 886',
                  px300: '1181 × 1772',
                },
                {
                  name: 'Passport (EU)',
                  dims: '3.5 × 4.5 cm',
                  px150: '207 × 266',
                  px300: '413 × 531',
                },
                {
                  name: 'Business card',
                  dims: '8.5 × 5.5 cm',
                  px150: '502 × 325',
                  px300: '1004 × 650',
                },
              ].map(({ name, dims, px150, px300 }, i) => (
                <tr key={name} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{name}</td>
                  <td className="p-3 border border-border text-text-muted">{dims}</td>
                  <td className="p-3 border border-border text-text-muted">{px150}</td>
                  <td className="p-3 border border-border text-text-muted">{px300}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Choosing the Right DPI</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: '72 DPI — screen and PDF',
              desc: 'Standard for web images and PDF files viewed on screen. A 72 DPI image printed at actual size looks pixelated. Use this only for digital-only files.',
            },
            {
              title: '96 DPI — Windows screen',
              desc: "Windows default screen resolution. Good for presentations and Word documents that won't be printed — slightly better than 72 DPI but still not suitable for print.",
            },
            {
              title: '150 DPI — document and form print',
              desc: 'Adequate for office documents, government forms, and reports printed on a home or office printer. Half the file size of 300 DPI with acceptable print quality.',
            },
            {
              title: '300 DPI — professional print',
              desc: 'Required by photo labs, printers, and publishers. At 300 DPI, printed images look sharp and clear at normal viewing distance. The standard for all professional print work.',
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
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/resize-image-to-a4" className="text-primary hover:underline">
              Resize Image to A4
            </Link>{' '}
            — resize to A4 (21×29.7 cm) at any DPI with portrait/landscape toggle
          </li>
          <li>
            <Link href="/resize-image-to-inches" className="text-primary hover:underline">
              Resize Image to Inches
            </Link>{' '}
            — resize using US measurements (Letter, 4×6, 8×10)
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image
            </Link>{' '}
            — resize to exact pixel dimensions
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image
            </Link>{' '}
            — reduce file size after resizing
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'How many pixels is 21 cm at 300 DPI?',
              a: '21 cm at 300 DPI is 2480 pixels. The formula is: pixels = (cm ÷ 2.54) × DPI. So 21 ÷ 2.54 = 8.268 inches × 300 = 2480px. At 150 DPI, 21 cm = 1240px.',
            },
            {
              q: 'How many pixels is 10 cm at 300 DPI?',
              a: '10 cm at 300 DPI is 1181 pixels. (10 ÷ 2.54) × 300 = 3.937 × 300 = 1181px. At 150 DPI, 10 cm = 591px.',
            },
            {
              q: 'What DPI should I use for printing?',
              a: '300 DPI is the standard for professional print output — photo labs, brochures, and publishers all require 300 DPI. 150 DPI is acceptable for home and office printing of documents. 72–96 DPI is for screen display only.',
            },
            {
              q: 'What is A4 size in pixels?',
              a: 'A4 (21×29.7 cm) at 300 DPI is 2480×3508 pixels. At 150 DPI it is 1240×1754 pixels. At 72 DPI it is 595×842 pixels — the standard PDF page size.',
            },
            {
              q: 'Does the tool preserve the image format?',
              a: 'Yes. JPG input produces JPG output. PNG input produces PNG output. The format is preserved during resizing.',
            },
            {
              q: 'Is my image uploaded to a server?',
              a: 'No. All resizing happens entirely in your browser using the Canvas API. Your image file never leaves your device.',
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
