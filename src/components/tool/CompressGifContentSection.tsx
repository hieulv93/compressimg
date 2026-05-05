import Link from 'next/link'
import FAQItem from './FAQItem'

export default function CompressGifContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing GIF files"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Are GIF Files So Large?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          GIF (Graphics Interchange Format) stores every frame of an animation as a separate indexed
          image, each with up to 256 colors. A 5-second animation at 480×270px running at 15 frames
          per second contains 75 individual frames. Even at a low resolution, this frame count adds
          up rapidly — a 5MB GIF is common for short clips shared on social media. By comparison, an
          equivalent MP4 video is typically 100–300KB.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The GIF format was designed in 1987 and has no modern compression — it cannot take
          advantage of the inter-frame compression that video formats use. Each frame is compressed
          independently using LZW compression, which is efficient for simple flat graphics but
          performs poorly with photographic content or complex gradients. This is why animated GIFs
          from screen recordings or video clips are always far larger than still images of the same
          dimensions.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How Does a GIF Compressor Work?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A GIF compressor (also called a GIF optimizer) reduces file size through two independent
          mechanisms: lossy color reduction and frame rate reduction. Unlike video compression, GIF
          has no inter-frame compression — each frame is a fully independent image, so the
          compressor must optimize each frame separately.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              title: 'Color Palette Reduction (Lossy)',
              desc: 'Each GIF frame can use up to 256 colors. The optimizer merges similar colors into fewer palette entries — at Quality 10, roughly 64 colors are used. Fewer colors = more repeated values = better LZW compression ratio. This is the primary size reduction method.',
            },
            {
              title: 'Frame Rate Reduction',
              desc: 'The optimizer removes every Nth frame from the animation sequence, reducing total frame count. Frame Skip 2 removes every other frame, halving the data. The animation continues to loop — just at half the original frame rate.',
            },
            {
              title: 'LZW Re-encoding',
              desc: 'After color reduction, each frame is re-encoded using LZW compression. Frames with fewer colors and more repeated pixel values compress significantly better. A 256-color frame may be 3× larger than the same frame at 64 colors after LZW.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{title}</p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Best practice for web GIFs: target under 1MB for GIFs used in blog posts and social
          embeds, under 500KB for GIFs used as page decorations. For anything over 2MB, consider{' '}
          <span className="text-text-main font-medium">Frame Skip 2 + Quality 10</span> — this
          combination reliably reduces most GIFs to 20–40% of their original size while keeping the
          animation recognizable.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Animated GIF — Two Methods
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This GIF compressor uses two independent techniques to reduce file size. You can use
          either or both together for maximum size reduction:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Color Palette Reduction (Quality setting)',
              desc: 'Reduces the number of colors from 256 to fewer. Quality 10 uses approximately 64 colors — a reduction that cuts file size by 40–60% with barely visible change for most animations. GIFs with smooth gradients or photographic content lose more quality at low settings; flat graphics and icons tolerate lower quality well.',
            },
            {
              title: 'Frame Rate Reduction (Frame Skip)',
              desc: 'Frame Skip 2 removes every other frame, cutting frame count in half and reducing file size by an additional 30–50%. A GIF originally at 24fps becomes 12fps — still smooth for most content. Frame Skip 3 produces 8fps, which can look choppy for fast motion but is fine for slow animations and text reveals.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{title}</p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For maximum compression: use Quality 10 + Frame Skip 2. A typical 5MB GIF becomes 1–2MB
          using both methods together — a 60–80% reduction. For animations where smoothness matters
          (product demos, logo animations), keep Frame Skip at 1 and only reduce quality.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          GIF File Size Reduction Results — Quality vs Frame Skip
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The table below shows typical file size results for a 5MB GIF (480×270px, 50 frames) at
          different combinations of quality and frame skip settings.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Quality
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Frame Skip
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Result size
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Reduction
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Visual quality
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['20 (high)', '1 (none)', '~3.0MB', '~40%', 'Excellent'],
                ['10 (default)', '1 (none)', '~2.0MB', '~60%', 'Good'],
                ['5 (low)', '1 (none)', '~1.5MB', '~70%', 'Acceptable'],
                ['10 (default)', '2 (every 2nd)', '~1.2MB', '~76%', 'Good (12fps)'],
                ['5 (low)', '2 (every 2nd)', '~0.8MB', '~84%', 'Acceptable (12fps)'],
                ['1 (minimum)', '3 (every 3rd)', '~0.4MB', '~92%', 'Visible artifacts'],
              ].map(([q, fs, size, red, vis]) => (
                <tr key={q + fs} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{q}</td>
                  <td className="p-3 border border-border text-text-muted">{fs}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{red}</td>
                  <td className="p-3 border border-border text-text-muted">{vis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Platform GIF Size Limits — What Each Platform Accepts
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Different platforms have different GIF upload limits. Use these targets when compressing a
          GIF for a specific platform.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Platform
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  GIF limit
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Discord (free)', '8MB', 'Inline display in chat'],
                ['Discord (Nitro)', '50MB', 'Emoji GIFs max 256KB'],
                ['Slack (free)', '5MB', 'File sharing; GIF emoji max 64KB'],
                ['Twitter / X', '5MB', 'Auto-converts to video after upload'],
                ['Reddit', '20MB', 'Older clients may not auto-play'],
                ['WhatsApp', '16MB', 'Plays as looping video on mobile'],
                ['Tenor (search)', '100MB', 'Indexable GIFs for keyboard search'],
              ].map(([platform, limit, notes]) => (
                <tr key={platform} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">
                    {platform}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{limit}</td>
                  <td className="p-3 border border-border text-text-muted">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Use GIF vs Convert to MP4</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          GIF is not always the right format for animations. For most modern use cases, converting a
          GIF to MP4 produces a file 10–50× smaller at higher visual quality. An 8MB GIF can become
          a 200–400KB MP4 with smoother playback.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Keep as GIF when:',
              points: [
                'The platform specifically requires GIF format',
                'You need a simple looping graphic under 3 seconds',
                'The animation has flat colors and limited frames',
                'You are creating a GIF emoji or reaction',
              ],
            },
            {
              title: 'Convert to MP4 when:',
              points: [
                'Animation is longer than 3–5 seconds',
                'Content has photographic quality or many colors',
                'File size must be under 1MB',
                'The platform supports video (most modern platforms do)',
              ],
            },
          ].map(({ title, points }) => (
            <div key={title} className="border border-border rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-text-main">{title}</p>
              <ul className="space-y-1">
                {points.map((p) => (
                  <li key={p} className="text-xs text-text-muted leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Google&apos;s web performance guidelines recommend replacing GIFs with{' '}
          <code className="bg-surface px-1 rounded text-xs">&lt;video loop autoplay muted&gt;</code>{' '}
          in HTML to reduce page load time. A looping MP4 uses 90% less bandwidth than an equivalent
          GIF.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Image and GIF Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image',
              label: 'Compress Image (JPG, PNG, WebP)',
              desc: 'Reduce still image file size with adjustable quality',
            },
            {
              href: '/gif-to-jpg',
              label: 'GIF to JPG',
              desc: 'Convert GIF first frame to a JPEG image',
            },
            {
              href: '/gif-to-png',
              label: 'GIF to PNG',
              desc: 'Convert GIF first frame to a PNG with transparency',
            },
            {
              href: '/compress-images',
              label: 'Batch Image Compressor',
              desc: 'Compress multiple JPG, PNG, WebP files at once',
            },
            {
              href: '/compress-image-for-discord',
              label: 'Compress for Discord',
              desc: 'Optimize images to fit Discord upload limits',
            },
            {
              href: '/compress-image-for-slack',
              label: 'Compress for Slack',
              desc: 'Reduce image size for Slack file sharing',
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
              q: 'How does a GIF compressor reduce file size?',
              a: 'A GIF compressor reduces file size by two methods: color palette reduction (lowering colors from 256 to fewer, which directly reduces the data per frame) and frame rate reduction (skipping frames to reduce the total frame count). Together, these two methods can reduce a GIF to 20–40% of its original size without losing the animation.',
            },
            {
              q: 'Will compressing a GIF remove the animation?',
              a: 'No. Compressing a GIF preserves the animation — all frames continue to play after compression. The Frame Skip option reduces the frame count to produce a smaller file, which lowers the animation frame rate but keeps the animation playing. Frame Skip 2 at 24fps produces 12fps, which is still smooth for most content.',
            },
            {
              q: 'How do I make a GIF smaller without losing quality?',
              a: 'Use Quality 15–20 and Frame Skip 1 (no frame skipping) for the best balance of size and quality. At Quality 15, file size drops by 50–60% with minimal visible color change for most GIFs. For GIFs with simple flat graphics or icons, Quality 10 still looks excellent. Avoid Quality below 5 — color banding becomes visible at that point.',
            },
            {
              q: 'How do I compress a GIF to under 8MB for Discord?',
              a: 'For Discord free tier (8MB limit), start with Quality 10 and Frame Skip 1. Most GIFs under 15MB will compress below 8MB at this setting. If still over 8MB, add Frame Skip 2 — this cuts an additional 40–50% of the file size. A 12MB GIF typically reaches 3–5MB with Quality 10 + Frame Skip 2.',
            },
            {
              q: 'How do I reduce animated GIF size for sharing on social media?',
              a: 'For Twitter (5MB limit) and WhatsApp (16MB), use Quality 10 and Frame Skip 2 for the smallest file while keeping animation. For Slack (5MB), the same settings apply. Twitter automatically converts uploaded GIFs to MP4 video for playback, so the original GIF file size matters only for the upload itself — compress to under 5MB.',
            },
            {
              q: 'Why is GIF compression slower than JPG or PNG compression?',
              a: 'GIF compression processes each frame individually — a 50-frame GIF requires 50 separate encode operations. Additionally, GIF encoding in the browser uses a Web Worker to avoid freezing the tab, which adds a small coordination overhead. A 5MB GIF typically takes 5–20 seconds in the browser. This is normal and depends on the number of frames, not the file size.',
            },
            {
              q: 'What is the GIF color palette and why does it matter for compression?',
              a: 'GIF stores colors using a color palette — a list of up to 256 unique colors that the image is allowed to use. When you reduce quality, the compressor merges similar colors into fewer palette entries, allowing more repetition which compresses better. GIFs with simple flat colors (logos, icons, pixel art) can use 16–32 colors with no visible change. Photos and screen recordings need more colors to look accurate.',
            },
            {
              q: 'Is there a free online tool to compress GIF files without losing animation?',
              a: 'Yes — this tool compresses animated GIFs entirely in your browser at no cost, with no file upload. The animation is always preserved. You can reduce GIF file size by 30–80% by adjusting the quality and frame skip sliders. No account or sign-up is required, and there is no daily limit on the number of GIFs you can compress.',
            },
            {
              q: 'Can I compress a GIF that has already been compressed?',
              a: 'Yes, but with diminishing returns. If a GIF was previously compressed with color reduction (fewer than 256 colors), further quality reduction will produce visible banding and little additional size savings. Frame rate reduction still works effectively on pre-compressed GIFs — Frame Skip 2 will still remove half the frames and cut file size by 30–50% regardless of prior compression.',
            },
            {
              q: 'What is a good target file size for a web GIF?',
              a: 'For inline use in blog posts, emails, and social embeds: under 1MB. For GIFs used as page decorations or background elements: under 500KB. For GIF emoji and reactions: under 64–256KB (Discord emoji limit is 256KB; Slack emoji is 64KB). For GIFs embedded in landing pages: keep under 300KB to avoid PageSpeed score penalties.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
