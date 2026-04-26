import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForLinkedInContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for LinkedIn"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress Images for LinkedIn?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          LinkedIn automatically compresses every image you upload — profile photos, cover images,
          post attachments, and article headers. While LinkedIn&apos;s compression is less
          aggressive than Facebook or Instagram, it still introduces visible softness and color
          shifts on high-resolution originals. A crisp professional headshot or company announcement
          graphic can lose sharpness after LinkedIn&apos;s internal processing, which matters in a
          professional context where image quality reflects directly on your personal brand or
          company credibility.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Pre-compressing your image at quality 80 before uploading to LinkedIn gives the platform a
          file that is already close to its internal delivery target. LinkedIn then applies minimal
          additional compression, preserving more of the original detail. This technique is used by
          recruiters, career coaches, marketers, and brand managers who need their profile photos
          and post images to appear sharp and professional to hiring managers, clients, and business
          connections.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          All compression in this tool happens entirely in your browser — no image is ever sent to
          any server. Your photos are processed locally and downloaded directly to your device.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for LinkedIn — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard (Ctrl+V). Supports
                JPG, PNG, and WebP files up to 20MB. Your image stays on your device — nothing is
                sent to any server.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 80 for LinkedIn</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 80 is the recommended setting for LinkedIn uploads. It reduces file size by
                60–70% while preserving enough detail that LinkedIn&apos;s re-compression produces
                minimal additional quality loss. For PNG graphics with text or logos, quality 85
                preserves sharper edges and clearer text.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download and upload to LinkedIn
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The compressed file downloads directly to your device. Upload it to your LinkedIn
                profile, post, or company page. The pre-optimized file gives LinkedIn&apos;s
                processing less work, resulting in a sharper final image than uploading a large
                uncompressed original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          LinkedIn Image Size Specifications 2025
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          LinkedIn supports different image placements across profiles, company pages, and posts.
          Uploading at the correct dimensions prevents LinkedIn from cropping or downscaling, which
          preserves quality at the displayed resolution.
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
                <td className="border border-border px-3 py-2 font-semibold">Profile Photo</td>
                <td className="border border-border px-3 py-2">400 × 400 px</td>
                <td className="border border-border px-3 py-2">1:1 (circular crop)</td>
                <td className="border border-border px-3 py-2">Under 200 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Background / Cover</td>
                <td className="border border-border px-3 py-2">1584 × 396 px</td>
                <td className="border border-border px-3 py-2">4:1</td>
                <td className="border border-border px-3 py-2">300–600 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Post Image</td>
                <td className="border border-border px-3 py-2">1200 × 627 px</td>
                <td className="border border-border px-3 py-2">1.91:1</td>
                <td className="border border-border px-3 py-2">300–700 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Square Post Image</td>
                <td className="border border-border px-3 py-2">1080 × 1080 px</td>
                <td className="border border-border px-3 py-2">1:1</td>
                <td className="border border-border px-3 py-2">300–700 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Company Logo</td>
                <td className="border border-border px-3 py-2">300 × 300 px</td>
                <td className="border border-border px-3 py-2">1:1</td>
                <td className="border border-border px-3 py-2">Under 100 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Company Cover</td>
                <td className="border border-border px-3 py-2">1128 × 191 px</td>
                <td className="border border-border px-3 py-2">~6:1</td>
                <td className="border border-border px-3 py-2">200–400 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Article Hero</td>
                <td className="border border-border px-3 py-2">1200 × 644 px</td>
                <td className="border border-border px-3 py-2">~1.86:1</td>
                <td className="border border-border px-3 py-2">300–600 KB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          LinkedIn enforces an 8MB file size limit for profile photos and cover images. For post
          images, the limit is approximately 5MB. Use the{' '}
          <Link href="/resize-image" className="text-primary underline">
            Resize Image
          </Link>{' '}
          tool to adjust dimensions before compressing if your original is very large.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How LinkedIn Compresses Your Images</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          LinkedIn converts uploaded images to JPG format for delivery across its platform. Unlike
          Facebook or Instagram, LinkedIn&apos;s compression is relatively conservative — it targets
          larger file sizes (typically 500KB–2MB for post images) and applies less aggressive lossy
          compression than most social platforms. However, profile photos receive heavier
          compression because they are displayed at small sizes (200×200px on desktop) and LinkedIn
          optimizes aggressively for fast loading across mobile apps.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The most noticeable quality loss on LinkedIn occurs with profile photos of high-resolution
          originals. A 3MB DSLR headshot will show visible softness and slight color desaturation
          after LinkedIn&apos;s processing. Pre-compressing to 400×400px at quality 80 — well under
          200KB — gives LinkedIn a file already at its display size, requiring zero downscaling and
          minimal compression. The result is a noticeably sharper profile photo that makes a better
          first impression on recruiters and connections.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Image Format for LinkedIn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG — Best for Photos</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              JPG is the best format for professional headshots, event photos, and team photos on
              LinkedIn. LinkedIn converts all images to JPG internally, so uploading JPG avoids an
              extra encode step. Compress to quality 80 for the best balance of file size and
              sharpness.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Best for Graphics</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG is recommended for company logos, infographics, slide screenshots, and graphics
              with text. PNG preserves sharp edges and clear text that JPG compression blurs. For
              company page logos and cover images with branding text, PNG input produces cleaner
              results after LinkedIn&apos;s conversion.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          LinkedIn Profile Photo Tips for Maximum Sharpness
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Your LinkedIn profile photo is the most-viewed image on your profile — it appears in
          search results, connection requests, messages, and post feeds. Getting it sharp matters
          for professional credibility. Follow these steps for the sharpest result:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">1.</span>
            <span>
              <span className="font-semibold text-text-main">Crop to square before uploading</span>{' '}
              — LinkedIn displays profile photos as circles. Crop to 400×400px with your face
              centered before compressing. Use the{' '}
              <Link href="/crop-image" className="text-primary underline">
                Crop Image
              </Link>{' '}
              tool to set a 1:1 ratio.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">2.</span>
            <span>
              <span className="font-semibold text-text-main">Compress to under 200KB</span> —
              LinkedIn profile photos are displayed at 200×200px, so a 400×400px image at quality 80
              is always under 200KB and provides the best display quality at the rendered size.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">3.</span>
            <span>
              <span className="font-semibold text-text-main">Use sRGB color space</span> — LinkedIn
              may shift colors on wide-gamut (Adobe RGB, P3) images. If your photo was taken with a
              DSLR or edited in professional software, ensure the color profile is converted to sRGB
              before uploading to prevent unexpected color changes.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold flex-shrink-0">4.</span>
            <span>
              <span className="font-semibold text-text-main">Avoid repeated re-uploads</span> — each
              upload-download cycle on LinkedIn stacks additional lossy compression. Keep your
              original file and compress it once directly before uploading.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All compression in this tool runs entirely inside your browser using JavaScript. When you
          select an image to compress for LinkedIn, no file is transmitted to any server. The image
          is processed locally on your computer or phone, and the compressed result downloads
          directly to your device. This makes the tool safe for professional headshots, unreleased
          product images, company branding assets, and confidential presentation graphics. No
          account is required, there is no usage limit, and there is no watermark on any compressed
          output. The tool is completely free for any number of images.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/compress-image-for-facebook"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for Facebook
            </p>
            <p className="text-xs text-text-muted mt-1">
              Optimize photos for Facebook feed and cover before posting.
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
          <Link
            href="/resize-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Resize Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Resize photos to LinkedIn&apos;s exact dimensions before compressing.
            </p>
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-text-main">
            Need to create a LinkedIn banner first?
          </p>
          <p className="text-xs text-text-muted leading-relaxed">
            Design a 1584×396px LinkedIn profile banner with professional templates — then compress
            it here before uploading.
          </p>
        </div>
        <a
          href="https://click-thumb.com/linkedin-banner-maker"
          target="_blank"
          rel="noopener"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-drag-active transition-colors"
        >
          LinkedIn Banner Maker →
        </a>
      </div>

      <CompressForLinkedInFAQSection />
    </section>
  )
}

