import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ImageConverterContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to image conversion"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is an Image Converter?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          An image converter changes the file format of an image — for example, converting a JPG to
          PNG, or a PNG to WebP — without changing the pixel dimensions. Each image format has
          different characteristics: JPEG uses lossy compression for photos, PNG uses lossless
          compression for graphics, and WebP is a modern format that achieves the best file size for
          web use.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool converts between JPG, PNG, and WebP in your browser. No server upload, no
          account required. Supports HEIC (iPhone photos) as input.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Convert an Image Online — 3 Steps
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Upload your image',
              desc: 'Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP, and HEIC (iPhone photos). Files up to 20MB supported.',
            },
            {
              n: '2',
              title: 'Select the output format',
              desc: 'Choose JPG, PNG, or WebP from the format selector. The conversion happens automatically. Switch formats instantly to compare output.',
            },
            {
              n: '3',
              title: 'Download the converted image',
              desc: 'The converted file downloads with the correct extension. The original file is unchanged. Convert as many images as you need — free, no limit.',
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
          Image Format Comparison — JPG vs PNG vs WebP
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Format</th>
                <th className="text-left p-3 font-semibold text-text-main">Compression</th>
                <th className="text-left p-3 font-semibold text-text-main">Transparency</th>
                <th className="text-left p-3 font-semibold text-text-main">File size</th>
                <th className="text-left p-3 font-semibold text-text-main">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  fmt: 'JPEG / JPG',
                  comp: 'Lossy',
                  trans: '❌ No',
                  size: 'Small',
                  use: 'Photos, email, print, govt forms',
                },
                {
                  fmt: 'PNG',
                  comp: 'Lossless',
                  trans: '✅ Yes',
                  size: 'Large',
                  use: 'Logos, screenshots, graphics, icons',
                },
                {
                  fmt: 'WebP',
                  comp: 'Both',
                  trans: '✅ Yes',
                  size: 'Smallest',
                  use: 'Web images, CMS, React/Next.js',
                },
              ].map(({ fmt, comp, trans, size, use }) => (
                <tr
                  key={fmt}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-semibold text-text-main text-xs">{fmt}</td>
                  <td className="p-3 text-text-muted text-xs">{comp}</td>
                  <td className="p-3 text-text-muted text-xs">{trans}</td>
                  <td className="p-3 text-text-muted text-xs">{size}</td>
                  <td className="p-3 text-text-muted text-xs">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Convert Each Image Format</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Convert to JPG when…',
              desc: 'The destination requires JPEG: email attachments, government form uploads, print workflows, older CMS that strips other formats. JPG is universally supported — every application, device, and browser opens JPG files.',
            },
            {
              title: 'Convert to PNG when…',
              desc: 'You need transparency (logo on a colored background, UI element with transparent areas), exact color accuracy without compression artifacts, or lossless quality for screenshots and graphics. PNG is ideal for anything that is not a photograph.',
            },
            {
              title: 'Convert to WebP when…',
              desc: 'You are uploading images to a website, WordPress, or any modern web platform. WebP is 25–35% smaller than JPEG at the same visual quality. All modern browsers support WebP. Converting blog photos and hero images to WebP improves page load speed.',
            },
            {
              title: 'Convert HEIC to JPG when…',
              desc: 'You have iPhone photos (.heic files) that need to be shared or uploaded. Most platforms, apps, and government portals do not support HEIC. Upload the HEIC file here — it converts to JPG automatically during the conversion process.',
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
        <h2 className="text-xl font-bold text-text-main">Does Converting Change Image Quality?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              title: 'JPG → PNG',
              items: [
                'No quality loss (PNG is lossless)',
                'File size becomes much larger',
                'Existing JPEG artifacts are preserved',
                'Transparency is added (solid white background if original had none)',
              ],
            },
            {
              title: 'JPG → WebP',
              items: [
                'Slight quality change (lossy → lossy)',
                'File size 25–35% smaller than JPG',
                'Visually identical at comparable quality',
                'Best choice for web performance',
              ],
            },
            {
              title: 'PNG → JPG',
              items: [
                'Quality change (lossless → lossy)',
                'Transparency is lost (replaced by white)',
                'File size drops significantly',
                'Not suitable for logos with transparent backgrounds',
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
        <h2 className="text-xl font-bold text-text-main">Convert Images for Specific Platforms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'WordPress',
              desc: 'WordPress 5.8+ accepts WebP uploads natively. Convert JPG blog photos and hero images to WebP before uploading for 30–35% smaller files. Use PNG only for logos and graphics that require transparency or exact color rendering.',
            },
            {
              title: 'Email clients',
              desc: 'Gmail, Outlook, and Apple Mail do not support WebP. Always attach JPG for photos. For inline email images (newsletters, marketing), JPG at quality 80 gives the best size-to-compatibility ratio. Avoid PNG — too large for email.',
            },
            {
              title: 'Shopify / eCommerce',
              desc: 'Shopify automatically converts uploaded images to WebP for browsers that support it. Upload JPG at full resolution — Shopify handles optimization. For product images on other platforms, WebP at 800–1200px gives the best load time.',
            },
            {
              title: 'Government & exam portals',
              desc: 'Most government portals in India, UK, and US require JPG/JPEG format specifically. HEIC (iPhone) and WebP are not accepted. Upload your HEIC or PNG file here, convert to JPG, then upload to the portal.',
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
        <h2 className="text-xl font-bold text-text-main">Specific Format Converters</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Need a specific conversion? Use the dedicated converter for each format pair:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/jpg-to-png', label: 'JPG to PNG', desc: 'JPEG → lossless PNG' },
            { href: '/png-to-jpg', label: 'PNG to JPG', desc: 'PNG → JPEG' },
            { href: '/jpg-to-webp', label: 'JPG to WebP', desc: 'JPEG → modern WebP' },
            { href: '/webp-to-jpg', label: 'WebP to JPG', desc: 'WebP → universal JPEG' },
            { href: '/png-to-webp', label: 'PNG to WebP', desc: 'PNG → smaller WebP' },
            { href: '/webp-to-png', label: 'WebP to PNG', desc: 'WebP → lossless PNG' },
            { href: '/heic-to-jpg', label: 'HEIC to JPG', desc: 'iPhone photos → JPEG' },
            { href: '/heic-to-png', label: 'HEIC to PNG', desc: 'iPhone photos → PNG' },
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

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Privacy — No Upload Required</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All image conversion runs in your browser using the native Canvas API. Your images are
          never uploaded to any server, never stored, and never analyzed. Safe for converting
          sensitive images — ID documents, medical scans, personal photos — without privacy risk.
        </p>
      </div>

      <ImageConverterFAQSection />
    </section>
  )
}

function ImageConverterFAQSection() {
  const faqs = [
    {
      q: 'How do I convert an image online for free?',
      a: 'Upload your image, select the output format (JPG, PNG, or WebP), and download the converted file. The conversion runs entirely in your browser — no upload to server, no sign-up, no watermark. Free with no daily limit.',
    },
    {
      q: 'How do I convert JPG to PNG?',
      a: 'Upload your JPG file and select PNG as the output format. The PNG downloads instantly with transparency support. Note: PNG files are much larger than JPG — use PNG only when you need lossless quality or transparency.',
    },
    {
      q: 'How do I convert PNG to JPG?',
      a: 'Upload your PNG and select JPG as the output format. If the PNG has a transparent background, it is replaced with white in the JPG. JPG is smaller and universally compatible — ideal for email, print, and form uploads.',
    },
    {
      q: 'What is the best format to convert images to for a website?',
      a: 'WebP. It is 25–35% smaller than JPEG at the same visual quality and is supported by all modern browsers (Chrome, Firefox, Safari 14+, Edge). Converting blog photos and hero images to WebP improves page load speed and Google PageSpeed scores.',
    },
    {
      q: 'How do I convert HEIC (iPhone photos) to JPG?',
      a: 'Upload your HEIC file and select JPG as the output format. The tool converts HEIC to JPG automatically in your browser. Use this to make iPhone photos compatible with Windows, government portals, and platforms that do not support HEIC.',
    },
    {
      q: 'Does converting an image change its dimensions?',
      a: 'No. Format conversion changes the file format only — width and height stay exactly the same. To change dimensions, use the Resize Image tool. To reduce file size without changing dimensions, use the Compress Image tool.',
    },
    {
      q: 'What is the difference between JPG and PNG?',
      a: 'JPG uses lossy compression — smaller files, best for photographs. PNG uses lossless compression — larger files, but supports transparency and exact color reproduction. Use JPG for photos and email. Use PNG for logos, screenshots, and graphics that need sharp edges or transparent backgrounds.',
    },
    {
      q: 'Is my image uploaded to a server when I convert it?',
      a: 'No. All conversion runs in your browser using the Canvas API. Your image never leaves your device. No files are uploaded, stored, or shared with any server. Safe for sensitive images including ID documents and personal photos.',
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
