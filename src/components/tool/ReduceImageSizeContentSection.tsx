import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ReduceImageSizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to reducing image size"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Does &quot;Reduce Image Size&quot; Mean?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Reducing image size means decreasing the digital file size — measured in kilobytes (KB) or
          megabytes (MB) — without making the image unusable. A photo taken on a modern smartphone
          is typically 3–8MB. For most practical uses — websites, email, messaging, form uploads — a
          100–500KB image is sufficient and loads or sends significantly faster.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Image file size is determined by two factors: the pixel dimensions (width × height) and
          the compression quality. Reducing either one decreases the file size. This tool uses
          quality compression — it keeps your original pixel dimensions while applying lossy
          compression to reduce the number of bytes needed to store each pixel. For a more
          aggressive reduction, you can also{' '}
          <Link href="/resize-image" className="text-primary underline">
            resize the image dimensions
          </Link>{' '}
          first.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Reduce Image Size Online — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Upload your image',
              desc: 'Click the upload area, drag and drop, or paste from clipboard (Ctrl+V). Supported: JPG, PNG, WebP. Files up to 20MB accepted. Your image never leaves your device.',
            },
            {
              n: '2',
              title: 'Adjust quality to set target size',
              desc: 'The default quality 80 reduces most images by 60–70%. For a smaller output, lower to 60–70. The compressed file size is shown in the result before you download — no guessing needed.',
            },
            {
              n: '3',
              title: 'Download the reduced image',
              desc: 'Once the size shown in the result meets your target, click Download. The reduced image saves directly to your device.',
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
          How Much Can You Reduce Image File Size?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The reduction depends on the original pixel dimensions and the quality setting. Use this
          table as a reference to choose the right quality level before uploading.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Original Size</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality 80</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality 70</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality 60</th>
                <th className="text-left p-3 font-semibold text-text-main">Quality 50</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  orig: '8MB (12MP phone)',
                  q80: '600KB–1.5MB',
                  q70: '350KB–900KB',
                  q60: '200KB–500KB',
                  q50: '120KB–300KB',
                },
                {
                  orig: '4MB (8MP photo)',
                  q80: '300KB–800KB',
                  q70: '180KB–450KB',
                  q60: '100KB–260KB',
                  q50: '60KB–160KB',
                },
                {
                  orig: '2MB (5MP photo)',
                  q80: '150KB–400KB',
                  q70: '90KB–230KB',
                  q60: '55KB–130KB',
                  q50: '35KB–80KB',
                },
                {
                  orig: '1MB (2MP / screenshot)',
                  q80: '70KB–200KB',
                  q70: '45KB–120KB',
                  q60: '28KB–70KB',
                  q50: '18KB–45KB',
                },
                {
                  orig: '500KB (web image)',
                  q80: '35KB–100KB',
                  q70: '22KB–60KB',
                  q60: '14KB–35KB',
                  q50: '9KB–22KB',
                },
              ].map(({ orig, q80, q70, q60, q50 }) => (
                <tr
                  key={orig}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{orig}</td>
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
          <strong className="text-text-main">Rule of thumb:</strong> Quality 80 is the sweet spot
          for most uses — visually identical to the original on screen but 60–70% smaller. Lower
          quality only if you need to hit a specific file size target.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Reduce Image Size for Web — Why It Matters
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Large images are the single biggest cause of slow web pages. A page with three 2MB
          unoptimized photos forces mobile visitors on 4G to download 6MB before the page fully
          renders. Reducing each image to 200–500KB brings that to under 1.5MB total — a measurable
          difference in load time and bounce rate.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              title: 'Faster page load',
              desc: 'Google PageSpeed penalizes images over 200KB. A 500KB image at quality 80 typically outputs to 50–120KB — a 75–90% reduction that directly improves LCP (Largest Contentful Paint).',
            },
            {
              title: 'Better Core Web Vitals',
              desc: 'LCP (Largest Contentful Paint) is primarily driven by the hero image load time. Reducing your hero image from 2MB to 200KB can move LCP from 4s to under 2.5s — the threshold for a "Good" score.',
            },
            {
              title: 'Lower storage & bandwidth',
              desc: 'Hosting plans charge for bandwidth. A blog with 50 posts × 3 images each: reducing from 2MB to 200KB per image saves 270MB of bandwidth per 1,000 visitors.',
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
          Reduce Image Size for Email, WhatsApp &amp; Social Media
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Email attachments',
              desc: 'Most email providers allow up to 25MB, but recipients on mobile data prefer smaller attachments. Reducing photos to 200–500KB ensures fast delivery and avoids spam filters that flag large attachments.',
            },
            {
              title: 'WhatsApp & Telegram',
              desc: 'These apps compress images automatically on send — but starting with a pre-reduced image preserves more quality after their second round of compression. Reduce to 500KB before sending for best results.',
            },
            {
              title: 'Instagram & Facebook',
              desc: 'Social platforms re-compress your uploads. A 6MB upload looks identical to a 500KB upload on screen, but uploading a pre-optimized image saves time and avoids double-compression artifacts.',
            },
            {
              title: 'LinkedIn & professional use',
              desc: 'LinkedIn profile photos are displayed at 400×400px. A 4MB original at 3000×3000px contains 56× more pixels than displayed. Reducing to 400KB retains all visible quality at display size.',
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
          Image Size Reducer vs Image Resizer — What&apos;s the Difference?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Both tools make image files smaller, but they work differently and are suited to different
          situations:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <p className="font-semibold text-text-main text-sm">Image Size Reducer (this tool)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Reduces file size by applying lossy compression — the pixel count stays the same but
              each pixel is stored with less data. A 1920×1080px image at quality 80 is still
              1920×1080px after reduction — just 60–70% smaller in bytes. Best for web images, email
              attachments, and any case where you need to keep the original dimensions.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <p className="font-semibold text-text-main text-sm">
              <Link href="/resize-image" className="text-primary underline">
                Image Resizer
              </Link>
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Reduces file size by reducing the number of pixels. A 4000×3000px image resized to
              1280×960px has 90% fewer pixels, which directly reduces file size by 85–90% before any
              compression is applied. Best when you need an exact pixel size (e.g., 600×600px for a
              form upload) or when the original is so large that compression alone cannot hit your
              target.
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For maximum file size reduction, use both in sequence: resize dimensions first, then apply
          quality compression. This is the most effective method for compressing 8MP+ phone photos
          to under 100KB.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Which Format Reduces Image Size the Most?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              fmt: 'WebP — Smallest output',
              desc: 'WebP compression is 25–35% more efficient than JPG at the same visual quality. If your target platform supports WebP (all modern browsers do), converting to WebP before reducing size produces the smallest file. Use our Convert tool to switch format first.',
            },
            {
              fmt: 'JPG — Best for photos',
              desc: 'JPG lossy compression is very effective on photographs — quality 80 reduces file size by 60–70% with invisible quality loss. The most universally compatible format for all platforms, email clients, and form uploads.',
            },
            {
              fmt: 'PNG — Best for graphics',
              desc: 'PNG uses lossless compression, which works well on flat graphics, logos, and screenshots with large uniform areas. For photographs, PNG files are much larger than JPG at comparable quality. Convert to JPG first if PNG size reduction is insufficient.',
            },
          ].map(({ fmt, desc }) => (
            <div key={fmt} className="rounded-xl border border-border p-4 space-y-2">
              <p className="font-semibold text-text-main text-sm">{fmt}</p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Stay on Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This image size reducer runs entirely in your browser. Your images are never uploaded to
          any server — all processing happens locally using JavaScript. Close the tab and the image
          data is permanently gone from memory. No account required, no storage, no tracking of your
          files.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/resize-image', label: 'Resize Image', desc: 'Change pixel dimensions' },
            {
              href: '/compress-image-to-100kb',
              label: 'Compress to 100KB',
              desc: 'Hit exact size targets',
            },
            { href: '/compress-jpg-online', label: 'Compress JPG', desc: 'Reduce JPG file size' },
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

      <ReduceImageSizeFAQSection />
    </section>
  )
}

