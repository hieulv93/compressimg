import Link from 'next/link'

export default function Resize400x400ContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why 400×400 for Profile Pictures?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          400×400 is one of the most widely required sizes for profile pictures and avatars across
          social media platforms. It is twice the pixel density of 200×200, which means it looks
          sharp on Retina and high-DPI screens — increasingly important as most phones and laptops
          now have high-resolution displays.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Twitter/X officially stores profile photos at 400×400 and displays them at smaller sizes
          depending on context (48×48 in feeds, 200×200 on profiles). Uploading at 400×400 ensures
          maximum sharpness across all display sizes.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Profile Picture Requirements by Platform
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Platform</th>
                <th className="text-left p-3 border border-border font-semibold">
                  Recommended size
                </th>
                <th className="text-left p-3 border border-border font-semibold">Display shape</th>
                <th className="text-left p-3 border border-border font-semibold">Max file size</th>
              </tr>
            </thead>
            <tbody>
              {[
                { platform: 'Twitter / X', size: '400×400px', shape: 'Circle', max: '2MB' },
                { platform: 'LinkedIn', size: '400×400px', shape: 'Circle', max: '8MB' },
                {
                  platform: 'Facebook',
                  size: '170×170px (min 320×320)',
                  shape: 'Circle',
                  max: 'None stated',
                },
                {
                  platform: 'Instagram',
                  size: '320×320px (min)',
                  shape: 'Circle',
                  max: 'None stated',
                },
                {
                  platform: 'Discord',
                  size: '128×128px (min)',
                  shape: 'Circle or square',
                  max: '10MB',
                },
                {
                  platform: 'GitHub',
                  size: '460×460px (recommended)',
                  shape: 'Circle',
                  max: '1MB',
                },
              ].map(({ platform, size, shape, max }, i) => (
                <tr key={platform} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">
                    {platform}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{shape}</td>
                  <td className="p-3 border border-border text-text-muted">{max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Other Uses for 400×400 Images</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Team member photos',
              desc: 'Company websites, "About Us" pages, and team directories often display headshots at 300–400px square. 400×400 is large enough to look sharp and small enough to load fast.',
            },
            {
              title: 'Podcast artwork',
              desc: 'Podcast directories (Spotify, Apple Podcasts) require artwork at 3000×3000 for full quality, but 400×400 is used for preview thumbnails in feed readers and smaller displays.',
            },
            {
              title: 'App user avatars',
              desc: 'Mobile apps, web apps, and SaaS platforms typically display user avatars at 64–128px but store them at 400×400 for Retina support. Upload 400×400 and the app will scale it down as needed.',
            },
            {
              title: 'Email signature photos',
              desc: 'Professional email signatures include a headshot at around 100–150px display size. Upload 400×400 to your email client — it will display at the correct size while remaining sharp on all email clients.',
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
            <Link href="/resize-image-to-300x300" className="text-primary hover:underline">
              Resize to 300×300
            </Link>{' '}
            — smaller thumbnail size for catalogs and blogs
          </li>
          <li>
            <Link href="/resize-image-to-1080x1080" className="text-primary hover:underline">
              Resize to 1080×1080
            </Link>{' '}
            — full Instagram square resolution
          </li>
          <li>
            <Link href="/crop-image-to-square" className="text-primary hover:underline">
              Crop to Square
            </Link>{' '}
            — crop non-square photos before resizing
          </li>
          <li>
            <Link href="/crop-image-circle" className="text-primary hover:underline">
              Crop to Circle
            </Link>{' '}
            — create circular profile pictures (PNG with transparency)
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image
            </Link>{' '}
            — reduce file size for faster upload
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Is 400×400 the right size for a Twitter profile picture?',
              a: 'Yes. Twitter/X recommends uploading profile photos at 400×400px. The platform displays them at different sizes — 48×48 in tweet feeds, 200×200 on profiles — and scales your 400×400 down cleanly. Larger uploads (up to 2MB) are also accepted.',
            },
            {
              q: 'Why is 400×400 better than 200×200 for profile photos?',
              a: '200×200 displays blurry on Retina and high-DPI screens, which now include most iPhones, MacBooks, and modern Android phones. 400×400 has 4× the pixels, so it appears sharp when the OS doubles the pixel density for Retina display.',
            },
            {
              q: 'Should I use JPG or PNG for profile pictures?',
              a: 'Use JPEG for headshots and photos — it compresses efficiently and keeps file size small. Use PNG only if your image has a transparent background (e.g., a logo) or very sharp edges that JPEG compression would blur.',
            },
            {
              q: 'Will my photo look good if it is not perfectly square?',
              a: 'The tool fits your photo within 400×400 while preserving the original aspect ratio. Non-square photos get white bars on the sides or top/bottom. For a professional look, crop your photo to square first using the Crop to Square tool.',
            },
            {
              q: 'What is the LinkedIn profile picture size?',
              a: 'LinkedIn recommends 400×400px for profile photos and accepts images up to 8MB. The photo is displayed as a circle. A 400×400 JPEG from this tool meets both requirements.',
            },
            {
              q: 'Are my files uploaded to a server?',
              a: 'No. All resizing happens entirely in your browser. Your images are never sent to any server.',
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
