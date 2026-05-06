import Link from 'next/link'
import FAQItem from './FAQItem'

export default function CompressTo100KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 100KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Does &quot;Compress Image to 100KB&quot; Mean?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Compressing an image to 100KB means reducing the digital file size to 100 kilobytes or
          less — without making the image unusable. A typical smartphone photo is 3–8MB (3,000–8,000
          KB). Government portals, university admission systems, job application forms, and many
          online platforms enforce strict file size limits, often 100KB, 200KB, or 500KB, to keep
          their servers fast and storage costs low. Hitting these limits requires a combination of
          quality compression and, in some cases, dimension resizing.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The good news: modern image compression algorithms can reduce a typical photo to under
          100KB while keeping it visually acceptable for most submission purposes. This tool lets
          you adjust quality from 1 to 100, giving you precise control over the output file size.
          You can see the exact compressed size before downloading, so you always know whether you
          have hit the 100KB target.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 100KB — Step by Step
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your file, or paste from clipboard (Ctrl+V).
                Supported formats: JPG, PNG, WebP. Files up to 20MB are accepted. Your image is
                never sent to any server — all processing happens locally in your browser.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Set quality to 60–70 for small targets
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The default quality is 80, which reduces most images by 50–70%. If you need to reach
                100KB specifically, start by moving the slider to 60–70. Check the compressed file
                size shown in the result. If still over 100KB, lower the quality further or resize
                the image dimensions first (see the tip below).
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download when the size is under 100KB
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result shows the exact compressed file size in KB before you download. Once you
                see the size is at or below your target, click Download. The file saves directly to
                your device with a &quot;compressed-&quot; prefix, keeping it separate from your
                original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Compress Phone Photo to 100KB — iPhone &amp; Android
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The most common source of images that need to reach 100KB is a smartphone camera. Modern
          phones shoot at 12–48 megapixels, producing photos that are 3–8MB each. This tool handles
          both major phone formats directly — no separate conversion step needed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">iPhone (HEIC format)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              iPhones save photos as HEIC by default — a highly efficient format that still produces
              2–5MB files at 4032×3024px. This tool accepts HEIC directly and converts it to JPG
              during compression. For most iPhone photos, quality 55–65 after resizing to 1280px
              wide outputs 40–90KB.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Android (JPG / WebP)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Android phones save in JPG or WebP. Camera files at 12MP are typically 3–6MB at
              4000×3000px. Set quality to 60–70 to reach 100KB on most Android photos. If still over
              100KB at quality 60, resize to 1280px wide first using the{' '}
              <Link href="/resize-image" className="text-primary underline">
                Resize Image tool
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Phone Camera</th>
                <th className="text-left p-3 font-semibold text-text-main">Typical Size</th>
                <th className="text-left p-3 font-semibold text-text-main">Resolution</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality for 100KB</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: 'iPhone (12MP HEIC)',
                  size: '2–4MB',
                  res: '4032×3024px',
                  q: 'Resize to 1280px + Q60',
                },
                {
                  type: 'iPhone (48MP HEIC)',
                  size: '15–30MB',
                  res: '8064×6048px',
                  q: 'Resize to 1000px + Q55',
                },
                {
                  type: 'Android flagship (12MP)',
                  size: '3–6MB',
                  res: '4000×3000px',
                  q: 'Resize to 1280px + Q65',
                },
                {
                  type: 'Budget Android (8MP)',
                  size: '1–3MB',
                  res: '3264×2448px',
                  q: 'Resize to 1280px + Q70',
                },
                {
                  type: 'Selfie camera (5–12MP)',
                  size: '500KB–2MB',
                  res: '1600–4000px',
                  q: 'Q60–70 (no resize needed)',
                },
              ].map(({ type, size, res, q }) => (
                <tr
                  key={type}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{type}</td>
                  <td className="p-3 text-text-muted text-xs">{size}</td>
                  <td className="p-3 text-text-muted text-xs">{res}</td>
                  <td className="p-3 text-text-muted text-xs">{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">Tip for ID and form photos taken on phone:</strong> If
          the form specifies both file size (e.g., under 100KB) and pixel dimensions (e.g.,
          600×600px), use the{' '}
          <Link href="/resize-image" className="text-primary underline">
            Resize Image tool
          </Link>{' '}
          to set exact dimensions first, then compress here.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Compress Photo to 100KB — Expected Output Size
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The output size depends on two things: your image dimensions and the quality setting. Use
          this table as a starting point when you need to compress a photo to 100KB or less. Values
          are approximate and vary with image content — photos with lots of detail compress less
          than simple backgrounds.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Resolution</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality 80</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality 70</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality 60</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality 50</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  res: '4000×3000 (12MP phone)',
                  q80: '800–2000 KB',
                  q70: '500–1200 KB',
                  q60: '300–700 KB',
                  q50: '180–400 KB',
                  note: 'Resize first',
                },
                {
                  res: '2000×1500 (5MP)',
                  q80: '250–600 KB',
                  q70: '150–350 KB',
                  q60: '90–200 KB',
                  q50: '55–120 KB',
                  note: 'Q60 borderline',
                },
                {
                  res: '1280×960 (1.2MP)',
                  q80: '100–250 KB',
                  q70: '60–150 KB',
                  q60: '40–100 KB',
                  q50: '25–65 KB',
                  note: '✅ Q70 hits 100KB',
                },
                {
                  res: '1000×750',
                  q80: '60–150 KB',
                  q70: '40–90 KB',
                  q60: '25–60 KB',
                  q50: '15–40 KB',
                  note: '✅ Q80 usually hits 100KB',
                },
                {
                  res: '800×600',
                  q80: '35–90 KB',
                  q70: '22–55 KB',
                  q60: '15–35 KB',
                  q50: '10–22 KB',
                  note: '✅ Always under 100KB',
                },
              ].map(({ res, q80, q70, q60, q50 }) => (
                <tr
                  key={res}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{res}</td>
                  <td className="p-3 text-text-muted text-xs">{q80}</td>
                  <td className="p-3 text-text-muted text-xs">{q70}</td>
                  <td className="p-3 text-text-muted text-xs">{q60}</td>
                  <td className="p-3 text-text-muted text-xs">{q50}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">Rule of thumb:</strong> If your photo is taken with a
          modern smartphone (12MP+), resize it to 1280×960px first using the{' '}
          <Link href="/resize-image" className="text-primary underline">
            Resize Image tool
          </Link>
          , then compress at quality 70. This two-step process reliably gets most photos under 100KB
          while keeping the image sharp enough for form submissions, ID photos, and profile
          pictures.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Make Photo Size Less Than 100KB</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          &quot;Make photo size less than 100KB&quot; is one of the most common image tasks for job
          applications, school portals, and government forms — and it is easier than most people
          think. Here is the fastest method:
        </p>
        <div className="space-y-2">
          {[
            {
              label: 'Step 1 — Check the original size',
              desc: 'If your photo is already under 1280px wide (e.g., a screenshot or downloaded image), you can skip resizing. Go straight to compression at quality 70.',
            },
            {
              label: 'Step 2 — Resize if over 2MP',
              desc: 'Smartphone photos are usually 3000–4000px wide. Resize to 1000–1280px wide first. This single step takes most 3–8MB photos to 200–500KB, making the 100KB target easy to hit with quality compression.',
            },
            {
              label: 'Step 3 — Compress at quality 60–70',
              desc: 'Upload the (resized) photo here and set quality to 70. Check the output size. If over 100KB, lower to 60. The result shows the exact compressed size before you download — no guessing.',
            },
            {
              label: 'Step 4 — Download and submit',
              desc: 'Download the compressed photo. The dimensions are unchanged (only file size is reduced), so a 1280×960px photo submitted to a form will display correctly at any size the platform uses.',
            },
          ].map(({ label, desc }) => (
            <div key={label} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{label}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why 100KB? Common File Size Requirements
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 100KB limit appears across a surprisingly wide range of platforms and applications.
          Understanding why the limit exists helps you choose the best compression approach for each
          use case:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Government & Visa Applications</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Passport photos, ID documents, and visa applications typically require 20–100KB.
              Government portals often reject files that exceed the limit with no clear error
              message. Quality 60–70 usually hits this range for standard photo IDs.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Job Application Portals</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Many HR systems and ATS platforms cap profile photos and document scans at 100–200KB.
              A compressed headshot at quality 70 typically lands at 30–80KB while remaining clear
              enough for professional use.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">University & School Admissions</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Student ID photos and admission form uploads frequently require images under 100KB or
              even 50KB. The image only needs to identify the person at form-review size — quality
              60 is sufficient.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Email Attachments & Messaging</p>
            <p className="text-xs text-text-muted leading-relaxed">
              While most email services allow up to 25MB, slow mobile connections and crowded
              inboxes benefit from smaller images. WhatsApp and Telegram also compress images
              automatically — starting small preserves more quality after their re-compression.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Social Media Profile Photos</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Platforms like LinkedIn, Twitter, and Facebook accept larger uploads but display
              profile photos at small sizes (40–200px). A 100KB image at those display sizes is
              visually identical to a 2MB original.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Website & CMS Uploads</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Shared hosting plans and CMS platforms like WordPress often slow significantly with
              large unoptimized images. Blog thumbnails and sidebar images under 100KB load
              instantly even on 3G mobile connections.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Compress Image to 100KB for Online Form Submissions
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Online portals that enforce a 100KB file size limit typically do so for performance and
          storage reasons. The table below shows typical requirements by form type — always check
          the specific portal&apos;s upload instructions before compressing, as requirements vary by
          country and platform.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Form Type</th>
                <th className="text-left p-3 font-semibold text-text-main">Typical Size Limit</th>
                <th className="text-left p-3 font-semibold text-text-main">Common Dimensions</th>
                <th className="text-left p-3 font-semibold text-text-main">Format</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: 'Government ID / Visa photo',
                  size: '10–100KB',
                  dims: '200×200 to 600×600px',
                  fmt: 'JPG',
                },
                {
                  type: 'Job application / HR portal',
                  size: '50–200KB',
                  dims: '300×300 to 600×600px',
                  fmt: 'JPG, PNG',
                },
                {
                  type: 'University admission form',
                  size: '20–100KB',
                  dims: '200×200 to 400×400px',
                  fmt: 'JPG',
                },
                {
                  type: 'Exam / test registration',
                  size: '10–50KB',
                  dims: '100×120 to 200×230px',
                  fmt: 'JPG',
                },
                {
                  type: 'Bank / KYC document photo',
                  size: '50–200KB',
                  dims: 'Any',
                  fmt: 'JPG',
                },
                {
                  type: 'Social media profile photo',
                  size: 'No hard limit',
                  dims: '400×400 to 1000×1000px',
                  fmt: 'JPG, PNG',
                },
              ].map(({ type, size, dims, fmt }) => (
                <tr
                  key={type}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{type}</td>
                  <td className="p-3 text-text-muted text-xs">{size}</td>
                  <td className="p-3 text-text-muted text-xs">{dims}</td>
                  <td className="p-3 text-text-muted text-xs">{fmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2">
          {[
            {
              step: 'Check the portal requirements first',
              desc: 'Note both the file size limit (e.g., under 100KB) and dimension requirements (e.g., 600×600px). Some portals also specify format (JPG only) and minimum dimensions.',
            },
            {
              step: 'Resize to exact dimensions if specified',
              desc: 'If the form lists a pixel size, use the Resize Image tool to set exact dimensions. Compressing an image already at the right size ensures you meet both requirements in one step.',
            },
            {
              step: 'Compress at quality 60–70',
              desc: 'For most form photos at 600×600px, quality 65 produces 30–70KB — safely under 100KB. Check the compressed size shown in the result. If still over 100KB, reduce quality to 50–55.',
            },
          ].map(({ step, desc }) => (
            <div key={step} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{step}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Quality Settings Guide: How to Hit Under 100KB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The quality setting is the primary lever for hitting a specific file size target. Here is
          what to expect at different quality levels for a typical 1280×960px photograph:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 80 (Default)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~150–400KB for a typical photo. Excellent visual quality, no visible
              artifacts. Good starting point — if this already hits 100KB, you are done. If not,
              lower to 60.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 60–70</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~60–150KB for a typical 1280px photo. Minor artifacts only visible at full
              zoom on complex textures. Ideal for profile photos, form submissions, and thumbnails.
              Best starting point for a 100KB target.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 40–55</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~30–80KB for a typical photo. Visible compression artifacts at full zoom but
              acceptable at display sizes. Use for very large original images where lower quality
              settings do not reach the target.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 20–39</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~10–40KB. Heavy compression artifacts. Reserve for non-critical thumbnails,
              temporary placeholders, or situations where the 100KB target cannot be reached any
              other way.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What If the Image Is Still Over 100KB After Compression?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          If you have set quality to 60 or lower and the output is still over 100KB, the image
          dimensions are likely too large. A 4000×3000px photo contains 12 million pixels — even
          heavily compressed, this can produce a file well over 100KB. The most effective solution
          is to resize the image dimensions first, then compress:
        </p>
        <ol className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">1.</span>
            <span>
              Open our{' '}
              <Link href="/resize-image" className="text-primary underline">
                Resize Image tool
              </Link>{' '}
              and reduce your image to 1000×750px or smaller. This alone reduces a 5MB smartphone
              photo to under 500KB for most images.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">2.</span>
            <span>
              Download the resized image, then upload it to this compression tool. At 1000px wide,
              quality 70 typically produces a 40–80KB output — well under 100KB.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">3.</span>
            <span>
              For identity photos (passport, ID, visa), check the exact dimension requirements
              first. Many platforms specify both file size AND pixel dimensions (e.g., 600×600px at
              under 100KB). Use the Resize tool to set exact dimensions, then compress here.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">4.</span>
            <span>
              If the image is a PNG with transparency, consider{' '}
              <Link href="/convert-image" className="text-primary underline">
                converting it to JPG
              </Link>{' '}
              first (if transparency is not required). JPG compression is much more aggressive than
              PNG and can make it easier to hit a 100KB target.
            </span>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Which Image Formats Are Easiest to Compress to 100KB?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Not all image formats compress equally. Understanding format behavior helps you choose the
          right approach:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG — Easiest to Hit 100KB</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              JPG uses aggressive lossy compression. A 3MB JPG photo at quality 60 typically
              compresses to 50–120KB at 1280px wide — often hitting 100KB in a single step. Best
              choice for photographs, ID photos, and most form submissions.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Harder, Needs Resizing</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG uses lossless compression, so quality settings have less impact than on JPG. Large
              PNGs often need dimension reduction before they can reach 100KB. For photos saved as
              PNG, converting to JPG first is the most effective path to 100KB.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">WebP — Smallest Output</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              WebP typically produces files 25–35% smaller than JPG at the same quality. If the
              platform accepts WebP, compressing to this format is the best way to hit under 100KB
              while retaining the highest possible visual quality.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This image compressor runs entirely in your browser. When you upload an image, it is
          loaded into browser memory and processed using JavaScript — no data is ever transmitted to
          a server. For sensitive documents like passport photos, government ID images, and personal
          photographs, this means your files are never stored, analyzed, or shared with any third
          party. Close the browser tab and the image data is permanently gone.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For more details on data handling and advertising, see our{' '}
          <Link href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="text-primary underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/resize-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Resize Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce dimensions before compression to hit smaller file size targets.
            </p>
          </Link>
          <Link
            href="/compress-image-to-200kb"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress to 200KB
            </p>
            <p className="text-xs text-text-muted mt-1">
              Looser target — more quality retained for visa and form portals.
            </p>
          </Link>
          <Link
            href="/compress-image-to-50kb"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress to 50KB
            </p>
            <p className="text-xs text-text-muted mt-1">
              Hit a strict 50KB limit for government portals and exam registration forms.
            </p>
          </Link>
        </div>
      </div>

      <CompressTo100KbFAQSection />
    </section>
  )
}

function CompressTo100KbFAQSection() {
  const faqs = [
    {
      q: 'Can I compress any image to exactly 100KB?',
      a: 'You can compress most photos to under 100KB by adjusting the quality slider and, if needed, resizing the image dimensions first. The tool shows the exact output file size before you download, so you can adjust and re-compress until you hit the target. Very large images (4000px+) may need resizing to 1000–1280px wide first before quality compression can reach 100KB.',
    },
    {
      q: 'What quality setting should I use to compress to 100KB?',
      a: 'For a typical 1280px wide photo, quality 60–70 usually produces an output of 40–120KB. Start at quality 70 and check the result size. If still over 100KB, try 50–60. If a 4000px photo still exceeds 100KB at quality 60, resize the dimensions to 1280px first using the Resize Image tool, then compress.',
    },
    {
      q: 'My image is still over 100KB after compression — what do I do?',
      a: 'The most effective fix is to reduce the image dimensions before compressing. A 4000×3000px image has 12 million pixels — even at quality 40, this can exceed 100KB. Use the Resize Image tool to bring the image to 1000–1280px wide, then compress at quality 60–70. This two-step process can bring a 5MB photo down to 50–80KB.',
    },
    {
      q: 'Will my image look bad at under 100KB?',
      a: 'For most use cases — ID photos, form submissions, thumbnails, profile pictures — quality 60–70 at 1280px produces a visually acceptable result when viewed at normal screen sizes. At full zoom, fine textures may show minor compression artifacts, but for identification and form submission purposes, the image quality is sufficient.',
    },
    {
      q: 'What image formats can be compressed to 100KB?',
      a: 'JPG, PNG, and WebP are all supported. JPG is the easiest format to compress to 100KB because its lossy algorithm is highly aggressive — a quality 60 JPG at 1280px typically lands at 50–120KB. PNG is harder because it uses lossless compression; large PNGs often need dimension reduction or conversion to JPG before reaching 100KB.',
    },
    {
      q: 'How do I compress a 5MB photo to under 100KB?',
      a: 'A two-step process works best. First, resize the image to 1000–1280px wide using the Resize Image tool — this alone typically takes a 5MB photo to 300–600KB. Then upload the resized image to this compression tool and set quality to 60–70. The result is usually 50–100KB. For very strict limits (under 50KB), try quality 40–50.',
    },
    {
      q: 'Do my files get uploaded to a server when I compress to 100KB?',
      a: 'No. All compression happens in your browser using JavaScript. Your files never leave your device and are never uploaded to any server. This is especially important for sensitive documents like passport photos, government IDs, and personal documents that commonly need to be compressed to 100KB.',
    },
    {
      q: 'Is there a file size limit for images I can compress?',
      a: 'Yes — files up to 20MB are accepted. If your original file is larger than 20MB (common with high-resolution DSLR RAW exports or very large scans), consider resizing the dimensions first to bring the file under 20MB before uploading.',
    },
    {
      q: 'How do I compress a photo to 100KB for WhatsApp?',
      a: 'WhatsApp compresses images automatically when sent, but some forms and profile pictures require a specific file under 100KB. To compress a photo to 100KB for WhatsApp: upload your photo here, set quality to 70, and check the output size. If still over 100KB, lower quality to 55–60 or resize the photo to 800px wide first. WhatsApp profile photos display at 300×300px, so a 800px wide JPG at quality 70 will land at 30–60KB.',
    },
    {
      q: 'How do I make a photo size less than 100KB?',
      a: 'To make a photo less than 100KB: (1) Upload the photo and try quality 70 first — this reduces most phone photos to 50–150KB. (2) If still over 100KB, lower quality to 55–60. (3) If quality compression alone is not enough, the photo dimensions are too large — resize to 1000–1280px wide first using the Resize Image tool, then compress at quality 70. A 3000px wide photo at quality 60 is still 200–400KB; the same photo at 1000px wide at quality 70 is 30–80KB.',
    },
    {
      q: 'How to reduce image size below 100KB?',
      a: 'Reducing an image below 100KB requires either quality reduction, dimension reduction, or both. Start with quality 70 and check the output size. If still over 100KB at quality 60, the image dimensions are likely too large. Use the Resize Image tool to bring the width to 1000–1280px, then compress at quality 60–70. For very strict limits (under 50KB), resize to 800px and use quality 50–55.',
    },
    {
      q: 'Can I compress an image to under 100KB for free?',
      a: 'Yes — this tool compresses images to under 100KB completely free with no sign-up, no watermark, and no daily limit. All compression runs in your browser — your image is never uploaded to any server. Adjust the quality slider down until the output size shown in the result is under 100KB, then download.',
    },
    {
      q: 'How do I compress an image to 100KB on a mobile phone?',
      a: 'This tool works on iPhone and Android. Open the page in Safari, Chrome, or any mobile browser. Tap the upload area and select a photo from your camera roll. Adjust the quality slider down to 60–70 and tap to compress. The result shows the exact output size — if over 100KB, lower the quality and compress again. Download the compressed image directly to your phone.',
    },
    {
      q: 'How do I compress an iPhone photo (HEIC) to 100KB?',
      a: 'iPhones save photos as HEIC format by default. This tool accepts HEIC directly — just upload the photo and it will be automatically converted to JPG during compression. iPhone 12MP photos at 4032×3024px are typically 2–4MB. To reach 100KB, use the Resize Image tool to bring the width to 1280px, then compress at quality 60. iPhone 48MP photos need resizing to 1000px or smaller first.',
    },
    {
      q: 'How do I compress a photo to 100KB for a government form or visa application?',
      a: 'Government forms and visa portals typically require photos under 100KB, often at specific dimensions (e.g., 600×600px). The best approach: (1) Use the Resize Image tool to set the exact pixel dimensions required by the form. (2) Upload the resized photo here and compress at quality 65. (3) Check the output size — if still over 100KB, lower to quality 50–55. A 600×600px JPG at quality 65 is typically 30–70KB.',
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
      <dl className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </dl>
    </div>
  )
}
