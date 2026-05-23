import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ResizeHeicContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing HEIC images"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is HEIC Format?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          HEIC (High Efficiency Image Container) is the default photo format on iPhones since iOS 11
          (2017). It uses the HEVC codec to store photos at roughly half the file size of JPEG at
          the same perceived quality — a 4MB iPhone photo might be only 2MB in HEIC format.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The problem is compatibility. HEIC is not supported by Windows (without a codec pack),
          most Android devices, web browsers, social media uploaders, and government or business
          portals. When you need to send, upload, or share an iPhone photo online, you almost always
          need to convert it to JPEG first — and often resize it as well.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Feature
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">HEIC</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">JPEG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  feature: 'File size (same quality)',
                  heic: '~50% smaller',
                  jpeg: 'Baseline',
                },
                { feature: 'Browser support', heic: 'Safari only', jpeg: 'All browsers' },
                {
                  feature: 'Windows support',
                  heic: 'Requires codec download',
                  jpeg: 'Built-in',
                },
                {
                  feature: 'Portal / form uploads',
                  heic: 'Usually rejected',
                  jpeg: 'Universally accepted',
                },
                { feature: 'Transparency', heic: 'Supported', jpeg: 'Not supported' },
                { feature: 'Max quality (12-bit)', heic: 'Supported', jpeg: '8-bit only' },
              ].map(({ feature, heic, jpeg }) => (
                <tr key={feature}>
                  <td className="px-4 py-3 font-medium text-text-main">{feature}</td>
                  <td className="px-4 py-3">{heic}</td>
                  <td className="px-4 py-3">{jpeg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Resize a HEIC Image — 3 Steps</h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select your target size',
              body: 'Choose from the presets at the top — Full HD (1920×1080), Web (1280×720), Instagram (1080×1080), Email (800×600), or Thumbnail (640×480). The tool resizes and converts in one step.',
            },
            {
              step: '2',
              title: 'Upload your HEIC file',
              body: 'Click the upload area or drag and drop your .heic file from your iPhone. The tool detects the HEIC format automatically and converts it to JPEG in your browser before resizing. No app or software needed.',
            },
            {
              step: '3',
              title: 'Download as JPEG',
              body: 'The output is a standard JPEG at your chosen dimensions — universally compatible with Windows, Android, web browsers, email clients, and all upload portals. No extra conversion step needed.',
            },
          ].map(({ step, title, body }) => (
            <li key={step} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {step}
              </span>
              <div>
                <p className="text-sm font-semibold text-text-main">{title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Common Use Cases for Resizing HEIC Photos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              label: 'Email attachments',
              desc: 'A full-resolution iPhone photo is 4–6MB in HEIC. Most email providers limit attachments to 10–25MB — but 10 photos can exceed that quickly. Resizing to 800×600px brings each photo to ~150KB, letting you send 60+ photos in one email.',
            },
            {
              label: 'Social media uploads',
              desc: 'Instagram, Facebook, and Twitter do not accept HEIC files from their web uploaders. This tool converts and resizes to platform-specific dimensions (1080×1080 for Instagram, 1280×720 for YouTube) in one step.',
            },
            {
              label: 'Government and exam portals',
              desc: 'Indian exam portals (NEET, SSC, UPSC) and visa application systems reject HEIC files and often have KB limits. Convert HEIC to JPEG and resize to hit the exact file size requirement.',
            },
            {
              label: 'Sharing with Windows or Android users',
              desc: 'Windows cannot open HEIC files without installing a Microsoft codec pack. Android has no native HEIC support. Converting to JPEG ensures the recipient can open the photo on any device without extra software.',
            },
            {
              label: 'Website and blog uploads',
              desc: 'WordPress, Shopify, and most CMS platforms do not accept HEIC uploads. Resize the HEIC photo to your target web dimensions (1280×720px or 800×600px) and convert to JPEG before uploading.',
            },
            {
              label: 'Reducing storage on shared drives',
              desc: 'A folder of 50 full-resolution iPhone photos (HEIC) is 200–300MB. Converting and resizing to web resolution shrinks this to 50–80MB — much easier to share via Google Drive, Dropbox, or WeTransfer.',
            },
          ].map(({ label, desc }) => (
            <div key={label} className="rounded-xl border border-border p-4 space-y-1">
              <h3 className="font-semibold text-text-main text-sm">{label}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Resize HEIC for Different Platforms</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Platform / Use
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Target size
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  platform: 'Instagram Post (square)',
                  size: '1080×1080px',
                  note: 'Use Instagram preset above',
                },
                {
                  platform: 'YouTube Thumbnail',
                  size: '1280×720px',
                  note: 'Use Web preset above',
                },
                {
                  platform: 'WhatsApp (full quality)',
                  size: '1600×1200px',
                  note: 'WhatsApp compresses > 1600px',
                },
                { platform: 'Email attachment', size: '800×600px', note: 'Use Email preset above' },
                {
                  platform: 'Exam portal photo (India)',
                  size: '200×230px',
                  note: 'Then use KB resizer for exact limit',
                },
                {
                  platform: 'Passport photo (US)',
                  size: '600×600px',
                  note: 'Then compress to under 240KB',
                },
                {
                  platform: 'WordPress blog image',
                  size: '1280×720px',
                  note: 'Then compress for web speed',
                },
              ].map(({ platform, size, note }) => (
                <tr key={platform}>
                  <td className="px-4 py-3 font-medium text-text-main">{platform}</td>
                  <td className="px-4 py-3 font-mono">{size}</td>
                  <td className="px-4 py-3">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Does Resizing a HEIC Photo Reduce Quality?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Resizing <strong className="text-text-main">down</strong> (to smaller dimensions) from a
          HEIC original preserves quality well. An iPhone 14 shoots at 4032×3024px — resizing to
          1920×1080px averages many pixels into one, which typically produces a sharp result.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The HEIC-to-JPEG conversion itself causes a small, usually invisible quality change. HEIC
          is a 12-bit format; JPEG is 8-bit. Converting to JPEG at high quality (92+) is
          perceptually lossless for most photos — the difference is visible only when zoomed in at
          200%+ and comparing side by side.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Resizing <strong className="text-text-main">up</strong> (to larger dimensions) from a HEIC
          file introduces the same blurring as upscaling any image — new pixels must be invented.
          Avoid upscaling beyond 1.5× the original resolution.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for Converting and Resizing HEIC</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Resize first, then hit a KB limit.</strong> If the
              portal requires both a pixel size AND a KB limit, resize the pixel dimensions here
              first, then use our{' '}
              <Link href="/resize-image-in-kb/" className="text-primary underline">
                KB resizer
              </Link>{' '}
              to hit the exact file size target.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">
                Use the original HEIC file, not a screenshot.
              </strong>{' '}
              Screenshots are already compressed and lower resolution. Upload the original HEIC from
              your Camera Roll for the best resize result.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">To convert only (no resize):</strong> Use our{' '}
              <Link href="/heic-to-jpg/" className="text-primary underline">
                HEIC to JPG converter
              </Link>{' '}
              which keeps the original dimensions and just converts the format.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">
                On iPhone: use &ldquo;Most Compatible&rdquo; mode.
              </strong>{' '}
              Go to Settings → Camera → Formats → Most Compatible to shoot JPEG by default. Useful
              if you regularly need to share photos with non-Apple users.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-2">
        <h2 className="text-base font-bold text-text-main">
          Privacy — Your HEIC Files Never Leave Your Device
        </h2>
        <p className="text-sm text-text-muted leading-relaxed">
          HEIC conversion and image resizing happen entirely in your browser. Your iPhone photos are
          never uploaded to a server, never stored, and never sent to any third-party service. This
          makes the tool safe for personal photos, ID documents, and medical images.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/heic-to-jpg/',
              label: 'HEIC to JPG',
              desc: 'Convert without resizing — keeps original dimensions.',
            },
            {
              href: '/resize-image/',
              label: 'Resize by Pixels',
              desc: 'Set any custom width & height with aspect ratio lock.',
            },
            {
              href: '/resize-image-in-kb/',
              label: 'Resize in KB',
              desc: 'Hit an exact file size — 20KB, 50KB, 100KB and more.',
            },
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90% after resizing.',
            },
            {
              href: '/resize-image-for-instagram/',
              label: 'Resize for Instagram',
              desc: 'Square, portrait, story, and reel sizes.',
            },
            {
              href: '/resize-images/',
              label: 'Batch Resize',
              desc: 'Resize up to 10 HEIC images at once as ZIP.',
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
              question: 'How do I resize a HEIC photo from my iPhone?',
              answer:
                'Upload the .heic file directly to this tool — it automatically converts HEIC to JPEG and resizes to your chosen dimensions in one step. No app, no software, no iPhone settings change needed.',
            },
            {
              question: 'Can I open HEIC files on Windows?',
              answer:
                'Not without installing the HEIC Image Extensions from the Microsoft Store (a paid codec). The easiest workaround is to convert HEIC to JPEG using this tool — the resulting JPEG opens on any Windows version without any extras.',
            },
            {
              question: 'Does converting HEIC to JPEG lose quality?',
              answer:
                'At high JPEG quality settings (92+), the quality difference is imperceptible in normal use. HEIC supports 12-bit color depth while JPEG is 8-bit, so some subtle tonal gradients may show banding in extreme cases — but for photos shared online or printed, the output is visually identical.',
            },
            {
              question: 'Why does my HEIC photo look blurry after resizing?',
              answer:
                'This happens when you resize up (enlarge) a photo beyond its original resolution. An iPhone photo at 4032×3024px can be safely resized down to any smaller size. If the target size is larger than the original, blurring is unavoidable — it is a fundamental limitation of standard resizing.',
            },
            {
              question: 'Can I convert HEIC to PNG instead of JPEG?',
              answer:
                'This tool outputs JPEG, which is the universally compatible format for photos. If you specifically need PNG (for transparency or lossless quality), use an offline tool like Preview on Mac or the built-in Photos app Export function.',
            },
            {
              question: 'How do I send HEIC photos via email?',
              answer:
                'Convert them to JPEG first using this tool. Most email clients cannot display HEIC inline, and recipients on Windows or Android cannot open them without a codec. Resize to 800×600px for email to keep each attachment under 200KB.',
            },
            {
              question: 'Why does Instagram reject my iPhone photos?',
              answer:
                "Instagram's web uploader rejects HEIC files. Upload your HEIC file here, convert and resize to Instagram's dimensions (1080×1080 for square, 1080×1350 for portrait), then upload the resulting JPEG to Instagram.",
            },
            {
              question: 'Is this HEIC resize tool free?',
              answer:
                'Yes, completely free. No account, no watermark, no usage limits. All HEIC conversion and resizing happens in your browser — your photos never leave your device.',
            },
          ].map(({ question, answer }) => (
            <FAQItem key={question} question={question} answer={answer} />
          ))}
        </dl>
      </div>
    </section>
  )
}
