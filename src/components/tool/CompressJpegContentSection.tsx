import Link from 'next/link'
import FAQItem from './FAQItem'

export default function CompressJpegContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to JPEG compression"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is JPEG? JPG vs JPEG Explained</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPEG (Joint Photographic Experts Group) is the most widely used image format in the world,
          designed specifically for photographs with complex colors and smooth gradients. JPG and
          JPEG refer to the exact same format — the difference is purely in the file extension.
          Early versions of Windows only supported 3-character file extensions, so .jpeg was
          shortened to .jpg. Both extensions open the same way in every application.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          JPEG uses lossy compression, meaning it permanently discards some image data to achieve
          smaller file sizes. The quality setting (1–100) controls how much data is discarded. At
          quality 80, most JPEG files are 60–70% smaller than uncompressed with no perceptible
          visual difference on screen.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Compress JPEG Online — 3 Steps</h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Upload your JPEG file',
              desc: 'Click the upload area, drag and drop your .jpg or .jpeg file, or paste from clipboard (Ctrl+V). Files up to 20MB accepted. Your image never leaves your device.',
            },
            {
              n: '2',
              title: 'Adjust the quality slider',
              desc: 'Start at quality 80 — this reduces most JPEGs by 60–70% with no visible loss. Lower to 60–70 for a smaller output. The compressed size is shown in the result before you download.',
            },
            {
              n: '3',
              title: 'Download your compressed JPEG',
              desc: 'Click Download. The compressed JPEG saves with a "compressed-" prefix. Your original file is unchanged.',
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
        <h2 className="text-xl font-bold text-text-main">JPEG Compression Quality Guide</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The quality setting is the primary control for JPEG file size. Here is what to expect at
          different quality levels for a typical 1920×1080px photograph:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Quality</th>
                <th className="text-left p-3 font-semibold text-text-main">Size reduction</th>
                <th className="text-left p-3 font-semibold text-text-main">Visual quality</th>
                <th className="text-left p-3 font-semibold text-text-main">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  q: '90–100',
                  red: '20–40%',
                  vis: 'Lossless to the eye',
                  use: 'Print, archiving, professional editing',
                },
                {
                  q: '75–89',
                  red: '50–70%',
                  vis: 'No visible loss on screen',
                  use: 'Web, blog images, product photos',
                },
                {
                  q: '60–74',
                  red: '70–80%',
                  vis: 'Minor artifacts at full zoom',
                  use: 'Thumbnails, social media, form uploads',
                },
                {
                  q: '40–59',
                  red: '80–90%',
                  vis: 'Visible artifacts on complex images',
                  use: 'Strict size targets under 100KB',
                },
                {
                  q: 'Below 40',
                  red: '90%+',
                  vis: 'Heavy blockiness, blurring',
                  use: 'Placeholder images only',
                },
              ].map(({ q, red, vis, use }) => (
                <tr
                  key={q}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-semibold text-text-main text-xs">{q}</td>
                  <td className="p-3 text-text-muted text-xs">{red}</td>
                  <td className="p-3 text-text-muted text-xs">{vis}</td>
                  <td className="p-3 text-text-muted text-xs">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How JPEG Compression Affects Image Quality
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPEG compression works by dividing the image into 8×8 pixel blocks and applying a
          mathematical transform (Discrete Cosine Transform) to identify which details the human eye
          is least sensitive to. These fine details are discarded first — sharp edges and large flat
          areas are preserved, while fine textures and subtle gradients are approximated.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'What gets lost first',
              desc: 'Fine hair and fur detail, subtle skin texture, very fine fabric patterns, and low-contrast gradients in sky and water. At quality 80, these losses are below the threshold of human perception at normal viewing distance.',
            },
            {
              title: 'What is preserved well',
              desc: 'High-contrast edges (buildings, text, faces), strong color differences, and large uniform areas compress with minimal quality loss even at quality 60. Architecture and product shots tolerate more compression than portraits.',
            },
            {
              title: 'Compression artifacts',
              desc: 'At quality below 60, JPEG compression introduces visible "blockiness" around high-contrast edges — called ringing artifacts. These are most visible around text on photos, hard edges in screenshots, and areas with sudden color changes.',
            },
            {
              title: 'Re-compression warning',
              desc: 'Each time a JPEG is re-compressed, the artifacts compound. Always compress from the original file, not from a previously compressed version. Our tool processes the file you upload — keep your original safe and compress a copy.',
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
        <h2 className="text-xl font-bold text-text-main">Compress JPEG for Specific Platforms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Website & WordPress',
              desc: "For blog images and content photos: quality 75–80. For hero images displayed at full width: quality 80–85. Target: 100–400KB for images under 1920px wide. WordPress's built-in compression defaults to quality 82 — compress to 80 before upload for consistent results.",
            },
            {
              title: 'Email attachments',
              desc: 'Compress to 200–500KB at quality 80 for email-friendly photos. This ensures fast delivery and avoids triggering attachment size limits. For bulk email campaigns, compress to 100–200KB for optimal load time in email clients.',
            },
            {
              title: 'Government forms & portals',
              desc: 'Most government portals require photos under 100KB, often at 200×200 to 600×600px. Resize to the required dimensions first, then compress at quality 60–65. A 600×600px JPEG at quality 65 typically outputs 30–70KB.',
            },
            {
              title: 'eCommerce & product photos',
              desc: 'Product images displayed at 800–1200px: quality 80 balances sharpness and load speed. White-background product photos compress more than lifestyle shots — expect 50–150KB at quality 80 for a 1000px product image.',
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
          When to Compress JPEG vs Convert to WebP
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WebP is a newer format that achieves 25–35% smaller file sizes than JPEG at the same
          visual quality. For websites where all visitors use modern browsers, WebP is the better
          choice. JPEG remains necessary for:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              title: 'Use JPEG when…',
              items: [
                'Email attachments (WebP not supported in most email clients)',
                'Government form uploads (most require JPG/JPEG)',
                'Printing (print workflows expect JPEG or TIFF)',
                'Older CMS that strips WebP files',
              ],
            },
            {
              title: 'Use WebP when…',
              items: [
                'Website hero images and blog photos',
                'Progressive web apps',
                'Social platforms that support it (Twitter, Facebook)',
                'Any use case where smallest file size matters most',
              ],
            },
            {
              title: 'Quick test',
              items: [
                'If the form or platform says "JPG only" → use JPEG',
                "If it's for web display only → use WebP",
                'Not sure → compress as JPEG (universal compatibility)',
                'Convert format: use our Convert Image tool',
              ],
            },
          ].map(({ title, items }) => (
            <div key={title} className="rounded-xl border border-border p-4 space-y-2">
              <p className="font-semibold text-text-main text-sm">{title}</p>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-xs text-text-muted flex gap-1.5">
                    <span className="text-primary shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — JPEG Files Stay in Your Browser
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All JPEG compression happens in your browser using the native Canvas API. Your files are
          never uploaded to any server — compression runs locally on your device. This makes the
          tool suitable for sensitive photos including ID documents, medical images, and personal
          photographs.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/compress-jpg-online', label: 'Compress JPG', desc: 'Reduce JPG file size' },
            {
              href: '/compress-image-to-100kb',
              label: 'Compress to 100KB',
              desc: 'Hit exact size target',
            },
            { href: '/jpg-to-webp', label: 'JPG to WebP', desc: 'Convert for web' },
            { href: '/compress-png-online', label: 'Compress PNG', desc: 'Reduce PNG file size' },
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

      <CompressJpegFAQSection />
    </section>
  )
}

