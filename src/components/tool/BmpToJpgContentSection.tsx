import Link from 'next/link'
import FAQItem from './FAQItem'

export default function BmpToJpgContentSection() {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-text-muted border-t border-border pt-8">
      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Why Convert BMP to JPG?</h2>
        <p>
          BMP (Bitmap) is an uncompressed image format developed by Microsoft for Windows. Every
          pixel is stored in full — no compression, no quality loss, no tricks. The result is a
          format that is perfectly accurate but impractically large. A single 1920×1080 photograph
          stored as BMP takes approximately 6MB. The same photograph as a JPG at high quality takes
          100–300KB.
        </p>
        <p>
          Converting BMP to JPG compresses the image using JPEG&apos;s DCT (Discrete Cosine
          Transform) algorithm, which removes detail that the human eye is least likely to notice.
          At 85–92% quality, the output is visually indistinguishable from the original while being
          10 to 20 times smaller.
        </p>
        <p>
          Beyond file size, BMP has poor platform support. Most image hosting sites, email
          providers, social media platforms, and web browsers either refuse BMP uploads or display
          them incorrectly on non-Windows devices. JPG is universally supported across every
          platform, browser, device, and operating system.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">What Is a BMP File?</h2>
        <p>
          BMP stands for Bitmap Image File. Microsoft introduced the format in the 1980s as the
          native raster format for Windows. BMP stores pixel data row by row, with each pixel
          represented as a fixed number of bits (typically 24 bits for full color or 32 bits with an
          alpha channel). No compression is applied by default.
        </p>
        <p>
          BMP files are common outputs from Windows Paint, certain scanners, and legacy graphics
          software. They also appear as screenshots on older Windows systems. While BMP is lossless
          — every pixel is preserved — the file size makes it unsuitable for sharing, uploading, or
          using on the web. Converting to JPG is the standard approach for reducing BMP files to a
          shareable size.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">BMP vs JPG — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Property
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  BMP
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  JPG
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Colors', '16.7 million (24-bit)', '16.7 million (24-bit)'],
                ['Compression', 'None (uncompressed)', 'Lossy (DCT)'],
                ['Typical file size', '~6MB for 1920×1080', '~150–300KB for 1920×1080'],
                ['Transparency', 'Limited (32-bit BMP only)', 'Not supported'],
                ['Web support', 'Limited — Chrome only', 'Universal'],
                ['Email support', 'Poor — often blocked', 'Universal'],
                ['Platform support', 'Windows mainly', 'All platforms'],
                ['Best for', 'Windows native apps', 'Photos, sharing, web'],
              ].map(([prop, bmp, jpg]) => (
                <tr key={prop} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{prop}</td>
                  <td className="p-3 border border-border">{bmp}</td>
                  <td className="p-3 border border-border">{jpg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Common Use Cases for BMP to JPG</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">Windows Paint files</strong> — Paint saves images as
            BMP by default. Converting to JPG makes the image shareable via email, social media, and
            messaging apps without changing the visual content.
          </li>
          <li>
            <strong className="text-text-main">Scanner output</strong> — Many flatbed scanners and
            all-in-one printers default to BMP output. Converting scanned documents and photos to
            JPG produces dramatically smaller files with no visible quality difference.
          </li>
          <li>
            <strong className="text-text-main">Email attachments</strong> — Most email providers
            block or flag BMP attachments as unusual. Converting to JPG ensures the image arrives
            correctly and does not hit size limits.
          </li>
          <li>
            <strong className="text-text-main">Web and social media uploads</strong> — Web platforms
            either reject BMP files or silently re-compress them. Converting to JPG before uploading
            gives you control over quality and file size.
          </li>
          <li>
            <strong className="text-text-main">Legacy graphics and game assets</strong> — Older
            games and software store textures and assets as BMP. Converting to JPG modernizes these
            assets for use in current tools and workflows.
          </li>
          <li>
            <strong className="text-text-main">Storage and archiving</strong> — A folder of BMP
            screenshots or images can take up gigabytes. Converting to JPG reduces storage
            requirements by 90%+ without visible quality loss.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">How BMP to JPG Conversion Works</h2>
        <p>
          This tool converts BMP to JPG entirely in your browser using the HTML5 Canvas API. The BMP
          file is loaded into a browser image element, drawn onto an off-screen canvas at full pixel
          dimensions, and exported as a JPEG at 92% quality. No file is ever sent to a server.
        </p>
        <p>
          Because BMP stores pixels uncompressed, the browser can read BMP data directly without any
          decoding step. The JPEG export at 92% quality preserves full visual fidelity for
          photographs and complex images while reducing file size by 90–97%. For images with text or
          sharp edges where lossless output is needed, consider{' '}
          <Link href="/png-to-jpg" className="text-primary hover:underline">
            converting to PNG
          </Link>{' '}
          instead.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">File Size: BMP vs JPG</h2>
        <p>The size reduction when converting BMP to JPG is typically dramatic:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Full HD photo (1920×1080)</p>
            <p className="text-xs text-text-muted">
              BMP: ~6MB &rarr; JPG: ~150&ndash;300KB. File size reduced by 95%+. Visually identical
              at 92% JPEG quality.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Small graphic (640×480)</p>
            <p className="text-xs text-text-muted">
              BMP: ~900KB &rarr; JPG: ~40&ndash;80KB. Over 90% smaller. Ideal for email and
              messaging attachments.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">4K image (3840×2160)</p>
            <p className="text-xs text-text-muted">
              BMP: ~24MB &rarr; JPG: ~500KB&ndash;1.5MB. Makes ultra-high-res photos shareable
              without losing visible detail.
            </p>
          </div>
        </div>
        <p>
          If the JPG file is still larger than you need, use the{' '}
          <Link href="/compress-image" className="text-primary hover:underline">
            Compress Image tool
          </Link>{' '}
          to reduce it further to a specific target size such as{' '}
          <Link href="/compress-image-to-100kb" className="text-primary hover:underline">
            100KB
          </Link>{' '}
          or{' '}
          <Link href="/compress-image-to-200kb" className="text-primary hover:underline">
            200KB
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">BMP to JPG vs BMP to PNG</h2>
        <p>
          Both JPG and PNG are far better choices than BMP for sharing and web use, but they serve
          different purposes:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">Choose JPG</strong> when file size matters — for
            photographs, email attachments, social media uploads, and web publishing. JPG produces
            the smallest file size for photographic content.
          </li>
          <li>
            <strong className="text-text-main">Choose PNG</strong> when lossless quality is required
            — for screenshots with text, logos, diagrams, and images you plan to edit further. PNG
            compresses without any quality loss, though files are larger than JPG.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            question="Why convert BMP to JPG?"
            answer="BMP files are uncompressed — a 1920×1080 BMP is ~6MB. JPG compresses the same image to 100–300KB with minimal visible quality loss. Converting BMP to JPG reduces file size by 90%+ and makes the image compatible with email, web, and social media platforms that do not accept BMP."
          />
          <FAQItem
            question="What is a BMP file?"
            answer="BMP (Bitmap) is an uncompressed raster format developed by Microsoft for Windows. It stores pixel data without compression, making files very large. BMP is common output from Windows Paint and scanners. Converting to JPG dramatically reduces size without visible quality loss."
          />
          <FAQItem
            question="Will the JPG look the same as the BMP?"
            answer="At 92% JPEG quality, the output is visually identical to the BMP for photographs and complex images. For images with very sharp text or geometric edges, JPEG compression may introduce slight softness. If lossless quality is essential, convert to PNG instead."
          />
          <FAQItem
            question="How much smaller is JPG compared to BMP?"
            answer="Typically 90–97% smaller. A 6MB BMP photograph becomes 100–300KB as JPG. A 900KB small graphic becomes 40–80KB. The exact ratio depends on image complexity, but BMP-to-JPG always produces a dramatically smaller file."
          />
          <FAQItem
            question="Does BMP support transparency?"
            answer="Standard 24-bit BMP files do not support transparency. Some 32-bit BMP files include an alpha channel, but this is rarely used in practice. JPG does not support transparency either. If you need a transparent output, convert your BMP to PNG instead."
          />
          <FAQItem
            question="Can I convert BMP to PNG instead of JPG?"
            answer="Yes. Use PNG for lossless output — every pixel is preserved with no compression artifacts. PNG is better for screenshots with text, logos, and images you plan to edit. JPG is better for photographs where file size matters more than pixel-perfect accuracy."
          />
          <FAQItem
            question="Are my BMP files safe to convert here?"
            answer="Yes. All conversion happens entirely in your browser using the HTML5 Canvas API — no file is ever sent to a server. Your BMP files stay on your device throughout the entire process."
          />
          <FAQItem
            question="Can I compress the JPG further after converting from BMP?"
            answer="Yes. After converting to JPG, use the Compress Image tool to reduce the file size to a specific target. You can compress to 100KB, 200KB, or the maximum possible reduction for your use case."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce JPG file size further after conversion',
            },
            {
              href: '/compress-image-to-100kb',
              label: 'Compress to 100KB',
              desc: 'Hit 100KB targets for forms and portals',
            },
            {
              href: '/png-to-jpg',
              label: 'PNG to JPG',
              desc: 'Convert PNG to JPG for smaller file size',
            },
            {
              href: '/jpg-to-png',
              label: 'JPG to PNG',
              desc: 'Convert JPG to lossless PNG for editing',
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
      </section>
    </div>
  )
}
