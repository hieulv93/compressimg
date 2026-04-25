import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForInstagramContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Instagram"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress Images for Instagram?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Instagram automatically re-compresses every photo you upload. When you share a 10MB
          smartphone photo on Instagram, the platform strips EXIF metadata, resizes the image to fit
          its resolution limits, and applies its own lossy compression algorithm — often reducing a
          crisp original to a visibly softer result. This is called double-compression: your phone
          already compressed the photo when you took it (JPG), and Instagram compresses it a second
          time when you upload it.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The solution is to pre-compress your image at quality 80 before uploading. When Instagram
          receives a file that is already optimally compressed, its algorithm has less room to
          degrade the image further. The result is a noticeably sharper photo on your feed compared
          to uploading an uncompressed original. Pre-compressing also reduces upload time on mobile
          data, which means fewer upload failures on slow connections.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool processes your images entirely in your browser — nothing is uploaded to any
          server. Your photos never leave your device during compression, making it completely safe
          for personal photos, professional photography portfolios, and brand content.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Instagram — 3 Simple Steps
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
                Supports JPG, PNG, and WebP files up to 20MB. Your image stays on your device —
                nothing is sent to any server.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Set quality to 80 for Instagram
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 80 is the recommended setting for Instagram. It reduces file size by 60–70%
                while preserving sharpness that survives Instagram&apos;s additional compression.
                For photos with flat backgrounds or minimal detail (product shots, text graphics),
                quality 75 can be used without any visible difference.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download and upload to Instagram
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The compressed file downloads directly to your device. Upload it to Instagram using
                the app. Avoid screenshot sharing — screenshots add an extra generation of quality
                loss on top of Instagram&apos;s compression.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Instagram Image Size Specifications 2025
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Instagram crops or resizes images that do not match its accepted dimensions. Uploading at
          the correct resolution prevents automatic cropping and gives Instagram&apos;s algorithm
          the least amount of work to do, resulting in the best possible displayed quality.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Format
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
                <td className="border border-border px-3 py-2 font-semibold">Feed — Square</td>
                <td className="border border-border px-3 py-2">1080 × 1080 px</td>
                <td className="border border-border px-3 py-2">1:1</td>
                <td className="border border-border px-3 py-2">300–800 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Feed — Portrait</td>
                <td className="border border-border px-3 py-2">1080 × 1350 px</td>
                <td className="border border-border px-3 py-2">4:5</td>
                <td className="border border-border px-3 py-2">400–900 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Feed — Landscape</td>
                <td className="border border-border px-3 py-2">1080 × 566 px</td>
                <td className="border border-border px-3 py-2">1.91:1</td>
                <td className="border border-border px-3 py-2">200–600 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">
                  Stories &amp; Reels
                </td>
                <td className="border border-border px-3 py-2">1080 × 1920 px</td>
                <td className="border border-border px-3 py-2">9:16</td>
                <td className="border border-border px-3 py-2">500–1000 KB</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Profile Photo</td>
                <td className="border border-border px-3 py-2">320 × 320 px</td>
                <td className="border border-border px-3 py-2">1:1 (circular crop)</td>
                <td className="border border-border px-3 py-2">Under 200 KB</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Carousel</td>
                <td className="border border-border px-3 py-2">1080 × 1080 px</td>
                <td className="border border-border px-3 py-2">1:1</td>
                <td className="border border-border px-3 py-2">300–700 KB each</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          If your photo dimensions do not match Instagram&apos;s ratios, use the{' '}
          <Link href="/resize-image" className="text-primary underline">
            Resize Image
          </Link>{' '}
          tool to adjust dimensions first, then compress for upload.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How Instagram Double-Compresses Your Photos
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Instagram applies compression based on a target file size rather than a fixed quality
          level. When you upload a large, high-quality image, Instagram aggressively compresses it
          to hit its bandwidth targets — sometimes down to quality levels below 70, which introduces
          visible artifacts and softness, particularly in areas with fine detail like hair, fabric
          texture, or foliage.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          When you pre-compress at quality 80 and upload an image that is already 300–600KB,
          Instagram&apos;s compression step finds less room to reduce quality further — because the
          file is already close to its target size. The result on the feed is noticeably sharper
          than uploading a raw 5–10MB photo and letting Instagram decide how much to compress.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This technique is widely used by professional photographers and social media managers to
          maintain image quality on the platform despite Instagram&apos;s automatic processing.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Image Format for Instagram</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG — Best for Photos</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              JPG is the optimal format for Instagram photo uploads. It compresses photographs
              efficiently, and Instagram&apos;s own algorithm handles JPG input best. Use JPG for
              portraits, landscapes, product photos, and all camera photos.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Best for Graphics</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG is ideal for Instagram graphics, quote cards, and images with text. PNG preserves
              crisp edges on text and solid colors without JPG artifacts. However, PNG files are
              larger — compress before uploading to reduce upload time.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">WebP — Not Recommended</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Instagram does not officially support WebP uploads. The app may convert WebP to JPG
              automatically, adding an extra re-encoding step. For best results, use JPG or PNG when
              uploading to Instagram, not WebP.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for the Best Instagram Image Quality
        </h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Upload at 1080px width:</strong> Instagram
              downscales images wider than 1080px. Resize to exactly 1080px wide before compressing
              — this gives the algorithm no resizing work to do, preserving more quality.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Use quality 80 as a baseline:</strong> Quality 80
              provides the best balance between file size and sharpness after Instagram&apos;s
              re-compression. Going higher (85–90) gives diminishing returns; going lower (below 70)
              stacks artifacts on top of Instagram&apos;s own compression.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">
                Use the Instagram app, not the web uploader:
              </strong>{' '}
              The Instagram app has better image handling than the web interface. Mobile app uploads
              preserve more quality for equivalent file sizes.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Avoid double-exporting from editing apps:</strong>{' '}
              If you edit in Lightroom or VSCO and export to camera roll, then re-open and upload
              from the camera roll, you add another compression round. Export directly from editing
              software at quality 80–85 and upload that file directly.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Portrait orientation gets more feed space:</strong>{' '}
              4:5 portrait (1080×1350px) fills more of the mobile screen than square or landscape
              formats, getting more visual attention. Compress portrait images to 400–700KB for
              optimal quality and upload speed.
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
          select a photo to compress for Instagram, no file is transmitted to any server. The image
          is processed locally on your computer or phone, and the compressed result downloads
          directly to your device. This makes the tool safe for personal photos, client images, and
          unreleased creative work that you are not yet ready to share publicly. There is no account
          required, no usage limit, and no watermark on the compressed output. The tool is
          completely free to use for any number of images.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/compress-image-for-whatsapp"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for WhatsApp
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce photo size before sending on WhatsApp to prevent double-compression.
            </p>
          </Link>
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
        </div>
      </div>

      <CompressForInstagramFAQSection />
    </section>
  )
}

