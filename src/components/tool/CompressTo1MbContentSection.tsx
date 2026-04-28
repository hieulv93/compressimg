import Link from 'next/link'
import FAQItem from './FAQItem'

export default function CompressTo1MbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 1MB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Does &quot;Compress Image to 1MB&quot; Mean?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Compressing an image to 1MB means reducing its digital file size to 1 megabyte (1,024
          kilobytes) or less. A typical smartphone photo shot at full resolution is 3&ndash;8MB, and
          high-resolution DSLR images can be 15&ndash;30MB or more. While these large files preserve
          every detail captured by the camera, many platforms, services, and workflows impose a 1MB
          ceiling to keep uploads fast, storage manageable, and delivery bandwidth low.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The good news is that 1MB is a generous target for most images. At quality 80&ndash;85, a
          typical photograph compresses to 200&ndash;800KB with no visible quality loss at normal
          screen sizes. You get the full benefit of a smaller file without any noticeable
          degradation in sharpness, color, or detail. This tool shows the exact compressed file size
          before you download, so you always know whether you have hit the 1MB target.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 1MB — Step by Step
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your file, or paste from clipboard (Ctrl+V).
                Supported formats: JPG, PNG, WebP. Files up to 20MB are accepted. Your image is
                never sent to any server — all processing happens locally in your browser.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Start at quality 82 — the default for 1MB targets
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The default quality setting on this page is 82, which is optimized for 1MB targets.
                At quality 82, most smartphone photos (3&ndash;8MB originals) compress to
                300&ndash;800KB while retaining excellent visual quality. Check the compressed file
                size shown in the result. If the output is still above 1MB, lower the slider to
                75&ndash;78.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download when the size is under 1MB
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result card shows the exact compressed file size before you download. Once the
                size reads 1,024KB or less, click Download. The file saves directly to your device
                with a &quot;compressed-&quot; prefix, keeping it separate from your original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why 1MB? Platforms That Enforce This Limit
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 1MB file size limit is one of the most common thresholds across digital platforms.
          Here are the contexts where you will most often need to compress images to under 1MB:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Email Attachments</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Most email clients display inline images in the message body when images are under
              1MB. Larger images are shown as attachments, which recipients must click to open.
              Keeping images under 1MB ensures they display inline and load quickly, especially on
              mobile.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">CMS & WordPress Uploads</p>
            <p className="text-xs text-text-muted leading-relaxed">
              WordPress and most CMS platforms technically accept large uploads but recommend images
              under 1MB for optimal page speed. Hosting plans with shared resources can slow
              significantly when serving large unoptimized images. Blog post images, product photos,
              and article thumbnails should all be under 1MB.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Social Media Sharing</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Twitter, LinkedIn, and Facebook automatically recompress images over 1MB, often
              reducing quality unpredictably. Uploading an image already compressed to under 1MB
              gives the platform less reason to apply its own compression, resulting in better final
              display quality on the platform.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Online Form Uploads</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Many government portals, visa application systems, and online registration forms cap
              image uploads at 1MB. HR systems and applicant tracking software often enforce the
              same limit for profile photos, cover letters, and supporting documents with images.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Chat & Messaging Apps</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Slack, Microsoft Teams, and Discord display image previews inline when files are under
              certain size thresholds. Images under 1MB load instantly in chat threads, while larger
              images may show only as file attachments that require a separate download step.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Mobile App Uploads</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Many mobile apps enforce a 1MB upload limit to prevent slow uploads on cellular
              connections and to manage cloud storage costs. Food delivery apps, marketplace apps,
              and listing platforms commonly cap product and profile photos at 1MB.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Quality Settings Guide: What to Expect at Each Level
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          For a 1MB target, here is what to expect at different quality settings for a typical
          1920&times;1080px photograph:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 90+ (Near-lossless)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~800KB&ndash;2MB for a 1920px photo. May still exceed 1MB for high-detail
              images. Use only if the image must retain maximum quality for printing or archival.
              For 1MB targets, this setting often misses the mark.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 82 (Recommended)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~300&ndash;700KB for a typical 1920px photo. Excellent visual quality with no
              visible artifacts. This is the default and ideal starting point for nearly all 1MB
              compression tasks. Indistinguishable from the original at screen viewing sizes.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 70&ndash;78</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~150&ndash;400KB for a typical 1920px photo. Still excellent quality. Use when
              quality 82 produces an output over 1MB, or when you want a smaller file for faster
              upload. Suitable for all web and social media purposes.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 55&ndash;69</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~80&ndash;200KB for a typical 1920px photo. Minor visible artifacts at full
              zoom. Reserve for very large original images where higher quality settings still
              exceed 1MB. Suitable for web thumbnails and social media at display sizes.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What If the Image Is Still Over 1MB After Compression?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Very high-resolution images from professional cameras — typically 24 megapixels or more —
          can remain above 1MB even at quality 80. The most effective solution is to resize the
          image dimensions before compressing:
        </p>
        <ol className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">1.</span>
            <span>
              Use the{' '}
              <Link href="/resize-image" className="text-primary underline">
                Resize Image tool
              </Link>{' '}
              to reduce your image to 1920px wide or smaller. A 24MP camera photo at
              6000&times;4000px contains 24 million pixels. Resizing to 1920px reduces pixel count
              by 90%, which alone brings most photos well under 1MB.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">2.</span>
            <span>
              Download the resized image and upload it to this compression tool. At 1920px wide,
              quality 82 typically produces an output of 300&ndash;600KB for most photographs — well
              under 1MB.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">3.</span>
            <span>
              If the image is a PNG from a design tool (Figma, Photoshop, Illustrator) and not a
              photograph, consider{' '}
              <Link href="/png-to-jpg" className="text-primary underline">
                converting it to JPG first
              </Link>
              . PNG uses lossless compression and produces much larger files than JPG at equivalent
              visual quality. A 5MB PNG often converts to a 500KB JPG at quality 82.
            </span>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Which Image Formats Compress Best to Under 1MB?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG — Easiest</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Most JPG photos from smartphones and cameras compress to under 1MB at quality
              80&ndash;85 in a single step. JPG&apos;s lossy algorithm is highly efficient for
              photographic content. The most reliable path to a 1MB target for photos.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">WebP — Most Efficient</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              WebP typically produces files 25&ndash;35% smaller than JPG at the same quality level.
              If the platform you are uploading to accepts WebP, this format gives you the best
              quality at under 1MB. Modern browsers and most platforms support WebP natively.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Harder</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG uses lossless compression, so quality settings have less impact than on JPG. Large
              PNG files from design tools often need dimension reduction or conversion to JPG before
              reliably reaching under 1MB. PNG is best kept for images requiring transparency.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This image compressor runs entirely in your browser. When you upload an image, it is
          loaded into browser memory and processed using JavaScript — no data is ever transmitted to
          a server. For personal photos, professional work, confidential documents, and any image
          you would not want stored on a third-party server, this tool is completely safe. Close the
          browser tab and the image data is permanently gone from memory.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For more details on data handling, see our{' '}
          <Link href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/resize-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Resize Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce pixel dimensions to hit smaller file size targets.
            </p>
          </Link>
          <Link
            href="/compress-image-to-500kb"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress to 500KB
            </p>
            <p className="text-xs text-text-muted mt-1">
              Hit a 500KB target for web publishing and CMS uploads.
            </p>
          </Link>
          <Link
            href="/compress-image-to-100kb"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress to 100KB
            </p>
            <p className="text-xs text-text-muted mt-1">
              Strict 100KB target for government portals and ID submissions.
            </p>
          </Link>
        </div>
      </div>

      <CompressTo1MbFAQSection />
    </section>
  )
}

