import Link from 'next/link'
import FAQItem from './FAQItem'

export default function CompressTo500KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 500KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Does &quot;Compress Image to 500KB&quot; Mean?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Compressing an image to 500KB means reducing the digital file size to 500 kilobytes or
          less — half a megabyte. A typical smartphone photo ranges from 3&ndash;8MB, and even a
          standard screen screenshot can be 1&ndash;3MB. Reducing images to 500KB is the most common
          target for web-optimized images: fast enough to load quickly on mobile connections, small
          enough to stay within most platform upload limits, yet large enough to retain excellent
          visual quality for screen display.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          At quality 75&ndash;80, a typical 1280px wide photograph compresses to 80&ndash;350KB
          while remaining visually crisp on all screen sizes up to 1080p. This tool shows the exact
          compressed size in the result before you download, so you can adjust and re-compress until
          you hit the 500KB target.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 500KB — Step by Step
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
                JPG, PNG, and WebP are supported. Files up to 20MB are accepted. Your image never
                leaves your browser — all compression runs locally on your device.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Use quality 75 — the default for 500KB targets
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The default quality on this page is 75, calibrated for 500KB targets. At quality 75,
                most smartphone photos (3&ndash;8MB) compress to 100&ndash;400KB. Check the
                compressed size in the result card. If the output is still over 500KB, lower the
                quality to 65&ndash;70, or resize the dimensions to 1280px wide first using the
                Resize Image tool.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download when the size is under 500KB
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result shows the exact compressed file size before you download. Once you see
                the size is 500KB or less, click Download. The file saves to your device with a
                &quot;compressed-&quot; prefix so it does not overwrite your original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why 500KB? Common Platforms and Use Cases
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 500KB file size is the most widely recommended target for web-optimized images. Here
          are the most common situations where you will need images under 500KB:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">WordPress & Blog Images</p>
            <p className="text-xs text-text-muted leading-relaxed">
              WordPress automatically serves images through its own compression, but uploading
              pre-optimized images under 500KB ensures faster load times for visitors and reduces
              server storage usage. Most SEO tools and Lighthouse audits flag images over 500KB as
              performance issues worth fixing.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">University & Government Portals</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Many online application and registration systems cap image uploads at 500KB for
              student ID photos, document scans, and supporting attachments. Unlike the stricter
              100KB limit (for passport-style photos), the 500KB limit typically applies to
              supporting documents where more detail is acceptable.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">E-commerce Product Photos</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Shopify, WooCommerce, and other e-commerce platforms recommend product images under
              500KB&ndash;1MB for page speed. At 500KB, a 1000&times;1000px product photo retains
              excellent clarity for zoom previews while loading quickly on product listing pages.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Social Media & Profile Photos</p>
            <p className="text-xs text-text-muted leading-relaxed">
              While most social platforms accept uploads up to several MB, pre-compressing to 500KB
              before uploading prevents the platform from applying its own compression algorithm.
              This gives you more control over the final display quality on profile photos, banners,
              and post images.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Email Newsletters & Campaigns</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Email marketing platforms like Mailchimp and Campaign Monitor recommend individual
              images under 1MB, with a best-practice target of under 500KB. Smaller images load
              faster in email clients — critical for recipients on mobile connections where image
              loading can account for most of the email open time.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Web Performance (Core Web Vitals)
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Google&apos;s Core Web Vitals measure Largest Contentful Paint (LCP) — how fast the
              main visible image loads. Images over 500KB are a common cause of poor LCP scores on
              mobile. Compressing all above-the-fold images to under 500KB is one of the
              highest-impact optimizations for SEO and page speed.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Quality Settings Guide: Hitting Under 500KB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Here is what to expect at different quality levels for a typical 1280&times;960px
          photograph:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 80 (High end)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~200&ndash;500KB. Excellent quality, no visible artifacts. Good starting point
              for 1280px photos. May still exceed 500KB for very detailed or high-contrast images.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 75 (Recommended)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~100&ndash;350KB. Visually excellent at screen sizes. This is the default and
              optimal setting for 500KB targets. Suitable for all web publishing, social media, and
              email uses.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 60&ndash;70</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~60&ndash;200KB. Good quality, minor artifacts visible only at full zoom on
              complex textures. Use when the original image is larger than 1920px or when extra
              headroom below 500KB is needed.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 40&ndash;55</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~30&ndash;100KB. Visible compression artifacts. Use only for non-critical
              thumbnails or when very large original images (5000px+) are still above 500KB at
              quality 65.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What If the Image Is Still Over 500KB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          If quality 65 still produces an output above 500KB, the image dimensions are likely the
          limiting factor. A 3000&times;2000px image has 6 million pixels — even at quality 60, this
          can produce files above 500KB for high-detail scenes. The most effective solution:
        </p>
        <ol className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">1.</span>
            <span>
              Use the{' '}
              <Link href="/resize-image" className="text-primary underline">
                Resize Image tool
              </Link>{' '}
              to reduce your image to 1280px wide. This is the standard dimension for most web
              images and reduces pixel count dramatically without affecting display quality on most
              screens.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">2.</span>
            <span>
              Upload the resized image to this page. At 1280px wide, quality 75 almost always
              produces 100&ndash;300KB — well within the 500KB target for any image type.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">3.</span>
            <span>
              For PNG files from design tools, consider{' '}
              <Link href="/png-to-jpg" className="text-primary underline">
                converting to JPG first
              </Link>{' '}
              if transparency is not required. A 3MB PNG can often become a 200KB JPG at quality 75,
              making the 500KB target trivial to hit.
            </span>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Stay on Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All compression runs entirely in your browser using JavaScript and the browser&apos;s
          built-in image processing APIs. Your image is never transmitted to any server, stored in
          any database, or seen by any third party. This applies to all image types — personal
          photos, business product images, confidential documents, and professional artwork. Close
          the tab and all image data is immediately cleared from memory.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          See our{' '}
          <Link href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>{' '}
          for full details.
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
              Reduce pixel dimensions to bring large images under 500KB.
            </p>
          </Link>
          <Link
            href="/compress-image-to-1mb"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress to 1MB
            </p>
            <p className="text-xs text-text-muted mt-1">
              Higher quality target for professional email and portfolios.
            </p>
          </Link>
          <Link
            href="/compress-image-to-200kb"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress to 200KB
            </p>
            <p className="text-xs text-text-muted mt-1">
              Stricter target for social media and CMS thumbnail uploads.
            </p>
          </Link>
        </div>
      </div>

      <CompressTo500KbFAQSection />
    </section>
  )
}

