import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo20KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 20KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress an Image to 20KB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A 20KB limit is one of the strictest image upload requirements — most common in Indian
          government exam portals (SSC, IBPS, UPSC, NEET, JEE) for signature scans and profile
          photos. The SSC CGL and CHSL forms, for example, require the signature to be under 20KB at
          140×60 pixels. The photograph itself is often required at 200×230px and 40–50KB. These
          limits exist because government IT systems process millions of registrations and must keep
          database and server costs low. A file over the limit is rejected without the ability to
          re-upload the same file.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Reaching 20KB from a typical phone photo (3–8MB) requires aggressive quality compression
          and, for photos larger than 300×400px, reducing dimensions first. This tool starts at
          quality 55, which compresses a 200×230px portrait photo to 5–15KB. All processing runs in
          your browser — no upload required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 20KB — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Resize your image first (if needed)
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                If your photo is larger than 300×400px, reduce dimensions first using the{' '}
                <Link href="/resize-image/" className="text-primary hover:underline">
                  Resize Image
                </Link>{' '}
                tool. For SSC/IBPS photos: target 200×230px. For signatures: target 140×60px. Then
                upload the resized image here for compression.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 55–60</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 55 is the starting point for 20KB targets. A 200×230px photo at quality 55
                outputs 5–14KB. A 140×60px signature at quality 55 outputs 2–8KB — both well under
                20KB. If the output is still above 20KB, lower to quality 45–50 or reduce dimensions
                further.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Check output size and download</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result card shows the exact compressed file size in KB before you download. When
                the size shows under 20KB, click Download. The file is ready to upload to your exam
                portal.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Common Portals That Require Photos Under 20KB
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Portal / Exam</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Photo limit</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Sign limit</th>
                <th className="text-left py-2 font-semibold text-text-main">Dimensions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">SSC CGL / CHSL</td>
                <td className="py-2 pr-4">40KB</td>
                <td className="py-2 pr-4">20KB</td>
                <td className="py-2">Photo 200×230px · Sign 140×60px</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">IBPS PO / Clerk</td>
                <td className="py-2 pr-4">50KB</td>
                <td className="py-2 pr-4">20KB</td>
                <td className="py-2">Photo 200×230px · Sign 140×60px</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">UPSC IAS / IPS</td>
                <td className="py-2 pr-4">40KB</td>
                <td className="py-2 pr-4">20KB</td>
                <td className="py-2">Photo 200×230px · Sign 200×80px</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">NEET UG</td>
                <td className="py-2 pr-4">50KB</td>
                <td className="py-2 pr-4">20KB</td>
                <td className="py-2">Photo 3.5×4.5cm · Sign 3.5×1.5cm</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">JEE Main</td>
                <td className="py-2 pr-4">40KB</td>
                <td className="py-2 pr-4">30KB</td>
                <td className="py-2">Photo 3.5×4.5cm · Sign 3.5×1.5cm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted">
          Verify requirements on the official portal — limits may change between exam cycles.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <p className="font-semibold text-text-main">Tip: Compress Signature Scans to Under 10KB</p>
        <p className="text-text-muted text-xs leading-relaxed">
          Signatures have a white background and simple black lines — they compress far better than
          photos. Upload your 140×60px signature scan at quality 50 → output will typically be
          2–6KB, leaving plenty of room under the 20KB limit. If the scan has a grey or off-white
          background, crop it to remove extra whitespace before compressing.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs entirely in your browser. Your exam photos, signature scans, and ID
          documents are never uploaded to any server, stored, or shared. Safe for official and
          sensitive documents.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            {
              href: '/compress-image-to-50kb/',
              label: 'Compress to 50KB',
              desc: 'Fits most portals',
            },
            {
              href: '/compress-image-to-100kb/',
              label: 'Compress to 100KB',
              desc: 'Resume, job portals',
            },
            { href: '/compress-image/', label: 'Compress Image', desc: 'Any format, any size' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            { href: '/resize-image-to-20kb/', label: 'Resize to 20KB', desc: 'Exact size control' },
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
          Frequently Asked Questions About Compressing Images to 20KB
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How do I compress an image to under 20KB?',
              a: 'Set quality to 55–60 and upload your image. For a 200×230px photo, quality 55 outputs 5–14KB. For a 140×60px signature, quality 55 outputs 2–8KB. If still over 20KB, reduce dimensions first using the Resize Image tool.',
            },
            {
              q: 'Why is the 20KB limit so strict?',
              a: 'Government exam portals (SSC, IBPS, UPSC) process millions of registrations simultaneously. A 20KB limit keeps total database storage under control — 1 million photos at 20KB each = 20GB. At 200KB each, the same batch would be 200GB, making the system expensive and slow.',
            },
            {
              q: 'Can I compress a signature to 20KB?',
              a: 'Yes — easily. Signatures have white backgrounds and simple black lines, so they compress far more efficiently than photos. A 140×60px signature at quality 55 outputs 2–6KB, well under the 20KB limit.',
            },
            {
              q: 'What dimensions should the SSC photo and signature be?',
              a: 'SSC CGL / CHSL requires: Photo — 200×230 pixels, under 40KB, JPG only. Signature — 140×60 pixels, under 20KB, JPG only. Always verify on the official SSC NR or SSC official portal before submission, as requirements may change.',
            },
            {
              q: 'Does compressing to 20KB change photo dimensions?',
              a: 'No. This tool only reduces file size — dimensions stay the same. Use the Resize Image tool to change dimensions, then compress here to reach 20KB.',
            },
            {
              q: 'Is this tool safe for exam registration photos?',
              a: 'Yes. Your photo is never uploaded to any server — all compression runs in your browser. Safe for government exam photos, signature scans, and official ID documents.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
