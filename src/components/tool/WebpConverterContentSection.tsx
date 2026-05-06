import Link from 'next/link'
import FAQItem from './FAQItem'

export default function WebpConverterContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to WebP conversion"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is WebP and Why Convert to It?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WebP is a modern image format developed by Google that provides 25–35% smaller file sizes
          than JPEG at the same visual quality, and 26% smaller than PNG for lossless images. It
          supports both lossy and lossless compression, transparency (like PNG), and animation (like
          GIF). All modern browsers support WebP: Chrome, Firefox, Safari (since 14), Edge, and
          Opera.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool converts JPG, PNG, GIF, and HEIC images to WebP — and converts WebP back to JPG
          or PNG. All conversion runs in your browser with no server upload.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Convert to WebP Online — 3 Steps
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Upload your image',
              desc: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. Files up to 20MB are supported. Your image never leaves your device.',
            },
            {
              n: '2',
              title: 'Select WebP as the output format',
              desc: 'Choose WebP from the format selector. The conversion starts automatically. If your image is already WebP, you can convert it to JPG or PNG instead.',
            },
            {
              n: '3',
              title: 'Download the converted file',
              desc: 'The converted WebP file downloads instantly. The filename gets a "converted-" prefix and the correct .webp extension.',
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
          WebP vs JPEG vs PNG — File Size Comparison
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          These are typical file sizes for the same 1920×1080px photograph at comparable visual
          quality:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Format</th>
                <th className="text-left p-3 font-semibold text-text-main">Typical size</th>
                <th className="text-left p-3 font-semibold text-text-main">vs WebP</th>
                <th className="text-left p-3 font-semibold text-text-main">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  fmt: 'WebP (lossy)',
                  size: '80–180KB',
                  vs: '—',
                  use: 'Web images, blog photos, hero images',
                },
                {
                  fmt: 'JPEG (quality 80)',
                  size: '120–280KB',
                  vs: '~40% larger',
                  use: 'Email, legacy CMS, print workflows',
                },
                {
                  fmt: 'PNG (lossless)',
                  size: '1–4MB',
                  vs: '10–20× larger',
                  use: 'Screenshots, logos, graphics with transparency',
                },
                {
                  fmt: 'WebP (lossless)',
                  size: '300KB–1.5MB',
                  vs: '—',
                  use: 'Logos, illustrations requiring exact colors',
                },
                {
                  fmt: 'GIF (animated)',
                  size: '500KB–5MB',
                  vs: '2–5× larger',
                  use: 'Short animations (WebP animated is smaller)',
                },
              ].map(({ fmt, size, vs, use }) => (
                <tr
                  key={fmt}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{fmt}</td>
                  <td className="p-3 text-text-muted text-xs">{size}</td>
                  <td className="p-3 text-xs font-semibold text-amber-600">{vs}</td>
                  <td className="p-3 text-text-muted text-xs">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Convert Images to WebP</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Use WebP for websites',
              desc: 'WebP is the best format for web images — 25–35% smaller than JPEG with identical quality. Use it for blog photos, hero images, product images, and background images. Google PageSpeed Insights flags JPEG and PNG as opportunities and recommends WebP.',
            },
            {
              title: 'Use WebP for WordPress',
              desc: 'WordPress 5.8+ supports WebP natively. Upload WebP images directly for smaller files without plugins. For older installs, plugins like ShortPixel or Imagify convert on upload. Converting existing media to WebP reduces total site weight significantly.',
            },
            {
              title: 'Use WebP for Next.js / React',
              desc: 'Next.js Image component automatically serves WebP to supported browsers. Upload JPEG originals and Next.js converts at runtime. For static exports, pre-convert to WebP and serve directly for maximum performance.',
            },
            {
              title: 'Avoid WebP for email',
              desc: 'Email clients (Gmail, Outlook, Apple Mail) do not reliably support WebP. Always use JPEG for email attachments and inline images. WebP in email is displayed as a broken image in many clients including Outlook on Windows.',
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
        <h2 className="text-xl font-bold text-text-main">Browser Support for WebP</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Browser</th>
                <th className="text-left p-3 font-semibold text-text-main">WebP support</th>
                <th className="text-left p-3 font-semibold text-text-main">Since version</th>
              </tr>
            </thead>
            <tbody>
              {[
                { browser: 'Chrome', support: '✅ Full support', since: 'Chrome 23 (2012)' },
                { browser: 'Firefox', support: '✅ Full support', since: 'Firefox 65 (2019)' },
                { browser: 'Safari', support: '✅ Full support', since: 'Safari 14 (2020)' },
                { browser: 'Edge', support: '✅ Full support', since: 'Edge 18 (2018)' },
                { browser: 'Opera', support: '✅ Full support', since: 'Opera 11 (2012)' },
                {
                  browser: 'Samsung Internet',
                  support: '✅ Full support',
                  since: 'Version 4 (2016)',
                },
                { browser: 'IE 11', support: '❌ No support', since: 'Use JPEG fallback' },
              ].map(({ browser, support, since }) => (
                <tr
                  key={browser}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{browser}</td>
                  <td className="p-3 text-text-muted text-xs">{support}</td>
                  <td className="p-3 text-text-muted text-xs">{since}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          As of 2024, over 97% of global browser usage supports WebP. IE 11 usage is under 0.5%. For
          virtually all web use cases, WebP can be used without a JPEG fallback.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Convert WebP Back to JPG or PNG</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool also converts WebP files back to JPG or PNG. Upload your .webp file and select
          JPG or PNG as the output format. Use cases for converting WebP back:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              title: 'Email attachments',
              items: [
                'Gmail, Outlook do not render WebP',
                'Convert to JPEG before attaching',
                'Quality 80 JPEG is universally compatible',
              ],
            },
            {
              title: 'Printing',
              items: [
                'Print shops expect JPEG or TIFF',
                'WebP is not supported by most print software',
                'Convert to JPEG at quality 90+ for print',
              ],
            },
            {
              title: 'Legacy software',
              items: [
                'Older Photoshop, Paint do not open WebP',
                'Government portals often require JPG',
                'Convert to PNG for lossless editing',
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
          Privacy — WebP Conversion Runs in Your Browser
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All WebP conversion uses the native browser Canvas API — no files are uploaded to any
          server. Your images never leave your device. Conversion works offline once the page is
          loaded. Safe for sensitive images including medical scans, documents, and personal photos.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/jpg-to-webp', label: 'JPG to WebP', desc: 'Convert JPEG to WebP' },
            { href: '/png-to-webp', label: 'PNG to WebP', desc: 'Convert PNG to WebP' },
            { href: '/webp-to-jpg', label: 'WebP to JPG', desc: 'Convert WebP to JPEG' },
            { href: '/compress-image', label: 'Compress Image', desc: 'Reduce file size' },
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

      <WebpConverterFAQSection />
    </section>
  )
}

function WebpConverterFAQSection() {
  const faqs = [
    {
      q: 'How do I convert an image to WebP online for free?',
      a: 'Upload your JPG, PNG, or HEIC image, select WebP as the output format, and download the converted file. The conversion runs entirely in your browser — no upload to server, no sign-up, no watermark. Free with no daily limit.',
    },
    {
      q: 'Why should I convert images to WebP?',
      a: 'WebP is 25–35% smaller than JPEG at the same visual quality. Smaller images load faster, use less bandwidth, and improve Google PageSpeed scores. All modern browsers support WebP including Chrome, Firefox, Safari (since 14), and Edge.',
    },
    {
      q: 'Can I convert WebP back to JPG?',
      a: 'Yes. Upload your .webp file and select JPG as the output format. The converted JPEG downloads immediately. Use this for email attachments, print workflows, and platforms that do not support WebP.',
    },
    {
      q: 'Does converting to WebP reduce image quality?',
      a: 'WebP lossy conversion (the default) reduces quality slightly — comparable to JPEG at quality 80. At the same visible quality, WebP is significantly smaller than JPEG. If you need lossless conversion (no quality change), use PNG output instead.',
    },
    {
      q: 'Does Safari support WebP?',
      a: 'Yes. Safari has supported WebP since version 14 (released September 2020) on macOS Big Sur and iOS 14. All current iOS and macOS devices display WebP. Only Safari 13 and older (a tiny fraction of users) do not support WebP.',
    },
    {
      q: 'Can I use WebP for email?',
      a: 'No. Email clients including Gmail, Outlook, and Apple Mail do not reliably render WebP images. Always use JPEG for email attachments and inline images. Use this tool to convert WebP back to JPEG if you received a WebP file you need to email.',
    },
    {
      q: 'How do I convert PNG to WebP?',
      a: 'Upload your PNG file and select WebP as the output format. The PNG is converted to WebP in your browser. Transparent PNGs are converted with transparency preserved in WebP. Expect 50–80% smaller file size compared to the original PNG.',
    },
    {
      q: 'Is my image uploaded to a server when converting to WebP?',
      a: 'No. All conversion runs in your browser using the Canvas API. Your image never leaves your device. Conversion works offline once the page is loaded. Safe for sensitive images including ID documents, medical scans, and personal photos.',
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