function ReduceImageSizeFAQSection() {
  const faqs = [
    {
      q: 'How do I reduce image size online for free?',
      a: 'Upload your image, set quality to 80, and download the reduced result. This tool reduces image size by 60–70% at quality 80 with no visible quality loss. Lower to 60 for 80–90% reduction. No sign-up, no watermark, no limit.',
    },
    {
      q: 'How do I reduce image file size without losing quality?',
      a: 'Use quality 75–85. At quality 80, most images are reduced by 60–70% with a result that looks identical to the original on screen. Quality loss only becomes visible below quality 60 when viewed at full zoom on detailed images.',
    },
    {
      q: 'What is the fastest way to reduce image size?',
      a: 'Upload the image and compress at quality 80. The result is ready in under 3 seconds and shows the exact output size before you download. For very large images (4000px+), resize dimensions first using the Resize Image tool, then compress — this two-step process takes under 30 seconds.',
    },
    {
      q: 'How do I reduce image size to under 100KB?',
      a: 'Start with quality 70 and check the result size. If over 100KB, lower to 60. For large phone photos (4000px+), resize to 1280px wide first using the Resize Image tool, then compress at quality 60–70. A 1280px photo at quality 70 typically outputs 40–120KB.',
    },
    {
      q: 'How do I reduce image size on iPhone?',
      a: 'Open this page in Safari on your iPhone, tap the upload area, and select a photo from your camera roll. iPhone photos are saved as HEIC — the tool converts and compresses automatically. Set quality to 60–70 for most form or sharing uses. Download the reduced image directly to your phone.',
    },
    {
      q: 'Can I reduce image size without changing dimensions?',
      a: 'Yes. This tool reduces file size through quality compression only — the pixel dimensions (width × height) stay exactly the same. A 1920×1080px image is still 1920×1080px after compression, just smaller in file size.',
    },
    {
      q: 'What is the best image size reducer online?',
      a: 'The best image size reducer is one that is fast, free, private, and requires no account. This tool processes images in your browser with no server upload, no sign-up, and no file limit — suitable for sensitive documents like ID photos and personal files.',
    },
    {
      q: 'How do I reduce image size for email?',
      a: 'Upload your image and compress at quality 80. Most email-ready photos land at 100–400KB at quality 80 — fast to send and receive. For very large originals (5MB+), resize to 1280px wide first, then compress. This keeps the image sharp at typical email preview sizes.',
    },
    {
      q: 'Does reducing image size affect quality?',
      a: 'At quality 75–85, the quality loss is invisible on screen. At quality 60–70, minor artifacts appear only at full zoom on detailed textures. For most practical uses — email, web, social media, form submissions — quality 70–80 is visually indistinguishable from the original.',
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
