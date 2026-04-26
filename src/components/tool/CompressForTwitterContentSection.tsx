import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForTwitterContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Twitter and X"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress Images for Twitter / X?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Twitter (now X) automatically compresses every image uploaded to the platform. When you
          attach a high-resolution photo to a tweet, Twitter converts it to WebP or JPG and reduces
          the file size to fit its delivery targets — often down to 300–500KB regardless of the
          original. A crisp 8MP photo from your smartphone can emerge noticeably softer on the tweet
          timeline, with visible compression artifacts in gradients, fine detail, and text areas.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Pre-compressing your image at quality 80 before uploading to Twitter gives the platform a
          file that is already close to its internal size target. Twitter then applies minimal
          additional compression, preserving more of the original detail. This technique is commonly
          used by photographers, designers, and content creators who need their images to look sharp
          on the tweet timeline without the visible softness introduced by Twitter&apos;s automatic
          processing.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          All compression in this tool happens entirely in your browser — no image is ever sent to
          any server. Your photos are processed locally and downloaded directly to your device.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Twitter / X — 3 Simple Steps
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
              <p className="text-sm font-semibold text-text-main">Set quality to 80 for Twitter</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 80 is the recommended setting for Twitter image uploads. It reduces file
                size by 60–70% while preserving enough detail to survive Twitter&apos;s
                re-compression with minimal additional quality loss. For PNG graphics with text,
                quality 85 preserves sharper edges.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download and attach to tweet</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The compressed file downloads directly to your device. Attach it to your tweet as
                usual. The pre-optimized file gives Twitter&apos;s algorithm less work, producing a
                sharper image on the timeline than uploading an uncompressed original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Twitter / X Image Size Specifications 2025
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Twitter supports different image placements, each with specific recommended dimensions.
          Uploading at the correct size prevents Twitter from cropping or downscaling your image,
          which preserves quality at the displayed resolution.
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
                <td className="border border-border px-3 py-2 font-semibold">Tweet Image</td>
                <td className="border border-border px-3 py-2">1200 × 675 px</td>
                <td className="border border-border px-3 py-2">16:9</td>
                <td className="border border-border px-3 py-2">300–700 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Profile Photo</td>
                <td className="border border-border px-3 py-2">400 × 400 px</td>
                <td className="border border-border px-3 py-2">1:1 (circular crop)</td>
                <td className="border border-border px-3 py-2">Under 100 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Header / Banner</td>
                <td className="border border-border px-3 py-2">1500 × 500 px</td>
                <td className="border border-border px-3 py-2">3:1</td>
                <td className="border border-border px-3 py-2">200–600 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">
                  Single Image (tall)
                </td>
                <td className="border border-border px-3 py-2">1200 × 1200 px</td>
                <td className="border border-border px-3 py-2">1:1</td>
                <td className="border border-border px-3 py-2">300–700 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">
                  4-image grid (each)
                </td>
                <td className="border border-border px-3 py-2">1200 × 675 px</td>
                <td className="border border-border px-3 py-2">16:9</td>
                <td className="border border-border px-3 py-2">200–500 KB each</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Twitter enforces a maximum file size of 5MB for images in tweets. PNG files above 5MB are
          rejected. Use the{' '}
          <Link href="/resize-image" className="text-primary underline">
            Resize Image
          </Link>{' '}
          tool to adjust dimensions before compressing if your original is very large.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How Twitter Compresses Your Images</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Twitter converts all uploaded images to WebP format for delivery in modern browsers, and
          JPG as a fallback for older browsers. This conversion happens server-side regardless of
          what format you upload. Twitter targets a specific file size for each image type — tweet
          images are typically delivered at 300–500KB.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          When you upload a large uncompressed JPG (3–8MB), Twitter applies heavy lossy compression
          to reach its 300–500KB target — introducing visible banding in sky areas, ringing around
          text, and softness in fine-detail regions. When you upload a pre-compressed 500KB JPG,
          Twitter applies little or no additional compression since the file is already at its
          target size. The resulting image on the timeline retains significantly more of the
          original sharpness. This is why professional photographers and visual artists pre-compress
          images before tweeting rather than uploading camera originals directly.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Image Format for Twitter / X</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG — Best for Photos</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              JPG is the best format for photographs on Twitter. Twitter converts images to WebP for
              delivery, so uploading JPG or PNG produces similar results. JPG is smaller than PNG at
              equivalent quality for photos, making it faster to upload and giving Twitter&apos;s
              algorithm a better starting file.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Best for Graphics</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG is recommended for screenshots, infographics, memes, and graphics with text or
              flat colors. PNG preserves hard edges and sharp text that JPG compression would blur.
              Twitter&apos;s WebP conversion of PNG input generally preserves more graphic detail
              than the same image uploaded as JPG.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">GIF — For Animations</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Twitter supports animated GIFs up to 15MB. GIF uploads are converted to MP4 video for
              delivery, which is why the &quot;GIF&quot; badge appears on animated tweets. For still
              images, use JPG or PNG rather than GIF — GIF is limited to 256 colors and produces
              poor quality for photographs.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All compression in this tool runs entirely inside your browser using JavaScript. When you
          select an image to compress for Twitter, no file is transmitted to any server. The image
          is processed locally on your computer or phone, and the compressed result downloads
          directly to your device. This makes the tool safe for unreleased photography, brand
          assets, promotional graphics, and personal photos. No account is required, there is no
          usage limit, and there is no watermark on any compressed output. The tool is completely
          free for any number of images.
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
              Optimize photos for Facebook feed, cover, and Stories before posting.
            </p>
          </Link>
          <Link
            href="/compress-image-for-instagram"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for Instagram
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce photo size before posting on Instagram to avoid double-compression.
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
              Resize photos to Twitter&apos;s recommended dimensions before compressing.
            </p>
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-text-main">
            Need to create a Twitter/X header first?
          </p>
          <p className="text-xs text-text-muted leading-relaxed">
            Design a 1500×500px Twitter header with templates and custom text — then compress it
            here before uploading.
          </p>
        </div>
        <a
          href="https://click-thumb.com/twitter-header-maker"
          target="_blank"
          rel="noopener"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-drag-active transition-colors"
        >
          Twitter Header Maker →
        </a>
      </div>

      <CompressForTwitterFAQSection />
    </section>
  )
}

