import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForTeamsContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Microsoft Teams"
    >
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
              q: 'What is the best image size for Microsoft Teams?',
              a: 'For general Teams use, compress images to 500KB–1MB before sharing. This loads instantly in any Teams channel on any connection including VPN and mobile data. For screenshots and diagrams, quality 80 at 1920×1080px produces files of 150–400KB that display crisply at any Teams window size.',
            },
            {
              q: 'Does Teams compress images automatically?',
              a: 'Teams generates preview thumbnails for inline display, but stores the original file in SharePoint. The original counts toward organizational storage quota, and team members who download the image get the full-size original. Pre-compressing ensures everyone gets an optimally sized file without the need to download large originals.',
            },
            {
              q: 'Why do my pasted images look blurry in Teams?',
              a: 'Teams applies its own compression to images pasted directly from clipboard. To maintain quality, save your screenshot as a file first and then upload it — this bypasses Teams clipboard compression. Alternatively, use quality 85 when compressing before pasting to give Teams more quality headroom.',
            },
            {
              q: 'Can I share PNG screenshots in Teams without compressing?',
              a: 'PNG is lossless but files are larger. A 1920×1080px screenshot as PNG is typically 500KB–3MB depending on content. As JPEG at quality 80, the same screenshot is 100–400KB. For screenshots with text that must remain sharp, quality 80 JPEG retains legibility at Teams display sizes.',
            },
            {
              q: 'Our IT policy restricts uploads to 4MB per file — how do I comply?',
              a: 'Set quality to 80 in this compressor. For most photos, quality 80 produces files well under 4MB. For very high-resolution source images (24MP+), use quality 80 and also resize dimensions to 3000px wide maximum using the Resize Image tool. Check the download button for the exact output size before uploading.',
            },
            {
              q: 'Are my images safe when using this tool?',
              a: 'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your files never leave your device during processing. This is important when sharing internal corporate screenshots, client deliverables, or confidential project assets.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