function CompressJpegFAQSection() {
  const faqs = [
    {
      q: 'What is the difference between JPG and JPEG?',
      a: 'JPG and JPEG are the same format. JPEG stands for Joint Photographic Experts Group. Early Windows only supported 3-character file extensions, so .jpeg was shortened to .jpg. Both open identically in every application and browser.',
    },
    {
      q: 'How do I compress a JPEG file online for free?',
      a: 'Upload your .jpg or .jpeg file, set quality to 80, and download the compressed result. This tool compresses JPEG files in your browser with no upload to server, no sign-up, no watermark, and no daily limit.',
    },
    {
      q: 'What quality should I use to compress a JPEG?',
      a: 'Quality 75–85 is the sweet spot for most uses — 50–70% size reduction with no visible quality loss. For thumbnails and form uploads, quality 60–70 works well. For print-ready images, use quality 85–95. Below quality 60, compression artifacts become visible on detailed photos.',
    },
    {
      q: 'Does compressing a JPEG reduce image quality permanently?',
      a: 'Yes. JPEG uses lossy compression — each re-save discards some data permanently. Always compress from the original file. At quality 80, the loss is invisible on screen; at quality 60, minor artifacts appear only at full zoom.',
    },
    {
      q: 'How do I compress a JPEG to under 100KB?',
      a: 'Start at quality 70 and check the output size. If over 100KB, lower to 60. For large photos (4000px+), resize to 1280px wide first using the Resize Image tool, then compress at quality 65. A 1280px JPEG at quality 65 typically outputs 50–120KB.',
    },
    {
      q: 'Is JPEG or WebP better for websites?',
      a: 'WebP is 25–35% smaller than JPEG at the same quality and is supported by all modern browsers. For websites, WebP is the better choice. For email, form uploads, and platforms requiring JPG/JPEG, stick with JPEG.',
    },
    {
      q: 'Can I compress a JPEG on my phone?',
      a: 'Yes. Open this page in Safari (iPhone) or Chrome (Android), tap the upload area, select a photo, adjust quality, and download. iPhone photos are saved as HEIC — the tool converts and compresses automatically. Works without installing any app.',
    },
    {
      q: 'Are my JPEG files safe when I compress them online?',
      a: 'Yes. All compression runs in your browser — no files are uploaded to any server. Your JPEG images never leave your device and are permanently deleted from browser memory when you close the tab.',
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
