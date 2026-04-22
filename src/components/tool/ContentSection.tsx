import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to image compression"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is Image Compression?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Image compression is the process of reducing the file size of an image while maintaining
          acceptable visual quality. When you compress image files, you remove redundant data that
          the human eye cannot easily detect, resulting in smaller files that load faster on
          websites, take up less storage, and are quicker to share via email or messaging apps.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          There are two main types of image compression:{' '}
          <strong className="text-text-main">lossy</strong> and{' '}
          <strong className="text-text-main">lossless</strong>. Lossy compression (used for JPG and
          WebP) permanently removes some image data to achieve smaller file sizes — typically
          reducing files by 60–90% with minimal visible quality loss. Lossless compression (used for
          PNG) reduces file size without losing any data, but typically achieves smaller reductions
          of 10–30%.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images Online — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area above, drag and drop your image, or paste it from your
                clipboard (Ctrl+V). We accept JPG, PNG, and WebP files up to 20MB.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Choose your quality level</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Use the quality slider to balance file size against image quality. The default
                setting of 80% delivers excellent results for most images — reducing file size by
                60–80% while keeping the image looking sharp. Set it lower (40–60%) for maximum
                compression, or higher (85–95%) to preserve fine details in photos.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download your compressed image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Compression happens instantly in your browser. Once complete, you will see the
                original size, compressed size, and how much space you saved. Click the Download
                button to save your compressed image.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Reducing image file size has a significant impact on performance, cost, and user
          experience across many contexts:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Faster websites:</strong> Images are the single
              largest contributor to page weight. Compressing images can cut load times by 2–5
              seconds on mobile connections, directly improving Google Core Web Vitals scores and
              SEO rankings.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Lower storage costs:</strong> Compressed images
              take up less space in cloud storage (AWS S3, Google Cloud, Cloudinary), which reduces
              hosting costs at scale. A website with 10,000 product images can save gigabytes of
              storage by compressing to optimal sizes.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Email and social media sharing:</strong> Many email
              services reject attachments over 10MB, and social platforms automatically re-compress
              images (often poorly). Compressing before uploading gives you control over final
              quality.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Better mobile experience:</strong> Mobile users on
              4G or slower connections benefit the most from optimized images. Reducing image sizes
              by 70% can save megabytes of data per page load.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">E-commerce conversions:</strong> Studies show that
              a 1-second delay in page load time reduces conversions by up to 7%. Optimizing product
              images is one of the fastest ways to improve site speed and revenue.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Supported Image Formats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <h3 className="font-semibold text-text-main text-sm">JPG / JPEG</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Best for photographs and images with gradients. Lossy compression achieves 60–90% file
              size reduction. Ideal for blog posts, social media, and product photos.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <h3 className="font-semibold text-text-main text-sm">PNG</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Best for images with transparency, logos, and graphics with flat colors. Supports
              lossless compression. Use PNG when you need sharp edges and alpha transparency.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <h3 className="font-semibold text-text-main text-sm">WebP</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Modern format from Google that outperforms both JPG and PNG. Supported by all modern
              browsers. WebP delivers 25–35% smaller files than JPG at equivalent quality.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Compress Images Without Losing Quality</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The key to compressing images without visible quality loss is choosing the right quality
          level for the content. For photographs with rich detail, a quality setting of 75–85% is
          typically indistinguishable from the original when viewed on screen. For images that will
          be displayed small (thumbnails, icons), you can compress more aggressively to quality
          50–60% without visible degradation.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Our compressor uses advanced algorithms via the browser-image-compression library, which
          runs compression in a Web Worker to keep your browser responsive. Maximum image dimensions
          are automatically capped at 1920px — matching standard screen resolutions — so images are
          never scaled up unnecessarily. The result is consistently high-quality output at
          dramatically reduced file sizes.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Reduce Image Size to a Specific KB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          If you need to reduce image size to a specific target like 100KB or 200KB, use the quality
          slider as a guide. Start at quality 80 and check the compressed size shown after
          processing. If the file is still too large, click &quot;Compress another image&quot; to
          reset, then try a lower quality setting (e.g., 60 or 50). Repeat until the output meets
          your size requirement.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          As a general rule: <strong className="text-text-main">Quality 80</strong> = roughly 60–75%
          reduction from original. <strong className="text-text-main">Quality 60</strong> = roughly
          75–85% reduction. <strong className="text-text-main">Quality 40</strong> = 85–90%
          reduction (noticeable quality loss on large prints). For web use, quality 70–85 is the
          optimal range for most images.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Unlike many online image compressors that upload your files to remote servers for
          processing, our tool runs entirely in your browser using the Web Compression API and
          JavaScript. Your images are never uploaded, stored, or analyzed on any server. There are
          no accounts to create, no watermarks added, and no usage limits. Compression happens
          locally on your device within seconds, making it both faster and more private than
          server-based alternatives.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For full details on how we handle data and advertising, see our{' '}
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

      <FAQSection />
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: 'Is this image compressor free to use?',
      a: 'Yes, completely free with no limits. There are no sign-ups, subscriptions, or watermarks. You can compress as many images as you want at no cost.',
    },
    {
      q: 'Does compressing an image reduce its quality?',
      a: 'Lossy compression (JPG, WebP) does remove some image data, but at quality settings of 75–85%, the difference is invisible to the human eye in most photos. Lossless compression (PNG) reduces file size without removing any data. You can use the quality slider to find the right balance for your needs.',
    },
    {
      q: 'What is the maximum file size I can compress?',
      a: 'The maximum file size is 20MB per image. This covers the vast majority of images from cameras, phones, and design tools. If your image is larger than 20MB, consider resizing the dimensions first.',
    },
    {
      q: 'Which image format gives the best compression?',
      a: 'WebP generally delivers the best compression — 25–35% smaller than JPG at the same visual quality. For photographs, JPG with quality 75–85 is a great balance. PNG is best when you need transparency, but it compresses less efficiently than JPG or WebP for photos.',
    },
    {
      q: 'Are my images uploaded to a server?',
      a: 'No. All compression happens 100% in your browser using JavaScript and Web Workers. Your images never leave your device and are never stored on any server. Your privacy is fully protected.',
    },
    {
      q: 'Can I compress PNG images without losing transparency?',
      a: 'Yes. When you compress a PNG file, the output retains full alpha channel (transparency) support. You can compress PNG images without worrying about transparency being lost or replaced with a white background.',
    },
    {
      q: 'How much can I reduce image file size?',
      a: 'Typical reductions are 60–90% depending on the image and quality setting. A 5MB JPG photograph can often be compressed to under 500KB while remaining visually identical on screen. For PNG files with flat colors and graphics, reductions of 30–60% are typical.',
    },
    {
      q: 'Does this work on mobile phones?',
      a: 'Yes. The tool is fully optimized for mobile browsers on iOS and Android. You can tap to open your camera roll or photo library, select an image, and download the compressed result — all within your mobile browser, no app required.',
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
