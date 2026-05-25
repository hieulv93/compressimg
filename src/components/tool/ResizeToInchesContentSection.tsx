import Link from 'next/link'

export default function ResizeToInchesContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Resize an Image in Inches?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          US print sizes — Letter (8.5×11 in), 4×6 photo, 5×7, 8×10 — are measured in inches. A
          printer, photo lab, or publisher will ask for images at a specific inch size and DPI.
          Entering dimensions in inches lets you target those sizes directly and see the resulting
          pixel count before you resize.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The formula is simple: pixels = inches × DPI. A 4×6 inch photo at 300 DPI produces a
          1200×1800px image. At 150 DPI it produces 600×900px — half the resolution, one quarter the
          file size. Choose the DPI that matches your print destination.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Common US Print Sizes and Their Pixel Equivalents
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Print size</th>
                <th className="text-left p-3 border border-border font-semibold">Inches</th>
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
                {
                  name: 'Wallet',
                  dims: '2.5 × 3.5 in',
                  px150: '375 × 525',
                  px300: '750 × 1050',
                },
                { name: '4×6 photo', dims: '4 × 6 in', px150: '600 × 900', px300: '1200 × 1800' },
                { name: '5×7 photo', dims: '5 × 7 in', px150: '750 × 1050', px300: '1500 × 2100' },
                {
                  name: '8×10 photo',
                  dims: '8 × 10 in',
                  px150: '1200 × 1500',
                  px300: '2400 × 3000',
                },
                {
                  name: 'US Letter',
                  dims: '8.5 × 11 in',
                  px150: '1275 × 1650',
                  px300: '2550 × 3300',
                },
                {
                  name: 'US Legal',
                  dims: '8.5 × 14 in',
                  px150: '1275 × 2100',
                  px300: '2550 × 4200',
                },
                {
                  name: 'Tabloid / Ledger',
                  dims: '11 × 17 in',
                  px150: '1650 × 2550',
                  px300: '3300 × 5100',
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
        <h2 className="text-xl font-bold text-text-main">When to Use Each DPI</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: '72 DPI — web and screen',
              desc: 'Standard screen resolution. Use for images that will only be viewed on a monitor — website photos, email images, and social media. Printing at 72 DPI produces blurry output.',
            },
            {
              title: '96 DPI — Windows default',
              desc: 'Windows default screen DPI. Images at 96 DPI look correct at 100% zoom on most Windows monitors. Not suitable for printing — use 150 or 300 DPI for physical output.',
            },
            {
              title: '150 DPI — home and office print',
              desc: 'Good for documents, reports, and presentations printed on a home inkjet or office laser printer. Half the file size of 300 DPI with acceptable quality at normal reading distance.',
            },
            {
              title: '300 DPI — photo labs and professional print',
              desc: 'Required by photo labs (Walgreens, CVS, Shutterfly) and professional printers. At 300 DPI, prints look sharp with no visible pixels. Always use 300 DPI for photo prints.',
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
            <Link href="/resize-image-to-cm" className="text-primary hover:underline">
              Resize Image to CM
            </Link>{' '}
            — resize using metric measurements (A4, A5, A3)
          </li>
          <li>
            <Link href="/resize-image-to-a4" className="text-primary hover:underline">
              Resize Image to A4
            </Link>{' '}
            — resize to A4 (8.27×11.69 in) at any DPI
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
            — reduce file size after resizing for web or email
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'How many pixels is 4×6 inches at 300 DPI?',
              a: '4×6 inches at 300 DPI is 1200×1800 pixels. The formula is pixels = inches × DPI. At 150 DPI, 4×6 = 600×900px.',
            },
            {
              q: 'How many pixels is 8.5×11 inches at 300 DPI?',
              a: 'US Letter (8.5×11 inches) at 300 DPI is 2550×3300 pixels. At 150 DPI it is 1275×1650 pixels. At 96 DPI it is 816×1056 pixels.',
            },
            {
              q: 'What DPI do photo labs require?',
              a: "Most photo labs (Walgreens, CVS, Shutterfly, MPIX) require 300 DPI for sharp prints. Some accept 200 DPI for large-format prints (posters) where the viewing distance is greater. Always check the lab's submission requirements.",
            },
            {
              q: 'Is inch the same as inch in printing?',
              a: 'Yes — 1 inch = 2.54 cm exactly. If your design is specified in centimeters, use the Resize Image to CM tool instead. Use this tool when dimensions are specified in inches.',
            },
            {
              q: 'Does resizing to inches change the image format?',
              a: 'No. JPG input produces JPG output. PNG input produces PNG output. The format is preserved. Only the pixel dimensions change.',
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
