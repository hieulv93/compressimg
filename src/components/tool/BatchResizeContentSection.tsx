import Link from 'next/link'
import FAQItem from './FAQItem'

export default function BatchResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to batch image resizing"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is Batch Image Resizing?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Batch image resizing means changing the pixel dimensions of multiple images in a single
          operation — instead of opening and resizing each file one at a time. Whether you&apos;re
          preparing a set of product photos for an e-commerce store, resizing screenshots for
          documentation, or scaling down photos from a camera roll before uploading to a platform,
          batch resizing saves hours compared to editing files individually.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool processes all your images entirely inside your browser using the HTML5 Canvas
          API. No images are sent to any server. You upload, resize, and download — everything stays
          on your device.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          How to Batch Resize Images — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Choose your resize mode and settings
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Select <strong>Max Width</strong> to scale images down to a maximum pixel width,{' '}
                <strong>Percentage</strong> to reduce all images by a set percentage of their
                original size, or <strong>Exact Size</strong> to resize every image to the same
                fixed dimensions. Use the preset buttons to quickly apply common sizes like 1920px,
                50%, or 1080×1080.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your images</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area or drag and drop up to 10 images at once. Supported formats:
                JPG, PNG, WebP, and HEIC (iPhone photos). Each file can be up to {'{'}20{'}'}MB.
                HEIC files are automatically converted to JPEG before resizing — no extra steps
                needed.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download all resized images as ZIP
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Once all images are processed, click <strong>Download All as ZIP</strong>. All
                resized files are bundled into a single ZIP download. You can also download each
                image individually by clicking the download icon next to each result.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Batch Resize Modes Explained</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-text-main">Max Width</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Scales each image down so its width does not exceed the value you enter. The height
              adjusts automatically to preserve the aspect ratio. Images that are already narrower
              than the limit are kept at their original size. Best for preparing images for web
              pages, email, or platforms with a maximum width restriction.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-text-main">Percentage</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Scales all images proportionally by the percentage you choose. At 50%, every image
              becomes half its original width and height. At 25%, images shrink to a quarter. Useful
              when you want a consistent relative reduction across a batch — for example, scaling
              down a set of DSLR exports to 50% for faster web delivery.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-text-main">Exact Size</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Resizes every image to the exact pixel dimensions you specify (width × height). All
              images in the batch will have identical output dimensions regardless of their original
              size or aspect ratio. Use this for social media content where a fixed canvas size is
              required — like 1080×1080 for Instagram or 1280×720 for YouTube thumbnails.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Common Batch Resize Presets</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Preset</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Setting
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">Web small</td>
                <td className="px-4 py-3">Max width 800px</td>
                <td className="px-4 py-3">Blog inline images, email</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">Web large</td>
                <td className="px-4 py-3">Max width 1920px</td>
                <td className="px-4 py-3">WordPress featured images, hero banners</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">Shopify product</td>
                <td className="px-4 py-3">Exact 2048×2048</td>
                <td className="px-4 py-3">Product photos on Shopify storefronts</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">Instagram post</td>
                <td className="px-4 py-3">Exact 1080×1080</td>
                <td className="px-4 py-3">Square carousel posts</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">Thumbnail</td>
                <td className="px-4 py-3">Exact 300×300</td>
                <td className="px-4 py-3">YouTube thumbnails, blog post cards</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">DSLR scale-down</td>
                <td className="px-4 py-3">Percentage 25%</td>
                <td className="px-4 py-3">Export batch from 48MP camera</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">Email attachment</td>
                <td className="px-4 py-3">Max width 1024px</td>
                <td className="px-4 py-3">Photos shared via Gmail, Outlook</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text-main">Social media mix</td>
                <td className="px-4 py-3">Max width 1280px</td>
                <td className="px-4 py-3">Facebook posts, LinkedIn images, Twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Who Uses Batch Image Resizing?</h2>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-text-muted">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">E-commerce sellers</strong> — resize 10 product
              photos to 2048×2048 for Shopify or WooCommerce in one pass instead of editing each
              image separately in Photoshop.
            </span>
          </li>
          <li className="flex gap-3 text-sm text-text-muted">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Photographers and agencies</strong> — deliver a
              full shoot at web-optimized sizes without opening each image in editing software.
              Scale down 48MP raw exports to 1920px max width for client review galleries.
            </span>
          </li>
          <li className="flex gap-3 text-sm text-text-muted">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Bloggers and content creators</strong> — compress
              all article images to a consistent width before uploading to WordPress, Ghost, or
              Webflow. Faster page loads, better Core Web Vitals scores.
            </span>
          </li>
          <li className="flex gap-3 text-sm text-text-muted">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Social media managers</strong> — resize a batch of
              images for a carousel post or content calendar to meet platform requirements in
              seconds.
            </span>
          </li>
          <li className="flex gap-3 text-sm text-text-muted">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Developers</strong> — resize UI screenshots and
              design assets to match documentation or README specs without leaving the browser.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Batch Resize in Browser Beats Desktop Apps
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Traditional batch resize tools — Photoshop actions, GIMP scripts, ImageMagick — require
          installation, configuration, and often a learning curve. This browser-based resizer works
          instantly: no install, no sign-up, and no files uploaded to a third-party server.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Processing happens using the browser&apos;s native Canvas API, which is fast enough to
          resize a batch of 10 images in well under a minute on any modern device. The output uses
          high-quality bicubic-equivalent scaling (imageSmoothingQuality: high), so edges and
          details are preserved even when scaling down dramatically.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For teams or individuals who resize images regularly but don&apos;t want to pay for or
          maintain desktop software, a browser-based tool is the fastest path from original to
          resized.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Practices for Batch Resizing</h2>
        <ul className="space-y-2 text-sm text-text-muted leading-relaxed">
          <li>
            <strong className="text-text-main">Use Max Width for web images.</strong> Platforms like
            WordPress and Shopify handle responsive image delivery, so you need to supply the
            largest size you will display — typically 1920px or 2048px.
          </li>
          <li>
            <strong className="text-text-main">Use Percentage for camera exports.</strong> Modern
            smartphone cameras produce 4032×3024 or 8064×6048 images. A 50% reduction brings these
            to 2016×1512 — still high resolution but half the file count overhead.
          </li>
          <li>
            <strong className="text-text-main">Use Exact Size for social media batches.</strong>{' '}
            When you need every image at the same canvas (1080×1080 for Instagram, 1280×720 for
            YouTube), Exact Size guarantees uniform output.
          </li>
          <li>
            <strong className="text-text-main">Resize then compress for maximum savings.</strong>{' '}
            After resizing, run images through the{' '}
            <Link href="/compress-image" className="text-primary underline">
              image compressor
            </Link>{' '}
            to reduce file size further without losing visible quality.
          </li>
          <li>
            <strong className="text-text-main">Keep originals.</strong> Resizing is destructive —
            you cannot recover pixels once an image is scaled down. Always keep the originals in a
            backup folder before batch processing.
          </li>
        </ul>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-2">
        <h2 className="text-base font-bold text-text-main">
          Privacy — All Processing Happens Locally
        </h2>
        <p className="text-sm text-text-muted leading-relaxed">
          Your images never leave your device. This tool runs entirely in your browser using
          JavaScript and the HTML5 Canvas API — there is no server, no cloud storage, and no account
          required. When you close the tab, nothing is retained. This is particularly important when
          batch processing photos that contain sensitive content, faces, documents, or confidential
          product imagery.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/resize-image/', label: 'Resize Single Image', desc: 'Pixel-precise control' },
            {
              href: '/compress-images/',
              label: 'Batch Compress Images',
              desc: 'Reduce file size in bulk',
            },
            { href: '/compress-image/', label: 'Compress Image', desc: 'Single image compression' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            { href: '/webp-converter/', label: 'WebP Converter', desc: 'Convert to/from WebP' },
            {
              href: '/blog/how-to-compress-images-for-wordpress/',
              label: 'WordPress Image Guide',
              desc: 'Optimize for page speed',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-surface border border-border rounded-xl p-3 hover:border-primary transition-colors duration-150 group"
            >
              <p className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <dl className="space-y-2">
          {[
            {
              question: 'How many images can I batch resize at once?',
              answer:
                'Up to 10 images per batch. After downloading, click "Resize more" to upload and process the next set of images.',
            },
            {
              question: 'Is there a file size limit per image?',
              answer:
                'Each image can be up to 20MB. Very large files (48MP iPhone 15 Pro Max images can exceed 25MB HEIC) should be converted to JPG first using the HEIC to JPG converter, then batch resized.',
            },
            {
              question: 'Are my images uploaded to a server?',
              answer:
                'No. All resizing runs 100% in your browser using the HTML5 Canvas API. Your images never leave your device and are never stored on any server.',
            },
            {
              question: 'Can I resize images of different formats together?',
              answer:
                'Yes. You can mix JPG, PNG, WebP, and HEIC files in the same batch. Each file is processed independently and output in its original format (HEIC is converted to JPEG).',
            },
            {
              question: 'Will the output keep the original file format?',
              answer:
                'Yes. JPG stays JPG, PNG stays PNG, WebP stays WebP. HEIC files are automatically converted to JPEG since HEIC is not a web-supported format.',
            },
            {
              question: 'Can I batch convert HEIC and resize at the same time?',
              answer:
                'Yes. Upload your HEIC files and they will be automatically converted to JPEG and resized in a single step. The output ZIP will contain .jpg files.',
            },
            {
              question: 'Can I batch resize to a specific KB size?',
              answer:
                'Not directly — this tool resizes by pixel dimensions. To resize images to a target file size (e.g., under 100KB), use the Compress Image tool after resizing, or try our dedicated resize-in-KB tool for exact file size control.',
            },
            {
              question: 'How do I keep the aspect ratio for all images?',
              answer:
                'Use Max Width or Percentage mode — both automatically preserve the aspect ratio of each image. Exact Size mode does not preserve aspect ratio since all images are forced to the same canvas dimensions.',
            },
            {
              question: 'Can I download all resized images as a ZIP?',
              answer:
                'Yes. Once all images are resized, a "Download All as ZIP" button appears. The ZIP is generated entirely in your browser using JSZip — no server needed.',
            },
            {
              question: 'Does it work on mobile or tablet?',
              answer:
                'Yes. The tool is optimized for iOS Safari and Android Chrome. Tap to select images from your gallery. Processing may be slightly slower on older devices due to JavaScript-based canvas operations.',
            },
            {
              question: 'Why is the batch slow on my old laptop?',
              answer:
                'Browser-based Canvas processing uses the device CPU. Older laptops with slower processors will take longer, especially for large images (8MP+). Resizing 10 images at 1920px max width typically takes 5–15 seconds on a modern machine.',
            },
            {
              question: 'Can I use this for Shopify or WooCommerce product images?',
              answer:
                "Yes. Use Exact Size mode at 2048×2048 for Shopify (recommended product image size). For WooCommerce, the recommended size is typically 800×800 or your theme's specific product image dimensions.",
            },
          ].map(({ question, answer }) => (
            <FAQItem key={question} question={question} answer={answer} />
          ))}
        </dl>
      </div>
    </section>
  )
}
