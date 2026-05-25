import Link from 'next/link'

export default function ResizeGifContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Resizing GIF Images — What to Expect</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          GIF (Graphics Interchange Format) is a legacy format from 1987 still widely used for short
          animations in messaging apps, social media reactions, and forum posts. Resizing a GIF
          changes its pixel dimensions — making it fit within platform upload limits or display
          constraints.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Because browsers cannot re-encode animated GIF frames through the Canvas API, this tool
          outputs GIF files as PNG — a lossless, high-quality static image at the new dimensions. If
          you need to reduce animated GIF file size while preserving the animation, use our{' '}
          <Link href="/compress-gif-online" className="text-primary hover:underline">
            GIF Compressor
          </Link>{' '}
          instead.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When You Need to Resize a GIF</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Profile avatars',
              desc: 'Discord and Slack accept animated GIF avatars up to 128×128px. If your GIF is larger, resize the static version to fit and re-animate it in your GIF editor, or use the compressed smaller original.',
            },
            {
              title: 'Forum and community posts',
              desc: 'Forum platforms like Reddit and phpBB display inline images at 600–800px maximum width. Oversized GIFs are scaled down by the browser, but pre-resizing speeds up page load.',
            },
            {
              title: 'Email signatures and banners',
              desc: 'Animated GIF banners in emails are common for marketing. Standard email banner dimensions are 600px wide. Resize the static frame here and re-animate in a dedicated GIF tool.',
            },
            {
              title: 'Messaging apps',
              desc: 'WhatsApp converts GIFs to MP4 for playback. Telegram displays GIFs up to 1280px. If your GIF exceeds platform limits, reduce dimensions to stay within the accepted range.',
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
        <h2 className="text-xl font-bold text-text-main">GIF vs MP4 vs WebP for Animations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Format</th>
                <th className="text-left p-3 border border-border font-semibold">Animation</th>
                <th className="text-left p-3 border border-border font-semibold">File size</th>
                <th className="text-left p-3 border border-border font-semibold">Best platform</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  fmt: 'GIF',
                  anim: 'Yes (256 colors)',
                  size: 'Large',
                  plat: 'Email, forums, legacy',
                },
                {
                  fmt: 'MP4 / WebM',
                  anim: 'Yes (full color)',
                  size: '5–10× smaller than GIF',
                  plat: 'Web, social, WhatsApp',
                },
                {
                  fmt: 'Animated WebP',
                  anim: 'Yes (full color)',
                  size: '60–70% smaller than GIF',
                  plat: 'Chrome, modern browsers',
                },
                {
                  fmt: 'PNG (static)',
                  anim: 'No',
                  size: 'Small–medium',
                  plat: 'Email, web, universal',
                },
              ].map(({ fmt, anim, size, plat }, i) => (
                <tr key={fmt} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{fmt}</td>
                  <td className="p-3 border border-border text-text-muted">{anim}</td>
                  <td className="p-3 border border-border text-text-muted">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{plat}</td>
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
            <Link href="/compress-gif-online" className="text-primary hover:underline">
              Compress GIF Online
            </Link>{' '}
            — reduce animated GIF file size while preserving animation
          </li>
          <li>
            <Link href="/gif-to-jpg" className="text-primary hover:underline">
              GIF to JPG
            </Link>{' '}
            — convert GIF to JPEG for email and web
          </li>
          <li>
            <Link href="/gif-to-png" className="text-primary hover:underline">
              GIF to PNG
            </Link>{' '}
            — convert GIF to PNG with transparency
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image
            </Link>{' '}
            — resize any format (JPG, PNG, WebP) to custom dimensions
          </li>
          <li>
            <Link href="/resize-image-in-kb" className="text-primary hover:underline">
              Resize Image in KB
            </Link>{' '}
            — resize to an exact file size target
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Can I resize an animated GIF and keep the animation?',
              a: 'Browsers cannot re-encode animated GIF frames via the Canvas API, so this tool outputs a static PNG of the first frame. To resize an animated GIF while preserving animation, use a desktop tool like GIMP or Photoshop. To reduce animated GIF file size, use our GIF Compressor.',
            },
            {
              q: 'What format does the resized GIF download as?',
              a: 'GIF files are output as PNG because browsers cannot re-encode GIF animation through the Canvas API. PNG is lossless and produces a high-quality static image at the new dimensions.',
            },
            {
              q: 'How do I reduce GIF file size without losing animation?',
              a: 'Use our GIF Compressor tool, which reduces colors, optimizes frame differences, and optionally skips frames to make animated GIFs up to 70% smaller while keeping the animation running.',
            },
            {
              q: 'What is the maximum GIF size for Discord?',
              a: 'Discord server emojis must be under 256KB and 128×128px. Profile avatars (Nitro) accept animated GIFs up to 8MB. Server stickers accept GIFs up to 500KB at 320×320px.',
            },
            {
              q: 'Should I use GIF or MP4 for web animations?',
              a: 'MP4 (or WebM) is dramatically better than GIF for web animations — 5–10× smaller file size at better quality with full color. Use GIF only when the platform requires it (email, some forums). For web pages, always prefer <video autoplay loop muted> with MP4/WebM.',
            },
            {
              q: 'Are my GIF files uploaded to a server?',
              a: 'No. All processing happens entirely in your browser using the Canvas API. Your files are never sent to any server.',
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
