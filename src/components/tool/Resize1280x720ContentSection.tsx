import Link from 'next/link'

export default function Resize1280x720ContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is 1280×720 Resolution?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          1280×720 — commonly called HD or 720p — is the entry-level High Definition resolution with
          a 16:9 aspect ratio. It contains 921,600 pixels (about 0.9 megapixels) and is widely used
          for web video, YouTube thumbnails, and displays on budget monitors and laptops.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          YouTube officially recommends 1280×720 as the standard thumbnail resolution. Images at
          this size display crisply on most screens while keeping file sizes manageable — typically
          100–400KB as JPEG, well within the 2MB YouTube thumbnail limit.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Where 1280×720 Is Used</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'YouTube thumbnails',
              desc: "YouTube's official recommended thumbnail size is 1280×720 at under 2MB. This is the standard for all YouTube channel thumbnails and displays correctly across all devices.",
            },
            {
              title: 'Web video covers',
              desc: 'Video players on web pages typically display at 720p by default for bandwidth savings. Cover images and poster frames at 1280×720 match the native playback resolution.',
            },
            {
              title: 'Social media banners',
              desc: 'LinkedIn event banners (1600×900) and Twitter header images (1500×500) require wider formats, but 1280×720 fits many blog thumbnails and article cover images.',
            },
            {
              title: 'Presentations (budget)',
              desc: 'Some older projectors and conference room displays run at 1280×720. Presentation slides sized to 720p ensure pixel-perfect display without downscaling.',
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
        <h2 className="text-xl font-bold text-text-main">720p vs 1080p vs 4K</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Standard</th>
                <th className="text-left p-3 border border-border font-semibold">Resolution</th>
                <th className="text-left p-3 border border-border font-semibold">Pixels</th>
                <th className="text-left p-3 border border-border font-semibold">
                  File size (JPEG)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { std: '720p (HD)', res: '1280×720', px: '921K', size: '100–400 KB' },
                { std: '1080p (Full HD)', res: '1920×1080', px: '2.07M', size: '300KB–1.5 MB' },
                { std: '1440p (QHD)', res: '2560×1440', px: '3.69M', size: '600KB–3 MB' },
                { std: '2160p (4K)', res: '3840×2160', px: '8.29M', size: '1.5–6 MB' },
              ].map(({ std, res, px, size }, i) => (
                <tr key={std} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{std}</td>
                  <td className="p-3 border border-border text-text-muted">{res}</td>
                  <td className="p-3 border border-border text-text-muted">{px}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link
              href="/resize-image-for-youtube-thumbnail"
              className="text-primary hover:underline"
            >
              Resize for YouTube Thumbnail
            </Link>{' '}
            — all YouTube sizes including channel art
          </li>
          <li>
            <Link href="/resize-image-to-1920x1080" className="text-primary hover:underline">
              Resize to 1920×1080
            </Link>{' '}
            — Full HD for wallpapers and presentations
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image
            </Link>{' '}
            — reduce file size after resizing
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image
            </Link>{' '}
            — resize to any custom dimensions
          </li>
          <li>
            <Link href="/crop-image-to-ratio" className="text-primary hover:underline">
              Crop to 16:9
            </Link>{' '}
            — crop to the correct ratio before resizing
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Is 1280×720 really the right YouTube thumbnail size?',
              a: "Yes. YouTube's official documentation states the recommended thumbnail size is 1280×720 pixels at under 2MB, in JPG, GIF, BMP, or PNG format. The 16:9 ratio matches YouTube's video player aspect ratio.",
            },
            {
              q: 'Will the thumbnail look blurry on 4K screens?',
              a: '1280×720 may appear slightly soft on 4K displays (3840×2160) where YouTube upscales it. If sharpness on high-DPI screens is critical, upload at 1920×1080 — YouTube accepts this and will downscale it cleanly.',
            },
            {
              q: 'What happens if my source image is smaller than 1280×720?',
              a: 'The tool will scale your image up to 1280×720. Upscaling always reduces quality — if possible, start with a source image of 1280×720 or larger for the best result.',
            },
            {
              q: 'Can I resize a screenshot to 1280×720?',
              a: 'Yes. Screenshots are typically PNG files and are supported. Upload the screenshot, select 1280×720, and download the resized JPEG.',
            },
            {
              q: 'Why does my image have white bars after resizing?',
              a: 'Your source image is not 16:9. The tool adds white letterbox bars to preserve the original proportions without distortion. To fill the full 1280×720 frame, crop your image to 16:9 first using the Crop to Ratio tool.',
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
