import Link from 'next/link'

export default function CompressImagesForEtsy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav
        className="text-xs text-text-muted mb-8 flex items-center gap-1.5"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-main">Compress Images for Etsy</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-24">May 24, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Compress Images for Etsy — Listing Photo Best Practices
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Etsy accepts up to 10 photos per listing and processes them all on their servers. But
            uploading large, uncompressed images causes slow upload times, processing delays, and
            thumbnails that look different than you expect. Here is how to prepare Etsy listing
            photos for fast uploads and sharp results.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Etsy Image Requirements (2026)</h2>
            <div className="space-y-3 text-sm">
              {[
                { label: 'Maximum images per listing', value: '10 photos' },
                { label: 'Minimum recommended size', value: '2000 × 2000 px (for zoom)' },
                {
                  label: 'Maximum file size per image',
                  value: 'No stated limit, but < 1 MB recommended for fast upload',
                },
                { label: 'Accepted formats', value: 'JPEG, PNG, GIF (no WebP, no HEIC)' },
                {
                  label: 'Recommended aspect ratio',
                  value: 'Square (1:1) — displays consistently in search results',
                },
                {
                  label: 'Thumbnail crop',
                  value: 'Center crop — position subject in center for consistent thumbnails',
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 border border-border rounded-lg p-3"
                >
                  <span className="text-text-muted flex-1">{label}</span>
                  <span className="font-medium text-text-main text-right">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Why Etsy Listing Photos Should Be Compressed
            </h2>
            <p>
              Etsy does process your uploaded images — it generates multiple size variants for
              different display contexts. However, the processing quality and speed depend on what
              you upload:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">Upload speed</strong> — A 10-image listing with 8
                MB photos each means 80 MB of uploads. At a typical home connection, this takes 1–3
                minutes. Compressed photos at 500 KB each upload in seconds.
              </li>
              <li>
                <strong className="text-text-main">Thumbnail quality</strong> — Etsy generates its
                own compressed thumbnail from your upload. If your source is already heavily
                compressed or too small, the Etsy thumbnail will show compression artifacts. The
                goal is to upload a high-quality source that Etsy can generate a clean thumbnail
                from — not to upload the raw 12 MB original.
              </li>
              <li>
                <strong className="text-text-main">Buyer browsing experience</strong> — Etsy listing
                images load for buyers as they browse search results and scroll through listings.
                Faster-loading listing pages keep buyers engaged.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Recommended Compression Settings for Etsy</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Image type</th>
                    <th className="text-left p-3 border border-border font-semibold">Dimensions</th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Target size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">Quality</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: 'Main listing photo (first)',
                      dims: '2000 × 2000 px',
                      target: '< 800 KB',
                      q: '85',
                    },
                    {
                      type: 'Additional product shots',
                      dims: '2000 × 2000 px',
                      target: '< 600 KB',
                      q: '82',
                    },
                    {
                      type: 'Detail / close-up shots',
                      dims: '2000 × 2000 px',
                      target: '< 500 KB',
                      q: '80',
                    },
                    {
                      type: 'Lifestyle / in-use photos',
                      dims: '2000 × 1333 px',
                      target: '< 600 KB',
                      q: '80',
                    },
                    {
                      type: 'Size chart / measurements',
                      dims: '1200 × 900 px',
                      target: '< 300 KB',
                      q: '80',
                    },
                    {
                      type: 'Packaging / shipping photos',
                      dims: '2000 × 2000 px',
                      target: '< 500 KB',
                      q: '80',
                    },
                  ].map(({ type, dims, target, q }, i) => (
                    <tr key={type} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border">{type}</td>
                      <td className="p-3 border border-border text-text-muted">{dims}</td>
                      <td className="p-3 border border-border text-green-600 font-medium">
                        {target}
                      </td>
                      <td className="p-3 border border-border text-text-muted">Q{q}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Step-by-Step: Compressing Etsy Photos</h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Export or take your photo at full quality',
                  desc: 'Start from the original — whether from your camera, DSLR, or phone. Do not compress a compressed file, as that stacks quality loss.',
                },
                {
                  step: '2',
                  title: 'Crop to square if needed',
                  desc: 'Etsy displays listing thumbnails as squares. Crop your main photo to 1:1 ratio before compressing so the subject is centered. Use the crop tool if your original is landscape or portrait.',
                },
                {
                  step: '3',
                  title: 'Compress at compressimg.pro',
                  desc: 'Upload to compressimg.pro, set quality to 82–85 for the main listing photo, 80 for additional shots. Check the output file size before downloading.',
                },
                {
                  step: '4',
                  title: 'Name files descriptively',
                  desc: 'Rename before uploading: "handmade-ceramic-mug-blue-glaze-front.jpg" instead of "IMG_5432.jpg". Etsy uses file names in image SEO.',
                },
                {
                  step: '5',
                  title: 'Upload in order — first photo is the thumbnail',
                  desc: 'The first photo you upload becomes the main listing thumbnail shown in search results. Make it the most compelling, cleanly cropped image.',
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 border border-border rounded-xl p-5">
                  <span className="text-2xl font-bold text-primary flex-shrink-0 w-8">{step}</span>
                  <div>
                    <p className="font-semibold text-text-main mb-1">{title}</p>
                    <p className="text-text-muted text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Thumbnail Optimization Tips</h2>
            <p>
              The Etsy search results page shows listing photos at roughly 340 × 270 pixels
              (desktop) — a very small display size compared to your 2000 × 2000 source. What looks
              good at full size may not stand out as a thumbnail.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              {[
                {
                  tip: 'Center the subject',
                  desc: 'Etsy crops thumbnails from the center of your image. Keep the main subject in the center 60% of the frame.',
                },
                {
                  tip: 'High contrast backgrounds',
                  desc: 'White, off-white, and light gray backgrounds make products stand out in crowded search results. Dark products on dark backgrounds disappear as thumbnails.',
                },
                {
                  tip: 'Single product focus',
                  desc: 'The thumbnail is too small to show multiple items clearly. Make the first photo a single, clear, well-lit product shot.',
                },
                {
                  tip: 'Avoid text on the first photo',
                  desc: 'Text overlays on the main photo are often unreadable at thumbnail size. Use text only on additional photos (size charts, detail shots).',
                },
                {
                  tip: 'Test at thumbnail size',
                  desc: 'Before uploading, zoom out to see your photo at roughly 340px width. If the product is not immediately clear, recrop.',
                },
              ].map(({ tip, desc }) => (
                <div key={tip} className="border border-border rounded-xl p-4">
                  <p className="font-semibold text-text-main mb-1">{tip}</p>
                  <p className="text-text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Does Etsy Accept WebP?</h2>
            <p>
              As of 2026, Etsy accepts JPEG, PNG, and GIF formats for listing photos. WebP is not
              yet accepted as an upload format. Upload JPEG for product photos — it is universally
              accepted and produces the best results for photographic content.
            </p>
            <p className="mt-3">
              If you have WebP images, convert them to JPEG before uploading:{' '}
              <Link href="/webp-to-jpg" className="text-primary hover:underline">
                WebP to JPG converter
              </Link>{' '}
              — free, browser-based.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/compress-image" className="text-primary hover:underline">
                  Compress image
                </Link>{' '}
                — compress Etsy photos before upload
              </li>
              <li>
                <Link href="/compress-images" className="text-primary hover:underline">
                  Batch compress images
                </Link>{' '}
                — compress up to 5 listing photos at once
              </li>
              <li>
                <Link href="/resize-image" className="text-primary hover:underline">
                  Resize image
                </Link>{' '}
                — resize to 2000 × 2000 px for Etsy
              </li>
              <li>
                <Link href="/webp-to-jpg" className="text-primary hover:underline">
                  WebP to JPG
                </Link>{' '}
                — convert WebP to JPEG for Etsy upload
              </li>
              <li>
                <Link href="/compress-images-for-shopify" className="text-primary hover:underline">
                  Compress images for Shopify
                </Link>{' '}
                — similar guide for Shopify stores
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What is the best image size for Etsy listings?',
                  a: "2000 × 2000 pixels at a 1:1 square ratio is the recommended size for Etsy listing photos. This is large enough for Etsy's zoom feature and ensures high-quality thumbnails in search results. Compress to under 800 KB before uploading.",
                },
                {
                  q: 'What file format should I use for Etsy photos?',
                  a: 'JPEG (JPG) is the recommended format for product photos on Etsy. It provides good quality with smaller file sizes compared to PNG. Use PNG only for images with transparent backgrounds. Note: Etsy does not currently accept WebP.',
                },
                {
                  q: 'How do I make photos smaller for Etsy?',
                  a: 'Upload your photo to compressimg.pro, set quality to 82–85, and download the compressed version. For a typical 8 MP product photo, this reduces file size from 5–8 MB to 400–700 KB with no visible quality change.',
                },
                {
                  q: 'Does Etsy compress photos after upload?',
                  a: 'Yes. Etsy generates multiple size variants from your uploaded source image. However, compression quality improves when you upload a well-prepared source. Avoid uploading already heavily compressed images — Etsy will re-compress them, adding another generation of quality loss.',
                },
                {
                  q: 'Why do my Etsy photos look blurry?',
                  a: 'Blurry listing photos are usually caused by uploading images that are too small (under 1000 px), too heavily compressed before upload, or images with low original quality. Upload at 2000 × 2000 px from a sharp original at quality 82–85.',
                },
                {
                  q: 'How many photos can I upload to an Etsy listing?',
                  a: 'Etsy allows up to 10 photos per listing. Use all 10 slots — listings with more photos typically have higher click-through rates. Include product shots from multiple angles, a lifestyle photo, detail shots, size references, and packaging.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-text-main mb-2">{q}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
