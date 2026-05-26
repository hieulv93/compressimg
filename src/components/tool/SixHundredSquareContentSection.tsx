import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function SixHundredSquareContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to 600x600 pixel image resizing"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is 600×600 Pixels Used For?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          600×600 pixels is a common square image size across several important use cases. It equals
          2×2 inches at 300 DPI — the US passport and visa photo standard. It is also the default
          WooCommerce product thumbnail size, a widely used marketplace listing size, and the
          recommended size for album art and profile photos on many platforms.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Platform / Use case
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Size</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  platform: 'US Passport / Visa (digital)',
                  size: '600×600px',
                  note: '2×2 inch at 300 DPI — DS-160 minimum',
                },
                {
                  platform: 'WooCommerce thumbnail (default)',
                  size: '600×600px',
                  note: 'Default WooCommerce product thumbnail',
                },
                {
                  platform: 'eBay product listing',
                  size: '600×600px min',
                  note: 'Minimum for zoom feature',
                },
                {
                  platform: 'Etsy product photo',
                  size: '2000×2000px (min 600)',
                  note: '600px minimum, larger recommended',
                },
                {
                  platform: 'Amazon product image',
                  size: '600×600px min',
                  note: 'Min for listing, 2000+ recommended',
                },
                {
                  platform: 'Podcast / album art',
                  size: '600×600px min',
                  note: 'Apple Podcasts minimum requirement',
                },
                {
                  platform: 'Government portal uploads',
                  size: '600×600px',
                  note: 'TSA PreCheck, Global Entry, immigration',
                },
              ].map(({ platform, size, note }) => (
                <tr key={platform}>
                  <td className="px-4 py-2.5 font-medium text-text-main">{platform}</td>
                  <td className="px-4 py-2.5 font-mono">{size}</td>
                  <td className="px-4 py-2.5">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">600×600px vs Other Common Square Sizes</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Square images are used across e-commerce, social media, and ID documents. Here is how
          600×600 compares to the other common square sizes and when to use each:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Size</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Physical at 300 DPI
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Primary use
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  size: '200×200px',
                  phys: '0.67×0.67 inch',
                  use: 'Naukri profile, small portal thumbnails',
                },
                {
                  size: '300×300px',
                  phys: '1×1 inch',
                  use: 'Blog thumbnails, avatar icons',
                },
                {
                  size: '400×400px',
                  phys: '1.33×1.33 inch',
                  use: 'LinkedIn / Twitter profile photo',
                },
                {
                  size: '600×600px',
                  phys: '2×2 inch',
                  use: 'US passport, WooCommerce, eBay min ← this page',
                },
                {
                  size: '800×800px',
                  phys: '2.67×2.67 inch',
                  use: 'Higher-res product photos',
                },
                {
                  size: '1000×1000px',
                  phys: '3.33×3.33 inch',
                  use: 'WooCommerce recommended, Shopify',
                },
                {
                  size: '1080×1080px',
                  phys: '3.6×3.6 inch',
                  use: 'Instagram post, album art full-res',
                },
                {
                  size: '2000×2000px',
                  phys: '6.67×6.67 inch',
                  use: 'Etsy / Amazon maximum quality',
                },
              ].map(({ size, phys, use }) => (
                <tr key={size} className={size === '600×600px' ? 'bg-surface' : ''}>
                  <td className="px-4 py-2.5 font-mono font-medium text-text-main">{size}</td>
                  <td className="px-4 py-2.5">{phys}</td>
                  <td className="px-4 py-2.5">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Is 600×600px the Same as a US Passport Photo?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes. The US State Department requires passport and visa photos to be exactly 2×2 inches.
          At 300 DPI (the standard for photo printing), 2 inches × 300 = 600 pixels — so 600×600px
          is the exact pixel equivalent of the 2×2 inch US passport photo requirement.
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 space-y-2 text-xs text-text-muted">
          <p className="font-semibold text-text-main text-sm">US Passport photo at 600×600px</p>
          {[
            { label: 'Physical size', value: '2×2 inch (51×51mm) at 300 DPI' },
            { label: 'File format', value: 'JPEG, color' },
            { label: 'Background', value: 'Plain white' },
            { label: 'DS-160 file size limit', value: 'Under 240KB' },
            { label: 'Typical JPEG size', value: '60–130KB at quality 85' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex justify-between gap-2 border-b border-border pb-1.5 last:border-0 last:pb-0"
            >
              <span>{label}</span>
              <span className="font-medium text-text-main text-right">{value}</span>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          If you need a US passport photo, resize your image to 600×600px here, then upload it
          directly to the DS-160 visa application or the online passport renewal portal. For other
          countries (UK, Schengen, India), use our{' '}
          <Link href="/resize-image-for-passport/" className="text-primary hover:underline">
            passport photo resizer
          </Link>{' '}
          which includes all country presets.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          WooCommerce and E-Commerce — Why 600×600px?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WooCommerce sets its default product thumbnail size to 600×600px. Uploading product photos
          at exactly this size — or larger — ensures WordPress generates a sharp thumbnail without
          upscaling. Upscaling (enlarging a small image) is the most common cause of blurry product
          thumbnails in WooCommerce stores.
        </p>
        <div className="space-y-2">
          {[
            {
              tip: 'Upload at 1000×1000px or larger for best results',
              detail:
                'WooCommerce generates the 600×600 thumbnail from your upload. A 1000×1000px source produces a sharper 600×600 thumbnail than a 600×600px source — WordPress never has to upscale.',
            },
            {
              tip: 'Use JPEG at quality 80–85 for product photos',
              detail:
                'Quality 80 produces files 30–60% smaller than quality 95 with no visible difference at screen resolution. Smaller files mean faster product pages and better Core Web Vitals scores.',
            },
            {
              tip: 'Keep all product images the same dimensions',
              detail:
                'Mixed sizes on a product grid look unprofessional and can break grid layouts. Resize all images to a consistent square (600×600 or 1000×1000) before uploading to WooCommerce.',
            },
          ].map(({ tip, detail }) => (
            <div key={tip} className="rounded-xl border border-border bg-surface p-3">
              <p className="font-semibold text-text-main text-xs">✓ {tip}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All resizing runs entirely in your browser. Your images are never uploaded to any server.
          Free with no limits, no watermarks, and no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/resize-image-to-2x2-inch/',
              label: 'Resize to 2×2 Inch',
              desc: 'US passport — 600×600px',
            },
            {
              href: '/resize-image-for-passport/',
              label: 'Passport Photo Resizer',
              desc: 'All countries — US, UK, India…',
            },
            {
              href: '/resize-image-to-400x400/',
              label: 'Resize to 400×400',
              desc: 'LinkedIn / Twitter profile',
            },
            {
              href: '/resize-image-to-1080x1080/',
              label: 'Resize to 1080×1080',
              desc: 'Instagram square post',
            },
            {
              href: '/compress-image-for-website/',
              label: 'Compress for Website',
              desc: 'Optimize for page speed',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Custom pixel dimensions' },
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
          Frequently Asked Questions — 600×600 Pixels
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is 600×600px used for?',
              a: 'US passport and visa photos (2×2 inch at 300 DPI), WooCommerce default product thumbnail, eBay listing minimum, podcast/album art minimum (Apple Podcasts), and government portal uploads (TSA PreCheck, Global Entry, immigration forms).',
            },
            {
              q: 'Is 600×600px the same as a 2×2 inch photo?',
              a: 'Yes, at 300 DPI. 2 inches × 300 DPI = 600 pixels. A 600×600px JPEG printed at 300 DPI measures exactly 2×2 inches on paper — the US passport photo standard.',
            },
            {
              q: 'Is 600×600px good enough for WooCommerce product photos?',
              a: 'It meets the default WooCommerce thumbnail size exactly. For better quality, upload at 1000×1000px or larger — WooCommerce generates the 600px thumbnail from your source, so a larger original produces sharper output.',
            },
            {
              q: 'Can I use a HEIC photo from my iPhone?',
              a: 'Yes. This tool automatically converts HEIC files from iPhone to JPEG during the resize. Most portals and platforms only accept JPEG — HEIC is not widely supported.',
            },
            {
              q: 'What file size should a 600×600 JPEG be?',
              a: 'At quality 85: typically 40–100KB. At quality 90: typically 70–150KB. For the DS-160 passport portal, the limit is 240KB — a 600×600 JPEG at any reasonable quality is well within this.',
            },
            {
              q: 'Is this tool free?',
              a: 'Yes, completely free. No sign-up, no watermarks, no download limits. All processing happens in your browser.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
