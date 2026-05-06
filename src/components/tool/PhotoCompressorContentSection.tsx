import Link from 'next/link'
import FAQItem from './FAQItem'

export default function PhotoCompressorContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing photos"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a Photo Compressor?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A photo compressor reduces the file size of digital photos — JPG, PNG, or WebP — without
          changing the pixel dimensions. Modern smartphone cameras produce photos of 3–8MB each. For
          sharing, uploading to forms, or posting on websites, these files are far larger than
          necessary. A photo compressor applies lossy compression to reduce the file size by 60–90%
          while keeping the image visually sharp at normal viewing sizes.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool runs entirely in your browser — no server upload, no account required. Your
          photos never leave your device. Adjust the quality slider to control the output size, then
          download the compressed photo instantly.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress a Photo Online — 3 Steps
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Upload your photo',
              desc: 'Click the upload area, drag and drop, or paste from clipboard (Ctrl+V). Accepts JPG, PNG, WebP, and HEIC (iPhone photos). Files up to 20MB are supported.',
            },
            {
              n: '2',
              title: 'Set the quality slider',
              desc: 'Default quality 80 compresses most photos by 60–70% with no visible loss. For a smaller file (under 200KB), try quality 60–70. The result card shows the exact compressed size before you download.',
            },
            {
              n: '3',
              title: 'Download the compressed photo',
              desc: 'Click Download. The compressed photo saves directly to your device with a "compressed-" prefix. Your original photo is unchanged.',
            },
          ].map(({ n, title, desc }) => (
            <li key={n} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {n}
              </span>
              <div>
                <p className="text-sm font-semibold text-text-main">{title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Photo Compressor Results by Camera Type
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Output size depends on the original photo dimensions and quality setting. Use this table
          to estimate results for your camera type before compressing.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Camera / Source</th>
                <th className="text-left p-3 font-semibold text-text-main">Original</th>
                <th className="text-left p-3 font-semibold text-text-main">Q80 output</th>
                <th className="text-left p-3 font-semibold text-text-main">Q60 output</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cam: 'iPhone 15 (48MP HEIC)', orig: '15–30MB', q80: '1–3MB', q60: '400KB–1MB' },
                {
                  cam: 'iPhone 12/13 (12MP HEIC)',
                  orig: '3–5MB',
                  q80: '250–600KB',
                  q60: '100–280KB',
                },
                {
                  cam: 'Android flagship (12MP)',
                  orig: '3–6MB',
                  q80: '250–700KB',
                  q60: '100–300KB',
                },
                { cam: 'Budget Android (8MP)', orig: '1–3MB', q80: '90–350KB', q60: '40–150KB' },
                {
                  cam: 'DSLR / Mirrorless (24MP)',
                  orig: '8–25MB',
                  q80: '600KB–2MB',
                  q60: '250KB–800KB',
                },
                {
                  cam: 'Screenshot / web image',
                  orig: '100KB–2MB',
                  q80: '30–400KB',
                  q60: '15–180KB',
                },
              ].map(({ cam, orig, q80, q60 }) => (
                <tr
                  key={cam}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{cam}</td>
                  <td className="p-3 text-text-muted text-xs">{orig}</td>
                  <td className="p-3 text-text-muted text-xs">{q80}</td>
                  <td className="p-3 text-text-muted text-xs">{q60}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">Note for high-resolution cameras (48MP, DSLR):</strong>{' '}
          Quality compression alone may not reach small targets (under 200KB). Use the{' '}
          <Link href="/resize-image" className="text-primary underline">
            Resize Image tool
          </Link>{' '}
          to reduce dimensions to 1280–2000px wide first, then compress here.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Compress Photos for Social Media — Best Settings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Instagram',
              desc: 'Instagram recompresses all uploads. Pre-compress to 500KB–1MB at quality 80 before uploading — this reduces double-compression artifacts and keeps colors accurate. Recommended dimensions: 1080×1080px (post) or 1080×1920px (story).',
            },
            {
              title: 'Facebook',
              desc: 'Facebook applies heavy compression to photos over 1MB. Compress to 500KB–800KB at quality 80 before uploading for the sharpest result. Profile photos display at 170×170px — a 400KB original is more than sufficient.',
            },
            {
              title: 'Twitter / X',
              desc: "Twitter accepts JPG, PNG, WebP, and GIF up to 5MB. Pre-compress photos to 300–700KB to speed up upload and reduce Twitter's second compression pass. Timeline images display at 600px wide.",
            },
            {
              title: 'WhatsApp',
              desc: 'WhatsApp compresses all photos on send. Starting with a pre-compressed 300–500KB photo reduces total data usage and speeds up delivery. Profile photos are displayed at 300×300px — a 200KB compressed photo is visually identical to a 5MB original.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl border border-border p-4 space-y-1">
              <p className="font-semibold text-text-main text-sm">{title}</p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Compress Photos for Official Forms &amp; Document Uploads
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Government portals, university admissions, job applications, and visa forms frequently
          require photos under a specific file size — most commonly 100KB, 200KB, or 500KB. The
          fastest approach:
        </p>
        <div className="space-y-2">
          {[
            {
              step: 'Check the exact requirements',
              desc: 'Note the file size limit (e.g., under 100KB) and any dimension requirements (e.g., 600×600px). Some portals also specify format (JPG only) and color mode (color or greyscale).',
            },
            {
              step: 'Resize dimensions if specified',
              desc: 'If the form requires exact pixel dimensions, use the Resize Image tool first. Then upload the resized photo here for compression.',
            },
            {
              step: 'Compress at quality 60–70',
              desc: 'For most ID and form photos, quality 65 at 600×600px outputs 30–70KB — well under the 100KB limit. Check the result size before downloading.',
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
          Lossless vs Lossy Photo Compression — Which to Use?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <p className="font-semibold text-text-main text-sm">Lossy compression (this tool)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Permanently removes some image data to achieve much smaller file sizes. At quality
              75–85, the loss is invisible on screen. Best for photos that will be viewed at normal
              sizes — web, social media, email, form uploads. Reduces file size by 60–90%.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <p className="font-semibold text-text-main text-sm">Lossless compression (PNG)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Preserves every pixel exactly. Used for logos, graphics, and screenshots where sharp
              edges and exact colors matter. File size reduction is 10–30% at best. Not suitable for
              hitting small file size targets (under 200KB) on photographs.
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For photographs — holiday photos, portraits, product shots — lossy compression at quality
          80 is always the better choice. Lossless compression is for graphics, not photos.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Photos Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All compression runs locally in your browser using JavaScript. Your photos are never
          uploaded to any server, never stored, and never analyzed. This makes the tool safe for
          sensitive documents — passport photos, ID images, personal portraits — that you would not
          want stored on a third-party server.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              href: '/compress-image-to-100kb',
              label: 'Compress to 100KB',
              desc: 'Hit exact size targets for forms',
            },
            { href: '/resize-image', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/compress-jpg-online', label: 'Compress JPG', desc: 'Reduce JPG file size' },
            { href: '/heic-to-jpg', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <PhotoCompressorFAQSection />
    </section>
  )
}

function PhotoCompressorFAQSection() {
  const faqs = [
    {
      q: 'How do I compress a photo online for free?',
      a: 'Upload your photo, set quality to 80, and download the compressed result — all free, no sign-up required. Quality 80 reduces most photos by 60–70% with no visible quality loss. Lower to 60 for a smaller file. Works on JPG, PNG, WebP, and HEIC (iPhone).',
    },
    {
      q: 'How do I compress a photo without losing quality?',
      a: 'Set quality to 75–85. At quality 80, photo compression is virtually invisible on screen — edges stay sharp and colors stay accurate. Quality loss only becomes noticeable at full zoom below quality 60 on detailed textures.',
    },
    {
      q: 'How do I compress a photo to under 100KB?',
      a: 'Start at quality 70 and check the output size in the result. If still over 100KB, lower to 60. For large phone photos (3000px+), resize to 1280px wide first using the Resize Image tool, then compress at quality 65. Most photos reach under 100KB with this method.',
    },
    {
      q: 'Can I compress iPhone photos (HEIC) online?',
      a: 'Yes. This tool accepts HEIC files directly. Upload your iPhone photo and it is automatically converted to JPG during compression. iPhone 12MP photos need resizing to 1280px and quality 60–65 to reach under 100KB.',
    },
    {
      q: 'Does compressing a photo reduce its dimensions?',
      a: 'No. This photo compressor reduces file size through quality compression — the pixel dimensions (width × height) stay the same. A 4032×3024px photo is still 4032×3024px after compression, just smaller in file size.',
    },
    {
      q: 'How do I compress a photo on Android?',
      a: 'Open this page in Chrome on your Android phone, tap the upload area, select a photo from your gallery, adjust the quality slider, and tap to compress. Download the compressed photo directly to your device. No app installation required.',
    },
    {
      q: 'What is the best quality setting for photo compression?',
      a: 'Quality 75–85 is the sweet spot for most uses. At quality 80, photos are 60–70% smaller with no visible loss. For form uploads and small file size targets, quality 60–70 works well. Below quality 50, visible compression artifacts appear on detailed photos.',
    },
    {
      q: 'Are my photos uploaded to a server when I use this tool?',
      a: 'No. All photo compression happens in your browser using JavaScript. Your photos never leave your device and are never uploaded, stored, or shared with any server. Safe for passport photos, ID images, and any sensitive personal photos.',
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