function CompressTo1MbFAQSection() {
  const faqs = [
    {
      q: 'How do I compress an image to under 1MB?',
      a: 'Upload your image and set the quality slider to 80–85. For most smartphone photos (3–8MB originals), quality 82 produces an output of 300–800KB — well under 1MB. Check the compressed size shown in the result card. If still over 1MB, lower the quality to 75 or use the Resize Image tool to reduce pixel dimensions to 1920px wide before compressing.',
    },
    {
      q: 'What quality setting should I use for a 1MB target?',
      a: 'Quality 82 is the recommended starting point. At quality 82, a typical 1920px wide photograph compresses to 300–700KB while retaining excellent visual quality — no visible artifacts at normal screen sizes. Only very high-resolution images (24MP+) may need a lower quality setting or dimension reduction to reach under 1MB.',
    },
    {
      q: 'Why do I need to compress images to under 1MB?',
      a: 'Many platforms enforce a 1MB limit: email clients display inline images only when files are under 1MB, social media platforms (Twitter, LinkedIn, Facebook) recompress images over 1MB unpredictably, WordPress and CMS platforms recommend under 1MB for page speed, and government or HR portals often cap uploads at 1MB. Compressing to under 1MB ensures compatibility and fast delivery.',
    },
    {
      q: 'My image is still over 1MB after compression — what do I do?',
      a: 'High-resolution images from professional cameras (24MP+) can remain above 1MB at quality 80. The best fix is to resize the dimensions first. Use the Resize Image tool to reduce your image to 1920px wide or smaller. At 1920px, quality 82 almost always produces under 800KB. For PNG files from design tools, converting to JPG first dramatically reduces file size.',
    },
    {
      q: 'Will the image look good at under 1MB?',
      a: 'Yes. At quality 80–85, images are visually indistinguishable from the original at normal screen viewing sizes. This quality range is the professional standard for web publishing, social media, and email. The difference between a 3MB original and an 800KB compressed version is imperceptible when viewed on screen.',
    },
    {
      q: 'What is the difference between compressing to 1MB versus 500KB or 100KB?',
      a: '1MB allows high-quality images for web publishing and professional email — nearly indistinguishable from the original. 500KB is the optimal range for fast-loading websites and CMS blogs. 100KB is required for strict form submissions, government portals, and ID photo systems. The right target depends on where the image will be used.',
    },
    {
      q: 'Which image formats compress best to under 1MB?',
      a: 'JPG is easiest — most smartphone JPG photos compress to under 1MB at quality 82 in a single step. WebP produces even smaller files at the same quality, making it ideal when the platform supports it. PNG is harder because it uses lossless compression; large PNG files often need dimension reduction or conversion to JPG to reliably reach under 1MB.',
    },
    {
      q: 'Are my images uploaded to a server?',
      a: 'No. All compression happens entirely in your browser using JavaScript. Your files never leave your device and are never sent to any server. This makes the tool safe for personal photos, professional photography, confidential documents, and proprietary images.',
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