function CompressTo500KbFAQSection() {
  const faqs = [
    {
      q: 'How do I compress an image to under 500KB?',
      a: 'Upload your image and set the quality slider to 75. For most smartphone photos, quality 75 produces an output of 100–400KB — well under 500KB. Check the compressed size in the result. If still over 500KB, lower to 65–70, or use the Resize Image tool to reduce dimensions to 1280px wide before compressing.',
    },
    {
      q: 'What quality setting should I use for a 500KB target?',
      a: 'Quality 75 is the recommended starting point for 500KB targets. At quality 75, a typical 1280px wide photograph compresses to 100–350KB while retaining excellent visual quality. For larger images (1920px+), quality 75 still almost always reaches under 500KB. Only very high-resolution or high-detail images may need a lower setting or dimension reduction.',
    },
    {
      q: 'Why do platforms require images under 500KB?',
      a: '500KB is the standard threshold for web-optimized images. At 500KB, images load in under 0.5 seconds on a 10Mbps connection and under 2 seconds on a 4G mobile connection. WordPress, e-commerce platforms, and CMS systems recommend this limit for page speed. Google Core Web Vitals flag images over 500KB as LCP issues that hurt SEO rankings.',
    },
    {
      q: 'My image is still over 500KB after compression — what do I do?',
      a: 'High-resolution images (3000px+) can stay above 500KB even at quality 65. The most effective fix is to resize the pixel dimensions first. Use the Resize Image tool to reduce the image to 1280px wide, then compress at quality 75. A 1280px wide image at quality 75 almost always comes in well under 300KB for any image type.',
    },
    {
      q: 'Will the image look good at under 500KB?',
      a: 'Yes. At quality 75–80 at 1280px wide, images are visually indistinguishable from the original at normal screen viewing sizes. This quality range is the standard for professional web publishing, blog images, and social media. Compression artifacts are only visible when pixel-peeping at 100% zoom on very fine textures.',
    },
    {
      q: 'How does 500KB compare to 200KB and 1MB targets?',
      a: '500KB is the middle ground between the strict form-submission limit (100–200KB) and the general web limit (1MB). It provides better visual quality than 200KB while loading faster than 1MB files. 500KB is the sweet spot for most web use cases: blog images, product photos, and social media posts where visual quality matters.',
    },
    {
      q: 'Which format compresses best to under 500KB?',
      a: 'JPG is easiest for photographs — most smartphone photos compress to under 500KB at quality 75 in a single step. WebP is even more efficient, producing files 25–35% smaller than JPG at the same quality. PNG is harder because it uses lossless compression; large PNGs often need dimension reduction or conversion to JPG to reliably reach 500KB.',
    },
    {
      q: 'Are my images uploaded to a server?',
      a: 'No. All compression happens locally in your browser. Your image files never leave your device and are never sent to any external server. This makes the tool safe for any image — personal photos, business assets, confidential documents, and proprietary artwork.',
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
