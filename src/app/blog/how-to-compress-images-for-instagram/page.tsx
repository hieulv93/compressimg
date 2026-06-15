import Link from 'next/link'

export default function CompressImagesForInstagram() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav
        className="text-xs text-text-muted mb-8 flex items-center gap-1.5"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-main">Compress Images for Instagram</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-06-15">June 15, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Compress Images for Instagram Without Losing Quality
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Instagram recompresses every image you upload — often aggressively. The result is blurry
            photos, color-shifted stories, and pixelated portraits. Compressing your images before
            upload, at the right quality setting and correct dimensions, gives Instagram the best
            possible source material to work from. This guide covers the exact settings, dimensions,
            and file sizes for every Instagram format.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              Instagram Image Requirements — Quick Reference
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">Format</th>
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">Dimensions</th>
                    <th className="text-left pb-2 pr-4 font-semibold text-text-main">
                      Aspect ratio
                    </th>
                    <th className="text-left pb-2 font-semibold text-text-main">Target size</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Feed — Square</td>
                    <td className="py-2 pr-4">1080×1080 px</td>
                    <td className="py-2 pr-4">1:1</td>
                    <td className="py-2">&lt; 200 KB</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Feed — Portrait</td>
                    <td className="py-2 pr-4">1080×1350 px</td>
                    <td className="py-2 pr-4">4:5</td>
                    <td className="py-2">&lt; 250 KB</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Feed — Landscape</td>
                    <td className="py-2 pr-4">1080×566 px</td>
                    <td className="py-2 pr-4">1.91:1</td>
                    <td className="py-2">&lt; 200 KB</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Stories &amp; Reels</td>
                    <td className="py-2 pr-4">1080×1920 px</td>
                    <td className="py-2 pr-4">9:16</td>
                    <td className="py-2">&lt; 300 KB</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Profile picture</td>
                    <td className="py-2 pr-4">320×320 px (displayed)</td>
                    <td className="py-2 pr-4">1:1</td>
                    <td className="py-2">&lt; 50 KB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Instagram Makes Your Photos Look Blurry</h2>
            <p className="text-text-muted mb-4">
              Instagram compresses every image automatically on upload. The platform applies its own
              JPEG compression algorithm to reduce storage and bandwidth costs. If your uploaded
              image is already large (high megapixel count, large file size), Instagram&apos;s
              compression is more aggressive — and the quality loss is more visible.
            </p>
            <p className="text-text-muted mb-4">
              The paradox: uploading a 12-megapixel phone photo at full resolution often looks worse
              than uploading a pre-compressed 1080×1350 image. Instagram has to do more compression
              work on the larger file, and the result is more visible quality loss.
            </p>
            <p className="text-text-muted mb-4">Common causes of blurry Instagram photos:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Wrong dimensions</strong> — uploading at
                1920×1440 when Instagram will resize it to 1080 wide anyway
              </li>
              <li>
                <strong className="text-text-main">Wrong file size</strong> — files over 5MB trigger
                heavier platform compression
              </li>
              <li>
                <strong className="text-text-main">HEIC format from iPhone</strong> — Instagram
                converts HEIC to JPG on upload, which introduces additional quality loss on top of
                its own compression
              </li>
              <li>
                <strong className="text-text-main">Slow connection during upload</strong> —
                Instagram may serve a lower-resolution version when the upload quality is uncertain
              </li>
            </ul>
            <p className="text-text-muted">
              Pre-compressing your images at the correct dimensions removes Instagram&apos;s
              guesswork. You control the quality; the platform just stores what you give it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The Right Quality Setting for Instagram Images
            </h2>
            <p className="text-text-muted mb-4">
              For Instagram feed posts and stories: compress to JPG at quality 80–85. This produces
              files in the 150–300 KB range for correctly-sized images, which is exactly what
              Instagram prefers. The platform applies minimal additional compression to images
              already in this range.
            </p>
            <p className="text-text-muted mb-4">
              At quality 80, the difference from quality 100 is invisible on a phone screen.
              Instagram&apos;s own compression adds more visible degradation than the difference
              between quality 80 and quality 90 in most photos.
            </p>
            <p className="text-text-muted mb-4">What to avoid:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Quality below 70</strong> — noticeable
                compression artifacts will survive Instagram&apos;s own compression, resulting in
                blocky or soft-looking images
              </li>
              <li>
                <strong className="text-text-main">Quality 100</strong> — produces large files
                (&gt;1MB) that Instagram compresses heavily anyway; you get the same visual result
                with a worse process
              </li>
              <li>
                <strong className="text-text-main">PNG for photographs</strong> — PNG files are
                larger than JPG for photos and trigger heavier Instagram compression; use JPG for
                all photographic content
              </li>
            </ul>
            <p className="text-text-muted">
              Exception: if your image has text, graphics, or flat-color elements (promotional
              posts, quote cards), use quality 85–90. Text compression artifacts are more visible
              than photo artifacts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Instagram Feed Post: Best Compression Settings
            </h2>
            <p className="text-text-muted mb-4">
              Instagram feed images are displayed at 1080px wide on desktop and 600px wide on most
              phone screens. The platform scales images based on viewport size, but always stores at
              the resolution you uploaded.
            </p>
            <p className="text-text-muted mb-4">Optimal settings for feed posts:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Resize to 1080px width</strong> before
                compressing. Uploading at 1080×1350 (portrait) or 1080×1080 (square) gives Instagram
                exactly what it needs without any rescaling.
              </li>
              <li>
                <strong className="text-text-main">Format: JPG</strong> at quality 80–85.
              </li>
              <li>
                <strong className="text-text-main">Target file size: 150–250 KB</strong> for a
                1080×1080 image.
              </li>
              <li>
                <strong className="text-text-main">Color profile: sRGB</strong>. Instagram converts
                all images to sRGB. If your image is in Adobe RGB or Display P3, colors will shift
                on upload. Convert to sRGB before uploading to prevent this.
              </li>
            </ul>
            <p className="text-text-muted">
              Portrait (4:5 ratio at 1080×1350) is Instagram&apos;s preferred feed format. It takes
              up more vertical screen space in the feed, which increases engagement. If your photo
              is already in portrait orientation, crop to exactly 4:5 before compressing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Instagram Stories and Reels: Compression Guide
            </h2>
            <p className="text-text-muted mb-4">
              Stories and Reels display at 1080×1920 pixels (9:16 aspect ratio). This is a much
              larger canvas than feed posts, and the full-screen display means any compression
              artifacts are more visible than in the feed.
            </p>
            <p className="text-text-muted mb-4">
              For Stories images: compress to JPG quality 85, targeting 200–400 KB. The larger
              canvas needs a slightly higher quality setting to keep the image crisp edge-to-edge.
            </p>
            <p className="text-text-muted mb-4">
              For Reels cover images: the cover frame is shown in the feed at 1080×1350 crop and in
              the Reels tab at square crop. Design the cover so the main subject is centered in the
              middle 1080×1080 area, then export the full 1080×1920 image.
            </p>
            <p className="text-text-muted">
              Stories videos have a 15-second clip limit and a 30MB file size limit. For Story
              images only (no video), the 30MB limit is far above what a correctly-compressed JPG
              will reach — this is only a concern for video.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">iPhone Users: HEIC vs JPG for Instagram</h2>
            <p className="text-text-muted mb-4">
              iPhones shoot in HEIC format by default. Instagram converts HEIC to JPG on upload,
              applying its own quality settings during the conversion. The result is a double
              compression: HEIC-to-JPG conversion plus Instagram&apos;s own compression.
            </p>
            <p className="text-text-muted mb-4">
              The fix: convert your HEIC photos to JPG before uploading to Instagram. This gives you
              control over the conversion quality and removes the double-compression step.
            </p>
            <p className="text-text-muted mb-4">Two ways to change iPhone camera format:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">
                  Settings → Camera → Formats → Most Compatible
                </strong>{' '}
                — switches the camera to shoot JPG by default (slightly larger files but no
                conversion needed)
              </li>
              <li>
                <strong className="text-text-main">Keep HEIC, convert at upload</strong> — use a
                browser-based tool to convert HEIC to JPG at quality 85 before posting to Instagram
              </li>
            </ul>
            <p className="text-text-muted">
              For occasional posts, the converter approach is less disruptive. If you post to
              Instagram daily, switching to JPG camera mode saves the conversion step every time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Compress Images for Instagram: Step by Step
            </h2>
            <p className="text-text-muted mb-4">
              The fastest method for compressing Instagram images in the browser:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Open CompressImg</strong> and upload your photo.
                Drag and drop or click to select.
              </li>
              <li>
                <strong className="text-text-main">Set quality to 80</strong> using the quality
                slider. For images with text, use 85.
              </li>
              <li>
                <strong className="text-text-main">Download the compressed file</strong>. Check the
                output file size — aim for under 300 KB for a 1080×1350 image.
              </li>
              <li>
                <strong className="text-text-main">Upload directly to Instagram</strong> from the
                compressed file. Do not re-edit or re-save the compressed file before uploading
                (each re-save adds another round of JPEG compression).
              </li>
            </ol>
            <p className="text-text-muted">
              If you need to resize first (e.g., your image is 3000×4000 and you need 1080×1350),
              resize before compressing — never after. Resizing an already-compressed JPEG
              introduces additional artifacting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Instagram Carousel Posts: Consistency Matters
            </h2>
            <p className="text-text-muted mb-4">
              Instagram carousels allow up to 10 images in a single post. For carousel posts, all
              images should be compressed to the same settings (same quality, same dimensions, same
              aspect ratio) to ensure consistent appearance across slides.
            </p>
            <p className="text-text-muted mb-4">
              Instagram applies compression independently to each carousel slide. If some slides are
              significantly larger files than others, they will look noticeably different after
              platform compression — inconsistent quality across a carousel looks unprofessional.
            </p>
            <p className="text-text-muted">
              For carousel consistency: compress all slides to JPG quality 80–85 at the same
              dimensions before uploading. Use the same original camera settings or processing for
              all slides to maintain color and tone consistency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Does File Format Matter for Instagram?</h2>
            <p className="text-text-muted mb-4">
              Instagram accepts JPG, PNG, and HEIC. For photographs, JPG is always the right choice:
              smaller files, better compression quality at equivalent sizes, and no conversion step
              on the platform&apos;s end.
            </p>
            <p className="text-text-muted mb-4">
              For graphic design posts (quotes, promotional images, infographics with text): PNG is
              acceptable, but be aware that PNG files are often 3–5× larger than equivalent JPG
              files. Instagram&apos;s compression algorithm handles large PNG files less gracefully
              than JPG at equivalent visual quality levels.
            </p>
            <p className="text-text-muted">
              WebP is not widely supported for Instagram uploads as of 2026. Stick to JPG for all
              photographic content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">File Size Limits for Instagram</h2>
            <p className="text-text-muted mb-4">Instagram&apos;s official limits:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>Feed images: 30 MB maximum</li>
              <li>Stories images: 30 MB maximum</li>
              <li>Profile pictures: 10 MB maximum</li>
            </ul>
            <p className="text-text-muted mb-4">
              These limits are very generous — a correctly-sized and compressed Instagram image will
              never come close to them. The 30 MB limit exists mainly for video uploads.
            </p>
            <p className="text-text-muted">
              For practical purposes, aim for under 500 KB for any Instagram image. Files in the
              150–300 KB range at 1080px width are Instagram&apos;s sweet spot — they require
              minimal additional compression and appear sharp across all devices.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">Compress Your Instagram Photos Free</h2>
            <p className="text-text-muted mb-4">
              CompressImg reduces image file sizes in your browser — no upload to a server, no
              account required. Set quality to 80, download, and upload directly to Instagram.
              Reduce file size by up to 90% while keeping images sharp.
            </p>
            <Link
              href="/compress-image"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors text-sm"
            >
              Compress Image Free →
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Related Guides</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog/why-photos-look-blurry-social-media"
                  className="text-primary hover:underline"
                >
                  Why Do Photos Look Blurry on Social Media?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/compress-images-without-losing-quality"
                  className="text-primary hover:underline"
                >
                  How to Compress Images Without Losing Quality
                </Link>
              </li>
              <li>
                <Link href="/blog/jpg-vs-jpeg" className="text-primary hover:underline">
                  JPG vs JPEG: What&apos;s the Difference?
                </Link>
              </li>
              <li>
                <Link href="/blog/what-is-heic-format" className="text-primary hover:underline">
                  What Is HEIC? How to Open and Convert HEIC Images
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/best-image-format-for-web"
                  className="text-primary hover:underline"
                >
                  Best Image Format for Web in 2026
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