function CompressForTwitterFAQSection() {
  const faqs = [
    {
      q: 'Why do my Twitter photos look blurry after uploading?',
      a: 'Twitter automatically compresses all uploaded images to control bandwidth. When you upload a large, high-resolution original, Twitter applies heavy lossy compression to reduce the file to its 300–500KB target — introducing visible softness, banding, and artifacts. Pre-compressing at quality 80 gives Twitter a file already near its target size, requiring minimal additional compression and preserving more of the original sharpness on the timeline.',
    },
    {
      q: 'What image size is best for Twitter posts?',
      a: 'For tweet images, upload at 1200×675px (16:9 ratio) for landscape photos, or 1200×1200px for square images. For your Twitter header/banner, use 1500×500px. Profile photos should be 400×400px square — Twitter applies a circular crop for display. Uploading at these exact dimensions prevents Twitter from resizing your image, which preserves quality.',
    },
    {
      q: 'What file size should Twitter images be?',
      a: "Twitter enforces a 5MB limit for images attached to tweets. For best quality, compress photos to 300–700KB at quality 80 before uploading. This is close to Twitter's internal delivery target, meaning the platform applies minimal additional compression. Files under 1MB upload faster on mobile and give Twitter's compression algorithm a better starting point.",
    },
    {
      q: 'Does Twitter convert images to WebP?',
      a: "Yes. Twitter converts all uploaded images to WebP format for delivery in modern browsers, and falls back to JPG for older browsers. This happens server-side regardless of what format you upload. Because Twitter re-encodes your image anyway, uploading a pre-compressed JPG or PNG at quality 80 gives the best results — Twitter's WebP conversion of an already-optimized file introduces less additional quality loss.",
    },
    {
      q: 'What is the best image format to upload to Twitter?',
      a: "For photographs, upload JPG at quality 80. For screenshots, infographics, and graphics with text, upload PNG — Twitter's conversion of PNG input to WebP generally preserves sharper text than converting from JPG. Avoid uploading WebP directly to Twitter, as the double WebP encoding may introduce additional artifacts.",
    },
    {
      q: 'How many images can I attach to one tweet?',
      a: "Twitter allows up to 4 images per tweet. When you attach multiple images, Twitter displays them in a 2×2 grid. Each image is compressed individually. For 4-image tweets, compress each photo to 200–500KB — this keeps total upload size manageable and gives Twitter's algorithm less to compress for each individual frame.",
    },
    {
      q: 'Can I compress Twitter images on my phone?',
      a: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
    },
    {
      q: 'Are my Twitter images safe to compress with this tool?',
      a: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing unreleased brand assets, promotional graphics, personal photos, and any content you have not yet published publicly.',
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
