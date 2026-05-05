import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function TiffToJpgContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to converting TIFF to JPG"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a TIFF File and Why Convert?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          TIFF (Tagged Image File Format) is a professional raster format used by cameras, scanners,
          and publishing workflows. Unlike JPEG, TIFF stores full pixel data without lossy
          compression — which is why TIFF files are 10 to 30 times larger than equivalent JPEGs. A
          12-megapixel photo from a DSLR camera saved as TIFF is typically 36MB. The same photo as
          JPEG at quality 92 is approximately 3–5MB.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          TIFF is ideal for archiving originals and print production workflows, but impractical for
          sharing. Most email services cap attachments at 10–25MB. Social media platforms do not
          accept TIFF at all. Web browsers and CMS platforms expect JPEG or PNG. Converting TIFF to
          JPG makes the image shareable, uploadable, and web-ready while retaining full visual
          quality at the sizes people actually view photos on screen.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">TIFF vs JPG File Size Comparison</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The table below shows typical TIFF file sizes and what they become after converting to JPG
          at quality 92.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Source
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  TIFF size
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  JPG at Q92
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Reduction
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['12MP DSLR photo', '36MB', '3–5MB', '~90%'],
                ['24MP mirrorless', '72MB', '5–8MB', '~90%'],
                ['Scanner at 300 DPI (A4)', '25MB', '2–4MB', '~88%'],
                ['Scanner at 600 DPI (A4)', '100MB', '6–12MB', '~90%'],
                ['1920×1080 screenshot', '6MB', '150–400KB', '~95%'],
              ].map(([src, tiff, jpg, reduction]) => (
                <tr key={src} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{src}</td>
                  <td className="p-3 border border-border text-text-muted">{tiff}</td>
                  <td className="p-3 border border-border text-text-muted">{jpg}</td>
                  <td className="p-3 border border-border text-text-muted">{reduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Reasons to Convert TIFF to JPG</h2>
        <div className="space-y-3">
          {[
            {
              title: 'Email attachments',
              desc: 'Most email services (Gmail, Outlook, Yahoo) limit attachments to 10–25MB per message. A single 36MB TIFF from a DSLR exceeds this limit. Converting to JPG at quality 92 brings the same photo to 3–5MB — shareable in any email without compression warnings or bounce-backs.',
            },
            {
              title: 'Website and CMS uploads',
              desc: 'WordPress, Squarespace, Shopify, and most content management systems do not accept TIFF files. Their upload systems expect JPEG, PNG, or WebP. Converting TIFF to JPG before uploading ensures compatibility and dramatically reduces the file size, improving page load speed.',
            },
            {
              title: 'Social media sharing',
              desc: 'Instagram, Facebook, Twitter, LinkedIn, and Pinterest do not support TIFF uploads. They require JPEG or PNG. Photographers shooting in TIFF for maximum archival quality need to convert to JPG before posting. JPG at quality 92 is visually indistinguishable from TIFF at social media display sizes.',
            },
            {
              title: 'Scanned documents and archival photos',
              desc: 'Flatbed scanners produce TIFF files at 300–1200 DPI for archival quality. A single scanned page at 600 DPI can be 50–150MB as TIFF. Converting to JPG at quality 92 reduces these to 3–10MB — far more practical for sharing, attaching to legal documents, or uploading to cloud storage.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Software That Produces TIFF Files (and Why They Are So Large)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Source
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Why TIFF
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Typical TIFF size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Adobe Lightroom export', 'Maximum quality archive format', '24–72MB per photo'],
                ['Photoshop Save As', 'Lossless for continued editing', '20–100MB'],
                ['Flatbed scanner', 'Full resolution archival scans', '10–200MB per page'],
                ['Satellite / drone imagery', 'GeoTIFF with spatial metadata', '50MB–10GB'],
                ['Medical imaging (DICOM subset)', 'Lossless for diagnostic use', '5–50MB'],
              ].map(([src, why, size]) => (
                <tr key={src} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{src}</td>
                  <td className="p-3 border border-border text-text-muted">{why}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Other Format Converters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/bmp-to-jpg',
              label: 'BMP to JPG',
              desc: 'Convert Windows bitmap files to JPEG',
            },
            {
              href: '/avif-to-jpg',
              label: 'AVIF to JPG',
              desc: 'Convert modern AVIF to universal JPG',
            },
            {
              href: '/heic-to-jpg',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone HEIC photos to JPEG',
            },
            {
              href: '/webp-to-jpg',
              label: 'WebP to JPG',
              desc: 'Convert WebP images to JPEG',
            },
            {
              href: '/png-to-jpg',
              label: 'PNG to JPG',
              desc: 'Convert PNG to smaller JPEG files',
            },
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce any image file size with quality slider',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="divide-y divide-border">
          {[
            {
              q: 'Does converting TIFF to JPG reduce quality?',
              a: 'At quality 92, converting TIFF to JPG produces visually identical results for photographs viewed on any normal screen. The compression artifacts are below the threshold of human perception. Quality differences only become visible below quality 70 when comparing images at 200%+ zoom. For display on screens, quality 92 JPEG is indistinguishable from uncompressed TIFF.',
            },
            {
              q: 'What happens to TIFF transparency when converting to JPG?',
              a: 'Standard TIFF files do not commonly use transparency for photographs. If your TIFF has an alpha channel (transparency), this tool fills transparent areas with white before converting to JPG, since JPEG does not support transparency. If you need to preserve transparent areas, convert to PNG instead.',
            },
            {
              q: 'Can I convert a multi-page TIFF?',
              a: 'This tool converts the first page of a multi-page TIFF file to JPG. Multi-page TIFFs (common in fax documents, scanned reports, and legal document bundles) require software like Adobe Acrobat, IrfanView, or GIMP to extract all pages. For single-page TIFFs from cameras and scanners, this tool converts the complete image.',
            },
            {
              q: 'Why is my TIFF file so large?',
              a: 'TIFF files are large because they store raw pixel data without compression, or with only lossless compression. A 12MP photo requires 12 million pixels × 3 color channels × 8 bits per channel = 36MB of data in uncompressed TIFF. JPEG reduces this to 3–5MB by applying perceptual compression — removing color data that human vision cannot detect.',
            },
            {
              q: 'Can this tool open any TIFF file?',
              a: 'This tool supports standard TIFF files including RGB, RGBA, and grayscale variants. Some specialized TIFF variants — such as multi-channel CMYK TIFFs from print workflows, GeoTIFF files with geographic metadata, and TIFF files with certain compression codecs — may not open correctly. Standard TIFF from cameras, Lightroom, Photoshop, and flatbed scanners are supported.',
            },
            {
              q: 'Are my TIFF files safe when using this tool?',
              a: 'Yes. All conversion happens entirely in your browser — no file is ever sent to a server. Your TIFF files stay on your device throughout the entire process. This is important for photographers working with client files and archivists handling historical document scans.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
