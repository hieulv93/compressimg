import Link from 'next/link'
import FAQItem from './FAQItem'

export default function HeicToJpgContentSection() {
  return (
    <section className="space-y-8 text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          What Is HEIC and Why Can&apos;t I Open It on Windows?
        </h2>
        <p>
          HEIC (High Efficiency Image Container) is the default photo format used by iPhone and iPad
          since iOS 11. Apple adopted it because HEIC files are roughly half the size of equivalent
          JPG files at the same visible quality — a 4MB JPG becomes a ~2MB HEIC with no noticeable
          difference on screen.
        </p>
        <p>
          The problem is compatibility. HEIC is based on the HEVC (H.265) video codec standard,
          which requires a paid license. Windows, Android, and most web platforms do not include
          native HEIC support by default. When you transfer iPhone photos to a Windows PC, share
          them via email, or try to upload them to a website, you often see errors like &ldquo;file
          format not supported&rdquo; or a blank preview icon. Converting to JPG solves this
          immediately — JPG is universally supported on every device, browser, and operating system
          built in the last 30 years.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          How to Convert HEIC to JPG — Step by Step
        </h2>
        <ol className="list-decimal list-inside space-y-2 pl-1">
          <li>
            <strong className="text-text-main">Upload your HEIC file</strong> — click the upload
            area or drag and drop your .heic or .heif photo. You can also paste a copied image with
            Ctrl+V.
          </li>
          <li>
            <strong className="text-text-main">Wait for conversion</strong> — the tool decodes the
            HEIC file in your browser and converts it to JPG at quality 90. This takes 1–3 seconds
            for most iPhone photos.
          </li>
          <li>
            <strong className="text-text-main">Download the JPG</strong> — click the download button
            to save the converted JPG to your device. The file is named
            &ldquo;compressed-[original-name].jpg&rdquo;.
          </li>
        </ol>
        <p>
          No account required. No file size limit beyond the 20MB browser constraint. All processing
          happens locally in your browser — your photos are never sent to a server.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          HEIC vs JPG — File Size and Quality Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Property
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  HEIC
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  JPG
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['File size (same quality)', '~50% smaller', 'Baseline'],
                ['Windows native support', 'No (paid codec)', 'Yes'],
                ['Android native support', 'No', 'Yes'],
                ['Web browser support', 'Safari only', 'All browsers'],
                ['Email attachments', 'Often blocked', 'Always works'],
                ['Social media upload', 'Auto-converted (quality loss)', 'Accepted directly'],
                ['Transparency support', 'Yes', 'No'],
                ['HDR support', 'Yes', 'Limited'],
                ['Editing software support', 'Limited', 'Universal'],
              ].map(([prop, heic, jpg]) => (
                <tr key={prop} className="even:bg-surface/50">
                  <td className="border border-border px-3 py-2 font-medium text-text-main">
                    {prop}
                  </td>
                  <td className="border border-border px-3 py-2">{heic}</td>
                  <td className="border border-border px-3 py-2">{jpg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The main reason to convert HEIC to JPG is compatibility, not quality. JPG at quality 85–90
          looks identical to HEIC at comparable compression. The file will be slightly larger, but
          it will open everywhere without plugins or additional software.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          Why iPhone Takes Photos in HEIC Format
        </h2>
        <p>
          Apple switched from JPG to HEIC as the default in iOS 11 (iPhone 7 and later) for one
          reason: storage. The average iPhone user takes hundreds of photos per month. HEIC cuts
          storage usage roughly in half compared to JPG. A 256GB iPhone can store approximately
          60,000 HEIC photos versus 30,000 JPGs at the same quality level.
        </p>
        <p>
          When you share photos from iPhone via AirDrop to a Mac, they stay as HEIC. When you share
          via Messages, Mail, or most sharing sheets to non-Apple devices, iOS automatically
          converts to JPG — but this conversion happens on-device with Apple&apos;s encoder, which
          applies its own quality settings. Using this tool before sharing gives you control over
          the output quality rather than relying on Apple&apos;s automatic conversion.
        </p>
        <p>
          You can also change your iPhone&apos;s camera format to JPG: Settings → Camera → Formats →
          Most Compatible. This records in JPG directly, eliminating the conversion step. The
          tradeoff is approximately 2× more storage used per photo.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          What Quality Is Used When Converting HEIC to JPG?
        </h2>
        <p>
          This converter uses JPG quality 90, which is the standard recommendation for photo
          conversion. At quality 90, the output is visually indistinguishable from the HEIC original
          in nearly all cases — compression artifacts are invisible unless you zoom in to 400%+. The
          file will be slightly larger than the HEIC source but smaller than a quality-100 JPG.
        </p>
        <p>
          If you need a smaller file (for email attachments, web uploads, or WhatsApp), use the{' '}
          <Link href="/compress-image" className="text-primary hover:underline">
            Compress Image
          </Link>{' '}
          tool after converting. It lets you adjust quality from 1–100 and shows the exact file size
          before downloading.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          Converting HEIC Photos for Specific Platforms
        </h2>
        <p>
          Different platforms handle HEIC uploads differently. Here&apos;s what you need to know:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong className="text-text-main">Windows:</strong> HEIC files show as blank icons in
            File Explorer. Converting to JPG before transferring saves the extra step of installing
            the Microsoft HEVC codec ($0.99 in the Microsoft Store).
          </li>
          <li>
            <strong className="text-text-main">Google Drive / Dropbox:</strong> Both support HEIC
            for storage, but previews may not render on all devices. JPG guarantees preview
            everywhere.
          </li>
          <li>
            <strong className="text-text-main">Instagram / Facebook:</strong> Both platforms accept
            HEIC uploads from the iOS app, but they re-compress internally. Converting to JPG first
            at quality 85 gives you more control over the final quality. See{' '}
            <Link href="/compress-image-for-instagram" className="text-primary hover:underline">
              Compress for Instagram
            </Link>{' '}
            and{' '}
            <Link href="/compress-image-for-facebook" className="text-primary hover:underline">
              Compress for Facebook
            </Link>{' '}
            for platform-specific guidance.
          </li>
          <li>
            <strong className="text-text-main">WhatsApp:</strong> WhatsApp on iOS converts HEIC
            before sending, but applies heavy compression. Convert to JPG first for better quality.
            See{' '}
            <Link href="/compress-image-for-whatsapp" className="text-primary hover:underline">
              Compress for WhatsApp
            </Link>
            .
          </li>
          <li>
            <strong className="text-text-main">Government / official portals:</strong> Most
            government document upload forms accept only JPG and PNG. HEIC files will be rejected.
            Convert first, then check the file size limit — many portals require images under{' '}
            <Link href="/compress-image-to-100kb" className="text-primary hover:underline">
              100KB
            </Link>{' '}
            or{' '}
            <Link href="/compress-image-to-50kb" className="text-primary hover:underline">
              50KB
            </Link>
            .
          </li>
          <li>
            <strong className="text-text-main">LinkedIn:</strong> Accepts JPG and PNG for profile
            photos and posts. See{' '}
            <Link href="/compress-image-for-linkedin" className="text-primary hover:underline">
              Compress for LinkedIn
            </Link>{' '}
            for optimal photo sizes.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          How HEIC Conversion Works in Your Browser
        </h2>
        <p>
          When you drop a HEIC file onto this tool, the browser reads the raw binary of the file and
          passes it to a JavaScript library called heic2any. This library decodes the HEVC
          compressed image data entirely in memory, reconstructing the pixel values without writing
          anything to disk. The decoded image is then re-encoded as a JPG using the browser&apos;s
          built-in canvas API at quality 90.
        </p>
        <p>
          The entire process runs in your browser tab. There is no server involved, no network
          request is made with your photo, and no copy of your file is retained after you close the
          tab. The converted JPG exists only as a temporary object in your browser&apos;s memory
          until you click download, at which point it is written to your device.
        </p>
        <p>
          Browser-based HEIC decoding is slower than native apps because JavaScript is not as
          optimized as compiled C++ code for image codecs. A typical 12-megapixel iPhone photo
          (2–4MB HEIC) takes 1–4 seconds to convert depending on your device&apos;s processor speed.
          Older phones and budget Android devices may take 5–10 seconds. This is normal and expected
          — the conversion is complete when the download button appears.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          Alternatives: Converting HEIC Without a Browser Tool
        </h2>
        <p>If you prefer desktop solutions, here are other ways to convert HEIC to JPG:</p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong className="text-text-main">Windows Photos app:</strong> Right-click the HEIC
            file → Open with → Photos → click the &ldquo;...&rdquo; menu → Save a copy → select JPG.
            Requires the Microsoft HEVC codec to be installed.
          </li>
          <li>
            <strong className="text-text-main">Apple Preview (Mac):</strong> Open the HEIC file in
            Preview → File → Export → choose JPEG format. Mac has native HEIC support — no extra
            software required.
          </li>
          <li>
            <strong className="text-text-main">iPhone Settings:</strong> Go to Settings → Camera →
            Transfer to Mac or PC → choose &ldquo;Automatic&rdquo;. This converts photos to JPG
            automatically when you connect via USB or transfer via iCloud.
          </li>
          <li>
            <strong className="text-text-main">iCloud.com:</strong> Log in at icloud.com/photos,
            select photos, and click the download icon. iCloud converts to JPG automatically for
            non-Apple browsers.
          </li>
        </ul>
        <p>
          The browser tool on this page is the fastest option when you are on a Windows or Android
          device and need to convert a photo immediately without installing anything.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <FAQItem
            question="Is my HEIC photo safe to convert here?"
            answer="Yes. All conversion happens entirely in your browser using JavaScript — no file is ever sent to a server. Your photos stay on your device throughout the entire process. This makes the tool safe for personal photos, passport photos, and confidential documents you haven't published publicly."
          />
          <FAQItem
            question="Will converting HEIC to JPG reduce the image quality?"
            answer="At quality 90 (which this tool uses), the visual difference between HEIC and the converted JPG is imperceptible. Both formats use lossy compression, so converting always involves a small quality loss in theory, but it is not visible in normal viewing conditions. Side-by-side comparison at 100% zoom shows no meaningful difference."
          />
          <FAQItem
            question="Why does my HEIC file show as blank on Windows?"
            answer="Windows does not include native HEIC support. Microsoft offers the HEVC Video Extensions codec for $0.99 in the Microsoft Store, which adds HEIC support. Alternatively, converting to JPG is the free solution that works immediately without any software installation."
          />
          <FAQItem
            question="Can I convert HEIC to JPG on my iPhone?"
            answer="Yes. Open this page in Safari or Chrome on your iPhone. Tap the upload area and select your HEIC photo from the camera roll. The browser will upload and convert it. The downloaded JPG saves to your Files app or camera roll depending on your iOS version."
          />
          <FAQItem
            question="What is the difference between HEIC and HEIF?"
            answer="HEIF (High Efficiency Image Format) is the container format standard. HEIC is Apple's implementation of HEIF using the HEVC codec. In practice, .heic and .heif files are functionally identical for most purposes. Both are converted to JPG by this tool."
          />
          <FAQItem
            question="Can I convert multiple HEIC files at once?"
            answer="Currently this tool converts one file at a time. For batch conversion of multiple iPhone photos, you can use the tool repeatedly — each conversion takes 1–3 seconds. Batch conversion is on the development roadmap."
          />
          <FAQItem
            question="How do I stop my iPhone from taking photos in HEIC format?"
            answer="Go to Settings → Camera → Formats and select 'Most Compatible'. This changes the camera to record JPG files directly. Note that this uses approximately twice the storage per photo compared to HEIC. You can switch back to HEIC at any time without affecting existing photos."
          />
          <FAQItem
            question="Does converting HEIC to JPG preserve EXIF data (location, date, camera settings)?"
            answer="The browser-based conversion process does not preserve EXIF metadata. If you need to retain GPS coordinates, date taken, or camera settings in the output file, use a desktop application like Adobe Lightroom, Apple Photos (File → Export), or the free XnConvert, which preserve EXIF during conversion."
          />
        </div>
      </div>

      <div className="space-y-3 pt-2 border-t border-border">
        <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            {
              href: '/compress-image',
              title: 'Compress Image',
              desc: 'Reduce file size after converting — quality slider 1–100.',
            },
            {
              href: '/jpg-to-png',
              title: 'JPG to PNG',
              desc: 'Convert JPG to PNG with transparency support.',
            },
            {
              href: '/compress-image-to-100kb',
              title: 'Compress to 100KB',
              desc: 'Reduce any image to under 100KB for portals and forms.',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-xs group-hover:text-primary transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
