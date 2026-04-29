import Link from 'next/link'
import FAQItem from './FAQItem'

export default function CompressTo5MbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 5MB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Does &quot;Compress Image to 5MB&quot; Mean?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Compressing an image to 5MB means reducing its digital file size to 5 megabytes or less.
          This target is most relevant for high-resolution images from professional cameras,
          mirrorless systems, and modern smartphones shooting in ProRAW or high-efficiency formats.
          A 24&ndash;50 megapixel camera can produce RAW exports and high-quality JPEGs of
          15&ndash;50MB — far beyond what most email clients, messaging apps, and online platforms
          can accept without issues.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The 5MB target is unique because it prioritizes preserving image quality above all else.
          At quality 88&ndash;92, the compression is minimal — output files are near-lossless and
          virtually indistinguishable from the original even when viewed at 100% zoom. You get the
          smallest acceptable file size without any meaningful sacrifice in sharpness, color
          accuracy, or fine detail. This tool shows the exact output size before you download.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 5MB — Step by Step
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard (Ctrl+V). JPG, PNG,
                and WebP files up to 20MB are accepted. Processing is entirely local — your image
                never leaves your browser.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Start at quality 88 — the default for 5MB targets
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The default quality on this page is 88, which is calibrated for 5MB targets. At
                quality 88, most large DSLR and mirrorless JPEGs (10&ndash;25MB) compress to
                2&ndash;4MB with no visible quality loss. Check the compressed size shown in the
                result. If the output is still above 5MB, lower the quality to 82&ndash;85.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download when the size is under 5MB
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result card shows the exact file size before you download. Once the size reads
                5,120KB (5MB) or less, click Download. The compressed file saves to your device with
                a &quot;compressed-&quot; prefix, preserving your original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why 5MB? Platforms and Situations That Need This Target
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 5MB threshold matters more than it appears. Many platforms and workflows silently
          apply their own compression or fail to accept images above this limit:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Email (Gmail & Outlook)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Gmail and Outlook both display inline image previews in email messages, but images
              over 5MB are handled differently across clients and mobile apps. Keeping individual
              inline images under 5MB ensures consistent rendering across desktop and mobile email
              clients without unexpected attachment conversion.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Messaging Apps (WhatsApp, Telegram)
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              WhatsApp compresses images above approximately 5MB automatically, often reducing
              quality in ways you cannot control. Telegram similarly applies automatic compression
              to large images sent as photos (not files). Pre-compressing to under 5MB before
              sending gives you control over the output quality.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Online Portfolio Platforms</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Platforms like Behance, Dribbble, and portfolio website builders often cap individual
              image uploads at 5&ndash;10MB. Professional photographers and designers frequently
              need to bring exported images from Lightroom, Capture One, or Photoshop under 5MB
              while retaining maximum quality for client presentation.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Print Service Uploads</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Photo printing services and online print shops often accept files up to 10&ndash;20MB,
              but many have upload size limits or slow upload interfaces. Compressing to under 5MB
              speeds up uploads significantly while keeping print quality high — for most print
              sizes, quality 88 at 300 DPI is sufficient.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Cloud Storage & File Sharing</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Free tiers of cloud storage (Google Drive, Dropbox, iCloud) have total storage limits.
              Compressing images to under 5MB before uploading reduces storage consumption
              significantly for large collections. At quality 88, a 20MB RAW export compresses to
              3&ndash;4MB with effectively lossless quality for screen viewing.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Collaboration Tools</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Slack free plan limits file storage. Notion, Confluence, and other collaboration
              platforms load images inline in pages — large images slow page rendering
              significantly. Compressing shared images to under 5MB ensures they load fast in team
              wikis and project boards without sacrificing quality for design review.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Quality Settings Guide: Near-Lossless Compression for 5MB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          For a 5MB target, you can afford very high quality settings. Here is what to expect at
          different levels for a typical 24MP camera JPEG (4500&times;3000px):
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 92+ (Very high)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~5&ndash;12MB. May exceed 5MB for very high-detail images. Use only if the
              original is extremely large and the target is just to reduce slightly. For most 24MP
              images, this will still exceed 5MB.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 88 (Recommended)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~2&ndash;4MB for a 24MP photo. Near-lossless — no visible difference from the
              original at any viewing size. This is the default and ideal setting for 5MB targets.
              Works for virtually all professional photography workflows.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 80&ndash;85</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~1&ndash;3MB for a 24MP photo. Still excellent quality with no visible
              artifacts at screen viewing sizes. Use when quality 88 still produces output over 5MB,
              which typically only happens with 50MP+ camera images.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Quality 70&ndash;78</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Output: ~500KB&ndash;2MB for a 24MP photo. Very good quality for screen viewing.
              Reserve for ultra-high-resolution images (50MP+) that remain above 5MB at quality 80.
              Suitable for all web and presentation purposes.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What If the Image Is Still Over 5MB After Compression?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Very high-resolution images — 50 megapixels or more from medium format cameras, high-end
          mirrorless systems, or professional scanners — can remain above 5MB even at quality 85.
          Here is how to handle these cases:
        </p>
        <ol className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">1.</span>
            <span>
              Lower the quality to 80&ndash;82. For most professional photography purposes, quality
              80 is excellent — differences from quality 88 are only visible when pixel-peeping at
              100% zoom on fine detail areas. Most clients and platforms cannot tell the difference.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">2.</span>
            <span>
              If quality reduction is not acceptable, use the{' '}
              <Link href="/resize-image" className="text-primary underline">
                Resize Image tool
              </Link>{' '}
              to slightly reduce the pixel dimensions. Reducing a 8000&times;5000px image to
              5000&times;3125px cuts pixel count by 60%, typically bringing the file under 5MB at
              quality 88.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">3.</span>
            <span>
              For PNG exports from design tools that exceed 5MB, consider{' '}
              <Link href="/png-to-jpg" className="text-primary underline">
                converting to JPG first
              </Link>
              . A 15MB PNG from Figma or Photoshop can often become a 2MB JPG at quality 88 — well
              under 5MB with no visible quality difference for screen or print display.
            </span>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Which Image Types Most Often Need 5MB Compression?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">
              DSLR & Mirrorless Camera Photos
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Modern full-frame cameras (Sony A7, Canon R, Nikon Z series) produce 20&ndash;45MP
              images that export as 8&ndash;25MB JPEGs. Quality 88 typically compresses these to
              2&ndash;4MB with no loss in print or screen quality.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Smartphone ProRAW & High-Res</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              iPhone ProRAW exports and Android high-resolution modes (Samsung 108MP, 200MP) produce
              files of 10&ndash;80MB. Even compressed to JPEG, these can exceed 5MB. Quality 88
              brings most smartphone ultra-high-res exports to under 4MB.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Design Exports (PNG/Figma)</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Figma, Photoshop, and Illustrator exports at 2x or 3x resolution for high-DPI screens
              frequently produce PNG files of 10&ndash;30MB. Converting to JPG at quality 88 reduces
              these to 1&ndash;4MB while retaining full visual quality for screen presentation.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All compression runs entirely in your browser. Your image is processed using JavaScript
          and the browser&apos;s built-in image APIs — no data is ever transmitted to any server.
          This is particularly important for professional photographers sharing client work,
          designers sharing unreleased projects, and anyone compressing images that contain
          sensitive or confidential content. Close the tab and all image data is immediately cleared
          from browser memory.
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
              Reduce pixel dimensions for very large camera images.
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
              Tighter target for email, CMS uploads, and web publishing.
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
              Web-optimized target for blog images and social media posts.
            </p>
          </Link>
        </div>
      </div>

      <CompressTo5MbFAQSection />
    </section>
  )
}

