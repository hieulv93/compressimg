import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForPassportContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing passport photos"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          US Passport Photo File Size Requirements
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">
            Yes — the US State Department has strict digital photo requirements.
          </strong>{' '}
          For online passport applications and renewals, your photo must be a JPEG file under 240KB,
          at least 600×600 pixels, and no larger than 1200×1200 pixels. The head must fill 70–80% of
          the frame, and the background must be plain white or off-white. A photo that exceeds 240KB
          will be rejected by the government portal with no option to resubmit the same file.
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 space-y-2 text-sm">
          <p className="font-semibold text-text-main">
            US Passport Photo Requirements — Quick Reference
          </p>
          <ul className="space-y-1 text-text-muted text-xs leading-relaxed">
            <li>
              📁 <strong className="text-text-main">File format:</strong> JPEG only (not PNG, WebP,
              or HEIC)
            </li>
            <li>
              📏 <strong className="text-text-main">File size:</strong> Under 240KB
            </li>
            <li>
              🖼️ <strong className="text-text-main">Dimensions:</strong> Minimum 600×600px, maximum
              1200×1200px
            </li>
            <li>
              👤 <strong className="text-text-main">Head size:</strong> Must fill 70–80% of frame
            </li>
            <li>
              🟦 <strong className="text-text-main">Background:</strong> Plain white or off-white
              only
            </li>
            <li>
              ✅ <strong className="text-text-main">Recommended quality:</strong> 75–80 (output
              typically 20–80KB — well under the 240KB limit)
            </li>
          </ul>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Because the US government portal only accepts JPEG, this tool automatically outputs your
          compressed photo as JPEG — even if you upload a PNG or HEIC file from your iPhone. No
          format conversion step is needed before compressing.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress a Passport Photo — Step by Step
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your passport photo</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your photo, or paste from clipboard (Ctrl+V).
                Accepted formats: JPG, PNG, WebP, HEIC. Your photo is never sent to any server — all
                processing happens locally in your browser.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Keep quality at 80</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The default quality of 80 produces a passport photo that is visually
                indistinguishable from the original at government review sizes. A 600×600px JPEG at
                quality 80 is typically 20–60KB — far under the 240KB limit. Only lower the quality
                if your original photo is very large (over 2000px wide).
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Check the output size, then download
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result shows the exact compressed file size in KB before you download. Confirm
                the size is under 240KB, then click Download. The JPEG file saves directly to your
                device — ready to upload to the State Department or USPS portal.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Passport Photo Requirements by Application Type
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Application
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Max file size
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Dimensions
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Format
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['US Passport (State Dept)', '240KB', '600×600 – 1200×1200px', 'JPEG only'],
                ['US Passport Renewal (DS-82)', '240KB', '600×600 – 1200×1200px', 'JPEG only'],
                ['US Visa Application', '240KB', '600×600 – 1200×1200px', 'JPEG only'],
                ['Global Entry / Trusted Traveler', '5MB', '600×600px min', 'JPEG, PNG'],
                ['TSA PreCheck enrollment', 'N/A', 'In-person only', 'N/A'],
                ['Passport Card (DS-11)', '240KB', '600×600 – 1200×1200px', 'JPEG only'],
              ].map(([app, size, dims, fmt]) => (
                <tr key={app} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{app}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{dims}</td>
                  <td className="p-3 border border-border text-text-muted">{fmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Always verify requirements directly with the official portal before submitting. See the{' '}
          <a
            href="https://travel.state.gov/content/travel/en/passports/passport-help/photos.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            US State Department official passport photo requirements
          </a>{' '}
          for the most current specifications.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Your Passport Photo Upload Was Rejected
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Government portals reject passport photos for several reasons. File size is the most
          common — a smartphone JPEG from an iPhone 14 can be 4–8MB, which is 17–33× the 240KB
          limit. But format and dimensions also cause rejections:
        </p>
        <div className="space-y-3">
          {[
            {
              title: 'File over 240KB',
              desc: 'The most common rejection reason. A JPEG photo taken on a smartphone is typically 2–8MB. Even a photo taken specifically for a passport application can be 500KB–2MB depending on camera settings. Compress to under 240KB before uploading.',
            },
            {
              title: 'Wrong format (PNG, WebP, HEIC)',
              desc: 'US government portals only accept JPEG. iPhones save in HEIC by default, and many editing tools export in PNG or WebP. This tool converts any supported format to JPEG automatically during compression — you get a JPEG output regardless of the input format.',
            },
            {
              title: 'Dimensions below 600×600px or above 1200×1200px',
              desc: 'Photos taken with a front-facing selfie camera at low resolution, or heavily cropped photos, can fall below 600×600px. Conversely, photos exported from a DSLR or high-resolution editing software may exceed 1200×1200px. Use the Resize Image tool to set exact dimensions, then compress here.',
            },
            {
              title: 'Head fills less than 70% of the frame',
              desc: 'This is a composition issue, not a file size issue. Government photo checkers use AI to evaluate head position and size. If rejected for this reason, retake or crop the photo so the head (chin to top of head) fills 70–80% of the vertical frame before compressing.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Compress Passport Photo on iPhone — HEIC to JPEG
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          iPhones save photos in HEIC format by default — a highly efficient format that the US
          passport portal does not accept. Most iPhone passport photos are 2–5MB in HEIC format at
          4032×3024px. Two problems: wrong format and wrong file size.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool solves both in one step. Upload your iPhone passport photo (HEIC or JPG),
          compress at quality 80, and download a JPEG file under 240KB. No separate conversion app
          needed. The HEIC → JPEG conversion happens automatically in your browser — your photo is
          never sent to any server.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">iPhone 12–15 (HEIC)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Default: HEIC, 4032×3024px, 2–5MB. After compressing at quality 80: JPEG, ~40–120KB —
              well under 240KB. No need to change iPhone camera settings.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">iPhone (Portrait mode)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Portrait mode photos are typically 3–7MB. The depth map is stripped during compression
              — the output is a standard flat JPEG with no depth data, which is correct for
              government submissions.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Passport Photo Never Leaves Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Passport photos are identity documents. Uploading them to an unknown server is a
          significant privacy risk — the server operator could store, index, or misuse your
          biometric photo. This tool processes your photo entirely within your browser using
          JavaScript. No data is transmitted to any server, logged, or stored. Close the browser tab
          and the photo data is permanently gone from memory.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For sensitive identity documents, always use a browser-based tool that processes files
          locally. Our{' '}
          <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
            Privacy Policy
          </Link>{' '}
          confirms that we collect no image data of any kind.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/resize-image',
              label: 'Resize Image',
              desc: 'Set exact pixel dimensions (e.g., 600×600px) before compressing',
            },
            {
              href: '/compress-image-to-100kb',
              label: 'Compress to 100KB',
              desc: 'Hit stricter size limits for some visa and government portals',
            },
            {
              href: '/compress-image-to-200kb',
              label: 'Compress to 200KB',
              desc: 'Slightly larger target — more quality retained',
            },
            {
              href: '/compress-image-for-email',
              label: 'Compress for Email',
              desc: 'Attach compressed passport photos to email applications',
            },
            {
              href: '/heic-to-jpg',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone HEIC photos to JPEG without compressing',
            },
            {
              href: '/compress-image-to-50kb',
              label: 'Compress to 50KB',
              desc: 'For exam registration and strict government portals under 50KB',
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
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="divide-y divide-border">
          {[
            {
              q: 'What is the file size requirement for a US passport photo?',
              a: 'For the US State Department online passport application and renewal portal, your digital passport photo must be a JPEG file under 240KB. The photo must be at least 600×600 pixels and no larger than 1200×1200 pixels. Quality 80 at 600×600px typically produces a 20–60KB file — well under the limit.',
            },
            {
              q: 'Does the US passport portal accept PNG or WebP photos?',
              a: 'No — the US State Department passport portal accepts JPEG only. PNG, WebP, and HEIC files will be rejected. This tool automatically outputs a JPEG file regardless of your input format, so you can upload an iPhone HEIC or a PNG and receive a passport-ready JPEG.',
            },
            {
              q: 'What quality setting should I use for a passport photo?',
              a: 'Quality 80 (the default) is appropriate for most passport photos. At 600×600px and quality 80, the output is typically 20–60KB — far under the 240KB limit and visually identical to the uncompressed original at government review sizes. Only lower the quality if the original photo is unusually large.',
            },
            {
              q: 'Can I compress a passport photo on my phone?',
              a: 'Yes. Open this page in Safari or Chrome on your iPhone or Android. Tap the upload area and select your passport photo. The tool accepts iPhone HEIC photos and converts them to JPEG automatically. Set quality to 80, compress, and download the JPEG file directly to your phone.',
            },
            {
              q: 'Is it safe to compress a passport photo online?',
              a: 'With this tool, yes — your passport photo never leaves your device. All compression runs in your browser. No image is uploaded to any server, stored, or transmitted. This matters for identity documents: a passport photo uploaded to an untrustworthy server could be stored or misused.',
            },
            {
              q: 'My passport photo was rejected — what should I do?',
              a: 'The most common reasons for rejection are: (1) file over 240KB — compress here at quality 80, (2) wrong format — use this tool to get a JPEG output, (3) dimensions outside 600×600 to 1200×1200px — use the Resize Image tool to set exact dimensions first, (4) head size — must fill 70–80% of frame, which is a composition issue requiring a retake or crop.',
            },
            {
              q: 'Do I need to resize my passport photo before compressing?',
              a: 'Only if your photo is outside the 600×600 to 1200×1200px range. Most smartphone photos (12MP+) are 3000–4000px wide — these can be compressed to under 240KB at quality 80 without resizing because the compressor reduces quality, not necessarily dimensions. However, if the portal also specifies an exact pixel size (e.g., 600×600px), use the Resize Image tool first.',
            },
            {
              q: 'Can I use this tool for visa applications and Global Entry?',
              a: "Yes. US visa applications (DS-160) follow the same photo requirements as passport applications: JPEG, under 240KB, 600×600 to 1200×1200px. Global Entry (CBP Trusted Traveler) accepts larger files up to 5MB in JPEG or PNG. For most government photo submissions, quality 80 produces a file well within any portal's limits.",
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
