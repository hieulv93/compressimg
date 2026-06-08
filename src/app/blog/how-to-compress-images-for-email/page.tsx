import Link from 'next/link'

export default function HowToCompressImagesForEmail() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav
        className="text-xs text-text-muted mb-8 flex items-center gap-1.5"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-main">Compress Images for Email</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-06-08">June 8, 2026</time>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Compress Images for Email Attachments
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Email providers impose attachment size limits, and large image files are the most common
            reason emails fail to send or arrive slowly. Gmail&apos;s limit is 25MB, Outlook&apos;s
            is 20MB, and many corporate mail servers enforce stricter limits. This guide covers the
            right image dimensions, the best format for email, and how to compress images quickly
            for free.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Email Attachment Limits — Quick Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">
                      Email provider
                    </th>
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">
                      Attachment limit
                    </th>
                    <th className="text-left pb-2 font-semibold text-text-main">
                      What happens if exceeded
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Gmail</td>
                    <td className="py-2 pr-4">25 MB</td>
                    <td className="py-2">Converts to Drive link</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Outlook / Hotmail</td>
                    <td className="py-2 pr-4">20 MB</td>
                    <td className="py-2">Blocks sending</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Yahoo Mail</td>
                    <td className="py-2 pr-4">25 MB</td>
                    <td className="py-2">Blocks sending</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Apple Mail (iCloud)</td>
                    <td className="py-2 pr-4">20 MB</td>
                    <td className="py-2">Converts to Mail Drop link</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Corporate servers</td>
                    <td className="py-2 pr-4">10 MB (typical)</td>
                    <td className="py-2">Silently dropped</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-text-muted mt-3">
              Corporate mail servers may silently drop emails — no error notification, the recipient
              never receives the message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Why Email Attachment Size Matters More Than You Think
            </h2>
            <p className="text-text-muted mb-4">
              The headline limits (25MB for Gmail) are not the full picture. Email encoding adds
              overhead to attachment size before sending — Base64 encoding, the standard method
              email uses to transmit binary files as text, increases file size by approximately 33%.
            </p>
            <p className="text-text-muted mb-4">
              This means a 20MB image file actually takes up about 27MB of email capacity once
              encoded — exceeding Gmail&apos;s 25MB limit even though the original file was under
              the limit. For reliable delivery, keep actual file sizes well under the advertised
              limits.
            </p>
            <p className="text-text-muted">
              For professional and business email: keep total attachments under 10MB. Many
              recipients use corporate mail servers with stricter limits, and large emails fill
              mailbox storage quotas faster — making recipients more likely to skip or delete
              large-attachment emails without opening them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Recommended Image Size for Email</h2>
            <p className="text-text-muted mb-4">Target file sizes for email image attachments:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Single photo:</strong> 200–500 KB per image —
                sufficient quality for viewing at screen resolution
              </li>
              <li>
                <strong className="text-text-main">Multiple photos:</strong> Under 1MB per image,
                total under 10MB
              </li>
              <li>
                <strong className="text-text-main">Business / professional:</strong> Under 5MB total
                for all attachments combined
              </li>
              <li>
                <strong className="text-text-main">Newsletters with embedded images:</strong> Each
                image under 200KB for fast rendering in email clients
              </li>
            </ul>
            <p className="text-text-muted mb-4">
              On dimensions: most recipients view email on a monitor or phone screen that is at most
              1920px wide. Images wider than 1920px add file size without adding any visible benefit
              — the email client or browser will scale them down anyway.
            </p>
            <p className="text-text-muted">
              For most professional contexts, resizing photographs to 1200–1600px on the longest
              side and compressing to quality 80 reduces a typical 4MB smartphone photo to under
              400KB — a 90% reduction — while remaining fully clear on any screen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Best Image Format for Email Attachments</h2>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">JPG</strong> is the best format for photographic
              email attachments. It delivers the most file size reduction while maintaining good
              visual quality. At quality 80–85, a JPG photograph is typically 3–8× smaller than the
              same image as PNG with negligible visible quality difference.
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">PNG</strong> is better when the image contains
              text, screenshots, diagrams, or logos. JPG compression creates visible artifacts
              around sharp edges and text — a screenshot of a document or a presentation slide looks
              noticeably worse as JPG than PNG.
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">Avoid WebP for email attachments.</strong> While
              WebP is excellent for web images, many email clients do not support it. Outlook does
              not display WebP attachments. Recipients may see a broken image or be asked to
              download a file they cannot open. Stick to JPG and PNG for email.
            </p>
            <p className="text-text-muted">
              <strong className="text-text-main">Avoid HEIC for email.</strong> HEIC (iPhone&apos;s
              default photo format) is not supported by most email clients on Windows and Android.
              Convert HEIC to JPG before attaching to ensure all recipients can open the image.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Compress Images for Email — Step by Step
            </h2>
            <p className="text-text-muted mb-4">
              The fastest method: use CompressImg in your browser. No software installation, no
              account required, works on iPhone and Android as well as desktop.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-text-muted mb-4">
              <li>
                Open{' '}
                <Link href="/compress-image" className="text-primary hover:underline">
                  CompressImg
                </Link>{' '}
                in your browser
              </li>
              <li>Click &quot;Upload&quot; or drag your image onto the upload area</li>
              <li>
                Set quality to 80 — this is the optimal balance between file size reduction and
                visual quality for email use
              </li>
              <li>Click &quot;Compress&quot; — the compression runs in your browser (no upload)</li>
              <li>Download the compressed image — the file size will be shown before download</li>
              <li>Attach the compressed file to your email</li>
            </ol>
            <p className="text-text-muted">
              For multiple images: compress each one individually using the same process. The tool
              shows original vs compressed file size so you can verify the result before
              downloading.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compressing iPhone Photos for Email</h2>
            <p className="text-text-muted mb-4">
              iPhone photos are taken in high resolution (up to 48MP on iPhone 15 Pro) and saved as
              HEIC at sizes of 3–12MB each. Before emailing these photos, they need to be both
              converted from HEIC to JPG and reduced in file size.
            </p>
            <p className="text-text-muted mb-4">
              When you share an iPhone photo via Mail app, iOS offers to resize: &quot;Small&quot;
              (240KB), &quot;Medium&quot; (480KB), &quot;Large&quot; (1.7MB), or &quot;Actual
              Size&quot;. Choosing &quot;Medium&quot; or &quot;Large&quot; is usually sufficient for
              most recipients. &quot;Actual Size&quot; sends the original HEIC file which some
              recipients cannot open.
            </p>
            <p className="text-text-muted">
              For finer control over quality and dimensions, use CompressImg in Safari on your
              iPhone — upload from your camera roll, compress to your preferred quality level, and
              download the JPG result before attaching it to your email manually.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              What Happens When Email Attachments Are Too Large
            </h2>
            <p className="text-text-muted mb-4">The behavior depends on the email provider:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Gmail:</strong> Automatically converts
                attachments over 25MB to a Google Drive link. The recipient must sign in to Google
                to access the files — not always convenient for external contacts.
              </li>
              <li>
                <strong className="text-text-main">Outlook:</strong> Blocks the send button and
                shows an error message — you cannot send the email until the attachment is reduced
                or removed.
              </li>
              <li>
                <strong className="text-text-main">Corporate servers:</strong> Many silently drop
                emails that exceed their size limits. The sender gets no error notification — the
                email appears sent, but the recipient never receives it. This is a significant risk
                for business communication.
              </li>
              <li>
                <strong className="text-text-main">Apple Mail:</strong> Offers Mail Drop, which
                stores the file on iCloud for 30 days. Recipient gets a download link rather than a
                direct attachment.
              </li>
            </ul>
            <p className="text-text-muted">
              The silent-drop behavior of corporate mail servers is the most dangerous — you may
              believe your email was received when it was not. When sending large attachments to
              business contacts, always confirm receipt or use a file sharing service instead.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Alternative: Link Instead of Attach</h2>
            <p className="text-text-muted mb-4">
              For very large sets of images or images that need to be high resolution (print, legal
              documents, design deliverables), attaching directly to email is rarely the best
              approach. Instead:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Google Drive:</strong> Upload and share a folder
                with view or download permission — no attachment size limit
              </li>
              <li>
                <strong className="text-text-main">Dropbox:</strong> Share a link to a folder or
                file — files up to 2GB on free plan
              </li>
              <li>
                <strong className="text-text-main">WeTransfer:</strong> Free transfers up to 2GB —
                generates a download link that is valid for 7 days
              </li>
              <li>
                <strong className="text-text-main">iCloud Drive:</strong> Convenient if both sender
                and recipient use Apple devices
              </li>
            </ul>
            <p className="text-text-muted">
              For casual photo sharing with friends and family, attaching a compressed JPG directly
              to the email remains the simplest approach. For professional contexts with multiple
              large images, a file sharing link is more reliable and leaves no size limit risk.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">Compress Your Email Images Free</h2>
            <p className="text-text-muted mb-4">
              Reduce image file size for email in seconds — no upload to a server, no account, works
              on phone and desktop. Supports JPG, PNG, and WebP.
            </p>
            <Link
              href="/compress-image"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors text-sm"
            >
              Compress Image Free →
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Related Guides</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog/compress-images-without-losing-quality"
                  className="text-primary hover:underline"
                >
                  How to Compress Images Without Losing Quality
                </Link>
              </li>
              <li>
                <Link href="/blog/png-vs-jpg" className="text-primary hover:underline">
                  PNG vs JPG: Which Format Should You Use?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-compress-images-on-iphone"
                  className="text-primary hover:underline"
                >
                  How to Compress Images on iPhone
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-reduce-image-file-size"
                  className="text-primary hover:underline"
                >
                  How to Reduce Image File Size
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-messaging-apps-compress-images"
                  className="text-primary hover:underline"
                >
                  How Messaging Apps Compress Images
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
