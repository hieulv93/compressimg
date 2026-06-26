import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForTeamsContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Microsoft Teams"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does Microsoft Teams Compress Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          <strong className="text-text-main">Yes — but only the preview, not the original.</strong>{' '}
          Microsoft Teams automatically generates smaller thumbnail previews for inline display in
          chat and channels. However, the original full-size image is stored in SharePoint and
          remains available for download at its original file size. This means your team members who
          download the image still get the uncompressed original, and the full file counts against
          your organization&apos;s SharePoint storage quota.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Teams also applies additional compression when images are pasted directly from the
          clipboard (copy-paste). In this case, Teams reduces image quality automatically — which
          can make screenshots look blurry. To avoid this, save your image as a file and upload it
          directly instead of pasting.
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 space-y-2 text-sm">
          <p className="font-semibold text-text-main">Quick answer: Does Teams compress images?</p>
          <ul className="space-y-1 text-text-muted text-xs leading-relaxed">
            <li>
              ✅ <strong className="text-text-main">Preview thumbnails:</strong> Yes — Teams
              generates smaller previews for inline display
            </li>
            <li>
              ❌ <strong className="text-text-main">Original file:</strong> No — full-size original
              is stored in SharePoint and available for download
            </li>
            <li>
              ⚠️ <strong className="text-text-main">Clipboard paste:</strong> Yes — Teams compresses
              pasted images, often causing blur
            </li>
          </ul>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Because Teams stores the original, compressing images <em>before</em> uploading is the
          only way to reduce SharePoint storage consumption, speed up loading for everyone in the
          channel, and ensure colleagues receive an optimally sized file.
        </p>
        <p className="text-sm text-text-muted pt-1">
          To reduce Teams storage and share optimally sized files —{' '}
          <a href="#compress-tool" className="text-primary hover:underline font-medium">
            use the compressor above ↑
          </a>
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Compress Images Before Sharing in Microsoft Teams?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Microsoft Teams is used by over 300 million people for daily workplace communication.
          Images shared in Teams channels and chats must load quickly and display clearly for
          everyone — including remote workers on home broadband, VPN users with reduced throughput,
          and mobile users on cellular data. A 10MB photo from a smartphone takes 10–30 seconds to
          load on a throttled VPN connection. Compressed to 500KB, the same image loads in under 2
          seconds on any connection.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Teams integrates with SharePoint for file storage. Large images uploaded to Teams channels
          are stored in the associated SharePoint document library, consuming organizational storage
          quota. In enterprise environments, IT policies often restrict individual file upload sizes
          to prevent storage abuse. Compressing images before sharing keeps channels fast, respects
          storage limits, and reduces bandwidth consumption for all participants.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Microsoft Teams Image Upload Limits</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Feature
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Limit
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'File upload per message',
                  '250GB',
                  'Via SharePoint — practical limit is IT policy',
                ],
                ['Inline image paste', '4MB', 'Images pasted into chat have a 4MB display limit'],
                ['Channel file storage', 'SharePoint quota', 'Typically 25TB per organization'],
                ['Chat image display', 'Any size', 'Large images require click to view fully'],
                ['Mobile upload', 'Network-dependent', 'Large files may fail on poor connections'],
              ].map(([feature, limit, notes]) => (
                <tr key={feature} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{feature}</td>
                  <td className="p-3 border border-border text-text-muted">{limit}</td>
                  <td className="p-3 border border-border text-text-muted">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For optimal Teams performance, keep images under 2MB for general channel use and under 1MB
          for images shared in meeting chats where participants are on video calls with limited
          bandwidth.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Recommended Image Sizes for Microsoft Teams
        </h2>
        <div className="space-y-3">
          {[
            {
              title: 'Screenshots for feedback and review',
              desc: 'Share UI screenshots, bug reports, and design mockups at 1920×1080px or lower at quality 80. This produces files of 150–400KB that load immediately in any Teams channel. For Retina / HiDPI screenshots, scale down to 1920px wide before sharing — Teams will not display more than 1920px wide in the chat view regardless of actual resolution.',
            },
            {
              title: 'Product photos for presentations',
              desc: 'Product images shared for review or included in Teams-based presentations should be compressed to under 1MB. Quality 80 at up to 2000px wide is sufficient for all Teams display sizes and reduces storage consumption. For images that will also be projected in a Teams meeting, quality 80 at 1920×1080px is ideal.',
            },
            {
              title: 'Team and event photos',
              desc: 'Photos from team lunches, events, and company gatherings often get shared in Teams channels. At original smartphone quality (5–10MB), these fill up channel history quickly. Quality 80 compression reduces these to 400KB–1MB — quick to scroll through, easy to download, and fast to display on any connection.',
            },
            {
              title: 'Project documentation images',
              desc: 'Architects, engineers, and designers share technical drawings, floor plans, and project photo updates in Teams. Full-resolution photos from site visits can be 15–25MB each. Compressing at quality 80 brings these to 1–3MB — sufficient for review discussions in Teams without exceeding SharePoint storage limits.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Do Pasted Images Look Blurry in Teams?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          If you paste a screenshot directly into a Teams chat using{' '}
          <strong className="text-text-main">Ctrl+V or Cmd+V</strong>, Teams applies its own
          aggressive compression to the clipboard image before sending. The result is often
          noticeably blurry — text becomes hard to read, fine details disappear, and JPEG artifacts
          appear in flat-color areas.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This happens because clipboard images are passed to Teams as raw bitmap data, and Teams
          re-encodes them at a low quality setting for bandwidth efficiency. The compression is
          applied before you even see the preview in the chat box.
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 space-y-2 text-sm">
          <p className="font-semibold text-text-main">How to avoid blurry pasted images in Teams</p>
          <ul className="space-y-1 text-text-muted text-xs leading-relaxed">
            <li>
              ✅ <strong className="text-text-main">Save as a file first:</strong> Take your
              screenshot, save it as a .jpg or .png, then upload via the attachment button (
              <em>not paste</em>) — Teams delivers uploaded files at much higher quality
            </li>
            <li>
              ✅ <strong className="text-text-main">Pre-compress before pasting:</strong> Compress
              the image at quality 85 using this tool, then paste — gives Teams less room to degrade
              the quality further
            </li>
            <li>
              ✅ <strong className="text-text-main">Use the attachment button:</strong> Click the
              paperclip / attachment icon → upload your image file — always produces sharper results
              than clipboard paste
            </li>
            <li>
              ❌ <strong className="text-text-main">Avoid:</strong> Pasting directly from Print
              Screen or Snipping Tool without saving as a file first
            </li>
          </ul>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          The root cause is the same whether you are pasting a screenshot from Windows Snipping
          Tool, Mac Screenshot, or any design tool like Figma or Photoshop. Saving the image to disk
          and uploading it as a file bypasses Teams&apos; clipboard compression entirely.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Other Platform Compressors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image-for-slack',
              label: 'Compress for Slack',
              desc: 'Optimize images for Slack channels',
            },
            {
              href: '/compress-image-for-discord',
              label: 'Compress for Discord',
              desc: 'Reduce image size for Discord uploads',
            },
            {
              href: '/compress-image-for-email',
              label: 'Compress for Email',
              desc: 'Reduce image size for email attachments',
            },
            {
              href: '/compress-image-for-whatsapp',
              label: 'Compress for WhatsApp',
              desc: 'Optimize photos for WhatsApp sharing',
            },
            {
              href: '/compress-image-to-1mb',
              label: 'Compress to 1MB',
              desc: 'Target exactly under 1MB',
            },
            {
              href: '/compress-image-to-2mb',
              label: 'Compress to 2MB',
              desc: 'Target under 2MB for larger images',
            },
            {
              href: '/blog/how-messaging-apps-compress-images',
              label: 'Do Messaging Apps Compress Images?',
              desc: 'Slack vs Teams vs Discord vs WhatsApp guide',
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
              q: 'Does Microsoft Teams compress images?',
              a: 'Yes. Teams automatically compresses images in two situations: (1) when you paste directly from clipboard — Teams re-encodes the bitmap at a low quality setting, which causes visible blur; (2) when displaying inline previews in channels — Teams generates a compressed thumbnail regardless of the original file size. The original file is stored in SharePoint and remains downloadable at full quality, but the version everyone sees in chat is compressed.',
            },
            {
              q: 'Does Teams reduce image quality?',
              a: 'Yes, noticeably for clipboard pastes. When you copy a screenshot and paste it into Teams with Ctrl+V, Teams applies aggressive lossy compression before sending — fine text becomes hard to read and flat-color areas show JPEG artifacts. For uploaded files, Teams generates a compressed inline preview but keeps the original in SharePoint. The practical impact is that pasted screenshots often look significantly worse than the source.',
            },
            {
              q: 'How can users avoid Teams image compression?',
              a: 'The most effective method is to pre-compress the image before sharing: compress at quality 80 using this tool, then upload via the attachment button (not paste). This gives Teams an already-optimized file that requires minimal further compression. For clipboard pastes specifically, save the screenshot as a file first and upload it — this bypasses the aggressive clipboard re-encoding Teams applies.',
            },
            {
              q: 'How can users send full-quality images in Teams?',
              a: 'To send images at the highest possible quality in Teams: (1) compress to quality 80 using this tool before uploading — this keeps files small enough to load fast while preserving visible sharpness; (2) use the attachment button to upload the file rather than pasting from clipboard; (3) for images that must be pixel-perfect, share a link to the file in SharePoint instead — recipients can download the uncompressed original directly.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
