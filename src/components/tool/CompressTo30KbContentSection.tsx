import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo30KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 30KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress an Image to 30KB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A 30KB limit appears on competitive exam portals (UPSC, NEET), state government admission
          forms, and some banking recruitment portals. NEET UG, for example, requires the photograph
          to be under 50KB and the signature under 30KB. UPSC requires the photograph under 40KB.
          These strict limits ensure fast rendering on government networks where bandwidth is
          limited and millions of candidates upload simultaneously. A photo over 30KB is rejected at
          the validation stage — often with a generic error message, not a clear explanation.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Compressing to 30KB from a phone photo (3–8MB) requires quality 60–65 combined with
          correct dimensions (typically 350×450px or 300×400px). This tool starts at quality 62,
          which gives 15–28KB for a 350×450px portrait. All compression runs in your browser — no
          upload required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 30KB — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Resize to portal dimensions first
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                If your photo is larger than 400×500px, reduce dimensions first using the{' '}
                <Link href="/resize-image/" className="text-primary hover:underline">
                  Resize Image
                </Link>{' '}
                tool. Common targets: 350×450px (NEET photo), 200×230px (IBPS/SSC), 300×400px (state
                admission portals). Then upload the resized image here.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 60–65</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 62 is the recommended starting point. A 350×450px photo at quality 62
                outputs 15–28KB. A 300×400px photo at quality 62 outputs 12–22KB. If still over
                30KB, lower to quality 55 or resize to smaller dimensions.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download when under 30KB</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result card shows exact compressed size in KB. Download when under 30KB. The
                file is ready to upload to your exam or admission portal.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Quick Reference: Size + Quality Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Dimensions</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Quality 65</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Quality 60</th>
                <th className="text-left py-2 font-semibold text-text-main">Quality 55</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">200×230px</td>
                <td className="py-2 pr-4">5–12KB ✅</td>
                <td className="py-2 pr-4">4–9KB ✅</td>
                <td className="py-2">3–7KB ✅</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">350×450px</td>
                <td className="py-2 pr-4">18–32KB ⚠️</td>
                <td className="py-2 pr-4">14–26KB ✅</td>
                <td className="py-2">11–20KB ✅</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">600×800px</td>
                <td className="py-2 pr-4">50–90KB ❌</td>
                <td className="py-2 pr-4">40–70KB ❌</td>
                <td className="py-2">30–55KB ⚠️</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted">
          ✅ Under 30KB | ⚠️ May be close | ❌ Likely over. Resize to 350×450px or smaller before
          compressing for reliable 30KB results.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs entirely in your browser. Exam photos, signature scans, and
          application documents are never uploaded to any server. Safe for sensitive official
          documents.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            {
              href: '/compress-image-to-20kb/',
              label: 'Compress to 20KB',
              desc: 'SSC signature limit',
            },
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
            { href: '/resize-image-to-50kb/', label: 'Resize to 50KB', desc: 'Exact size control' },
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
          Frequently Asked Questions About Compressing Images to 30KB
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How do I compress an image to under 30KB?',
              a: 'Set quality to 60–65. For a 350×450px photo at quality 62, output is 15–28KB. For larger photos (600px+), resize to 350×450px first using the Resize Image tool. Check the result card for exact output size.',
            },
            {
              q: 'Which exams require a 30KB signature or photo?',
              a: 'NEET UG requires the signature under 30KB (3.5×1.5cm). JEE Main signature is under 30KB (3.5×1.5cm). Many state PSC portals require photos and signatures at 20–50KB. Always check the official exam notice for exact requirements.',
            },
            {
              q: 'What quality setting gives 30KB output?',
              a: 'Quality 60–65 for a 350×450px portrait photo. At quality 62, output is typically 15–28KB. For a 300×400px photo, quality 65 gives 15–25KB. If still over 30KB, try quality 55 or reduce dimensions to 200×230px.',
            },
            {
              q: 'Can I compress a NEET photo to 30KB?',
              a: 'Yes. NEET requires the photo at 3.5×4.5cm (approximately 350×450px at 100 DPI). At this size, quality 62 outputs 15–28KB — under 30KB. The photograph requirement for NEET is 50KB, so 30KB is safely within both limits.',
            },
            {
              q: 'Does compressing to 30KB affect how the face looks?',
              a: 'At 350×450px and quality 62, the face is clear and recognizable — acceptable for exam portal submission. Compression artifacts are minimal at this quality level. For higher quality within 30KB, reduce dimensions to 300×400px and use quality 68.',
            },
            {
              q: 'Is my image safe when I use this tool?',
              a: 'Yes. All compression runs in your browser — your image never leaves your device. No upload, no storage, no tracking. Safe for exam registration photos and official documents.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