function CompressForInstagramFAQSection() {
  const faqs = [
    {
      q: 'Why do my Instagram photos look blurry after uploading?',
      a: 'Instagram applies automatic compression to every uploaded photo. When you upload a large, high-resolution image, Instagram aggressively reduces the file size using lossy compression — often introducing visible softness and artifacts. Pre-compressing your photo at quality 80 before uploading gives Instagram a smaller, already-optimized file that requires less re-compression, resulting in a noticeably sharper photo on your feed.',
    },
    {
      q: 'What is the best image size for Instagram?',
      a: 'For Instagram feed photos, upload at 1080px wide. Square photos should be 1080×1080px, portrait photos 1080×1350px (4:5 ratio), and landscape photos 1080×566px. For Stories and Reels, use 1080×1920px (9:16 ratio). Images wider than 1080px are downscaled by Instagram, and images that do not match supported aspect ratios are automatically cropped.',
    },
    {
      q: 'What file size should Instagram photos be?',
      a: 'Aim for 300–800KB for square and portrait feed photos at quality 80. This is small enough that Instagram applies minimal additional compression, while remaining sharp enough to display well on high-resolution phone screens. For Stories and Reels, 500–1000KB is acceptable. Very large files (over 5MB) trigger more aggressive Instagram compression.',
    },
    {
      q: 'Does Instagram support WebP images?',
      a: 'Instagram does not officially support WebP uploads. Uploading a WebP file may result in the app converting it to JPG internally, adding an extra generation of lossy compression. For best results on Instagram, always upload in JPG format for photos and PNG for graphics with text or solid colors.',
    },
    {
      q: 'How do I upload high quality photos to Instagram?',
      a: 'Use these steps for best quality: (1) Edit your photo in Lightroom, VSCO, or your preferred app. (2) Export at quality 80, 1080px wide in JPG format. (3) Compress with this tool if the file is still over 1MB. (4) Upload using the Instagram mobile app rather than the web interface. (5) Allow the upload to complete fully on a strong WiFi or 4G connection before closing the app.',
    },
    {
      q: 'What is the maximum file size Instagram accepts?',
      a: 'Instagram accepts photos up to 30MB in file size. However, Instagram applies compression regardless of file size — a 30MB uncompressed photo will be more aggressively compressed than a 500KB pre-optimized one. There is no benefit to uploading files larger than 1–2MB for feed photos.',
    },
    {
      q: 'Can I compress Instagram photos on my phone?',
      a: 'Yes. This tool works fully on iOS and Android mobile browsers — Chrome, Safari, Firefox. Open the site on your phone, tap the upload area to select a photo from your camera roll, set quality to 80, and download the compressed file. No app installation is required.',
    },
    {
      q: 'Are my Instagram photos safe to compress with this tool?',
      a: 'Yes. All compression runs entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This makes the tool suitable for compressing personal, private, and unreleased creative work before posting to Instagram.',
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
