import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function ImageToPdfContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to converting images to PDF online"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert an Image to PDF?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          PDF (Portable Document Format) is the universal standard for sharing documents that need
          to look the same on every device and OS. Converting an image to PDF is the most common way
          to submit photos for visa applications, government forms, job applications, and academic
          submissions — portals that accept PDF documents but not raw image files.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          PDF files are also easier to print at the correct size. An image printed directly from a
          photo viewer may be scaled incorrectly. A PDF with A4 or Letter page dimensions prints at
          the exact size the page was designed for — no manual scaling needed.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Choosing the Right Page Size</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Page size</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Dimensions</th>
                <th className="text-left py-2 font-semibold text-text-main">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4 font-medium">A4</td>
                <td className="py-2 pr-4">210 × 297 mm</td>
                <td className="py-2">
                  International standard — Europe, Asia, India, Australia, most government and
                  academic portals
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">US Letter</td>
                <td className="py-2 pr-4">216 × 279 mm</td>
                <td className="py-2">
                  North American standard — US/Canada business, legal, and government documents
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Fit to image</td>
                <td className="py-2 pr-4">Matches image</td>
                <td className="py-2">
                  Digital sharing where white margins are unwanted — screenshots, photos, digital
                  archives
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          When in doubt, use A4. It is the most widely accepted page size globally and works for
          almost all government, academic, and professional document submissions outside North
          America. For US college or job applications, use Letter.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for Image-to-PDF</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Visa and passport applications',
              detail:
                'Many online visa portals (Schengen, US, UK, Australia) require photos or scanned documents in PDF format. Convert your JPEG passport photo or document scan to PDF for portal submission.',
            },
            {
              name: 'Government form submissions',
              detail:
                'Indian government portals (SSC, UPSC, NTA, Aadhaar) increasingly accept only PDF documents. Convert ID card scans, address proof photos, or certificates to PDF for portal upload.',
            },
            {
              name: 'Job application supporting documents',
              detail:
                'HR portals and ATS systems often require certificates and photos in PDF format. Convert scanned certificates, degree photos, or professional headshots to PDF for job applications.',
            },
            {
              name: 'Academic and university submissions',
              detail:
                'University application portals for DU, CUET, and international universities typically require PDF uploads. Convert scanned mark sheets, photos, or certificate images to PDF.',
            },
            {
              name: 'Printing at exact paper size',
              detail:
                'A4 or Letter PDFs print at exact dimensions on any printer without manual scaling. Convert photos or graphics to PDF when you need precise print sizes.',
            },
            {
              name: 'Email attachments and digital archives',
              detail:
                'PDFs are universally viewable and preserve image quality better than inline images in some email clients. Use Fit to Image for a compact PDF with no white borders.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How the Conversion Works</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool uses the browser Canvas API and the open-source jsPDF library — entirely
          client-side. When you upload an image, it is drawn onto a canvas element at its original
          resolution with a white background (to handle PNG transparency). The canvas is exported as
          a JPEG at quality 92, then embedded into a PDF using jsPDF.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For A4 and Letter page sizes, the image is scaled to fit within the page dimensions while
          preserving its original aspect ratio. The image is centered on the page. For Fit to Image,
          the PDF dimensions are set to match the image pixel dimensions converted to millimeters at
          96 DPI — no scaling, no borders.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          No server receives your image at any step. The jsPDF library loads in your browser only
          when you click Download — it does not affect initial page load time.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All conversion runs in your browser using the Canvas API and jsPDF. Your image is never
          uploaded to any server. The PDF is generated locally and downloaded directly — no data
          leaves your device. Free with no limits, no account, no watermark.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90%',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/exif-remover/', label: 'EXIF Remover', desc: 'Strip GPS & camera metadata' },
            { href: '/jpg-to-png/', label: 'JPG to PNG', desc: 'Lossless conversion' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            { href: '/resize-image-in-kb/', label: 'Resize in KB', desc: 'Target exact file size' },
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
          Frequently Asked Questions About Image to PDF Conversion
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'Does converting an image to PDF reduce quality?',
              a: 'No. This tool embeds the image in the PDF at JPEG quality 92 — visually lossless at normal viewing distances. The only quality change is from the JPEG encoding step, which is imperceptible at q92. For A4/Letter, the image is scaled to fit the page while preserving its aspect ratio, but at high quality.',
            },
            {
              q: 'What page size should I choose for government or visa documents?',
              a: 'Choose A4 for most international submissions — it is the standard in Europe, India, Asia, and Australia. Choose Letter for US or Canadian government forms. Choose Fit to Image for digital-only submissions where you want no white borders.',
            },
            {
              q: 'Can I convert a PNG with transparency to PDF?',
              a: 'Yes. The tool fills transparent PNG areas with white before embedding in the PDF. This matches standard print behavior and is what most PDF viewers and printers expect.',
            },
            {
              q: 'How large will the output PDF be?',
              a: 'The PDF file size is slightly larger than the original image. A 500KB JPEG typically produces a 550–650KB PDF. For A4/Letter pages, the image may be scaled down if it is very large — this slightly reduces the embedded image size.',
            },
            {
              q: 'Can I convert HEIC photos from iPhone to PDF?',
              a: 'Yes. Upload HEIC files directly — they are automatically converted to JPEG before PDF generation. The output PDF contains a high-quality JPEG version of your iPhone photo.',
            },
            {
              q: 'Can I create a multi-page PDF with multiple images?',
              a: 'This tool converts one image per PDF. For multi-page PDFs, convert each image separately and then merge the PDFs using a free PDF merge tool.',
            },
            {
              q: 'Is the tool free and private?',
              a: 'Yes — completely free with no limits, no watermark, and no sign-up. All conversion runs in your browser. Your image is never uploaded to any server.',
            },
            {
              q: 'What image formats can I convert to PDF?',
              a: 'JPG, PNG, WebP, and HEIC — up to 20MB per file. iPhone HEIC photos are automatically converted to JPEG before PDF generation.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
