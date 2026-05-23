import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForWixContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for Wix"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Image Size Slows Down Your Wix Site
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Wix uses an image CDN (powered by Imagekit) to resize photos to the correct display
          dimensions — but it does not reduce the file size of the original image you upload. If you
          upload a 6MB background photo, Wix still stores 6MB and processes it on every first
          request for a new display size. The result: slow initial page loads, slow Wix Editor media
          uploads, and a low Google PageSpeed score.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Google ranks Wix sites based on Core Web Vitals — specifically LCP (Largest Contentful
          Paint), which is almost always the hero banner or first visible image. A hero image over
          600KB routinely causes LCP above 4 seconds on mobile, dropping your site from the top page
          of search results. Compressing images to under 500KB before uploading is the single
          highest-impact change you can make to a slow Wix site.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Wix Image Size Recommendations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Page element</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Recommended px</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Target size</th>
                <th className="text-left py-2 font-semibold text-text-main">Quality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">Background / hero</td>
                <td className="py-2 pr-4">1920×1080px</td>
                <td className="py-2 pr-4">&lt; 500KB</td>
                <td className="py-2">80–82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Blog post image</td>
                <td className="py-2 pr-4">940×480px</td>
                <td className="py-2 pr-4">&lt; 250KB</td>
                <td className="py-2">82–85</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Product image</td>
                <td className="py-2 pr-4">800–1500×800–1500px</td>
                <td className="py-2 pr-4">&lt; 400KB</td>
                <td className="py-2">82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Gallery image</td>
                <td className="py-2 pr-4">1000×1000px</td>
                <td className="py-2 pr-4">&lt; 300KB</td>
                <td className="py-2">82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Portfolio image</td>
                <td className="py-2 pr-4">1500×1000px</td>
                <td className="py-2 pr-4">&lt; 450KB</td>
                <td className="py-2">80–82</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Team / about photo</td>
                <td className="py-2 pr-4">600×600px</td>
                <td className="py-2 pr-4">&lt; 150KB</td>
                <td className="py-2">82–85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted">
          At quality 82, a 1920×1080px JPEG compresses to 200–450KB for most photo types. Blog
          thumbnails at 940×480px compress to 80–200KB — well under the 250KB target.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Wix — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard. Accepts JPG, PNG,
                WebP, and HEIC up to 20MB. For very large images (4000px+), consider resizing to
                1920px wide using the{' '}
                <Link href="/resize-image/" className="text-primary hover:underline">
                  Resize Image
                </Link>{' '}
                tool first.
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
                Quality 82 is the recommended starting point. A 1920×1080px JPEG at quality 82
                compresses to 200–450KB. For hero banners, aim for under 400KB — try quality 78 if
                over 400KB. Blog thumbnails at 940×480px are typically 80–200KB at quality 82.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download and upload to Wix</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Download the compressed file. In Wix Editor, click the image element → Change Image
                → Upload Media → select the compressed file. For Wix Stores, go to the product →
                Media → Replace. Your page will load faster immediately.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Wix Lightspeed and Image Optimization</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Wix Lightspeed is Wix&apos;s performance infrastructure — it includes lazy loading, image
          format conversion, and CDN delivery. Lightspeed automatically converts images to WebP
          format when the browser supports it, which gives a 25–35% size reduction compared to JPEG.
          However, Lightspeed cannot reduce file size below what&apos;s in the original source file
          — if you upload a 5MB JPEG, even after WebP conversion the output may still be 1MB+.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For best results with Wix Lightspeed: upload JPEG images already compressed to under
          500KB. Lightspeed will then convert to WebP for modern browsers, resulting in a delivered
          file size of 300–400KB — fast enough for LCP under 2.5 seconds on mobile 4G.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Hero banner (above fold)',
              detail:
                'Most critical for LCP. Compress to under 400KB at 1920×600px. This single image determines your PageSpeed score more than anything else.',
            },
            {
              name: 'Gallery images',
              detail:
                'Wix lazy-loads gallery images — below-fold images can be 400–500KB without hurting LCP. But smaller is always faster.',
            },
            {
              name: 'Blog thumbnails',
              detail:
                'Appear on the blog index page — multiple thumbnails loaded at once. Target under 200KB at 940×480px for fast blog index loading.',
            },
            {
              name: 'Wix Stores product photos',
              detail:
                'Wix renders a zoom viewer for products. Use 1500×1500px at quality 82, under 400KB — sharp enough for zoom, fast enough for mobile.',
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
          All compression runs entirely in your browser. Your website photos, product images, and
          portfolio work are never uploaded to any server. Free with no limits, no account required.
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
              desc: 'Web-optimized photos',
            },
            {
              href: '/compress-image-for-shopify/',
              label: 'For Shopify',
              desc: 'Shopify product photos',
            },
            {
              href: '/compress-image-for-squarespace/',
              label: 'For Squarespace',
              desc: 'Squarespace image guide',
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
          Frequently Asked Questions About Wix Image Compression
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is the maximum image size for Wix?',
              a: 'Wix allows images up to 25MB. But maximum is not optimal — for fast loading, keep images under 500KB. Full-width backgrounds under 500KB at 1920×1080px, blog thumbnails under 250KB at 940×480px, product images under 400KB at 1500×1500px.',
            },
            {
              q: 'Why is my Wix site slow on mobile?',
              a: 'The most common cause is large images — specifically the hero banner above the fold. If your hero image is over 1MB, it will cause LCP above 4 seconds on mobile, which Google penalizes in search ranking. Compress the hero to under 400KB at 1920×1080px and retest with PageSpeed Insights.',
            },
            {
              q: 'Does Wix optimize images automatically?',
              a: 'Wix Lightspeed converts images to WebP for modern browsers and resizes them to the correct display size. But it cannot reduce the file size below the original — if you upload a 5MB JPEG, even WebP conversion may leave a 1–2MB delivered file. Upload JPEG images already compressed to under 500KB for best results.',
            },
            {
              q: 'How do I improve my Wix PageSpeed score?',
              a: 'Images are the biggest lever. Compress all above-fold images to under 400KB — especially the hero banner. For product galleries and portfolio pages, compress each image to under 400KB. Run PageSpeed Insights before and after — image optimization typically improves mobile scores by 10–25 points.',
            },
            {
              q: 'What image format is best for Wix?',
              a: 'JPEG for photos (backgrounds, products, blog posts) — best compression ratio at quality 80–85. PNG for logos and transparent graphics. WebP is supported by Wix and all modern browsers and gives 25–35% smaller files at the same quality — ideal if you want maximum performance.',
            },
            {
              q: 'Can I use PNG images on Wix?',
              a: 'Yes — Wix accepts PNG, JPEG, WebP, GIF, and SVG. Use PNG for logos, icons, and images that require a transparent background. For product photos and backgrounds, JPEG is smaller — a 1920×1080px PNG can be 3–8MB, while the same image as JPEG at quality 82 is 200–450KB.',
            },
            {
              q: 'Will compressing images affect quality on Wix?',
              a: 'At quality 80–85, JPEG compression is virtually invisible at normal viewing sizes. Wix Lightspeed also applies its own optimization on top of your compressed file — so what the visitor sees is already optimized. Only lower below 75 if still over your target size.',
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
