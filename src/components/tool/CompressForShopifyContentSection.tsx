import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForShopifyContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Shopify"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Shopify Store Speed Depends on Image Size
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Images account for 60–80% of a typical Shopify store&apos;s page weight. A product page
          with 5 uncompressed 4MB photos takes 10+ seconds to load on mobile — Google PageSpeed
          penalizes anything over 2.5 seconds LCP (Largest Contentful Paint) and ranks slower stores
          lower in search results. Every 1-second delay in page load reduces conversions by 7%,
          according to industry data. For a Shopify store doing $10,000/month, that&apos;s $700 in
          lost revenue per second of slowdown.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Shopify&apos;s CDN resizes images to the correct display dimensions automatically — but it
          does not aggressively compress the original file. If you upload a 5MB product photo,
          Shopify stores 5MB and processes it each time a new size variant is requested. Uploading
          images already compressed to under 500KB means faster uploads in Shopify admin, lower CDN
          bandwidth costs, and faster initial loads when Google&apos;s bot crawls your pages for
          ranking.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Shopify Image Requirements by Type</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Shopify accepts JPG, PNG, WebP, GIF, and SVG — maximum 20MB per file. But maximum allowed
          is not the same as recommended for performance. Use these targets:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Image type</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Recommended px</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Target size</th>
                <th className="text-left py-2 font-semibold text-text-main">Quality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">Product image</td>
                <td className="py-2 pr-4">2048×2048px</td>
                <td className="py-2 pr-4">&lt; 500KB</td>
                <td className="py-2">80–85</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Collection image</td>
                <td className="py-2 pr-4">1024×1024px</td>
                <td className="py-2 pr-4">&lt; 300KB</td>
                <td className="py-2">82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Hero / banner</td>
                <td className="py-2 pr-4">1920×600px</td>
                <td className="py-2 pr-4">&lt; 400KB</td>
                <td className="py-2">80–82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Blog post image</td>
                <td className="py-2 pr-4">1920×1080px</td>
                <td className="py-2 pr-4">&lt; 400KB</td>
                <td className="py-2">82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Logo</td>
                <td className="py-2 pr-4">400×200px</td>
                <td className="py-2 pr-4">&lt; 50KB</td>
                <td className="py-2">PNG (transparent)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted">
          At quality 82, a 2048×2048px product JPEG compresses to 250–500KB for most product types —
          sharp enough for zoom, fast enough for mobile.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Shopify — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your product image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard. Accepts JPG, PNG,
                WebP, and HEIC up to 20MB. For DSLR exports, export as JPEG first from Lightroom or
                Photoshop at 2048×2048px before uploading here.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 80–85</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 82 is the recommended starting point for Shopify product photos. At quality
                82, a 2048×2048px JPEG compresses to 250–500KB for most product types — visually
                indistinguishable from the original at zoom level. Check the result card for exact
                output size. If over 500KB, try quality 78.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download and upload to Shopify</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Download the compressed file. In Shopify admin, go to Products → select product →
                Images → Add image. Upload the compressed file. Your product page will load faster
                and your PageSpeed Insights score will improve.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Format Should Shopify Product Images Be?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              format: 'JPEG',
              badge: 'Best for most photos',
              detail:
                'Smallest file size for product photos at quality 80–85. Supported everywhere. Use for product images, lifestyle shots, and backgrounds.',
            },
            {
              format: 'PNG',
              badge: 'Use for transparency',
              detail:
                'Required for logos, icons, and images with transparent backgrounds. File sizes are larger — compress further by converting to JPEG if transparency is not needed.',
            },
            {
              format: 'WebP',
              badge: '25–35% smaller than JPEG',
              detail:
                "Shopify's CDN and all modern browsers support WebP. Produces files 25–35% smaller than JPEG at the same visual quality — best choice for performance-focused stores.",
            },
          ].map(({ format, badge, detail }) => (
            <div key={format} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{format}</p>
              <p className="text-primary text-xs mt-0.5">{badge}</p>
              <p className="text-text-muted text-xs mt-1">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Common Shopify Image Optimization Mistakes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Uploading uncompressed DSLR exports',
              detail:
                'A 24MP DSLR JPEG is 8–20MB. Compress to under 500KB before uploading — Shopify does not compress your source file.',
            },
            {
              name: 'Using PNG for product photos',
              detail:
                'PNG product photos are 3–10x larger than JPEG at the same quality. Switch to JPEG unless you need a transparent background.',
            },
            {
              name: 'Uploading 6000×4000px originals',
              detail:
                'Shopify caps display at 4472×4472px and serves smaller sizes via CDN. Upload at 2048×2048px to reduce storage and processing time.',
            },
            {
              name: 'Hero banner over 1MB',
              detail:
                'The hero banner is usually the LCP element — the biggest factor in PageSpeed score. Compress to under 400KB for best LCP.',
            },
            {
              name: 'Not checking mobile PageSpeed',
              detail:
                'Google ranks based on mobile performance. Run PageSpeed Insights on your Shopify store URL and check the mobile score — images over 500KB appear in the "Opportunities" list.',
            },
            {
              name: 'Ignoring collection images',
              detail:
                'Collection images appear on category pages and search results — high traffic, high importance. Compress to under 300KB at 1024×1024px.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs entirely in your browser. Your product photos, unreleased SKUs, and
          marketing images are never uploaded to any server. Free with no limits, no account
          required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Any format, any size',
            },
            {
              href: '/resize-image/',
              label: 'Resize Image',
              desc: 'Change pixel dimensions',
            },
            {
              href: '/compress-image-to-500kb/',
              label: 'Compress to 500KB',
              desc: 'High-quality web photos',
            },
            {
              href: '/compress-image-for-squarespace/',
              label: 'For Squarespace',
              desc: 'Squarespace image guide',
            },
            {
              href: '/compress-image-for-wix/',
              label: 'For Wix',
              desc: 'Wix image guide',
            },
            {
              href: '/jpg-to-webp/',
              label: 'JPG to WebP',
              desc: '25–35% smaller than JPG',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-border bg-surface p-3 hover:border-primary/40 transition-colors"
            >
              <p className="font-semibold text-text-main text-xs">{label}</p>
              <p className="text-text-muted text-xs mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          Frequently Asked Questions About Shopify Image Compression
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is the best image size for Shopify product photos?',
              a: '2048×2048px JPEG at quality 82, under 500KB. Square format works across all Shopify themes — landscape photos may appear cropped on collection pages. Keep file size under 500KB for product images and under 300KB for collection thumbnails.',
            },
            {
              q: 'How do I make my Shopify store load faster with images?',
              a: 'Compress all product images to under 500KB at quality 80–85. Compress hero banners to under 400KB. Use JPEG for photos, PNG only for logos. If your store has a PageSpeed score below 50 on mobile, images are almost certainly the primary cause.',
            },
            {
              q: 'Does Shopify have an image size limit?',
              a: 'Yes — Shopify accepts images up to 20MB and up to 4472×4472px. But these are maximum allowed sizes, not recommended. Upload at 2048×2048px and under 500KB for best performance. Larger files slow down uploads in Shopify admin and increase CDN processing time.',
            },
            {
              q: 'Should I use JPEG or WebP for Shopify?',
              a: "JPEG for safety and compatibility — works in all browsers and email. WebP for maximum performance — 25–35% smaller at the same quality, supported by all major browsers and Shopify's CDN. If you have a performance-focused theme and your customers use modern browsers, WebP is the better choice.",
            },
            {
              q: 'Why is my Shopify store slow after I compressed images?',
              a: 'Images are just one factor. A slow Shopify store may also be caused by: too many third-party apps (each adds JavaScript), a heavy theme (many themes have 500KB+ of JavaScript), unoptimized fonts, or too many tracking pixels. Run PageSpeed Insights to see which "Opportunities" are listed after fixing images.',
            },
            {
              q: 'Can I bulk compress Shopify product images?',
              a: 'This tool compresses one image at a time. For bulk compression of a large product catalog, consider running all images through a desktop batch tool first, then uploading the compressed files to Shopify admin.',
            },
            {
              q: 'Will compressing product images affect zoom quality in Shopify?',
              a: 'At quality 82, JPEG compression is virtually invisible — product details, fabric texture, and colors look accurate at zoom level. Only if you lower quality below 70 will zoom artifacts become visible. Quality 80–85 is the standard used by major ecommerce photography studios.',
            },
            {
              q: 'Is this tool free and private?',
              a: 'Yes — completely free with no limits. All compression runs in your browser; images never leave your device. No sign-up required.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
