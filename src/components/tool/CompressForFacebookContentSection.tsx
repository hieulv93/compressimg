import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForFacebookContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Facebook"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress Images for Facebook?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Facebook automatically compresses every photo you upload. When you post a high-resolution
          smartphone photo to your feed, Facebook converts it to JPG, reduces the dimensions if they
          exceed its limits, and applies lossy compression to reduce file size for faster delivery.
          A crisp 10MB original can emerge looking noticeably softer — with visible artifacts in sky
          gradients, skin tones, and fine-detail areas like hair or fabric. This is called
          double-compression: your device already compressed the photo when captured, and Facebook
          compresses it a second time on upload.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Pre-compressing your photo at quality 80 before uploading to Facebook gives the platform a
          smaller, already-optimized file. Facebook&apos;s algorithm then has less room to further
          degrade the image — resulting in noticeably sharper photos on your feed and profile
          compared to uploading uncompressed originals. Pre-compressing also makes uploads faster on
          mobile data connections, reducing failed or stalled uploads.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool processes all compression entirely in your browser. Your photos never leave your
          device, making it safe for personal photos, business content, event photos, and any image
          you are not ready to share with third parties.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Facebook — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your photo</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your image, or paste from clipboard (Ctrl+V).
                Supports JPG, PNG, and WebP files up to 20MB. Your image stays entirely on your
                device — nothing is sent to any server.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 80 for Facebook</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 80 is the optimal setting for Facebook uploads. It reduces file size by
                60–70% while keeping enough detail to survive Facebook&apos;s additional
                compression. For product shots, event flyers, and text-heavy graphics, quality 85
                preserves finer detail. For casual photos and stories, quality 75 is sufficient.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download and post to Facebook</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The compressed file downloads directly to your device. Upload it to Facebook as
                usual — the smaller, pre-optimized file gives Facebook&apos;s algorithm less work,
                producing a sharper result than uploading the uncompressed original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Facebook Image Size Specifications 2025
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Facebook supports a range of image placements, each with different recommended dimensions.
          Uploading at the correct size prevents Facebook from auto-cropping or downscaling, which
          preserves quality at the display resolution.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Placement
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Recommended Size
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Aspect Ratio
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Target File Size
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Feed Photo</td>
                <td className="border border-border px-3 py-2">1200 × 630 px</td>
                <td className="border border-border px-3 py-2">1.91:1</td>
                <td className="border border-border px-3 py-2">300–700 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Profile Photo</td>
                <td className="border border-border px-3 py-2">170 × 170 px</td>
                <td className="border border-border px-3 py-2">1:1 (circular crop)</td>
                <td className="border border-border px-3 py-2">Under 100 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Cover Photo</td>
                <td className="border border-border px-3 py-2">820 × 312 px</td>
                <td className="border border-border px-3 py-2">2.63:1</td>
                <td className="border border-border px-3 py-2">100–400 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Stories</td>
                <td className="border border-border px-3 py-2">1080 × 1920 px</td>
                <td className="border border-border px-3 py-2">9:16</td>
                <td className="border border-border px-3 py-2">500–1000 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Event Cover</td>
                <td className="border border-border px-3 py-2">1920 × 1005 px</td>
                <td className="border border-border px-3 py-2">1.91:1</td>
                <td className="border border-border px-3 py-2">300–800 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">
                  Shared Link Thumbnail
                </td>
                <td className="border border-border px-3 py-2">1200 × 628 px</td>
                <td className="border border-border px-3 py-2">1.91:1</td>
                <td className="border border-border px-3 py-2">200–500 KB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          If your photo dimensions do not match these ratios, use the{' '}
          <Link href="/resize-image" className="text-primary underline">
            Resize Image
          </Link>{' '}
          tool to adjust dimensions first, then compress for upload.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How Facebook Compresses Your Photos</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Facebook targets specific file sizes for different placements to control bandwidth costs
          across its global network. Feed photos are typically compressed to around 100–300KB
          regardless of the original file size. Cover photos may be compressed more lightly.
          Facebook stores multiple versions of each image at different sizes for rendering on
          mobile, tablet, and desktop screens.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The key insight is that Facebook compresses toward a target file size, not a target
          quality. When you upload a 5MB original, Facebook applies heavy compression to reach its
          target — introducing visible artifacts. When you upload a 500KB pre-compressed image,
          Facebook applies much lighter compression to reach the same target, preserving more of the
          original quality. Pre-compressing at quality 80 gives Facebook a file that is already
          close to its distribution target, resulting in noticeably sharper results on the feed.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Image Format for Facebook</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG — Best for Photos</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              JPG is the best format for Facebook photo uploads. Facebook converts all uploaded
              images to JPG for distribution regardless of input format, so uploading as JPG avoids
              an additional re-encoding step. Use JPG for all photographs, portraits, and event
              photos.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Best for Graphics</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG is better for graphics, logos, promotional banners, and images with text. PNG
              preserves hard edges and solid colors without JPG artifacts. Facebook converts PNG to
              JPG for delivery, but the input PNG quality affects the final output — compressing a
              PNG before uploading reduces the conversion artifacts.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">WebP — Not Recommended</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Facebook accepts WebP uploads but converts them to JPG for display. Uploading WebP
              adds an extra conversion step that can introduce additional quality loss. For best
              results, upload in JPG format directly — it is Facebook&apos;s native distribution
              format and requires no internal conversion.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for the Best Facebook Photo Quality
        </h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Upload at 2048px wide for albums:</strong> Facebook
              supports high-quality uploads up to 2048px wide for photo albums. Uploading at 2048px
              enables Facebook to serve a sharper high-resolution version when users click to
              enlarge. Compress at quality 80 at this dimension before uploading.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Enable high-quality uploads in settings:</strong>{' '}
              In the Facebook mobile app, go to Settings → Media → Upload HD. This enables HD photo
              uploads over WiFi. Even with HD mode enabled, pre-compressing reduces upload time and
              gives Facebook&apos;s algorithm a better starting point.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Use sRGB color profile:</strong> Facebook displays
              photos in sRGB color space. If your photo was edited with a wide-gamut profile (Adobe
              RGB or ProPhoto RGB), export to sRGB before uploading to prevent washed-out colors on
              Facebook displays.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Cover photos: upload at 820×312px minimum:</strong>{' '}
              Facebook cover photos display at 820×312px on desktop and 640×360px on mobile. Upload
              at the desktop size and compress to 100–300KB. The center 560×312px area is always
              visible — keep important content in this zone.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Photos Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All compression in this tool runs entirely inside your browser using JavaScript. When you
          select a photo to compress for Facebook, no file is transmitted to any server. The image
          is processed locally and the compressed result downloads directly to your device. This
          makes the tool safe for personal photos, family images, business content, and any image
          you have not yet published. No account is required, there is no usage limit, and there is
          no watermark on any compressed output. The tool is completely free to use for any number
          of images.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/compress-image-for-instagram"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for Instagram
            </p>
            <p className="text-xs text-text-muted mt-1">
              Optimize photos for Instagram feed, Stories, and Reels before posting.
            </p>
          </Link>
          <Link
            href="/compress-image-for-whatsapp"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for WhatsApp
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce photo size before sending on WhatsApp to avoid double-compression.
            </p>
          </Link>
          <Link
            href="/compress-image-for-twitter"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for Twitter
            </p>
            <p className="text-xs text-text-muted mt-1">
              Pre-compress images before tweeting to keep photos sharp on the timeline.
            </p>
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-text-main">
            Need to create a Facebook cover photo first?
          </p>
          <p className="text-xs text-text-muted leading-relaxed">
            Design an 851×315px Facebook cover with templates and custom text — then compress it
            here before uploading.
          </p>
        </div>
        <a
          href="https://click-thumb.com/facebook-cover-maker"
          target="_blank"
          rel="noopener"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-drag-active transition-colors"
        >
          Facebook Cover Maker →
        </a>
      </div>

      <CompressForFacebookFAQSection />
    </section>
  )
}

