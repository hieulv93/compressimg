import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForYouTubeContentSection() {
  return (
    <section className="space-y-8 text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress Images for YouTube?</h2>
        <p>
          YouTube imposes a strict 2MB file size limit on thumbnails. A raw 1280×720px screenshot or
          design export can easily reach 3–8MB, causing your upload to fail with an error.
          Compressing your thumbnail to quality 85 before uploading reduces a typical file to
          150–400KB — passing the limit with room to spare, with no visible quality loss at the
          sizes YouTube displays thumbnails.
        </p>
        <p>
          Beyond the size limit, smaller thumbnails load faster in search results, suggested video
          feeds, and mobile apps. YouTube&apos;s recommendation algorithm serves thumbnails across
          dozens of surface areas at different resolutions — a well-compressed thumbnail renders
          crisply on all of them without the progressive-loading blur that large files can show on
          slow connections.
        </p>
        <p>
          Channel banners (2560×1440px) have a 6MB limit. Profile photos (800×800px) need to be
          under 4MB. This tool compresses any of these in seconds, entirely in your browser —
          nothing is uploaded to any server.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress YouTube Images — 3 Steps
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>
            <span className="font-semibold text-text-main">Upload your image</span> — drag and drop,
            click to browse, or paste with Ctrl+V. Supports JPG, PNG, and WebP up to 20MB.
          </li>
          <li>
            <span className="font-semibold text-text-main">Set quality to 85</span> — this reduces a
            1280×720px thumbnail from several MB to 150–400KB. Text and faces remain sharp at
            thumbnail display sizes. Lower to 80 if you need a smaller file.
          </li>
          <li>
            <span className="font-semibold text-text-main">Download and upload to YouTube</span> —
            open YouTube Studio, go to your video, click Edit, and upload the compressed thumbnail.
            For channel art, go to Customization → Branding.
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">YouTube Image Size Requirements</h2>
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
                  Max file size
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Target after compression
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: 'Video thumbnail',
                  size: '1280 × 720 px',
                  max: '2 MB',
                  target: '150–400 KB',
                },
                {
                  type: 'Channel banner',
                  size: '2560 × 1440 px',
                  max: '6 MB',
                  target: '500 KB – 2 MB',
                },
                {
                  type: 'Profile photo',
                  size: '800 × 800 px',
                  max: '4 MB',
                  target: '100–300 KB',
                },
                {
                  type: 'End screen image',
                  size: '1280 × 720 px',
                  max: '2 MB',
                  target: '150–400 KB',
                },
              ].map(({ type, size, max, target }, i) => (
                <tr key={type} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="border border-border px-3 py-2 font-medium text-text-main">
                    {type}
                  </td>
                  <td className="border border-border px-3 py-2 font-mono">{size}</td>
                  <td className="border border-border px-3 py-2 text-red-500 font-medium">{max}</td>
                  <td className="border border-border px-3 py-2 text-primary font-medium">
                    {target}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs">
          The channel banner safe area — visible across desktop, mobile, and TV — is the center{' '}
          <strong className="text-text-main">1546×423px</strong>. Keep all text, logos, and
          important graphics within this zone when designing.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Format Should YouTube Thumbnails Be?
        </h2>
        <p>
          <strong className="text-text-main">JPG</strong> is the best format for thumbnails with
          photos, faces, and gradients. At quality 85, a 1280×720px JPG is typically 150–400KB —
          well under the 2MB limit. JPG handles photographic content efficiently and is universally
          supported.
        </p>
        <p>
          <strong className="text-text-main">PNG</strong> is better for thumbnails with large areas
          of flat color, text overlays, or sharp geometric shapes. PNG compression is lossless, so
          text stays crisp — but PNG files are larger than JPG for photographic content. If your PNG
          thumbnail is over 2MB, convert it to JPG using the{' '}
          <Link href="/png-to-jpg" className="text-primary hover:underline font-medium">
            PNG to JPG converter
          </Link>{' '}
          first, then compress.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for High-CTR YouTube Thumbnails</h2>
        <p>
          Compression keeps your file under the limit, but thumbnail design drives clicks. A
          1280×720px canvas divided into a clear focal point (face or product) on one side and bold
          text on the other consistently outperforms cluttered designs. Use 2–3 words maximum —
          thumbnail text must be readable at 320×180px, the size YouTube displays in search results
          on desktop.
        </p>
        <p>
          High contrast between the subject and background improves visibility at small sizes. Color
          temperature contrast (warm subject on cool background, or vice versa) makes thumbnails
          stand out in feeds dominated by similar-colored videos. After compressing, compare your
          thumbnail at 320×180px to verify text and faces are still sharp.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-text-main">
            Need to design your YouTube thumbnail first?
          </p>
          <p className="text-xs text-text-muted leading-relaxed">
            Create a 1280×720px thumbnail with templates, custom text, and background images — then
            compress it here before uploading to YouTube Studio.
          </p>
        </div>
        <a
          href="https://click-thumb.com/youtube-thumbnail-maker"
          target="_blank"
          rel="noopener"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-drag-active transition-colors"
        >
          YouTube Thumbnail Maker →
        </a>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Image Tools</h2>
        <ul className="list-disc list-inside space-y-1.5 ml-2">
          <li>
            <Link href="/compress-image" className="text-primary hover:underline font-medium">
              Image Compressor
            </Link>{' '}
            — compress any image for any platform
          </li>
          <li>
            <Link
              href="/compress-image-for-instagram"
              className="text-primary hover:underline font-medium"
            >
              Compress for Instagram
            </Link>{' '}
            — optimized for Instagram feed and Stories
          </li>
          <li>
            <Link
              href="/compress-image-for-tiktok"
              className="text-primary hover:underline font-medium"
            >
              Compress for TikTok
            </Link>{' '}
            — profile photos and video cover images
          </li>
          <li>
            <Link href="/png-to-jpg" className="text-primary hover:underline font-medium">
              PNG to JPG Converter
            </Link>{' '}
            — convert PNG thumbnails to JPG before compressing
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline font-medium">
              Image Resizer
            </Link>{' '}
            — resize to exact 1280×720px before compressing
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <FAQItem
          question="What is the maximum file size for a YouTube thumbnail?"
          answer="YouTube allows thumbnails up to 2MB in file size. A 1280×720px JPG at quality 85 is typically 150–400KB — well within this limit. If your thumbnail exceeds 2MB, compress it to quality 80–85 to bring it under the limit without visible quality loss."
        />
        <FAQItem
          question="What is the best image size for a YouTube thumbnail?"
          answer="The recommended size is 1280×720px (16:9 ratio). This is the minimum YouTube recommends for HD thumbnails. Thumbnails smaller than 640×360px may appear blurry on large screens. Keep the file under 2MB and use JPG for photographs or PNG for graphics with text."
        />
        <FAQItem
          question="What format should YouTube thumbnails be?"
          answer="JPG at quality 85 for thumbnails with photos, faces, or gradients. PNG for thumbnails with text overlays, logos, or flat color areas where compression artifacts would be visible. YouTube accepts JPG, PNG, GIF, BMP, and WebP — JPG is the most widely used."
        />
        <FAQItem
          question="Does compressing thumbnails affect click-through rate?"
          answer="No. Compression at quality 80–85 is visually indistinguishable from the original at the sizes YouTube displays thumbnails (approx. 320×180px in search results). Viewers cannot detect compression at these sizes, and a properly-compressed thumbnail actually loads faster, which improves perceived quality on slow connections."
        />
        <FAQItem
          question="What are the YouTube channel banner dimensions?"
          answer="YouTube channel art should be 2560×1440px with a maximum file size of 6MB. The safe area visible on all devices is the center 1546×423px. Keep all important text and logos within the safe zone — the edges are cropped on mobile and TV displays."
        />
        <FAQItem
          question="Can I compress my thumbnail on my phone?"
          answer="Yes. This tool works on iOS and Android in Chrome, Safari, and Firefox. Open compressimg.pro/compress-image-for-youtube on your phone, tap to upload from your gallery, set quality to 85, and download. No app needed."
        />
        <FAQItem
          question="Are my thumbnails safe with this tool?"
          answer="Yes. All compression runs in your browser — no image is ever uploaded to a server. Your thumbnail files never leave your device, making it safe to compress unreleased video thumbnails before uploading to YouTube Studio."
        />
      </div>
    </section>
  )
}
