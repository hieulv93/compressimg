import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo3MbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 3MB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When Do You Need to Compress to 3MB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 3MB limit appears most often in content management systems, e-commerce platforms, and
          media submission portals. Real estate listing websites cap property photos at 3MB to keep
          page load times fast. News and editorial submission systems set 3MB as the threshold for
          contributed photos. E-commerce product image uploaders frequently enforce 3MB to optimize
          storefront loading. Online portfolio platforms for designers and photographers often use
          3MB as the default maximum for gallery uploads.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Modern cameras make this limit difficult to hit naturally. A full-frame mirrorless camera
          shooting at medium JPEG produces files of 8–15MB. Even a standard 12MP smartphone photo is
          often 4–6MB in HEIC or high-quality JPEG mode. Compressing at quality 86 brings these to
          1–2.5MB — well under 3MB while retaining excellent detail for real estate, product, and
          editorial use cases.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Quality Settings for a 3MB Target</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The table below shows expected output sizes at different quality settings. Start at
          quality 86 and adjust based on the output size shown in the download button.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Image dimensions
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Quality 90
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Quality 86
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Quality 82
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1920×1080px', '500KB–1.5MB', '350KB–1MB', '250KB–800KB'],
                ['3000×2000px (12MP)', '1.5–4MB', '1–2.5MB', '700KB–2MB'],
                ['4000×3000px (12MP)', '2–6MB', '1.5–3.5MB', '1–2.5MB'],
                ['6000×4000px (24MP)', '5–12MB', '3–7MB', '2–5MB'],
                ['8000×5333px (43MP)', '10–20MB', '6–12MB', '4–8MB'],
              ].map(([dims, q90, q86, q82]) => (
                <tr key={dims} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{dims}</td>
                  <td className="p-3 border border-border text-text-muted">{q90}</td>
                  <td className="p-3 border border-border text-text-muted">{q86}</td>
                  <td className="p-3 border border-border text-text-muted">{q82}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Images up to 12MP reach the 3MB target at quality 86 in most cases. For 24MP+ files, try
          quality 82, or use the{' '}
          <Link href="/resize-image" className="text-primary hover:underline font-medium">
            Resize Image tool
          </Link>{' '}
          to reduce dimensions first. A 6000×4000px image resized to 3000×2000px is 75% smaller
          before compression — after that, quality 86 produces output comfortably under 3MB.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for the 3MB Limit</h2>
        <div className="space-y-3">
          {[
            {
              title: 'Real estate listing photos',
              desc: 'Property listing platforms (Zillow, Rightmove, Zoopla, local MLS systems) typically cap individual photo uploads at 3MB. Real estate photographers shooting with full-frame cameras produce JPEGs of 10–25MB per shot. Compressing at quality 86 brings these to 1.5–3MB while retaining the sharpness and color accuracy that buyers expect in listing photos.',
            },
            {
              title: 'E-commerce product images',
              desc: 'Shopify, WooCommerce, Magento, and similar platforms recommend or enforce 3MB for product images. Large product photos slow page load, increasing bounce rate and reducing conversion. A 10MB studio product shot on white background compresses to 500KB–2MB at quality 86 — fast to load, sharp enough for zoom views.',
            },
            {
              title: 'News and editorial photo submissions',
              desc: 'Freelance photographers submitting to news portals, stock agencies, and editorial platforms often encounter 3MB per-image limits for initial review submissions. Higher resolution originals can be sent separately once accepted. Quality 86 retains sufficient detail for editorial review at typical screen display sizes.',
            },
            {
              title: 'Online portfolio platforms',
              desc: 'Portfolio platforms like Format, Squarespace, and custom WordPress galleries often set 3MB as the default media upload limit. Photographers and designers working with large originals need to compress before uploading. Quality 86 is high enough that portfolio images look professional at full display size.',
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
          Platforms and Systems with 3MB Image Limits
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Platform / System
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Limit
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Squarespace image upload', '3MB', 'Recommended for best performance'],
                ['Real estate MLS systems', '2–3MB', 'Varies by regional MLS'],
                ['Etsy product photos', '1MB', 'Very strict — compress to under 1MB'],
                ['Facebook photo posts', '4MB', 'Recommends under 3MB for quality'],
                ['Twitter/X images', '5MB', 'Below 3MB uploads faster on mobile'],
                ['Flickr standard upload', '200MB', 'No practical limit for photos'],
                ['500px photo upload', '60MB', 'No practical limit for photos'],
              ].map(([platform, limit, note]) => (
                <tr key={platform} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">
                    {platform}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{limit}</td>
                  <td className="p-3 border border-border text-text-muted">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Other Size Targets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image-to-2mb',
              label: 'Compress to 2MB',
              desc: 'Government portals and ID uploads',
            },
            {
              href: '/compress-image-to-5mb',
              label: 'Compress to 5MB',
              desc: 'Email and messaging apps',
            },
            {
              href: '/compress-image-to-1mb',
              label: 'Compress to 1MB',
              desc: 'Social media and web uploads',
            },
            {
              href: '/compress-image-to-500kb',
              label: 'Compress to 500KB',
              desc: 'Strict web and CMS uploads',
            },
            {
              href: '/compress-image-to-200kb',
              label: 'Compress to 200KB',
              desc: 'Job applications and profiles',
            },
            {
              href: '/compress-image-to-10mb',
              label: 'Compress to 10MB',
              desc: 'Discord and email attachments',
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
              q: 'What quality setting should I use to compress to under 3MB?',
              a: 'Start at quality 86 — this works for most images up to 12MP. For 24MP+ files from professional cameras, try quality 82. The download button shows the exact output size before saving, so you can see if you have hit the 3MB target without downloading first.',
            },
            {
              q: 'How do I compress a 10MB photo to under 3MB?',
              a: 'Upload the photo and set quality to 86. A 10MB JPEG typically compresses to 2–3MB at quality 86. If still above 3MB, lower to 82 or use the Resize Image tool to reduce dimensions first — halving width and height removes 75% of file size before compression.',
            },
            {
              q: 'Will compressing to 3MB reduce visible quality for real estate photos?',
              a: 'No. At quality 86, real estate photos retain all the sharpness and color accuracy needed for listing sites. Interior photos, exterior shots, and detail images all compress well at quality 86 — buyers viewing at normal screen sizes will see no difference from the original.',
            },
            {
              q: 'Can I compress a PNG image to under 3MB?',
              a: 'Yes. The tool converts PNG to compressed JPEG, typically reducing a 10–20MB PNG to 1–3MB at quality 86. If you need to preserve transparency (for logos or design assets with transparent backgrounds), use the Resize Image tool to reduce dimensions instead.',
            },
            {
              q: 'What is the difference between 3MB and 5MB compression targets?',
              a: '3MB requires slightly more compression than 5MB — quality 86 vs. quality 88–90. At quality 86, most photos still look excellent on screen and are suitable for professional and commercial use. The 5MB target can afford higher quality settings, making it better suited for images that will be zoomed or viewed at high resolution.',
            },
            {
              q: 'Are my images safe when using this tool?',
              a: 'Yes. All compression runs entirely in your browser — no image is ever uploaded to a server. Your files never leave your device during processing. This is important for photographers sharing client photos and designers working with unreleased commercial imagery.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
