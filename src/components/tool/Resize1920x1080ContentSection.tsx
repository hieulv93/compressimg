import Link from 'next/link'

export default function Resize1920x1080ContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is 1920×1080 Resolution?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          1920×1080 — also called Full HD or 1080p — is the most widely used screen resolution in
          the world. It has 1920 pixels horizontally and 1080 pixels vertically, producing a 16:9
          aspect ratio. Nearly all modern monitors, laptops, televisions, and streaming platforms
          are built around this standard.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          When you resize an image to 1920×1080, you get a file that fits perfectly on any Full HD
          display without upscaling or black bars. This makes it the go-to size for desktop
          wallpapers, presentation slides, video frames, and web hero backgrounds.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Uses for 1920×1080 Images</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Desktop wallpapers',
              desc: 'The default wallpaper resolution for Windows and macOS on Full HD monitors. Images smaller than 1920×1080 are upscaled and appear blurry.',
            },
            {
              title: 'PowerPoint & Google Slides',
              desc: 'Modern presentations use a 16:9 widescreen layout at 1920×1080. Images sized to this resolution fill slides without distortion or white borders.',
            },
            {
              title: 'YouTube video frames',
              desc: 'YouTube thumbnails for 1080p videos are displayed at 1280×720, but the video frames themselves are 1920×1080. Use this size for video cover images or preview stills.',
            },
            {
              title: 'Zoom & Teams backgrounds',
              desc: 'Video call platforms recommend virtual background images at 1920×1080 (16:9). Smaller images are upscaled, causing visible blurring.',
            },
            {
              title: 'Web hero sections',
              desc: 'Full-width hero images on websites are typically 1920px wide. A 1920×1080 image fills a standard Full HD viewport perfectly without any vertical scroll.',
            },
            {
              title: 'Digital signage',
              desc: 'Most digital signage screens — in retail, airports, lobbies — run at 1920×1080. Content prepared at this exact size displays without scaling artifacts.',
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
        <h2 className="text-xl font-bold text-text-main">HD Resolution Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Name</th>
                <th className="text-left p-3 border border-border font-semibold">Resolution</th>
                <th className="text-left p-3 border border-border font-semibold">Ratio</th>
                <th className="text-left p-3 border border-border font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: '4K UHD',
                  res: '3840×2160',
                  ratio: '16:9',
                  use: 'High-end monitors, 4K TVs',
                },
                {
                  name: 'Full HD (1080p)',
                  res: '1920×1080',
                  ratio: '16:9',
                  use: 'Wallpapers, presentations, web',
                },
                {
                  name: 'HD (720p)',
                  res: '1280×720',
                  ratio: '16:9',
                  use: 'YouTube thumbnails, web banners',
                },
                {
                  name: 'HD Ready',
                  res: '1366×768',
                  ratio: '~16:9',
                  use: 'Laptop screens, budget monitors',
                },
                {
                  name: 'WUXGA',
                  res: '1920×1200',
                  ratio: '16:10',
                  use: 'Older professional monitors',
                },
              ].map(({ name, res, ratio, use }, i) => (
                <tr key={name} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{name}</td>
                  <td className="p-3 border border-border text-text-muted">{res}</td>
                  <td className="p-3 border border-border text-text-muted">{ratio}</td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
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
            <Link href="/resize-image-to-1280x720" className="text-primary hover:underline">
              Resize to 1280×720
            </Link>{' '}
            — HD resolution for YouTube thumbnails
          </li>
          <li>
            <Link
              href="/resize-image-for-youtube-thumbnail"
              className="text-primary hover:underline"
            >
              Resize for YouTube Thumbnail
            </Link>{' '}
            — all YouTube image sizes in one tool
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image
            </Link>{' '}
            — resize to any custom dimensions
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image
            </Link>{' '}
            — reduce file size after resizing
          </li>
          <li>
            <Link href="/crop-image-to-ratio" className="text-primary hover:underline">
              Crop to Ratio
            </Link>{' '}
            — crop to 16:9 before resizing to 1920×1080
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What happens if my image is not 16:9?',
              a: 'The tool preserves your original aspect ratio. If your image is portrait (taller than wide) or a different widescreen ratio, it is fitted within 1920×1080 with white bars added on the sides or top/bottom — the image is not stretched or cropped.',
            },
            {
              q: 'Is 1920×1080 the same as 2 megapixels?',
              a: '1920×1080 = 2,073,600 pixels, which is approximately 2.1 megapixels. This is sufficient for screen display and most web use. For large-format printing, a higher resolution is recommended.',
            },
            {
              q: 'Can I use this for a Zoom background?',
              a: 'Yes. Zoom and Microsoft Teams both recommend virtual background images at 1920×1080 (16:9 ratio). Upload a landscape photo, resize it here, and upload it in your video call app settings.',
            },
            {
              q: 'Will the file be large after resizing to 1920×1080?',
              a: 'The resized JPEG output is typically 300KB–1.5MB depending on image content. If you need a smaller file, use the Compress Image tool after downloading.',
            },
            {
              q: 'What format does the output download as?',
              a: 'The output downloads as JPEG. For images that require transparency (e.g., logos), use the PNG to PNG resize option or convert before resizing.',
            },
            {
              q: 'Are my files uploaded to a server?',
              a: 'No. All resizing happens entirely in your browser using the Canvas API. Your images are never sent to any server.',
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
