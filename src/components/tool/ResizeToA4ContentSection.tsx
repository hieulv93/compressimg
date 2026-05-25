import Link from 'next/link'

export default function ResizeToA4ContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">A4 Image Dimensions at Every DPI</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A4 is 21×29.7 centimeters (8.27×11.69 inches). The pixel size depends entirely on DPI —
          the same physical A4 sheet needs a different number of pixels depending on whether you are
          printing it at home, at a photo lab, or displaying it on screen. The table below covers
          the four most common DPI values.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">DPI</th>
                <th className="text-left p-3 border border-border font-semibold">Portrait (px)</th>
                <th className="text-left p-3 border border-border font-semibold">Landscape (px)</th>
                <th className="text-left p-3 border border-border font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dpi: '72 DPI',
                  portrait: '595 × 842',
                  landscape: '842 × 595',
                  use: 'PDF screen view, email',
                },
                {
                  dpi: '96 DPI',
                  portrait: '794 × 1123',
                  landscape: '1123 × 794',
                  use: 'Windows screen, presentations',
                },
                {
                  dpi: '150 DPI',
                  portrait: '1240 × 1754',
                  landscape: '1754 × 1240',
                  use: 'Office print, documents, forms',
                },
                {
                  dpi: '300 DPI',
                  portrait: '2480 × 3508',
                  landscape: '3508 × 2480',
                  use: 'Professional print, photo lab',
                },
              ].map(({ dpi, portrait, landscape, use }, i) => (
                <tr key={dpi} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{dpi}</td>
                  <td className="p-3 border border-border text-text-muted">{portrait}</td>
                  <td className="p-3 border border-border text-text-muted">{landscape}</td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common A4 Image Use Cases</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Printing a photo on A4 paper',
              desc: 'To fill an A4 sheet at a photo lab or home printer, use 300 DPI (2480×3508px). This gives a sharp print with no visible pixels at normal viewing distance.',
            },
            {
              title: 'Inserting image into Word or Google Docs',
              desc: 'Word and Google Docs use A4 as the default page size. Inserting an image at 150 DPI (1240×1754px) keeps the file small while looking sharp when printed or shared as a PDF.',
            },
            {
              title: 'Creating an A4 PDF',
              desc: 'PDF viewers use 72 DPI as the base for A4 — 595×842px. For a PDF that will be printed, use 150 or 300 DPI to ensure print quality is not lost.',
            },
            {
              title: 'Scanning and re-saving at A4',
              desc: 'Scanned documents are often saved at non-standard sizes. Resize to A4 at your target DPI to standardize the dimensions before archiving or printing.',
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
        <h2 className="text-xl font-bold text-text-main">A4 vs Other Paper Sizes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Size</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Dimensions (cm)
                </th>
                <th className="text-left p-3 border border-border font-semibold">
                  At 300 DPI (px)
                </th>
                <th className="text-left p-3 border border-border font-semibold">Common use</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  size: 'A3',
                  dims: '29.7 × 42 cm',
                  px: '3508 × 4961',
                  use: 'Posters, large format',
                },
                {
                  size: 'A4',
                  dims: '21 × 29.7 cm',
                  px: '2480 × 3508',
                  use: 'Standard documents',
                },
                {
                  size: 'A5',
                  dims: '14.8 × 21 cm',
                  px: '1748 × 2480',
                  use: 'Booklets, flyers',
                },
                {
                  size: 'US Letter',
                  dims: '21.59 × 27.94 cm',
                  px: '2550 × 3300',
                  use: 'US standard documents',
                },
              ].map(({ size, dims, px, use }, i) => (
                <tr key={size} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{dims}</td>
                  <td className="p-3 border border-border text-text-muted">{px}</td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
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
            <Link href="/resize-image-to-cm" className="text-primary hover:underline">
              Resize Image to CM
            </Link>{' '}
            — resize to any centimeter dimensions at any DPI
          </li>
          <li>
            <Link href="/resize-image-to-inches" className="text-primary hover:underline">
              Resize Image to Inches
            </Link>{' '}
            — resize using inch measurements (US Letter, 4×6, 8×10)
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
              q: 'What is A4 size in pixels at 300 DPI?',
              a: 'A4 (21×29.7 cm) at 300 DPI is 2480×3508 pixels in portrait orientation. At 150 DPI it is 1240×1754 pixels. At 72 DPI it is 595×842 pixels — the standard PDF screen size.',
            },
            {
              q: 'What is A4 in pixels at 150 DPI?',
              a: 'A4 at 150 DPI is 1240×1754 pixels (portrait). This is the standard size for inserting A4 images into Word documents and Google Docs for printing on a home or office printer.',
            },
            {
              q: 'What is A4 at 72 DPI?',
              a: 'A4 at 72 DPI is 595×842 pixels — the standard PDF page size used by Adobe Acrobat, macOS Preview, and most PDF viewers. Use 72 DPI for screen-only PDFs and presentations.',
            },
            {
              q: 'Is A4 the same as US Letter?',
              a: 'No. A4 is 21×29.7 cm (8.27×11.69 inches). US Letter is 8.5×11 inches (21.59×27.94 cm). A4 is slightly taller and narrower than Letter. Use the Resize Image to Inches tool for US Letter dimensions.',
            },
            {
              q: 'How do I resize an image to A4 for printing?',
              a: 'Select 300 DPI in the tool above, keep Portrait orientation, and click Resize Image. The output will be 2480×3508 pixels — the exact size for printing at A4 at professional print quality.',
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
