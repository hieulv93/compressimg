export default function CropContentSection() {
  const faqs = [
    {
      q: 'How do I crop an image online for free?',
      a: 'Upload your JPG, PNG, or WebP image to CompressImg Crop Image tool. Drag the handles to select the area you want to keep, choose an aspect ratio preset if needed, then click "Crop Image". Your cropped image downloads instantly — no account required.',
    },
    {
      q: 'Does cropping an image reduce file size?',
      a: 'Yes. Cropping removes pixels from outside the selected area, which directly reduces file size. A photo cropped to 50% of its original dimensions can be up to 75% smaller in file size, because file size scales with the number of pixels (width × height).',
    },
    {
      q: 'What aspect ratio should I use for social media?',
      a: 'Different platforms have different requirements: Instagram feed posts use 1:1 (square) or 4:5 (portrait). Twitter/X header images use 3:1. YouTube thumbnails use 16:9. Facebook cover photos use approximately 16:9. LinkedIn profile photos use 1:1. Our presets cover the most common ratios: 1:1, 16:9, 4:3, 3:2, and 9:16 for vertical/stories.',
    },
    {
      q: 'Will cropping reduce image quality?',
      a: 'No. Our crop tool uses the Canvas API to extract the selected area at full resolution. The remaining pixels are not re-encoded or scaled — they are output exactly as they were in the original image. The only quality change is the removal of the unselected area.',
    },
    {
      q: 'What image formats can I crop?',
      a: 'You can crop JPG, PNG, and WebP images. The output format matches the input format — if you upload a PNG, you get a PNG back. This ensures transparency is preserved for PNG files. Files up to 20MB are supported.',
    },
    {
      q: 'Is my image uploaded to a server?',
      a: 'No. This tool processes your image entirely inside your browser using JavaScript and the Canvas API. Your image never leaves your device and is never sent to any server. This means your privacy is fully protected and the tool works instantly without waiting for an upload.',
    },
    {
      q: 'Can I crop to a custom size instead of a preset ratio?',
      a: 'Yes. Select "Free" mode (the default) and drag the crop handles to any shape or size you need. You can see the exact pixel dimensions update in real time as you drag. If you need a specific pixel size, crop in Free mode first and then use our Resize Image tool to set exact dimensions.',
    },
    {
      q: 'How is crop different from resize?',
      a: 'Cropping removes parts of the image — you select a region to keep and the rest is discarded. Resizing changes the dimensions of the entire image by scaling it up or down. Use crop when you want to remove distractions or change composition. Use resize when you need specific pixel dimensions without losing content.',
    },
  ]

  return (
    <section className="space-y-8 text-text-main">
      {/* Main content */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold">Crop Image Online — Free, Fast, Private</h2>
        <p className="text-text-muted leading-relaxed">
          Cropping is one of the most fundamental image editing operations. Whether you are removing
          an unwanted background, focusing on the subject of a photo, or preparing an image for a
          specific platform format, our free online crop tool makes it instant and effortless. No
          software to install, no account to create, and your images never leave your device.
        </p>
        <p className="text-text-muted leading-relaxed">
          Our crop image tool runs entirely in your browser. When you upload an image, it is loaded
          directly into the page using JavaScript. When you click &ldquo;Crop Image&rdquo;, the
          Canvas API extracts your selected region at full resolution and generates a download file
          — all locally, in milliseconds. This means complete privacy and zero waiting time
          regardless of your internet connection speed.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">How to Crop an Image in 3 Steps</h2>
        <ol className="space-y-3 text-text-muted">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <span>
              <strong className="text-text-main">Upload your image.</strong> Click the upload box,
              drag and drop a file, or paste an image from your clipboard (Ctrl+V). JPG, PNG, and
              WebP files up to 20MB are supported.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <span>
              <strong className="text-text-main">Select your crop area.</strong> Drag the white
              handles to adjust the crop region. Choose a preset ratio (1:1, 16:9, 4:3, 3:2, or
              9:16) or drag freely for a custom shape. The pixel dimensions update in real time.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <span>
              <strong className="text-text-main">Download your cropped image.</strong> Click
              &ldquo;Crop Image&rdquo; and your result is ready instantly. Download the file — the
              original format is preserved, transparency included.
            </span>
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Aspect Ratio Presets Explained</h2>
        <p className="text-text-muted leading-relaxed">
          Aspect ratio is the proportional relationship between width and height. Choosing the right
          ratio for the platform you are publishing on ensures your image displays correctly without
          unwanted cropping by the platform itself.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              ratio: 'Free',
              use: 'Any custom shape — no constraints. Drag handles to any position.',
            },
            {
              ratio: '1:1 Square',
              use: 'Instagram posts, profile pictures, product thumbnails, avatars.',
            },
            {
              ratio: '16:9 Widescreen',
              use: 'YouTube thumbnails, presentations, desktop wallpapers, video covers.',
            },
            {
              ratio: '4:3 Standard',
              use: 'Traditional photography, tablet screens, older presentation formats.',
            },
            {
              ratio: '3:2 Classic',
              use: 'DSLR camera native ratio, prints (4×6 inch), Flickr, photography portfolios.',
            },
            {
              ratio: '9:16 Vertical',
              use: 'Instagram Stories, TikTok, YouTube Shorts, mobile wallpapers.',
            },
          ].map(({ ratio, use }) => (
            <div key={ratio} className="rounded-lg border border-border p-3 space-y-1">
              <p className="font-semibold text-text-main text-sm">{ratio}</p>
              <p className="text-text-muted text-sm">{use}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Why Crop Your Images?</h2>
        <div className="space-y-3 text-text-muted leading-relaxed">
          <p>
            <strong className="text-text-main">Improve composition.</strong> The rule of thirds is a
            fundamental photography principle — placing your subject off-center often creates a more
            visually interesting image. Our rule-of-thirds grid overlay helps you align your subject
            for a better composition before cropping.
          </p>
          <p>
            <strong className="text-text-main">Remove distractions.</strong> An otherwise perfect
            photo can be ruined by a distracting element in the corner or edge. Cropping lets you
            eliminate garbage bins, strangers, power lines, and other unwanted elements without any
            complex editing tools.
          </p>
          <p>
            <strong className="text-text-main">Meet platform requirements.</strong> Social media
            platforms, print labs, and app stores all have specific image dimension requirements.
            Uploading an image with the wrong ratio results in automatic cropping by the platform —
            often in the wrong place. Crop to the correct ratio yourself and maintain full control.
          </p>
          <p>
            <strong className="text-text-main">Reduce file size.</strong> Removing pixels through
            cropping is the most efficient way to reduce file size without any quality loss. A
            4000×3000 photo cropped to 2000×2000 has 75% fewer pixels and a proportionally smaller
            file size, making it faster to share and upload.
          </p>
          <p>
            <strong className="text-text-main">Focus on the subject.</strong> Portrait photography,
            product images, and wildlife shots often benefit from tight cropping that eliminates
            empty space and draws attention directly to the subject. This is especially effective
            for e-commerce product listings where a clean, focused image increases conversion rates.
          </p>
          <p>
            <strong className="text-text-main">Prepare for printing.</strong> Standard print sizes
            (4×6, 5×7, 8×10) use fixed aspect ratios. Use the preset buttons to crop your photo to
            the exact ratio required before sending to a print lab or photo service.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Privacy &amp; Security</h2>
        <p className="text-text-muted leading-relaxed">
          Your images are processed entirely within your browser. No pixels are ever transmitted to
          our servers or any third-party service. We use the browser&#39;s built-in Canvas API — the
          same technology used by professional design tools — to extract your crop region and
          generate the output file. When you close the tab, nothing is retained. This approach is
          not only faster than server-based tools (no upload/download round trip), but it also means
          your images remain completely private, even when working with confidential documents,
          personal photos, or proprietary design assets.
        </p>
        <p className="text-text-muted leading-relaxed">
          For full details on how we handle data and advertising, see our{' '}
          <a href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="text-primary underline">
            Terms of Service
          </a>
          .
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/compress-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce image file size up to 90% without visible quality loss.
            </p>
          </a>
          <a
            href="/resize-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Resize Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Change image dimensions to any size while preserving quality.
            </p>
          </a>
          <a
            href="/convert-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Convert Image Format
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert between JPG, PNG, and WebP instantly in your browser.
            </p>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <details key={i} className="group border border-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer list-none font-medium text-text-main hover:bg-surface transition-colors">
                {q}
                <span className="text-text-muted shrink-0 group-open:rotate-180 transition-transform duration-200">
                  ▾
                </span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-text-muted text-sm leading-relaxed border-t border-border">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
