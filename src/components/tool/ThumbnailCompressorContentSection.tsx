import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ThumbnailCompressorContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing thumbnails"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a Thumbnail Compressor?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A thumbnail compressor reduces the file size of a thumbnail image — a small preview image
          used on YouTube, Twitch, TikTok, gaming platforms, and social media — without reducing its
          dimensions or visible quality. Unlike a general image compressor, a thumbnail compressor
          is optimized for the specific file size requirements of video platforms: YouTube enforces
          a strict 2MB thumbnail limit, while Twitch allows up to 10MB for stream thumbnails.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Design tools like Canva, Adobe Express, Photoshop, and GIMP often export thumbnails as
          unoptimized PNG or high-quality JPEG files. A 1280×720 thumbnail exported from Canva can
          easily reach 3–8MB — well above YouTube&apos;s 2MB limit. This free online thumbnail
          compressor brings those files down to an acceptable size in seconds, directly in your
          browser with no upload required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          YouTube Thumbnail File Size Limit — and How to Hit It
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          YouTube requires thumbnails to be under <strong className="text-text-main">2MB</strong>{' '}
          and recommends <strong className="text-text-main">1280×720 pixels</strong> (16:9 aspect
          ratio). Thumbnails that exceed 2MB cannot be uploaded — YouTube will reject them with an
          error. Here is how to compress any thumbnail to under 2MB while keeping it sharp:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your thumbnail</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area above or drag and drop your thumbnail file. JPG, PNG, and WebP
                are all accepted up to 20MB.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 80</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 80 is the recommended setting for thumbnails. At this level, a 1280×720 JPG
                compresses to 80–200KB with no visible quality loss in text, faces, or background
                gradients — the critical elements of any thumbnail.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Check the output size</p>
              <p className="text-sm text-text-muted leading-relaxed">
                After compression, the result card shows the exact file size. If still over 2MB,
                lower quality to 70 and re-compress. Most thumbnails reach under 500KB at quality
                75, well within YouTube&apos;s limit.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              4
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download and upload to YouTube</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Download the compressed thumbnail and upload it directly to YouTube Studio. The
                thumbnail dimensions remain unchanged — 1280×720 — so it displays at full quality in
                all YouTube contexts.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Thumbnail Size Requirements by Platform
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Each platform has different thumbnail specifications. Use the guide below to compress your
          thumbnail to the right size for each platform.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Platform</th>
                <th className="text-left p-3 font-semibold text-text-main">Dimensions</th>
                <th className="text-left p-3 font-semibold text-text-main">File Size Limit</th>
                <th className="text-left p-3 font-semibold text-text-main">Recommended Quality</th>
              </tr>
            </thead>
            <tbody>
              {[
                { platform: 'YouTube', dims: '1280×720px', limit: '2MB', quality: '80' },
                { platform: 'Twitch (stream)', dims: '1920×1080px', limit: '10MB', quality: '85' },
                { platform: 'TikTok cover', dims: '1080×1920px', limit: '10MB', quality: '85' },
                { platform: 'Instagram post', dims: '1080×1080px', limit: '8MB', quality: '80' },
                { platform: 'Facebook', dims: '1200×630px', limit: '8MB', quality: '80' },
                { platform: 'Twitter/X', dims: '1500×500px', limit: '5MB', quality: '80' },
              ].map(({ platform, dims, limit, quality }) => (
                <tr
                  key={platform}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main">{platform}</td>
                  <td className="p-3 text-text-muted">{dims}</td>
                  <td className="p-3 text-text-muted">{limit}</td>
                  <td className="p-3 text-text-muted">Quality {quality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Thumbnails Need Compression</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Platform upload limits',
              desc: 'YouTube rejects thumbnails over 2MB. Many creators hit this limit when exporting high-resolution designs from Canva or Photoshop. Compression gets you under the limit instantly.',
            },
            {
              title: 'Faster loading on mobile',
              desc: 'Thumbnails load across hundreds of video cards on mobile. A 2MB uncompressed thumbnail takes 3× longer to load than an 80KB compressed version — especially on slower connections.',
            },
            {
              title: 'Better CTR from sharp previews',
              desc: 'Compressed thumbnails at quality 80 are visually identical to uncompressed originals on screen. Viewers cannot tell the difference — but your page loads faster.',
            },
            {
              title: 'Storage savings for bulk creators',
              desc: 'Creators publishing daily compress thousands of thumbnails per year. Going from 5MB to 100KB per thumbnail saves gigabytes of storage and transfer costs.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-surface border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Quality Settings for Thumbnails</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The right quality setting depends on your thumbnail content and target file size. Use the
          guide below to pick the right starting point:
        </p>
        <div className="space-y-2">
          {[
            {
              range: 'Quality 85–90',
              use: 'High-detail thumbnails with fine text, complex illustrations, or gradient backgrounds. Output: 200–500KB for 1280×720.',
              label: 'High quality',
              color: 'bg-green-50 border-green-200',
              badge: 'text-green-700 bg-green-100',
            },
            {
              range: 'Quality 75–80',
              use: 'Most YouTube and gaming thumbnails. Faces, bold text, solid colors. No visible difference from original. Output: 80–200KB for 1280×720.',
              label: 'Recommended',
              color: 'bg-blue-50 border-blue-200',
              badge: 'text-blue-700 bg-blue-100',
            },
            {
              range: 'Quality 60–70',
              use: 'When you need under 100KB for form submissions or email. Slight quality reduction — acceptable for profile images and thumbnails viewed at small sizes.',
              label: 'Small size',
              color: 'bg-yellow-50 border-yellow-200',
              badge: 'text-yellow-700 bg-yellow-100',
            },
            {
              range: 'Quality 40–55',
              use: 'Maximum compression. Visible quality loss — use only when file size is the only priority. Output: under 50KB for 1280×720.',
              label: 'Maximum compression',
              color: 'bg-red-50 border-red-200',
              badge: 'text-red-700 bg-red-100',
            },
          ].map(({ range, use, label, color, badge }) => (
            <div key={range} className={`border rounded-xl p-4 space-y-1 ${color}`}>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-text-main">{range}</p>
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${badge}`}>{label}</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">{use}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is the file size limit for YouTube thumbnails?',
              a: 'YouTube requires thumbnails to be under 2MB (2,048KB). The recommended dimensions are 1280×720 pixels (16:9). This tool compresses your thumbnail to under 2MB while keeping the full resolution and visual quality intact.',
            },
            {
              q: 'How do I compress a thumbnail without losing quality?',
              a: 'Set the quality slider to 80–85. At this level, a 1280×720 JPG thumbnail compresses to 80–200KB with no visible quality loss on screen. The before/after comparison lets you verify quality before downloading.',
            },
            {
              q: 'What format should I use for YouTube thumbnails?',
              a: 'JPG is the best format for YouTube thumbnails — smallest file size for photos and graphic designs. PNG is better only if your thumbnail has transparency. WebP is also accepted by YouTube and produces the smallest files.',
            },
            {
              q: 'My thumbnail is already 1280×720 — why is it over 2MB?',
              a: 'Design tools like Photoshop, Canva, and GIMP often export unoptimized files. A 1280×720 PNG from Canva can be 3–10MB. This compressor reduces the file to under 2MB by recompressing the image data — no dimension change needed.',
            },
            {
              q: 'Can I compress thumbnails for Twitch, TikTok, and Instagram?',
              a: 'Yes. This tool compresses any JPG, PNG, or WebP image regardless of platform. Twitch stream thumbnails (up to 10MB), TikTok cover images, and Instagram post thumbnails all benefit from compression for faster loading.',
            },
            {
              q: 'Does compressing a thumbnail reduce its dimensions?',
              a: 'No. This compressor reduces file size only — your thumbnail dimensions (e.g., 1280×720) remain unchanged. Compression removes redundant image data, not pixels.',
            },
            {
              q: 'Is my thumbnail uploaded to a server?',
              a: 'No. All compression runs entirely in your browser using JavaScript. Your thumbnail never leaves your device and is never sent to any server.',
            },
            {
              q: 'What quality setting should I use for gaming thumbnails?',
              a: 'Quality 80 is recommended for gaming thumbnails. Gaming thumbnails have high contrast, bold text, and vivid colors — quality 80 preserves these while reducing file size by 60–70%. For under 500KB, try quality 70.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-3">
        <h2 className="text-base font-bold text-text-main">More Image Tools</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="/compress-image" className="text-primary hover:underline">
            Compress Image
          </Link>
          <span className="text-text-muted">·</span>
          <Link href="/compress-image-to-100kb" className="text-primary hover:underline">
            Compress to 100KB
          </Link>
          <span className="text-text-muted">·</span>
          <Link href="/compress-image-to-200kb" className="text-primary hover:underline">
            Compress to 200KB
          </Link>
          <span className="text-text-muted">·</span>
          <Link href="/compress-image-to-500kb" className="text-primary hover:underline">
            Compress to 500KB
          </Link>
          <span className="text-text-muted">·</span>
          <Link href="/resize-image" className="text-primary hover:underline">
            Resize Image
          </Link>
          <span className="text-text-muted">·</span>
          <Link href="/compress-jpg-online" className="text-primary hover:underline">
            Compress JPG
          </Link>
        </div>
      </div>
    </section>
  )
}
