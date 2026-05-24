import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function ExifRemoverContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to removing EXIF data from photos"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is EXIF Data?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          EXIF stands for Exchangeable Image File Format. It is a standard for embedding metadata
          directly inside image files — data that your camera or smartphone writes automatically at
          the moment a photo is taken. Every JPG from an iPhone or Android device contains EXIF by
          default. So does every photo taken with a DSLR, mirrorless camera, or even a modern
          webcam.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          EXIF metadata is invisible in the image itself but readable by anyone who opens the file
          with the right software — including free tools like Windows Photos, macOS Preview, or a
          simple online EXIF viewer. This means that when you share an unprocessed photo, you may be
          sharing far more information than you realize.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What EXIF Metadata Contains</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A single smartphone photo can carry dozens of metadata fields. Here are the most common —
          and the most sensitive:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">EXIF field</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">
                  What it reveals
                </th>
                <th className="text-left py-2 font-semibold text-text-main">Risk level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">GPS Latitude / Longitude</td>
                <td className="py-2 pr-4">Exact location where photo was taken (within meters)</td>
                <td className="py-2 text-red-500 font-medium">High</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">GPS Altitude</td>
                <td className="py-2 pr-4">Floor or elevation above sea level</td>
                <td className="py-2 text-red-500 font-medium">High</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Date &amp; Time Taken</td>
                <td className="py-2 pr-4">Exact timestamp down to the second</td>
                <td className="py-2 text-yellow-600 font-medium">Medium</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Camera Make &amp; Model</td>
                <td className="py-2 pr-4">iPhone 15 Pro, Samsung Galaxy S24, Canon R6…</td>
                <td className="py-2 text-yellow-600 font-medium">Medium</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Device Serial Number</td>
                <td className="py-2 pr-4">Unique hardware identifier — links to your device</td>
                <td className="py-2 text-yellow-600 font-medium">Medium</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Lens &amp; Focal Length</td>
                <td className="py-2 pr-4">
                  Exact lens used, focal length, aperture, shutter speed
                </td>
                <td className="py-2 text-text-muted">Low</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">ISO &amp; Exposure</td>
                <td className="py-2 pr-4">Light conditions at time of capture</td>
                <td className="py-2 text-text-muted">Low</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Software &amp; Editing History</td>
                <td className="py-2 pr-4">Lightroom version, editing app used</td>
                <td className="py-2 text-text-muted">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Beyond EXIF, image files can also carry IPTC metadata (copyright, caption, byline) and XMP
          metadata (Adobe editing history, ratings, keywords). This tool strips all three formats by
          redrawing the image through the browser Canvas API — the output contains only pixel data,
          nothing else.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Remove EXIF Data from a Photo — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your photo</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard. Accepts JPG, PNG,
                WebP, and HEIC up to 20MB. iPhone HEIC photos are automatically converted to JPEG.
                No account or sign-up required.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">EXIF is stripped automatically</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The tool immediately redraws your photo through the Canvas API — no button to click.
                This erases all EXIF, IPTC, and XMP metadata including GPS coordinates, camera
                model, date taken, and device serial number. The pixel content of your photo is
                fully preserved.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download the clean photo</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click Download. The file saves as{' '}
                <span className="font-mono text-xs bg-surface px-1 py-0.5 rounded">
                  clean-[original-name].jpg
                </span>{' '}
                — safe to share publicly. No GPS location, no camera fingerprint, no personal data.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Who Should Remove EXIF Data?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Freelancers & contractors sharing work samples',
              detail:
                'Portfolio photos and project screenshots may reveal when and where you worked — and on what equipment. Stripping EXIF keeps your work samples professional without leaking schedule or location patterns.',
            },
            {
              name: 'Parents sharing photos of children',
              detail:
                "A photo posted to a public forum, school website, or community group reveals the GPS location of your home, school, or a regular hangout. Removing location data before sharing protects your family's whereabouts.",
            },
            {
              name: 'Sellers listing items on marketplace apps',
              detail:
                'Photos of items for sale taken at home contain GPS coordinates that map to your exact address. Remove EXIF before posting to Craigslist, Facebook Marketplace, Vinted, or eBay to avoid sharing your location with strangers.',
            },
            {
              name: 'Journalists & activists',
              detail:
                'Photos taken at sensitive locations or events may contain GPS data that identifies sources, meeting places, or protest locations. EXIF removal is a basic operational security step for anyone photographing sensitive situations.',
            },
            {
              name: 'Photographers selling stock images',
              detail:
                'Licensing agreements may restrict sharing camera model, serial number, or editing software details. Stripping EXIF before submitting to stock libraries keeps your workflow private and your equipment undisclosed.',
            },
            {
              name: 'Anyone sharing photos publicly online',
              detail:
                "Uploading photos to public forums, personal blogs, or any platform where you don't control access? Remove EXIF first. You cannot control who downloads the file — but you can control what data it contains.",
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
        <h2 className="text-xl font-bold text-text-main">
          Do Social Media Platforms Remove EXIF Automatically?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Most major platforms strip EXIF when processing uploads — but not all, and not always. The
          table below reflects general behavior as of 2025. Platform behavior can change without
          notice, and direct file sharing bypasses platform processing entirely.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Platform</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Strips EXIF?</th>
                <th className="text-left py-2 font-semibold text-text-main">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">Instagram</td>
                <td className="py-2 pr-4 text-green-600 font-medium">Yes</td>
                <td className="py-2">Strips on upload; direct DM file shares may vary</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Facebook</td>
                <td className="py-2 pr-4 text-green-600 font-medium">Yes</td>
                <td className="py-2">Strips EXIF including GPS on all uploaded photos</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Twitter / X</td>
                <td className="py-2 pr-4 text-green-600 font-medium">Yes</td>
                <td className="py-2">Strips GPS; some EXIF may remain in original download</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">WhatsApp</td>
                <td className="py-2 pr-4 text-yellow-600 font-medium">Partial</td>
                <td className="py-2">
                  Compresses photos (strips EXIF); document mode preserves EXIF
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Telegram</td>
                <td className="py-2 pr-4 text-yellow-600 font-medium">Partial</td>
                <td className="py-2">Photo mode strips; file mode sends original with full EXIF</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Email</td>
                <td className="py-2 pr-4 text-red-500 font-medium">No</td>
                <td className="py-2">Attachments sent as-is; full EXIF preserved</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Dropbox / Google Drive</td>
                <td className="py-2 pr-4 text-red-500 font-medium">No</td>
                <td className="py-2">Files stored without modification; EXIF intact</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          The safest approach is to remove EXIF before sharing to any platform. Relying on platform
          processing means trusting behavior that changes without warning — and gives you no control
          over what metadata is shared in the moment of upload.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">How EXIF Removal Works — Canvas API</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          This tool uses the browser Canvas API to strip metadata. When your photo is drawn onto an
          HTML canvas element and exported as a new JPEG, the browser writes only pixel data into
          the output file — there is no mechanism to carry EXIF, IPTC, or XMP through a canvas
          redraw. No library is needed. No server is involved. The stripping is complete and
          guaranteed by how the Canvas API works, not by selectively deleting metadata fields.
        </p>
        <p className="text-text-muted text-xs leading-relaxed">
          Output quality is JPEG at 92 — visually lossless. Pixel dimensions are fully preserved.
          The only change to your photo is the removal of the metadata wrapper that the original
          file format carried.
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
            { href: '/rotate-image/', label: 'Rotate Image', desc: '90°, 180°, 270° rotation' },
            { href: '/flip-image/', label: 'Flip Image', desc: 'Mirror horizontal or vertical' },
            { href: '/crop-image/', label: 'Crop Image', desc: 'Remove unwanted areas' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
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
          Frequently Asked Questions About Removing EXIF Data
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is EXIF data and why should I remove it?',
              a: 'EXIF (Exchangeable Image File Format) data is metadata embedded in your photo by your camera or smartphone at the moment it is taken. It includes GPS coordinates (exact location), camera make and model, date and time, lens settings, and sometimes your device serial number. Removing EXIF before sharing photos publicly protects your location privacy and prevents others from identifying your device or routine.',
            },
            {
              q: 'Does removing EXIF data affect image quality?',
              a: 'No. This tool outputs JPEG at quality 92, which is visually lossless at normal viewing distances. The pixel content of your photo — colors, sharpness, composition — is completely unchanged. Only the metadata attached to the file is removed. The photo looks identical; it just contains no hidden data.',
            },
            {
              q: 'What metadata does this tool remove?',
              a: 'The Canvas API redraw removes all embedded metadata: EXIF (GPS coordinates, camera make/model, lens info, date/time, exposure settings, ISO, flash, orientation, device serial), IPTC (copyright, caption, creator info), and XMP (Adobe editing history, rating, keywords). The output JPEG contains only pixel data.',
            },
            {
              q: 'Can someone find where my photo was taken from the file?',
              a: 'If you share an unprocessed photo from a smartphone with location services enabled, yes — the GPS coordinates are embedded in the EXIF and can be read by anyone with basic tools. After running your photo through this EXIF remover, the GPS data is completely gone from the file. The photo can be shared safely without revealing your location.',
            },
            {
              q: 'Does Facebook, Instagram, or WhatsApp remove EXIF automatically?',
              a: 'Most major social platforms strip EXIF from photos uploaded through their standard interface. However, platforms like Telegram (file mode), email, Dropbox, and Google Drive send files unchanged with full EXIF intact. WhatsApp in document mode also preserves EXIF. Remove EXIF before sharing to any platform where you are not 100% certain of their metadata handling.',
            },
            {
              q: 'Is my photo private when using this tool?',
              a: 'Yes. All processing runs entirely in your browser using the Canvas API. Your photo is never uploaded to any server — not even for the EXIF removal step. This is particularly important for sensitive photos: no server, no storage, no network transfer. The operation is completely local to your device.',
            },
            {
              q: 'What image formats can I use with this tool?',
              a: 'JPG, PNG, WebP, and HEIC — up to 20MB per file. iPhone HEIC photos are automatically converted to JPEG before processing. Output is always JPEG at quality 92. PNG transparency is not preserved in the output.',
            },
            {
              q: 'How do I check if EXIF was successfully removed?',
              a: 'After downloading the clean photo, right-click it and select Properties → Details (Windows) or Get Info (macOS) to view metadata. Alternatively, upload the file to any online EXIF viewer — it should show no GPS, no camera model, and no date taken. Only basic technical fields like image dimensions will remain.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
