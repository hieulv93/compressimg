import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo2MbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 2MB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When Do You Need to Compress to 2MB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 2MB limit is one of the most common upload restrictions on the internet. Government
          portals and visa application systems almost universally enforce a 2MB maximum for photo
          uploads — including passport photo submissions, online ID verification, and immigration
          document portals. University and college admissions platforms set 2MB as the default limit
          for applicant photos. HR onboarding systems, job application forms, and professional
          licensing portals follow the same threshold.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Modern smartphone cameras make this a frequent problem. A standard photo from an iPhone 15
          or Samsung Galaxy S24 is 4–8MB in HEIC or JPEG format. Even after converting HEIC to JPG,
          the file size often remains above 2MB. Compressing at quality 85 brings a typical 6MB
          smartphone photo to 800KB–1.5MB — comfortably under the limit while retaining full visual
          quality for ID and passport use.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Quality Settings for a 2MB Target</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The table below shows expected output sizes at different quality settings for common image
          resolutions. Use these as a starting point — actual size depends on image content.
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
                  Quality 85
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Quality 80
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1920×1080px', '500KB–1.5MB', '300KB–900KB', '200KB–600KB'],
                ['3000×2000px (12MP)', '1.5–4MB', '800KB–2MB', '500KB–1.5MB'],
                ['4000×3000px (12MP)', '2–5MB', '1–2.5MB', '700KB–1.8MB'],
                ['6000×4000px (24MP)', '5–10MB', '2–5MB', '1.5–3.5MB'],
                ['8000×5333px (43MP)', '10–18MB', '5–10MB', '3–6MB'],
              ].map(([dims, q90, q85, q80]) => (
                <tr key={dims} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{dims}</td>
                  <td className="p-3 border border-border text-text-muted">{q90}</td>
                  <td className="p-3 border border-border text-text-muted">{q85}</td>
                  <td className="p-3 border border-border text-text-muted">{q80}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For images up to 12MP, quality 85 reliably produces output under 2MB. For 24MP+ files, try
          quality 80, or use the{' '}
          <Link href="/resize-image" className="text-primary hover:underline font-medium">
            Resize Image tool
          </Link>{' '}
          to reduce dimensions first. Halving width and height removes 75% of pixel data, making
          subsequent compression far more effective.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for the 2MB Limit</h2>
        <div className="space-y-3">
          {[
            {
              title: 'Passport and visa photo uploads',
              desc: 'Government immigration portals, visa application websites, and passport renewal systems almost universally enforce a 2MB limit. ICAO-compliant passport photos must also meet specific dimension requirements (usually 600×600px to 1200×1200px). At quality 85, a 600×600px passport photo is typically 80–150KB — well under the limit.',
            },
            {
              title: 'University and college admissions',
              desc: 'Online application platforms (Common App, UCAS, university portals) require applicant photos under 2MB. Smartphone selfies and portrait photos from modern cameras often arrive at 3–8MB. Quality 85 brings these to 500KB–1.5MB without visible quality loss — important for ID photos that need to look professional.',
            },
            {
              title: 'HR and job application forms',
              desc: 'Many corporate HR portals, government job boards, and recruitment platforms set 2MB as the maximum for CV photos, profile pictures, and supporting document images. A professional headshot from a DSLR at full resolution (8–15MB) compresses to 1–2MB at quality 85.',
            },
            {
              title: 'Professional licensing and certification portals',
              desc: 'Medical, legal, and financial licensing boards require photo uploads for ID cards and certificates. These systems typically enforce strict file size limits of 1–2MB. Compress at quality 85 to meet the limit while keeping the photo clear enough for official ID use.',
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
          Platforms and Systems with 2MB Image Limits
        </h2>
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
                ['Government visa portals', '1–2MB', 'Varies by country'],
                ['Common App (US college)', '2MB', 'Profile photo upload'],
                ['LinkedIn profile photo', '8MB', 'Recommends under 2MB for quality'],
                ['WhatsApp (auto-compress)', '~3MB', 'Compresses above this automatically'],
                ['Telegram (compressed)', '5MB', 'Images above 2MB may be auto-compressed'],
                ['WordPress default upload', '2–8MB', 'Admin-configurable, often 2MB default'],
                ['Joomla default upload', '2MB', 'Default max upload size'],
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
              href: '/compress-image-to-1mb',
              label: 'Compress to 1MB',
              desc: 'Social media and web uploads',
            },
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
              href: '/compress-image-to-500kb',
              label: 'Compress to 500KB',
              desc: 'Strict web and CMS uploads',
            },
            {
              href: '/compress-image-to-200kb',
              label: 'Compress to 200KB',
              desc: 'Job applications and profiles',
            },
            {
              href: '/compress-image-to-100kb',
              label: 'Compress to 100KB',
              desc: 'Government portals and ID photos',
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
              q: 'What quality setting should I use to compress to under 2MB?',
              a: 'Start at quality 85 — this works for most images up to 12MP. For 24MP+ files, try quality 80. The download button shows the exact output size before you save, so you can adjust until you hit the 2MB target without guessing.',
            },
            {
              q: 'How do I compress a 5MB photo to under 2MB?',
              a: 'Upload the photo and set quality to 85. A 5MB JPEG typically compresses to 1–1.5MB at quality 85. If still above 2MB, lower to 80 or use the Resize Image tool to reduce dimensions first — halving width and height cuts file size by 75%.',
            },
            {
              q: 'Will compressing to 2MB affect my passport or ID photo quality?',
              a: 'No. At quality 85, the compression is below the threshold of human perception. For passport and ID photos — which are typically 600×600px to 1200×1200px — a compressed file at quality 85 is visually identical to the original and meets all ICAO photo quality requirements.',
            },
            {
              q: 'Can I compress a PNG photo to under 2MB?',
              a: 'Yes. This tool converts PNG to compressed JPEG, which typically reduces a 5–15MB PNG to under 1.5MB at quality 85. If you need to keep the PNG format (for transparency), use the Resize Image tool to reduce dimensions instead — smaller dimensions produce smaller lossless PNGs.',
            },
            {
              q: 'My image is still over 2MB after compressing at quality 85 — what do I do?',
              a: 'Lower quality to 80 first. If still over 2MB, the source image is very high resolution (24MP+). Use the Resize Image tool to reduce dimensions — a 6000×4000px image resized to 3000×2000px is 75% smaller before compression even starts, making quality 85 easily produce output under 2MB.',
            },
            {
              q: 'Are my images safe when using this tool?',
              a: 'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your photos never leave your device. This is especially important when uploading ID photos, passport images, or personal documents.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
