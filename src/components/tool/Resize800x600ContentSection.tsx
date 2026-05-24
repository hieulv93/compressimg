import Link from 'next/link'

export default function Resize800x600ContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">About the 800×600 Resolution</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          800×600 — the SVGA (Super Video Graphics Array) standard — is a classic 4:3 resolution
          that predates the widescreen era. Despite being over three decades old, it remains in
          active use as a maximum image size for online forms, government portals, insurance
          systems, and legacy enterprise software that was built when 800×600 was the common screen
          resolution.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Resizing a modern phone photo (12MP+) to 800×600 reduces the file from several megabytes
          to typically 100–300KB, making it suitable for email attachments, upload fields with size
          limits, and web pages that need to load quickly on slow connections.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When You Need an 800×600 Image</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Government and ID portals',
              desc: 'Many official portals for visa applications, passport renewal, and document submission specify 800×600 or smaller as the maximum upload size. Phone photos are rejected if too large.',
            },
            {
              title: 'Online job applications',
              desc: 'HR systems and applicant tracking software often limit photo uploads to 800×600 or similar. The restriction is technical — older systems cannot handle large images.',
            },
            {
              title: 'Email attachments',
              desc: 'An 800×600 JPEG is typically 100–300KB — a fraction of the 3–5MB that smartphone photos produce. It renders well in email clients without triggering size warnings or slow load times.',
            },
            {
              title: 'Legacy CMS and intranets',
              desc: 'Older WordPress themes, intranet portals, and corporate CMS systems were designed for 800×600 images. Uploading a larger image causes layout overflow or broken design.',
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
        <h2 className="text-xl font-bold text-text-main">4:3 Resolution Standards</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Name</th>
                <th className="text-left p-3 border border-border font-semibold">Resolution</th>
                <th className="text-left p-3 border border-border font-semibold">Era</th>
                <th className="text-left p-3 border border-border font-semibold">Still used for</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'VGA',
                  res: '640×480',
                  era: '1980s–90s',
                  use: 'Minimum for webcams, tiny thumbnails',
                },
                {
                  name: 'SVGA',
                  res: '800×600',
                  era: '1990s–2000s',
                  use: 'Forms, legacy portals, email',
                },
                { name: 'XGA', res: '1024×768', era: '2000s', use: 'Older projectors, tablets' },
                {
                  name: 'SXGA',
                  res: '1280×960',
                  era: '2000s–2010s',
                  use: 'Older professional monitors',
                },
                { name: 'UXGA', res: '1600×1200', era: '2000s', use: 'Print-ready web graphics' },
              ].map(({ name, res, era, use }, i) => (
                <tr key={name} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{name}</td>
                  <td className="p-3 border border-border text-text-muted">{res}</td>
                  <td className="p-3 border border-border text-text-muted">{era}</td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image
            </Link>{' '}
            — reduce file size further after resizing
          </li>
          <li>
            <Link href="/resize-image-in-kb" className="text-primary hover:underline">
              Resize Image in KB
            </Link>{' '}
            — resize to a specific file size (e.g., under 100KB)
          </li>
          <li>
            <Link href="/compress-image-for-email" className="text-primary hover:underline">
              Compress Image for Email
            </Link>{' '}
            — optimize images for email attachments
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image
            </Link>{' '}
            — resize to any custom dimensions
          </li>
          <li>
            <Link href="/resize-image-to-1920x1080" className="text-primary hover:underline">
              Resize to 1920×1080
            </Link>{' '}
            — Full HD for modern displays
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Why do some websites require 800×600 maximum?',
              a: 'Many government portals, insurance systems, and HR platforms were built in the 2000s when 800×600 was the standard screen resolution. The upload limits were never updated, so they still reject images larger than 800×600 pixels or above a certain file size (typically 500KB–2MB).',
            },
            {
              q: 'How large will the file be at 800×600?',
              a: 'An 800×600 JPEG (quality 85%) is typically 100–300KB for photos and 50–150KB for screenshots or graphics. This is dramatically smaller than the 2–8MB files that modern smartphones produce.',
            },
            {
              q: 'Is 800×600 in 4:3 ratio?',
              a: 'Yes. 800÷600 = 4÷3, so 800×600 is exactly the 4:3 ratio. Most smartphones shoot in 4:3 or 16:9 — 4:3 phone photos will resize to 800×600 cleanly without white bars.',
            },
            {
              q: 'Will the image quality be acceptable at 800×600?',
              a: 'For official documents, forms, and web use, yes. 800×600 contains 480,000 pixels — enough for clear text, ID photos, and product images at normal viewing distances. Print quality at this resolution is low, but screen quality is fine.',
            },
            {
              q: 'What if the upload form still rejects my image?',
              a: 'Some forms reject images based on file size (e.g., under 200KB), not just pixel dimensions. Use the Compress Image or Resize in KB tool to reduce the file size below the limit after resizing to 800×600.',
            },
            {
              q: 'Are my files uploaded to a server?',
              a: 'No. All resizing happens entirely in your browser. Your images are never sent to any server.',
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
