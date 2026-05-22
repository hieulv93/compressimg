import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function HomeContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is an Online Image Compressor?</h2>
        <p>
          An online image compressor reduces the file size of a JPG, PNG, or WebP image using
          compression algorithms that run entirely in your browser — no upload, no server, no
          waiting in a queue. CompressImg uses JPEG recompression and PNG optimization to shrink
          images by 50–90% with no visible quality loss at quality 80.
        </p>
        <p>
          Unlike desktop software like Photoshop or GIMP, a browser-based image compressor requires
          no installation and works on any device: Mac, Windows, iPhone, and Android. You upload
          your image, set a quality level, and download the compressed file — all in under 10
          seconds.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images Online — 3 Steps
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Open the image compressor',
              body: 'Go to the Compress Image tool. Drag and drop your JPG, PNG, or WebP file onto the upload area, click to browse, or paste with Ctrl+V. Files up to 20MB are accepted.',
            },
            {
              n: '2',
              title: 'Set the quality level',
              body: 'The default quality is 80 — the recommended setting for most use cases. At quality 80, a 5MB photo compresses to 300–600KB with no visible difference on screen. Drag the slider lower for a smaller file or higher for maximum sharpness.',
            },
            {
              n: '3',
              title: 'Download the compressed image',
              body: 'Click Download to save the compressed file to your device. The result card shows the original and compressed file sizes and the percentage saved. No account, no watermark, no email required.',
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
        <h2 className="text-xl font-bold text-text-main">Why Compress Images?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Faster page load times',
              desc: 'Images are the largest assets on most web pages. A page with uncompressed 3MB photos takes 4–8× longer to load than the same page with 300KB compressed images. Faster pages rank higher on Google and reduce bounce rate.',
            },
            {
              title: 'Meet platform file size limits',
              desc: 'YouTube requires thumbnails under 2MB. Many job portals and government forms require photos under 100–200KB. WhatsApp, Slack, and Teams re-compress images you send — pre-compressing at quality 80 prevents double-compression artifacts.',
            },
            {
              title: 'Reduce storage and bandwidth costs',
              desc: 'Uncompressed images consume 3–10× more storage space than optimized ones. For creators publishing hundreds of images per month, compression saves gigabytes of storage and significantly reduces CDN bandwidth costs.',
            },
            {
              title: 'Better Core Web Vitals scores',
              desc: "Google's Core Web Vitals ranking signals measure page speed and user experience. Largest Contentful Paint (LCP) — a key ranking factor — is directly improved by compressing images. Most LCP elements are hero images or thumbnails.",
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
          CompressImg supports the most common image formats for compression and conversion. All
          processing happens in your browser — no format is stored on any server.
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
                  use: 'Animated images — reduce frame count',
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
          question="What is an online image compressor?"
          answer="An online image compressor reduces the file size of JPG, PNG, or WebP images using compression algorithms that run in your browser. No image is uploaded to any server — all processing happens locally on your device. CompressImg reduces file size by 50–90% at quality 80 with no visible quality loss."
        />
        <FAQItem
          question="What image formats does CompressImg support?"
          answer="CompressImg supports JPG, PNG, and WebP for compression. For conversion, it also accepts HEIC, BMP, GIF, and SVG as input formats. All downloads go directly to your device — no server storage."
        />
        <FAQItem
          question="How much does image compression reduce file size?"
          answer="At quality 80, a typical 5MB smartphone photo compresses to 300–600KB — a 85–94% reduction. Results vary by content: photos compress more than graphics with flat colors or text. Use the quality slider to find the right balance for your image."
        />
        <FAQItem
          question="Is CompressImg free to use?"
          answer="Yes. CompressImg is completely free — no account, no watermarks, no file limits. All tools (compress, resize, convert, crop) are available at no cost."
        />
        <FAQItem
          question="Are my images safe when using CompressImg?"
          answer="Yes. All processing runs in your browser — no image is ever sent to a server. Your files never leave your device, making it safe for personal, confidential, and unreleased content."
        />
        <FAQItem
          question="Can I compress images on my phone?"
          answer="Yes. CompressImg works on iPhone and Android in Chrome, Safari, and Firefox. Tap the upload area to select an image from your camera roll, adjust quality, and download — no app needed."
        />
      </div>
    </section>
  )
}
