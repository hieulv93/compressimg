import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForDiscordContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Discord"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does Discord Compress Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">Yes — but only for display, not the original.</strong>{' '}
          Discord re-encodes uploaded images to generate smaller previews for inline display in
          channels and DMs. The original file remains downloadable at full quality. For JPG images
          above ~8MB, Discord may also downscale the inline display version, while keeping the
          original for download.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Discord also applies heavier compression to images pasted directly from the clipboard.
          When you paste a screenshot into a channel, the quality is often reduced significantly
          compared to uploading the same image as a file. Saving the screenshot first and uploading
          it as a file attachment produces noticeably better results.
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 space-y-2 text-sm">
          <p className="font-semibold text-text-main">
            Quick answer: Does Discord compress images?
          </p>
          <ul className="space-y-1 text-text-muted text-xs leading-relaxed">
            <li>
              ✅ <strong className="text-text-main">Preview display:</strong> Yes — Discord
              generates smaller versions for inline channel display
            </li>
            <li>
              ❌ <strong className="text-text-main">Original file:</strong> No — stored and
              downloadable at full quality
            </li>
            <li>
              ⚠️ <strong className="text-text-main">Clipboard paste:</strong> Yes — pasted images
              are compressed more aggressively than uploaded files
            </li>
          </ul>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Pre-compressing before uploading ensures everyone in the channel sees your image at the
          exact quality you intended — without Discord&apos;s re-encoding affecting the result.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Discord File Upload Limits Explained</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Discord free accounts can upload files up to 10MB per attachment. This limit applies to
          images, screenshots, documents, and any other file type. Discord Nitro Basic raises the
          limit to 50MB, and Discord Nitro raises it to 500MB.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Most smartphone photos are 3–6MB — well under the 10MB limit. The limit becomes
          significant for high-resolution screenshots from 4K displays (often 8–15MB), uncompressed
          PNG exports from design tools (20–50MB), and camera photos taken in RAW or maximum quality
          modes. For these cases, compression before upload is the fastest solution.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Account type
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Upload limit
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Free', '10MB per file', 'Default for all users'],
                ['Nitro Basic', '50MB per file', '$2.99/month'],
                ['Nitro', '500MB per file', '$9.99/month'],
                ['Server boost', 'Up to 100MB', 'Depends on server boost level'],
              ].map(([tier, limit, note]) => (
                <tr key={tier} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{tier}</td>
                  <td className="p-3 border border-border text-text-muted">{limit}</td>
                  <td className="p-3 border border-border text-text-muted">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Compress Images for Discord</h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Upload your image',
              desc: 'Click the upload area, drag and drop your image, or paste from clipboard with Ctrl+V. Supports JPG, PNG, and WebP files up to 20MB. Your file never leaves your device.',
            },
            {
              n: '2',
              title: 'Adjust quality',
              desc: 'Set quality to 80 for photos. For screenshots with text (code, UI, game captures), use 75–80 — text remains readable and file size drops significantly. Check the output size shown when compression completes.',
            },
            {
              n: '3',
              title: 'Download and share on Discord',
              desc: 'Download the compressed file. Drag it into any Discord channel, DM, or thread to upload. The compressed image shares as a full inline preview in chat.',
            },
          ].map(({ n, title, desc }) => (
            <li key={n} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {n}
              </span>
              <div>
                <p className="text-sm font-semibold text-text-main">{title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Expected File Size After Compression</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The table below shows typical file size reduction at quality 80 for common Discord image
          types. All results are estimates — actual size depends on image content and complexity.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Image type
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Original size
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  After compression (q80)
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Under 10MB?
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Smartphone photo (12MP)', '4–8MB JPG', '500KB–1.5MB', '✅ Yes'],
                ['4K screenshot (PNG)', '8–20MB', '1–4MB', '✅ Yes'],
                ['1080p game screenshot', '3–8MB PNG', '500KB–1.5MB', '✅ Yes'],
                ['Camera RAW export', '20–50MB JPG', '3–8MB', '✅ Yes'],
                ['Uncompressed PNG design export', '30–100MB', '5–15MB', '⚠️ May need resize'],
              ].map(([type, orig, after, ok]) => (
                <tr key={type} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{type}</td>
                  <td className="p-3 border border-border text-text-muted">{orig}</td>
                  <td className="p-3 border border-border text-text-muted">{after}</td>
                  <td className="p-3 border border-border text-text-muted">{ok}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For very large exports that are still over 10MB after compression, use the{' '}
          <Link href="/resize-image" className="text-primary hover:underline font-medium">
            Resize Image tool
          </Link>{' '}
          to reduce dimensions first, then compress. Halving the width and height reduces file size
          by approximately 75%.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Discord Image Formats — What Displays Inline
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Discord shows some file types as inline image previews and others as download links. For
          images to display inline in chat, they must be in a supported format:
        </p>
        <div className="space-y-2">
          {[
            {
              fmt: 'JPG',
              inline: '✅ Inline preview',
              note: 'Best for photos — small files, good quality',
            },
            {
              fmt: 'PNG',
              inline: '✅ Inline preview',
              note: 'Best for screenshots, logos, transparency',
            },
            {
              fmt: 'GIF',
              inline: '✅ Inline animated',
              note: 'Animated — free accounts limited to 8MB',
            },
            {
              fmt: 'WebP',
              inline: '✅ Inline preview',
              note: 'Supported in Discord desktop and mobile',
            },
            {
              fmt: 'HEIC',
              inline: '❌ Download only',
              note: 'Convert to JPG first for inline preview',
            },
            {
              fmt: 'BMP / TIFF',
              inline: '❌ Download only',
              note: 'Convert to JPG for inline display',
            },
          ].map(({ fmt, inline, note }) => (
            <div key={fmt} className="flex gap-3 text-sm border-b border-border pb-2 last:border-0">
              <span className="font-semibold text-text-main w-16 shrink-0">{fmt}</span>
              <span className="w-36 shrink-0 text-text-muted">{inline}</span>
              <span className="text-text-muted">{note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Other Platform Compressors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image-for-slack',
              label: 'Compress for Slack',
              desc: 'Optimize images for Slack channels — mobile and desktop',
            },
            {
              href: '/compress-image-for-teams',
              label: 'Compress for Teams',
              desc: 'Keep inline channel previews sharp at under 1MB',
            },
            {
              href: '/compress-image-for-whatsapp',
              label: 'Compress for WhatsApp',
              desc: 'Reduce double-compression blur before sending',
            },
            {
              href: '/compress-image-for-email',
              label: 'Compress for Email',
              desc: 'Reduce image size for email attachments',
            },
            {
              href: '/compress-image-to-1mb',
              label: 'Compress to 1MB',
              desc: 'Target exactly under 1MB for any platform',
            },
            {
              href: '/compress-gif-online',
              label: 'Compress GIF',
              desc: 'Reduce GIF size for Discord uploads',
            },
            {
              href: '/blog/how-messaging-apps-compress-images',
              label: 'Do Messaging Apps Compress Images?',
              desc: 'Slack vs Teams vs Discord vs WhatsApp compared',
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
              q: 'What is the Discord file upload size limit?',
              a: 'Discord free accounts can upload files up to 10MB. Discord Nitro Basic raises this to 50MB, and Discord Nitro raises it to 500MB. Server boosts can also increase the limit up to 100MB depending on boost level.',
            },
            {
              q: 'How do I compress a screenshot for Discord?',
              a: "Upload the screenshot (PNG or JPG) to this tool, set quality to 75–80, and download. A 4K screenshot that is 12MB as PNG typically compresses to 1–3MB at quality 80 — well under Discord's 10MB limit — while keeping text and UI elements readable.",
            },
            {
              q: 'Why does Discord say my file is too large?',
              a: 'Your file exceeds the 10MB limit for free accounts. Compress the image using this tool. For very large files (30MB+), resize the image to a smaller resolution first, then compress. Halving the width and height reduces file size by approximately 75% before compression.',
            },
            {
              q: 'Does Discord compress images after I upload them?',
              a: 'Discord re-encodes large JPG images when displaying them inline in chat. The original file remains downloadable at its uploaded size. To control what Discord displays, upload a pre-compressed JPG — Discord will display your version rather than applying its own re-encoding.',
            },
            {
              q: 'How do I reduce GIF size for Discord?',
              a: "GIFs are lossless — traditional quality compression does not apply. To reduce GIF file size: reduce the frame dimensions, cut the duration, reduce frame rate, or convert to animated WebP. For the best results with GIFs under Discord's limit, use a dedicated GIF optimizer that reduces color palette and frames.",
            },
            {
              q: 'Can I use this tool on mobile to compress images for Discord?',
              a: 'Yes. This tool works in mobile browsers on iOS and Android. Open the site in Chrome, Safari, or Firefox on your phone, upload an image from your camera roll or files app, compress, and download. Then share the compressed file directly in the Discord mobile app.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
