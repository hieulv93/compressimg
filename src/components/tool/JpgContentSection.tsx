import Link from 'next/link'
import FAQItem from './FAQItem'

export default function JpgContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to JPG compression"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a JPG File?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPG (also written as JPEG — Joint Photographic Experts Group) is the most widely used
          image format in the world. It was designed specifically for photographs and complex images
          with smooth color gradients, making it the standard for digital cameras, smartphones, and
          web photography. JPG uses lossy compression, meaning it discards some image data to
          achieve dramatically smaller file sizes compared to raw or uncompressed formats.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The JPG compression algorithm works by dividing the image into small 8×8 pixel blocks and
          applying a mathematical process called Discrete Cosine Transform (DCT). This process
          identifies and removes high-frequency image details that are least perceptible to the
          human eye. A quality setting of 80% retains the vast majority of visible detail while
          reducing file size by 60–80%. The higher the quality setting, the more original data is
          preserved — and the larger the resulting file.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          JPG does not support transparency. If you need to preserve a transparent background, use{' '}
          <Link href="/compress-png-online" className="text-primary underline">
            PNG compression
          </Link>{' '}
          instead. For modern websites where you want the smallest possible file with transparency,
          consider{' '}
          <Link href="/convert-image" className="text-primary underline">
            converting to WebP
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress JPG Online — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your JPG file</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your JPG or JPEG file, or paste an image from
                your clipboard (Ctrl+V). Files up to 20MB are accepted. Your image is never sent to
                any server — compression happens entirely in your browser.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Adjust the quality slider</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The quality slider controls how much image data is retained. For most JPG photos,
                quality 75–85 produces an output that is visually indistinguishable from the
                original when viewed on screen. For social media thumbnails or website images where
                file size matters most, quality 60–70 is a good choice. Quality below 50 will show
                visible compression artifacts on detailed images.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download your compressed JPG</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The compressed JPG is ready instantly. You can see the original size, the new size,
                and the percentage reduction before downloading. The output file is saved as a JPG
                and named with a &quot;compressed-&quot; prefix for easy identification.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Best Quality Settings for JPG Compression
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Choosing the right quality level is the key to getting the best results when you compress
          JPG images. Here are the recommended settings for different use cases:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 85–95%</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Near-lossless output. Best for print-ready images, portfolio photography, and any
              image that will be enlarged or heavily examined. File size reduction: 30–50%.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 75–85% (Recommended)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              The sweet spot for most web use. Invisible quality loss on screen, excellent
              compression. Best for blog images, product photos, and general web use. Reduction:
              50–70%.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 60–74%</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Good for thumbnails, social media previews, and images displayed at small sizes.
              Slight quality reduction visible only at full zoom. Reduction: 70–80%.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 40–59%</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Maximum compression mode. Visible artifacts on complex images. Use only when file size
              is critical (email attachments, slow networks). Reduction: 80–90%.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Reduce JPG File Size to Under 100KB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Many platforms — government forms, job application portals, school admission systems —
          require images under a specific file size, often 100KB, 200KB, or 500KB. Here is a
          reliable method to hit any target size with JPG compression:
        </p>
        <ol className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">1.</span>
            <span>
              Start with quality <strong className="text-text-main">80</strong> and compress your
              JPG. Check the output size shown in the result.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">2.</span>
            <span>
              If the file is still too large, reset and try quality{' '}
              <strong className="text-text-main">60</strong>. This typically cuts file size by an
              additional 20–30%.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">3.</span>
            <span>
              For very large original images, consider{' '}
              <Link href="/resize-image" className="text-primary underline">
                resizing the dimensions first
              </Link>{' '}
              (e.g., to 1280px wide), then compressing. Smaller dimensions dramatically reduce file
              size before quality compression is even applied.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">4.</span>
            <span>
              If a 4000×3000px photo still exceeds 100KB at quality 60, resize to 1200px or smaller
              first — this alone can reduce a 5MB image to under 200KB before compression.
            </span>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          JPG vs PNG vs WebP: Which Format Should You Use?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Choosing the right image format is as important as compression itself. Each format serves
          different needs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG — Best for Photos</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Use for photographs, camera shots, and complex images. Excellent compression with
              minimal visible quality loss. No transparency support. Universal compatibility with
              all browsers and apps.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Best for Graphics</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Use for logos, icons, screenshots, and images requiring transparency. Lossless
              compression preserves sharp edges and text. Larger file sizes than JPG for photos.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">WebP — Best for Web</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Modern format that outperforms both JPG and PNG. 25–35% smaller than JPG at the same
              quality. Supports transparency. Supported by all modern browsers. Ideal for web
              performance optimization.
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          If your images are going on a website and you want the smallest possible file sizes,
          consider{' '}
          <Link href="/convert-image" className="text-primary underline">
            converting your JPGs to WebP
          </Link>{' '}
          after compression. WebP can cut file sizes an additional 25–35% compared to JPG at the
          same perceived quality.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress JPG Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPG files straight from cameras and smartphones are optimized for quality, not
          distribution. A modern smartphone produces JPG files of 3–8MB per photo. Even a modest
          blog post with 5 images could be 30MB of unoptimized photos — enough to cause a 10-second
          load time on a mobile connection. Compressing JPG images before uploading them to
          websites, email, or social media is one of the highest-impact optimizations you can make
          for page speed and user experience.
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Website performance:</strong> Compressed JPG images
              improve Google Core Web Vitals (LCP), directly affecting SEO rankings and user
              experience.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Email attachments:</strong> Most email services cap
              attachments at 10–25MB. Compressing JPG photos makes them email-safe without quality
              loss.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Social media:</strong> Platforms like Instagram,
              Facebook, and Twitter re-compress images on upload (often poorly). Compressing your
              JPG first gives you control over the final output quality.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Cloud storage:</strong> Reduce storage costs on
              Dropbox, Google Drive, or AWS S3 by compressing image libraries.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your JPG Files Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This JPG compressor runs entirely in your browser. When you upload a JPG file, it is
          loaded into browser memory and processed using JavaScript and Web Workers — no data is
          ever transmitted to a server. Your images are not stored, analyzed, or shared. This makes
          our tool faster than server-based compressors (no upload/download roundtrip) and
          completely private. Close the browser tab and the image data is gone permanently.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For details on data handling and advertising, see our{' '}
          <Link href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="text-primary underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/compress-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress Any Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Compress JPG, PNG, and WebP — all formats in one tool.
            </p>
          </Link>
          <Link
            href="/compress-png-online"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress PNG Online
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce PNG file size while preserving transparency.
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
              Change image dimensions to any size while preserving quality.
            </p>
          </Link>
        </div>
      </div>

      <JpgFAQSection />
    </section>
  )
}

