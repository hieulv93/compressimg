import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForResumeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing resume and CV photos"
    >
      {/* Direct answer box */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Resume Photo File Size Requirements by Job Portal
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">
            Most job portals require your photo to be under 50KB–200KB.
          </strong>{' '}
          Naukri enforces a 50KB limit. LinkedIn accepts up to 8MB but recommends under 2MB. Indeed
          accepts photos up to 5MB for profile pictures. Government portals in India (SSC, IBPS,
          UPSC) typically require photos under 50KB at 200×230 or 300×300 pixels. Quality 80 on a
          400×400px JPEG compresses to 20–50KB — fits every major portal.
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 text-sm">
          <p className="font-semibold text-text-main mb-3">
            Job Portal Photo Requirements — Quick Reference
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-text-muted border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-text-main">Portal</th>
                  <th className="text-left py-2 pr-4 font-semibold text-text-main">Max size</th>
                  <th className="text-left py-2 pr-4 font-semibold text-text-main">Dimensions</th>
                  <th className="text-left py-2 font-semibold text-text-main">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4">Naukri</td>
                  <td className="py-2 pr-4">50KB</td>
                  <td className="py-2 pr-4">200×200 – 400×400px</td>
                  <td className="py-2">JPG, PNG</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">8MB</td>
                  <td className="py-2 pr-4">400×400px (min)</td>
                  <td className="py-2">JPG, PNG, GIF</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Indeed</td>
                  <td className="py-2 pr-4">5MB</td>
                  <td className="py-2 pr-4">Any</td>
                  <td className="py-2">JPG, PNG</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Monster</td>
                  <td className="py-2 pr-4">4MB</td>
                  <td className="py-2 pr-4">Any</td>
                  <td className="py-2">JPG, PNG</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">SSC / IBPS / UPSC</td>
                  <td className="py-2 pr-4">50KB</td>
                  <td className="py-2 pr-4">200×230px (typical)</td>
                  <td className="py-2">JPG</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Shine / TimesJobs</td>
                  <td className="py-2 pr-4">200KB</td>
                  <td className="py-2 pr-4">Any</td>
                  <td className="py-2">JPG, PNG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* How to compress — 3 steps */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress a Resume Photo Online — 3 Simple Steps
        </h2>
        <ol className="space-y-4" id="step-1">
          <li className="flex gap-4 items-start" id="step-1">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <h3 className="font-semibold text-text-main text-sm">Upload Your Resume Photo</h3>
              <p className="text-text-muted text-sm mt-1 leading-relaxed">
                Click the upload area or drag and drop your photo. Accepts JPG, PNG, WebP, and HEIC
                — up to 20MB. iPhone HEIC photos are automatically converted to JPEG so they work on
                every job portal.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start" id="step-2">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <h3 className="font-semibold text-text-main text-sm">
                Set Quality to 80 (for Most Portals)
              </h3>
              <p className="text-text-muted text-sm mt-1 leading-relaxed">
                Quality 80 compresses a 400×400px resume photo to 20–50KB with no visible quality
                loss. For Naukri&apos;s strict 50KB limit, quality 75–80 works for 400×400px. For
                government exam portals (SSC, IBPS) at 200×230px, quality 70–75 gives 8–20KB — well
                under the limit.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start" id="step-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <h3 className="font-semibold text-text-main text-sm">
                Download the Compressed Photo
              </h3>
              <p className="text-text-muted text-sm mt-1 leading-relaxed">
                The result card shows original vs compressed size before you download. Click
                Download to save the photo. No account, no watermark, no server upload — your photo
                stays on your device.
              </p>
            </div>
          </li>
        </ol>
      </div>

      {/* Quality guide */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          Which Quality Setting Should I Use for My CV Photo?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-1">
            <h3 className="font-semibold text-text-main">Quality 80–85 — Standard Portals</h3>
            <p className="text-text-muted text-xs leading-relaxed">
              LinkedIn, Indeed, Monster, TimesJobs. File typically 20–80KB at 400×400px. Skin tones
              and background are sharp and accurate. No visible compression artifacts.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-1">
            <h3 className="font-semibold text-text-main">Quality 70–80 — Naukri (50KB limit)</h3>
            <p className="text-text-muted text-xs leading-relaxed">
              At 400×400px, quality 75 outputs 15–35KB. At 200×200px, quality 80 outputs 5–15KB.
              Both are safely under Naukri&apos;s 50KB limit. Quality remains professional.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-1">
            <h3 className="font-semibold text-text-main">Quality 65–75 — Government Exams</h3>
            <p className="text-text-muted text-xs leading-relaxed">
              SSC, IBPS, UPSC, NEET, JEE typically require 200×230px or 300×300px at under 50KB.
              Quality 70 at 200×230px gives 8–18KB — fits any government portal.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-1">
            <h3 className="font-semibold text-text-main">Quality 55–65 — Under 20KB</h3>
            <p className="text-text-muted text-xs leading-relaxed">
              Some portals require signatures or photos under 20KB. Resize to 200×200px first using
              the Resize Image tool, then compress at quality 60. Output will be 8–15KB.
            </p>
          </div>
        </div>
      </div>

      {/* Tips section */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for the Best Resume Photo Compression
        </h2>
        <ul className="space-y-3 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">→</span>
            <span>
              <strong className="text-text-main">Resize before compressing</strong> — If your photo
              is from a phone camera (4032×3024px), resize to 400×400px first using the{' '}
              <Link href="/resize-image/" className="text-primary hover:underline">
                Resize Image
              </Link>{' '}
              tool. Compressing a 4K photo directly wastes file size.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">→</span>
            <span>
              <strong className="text-text-main">Use JPEG, not PNG</strong> — PNG files for a resume
              photo are 3–5× larger than JPEG at the same quality. All job portals accept JPEG.
              Always compress to JPEG for portal uploads.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">→</span>
            <span>
              <strong className="text-text-main">iPhone HEIC photos</strong> — Upload directly, the
              tool converts HEIC to JPEG automatically. Then resize to 400×400px before uploading to
              Naukri or government portals.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">→</span>
            <span>
              <strong className="text-text-main">Check the output size</strong> — The result card
              shows the exact compressed file size before you download. No need to guess — if it
              shows 38KB, your Naukri upload will work.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">→</span>
            <span>
              <strong className="text-text-main">White background</strong> — Most job portals and
              government forms require a plain white or light-grey background. Ensure your photo
              meets this before compressing — compression does not change background color.
            </span>
          </li>
        </ul>
      </div>

      {/* Privacy section */}
      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Photos Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs entirely in your browser using JavaScript — no server, no upload, no
          storage. Your resume photo is sensitive identity data. Never use a tool that uploads your
          photo to an unknown server. This tool is 100% local and private.
        </p>
      </div>

      {/* Related tools */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/compress-image/', label: 'Compress Image', desc: 'JPG, PNG, WebP, HEIC' },
            {
              href: '/resize-image/',
              label: 'Resize Image',
              desc: 'Change pixel dimensions',
            },
            {
              href: '/compress-image-to-100kb/',
              label: 'Compress to 100KB',
              desc: 'Exact size control',
            },
            {
              href: '/compress-image-to-50kb/',
              label: 'Compress to 50KB',
              desc: 'Fits Naukri limit',
            },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            {
              href: '/compress-image-for-passport/',
              label: 'Passport Compressor',
              desc: 'Under 240KB',
            },
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

      {/* FAQ */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          Frequently Asked Questions About Compressing Resume Photos
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is the photo size limit for Naukri?',
              a: 'Naukri requires resume photos under 50KB in JPG or PNG format. Recommended dimensions are 200×200 to 400×400 pixels with a plain white or light background. Quality 75 on a 400×400px JPEG outputs 15–35KB — safely under the 50KB limit.',
            },
            {
              q: 'How do I compress a resume photo to under 20KB?',
              a: 'Resize your photo to 200×200px first using the Resize Image tool, then compress here at quality 60–65. A 200×200px JPEG at quality 65 outputs 8–18KB — suitable for government exam portals (SSC, IBPS, UPSC) with strict 20KB limits.',
            },
            {
              q: 'What format should I use for a resume photo?',
              a: 'Use JPEG (JPG). It produces files 3–5× smaller than PNG at the same visual quality. PNG is only useful for images with transparency — which job portals do not support. Always use JPEG for any portal upload.',
            },
            {
              q: 'Can I compress an iPhone HEIC photo for my resume?',
              a: 'Yes. Upload your iPhone HEIC photo directly — the tool converts it to JPEG automatically. iPhone photos are large (4032×3024px), so resize to 400×400px after compressing for portal uploads.',
            },
            {
              q: 'Does compressing a resume photo reduce its dimensions?',
              a: 'No. This compressor reduces file size only — the pixel dimensions stay the same. If you need to change dimensions (e.g., to 200×230px for SSC), use the Resize Image tool first, then compress.',
            },
            {
              q: 'Is it safe to compress my resume photo online?',
              a: 'With this tool, yes — your photo never leaves your device. All compression runs in your browser. Your face and identity data are never uploaded, stored, or transmitted to any server.',
            },
            {
              q: 'What quality setting should I use for LinkedIn?',
              a: 'Quality 85 is ideal for LinkedIn profile pictures. LinkedIn displays photos at 400×400px — a JPEG at this size and quality 85 is 30–80KB. LinkedIn accepts up to 8MB, so any quality 75+ will work fine.',
            },
            {
              q: 'How do I compress a photo for a government exam portal?',
              a: 'Government exam portals (SSC, IBPS, UPSC, NEET) typically require photos at 200×230px or 300×300px under 50KB. Upload your photo here, set quality to 70, and check the output size. If under 50KB, download and upload to the portal. For photos still too large, lower quality to 65.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
