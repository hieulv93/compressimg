import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function HomeContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Can You Do with CompressImg?</h2>
        <p>
          CompressImg is a suite of free browser-based image tools that run entirely on your device
          — no file is ever uploaded to a server. Everything happens locally using JavaScript, so
          your images stay private and processing is instant.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          {[
            {
              title: 'Compress Images',
              href: '/compress-image',
              desc: 'Reduce JPG, PNG, and WebP file size by 50–90% without visible quality loss. Adjust quality from 1–100 and see the before/after size comparison instantly.',
            },
            {
              title: 'Resize Images',
              href: '/resize-image',
              desc: 'Change image dimensions to exact pixel sizes or use presets for Instagram, YouTube thumbnails, Twitter headers, and more — without recompressing unnecessarily.',
            },
            {
              title: 'Convert Images',
              href: '/convert-image',
              desc: 'Convert between JPG, PNG, and WebP formats. Also converts HEIC (iPhone photos), BMP, and GIF to standard web formats. Transparency is preserved for PNG and WebP output.',
            },
            {
              title: 'Crop Images',
              href: '/crop-image',
              desc: 'Trim and crop photos to any aspect ratio with preset options for Instagram (1:1, 4:5), YouTube (16:9), Portraits (9:16), and custom dimensions.',
            },
          ].map(({ title, href, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border p-4 space-y-1 hover:border-primary transition-colors group"
            >
              <p className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">
                {title} →
              </p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Use Any CompressImg Tool — 3 Steps
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Open the tool you need',
              body: 'Go to Compress Image, Resize Image, Convert Image, or Crop Image. All tools open instantly — no sign-up, no install. Drag and drop your image onto the upload area, click to browse, or paste with Ctrl+V. Files up to 20MB are accepted.',
            },
            {
              n: '2',
              title: 'Adjust the settings',
              body: 'Each tool has a simple control: a quality slider for compression (default 80), pixel dimensions for resizing, target format for conversion, or crop ratio for cropping. Defaults are pre-set to the most common use case — you can start without changing anything.',
            },
            {
              n: '3',
              title: 'Download your file',
              body: 'Click Download to save the output to your device. The filename includes the tool name (compressed-, resized-, converted-) so you can easily identify processed files. No watermark, no account, no email required.',
            },
          ].map(({ n, title, body }) => (
            <li key={n} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {n}
              </span>
              <div>
                <p className="text-sm font-semibold text-text-main">{title}</p>
                <p className="text-sm text-text-muted leading-relaxed mt-0.5">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Use Browser-Based Image Tools?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Your images never leave your device',
              desc: 'All processing runs in your browser using JavaScript — no file is sent to any server. This is critical for personal photos, unreleased product images, ID documents, and confidential business content. There is no cloud storage, no data retention, and no account with access to your files.',
            },
            {
              title: 'Instant results — no server queue',
              desc: "Browser-based tools process images using your device's own CPU. There's no server queue, no wait time, and no rate limit. A 5MB photo is typically compressed, resized, or converted in under 3 seconds on a modern device.",
            },
            {
              title: 'Works on any device, no install needed',
              desc: 'All CompressImg tools work on Mac, Windows, iPhone, and Android in any modern browser (Chrome, Safari, Firefox). Open the tool, upload your image, download the result — no software to install, no extension to add.',
            },
            {
              title: 'Completely free, no limits',
              desc: 'All tools are free with no file count limits, no daily quota, no paid tier, and no watermarks on output. Process as many images as you need at any time — tools run on your device, not on our servers.',
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
        <h2 className="text-xl font-bold text-text-main">Supported Image Formats</h2>
        <p>
          CompressImg tools support the most common image formats for compression, resizing,
          conversion, and cropping. All processing happens in your browser — no format is stored on
          any server.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Format
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Compression type
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Best for
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Tool
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  fmt: 'JPG / JPEG',
                  type: 'Lossy',
                  use: 'Photos, thumbnails, social media',
                  tool: '/compress-jpg-online',
                  toolLabel: 'Compress JPG',
                },
                {
                  fmt: 'PNG',
                  type: 'Lossless',
                  use: 'Graphics, logos, text overlays',
                  tool: '/compress-png-online',
                  toolLabel: 'Compress PNG',
                },
                {
                  fmt: 'WebP',
                  type: 'Lossy + lossless',
                  use: 'Web images — 25–35% smaller than JPG',
                  tool: '/jpg-to-webp',
                  toolLabel: 'Convert to WebP',
                },
                {
                  fmt: 'HEIC',
                  type: 'Lossy (iPhone)',
                  use: 'iPhone photos — convert before sharing',
                  tool: '/heic-to-jpg',
                  toolLabel: 'HEIC to JPG',
                },
                {
                  fmt: 'GIF',
                  type: 'Lossless (animated)',
                  use: 'Animated images — convert or compress',
                  tool: '/compress-gif-online',
                  toolLabel: 'Compress GIF',
                },
                {
                  fmt: 'BMP',
                  type: 'Uncompressed',
                  use: 'Large raw files — convert to JPG for 90%+ savings',
                  tool: '/bmp-to-jpg',
                  toolLabel: 'BMP to JPG',
                },
              ].map(({ fmt, type, use, tool, toolLabel }, i) => (
                <tr key={fmt} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="border border-border px-3 py-2 font-medium text-text-main">
                    {fmt}
                  </td>
                  <td className="border border-border px-3 py-2">{type}</td>
                  <td className="border border-border px-3 py-2">{use}</td>
                  <td className="border border-border px-3 py-2">
                    <Link href={tool} className="text-primary hover:underline font-medium">
                      {toolLabel}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Compress Images for Specific Platforms</h2>
        <p>
          Different platforms apply different compression when you upload an image. Pre-compressing
          before upload reduces double-compression artifacts and keeps your images sharp where it
          matters.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              href: '/compress-image-for-youtube',
              platform: 'YouTube',
              note: 'Thumbnails under 2MB — strict upload limit',
            },
            {
              href: '/compress-image-for-instagram',
              platform: 'Instagram',
              note: 'Pre-compress to avoid feed and Stories re-encoding',
            },
            {
              href: '/compress-image-for-whatsapp',
              platform: 'WhatsApp',
              note: 'Reduce before sending to prevent blurry delivery',
            },
            {
              href: '/compress-image-for-slack',
              platform: 'Slack',
              note: 'Slack compresses all images — pre-optimize at quality 80',
            },
            {
              href: '/compress-image-for-linkedin',
              platform: 'LinkedIn',
              note: 'Profile photos display at 200×200px — quality 80 ideal',
            },
            {
              href: '/compress-image-for-tiktok',
              platform: 'TikTok',
              note: 'Cover images and profile photos re-encoded on upload',
            },
          ].map(({ href, platform, note }) => (
            <Link
              key={href}
              href={href}
              className="flex items-start gap-2 rounded-xl border border-border p-3 hover:border-primary transition-colors group"
            >
              <span className="text-primary font-semibold group-hover:underline">{platform} →</span>
              <span className="text-text-muted text-xs leading-relaxed">{note}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <FAQItem
          question="What image tools does CompressImg offer?"
          answer="CompressImg offers four free tools: Compress Image (reduce file size up to 90%), Resize Image (change dimensions for any platform), Convert Image (convert between JPG, PNG, WebP, HEIC, BMP), and Crop Image (trim to any ratio or preset). All tools run in your browser — no file is uploaded to any server."
        />
        <FAQItem
          question="Are all CompressImg tools free to use?"
          answer="Yes. All tools are completely free — no account, no watermarks, no file count limit, and no subscription. You can compress, resize, convert, and crop as many images as you need."
        />
        <FAQItem
          question="Do my images get uploaded to a server?"
          answer="No. All processing runs entirely in your browser. Your images never leave your device. No file is sent to any server — making CompressImg safe for personal, confidential, and unreleased content."
        />
        <FAQItem
          question="What image formats does CompressImg support?"
          answer="JPG, PNG, WebP, HEIC (iPhone photos), BMP, GIF, and SVG are supported across CompressImg tools. Output formats depend on the tool: the compressor outputs in the same format as the input; the converter lets you choose JPG, PNG, or WebP as output."
        />
        <FAQItem
          question="Does CompressImg work on iPhone and Android?"
          answer="Yes. All tools work on iPhone and Android in Chrome, Safari, and Firefox. Tap the upload area on any tool page to select from your camera roll. No app installation needed."
        />
        <FAQItem
          question="Is there a file size limit?"
          answer="Yes. All tools accept files up to 20MB. Most smartphone photos (3–8MB) and web images are well within this limit. Files larger than 20MB can be scaled down before processing."
        />
      </div>
    </section>
  )
}
