import Link from 'next/link'
import FAQItem from './FAQItem'

export default function CompressTo300KbContentSection() {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-text-muted border-t border-border pt-8">
      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Why Compress an Image to 300KB?</h2>
        <p>
          300KB is one of the most common maximum file size limits across the web. WordPress and
          popular CMS platforms default to a 300KB or 500KB media upload warning. Email newsletters
          and marketing tools (Mailchimp, Campaign Monitor) recommend keeping inline images under
          300KB to avoid slow load times in email clients. Social media platforms also compress
          uploaded images — starting with a file already under 300KB prevents double-compression
          artifacts.
        </p>
        <p>
          Job application portals, government websites, and professional networking sites frequently
          require profile photos under 200–300KB. Hitting this limit while maintaining good visual
          quality is exactly what this tool is designed for.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          What Quality Setting to Use for 300KB
        </h2>
        <p>
          The right quality setting depends on your image dimensions. Larger images require lower
          quality settings to reach 300KB; smaller images can be compressed at higher quality and
          still land under 300KB:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Image dimensions
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Recommended quality
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Expected output size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['800×600px', '85–90', '80–200KB'],
                ['1280×720px', '80–85', '150–280KB'],
                ['1920×1080px', '72–78', '200–300KB'],
                ['2560×1440px', '60–68', '200–320KB — resize first recommended'],
                ['4000×3000px', '50–60', 'Over 300KB likely — resize to 1920px first'],
              ].map(([dims, quality, size]) => (
                <tr key={dims} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{dims}</td>
                  <td className="p-3 border border-border">{quality}</td>
                  <td className="p-3 border border-border">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Start at quality 78 (the default on this page). Check the output size shown after
          compression. If the result is over 300KB, drag the slider left and click{' '}
          <strong className="text-text-main">Re-compress</strong> to try again.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">When Resizing Is Needed First</h2>
        <p>
          If your image is larger than 2000px wide and quality 65 still produces a file over 300KB,
          the issue is pixel count, not quality. A 4000×3000 image at quality 65 can still be
          400–600KB because there are simply too many pixels to store compactly. The solution is to
          resize first:
        </p>
        <ol className="space-y-2 list-decimal list-inside">
          <li>
            Use the{' '}
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image tool
            </Link>{' '}
            to reduce the width to 1920px or less (height adjusts automatically).
          </li>
          <li>Then compress the resized image at quality 75–80 on this page.</li>
          <li>The result will comfortably land under 300KB with excellent visual quality.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          Common Uses for 300KB Compressed Images
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">WordPress and CMS uploads</strong> — WordPress flags
            images over 300KB in the media library. Compressing before upload keeps your media
            library clean and your pages loading fast.
          </li>
          <li>
            <strong className="text-text-main">Email newsletter images</strong> — Email clients load
            images differently from browsers. Images under 300KB load reliably in Gmail, Outlook,
            and Apple Mail without triggering slow-load warnings.
          </li>
          <li>
            <strong className="text-text-main">Social media profile photos</strong> — LinkedIn,
            Facebook, and Instagram accept profile photos up to several MB, but uploading a
            pre-optimized 150–300KB image reduces double-compression and keeps the photo sharp in
            the feed.
          </li>
          <li>
            <strong className="text-text-main">Job applications and professional portals</strong> —
            Many HR systems, LinkedIn, and job boards ask for profile photos under 200–500KB.
            Quality 78 at 1280px typically lands at 200–280KB — ideal for professional use.
          </li>
          <li>
            <strong className="text-text-main">Web performance optimization</strong> — Images are
            the largest contributors to page weight. Compressing all images to under 300KB ensures
            your site meets Google&apos;s LCP recommendations and Core Web Vitals targets.
          </li>
          <li>
            <strong className="text-text-main">Product catalog and e-commerce</strong> — Product
            images displayed at 600–800px on screen never need to be larger than 200–300KB. Keeping
            them compact speeds up shop pages and reduces bandwidth costs.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">300KB vs Other Common Targets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              <Link
                href="/compress-image-to-100kb"
                className="hover:text-primary transition-colors"
              >
                100KB
              </Link>
            </p>
            <p className="text-xs text-text-muted">
              Strict portals, government forms, exam uploads. Requires quality 50–65 — noticeable
              compression at full size but sufficient for ID and form use.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">300KB (this tool)</p>
            <p className="text-xs text-text-muted">
              CMS, email, social media, job portals. Quality 75–80 produces excellent results — the
              best balance of size and visual quality for everyday use.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              <Link
                href="/compress-image-to-500kb"
                className="hover:text-primary transition-colors"
              >
                500KB
              </Link>
            </p>
            <p className="text-xs text-text-muted">
              WordPress uploads, larger web images. Quality 82–88 — near-lossless at typical screen
              sizes. Suitable for hero images and high-quality web use.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            question="What quality setting compresses an image to under 300KB?"
            answer="For a typical 1920px wide photo, quality 72–78 usually produces 200–300KB. Start at quality 78 and check the output size. If still over 300KB, try quality 65–70. For very large photos (4000px+), resize to 1920px first, then compress."
          />
          <FAQItem
            question="Why do I need to compress an image to 300KB?"
            answer="300KB is a common upload limit for WordPress, CMS platforms, email newsletters, job portals, and social media profile images. Compressing to under 300KB ensures your image is accepted without rejection messages and loads quickly."
          />
          <FAQItem
            question="Will compressing to 300KB reduce image quality?"
            answer="At quality 75–80, images compressed to 300KB are visually indistinguishable from the original when viewed on screen. The difference is imperceptible for web use, email, and profile photos. Only very large prints would reveal any quality change."
          />
          <FAQItem
            question="My photo is still over 300KB at quality 70 — what can I do?"
            answer="Resize the image dimensions first. A 5000px photo at quality 70 can still exceed 300KB. Use the Resize Image tool to reduce width to 1920px or less, then re-compress. The result will comfortably be under 300KB."
          />
          <FAQItem
            question="Can I compress PNG to under 300KB?"
            answer="PNG uses lossless compression, so large PNGs may remain above 300KB. For photographs saved as PNG, convert to JPG first using the PNG to JPG tool, then compress. This typically reduces file size by 70–80%."
          />
          <FAQItem
            question="What is the difference between 100KB and 300KB compression?"
            answer="300KB allows higher quality — quality 75–80 is typically sufficient, preserving excellent sharpness. 100KB requires quality 50–65, which can introduce visible softness. Use 300KB for web publishing, email, and CMS. Use 100KB for strict government forms."
          />
          <FAQItem
            question="Are my images uploaded to a server?"
            answer="No. All compression happens entirely in your browser using JavaScript. Your files never leave your device and are never sent to any server."
          />
          <FAQItem
            question="Is there a file size limit?"
            answer="Yes — files up to 20MB are accepted. For files larger than 20MB, resize the dimensions first to bring the file under 20MB, then compress to 300KB."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image-to-100kb',
              label: 'Compress to 100KB',
              desc: 'Hit 100KB limits for government forms and portals',
            },
            {
              href: '/compress-image-to-200kb',
              label: 'Compress to 200KB',
              desc: 'For job applications and profile photos',
            },
            {
              href: '/compress-image-to-500kb',
              label: 'Compress to 500KB',
              desc: 'For WordPress, CMS, and web publishing',
            },
            {
              href: '/resize-image',
              label: 'Resize Image',
              desc: 'Reduce dimensions before compressing large photos',
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
      </section>
    </div>
  )
}
