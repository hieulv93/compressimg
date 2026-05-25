import Link from 'next/link'

export default function ResizeImageForOnlineFormContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Online Forms Have Image Size Limits
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Government exam portals, job application systems, and HR platforms set maximum file sizes
          for uploaded photos and signatures to keep their servers fast and to enforce consistent
          image dimensions. A 5MB smartphone photo will be rejected outright — the form requires a
          file under 50KB or 100KB. This tool compresses your photo to exactly the KB limit
          specified, without changing the pixel dimensions or adding visible blur.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The tool also handles pixel dimension requirements. If the form specifies both a pixel
          size (e.g., 300×400px) and a file size limit (e.g., under 50KB), use the{' '}
          <Link href="/resize-image" className="text-primary hover:underline">
            Resize Image
          </Link>{' '}
          tool first to set the correct pixels, then use this tool to meet the KB limit.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Photo and Signature Requirements for Common Indian Government Exams
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Exam / Portal</th>
                <th className="text-left p-3 border border-border font-semibold">Photo size</th>
                <th className="text-left p-3 border border-border font-semibold">Signature size</th>
                <th className="text-left p-3 border border-border font-semibold">Format</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  exam: 'SSC CGL / CHSL',
                  photo: '100×120px, 20KB',
                  sig: '140×60px, 20KB',
                  fmt: 'JPEG',
                },
                {
                  exam: 'UPSC Civil Services',
                  photo: '300×400px, 50KB',
                  sig: '300×100px, 20KB',
                  fmt: 'JPEG',
                },
                {
                  exam: 'IBPS PO / Clerk',
                  photo: '200×230px, 100KB',
                  sig: '800×300px, 50KB',
                  fmt: 'JPEG',
                },
                {
                  exam: 'RRB NTPC / Group D',
                  photo: '100×120px, 50KB',
                  sig: '140×60px, 20KB',
                  fmt: 'JPEG',
                },
                {
                  exam: 'SBI PO / Clerk',
                  photo: '200×230px, 50KB',
                  sig: '800×300px, 50KB',
                  fmt: 'JPEG',
                },
                {
                  exam: 'NEET / JEE (NTA)',
                  photo: '240×320px, 40KB',
                  sig: '160×100px, 30KB',
                  fmt: 'JPEG',
                },
                {
                  exam: 'GATE / JAM',
                  photo: '480×640px, 500KB',
                  sig: '160×100px, 30KB',
                  fmt: 'JPEG',
                },
              ].map(({ exam, photo, sig, fmt }, i) => (
                <tr key={exam} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{exam}</td>
                  <td className="p-3 border border-border text-text-muted">{photo}</td>
                  <td className="p-3 border border-border text-text-muted">{sig}</td>
                  <td className="p-3 border border-border text-text-muted">{fmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-xs">
          Requirements change per notification cycle — verify against the official exam
          advertisement before submitting.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Two-Step Process for Strict Portals</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Step 1 — Fix the pixel dimensions',
              desc: 'Use Resize Image or Resize Signature to set the exact width and height in pixels. For example, resize to 100×120px for an SSC photo. Pixel dimensions and KB size are independent requirements — fix pixels first.',
            },
            {
              title: 'Step 2 — Fix the file size in KB',
              desc: 'Upload the pixel-correct image to this tool and set the target KB. The tool compresses the file to meet the limit. For a 20KB SSC signature, set target to 20 and download.',
            },
            {
              title: 'Background must be white',
              desc: 'Most government portals require a white background for photos. Take the photo against a white wall or backdrop. If your photo has a different background, you will need to edit it in a photo editor before resizing.',
            },
            {
              title: 'JPEG format required — not PNG',
              desc: 'Almost all government exam portals require JPEG. If your photo is saved as PNG or HEIC (iPhone), use the PNG to JPG or HEIC to JPG converters to get a JPEG file before resizing.',
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
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/resize-signature" className="text-primary hover:underline">
              Resize Signature
            </Link>{' '}
            — resize signature to SSC (140×60px), UPSC (300×100px), IBPS (800×300px) dimensions
          </li>
          <li>
            <Link href="/resize-image-in-kb" className="text-primary hover:underline">
              Resize Image in KB
            </Link>{' '}
            — resize to exact file size: 20KB, 50KB, 100KB, 200KB
          </li>
          <li>
            <Link href="/resize-image-to-20kb" className="text-primary hover:underline">
              Resize to 20KB
            </Link>{' '}
            — SSC and Railway signature file size limit
          </li>
          <li>
            <Link href="/resize-image-to-50kb" className="text-primary hover:underline">
              Resize to 50KB
            </Link>{' '}
            — UPSC photo and IBPS signature limit
          </li>
          <li>
            <Link href="/heic-to-jpg" className="text-primary hover:underline">
              HEIC to JPG
            </Link>{' '}
            — convert iPhone photos to JPEG before uploading to government portals
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What photo size do most government online forms require?',
              a: "Most Indian government exam portals require photos between 20KB and 100KB in JPEG format. Pixel dimensions vary: SSC uses 100×120px, UPSC uses 300×400px, and IBPS uses 200×230px. Always check the official notification's document upload section for the exact requirement before submitting.",
            },
            {
              q: 'How do I reduce a photo to under 50KB for an online form?',
              a: 'Set the target KB to 50 in the tool above, upload your photo, and download the result. The tool automatically compresses and adjusts the image to fit under 50KB. If the form also specifies exact pixel dimensions, use the Resize Image tool first, then use this tool to meet the KB limit.',
            },
            {
              q: 'My photo meets the KB limit but the portal still rejects it — why?',
              a: 'The portal may also validate pixel dimensions separately from file size. Check the form instructions for a required width and height in pixels. Use the Resize Image tool to set the exact pixel dimensions, then return here to meet the KB limit.',
            },
            {
              q: 'Can I resize both photo and signature for the same form?',
              a: 'Yes. Process each image separately. Upload the photo first, set the target KB (e.g., 50KB), and download. Then upload the signature, adjust the KB target if it differs (e.g., 20KB for SSC signature), and download.',
            },
            {
              q: 'Does the tool change my photo dimensions when reducing KB?',
              a: 'The tool first tries to reduce file size through JPEG compression. If compression alone cannot reach the target, it also reduces pixel dimensions proportionally. For most online form photos (starting from a smartphone photo), the pixel reduction is small and not visible in printed or displayed form output.',
            },
            {
              q: 'Is my photo uploaded to a server?',
              a: 'No. All processing happens entirely in your browser. Your photo or signature never leaves your device — there is no server upload at any point in the process.',
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