function CompressTo5MbFAQSection() {
  const faqs = [
    {
      q: 'How do I compress an image to under 5MB?',
      a: 'Upload your image and set the quality slider to 88 (the default on this page). For most large DSLR and mirrorless camera photos (10–25MB), quality 88 produces an output of 2–4MB with no visible quality loss. Check the compressed size in the result. If still over 5MB, lower the quality to 82–85.',
    },
    {
      q: 'What quality setting should I use for a 5MB target?',
      a: 'Quality 88 is the recommended starting point. It produces near-lossless compression — the output is visually indistinguishable from the original at any screen viewing size, and differences are only detectable when pixel-peeping at 100% zoom in image editing software. For very large images (50MP+), lower to quality 82–85.',
    },
    {
      q: 'Why do I need to compress images to under 5MB?',
      a: 'The 5MB threshold matters for email (Gmail and Outlook handle images over 5MB inconsistently across clients), messaging apps (WhatsApp and Telegram automatically recompress images above ~5MB), online portfolio platforms, print service upload portals, and collaboration tools like Slack and Notion where large images slow page loading.',
    },
    {
      q: 'My image is still over 5MB at quality 88 — what do I do?',
      a: 'Very high-resolution images from 50MP+ cameras or ultra-high-res smartphone modes can remain above 5MB at quality 88. Lower the quality to 82–85, which still produces excellent near-lossless results for screen viewing. Alternatively, use the Resize Image tool to slightly reduce the pixel dimensions — reducing a 8000px image to 5000px typically brings the file well under 5MB at quality 88.',
    },
    {
      q: 'Will I lose any quality compressing to under 5MB?',
      a: 'At quality 88, the visual difference between the original and compressed file is imperceptible at all normal screen viewing sizes. Even professional photographers using this setting for client delivery cannot see a difference without using specialized image comparison tools. Only at quality below 80 do compression artifacts start becoming visible at 100% zoom.',
    },
    {
      q: 'What types of images most often need to be compressed to under 5MB?',
      a: 'DSLR and mirrorless camera photos (20–45MP), iPhone ProRAW and Android ultra-high-res exports, PNG exports from design tools like Figma and Photoshop at 2x/3x resolution, and high-resolution document or artwork scans are the most common file types that exceed 5MB and need reduction for sharing.',
    },
    {
      q: 'How is compressing to 5MB different from compressing to 1MB or 500KB?',
      a: 'Compressing to 5MB is about preserving maximum quality while meeting platform limits — you use the highest quality settings (88+) and barely touch the image. Compressing to 1MB requires moderate compression (quality 80–82), and compressing to 500KB or 100KB requires more aggressive settings and often dimension reduction. The 5MB target is for professional workflows where quality cannot be compromised.',
    },
    {
      q: 'Are my images uploaded to a server?',
      a: 'No. All compression runs entirely in your browser. Your files never leave your device. This is especially important for professional photographers and designers sharing client work, unreleased project files, or any image that should not be processed on a third-party server.',
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
