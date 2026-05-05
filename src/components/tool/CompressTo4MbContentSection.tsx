import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo4MbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 4MB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When Do You Need to Compress to 4MB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 4MB limit appears on several file sharing platforms, email attachment systems, and
          media portals. Some property listing websites and real estate management systems cap
          individual photo uploads at 4MB for older portal software. Certain CMS platforms and
          document management systems set 4MB as the default file upload limit. Email services that
          accept large attachments still recommend keeping individual photo attachments under 4MB
          for reliable delivery across all recipient email systems.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Modern cameras make this limit surprisingly difficult to hit with high-quality JPEGs. A
          24MP mirrorless camera shooting at maximum JPEG quality produces files of 12–25MB. A
          full-frame 45MP camera can produce JPEGs of 20–40MB. Compressing at quality 87 brings most
          photos from professional cameras to 2–4MB — within the target while retaining sharpness
          and color accuracy suitable for professional presentation.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Quality Settings for a 4MB Target</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The table below shows expected output sizes at different quality settings for common image
          resolutions. Quality 87 is the recommended starting point for the 4MB target.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Image dimensions
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Quality 90
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Quality 87
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Quality 83
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1920×1080px', '500KB–1.5MB', '400KB–1.2MB', '300KB–900KB'],
                ['3000×2000px (12MP)', '1.5–4MB', '1.2–3MB', '800KB–2.5MB'],
                ['4000×3000px (12MP)', '2–6MB', '1.5–4MB', '1–3MB'],
                ['6000×4000px (24MP)', '5–12MB', '3.5–8MB', '2.5–6MB'],
                ['8000×5333px (43MP)', '10–20MB', '7–14MB', '5–10MB'],
              ].map(([dims, q90, q87, q83]) => (
                <tr key={dims} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{dims}</td>
                  <td className="p-3 border border-border text-text-muted">{q90}</td>
                  <td className="p-3 border border-border text-text-muted">{q87}</td>
                  <td className="p-3 border border-border text-text-muted">{q83}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Images up to 12MP reliably reach the 4MB target at quality 87. For 24MP+ files, try
          quality 83, or use the{' '}
          <Link href="/resize-image" className="text-primary hover:underline font-medium">
            Resize Image tool
          </Link>{' '}
          to reduce dimensions first. A 6000×4000px image resized to 3000×2000px is 75% smaller
          before any compression is applied.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for the 4MB Limit</h2>
        <div className="space-y-3">
          {[
            {
              title: 'Email with photos',
              desc: 'Many corporate email systems and spam filters flag emails with large individual attachments. Keeping each photo under 4MB ensures reliable delivery through gateway filters and avoids triggering recipient-side size limits. A 20-photo selection from a mirrorless camera at full quality would be 200–400MB — compressing each to under 4MB brings the total to 40–80MB, more practical for attachment-based sharing.',
            },
            {
              title: 'Real estate and property portal uploads',
              desc: 'Legacy property listing software and older MLS systems often enforce 4MB per-image limits. Real estate agents shooting with full-frame cameras produce JPEGs of 15–25MB per shot. Compressing to 4MB or under at quality 87 retains the sharpness and tonal range that property buyers expect while meeting the upload constraints of regional listing platforms.',
            },
            {
              title: 'Document management systems',
              desc: 'Corporate document management platforms (SharePoint on older configurations, many legal DMS tools) enforce per-file size limits. Scanned documents, floor plans, and architectural drawings exported as high-resolution JPEGs often exceed 4MB. Compressing at quality 87 brings most scans into the acceptable range.',
            },
            {
              title: 'Stock photo initial submissions',
              desc: 'Some stock photography agencies and editorial platforms require initial review submissions under 4MB. Higher-resolution finals are submitted separately once accepted. Compressing at quality 87 retains sufficient detail for editorial review at typical display sizes while meeting the initial submission file size requirement.',
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
        <h2 className="text-xl font-bold text-text-main">Platforms with 4MB or Similar Limits</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Platform / System
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
                ['Gmail inline image', '5MB', 'Recommends under 4MB for reliable inline display'],
                ['Outlook attachment (preview)', '4–10MB', 'Varies by organization IT policy'],
                ['WhatsApp (original quality)', '16MB', 'Below 4MB loads fast on all connections'],
                ['Instagram (original)', '8MB', 'Quality 87 keeps most photos well under limit'],
                ['Discord nitro upload', '500MB', 'No practical limit for photos'],
                ['Imgur upload', '20MB', 'Compresses above 5MB automatically'],
                ['Squarespace image upload', '3MB', 'Recommended max — compress to 3MB or under'],
              ].map(([platform, limit, note]) => (
                <tr key={platform} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">
                    {platform}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{limit}</td>
                  <td className="p-3 border border-border text-text-muted">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Other Size Targets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image-to-3mb',
              label: 'Compress to 3MB',
              desc: 'CMS and portfolio platforms',
            },
            {
              href: '/compress-image-to-5mb',
              label: 'Compress to 5MB',
              desc: 'Email and messaging apps',
            },
            {
              href: '/compress-image-to-2mb',
              label: 'Compress to 2MB',
              desc: 'Government portals and ID uploads',
            },
            {
              href: '/compress-image-to-1mb',
              label: 'Compress to 1MB',
              desc: 'Social media and web uploads',
            },
            {
              href: '/compress-image-to-500kb',
              label: 'Compress to 500KB',
              desc: 'Strict web and CMS uploads',
            },
            {
              href: '/compress-image-to-10mb',
              label: 'Compress to 10MB',
              desc: 'Discord and email attachments',
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
              q: 'What quality setting should I use to compress to under 4MB?',
              a: 'Start at quality 87 — this works for most images up to 12MP. For 24MP+ files from professional cameras, try quality 83. The download button shows the exact output size before saving, so you can see whether you have hit the 4MB target without downloading first.',
            },
            {
              q: 'How do I compress a 15MB photo to under 4MB?',
              a: 'Upload the photo and set quality to 87. A 15MP JPEG typically compresses to 3–5MB at quality 87. If still above 4MB, lower quality to 83 or use the Resize Image tool to reduce dimensions first — halving width and height removes 75% of file size before any quality compression.',
            },
            {
              q: 'Will compressing to 4MB reduce visible quality?',
              a: 'No. Quality 87 is well above the threshold of perceptible compression. Photos compressed at quality 87 look identical to originals at any normal screen viewing size. Compression artifacts only become visible at quality settings below 70 when examining images at 200%+ zoom on a calibrated monitor.',
            },
            {
              q: 'Can I compress a PNG image to under 4MB?',
              a: 'Yes. This tool converts PNG to compressed JPEG, typically reducing a 10–20MB PNG to 1–3MB at quality 87. If you need to preserve transparency (for logos, UI screenshots with transparency, or design assets with transparent backgrounds), use the Resize Image tool to reduce dimensions instead.',
            },
            {
              q: 'My image is still over 4MB after compressing at quality 87 — what should I do?',
              a: 'Lower quality to 83 first. If still above 4MB, the source image is very high resolution (24MP+) or has very dense detail (landscape photography, macro photography). Use the Resize Image tool to reduce dimensions — a 6000×4000px image scaled to 3000×2000px is 75% smaller before compression even starts.',
            },
            {
              q: 'Are my images safe when using this tool?',
              a: 'Yes. All compression runs entirely in your browser — no image is ever uploaded to a server. Your files never leave your device during processing.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
