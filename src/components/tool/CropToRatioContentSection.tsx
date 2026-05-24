import Link from 'next/link'

export default function CropToRatioContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is Aspect Ratio?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Aspect ratio is the proportional relationship between an image&apos;s width and height,
          expressed as W:H. A 16:9 image is 16 units wide for every 9 units tall — the standard for
          widescreen video and YouTube. A 4:3 image is wider than tall but less extreme than 16:9 —
          common for older monitors and presentations.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Cropping to a specific ratio ensures your image fills a platform&apos;s frame exactly — no
          black bars, no unexpected auto-cropping, and no letterboxing.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Aspect Ratio Guide by Use Case</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Ratio</th>
                <th className="text-left p-3 border border-border font-semibold">Typical pixels</th>
                <th className="text-left p-3 border border-border font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  ratio: '16:9',
                  px: '1920×1080 / 1280×720',
                  use: 'YouTube thumbnails, presentations, blog hero images, wallpapers, video covers',
                },
                {
                  ratio: '4:3',
                  px: '1600×1200 / 1024×768',
                  use: 'Older monitors, Google Slides, Facebook posts, Zoom backgrounds',
                },
                {
                  ratio: '3:2',
                  px: '1800×1200 / 900×600',
                  use: 'DSLR camera output, Pinterest pins, Etsy product photos, print',
                },
                {
                  ratio: '1:1',
                  px: '1080×1080 / 800×800',
                  use: 'Instagram posts, profile photos, product grids, app icons',
                },
                {
                  ratio: '9:16',
                  px: '1080×1920 / 720×1280',
                  use: 'Instagram Stories, TikTok, YouTube Shorts, phone wallpapers',
                },
              ].map(({ ratio, px, use }, i) => (
                <tr key={ratio} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-mono font-bold text-primary text-base">
                    {ratio}
                  </td>
                  <td className="p-3 border border-border font-mono text-text-muted text-xs">
                    {px}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Platform-Specific Aspect Ratio Requirements
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'YouTube thumbnail (16:9)',
              desc: '1280×720px minimum, 1920×1080px recommended. Must be 16:9 to fill the thumbnail slot without black bars. JPG under 2MB.',
            },
            {
              title: 'LinkedIn post (1.91:1 ≈ 16:8.4)',
              desc: '1200×627px is the standard. The closest preset is 16:9 (slightly taller). Crop to 16:9 and LinkedIn will display it correctly.',
            },
            {
              title: 'Facebook post (1.91:1)',
              desc: '1200×630px for link previews. The 16:9 preset gives you a close crop — adjust slightly if needed.',
            },
            {
              title: 'Instagram Story (9:16)',
              desc: '1080×1920px. The 9:16 preset crops for vertical content. Instagram fills the phone screen without cropping.',
            },
            {
              title: 'Google Slides / PowerPoint (16:9)',
              desc: 'Most modern presentation software defaults to 16:9 (widescreen). Crop images to 16:9 before inserting to avoid scaling artifacts.',
            },
            {
              title: 'Pinterest pin (2:3)',
              desc: 'Pinterest recommends 1000×1500px (2:3). The closest preset is 3:2 — rotate or use Free crop to achieve 2:3 portrait orientation.',
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
        <h2 className="text-xl font-bold text-text-main">
          How to Crop to Ratio Without Losing the Subject
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <strong className="text-text-main">Select the ratio first</strong> — Choose your target
            ratio before adjusting the crop area. This locks the handles so dragging maintains the
            correct proportion.
          </li>
          <li>
            <strong className="text-text-main">Resize from the center</strong> — Drag corner handles
            to scale the crop box while keeping the ratio locked. Drag inside to move the box
            without resizing.
          </li>
          <li>
            <strong className="text-text-main">Rule of thirds</strong> — For landscape photos, place
            the horizon on the upper or lower third rather than the center. For portraits, place the
            eyes in the upper third.
          </li>
          <li>
            <strong className="text-text-main">16:9 from a portrait photo</strong> — Landscape
            ratios from portrait photos often lose the subject. Consider using Free crop to select
            just the face or subject area at 16:9 proportion.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/crop-image" className="text-primary hover:underline">
              Crop image
            </Link>{' '}
            — free-form crop to any area or ratio
          </li>
          <li>
            <Link href="/crop-image-to-square" className="text-primary hover:underline">
              Crop to square
            </Link>{' '}
            — 1:1 square crop for Instagram and profiles
          </li>
          <li>
            <Link href="/crop-image-circle" className="text-primary hover:underline">
              Crop to circle
            </Link>{' '}
            — circular crop with transparent PNG background
          </li>
          <li>
            <Link
              href="/resize-image-for-youtube-thumbnail"
              className="text-primary hover:underline"
            >
              Resize for YouTube thumbnail
            </Link>{' '}
            — resize to exactly 1280×720 after cropping
          </li>
          <li>
            <Link href="/resize-image-for-instagram" className="text-primary hover:underline">
              Resize for Instagram
            </Link>{' '}
            — resize the cropped image to Instagram specs
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce file size after cropping for fast uploads
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What aspect ratio is best for YouTube thumbnails?',
              a: '16:9 is the YouTube standard. The recommended pixel size is 1280×720px (720p) or 1920×1080px (1080p). If your thumbnail is not 16:9, YouTube adds black bars or crops it. This tool pre-selects 16:9 to make thumbnail cropping easy.',
            },
            {
              q: 'What aspect ratio is Instagram?',
              a: 'Instagram supports three ratios: 1:1 (square, 1080×1080px), 4:5 (portrait, 1080×1350px), and 1.91:1 (landscape, 1080×566px). The 1:1 preset on this tool is perfect for square posts. For the 4:5 portrait format, use Free crop.',
            },
            {
              q: 'How do I crop a photo to 16:9 for a presentation?',
              a: 'Select the 16:9 ratio button, drag the crop box to cover the area you want to keep, and click Crop. The downloaded image fits exactly in a 16:9 presentation slide without black bars or distortion.',
            },
            {
              q: 'What is the difference between 16:9 and 4:3?',
              a: '16:9 is wider — the ratio of modern TVs, monitors, and video. 4:3 is more square — the ratio of older monitors, standard definition TV, and many older cameras. For web and video content, 16:9 is the current standard.',
            },
            {
              q: 'Can I crop to a custom ratio not listed?',
              a: 'Yes. Select "Free" from the ratio options and drag the handles to any proportion you need. The crop box will not be constrained to a preset ratio.',
            },
            {
              q: 'Are my images uploaded to a server?',
              a: 'No. All cropping happens entirely in your browser. Your files never leave your device.',
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
