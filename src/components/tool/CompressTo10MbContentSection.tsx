import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo10MbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 10MB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          When Do You Need to Compress an Image to 10MB?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 10MB limit appears in many everyday situations. Discord free accounts accept files up
          to 10MB. Many email services impose a 10MB per-attachment limit. Real estate listing
          platforms, property management portals, and event booking systems frequently cap photo
          uploads at 10MB. Cloud storage sync tools sometimes flag files above this size. Certain
          CMS platforms set 10MB as the default media upload maximum.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Modern cameras and smartphones often produce files well above this limit. A mirrorless
          camera shooting at full resolution produces JPEGs of 15–30MB per photo. RAW files exported
          from Lightroom or Capture One can reach 50–100MB. Screenshots from 4K and 5K displays
          saved as PNG are often 10–25MB. All of these need to be brought under 10MB for standard
          uploads.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Quality Setting to Use for 10MB</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          10MB is a relatively generous target compared to 100KB or 200KB. Most images can reach it
          at high quality with minimal visible compression. The table below shows expected output
          sizes at different quality settings for common image sizes.
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
                ['1920×1080px', '1–3MB', '800KB–2MB', '500KB–1.5MB'],
                ['3000×2000px', '3–7MB', '2–5MB', '1.5–4MB'],
                ['4000×3000px (12MP)', '5–12MB', '3–8MB', '2–6MB'],
                ['6000×4000px (24MP)', '10–20MB', '6–14MB', '4–10MB'],
                ['8000×5333px (43MP)', '18–35MB', '10–22MB', '7–15MB'],
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
          For most images up to 24MP, quality 85 produces output well under 10MB. For very
          high-resolution files (43MP+), try quality 80 or resize the image first. Use the{' '}
          <Link href="/resize-image" className="text-primary hover:underline font-medium">
            Resize Image tool
          </Link>{' '}
          to reduce dimensions before compressing — halving the width and height removes 75% of the
          pixel data for free.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Sources of Large Image Files</h2>
        <div className="space-y-3">
          {[
            {
              title: 'Mirrorless and DSLR cameras',
              desc: 'Full-frame cameras (Sony A7 series, Canon R series, Nikon Z series) produce JPEGs of 15–30MB per shot at full resolution. RAW files exported to JPEG at maximum quality can reach 50MB. At quality 85, a 25MB camera JPEG typically compresses to 5–8MB — under the 10MB limit with excellent retained quality.',
            },
            {
              title: 'Smartphone Pro/RAW modes',
              desc: 'Modern iPhones and Android flagships offer ProRAW and RAW+ modes that produce 25–75MB files per photo. Standard JPEGs from 48MP and 50MP smartphone cameras are often 12–20MB. Compressing at quality 85 brings these to 3–8MB, which uploads in seconds rather than minutes on mobile networks.',
            },
            {
              title: 'Design and creative exports',
              desc: 'Figma, Adobe XD, Sketch, and similar tools often export PNG files at screen pixel densities (2× or 3×). A 2× export of a 1920×1080px design is 3840×2160px — the PNG can be 20–40MB. Compress at quality 85 to reduce to 2–5MB, or convert to JPG for even smaller output if transparency is not required.',
            },
            {
              title: '4K and 5K display screenshots',
              desc: 'A full-screen screenshot on a 5K iMac (5120×2880px) saved as PNG is typically 15–30MB. On a 4K display, screenshots are 8–20MB. Compress at quality 80 to reduce to 2–5MB with no visible difference at normal viewing sizes.',
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
          Services and Platforms with 10MB Image Limits
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Platform / Service
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
                ['Discord (free)', '10MB per file', 'Nitro raises to 50MB–500MB'],
                [
                  'Gmail attachments',
                  '25MB total',
                  'Individual files usually limited to 10–15MB inline',
                ],
                ['LinkedIn posts', '10MB per image', 'Higher resolution rejected'],
                ['Reddit image posts', '20MB', 'Below 10MB uploads faster on mobile'],
                ['Real estate portals', '10MB typical', 'Varies by platform'],
                ['WordPress default', '8–10MB', 'Configurable by admin'],
                ['Shopify product images', '20MB', 'Recommends under 10MB for performance'],
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
              href: '/compress-image-to-5mb',
              label: 'Compress to 5MB',
              desc: 'Email and messaging app limits',
            },
            {
              href: '/compress-image-to-1mb',
              label: 'Compress to 1MB',
              desc: 'Social media and web uploads',
            },
            {
              href: '/compress-image-to-500kb',
              label: 'Compress to 500KB',
              desc: 'CMS and WordPress uploads',
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
            {
              href: '/compress-image-to-50kb',
              label: 'Compress to 50KB',
              desc: 'Strict upload limits',
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
              q: 'What quality setting should I use to compress to under 10MB?',
              a: 'Start at quality 85 — this is sufficient for most images up to 24MP. If the output is still above 10MB, lower to 80. For very high-resolution files (50MP+), lower to 75 or resize the image dimensions first. The download button shows the exact compressed size before you save.',
            },
            {
              q: 'How do I compress a 20MB photo to under 10MB?',
              a: 'Upload the photo to this tool and set quality to 85. A 20MB JPEG at full camera resolution typically compresses to 5–8MB at quality 85 — under 10MB with minimal visible quality loss. If the file is still over 10MB, try quality 80, or use the Resize Image tool to reduce dimensions first.',
            },
            {
              q: 'Will compressing to 10MB reduce visible quality?',
              a: 'For most images, no. At quality 85, the compression artifacts are below what the human eye can detect on normal screens. The difference between a 20MB original and an 8MB compressed version at quality 85 is imperceptible when viewing the images side by side. Print and archival use cases may benefit from higher quality settings.',
            },
            {
              q: 'Can I compress a PNG file to under 10MB?',
              a: 'Yes. PNG files are compressed by converting to lossy JPEG internally in this tool. Alternatively, for lossless PNG reduction, resize the image to smaller dimensions using the Resize Image tool — removing pixels is free size reduction that does not degrade quality at the displayed size.',
            },
            {
              q: 'What is the difference between compressing to 10MB vs. 1MB?',
              a: '10MB is a large target — most images reach it at quality 85–90 with near-original visual quality. 1MB is aggressive — it requires quality 70–80 for large photos and may require resizing. Use 10MB when you need to satisfy upload limits while preserving maximum quality; use 1MB for web, social media, and sharing where smaller size matters more.',
            },
            {
              q: 'Are my images safe to use with this tool?',
              a: 'Yes. All compression runs entirely in your browser — no image is ever sent to a server. Your photos never leave your device. This is important when working with client photos, unreleased creative work, or personal images that you do not want stored on third-party servers.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
