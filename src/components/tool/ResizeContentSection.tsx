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
          <li id="step-1" className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <h3 className="text-sm font-semibold text-text-main">
                Upload Your Image (JPG, PNG, WebP, HEIC)
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your file, or paste from clipboard (Ctrl+V).
                Supported formats: JPG, PNG, WebP, HEIC — up to 20MB.
              </p>
            </div>
          </li>
          <li id="step-2" className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <h3 className="text-sm font-semibold text-text-main">
                Set New Dimensions or Choose a Preset
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Enter a custom width and height, or click a quick preset — Instagram Post, YouTube
                Thumbnail, Full HD, and more. Toggle the lock icon to maintain aspect ratio
                automatically.
              </p>
            </div>
          </li>
          <li id="step-3" className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <h3 className="text-sm font-semibold text-text-main">Download the Resized Image</h3>
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
        <h2 className="text-xl font-bold text-text-main">How to Resize an Image for Instagram</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Instagram supports multiple aspect ratios depending on the post type. Using the wrong size
          results in automatic cropping that can cut out faces or key parts of the image. Here are
          the exact dimensions to use:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Square post:</strong> 1080×1080px (1:1) — the
              safest choice, displays well in the grid and feed.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Portrait post:</strong> 1080×1350px (4:5) — maximum
              screen real estate in the feed, ideal for fashion and product photos.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Story / Reel:</strong> 1080×1920px (9:16) — full
              vertical screen. Leave safe zones of ~250px top and bottom for UI overlays.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Landscape post:</strong> 1080×566px (1.91:1) — used
              for wide panoramic shots. Avoid for portraits as it forces horizontal framing.
            </span>
          </li>
        </ul>
        <p className="text-text-muted text-sm leading-relaxed">
          Upload your photo above, enter the target dimensions, and click Resize Image. For best
          quality, always resize down from a larger original — never upscale a small photo to fit
          Instagram&apos;s dimensions.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Resize Image to a Specific File Size (KB)
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pixel dimensions and file size (in KB) are related but different things. Reducing
          dimensions always reduces file size — but you cannot always hit an exact KB target by
          adjusting pixels alone. Government portals, exam registrations, and visa applications
          often specify both: &ldquo;Photo: 1080×1080px, under 200KB.&rdquo;
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          If you need to hit a specific KB limit, use our dedicated tool after resizing:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { href: '/resize-image-to-20kb/', label: 'Resize to 20KB' },
            { href: '/resize-image-to-50kb/', label: 'Resize to 50KB' },
            { href: '/resize-image-to-100kb/', label: 'Resize to 100KB' },
            { href: '/resize-image-to-200kb/', label: 'Resize to 200KB' },
            { href: '/resize-image-to-500kb/', label: 'Resize to 500KB' },
            { href: '/resize-image-in-kb/', label: 'Custom KB target' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs px-3 py-2 rounded-xl border border-border text-text-muted hover:border-primary hover:text-primary transition-colors text-center"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Batch Resize — Resize 10 Images at Once
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Need to resize a set of product photos, blog images, or thumbnails to the same size? Our{' '}
          <Link href="/resize-images/" className="text-primary underline">
            batch image resizer
          </Link>{' '}
          lets you upload up to 10 images at once and resize them all in one step. Choose from three
          modes:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Max width:</strong> Cap the longest dimension —
              great for web images that need to load fast (800px, 1280px, 1920px presets).
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Percentage:</strong> Scale every image to 25%, 50%,
              or 75% of its original size — useful for bulk downsizing.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Exact size:</strong> Force all images to the same
              pixel dimensions — Instagram square (1080×1080), Full HD (1920×1080), and more.
            </span>
          </li>
        </ul>
        <p className="text-text-muted text-sm leading-relaxed">
          All resized images download as a single ZIP file.{' '}
          <Link href="/resize-images/" className="text-primary underline">
            Try batch resize →
          </Link>
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          HEIC Photos from iPhone — Automatic Conversion
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          iPhones shoot in HEIC format by default since iOS 11. HEIC files are not accepted by most
          portals, design tools, or social media platforms — but they cannot be sent directly to a
          canvas-based resizer either. Our tool handles this automatically:
        </p>
        <ol className="space-y-2 text-sm text-text-muted list-none">
          <li className="flex gap-2">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <span>You upload a .heic file from your iPhone camera roll.</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <span>The tool converts it to JPEG in your browser — no file is sent to a server.</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <span>
              The converted image is resized to your target dimensions and downloaded as JPEG.
            </span>
          </li>
        </ol>
        <p className="text-text-muted text-sm leading-relaxed">
          No separate HEIC converter step needed. If you only want to convert HEIC to JPG without
          resizing, see our dedicated{' '}
          <Link href="/heic-to-jpg/" className="text-primary underline">
            HEIC to JPG converter
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90% without visible quality loss.',
            },
            {
              href: '/resize-images/',
              label: 'Batch Resize',
              desc: 'Resize up to 10 images at once, download as ZIP.',
            },
            {
              href: '/resize-image-in-kb/',
              label: 'Resize in KB',
              desc: 'Hit an exact file size target — 20KB, 50KB, 100KB and more.',
            },
            {
              href: '/heic-to-jpg/',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone HEIC photos to standard JPEG.',
            },
            {
              href: '/compress-image-for-passport/',
              label: 'Passport Compressor',
              desc: 'US passport photo under 240KB in one click.',
            },
            {
              href: '/compress-image',
              label: 'Resize + Compress',
              desc: 'Resize first, then compress — smallest file, best quality.',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={label}
              href={href}
              className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-1">{desc}</p>
            </Link>
          ))}
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
    {
      q: 'Can I resize a HEIC photo from my iPhone?',
      a: 'Yes. Upload the .heic file directly — the tool automatically converts it to JPEG in your browser before resizing. No separate HEIC converter step is needed. The download will be a standard JPEG file.',
    },
    {
      q: 'What is the best image size for an Instagram post?',
      a: 'For a square post: 1080×1080px (1:1). For a portrait post: 1080×1350px (4:5) — this takes up the most feed space. For a Story or Reel: 1080×1920px (9:16). All three are available as quick presets in the tool above.',
    },
    {
      q: 'How do I resize an image to a specific KB size?',
      a: 'Resizing by pixels reduces file size as a side effect, but cannot hit an exact KB target precisely. Use our dedicated KB resizer tools — available for 20KB, 50KB, 100KB, 200KB, and 500KB targets — which use automatic quality adjustment to hit the exact limit.',
    },
    {
      q: 'Can I resize multiple images at once?',
      a: 'Yes. Use our batch image resizer at /resize-images/ — it accepts up to 10 files at once and downloads all resized images as a ZIP file. Supports max width, percentage, and exact size modes.',
    },
    {
      q: 'Can I resize a PNG without losing transparency?',
      a: 'Yes. PNG files retain their alpha channel (transparency) after resizing. The output is saved as PNG, preserving any transparent backgrounds or semi-transparent areas in the original.',
    },
    {
      q: 'What happens to EXIF data when I resize?',
      a: 'EXIF metadata (camera model, GPS location, date taken) is typically stripped during canvas-based resizing. This is actually a privacy benefit — resized images will not contain location data embedded in the original photo.',
    },
    {
      q: 'How do I resize a passport photo?',
      a: 'For a US passport photo, the required size is 2×2 inches (600×600px at 300 DPI, or 413×531px for digital submission). Set width to 600 and height to 600, then ensure the face fills 70–80% of the frame. For file size under 240KB, use our Passport Compressor tool after resizing.',
    },
    {
      q: 'What is the best image size for a YouTube thumbnail?',
      a: 'YouTube recommends 1280×720px (16:9 aspect ratio) at under 2MB. This size displays correctly at all thumbnail sizes — from search results to the watch page. Use the YouTube Thumbnail preset in the tool above for one-click sizing.',
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-text-main">
        Frequently Asked Questions About Image Resizing
      </h2>
      <dl className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </dl>
    </div>
  )
}
