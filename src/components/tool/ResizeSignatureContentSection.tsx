import Link from 'next/link'

export default function ResizeSignatureContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Signature Size Matters for Government Exam Forms
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Government exam portals (SSC, UPSC, IBPS, Railway) have strict upload validators that
          reject signature images outside the specified pixel dimensions or file size. A signature
          that is 141×60px instead of 140×60px will fail validation. Getting the exact dimensions
          right on the first try saves you from re-scanning or re-photographing your signature.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool resizes your signature image to any pixel dimension you enter — and keeps the
          file in your browser with no server upload. After resizing to the correct dimensions, use
          the{' '}
          <Link href="/resize-image-in-kb" className="text-primary hover:underline">
            Resize Image in KB
          </Link>{' '}
          tool if the portal also requires a specific file size limit (e.g., under 20KB).
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Signature Size Requirements by Exam Portal
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Exam / Portal</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Signature dimensions
                </th>
                <th className="text-left p-3 border border-border font-semibold">Max file size</th>
                <th className="text-left p-3 border border-border font-semibold">Format</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  exam: 'SSC CGL / CHSL / MTS',
                  dims: '140×60 px',
                  size: '10–20 KB',
                  fmt: 'JPEG',
                },
                { exam: 'UPSC Civil Services', dims: '300×100 px', size: '20 KB', fmt: 'JPEG' },
                {
                  exam: 'IBPS PO / Clerk / SO',
                  dims: '800×300 px',
                  size: '50 KB',
                  fmt: 'JPEG',
                },
                { exam: 'RRB NTPC / Group D', dims: '140×60 px', size: '20 KB', fmt: 'JPEG' },
                { exam: 'SBI PO / Clerk', dims: '800×300 px', size: '50 KB', fmt: 'JPEG' },
                { exam: 'NDA / CDS (UPSC)', dims: '300×100 px', size: '20 KB', fmt: 'JPEG' },
                { exam: 'GATE / JAM (IIT)', dims: '160×100 px', size: '30 KB', fmt: 'JPEG' },
                { exam: 'NEET / JEE (NTA)', dims: '160×100 px', size: '30 KB', fmt: 'JPEG' },
              ].map(({ exam, dims, size, fmt }, i) => (
                <tr key={exam} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{exam}</td>
                  <td className="p-3 border border-border text-text-muted">{dims}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{fmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-xs">
          Requirements change per notification cycle — always verify against the official exam
          advertisement before uploading.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Signature Upload Problems</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Signature rejected — wrong dimensions',
              desc: 'The portal checks exact pixel dimensions. Even 1px over the limit triggers a rejection. Use this tool to set the exact width and height required — disable the aspect ratio lock to enter them independently.',
            },
            {
              title: 'Signature too large in KB',
              desc: 'Resizing to smaller pixel dimensions reduces file size significantly. If it is still over the KB limit after resizing, use the Resize Image in KB tool to compress it to exactly 10KB or 20KB.',
            },
            {
              title: 'Signature looks blurry after resize',
              desc: 'Blurriness happens when upscaling a small signature image to large dimensions. Always start with the highest-resolution scan or photo of your signature. Downscaling preserves quality; upscaling loses it.',
            },
            {
              title: 'Wrong format — portal needs JPEG',
              desc: 'If your signature is saved as PNG, the output after resizing here stays PNG. To convert to JPEG, use the PNG to JPG tool first, then re-upload and resize to the required dimensions.',
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
            <Link href="/resize-image-in-kb" className="text-primary hover:underline">
              Resize Image in KB
            </Link>{' '}
            — reduce signature file size to exactly 10KB or 20KB
          </li>
          <li>
            <Link href="/resize-image-for-online-form" className="text-primary hover:underline">
              Resize Image for Online Form
            </Link>{' '}
            — resize photo for government application portals
          </li>
          <li>
            <Link href="/compress-jpg-online" className="text-primary hover:underline">
              Compress JPG Online
            </Link>{' '}
            — reduce JPEG file size without changing dimensions
          </li>
          <li>
            <Link href="/png-to-jpg" className="text-primary hover:underline">
              PNG to JPG
            </Link>{' '}
            — convert PNG signature to JPEG format
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image
            </Link>{' '}
            — resize any image to custom pixel dimensions
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What size should my signature be for SSC CGL?',
              a: 'SSC CGL requires the signature image to be 140×60 pixels in JPEG format with a file size under 20KB. Enter 140 as width and 60 as height in this tool, disable the aspect ratio lock, click Resize Image, then download. If the output exceeds 20KB, use the Resize Image in KB tool to reduce it.',
            },
            {
              q: 'What are the UPSC signature dimensions?',
              a: 'UPSC Civil Services requires the signature to be 300×100 pixels in JPEG format with a maximum file size of 20KB. Set width to 300 and height to 100 (disable aspect lock), resize, and check the output size. Use Resize Image in KB if the file needs further reduction.',
            },
            {
              q: 'How do I resize a signature for IBPS PO or Clerk?',
              a: 'IBPS requires the signature at 800×300 pixels in JPEG format with a file size between 10KB and 50KB. This is wider than most portals — set width 800, height 300 with aspect lock disabled, and resize. The output will typically be well within the 50KB limit at this size.',
            },
            {
              q: 'Can I resize both photo and signature with this tool?',
              a: 'Yes. This tool resizes any image including both passport photos and signature images. For photo requirements, check the specific dimensions for your exam (e.g., SSC photo is 100×120px, UPSC photo is 300×400px). Process each image separately.',
            },
            {
              q: 'Does resizing the signature change its quality?',
              a: 'Downscaling (making smaller) preserves visual quality well. If you start with a clear, high-resolution scan of your signature, the resized output will remain legible. Avoid upscaling a small or low-resolution image — it will appear blurry.',
            },
            {
              q: 'Is my signature image uploaded to a server?',
              a: 'No. All resizing happens entirely in your browser using the Canvas API. Your signature file is never sent to any server — it stays on your device throughout the process.',
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
