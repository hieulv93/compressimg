import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForSlackContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Slack"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Compress Images Before Uploading to Slack?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Slack channels move fast, and large images slow them down. When you upload a 10MB photo
          from your phone, every team member in that channel must wait for it to load — especially
          people on slower connections, mobile data plans, or VPNs. A compressed image of 300KB–1MB
          loads instantly on any connection, displays inline without extra clicks, and keeps your
          team&apos;s workflow moving.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Slack also has file storage limits on free and paid plans. Free workspaces have a 5GB
          total storage cap, and every large image uploaded counts against it. Compressing images to
          under 1MB before uploading extends your storage allowance significantly. A team uploading
          50 compressed photos per week at 500KB each uses 25MB of storage — versus 500MB for
          uncompressed originals.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Slack File Upload Limits and Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Slack Plan
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Max file size
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Storage limit
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Free', '1GB per file', '5GB total', 'Older files auto-deleted after limit'],
                ['Pro', '1GB per file', '10GB per member', 'No auto-deletion'],
                ['Business+', '1GB per file', 'Unlimited', 'Full message and file history'],
                ['Enterprise Grid', '1GB per file', 'Unlimited', 'Admin-configurable limits'],
              ].map(([plan, perFile, storage, notes]) => (
                <tr key={plan} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{plan}</td>
                  <td className="p-3 border border-border text-text-muted">{perFile}</td>
                  <td className="p-3 border border-border text-text-muted">{storage}</td>
                  <td className="p-3 border border-border text-text-muted">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Even on paid Slack plans with generous storage, compressing images improves channel
          performance. The recommended size for Slack images is under 1MB for fast inline loading.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Recommended Image Sizes for Slack</h2>
        <div className="space-y-3">
          {[
            {
              title: 'Screenshots and UI mockups',
              desc: 'For 1920×1080px screenshots, quality 80 produces files of 150–400KB — pixel-clear for reviewing UI details or discussing design changes in Slack without waiting for the image to load. For retina / 2x displays, export at 1920×1080px (not 3840×2160px) before compressing.',
            },
            {
              title: 'Product photos and renders',
              desc: 'For product photography shared in Slack channels for review or approval, quality 80 at up to 2000px wide produces files of 300KB–1MB. This is sharp enough for color accuracy review and detail inspection at Slack preview sizes without consuming significant storage.',
            },
            {
              title: 'Team photos and event photos',
              desc: 'Photos from team events, offsite activities, or photo requests for presentations compress well at quality 80. A 12MP smartphone photo compresses from 5–8MB to 500KB–1MB at quality 80 — fast to load, fine to download, and easy to view inline in any Slack channel.',
            },
            {
              title: 'Design assets and presentations',
              desc: 'Slide screenshots, design proofs, and presentation assets shared for feedback in Slack should be compressed before uploading. Quality 80 retains text legibility at typical Slack preview sizes. For very dense infographics or slides with small text, use quality 85 instead.',
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
              href: '/compress-image-for-teams',
              label: 'Compress for Teams',
              desc: 'Optimize images for Microsoft Teams',
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
              href: '/compress-image-to-500kb',
              label: 'Compress to 500KB',
              desc: 'Target under 500KB for fastest loading',
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
              q: 'What is the best image size for Slack?',
              a: 'For general Slack use, compress images to 300KB–1MB before uploading. This size loads instantly in any Slack channel on any connection including mobile data and VPN. Quality 80 achieves this for most photos while retaining all visual detail needed for typical review and discussion use cases.',
            },
            {
              q: 'Does Slack compress images automatically?',
              a: 'Slack generates smaller preview thumbnails for display in the message thread, but the original file is stored and available for download. The original still counts toward your storage quota, and team members who download the image get the full uncompressed version. Pre-compressing gives everyone the optimally sized file from the start.',
            },
            {
              q: 'Will compressing to quality 80 affect image clarity for design review?',
              a: 'For most design review purposes, quality 80 is sufficient. UI screenshots, product photos, and design mockups all look clear at quality 80 when viewed at Slack preview sizes. If you need to share images where tiny text or fine detail must be perfectly legible, use quality 85 instead.',
            },
            {
              q: 'Can I upload GIF files to Slack?',
              a: 'Yes, Slack supports animated GIF uploads and plays them inline in channels. This compressor does not compress GIFs — for GIF file size reduction, use the Compress GIF tool. For static image uploads, JPG and PNG at quality 80 are optimal.',
            },
            {
              q: 'How much storage do compressed images save on the Slack free plan?',
              a: 'A significant amount. If your team uploads 10 photos per day at 5MB each, that is 50MB/day = 1.5GB/month — filling the 5GB free plan storage in under 4 months. At quality 80, those same photos are 500KB each = 5MB/day = 150MB/month, extending the free plan storage by 10×.',
            },
            {
              q: 'Are my images safe when using this tool?',
              a: 'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your files never leave your device during processing. This is important when sharing internal screenshots, client assets, or confidential product designs.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