function JpgFAQSection() {
  const faqs = [
    {
      q: 'What is the difference between JPG and JPEG?',
      a: 'JPG and JPEG are the same format. JPEG stands for Joint Photographic Experts Group, the organization that created the standard. Early Windows systems had a three-character file extension limit, so .jpeg was shortened to .jpg. Both extensions refer to exactly the same image format and are interchangeable.',
    },
    {
      q: 'How much can I compress a JPG without losing quality?',
      a: 'At quality settings of 75–85%, JPG compression is virtually invisible to the human eye when images are viewed on screen. You can typically reduce a JPG file size by 60–75% at quality 80 with no perceptible quality loss. At quality 60, reductions of 75–85% are achievable with only minor artifacts visible at full zoom.',
    },
    {
      q: 'Will compressing a JPG reduce the image quality permanently?',
      a: 'Yes — JPG uses lossy compression, so each time you re-save a JPG, some quality is lost. This is called "generation loss." To avoid this, always keep the original high-quality JPG and compress a copy. Never compress the same JPG file repeatedly. Our tool always reads from the original file you upload, so one compression pass keeps quality loss to a minimum.',
    },
    {
      q: 'What is the best quality setting for JPG images on websites?',
      a: 'Quality 75–85 is the recommended range for website JPG images. At quality 80 (the default), files are typically 60–70% smaller than the original with no visible quality difference when viewed at normal screen sizes. For hero images or product photography where detail matters, use quality 85. For thumbnails and background images, quality 70 or lower is fine.',
    },
    {
      q: 'How do I compress a JPG to under 100KB?',
      a: 'Start with quality 80 and check the output size. If still over 100KB, try quality 60. For large photos (4000×3000px or bigger), resize the image dimensions to 1280px wide first using our Resize tool, then compress — this alone can take a 5MB photo to under 300KB before quality compression.',
    },
    {
      q: 'Does JPG compression preserve the original colors?',
      a: 'Yes, at reasonable quality settings (60+), color accuracy is well preserved. JPG compression primarily affects fine texture and detail rather than broad color areas. Skin tones, skies, and solid colors are virtually indistinguishable from the original. Only at very low quality settings (below 40) do color shifts and banding become visible.',
    },
    {
      q: 'Should I use JPG or WebP for my website?',
      a: 'WebP is technically superior — 25–35% smaller than JPG at the same quality, with support for transparency. All modern browsers support WebP. If you can use WebP on your website, it is the better choice. If you need universal compatibility (including older email clients, some CMS platforms, and print workflows), JPG remains the safest option.',
    },
    {
      q: 'Are my JPG files uploaded to any server?',
      a: 'No. All JPG compression happens entirely in your browser using JavaScript. Your files never leave your device and are never uploaded to any server. There is no sign-up required and no usage limits. The tool works completely offline once the page is loaded.',
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
