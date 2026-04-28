import Link from 'next/link'
import FAQItem from './FAQItem'

export default function HeicToPngContentSection() {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-text-muted border-t border-border pt-8">
      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Why Convert HEIC to PNG?</h2>
        <p>
          HEIC (High Efficiency Image Container) is the default photo format on iPhones since iOS
          11. It produces smaller files than JPG at the same visual quality — a significant
          advantage for device storage. However, HEIC has a critical limitation: it is not
          universally supported. Windows requires a paid codec to open HEIC files. Most Android
          devices cannot display them natively. Web browsers, design tools, and online platforms
          often reject HEIC uploads entirely.
        </p>
        <p>
          PNG solves the compatibility problem completely. PNG is supported on every operating
          system, browser, design application, and online platform without any additional software.
          Unlike JPG, PNG uses lossless compression — no pixel data is discarded during conversion.
          The result is a visually perfect copy of your iPhone photo in a format that opens
          anywhere.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          HEIC to PNG vs HEIC to JPG: Which Should You Choose?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Factor
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  HEIC → PNG
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  HEIC → JPG
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Quality', 'Lossless — no quality loss', 'Lossy — minor compression artifacts'],
                ['File size', '2–4× larger than HEIC', 'Similar to or smaller than HEIC'],
                ['Transparency', 'Supported (alpha channel)', 'Not supported'],
                ['Best for', 'Editing, archiving, design work', 'Sharing, email, social media'],
                ['Compatibility', 'Universal', 'Universal'],
                [
                  'Further editing',
                  'No generation loss on re-save',
                  'Quality degrades with each re-save',
                ],
              ].map(([factor, png, jpg]) => (
                <tr key={factor} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{factor}</td>
                  <td className="p-3 border border-border">{png}</td>
                  <td className="p-3 border border-border">{jpg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Choose PNG when quality is the priority — for archiving, editing in Photoshop or Figma, or
          when the platform specifically requires PNG. Choose JPG when file size matters, such as
          for email attachments, social media uploads, and web publishing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Common Use Cases for HEIC to PNG</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">Editing in Photoshop, GIMP, or Figma</strong> — These
            tools accept PNG but may not open HEIC files natively. Converting to PNG lets you import
            the photo into any design or editing workflow without quality loss.
          </li>
          <li>
            <strong className="text-text-main">Uploading to platforms that require PNG</strong> —
            Many platforms explicitly require PNG: app store icon submissions, OG image templates,
            watermark overlays, and CMS platforms that separate PNG (with transparency) from JPG
            (photos).
          </li>
          <li>
            <strong className="text-text-main">Archiving photos without quality loss</strong> — If
            you want to preserve a digital archive of your iPhone photos with no compression
            degradation, PNG is the safest format. Unlike JPG, re-saving a PNG never introduces new
            artifacts.
          </li>
          <li>
            <strong className="text-text-main">Sending to Windows users</strong> — Windows Photo
            Viewer and many Windows apps cannot open HEIC without additional codecs. PNG opens
            natively in Windows 10 and 11 without any software installation.
          </li>
          <li>
            <strong className="text-text-main">Screenshots and UI images</strong> — iPhone
            screenshots are saved as PNG natively. If you have screenshots saved as HEIC (from
            AirDrop or backup), converting back to PNG ensures crisp text rendering that JPG
            compression would blur.
          </li>
          <li>
            <strong className="text-text-main">Print-ready files</strong> — PNG is preferred for
            print workflows because it does not introduce JPEG compression artifacts. Converting
            iPhone photos to PNG before sending to a print service ensures maximum quality output.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">How HEIC to PNG Conversion Works</h2>
        <p>
          This tool converts HEIC to PNG entirely in your browser using the{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">heic2any</code>{' '}
          JavaScript library, which decodes the HEIC file using the browser&apos;s built-in codec
          support and re-encodes the image data as a lossless PNG. No file is ever sent to a server.
        </p>
        <p>
          The process runs locally on your device: the HEIC file is read into browser memory,
          decoded at full resolution, and written out as PNG with lossless compression. The output
          PNG has the same pixel dimensions as the original HEIC photo. Because PNG is lossless,
          there is no quality slider — the output is always the best possible quality.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">File Size: What to Expect</h2>
        <p>
          HEIC uses highly efficient lossy compression developed by Apple and the MPEG group. PNG
          uses lossless compression. As a result, PNG files are significantly larger than HEIC:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Typical iPhone photo</p>
            <p className="text-xs text-text-muted">
              HEIC: ~2&ndash;4MB &rarr; PNG: ~8&ndash;18MB. The PNG is 3&ndash;5&times; larger but
              visually identical and lossless.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Portrait / low detail</p>
            <p className="text-xs text-text-muted">
              HEIC: ~1&ndash;2MB &rarr; PNG: ~5&ndash;10MB. Less detail means PNG compression is
              more effective, so the size ratio is smaller.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Landscape / high detail</p>
            <p className="text-xs text-text-muted">
              HEIC: ~4&ndash;6MB &rarr; PNG: ~15&ndash;25MB. High-detail scenes with many colors and
              textures produce the largest PNG files.
            </p>
          </div>
        </div>
        <p>
          If the larger PNG file size is a concern, consider{' '}
          <Link href="/heic-to-jpg" className="text-primary hover:underline">
            converting to JPG instead
          </Link>
          , which typically produces files of similar size to the original HEIC. After converting to
          PNG, you can also{' '}
          <Link href="/compress-image" className="text-primary hover:underline">
            compress the PNG
          </Link>{' '}
          to reduce its size.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Tips for Best Results</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">Need a smaller file?</strong> — After converting to
            PNG, use the{' '}
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image tool
            </Link>{' '}
            to reduce the PNG file size. Or convert directly to{' '}
            <Link href="/heic-to-jpg" className="text-primary hover:underline">
              JPG
            </Link>{' '}
            for a smaller output.
          </li>
          <li>
            <strong className="text-text-main">Converting for Photoshop or design work?</strong> —
            PNG is the right choice. Open the converted PNG directly in Photoshop, GIMP, Figma, or
            any other editor. No quality loss in the conversion ensures you start with the best
            possible source.
          </li>
          <li>
            <strong className="text-text-main">Converting on mobile?</strong> — This tool works in
            Safari and Chrome on iPhone and Android. Select your HEIC file from the Files app or
            camera roll, wait for conversion, and save the PNG to your device.
          </li>
          <li>
            <strong className="text-text-main">Need to resize the PNG?</strong> — After converting,
            use the{' '}
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image tool
            </Link>{' '}
            to scale the PNG to any dimension you need.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            question="What is HEIC and why do I need to convert it to PNG?"
            answer="HEIC (High Efficiency Image Container) is the default photo format on iPhones. It produces small files but is not supported by most Windows apps, Android devices, or web platforms. PNG is universally compatible and lossless — every pixel is preserved exactly, with no compression artifacts."
          />
          <FAQItem
            question="Is HEIC to PNG conversion lossless?"
            answer="Yes. PNG uses lossless compression, so no pixel data is discarded during conversion. The PNG output is visually identical to the original HEIC photo at full resolution — you cannot tell the difference by looking at the image."
          />
          <FAQItem
            question="Why convert HEIC to PNG instead of JPG?"
            answer="Choose PNG when you need lossless quality (for archiving or editing), when the platform requires PNG format, or when the image contains text or sharp lines. Choose JPG when file size matters — JPG files are 3–5x smaller than PNG for the same photo."
          />
          <FAQItem
            question="Will the PNG file be larger than the original HEIC?"
            answer="Yes, typically 3–5x larger. A 3MB HEIC photo typically becomes an 8–15MB PNG. This is expected — HEIC uses efficient lossy compression, while PNG uses lossless compression that preserves every pixel. If file size is a concern, convert to JPG instead."
          />
          <FAQItem
            question="Are my HEIC photos safe to convert here?"
            answer="Yes. All conversion happens entirely in your browser — no file is ever sent to a server. Your photos stay on your device throughout the process. This makes the tool safe for personal photos, private documents, and confidential images."
          />
          <FAQItem
            question="Can I convert HEIC to PNG on my iPhone?"
            answer="Yes. Open this page in Safari or Chrome on your iPhone, tap the upload area, and select your HEIC photo from the camera roll or Files app. The browser converts it locally. The downloaded PNG saves to your Files app."
          />
          <FAQItem
            question="Does the converted PNG support transparency?"
            answer="iPhone camera photos do not contain transparency — they are standard opaque images. The converted PNG will have a solid background matching the original photo. PNG transparency is only relevant when converting design assets or graphics that have alpha channels."
          />
          <FAQItem
            question="Does converting HEIC to PNG preserve EXIF data?"
            answer="The browser-based conversion does not preserve EXIF metadata such as GPS location, date taken, or camera settings. If you need to retain EXIF data, use a desktop app like Apple Photos (File → Export as PNG) or Adobe Lightroom."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/heic-to-jpg',
              label: 'HEIC to JPG',
              desc: 'Smaller file size — best for sharing and social media',
            },
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce PNG file size after conversion',
            },
            {
              href: '/resize-image',
              label: 'Resize Image',
              desc: 'Scale your PNG to any dimension',
            },
            {
              href: '/png-to-jpg',
              label: 'PNG to JPG',
              desc: 'Convert PNG to JPG for smaller file size',
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
