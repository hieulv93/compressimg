import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ResizeInKbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images in KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Does &quot;Resize Image in KB&quot; Mean?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          When you resize an image in KB, you are changing the image&apos;s file size — measured in
          kilobytes — rather than just its pixel dimensions. Government portals, exam application
          systems, job sites, and visa forms typically specify a maximum file size in KB (e.g.,
          &quot;photo must be under 50KB&quot; or &quot;document must not exceed 200KB&quot;).
          Uploading a file that exceeds the limit causes an instant rejection, even if the image
          looks correct.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool automatically reduces your image to under your chosen KB target by intelligently
          combining quality reduction and dimension scaling. You set the target size — 20KB, 50KB,
          100KB, or any value — upload your photo, and the tool finds the smallest combination of
          quality and dimensions that keeps the file under your limit.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize Image to Specific KB — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set your target KB</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Enter the maximum file size allowed by your portal (e.g., 50KB for a passport
                application portal, 100KB for Naukri resume photo, 200KB for a visa document). Use
                the preset buttons for common sizes — 20KB, 50KB, 100KB, 150KB, 200KB, 300KB, 500KB,
                1MB. You can also type any custom value.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area or drag and drop your file. Supported formats: JPG, PNG, WebP,
                and HEIC (iPhone photos). HEIC files are automatically converted to JPEG before
                processing. The tool immediately begins resizing — no additional buttons to click.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download and upload to your portal
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result shows &quot;Under 50KB target ✓&quot; when your file is within the limit.
                Download the resized JPEG and upload it directly to the government portal, exam
                site, or job application form. If you need a different size, change the target and
                the image is automatically reprocessed.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Common Target Sizes — Quick Reference</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Target</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Common use case
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Typical max dimensions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">10KB</td>
                <td className="px-4 py-3">Aadhaar signature, micro thumbnail</td>
                <td className="px-4 py-3">200×230px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">
                  <Link href="/resize-image-to-20kb/" className="text-primary hover:underline">
                    20KB
                  </Link>
                </td>
                <td className="px-4 py-3">SSC signature, government form signature</td>
                <td className="px-4 py-3">300×80px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">30KB</td>
                <td className="px-4 py-3">UPSC photo, online exam profile</td>
                <td className="px-4 py-3">350×450px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">
                  <Link href="/resize-image-to-50kb/" className="text-primary hover:underline">
                    50KB
                  </Link>
                </td>
                <td className="px-4 py-3">Passport portal (DS-160), NEET, JEE</td>
                <td className="px-4 py-3">413×531px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">
                  <Link href="/resize-image-to-100kb/" className="text-primary hover:underline">
                    100KB
                  </Link>
                </td>
                <td className="px-4 py-3">Resume photo, job portal, IBPS</td>
                <td className="px-4 py-3">600×600px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">150KB</td>
                <td className="px-4 py-3">Standard ID photo on most portals</td>
                <td className="px-4 py-3">800×800px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">
                  <Link href="/resize-image-to-200kb/" className="text-primary hover:underline">
                    200KB
                  </Link>
                </td>
                <td className="px-4 py-3">Aadhaar/PAN document scan</td>
                <td className="px-4 py-3">1024×1024px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">300KB</td>
                <td className="px-4 py-3">Visa application photo</td>
                <td className="px-4 py-3">1200×1200px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">
                  <Link href="/resize-image-to-500kb/" className="text-primary hover:underline">
                    500KB
                  </Link>
                </td>
                <td className="px-4 py-3">High-quality web image</td>
                <td className="px-4 py-3">1600×900px</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">1MB</td>
                <td className="px-4 py-3">Email attachment, social media</td>
                <td className="px-4 py-3">1920×1080px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Resize in KB vs Compress Image — What&apos;s the Difference?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Standard image compression (like using a quality slider) reduces file size by decreasing
          image quality — you set quality to 70% and see how big the output is, then adjust. The
          result depends on the image content and you have to iterate manually.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Resize in KB works differently: you specify the target file size, and the tool
          automatically finds the right combination of quality and dimensions to get under that
          limit. It runs a binary search — trying multiple quality and scale combinations until the
          output file is within your budget. This eliminates the guessing and iteration.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Use the compress tool (quality slider) when you want visual control. Use resize in KB when
          a form or portal has a specific file size requirement you need to meet exactly.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Supported Formats</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-surface border border-border rounded-xl p-4 space-y-1">
            <p className="text-sm font-semibold text-text-main">JPG / JPEG</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Best format for reaching very small sizes. Quality reduction is lossy, so very small
              targets (10–20KB) will show compression artifacts for high-resolution inputs. For
              photos, JPG is the most efficient format.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 space-y-1">
            <p className="text-sm font-semibold text-text-main">PNG</p>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG uses lossless compression. Very small targets (under 50KB) are difficult to
              achieve with large PNGs since the format cannot reduce quality. The tool converts PNG
              to JPEG automatically for size reduction. Transparency is not preserved in the JPEG
              output.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 space-y-1">
            <p className="text-sm font-semibold text-text-main">WebP</p>
            <p className="text-xs text-text-muted leading-relaxed">
              WebP supports both lossy and lossless modes. The tool outputs JPEG for maximum
              compatibility with government portals and form upload systems, which typically require
              JPEG or do not accept WebP.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 space-y-1">
            <p className="text-sm font-semibold text-text-main">HEIC (iPhone)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              iPhone photos are saved as HEIC by default. Upload HEIC files directly — they are
              automatically converted to JPEG before resizing. No separate conversion step required.
            </p>
          </div>
        </div>
        <p className="text-xs text-text-muted">
          All output files are JPEG — the format most widely accepted by portals, exam systems, and
          government forms.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How Does It Achieve the Exact File Size?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The tool uses a combination of quality reduction and dimension scaling to get your image
          under the target size:
        </p>
        <ol className="space-y-2 text-sm text-text-muted pl-4">
          <li>
            <strong className="text-text-main">1. Quality binary search:</strong> It starts at high
            quality and reduces quality in steps until the file is under the target KB. A JPEG at
            quality 60 is typically 40–60% smaller than quality 90.
          </li>
          <li>
            <strong className="text-text-main">2. Dimension reduction:</strong> If the minimum
            quality still produces a file larger than the target, dimensions are reduced
            proportionally — halving the pixels reduces the file size by roughly 4×.
          </li>
          <li>
            <strong className="text-text-main">3. Result:</strong> The tool outputs the
            highest-quality, largest-dimension image that fits within your KB budget. You get the
            best possible visual quality at your target size.
          </li>
        </ol>
        <p className="text-text-muted text-sm leading-relaxed">
          Note: for very small targets (under 10KB), even a tiny image at minimum quality may exceed
          the limit. The tool shows a warning if it cannot achieve the target and outputs the
          smallest possible file.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Use Cases by Country and Portal</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-text-main">
              India — Exam &amp; Government Portals
            </p>
            <ul className="text-xs text-text-muted space-y-1 leading-relaxed">
              <li>
                <strong>SSC CGL/CHSL:</strong> Photo 20–50KB, Signature 10–20KB
              </li>
              <li>
                <strong>UPSC Civil Services:</strong> Photo 40KB, Signature 20KB
              </li>
              <li>
                <strong>IBPS PO/Clerk/SO:</strong> Photo 50KB, Signature 20KB
              </li>
              <li>
                <strong>NEET UG:</strong> Photo 10–200KB, Signature 4–30KB
              </li>
              <li>
                <strong>JEE Main/Advanced:</strong> Photo 10–100KB
              </li>
              <li>
                <strong>Aadhaar/UIDAI:</strong> Document 200KB
              </li>
              <li>
                <strong>DigiLocker docs:</strong> 100KB–1MB
              </li>
            </ul>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-text-main">
              International — Visa &amp; Passport
            </p>
            <ul className="text-xs text-text-muted space-y-1 leading-relaxed">
              <li>
                <strong>US Passport (DS-160):</strong> Under 240KB, JPEG
              </li>
              <li>
                <strong>US Visa Application:</strong> Under 240KB
              </li>
              <li>
                <strong>Schengen Visa (EU):</strong> Under 500KB
              </li>
              <li>
                <strong>UK Visa:</strong> Under 6MB (very generous)
              </li>
              <li>
                <strong>Canada eTA:</strong> Under 4MB
              </li>
              <li>
                <strong>Australia ETA:</strong> Under 500KB
              </li>
              <li>
                <strong>Vietnam e-Visa:</strong> Under 2MB
              </li>
            </ul>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-text-main">Job Applications</p>
            <ul className="text-xs text-text-muted space-y-1 leading-relaxed">
              <li>
                <strong>Naukri.com:</strong> Photo under 100KB
              </li>
              <li>
                <strong>LinkedIn:</strong> Profile photo under 8MB (lenient)
              </li>
              <li>
                <strong>Indeed:</strong> Under 5MB
              </li>
              <li>
                <strong>Government jobs (India):</strong> Photo 20–100KB
              </li>
              <li>
                <strong>HR systems:</strong> Typically 100–200KB
              </li>
            </ul>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-text-main">Online Forms &amp; Education</p>
            <ul className="text-xs text-text-muted space-y-1 leading-relaxed">
              <li>
                <strong>University admissions:</strong> 100–500KB
              </li>
              <li>
                <strong>Scholarship portals:</strong> 50–200KB
              </li>
              <li>
                <strong>Online exam portals:</strong> 20–100KB
              </li>
              <li>
                <strong>Medical registration:</strong> 50–200KB
              </li>
              <li>
                <strong>Bank KYC:</strong> 50–200KB
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for Best Results at Specific KB Sizes
        </h2>
        <ul className="space-y-2 text-sm text-text-muted leading-relaxed">
          <li>
            <strong className="text-text-main">Under 20KB:</strong> Use a small, well-lit photo with
            a plain background. Signatures (white background, dark ink) compress very well. Avoid
            complex backgrounds.
          </li>
          <li>
            <strong className="text-text-main">Under 50KB:</strong> A 413×531px passport photo at
            JPEG quality 70 typically lands at 25–45KB — well within the 50KB limit. If your image
            is still large, check if it has unnecessary padding or extra background.
          </li>
          <li>
            <strong className="text-text-main">Under 100KB:</strong> Most ID-size photos (600×600px)
            reach under 100KB easily at quality 65–75. Problem cases are usually 4K photos that have
            never been resized — let the tool handle the scaling.
          </li>
          <li>
            <strong className="text-text-main">Under 200KB:</strong> Document scans compress well to
            under 200KB at 1024px wide. If the portal requires a specific DPI (300 DPI for
            print-quality documents), check the portal guidance — web uploads typically only care
            about pixel dimensions and file size, not DPI metadata.
          </li>
          <li>
            <strong className="text-text-main">PNG transparency:</strong> If your image has a
            transparent background, it will be converted to JPEG with a white background. If you
            need to keep transparency for a specific purpose, use the resize tool and keep PNG
            format instead.
          </li>
        </ul>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-2">
        <h2 className="text-base font-bold text-text-main">
          Privacy — Your Files Never Leave Your Device
        </h2>
        <p className="text-sm text-text-muted leading-relaxed">
          This tool runs entirely in your browser. No image, no file, and no personal data is ever
          sent to any server. Government IDs, passport photos, and application documents are
          sensitive — they stay on your device throughout the entire process. When you close the
          tab, nothing is retained.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/resize-image/', label: 'Resize by Pixels', desc: 'Set exact width & height' },
            { href: '/resize-images/', label: 'Batch Resize', desc: 'Resize 10 images at once' },
            { href: '/compress-image/', label: 'Compress Image', desc: 'Manual quality slider' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            {
              href: '/compress-image-for-passport/',
              label: 'Passport Compressor',
              desc: 'US passport under 240KB',
            },
            {
              href: '/compress-image-to-100kb/',
              label: 'Compress to 100KB',
              desc: 'Quality slider control',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-surface border border-border rounded-xl p-3 hover:border-primary transition-colors duration-150 group"
            >
              <p className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <dl className="space-y-2">
          {[
            {
              question: 'How do I resize an image to exactly 50KB?',
              answer:
                'Set the target to 50KB using the preset button, upload your image, and the tool automatically reduces quality and dimensions until the file is under 50KB. The result shows the exact output size. If the portal requires exactly 50KB (not just under), any file under that limit will be accepted.',
            },
            {
              question: 'Can I resize an image to any specific KB or MB?',
              answer:
                'Yes. Type any value into the target size field — from 1KB to 10,240KB (10MB). Common sizes have preset buttons: 20KB, 50KB, 100KB, 150KB, 200KB, 300KB, 500KB, and 1MB.',
            },
            {
              question: 'How accurate is the target file size?',
              answer:
                'The tool guarantees the output is at or below your target. It cannot guarantee an exact size (e.g., exactly 48.3KB) — it ensures the file is under the limit. For a 50KB target, you might get 38KB or 49KB depending on the image content.',
            },
            {
              question: 'Will resizing to a smaller KB reduce quality?',
              answer:
                'Yes — reducing file size requires reducing quality (lossy JPEG compression) or dimensions (or both). For most ID photos and form uploads, quality is maintained at a visually acceptable level. For very small targets like 10–20KB, compression artifacts may be visible, but the image remains recognizable.',
            },
            {
              question: 'Is this resizer free to use?',
              answer:
                'Completely free. No sign-up, no subscription, no daily limit. All processing runs in your browser — no server costs means no pricing.',
            },
            {
              question: 'Are my images uploaded to your server?',
              answer:
                'No. All processing happens 100% in your browser using JavaScript. Your images never leave your device. This is important for sensitive documents like passport photos, ID cards, and government application materials.',
            },
            {
              question: 'Can I resize HEIC photos from iPhone in KB?',
              answer:
                'Yes. Upload HEIC files directly — they are automatically converted to JPEG before the KB resizing process. No manual conversion step needed.',
            },
            {
              question: "Why can't I resize a PNG to 10KB?",
              answer:
                'PNG uses lossless compression, meaning it cannot reduce quality the way JPEG can. A large PNG image may not be able to reach very small sizes. This tool converts PNG to JPEG automatically to enable much smaller file sizes.',
            },
            {
              question: 'Does it work on mobile phones?',
              answer:
                'Yes. The tool works in Safari (iOS) and Chrome (Android). Tap the upload area to select a photo from your camera roll. Processing time depends on device speed — typical photos take 2–10 seconds.',
            },
            {
              question: 'How is "resize in KB" different from "compress image"?',
              answer:
                'Compress image uses a manual quality slider — you set quality to 70 and check how big the result is. Resize in KB is automatic — you set the target size and the tool finds the right quality/dimensions combination to get there. Use resize in KB when a portal has a specific file size requirement.',
            },
            {
              question: 'What is the best size for SSC / UPSC / IBPS photos?',
              answer:
                'SSC requires photos under 50KB and signatures under 20KB. UPSC requires photos under 40KB and signatures under 20KB. IBPS typically requires photos under 50KB and signatures under 20KB. Always check the current notification for exact requirements as these can change.',
            },
            {
              question: 'Can I batch resize multiple images to the same KB?',
              answer:
                'This tool processes one image at a time. For batch resizing by pixel dimensions (not by KB), use the Batch Resize Images tool. For batch compression to a similar quality level, use the Batch Compress Images tool.',
            },
          ].map(({ question, answer }) => (
            <FAQItem key={question} question={question} answer={answer} />
          ))}
        </dl>
      </div>
    </section>
  )
}
