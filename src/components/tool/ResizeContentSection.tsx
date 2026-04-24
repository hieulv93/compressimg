import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ResizeContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border" aria-label="Guide to image resizing">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is Image Resizing?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Image resizing is the process of changing the pixel dimensions of an image — its width and
          height — to fit a specific requirement. Whether you need to resize a photo to meet a
          platform&apos;s upload guidelines, prepare images for print, or reduce file size by
          shrinking dimensions, resizing gives you precise control over the output.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Unlike{' '}
          <Link href="/compress-image" className="text-primary underline">
            image compression
          </Link>
          , which reduces file size by removing image data, resizing changes the actual canvas — the
          number of pixels. A 4000×3000 photo resized to 1280×960 will have fewer pixels and a
          naturally smaller file size, while a small image scaled up to 4K will have more pixels but
          may lose sharpness.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize Images Online — 3 Simple Steps
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
                Supported formats: JPG, PNG, WebP — up to 20MB.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set your dimensions</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Enter a custom width and height, or click a quick preset — Instagram Post, YouTube
                Thumbnail, Full HD, and more. Toggle the lock icon to maintain aspect ratio
                automatically.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download your resized image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Resizing happens instantly in your browser. Click Download to save the result. The
                output keeps the original file format — JPG stays JPG, PNG stays PNG.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Standard Image Sizes by Platform</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Each social media platform and use case has its own recommended image dimensions. Here are
          the most common ones — all available as quick presets in the tool above:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-xs font-semibold text-text-muted uppercase tracking-wide">
                  Platform / Use
                </th>
                <th className="text-left py-2 pr-4 text-xs font-semibold text-text-muted uppercase tracking-wide">
                  Width × Height
                </th>
                <th className="text-left py-2 text-xs font-semibold text-text-muted uppercase tracking-wide">
                  Ratio
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { use: 'Instagram Post', dim: '1080 × 1080', ratio: '1:1' },
                { use: 'Instagram Story / Reel', dim: '1080 × 1920', ratio: '9:16' },
                { use: 'Twitter / X Header', dim: '1500 × 500', ratio: '3:1' },
                { use: 'YouTube Thumbnail', dim: '1280 × 720', ratio: '16:9' },
                { use: 'Facebook Cover Photo', dim: '851 × 315', ratio: '~2.7:1' },
                { use: 'LinkedIn Cover', dim: '1584 × 396', ratio: '4:1' },
                { use: 'Passport Photo (US)', dim: '413 × 531', ratio: '2×2 inch' },
                { use: 'Full HD (1080p)', dim: '1920 × 1080', ratio: '16:9' },
                { use: '4K / UHD', dim: '3840 × 2160', ratio: '16:9' },
                { use: 'OG / Share Image', dim: '1200 × 630', ratio: '~1.91:1' },
              ].map((row) => (
                <tr key={row.use}>
                  <td className="py-2 pr-4 text-text-main font-medium">{row.use}</td>
                  <td className="py-2 pr-4 text-text-muted font-mono text-xs">{row.dim}</td>
                  <td className="py-2 text-text-muted text-xs">{row.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Resize vs Compress — What&apos;s the Difference?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          These two operations are often confused but serve different purposes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">↔ Resizing</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Changes pixel dimensions (width × height). Shrinking reduces file size naturally.
              Enlarging may reduce sharpness. Use when you need a specific pixel size — for a
              platform, print, or design template.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">🗜 Compression</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Keeps the same pixel dimensions but removes redundant data to shrink the file. Up to
              90% smaller with minimal visible quality loss. Use when you need a smaller file size
              but the same image dimensions.{' '}
              <Link href="/compress-image" className="text-primary underline">
                Try it here →
              </Link>
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For the best results, resize first to your target dimensions, then compress to reduce file
          size further. This two-step process gives you both the right dimensions and the smallest
          possible file size.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Supported Image Formats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <h3 className="font-semibold text-text-main text-sm">JPG / JPEG</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Best for photographs. Resizing preserves the JPG format. Smaller dimensions result in
              smaller file sizes without additional compression.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <h3 className="font-semibold text-text-main text-sm">PNG</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Best for logos, graphics, and transparent images. Resizing preserves full alpha
              channel transparency. Output stays in PNG format.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <h3 className="font-semibold text-text-main text-sm">WebP</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Modern format with excellent quality-to-size ratio. Resizing preserves WebP format on
              supported browsers (Chrome, Firefox, Edge, Safari 16+).
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Does Resizing an Image Reduce Its Quality?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Scaling an image <strong className="text-text-main">down</strong> (to smaller dimensions)
          generally preserves quality well — pixels are averaged together, which often produces a
          sharp result. Our tool uses high-quality bicubic-style interpolation via the
          browser&apos;s built-in canvas engine for smooth downscaling.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Scaling an image <strong className="text-text-main">up</strong> (to larger dimensions)
          always reduces relative sharpness because the software must invent pixel data that does
          not exist in the original. For best results when enlarging, try not to exceed 2× the
          original dimensions. If you need high-quality upscaling, dedicated AI upscalers produce
          better results than standard canvas resizing.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for Getting the Best Results</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Always resize before compressing:</strong> Shrink
              dimensions first, then run through the{' '}
              <Link href="/compress-image" className="text-primary underline">
                image compressor
              </Link>{' '}
              to get the smallest possible file size without sacrificing quality.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use lock aspect ratio for photos:</strong> Keeping
              the original proportions prevents stretched or squished results. Only unlock when a
              platform requires an exact fixed crop (like passport photos or banner ads).
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Avoid extreme upscaling:</strong> Enlarging a small
              image beyond 2× its original size produces visible pixelation and blurring. For
              high-quality enlargements, use a dedicated AI upscaler instead.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use PNG for logos and graphics:</strong> PNG
              preserves sharp edges and transparency after resizing. For photographs, JPG at quality
              80–85 after resizing gives the best size-to-quality ratio.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All resizing happens entirely in your browser using the HTML5 Canvas API. Your images are
          never uploaded to a server, never stored, and never analyzed. There are no accounts, no
          watermarks, and no usage limits. Close the browser tab and the image data is gone — no
          trace remains anywhere. This makes our tool safe to use with sensitive images such as ID
          documents, medical photos, and personal photographs.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For full details, see our{' '}
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
              Compress Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce image file size up to 90% without visible quality loss.
            </p>
          </Link>
          <Link
            href="/convert-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Convert Image Format
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert between JPG, PNG, and WebP instantly in your browser.
            </p>
          </Link>
          <Link
            href="/crop-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Crop Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Trim and cut any area with free or fixed aspect ratio presets.
            </p>
          </Link>
        </div>
      </div>

      <ResizeFAQSection />
    </section>
  )
}

function ResizeFAQSection() {
  const faqs = [
    {
      q: 'Is this image resizer free to use?',
      a: 'Yes, completely free with no limits. No sign-up, no subscription, no watermarks. You can resize as many images as you want at no cost.',
    },
    {
      q: 'Does resizing reduce image quality?',
      a: 'Shrinking an image (downscaling) generally preserves quality very well — our tool uses high-quality browser interpolation for smooth results. Enlarging an image (upscaling) can reduce sharpness because new pixel data must be interpolated from existing pixels. For upscaling beyond 2×, AI-based upscalers produce significantly better results than standard canvas resizing.',
    },
    {
      q: 'Can I resize an image without changing the aspect ratio?',
      a: 'Yes. Enable the lock icon between the width and height fields. When locked, changing one dimension automatically calculates the other to maintain the original aspect ratio.',
    },
    {
      q: 'What is the maximum image size I can upload?',
      a: 'The maximum file size is 20MB and maximum output dimensions are 8000×8000 pixels. These limits cover all standard use cases including high-resolution photography.',
    },
    {
      q: 'Will the output keep the original file format?',
      a: 'Yes. JPG images are resized and saved as JPG. PNG files keep their format and transparency. WebP files are saved as WebP on supported browsers.',
    },
    {
      q: 'Why is the resized file larger than the original?',
      a: 'When you increase the dimensions of an image, the output has more pixels and therefore a larger file size. This is expected behavior. If you need a smaller file, try resizing to smaller dimensions or use the Compress Image tool afterward.',
    },
    {
      q: 'Are my images uploaded to a server?',
      a: 'No. All resizing is done 100% in your browser using the HTML5 Canvas API. Your images never leave your device and are never stored anywhere.',
    },
    {
      q: 'Does this work on mobile phones?',
      a: 'Yes. The tool is fully optimized for iOS and Android browsers. Tap to select a photo from your gallery, set the dimensions, and download the result — no app required.',
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