function CompressForLinkedInFAQSection() {
  const faqs = [
    {
      q: 'Why does my LinkedIn profile photo look blurry?',
      a: 'LinkedIn compresses profile photos during upload and again for delivery across different devices and connection speeds. A high-resolution headshot (3–5MB) is reduced to the display size of 200×200px with additional lossy compression applied. Pre-compressing your photo to 400×400px at quality 80 — under 200KB — gives LinkedIn a file already at its display dimensions, requiring no downscaling. The result is a noticeably sharper profile photo.',
    },
    {
      q: 'What is the best image size for a LinkedIn profile photo?',
      a: 'Upload a square JPG at 400×400px compressed to under 200KB. LinkedIn displays profile photos at 200×200px but stores them at a larger size for retina displays. 400×400px provides the right balance: sharp at all display sizes, small enough that LinkedIn applies minimal re-compression. Make sure your face is centered — LinkedIn applies a circular crop that cuts the corners.',
    },
    {
      q: 'What is the recommended size for a LinkedIn background photo?',
      a: 'LinkedIn background photos (cover images) display at 1584×396px on desktop. Upload at exactly 1584×396px compressed to 300–600KB at quality 80. If you upload a larger image, LinkedIn crops and scales it down, which can shift the visible area of your design. Create your background image at the exact dimensions before uploading to ensure your layout appears as intended.',
    },
    {
      q: 'What file size should LinkedIn images be?',
      a: "For profile photos: under 200KB at 400×400px. For background/cover: 300–600KB. For post images: 300–700KB at 1200×627px or 1080×1080px. LinkedIn accepts files up to 8MB, but uploading at these target sizes gives LinkedIn less to compress, resulting in sharper images across all devices. LinkedIn's compression is more noticeable on mobile, so pre-optimizing matters for mobile viewers.",
    },
    {
      q: 'Does LinkedIn compress images in posts?',
      a: "Yes. LinkedIn compresses all images uploaded to posts, articles, and company pages. Post images are typically delivered at 500KB–2MB depending on dimensions — less aggressive than Facebook or Instagram, but still noticeable on high-resolution originals. Pre-compressing post images to 300–700KB at quality 80 before uploading ensures LinkedIn's processing introduces minimal additional quality loss.",
    },
    {
      q: 'What image format is best for LinkedIn?',
      a: 'JPG at quality 80 is best for professional headshots, event photos, and team photos. LinkedIn converts all images to JPG internally, so uploading JPG avoids an extra encode step. Use PNG for company logos, infographics, slide screenshots, and any image with text overlay — PNG preserves sharp edges and text that JPG compression would soften.',
    },
    {
      q: 'Can I compress LinkedIn images on my phone?',
      a: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required. This is useful for compressing headshots taken on a smartphone before uploading to the LinkedIn app.',
    },
    {
      q: 'Are my LinkedIn images safe to compress with this tool?',
      a: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your professional headshots, company branding assets, and confidential presentation graphics never leave your device. This makes the tool suitable for business-sensitive content that you have not yet published publicly.',
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
