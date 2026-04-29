import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForTikTokContentSection() {
  return (
    <section className="space-y-8 text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Compress Images Before Uploading to TikTok?
        </h2>
        <p>
          TikTok automatically compresses every photo it receives — profile pictures, video cover
          images, and in-video assets. When you upload a large, uncompressed photo, TikTok&apos;s
          servers apply aggressive lossy compression that often turns a sharp 12MP image into a
          blurry, artifact-filled result. Pre-compressing your image at quality 80 gives TikTok a
          smaller, already-optimized file, so TikTok applies far less additional compression and the
          final result looks noticeably sharper.
        </p>
        <p>
          This is especially important for TikTok profile photos, which are displayed as small
          circles. Blurry profile photos hurt first impressions on your profile page and in comment
          sections. Pre-compressing at quality 80 keeps the file small while retaining the sharpness
          that makes a photo look professional at small display sizes.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image for TikTok in 3 Steps
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>
            <span className="font-semibold text-text-main">Upload your photo</span> — drag and drop,
            click to browse, or paste with Ctrl+V. Supports JPG, PNG, and WebP up to 20MB.
          </li>
          <li>
            <span className="font-semibold text-text-main">Set quality to 80</span> — this reduces a
            typical smartphone photo from 5–10MB to 300–600KB without visible quality loss. Lower to
            70 for the smallest possible file while still looking sharp on screens.
          </li>
          <li>
            <span className="font-semibold text-text-main">Download and upload to TikTok</span> —
            the compressed file will look noticeably sharper than if TikTok had compressed the
            original large file from scratch.
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">TikTok Image Size Requirements</h2>
        <p>
          TikTok accepts different image sizes depending on where the image is used. Using the
          correct dimensions prevents TikTok from automatically cropping or stretching your image.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Image type
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Recommended size
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Ratio
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Target file size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Profile photo', size: '400 × 400 px', ratio: '1:1', target: '50–150 KB' },
                {
                  type: 'Video cover image',
                  size: '1080 × 1920 px',
                  ratio: '9:16',
                  target: '300–800 KB',
                },
                {
                  type: 'In-video background image',
                  size: '1080 × 1920 px',
                  ratio: '9:16',
                  target: '300–800 KB',
                },
              ].map(({ type, size, ratio, target }, i) => (
                <tr key={type} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="border border-border px-3 py-2 font-medium text-text-main">
                    {type}
                  </td>
                  <td className="border border-border px-3 py-2 font-mono">{size}</td>
                  <td className="border border-border px-3 py-2">{ratio}</td>
                  <td className="border border-border px-3 py-2 text-primary font-medium">
                    {target}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs">
          Keeping files within the target size range ensures TikTok applies minimal additional
          compression. Files significantly larger than these targets will be aggressively
          re-compressed by TikTok regardless of your original quality setting.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Format Should TikTok Images Be?</h2>
        <p>
          TikTok accepts <strong className="text-text-main">JPG and PNG</strong> for profile photos
          and cover images. JPG is recommended for photographs — it produces smaller files at
          equivalent visual quality. PNG is better for graphics with text, logos, or solid colors
          where compression artifacts would be visible.
        </p>
        <p>
          TikTok does not reliably accept WebP or HEIC files for profile or cover uploads. If your
          photo is in one of these formats, convert it to JPG or PNG first. Use the free{' '}
          <Link href="/webp-to-jpg" className="text-primary hover:underline font-medium">
            WebP to JPG converter
          </Link>{' '}
          or{' '}
          <Link href="/heic-to-jpg" className="text-primary hover:underline font-medium">
            HEIC to JPG converter
          </Link>{' '}
          to convert before compressing.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does TikTok Compress Profile Pictures?</h2>
        <p>
          Yes. TikTok compresses all uploaded photos during processing, and profile photos are
          particularly affected because they are displayed at a small size (as small as 40×40px in
          comment sections). TikTok&apos;s compression at small display sizes amplifies any existing
          compression artifacts — a slightly blurry photo becomes noticeably blurry once TikTok
          applies its own compression on top.
        </p>
        <p>
          The fix is to start with a photo that is already optimized: 400×400px or larger, saved at
          quality 80, in JPG or PNG format. When TikTok receives a clean, efficiently-sized file, it
          applies significantly less compression than when it receives a 10MB raw photo.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Upload a High Quality Photo to TikTok
        </h2>
        <p>Follow these steps for the best possible image quality on TikTok:</p>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>Start with a high-resolution photo — at least 800×800px for profile photos</li>
          <li>Crop to the correct ratio: 1:1 for profile, 9:16 for video covers</li>
          <li>
            Compress to quality 80 using this tool — target 100–300KB for profile, 300–800KB for
            covers
          </li>
          <li>Save in JPG format (or PNG for graphics with text)</li>
          <li>
            Upload on a strong WiFi or 5G connection — slow connections can cause TikTok to apply
            extra compression mid-upload
          </li>
          <li>Allow the upload to fully process before closing the app</li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Image Tools</h2>
        <ul className="list-disc list-inside space-y-1.5 ml-2">
          <li>
            <Link href="/compress-image" className="text-primary hover:underline font-medium">
              Image Compressor
            </Link>{' '}
            — compress any image format for any platform
          </li>
          <li>
            <Link
              href="/compress-image-for-instagram"
              className="text-primary hover:underline font-medium"
            >
              Compress Image for Instagram
            </Link>{' '}
            — optimized settings for Instagram uploads
          </li>
          <li>
            <Link
              href="/compress-image-for-whatsapp"
              className="text-primary hover:underline font-medium"
            >
              Compress Image for WhatsApp
            </Link>{' '}
            — reduce size before sharing via WhatsApp
          </li>
          <li>
            <Link href="/jpg-to-png" className="text-primary hover:underline font-medium">
              JPG to PNG Converter
            </Link>{' '}
            — convert before compressing for TikTok graphics
          </li>
          <li>
            <Link href="/heic-to-jpg" className="text-primary hover:underline font-medium">
              HEIC to JPG Converter
            </Link>{' '}
            — convert iPhone photos before uploading to TikTok
          </li>
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-text-main">
            Need to create a TikTok thumbnail first?
          </p>
          <p className="text-xs text-text-muted leading-relaxed">
            Design a custom TikTok video cover with templates, text overlays, and background images
            — then compress it here before uploading.
          </p>
        </div>
        <a
          href="https://click-thumb.com/tiktok-thumbnail-maker"
          target="_blank"
          rel="noopener"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-drag-active transition-colors"
        >
          TikTok Thumbnail Maker →
        </a>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <FAQItem
          question="Why do my TikTok photos look blurry after uploading?"
          answer="TikTok applies automatic compression to all uploaded photos. Large, uncompressed images trigger more aggressive compression. Pre-compressing at quality 80 before uploading reduces the amount of re-compression TikTok applies, resulting in a sharper final image."
        />
        <FAQItem
          question="What is the best image size for a TikTok profile photo?"
          answer="Upload at 400×400px or larger, square (1:1 ratio), in JPG format at quality 80. TikTok displays profile photos as small as 40×40px in comment sections — start with a clean, efficiently-sized file so TikTok's compression does as little damage as possible."
        />
        <FAQItem
          question="What file size should TikTok images be?"
          answer="For profile photos, target 50–150KB at quality 80. For video cover images (1080×1920px), target 300–800KB. Staying within these ranges ensures TikTok applies minimal additional compression."
        />
        <FAQItem
          question="Does TikTok accept WebP images?"
          answer="TikTok does not reliably accept WebP for profile or cover uploads. Convert WebP to JPG first using the free WebP to JPG converter at compressimg.pro/webp-to-jpg, then compress the JPG before uploading to TikTok."
        />
        <FAQItem
          question="Can I compress TikTok images on my phone?"
          answer="Yes. This tool works fully on iOS and Android in Chrome, Safari, and Firefox. Open the page on your phone, tap to upload from your camera roll, adjust quality, and download — no app installation needed."
        />
        <FAQItem
          question="Are my photos safe when using this tool?"
          answer="Yes. All compression runs in your browser — no image is uploaded to any server. Your photos never leave your device, making it safe for personal and unreleased content."
        />
      </div>
    </section>
  )
}
