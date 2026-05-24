import Link from 'next/link'

export default function IcoToPngContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is an ICO File?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          ICO (Icon) is a file format used by Windows for application icons and website favicons. An
          ICO file can contain multiple sizes of the same image in a single file — typically 16×16,
          32×32, 48×48, 64×64, 128×128, and 256×256 pixels. This allows the operating system to
          select the best size for the current context (taskbar, desktop, file explorer).
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          On the web, favicon.ico is the standard filename for website icons displayed in browser
          tabs and bookmarks. Most websites place a favicon.ico at their root domain for broad
          browser compatibility.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert ICO to PNG?</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Design tool compatibility',
              desc: 'Figma, Canva, Sketch, and most design tools do not import ICO files. Convert to PNG to open the icon in any design application.',
            },
            {
              title: 'Extracting a favicon for editing',
              desc: 'When you need to redesign or scale up a website favicon, convert the ICO to PNG to get an editable version.',
            },
            {
              title: 'Presentations and documents',
              desc: 'PowerPoint, Google Slides, and Word accept PNG but may not accept ICO files. Convert to PNG for use in presentations.',
            },
            {
              title: 'Web use outside of favicons',
              desc: 'ICO is not a valid web image format for <img> tags. Convert to PNG to use the icon image on a webpage, in emails, or in a UI.',
            },
            {
              title: 'Cross-platform compatibility',
              desc: 'ICO is a Windows format. macOS and Linux do not natively open ICO files. PNG works on all platforms.',
            },
            {
              title: 'Preserving transparency',
              desc: 'ICO supports transparency. Converting to PNG preserves the alpha channel — icon backgrounds stay transparent.',
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
        <h2 className="text-xl font-bold text-text-main">Standard ICO Sizes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Size</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Where it appears
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: '16×16 px', where: 'Browser tab favicon, Windows Explorer small icon' },
                {
                  size: '32×32 px',
                  where: 'Windows taskbar (standard DPI), browser tab on some browsers',
                },
                { size: '48×48 px', where: 'Windows Explorer medium icon' },
                { size: '64×64 px', where: 'Windows Explorer large icon, high-DPI taskbar' },
                { size: '128×128 px', where: 'macOS Dock, Windows 10 Start Menu tiles' },
                { size: '256×256 px', where: 'Windows Explorer extra-large icon, retina displays' },
              ].map(({ size, where }, i) => (
                <tr key={size} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-mono text-primary font-bold">
                    {size}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Need the Reverse? PNG to ICO</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          If you need to create a favicon.ico from a PNG logo or icon, use the{' '}
          <Link href="/png-to-ico" className="text-primary hover:underline">
            PNG to ICO converter
          </Link>
          . It generates a multi-size ICO file containing 16, 32, 48, 64, 128, and 256px versions
          from your source PNG — ready to use as a favicon.ico on any website.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/png-to-ico" className="text-primary hover:underline">
              PNG to ICO
            </Link>{' '}
            — create a multi-size favicon.ico from any PNG
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize image
            </Link>{' '}
            — resize the extracted PNG to a specific dimension
          </li>
          <li>
            <Link href="/png-to-webp" className="text-primary hover:underline">
              PNG to WebP
            </Link>{' '}
            — compress the PNG to smaller WebP after extraction
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce file size of the converted PNG
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What size PNG does the converter extract from the ICO?',
              a: 'The browser renders the ICO file and extracts the size best suited for display. For most ICO files, this is the largest embedded size — typically 256×256 or 128×128 for modern icons, or 32×32 for classic favicons. The result depends on the sizes embedded in your specific ICO file.',
            },
            {
              q: 'Does the conversion preserve transparency?',
              a: 'Yes. ICO files support transparency (alpha channel) and PNG preserves it fully. Transparent areas in the ICO icon remain transparent in the PNG output.',
            },
            {
              q: 'Can I open the PNG in Photoshop or Figma?',
              a: 'Yes. PNG is universally supported in all design tools — Photoshop, Figma, Sketch, Canva, Affinity Photo, GIMP, and all others. Opening the PNG lets you edit the icon, scale it up, or export it to other formats.',
            },
            {
              q: 'Why can I not open my ICO file directly on macOS?',
              a: 'ICO is a Windows format. macOS does not include native support for opening ICO files in Preview. Converting to PNG gives you a file that opens natively on macOS, iOS, and all other platforms.',
            },
            {
              q: 'Can I convert multiple ICO files at once?',
              a: 'This tool converts one file at a time. For batch ICO to PNG conversion, use a desktop application like IcoFX (Windows) or GIMP with a batch export script.',
            },
            {
              q: 'Are my ICO files uploaded to a server?',
              a: 'No. All conversion happens entirely in your browser. Your ICO files are never sent to any server and never leave your device.',
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