function CompressForFacebookFAQSection() {
  const faqs = [
    {
      q: 'Why do my Facebook photos look blurry after uploading?',
      a: 'Facebook applies automatic compression to every uploaded photo to control bandwidth costs. When you upload a large, high-resolution original, Facebook compresses it aggressively to reach its target file size — introducing visible softness and artifacts. Pre-compressing at quality 80 before uploading gives Facebook a smaller file that requires less additional compression, resulting in a sharper photo on your feed.',
    },
    {
      q: 'What is the best image size for Facebook posts?',
      a: 'For Facebook feed photos, upload at 1200×630px (1.91:1 ratio) for landscape orientation, or 1080×1080px for square photos. For album photos, upload at up to 2048px wide for the highest quality. For Facebook Stories, use 1080×1920px (9:16 ratio). Images larger than these dimensions are automatically downscaled, wasting upload bandwidth without quality benefit.',
    },
    {
      q: 'What file size should Facebook photos be?',
      a: "Aim for 300–700KB for standard feed photos at quality 80. This is close to Facebook's internal target file size, meaning the platform applies minimal additional compression. For album photos at 2048px wide, 500KB–1MB is appropriate. For cover photos, 100–400KB at the recommended 820×312px dimension is sufficient.",
    },
    {
      q: 'Does Facebook support high-quality photo uploads?',
      a: 'Yes. Facebook has a high-quality upload option in the mobile app (Settings → Media → Upload HD) that allows higher-resolution uploads over WiFi. However, even with HD uploads enabled, Facebook still applies compression. Pre-compressing at quality 80 gives Facebook&apos;s algorithm a better starting point regardless of upload quality setting.',
    },
    {
      q: 'What image format should I use for Facebook?',
      a: 'JPG is the recommended format for Facebook photo uploads. Facebook converts all images to JPG for distribution regardless of input format — uploading as JPG avoids an internal conversion step that can introduce additional quality loss. Use PNG for graphics, logos, and event banners where sharp text and solid colors are important.',
    },
    {
      q: 'How do I upload high quality photos to Facebook?',
      a: 'Follow these steps: (1) Export your photo at 1200–2048px wide, quality 80, in JPG format. (2) Compress with this tool if the file exceeds 1MB. (3) Enable HD uploads in the Facebook app settings. (4) Upload over WiFi rather than mobile data. (5) Use the Facebook app rather than the web browser for better compression handling.',
    },
    {
      q: 'Can I compress Facebook photos on my phone?',
      a: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
    },
    {
      q: 'Are my Facebook photos safe to compress with this tool?',
      a: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing personal, private, and business photos before posting to Facebook.',
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
      <dl className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </dl>
    </div>
  )
}
